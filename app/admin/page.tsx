import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { isDbConfigured } from '@/lib/db'
import {
  getStudentSummary,
  getFunnel,
  getQuizStats,
  getTotals,
  getLessonTime,
  engagementOf,
  engagementLabel,
  STUDIED_MIN,
  type Engagement,
} from '@/lib/db/queries'
import { AuthNotConfigured, authEnabled } from '@/components/ui/auth-not-configured'

export const dynamic = 'force-dynamic'

/** Доступ по списку почт в ADMIN_EMAILS (через запятую) */
async function assertAdmin() {
  const user = await currentUser()
  if (!user) redirect('/sign-in')

  const allow = (process.env.ADMIN_EMAILS ?? '')
    .split(',')
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean)

  const email = user.primaryEmailAddress?.emailAddress?.toLowerCase()
  if (allow.length === 0 || !email || !allow.includes(email)) {
    redirect('/')
  }
}

function fmtDate(d: string | null) {
  if (!d) return '—'
  return new Date(d).toLocaleDateString('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
  })
}

/** 95 → «1 мин», 4500 → «1 ч 15 мин» */
function fmtDuration(seconds: number) {
  if (!seconds) return '—'
  if (seconds < 60) return `${seconds} сек`
  const m = Math.round(seconds / 60)
  if (m < 60) return `${m} мин`
  const h = Math.floor(m / 60)
  const rest = m % 60
  return rest ? `${h} ч ${rest} мин` : `${h} ч`
}

const engagementStyle: Record<Engagement, string> = {
  skim: 'bg-slate-100 text-slate-600',
  active: 'bg-emerald-100 text-emerald-700',
  away: 'bg-amber-100 text-amber-700',
  stuck: 'bg-rose-100 text-rose-700',
}

function EngagementBadge({ seconds }: { seconds: number }) {
  const e = engagementOf(seconds)
  return (
    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${engagementStyle[e]}`}>
      {engagementLabel[e]}
    </span>
  )
}

export default async function AdminPage() {
  if (!authEnabled()) return <AuthNotConfigured what="Дашборд" />
  await assertAdmin()

  if (!isDbConfigured()) {
    return (
      <main className="max-w-3xl mx-auto p-8">
        <h1 className="text-2xl font-bold mb-2">Аналитика курса</h1>
        <p className="text-muted-foreground">
          База данных не подключена — задай <code>POSTGRES_URL</code> в переменных окружения.
        </p>
      </main>
    )
  }

  const [totals, students, funnel, quizStats, lessonTime] = await Promise.all([
    getTotals(),
    getStudentSummary(),
    getFunnel(),
    getQuizStats(),
    getLessonTime(),
  ])

  const maxReach = Math.max(1, ...funnel.map((f) => f.studentsReached))

  return (
    <main className="max-w-6xl mx-auto p-6 md:p-10 space-y-10">
      <header>
        <h1 className="text-3xl font-bold">Аналитика курса</h1>
        <p className="text-muted-foreground text-sm mt-1">
          Кто учится, как продвигается и где буксует
        </p>
      </header>

      {/* Сводка */}
      <section className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {[
          { label: 'Студентов', value: totals.students },
          { label: 'Активны за 7 дней', value: totals.activeWeek },
          { label: 'Уроков изучено', value: totals.partsStudied },
          { label: 'Времени всего', value: fmtDuration(totals.secondsTotal) },
          { label: 'Средний балл', value: totals.avgPct != null ? `${totals.avgPct}%` : '—' },
        ].map((s) => (
          <div key={s.label} className="rounded-xl border bg-card p-5">
            <div className="text-2xl font-bold">{s.value}</div>
            <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
          </div>
        ))}
      </section>

      <p className="text-xs text-muted-foreground -mt-6">
        «Изучено» — урок, на котором студент провёл не меньше {Math.round(STUDIED_MIN / 60)} мин.
        Простое открытие страницы прогрессом не считается. Время идёт только при активной
        вкладке.
      </p>

      {/* Студенты */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Студенты</h2>
        {students.length === 0 ? (
          <p className="text-sm text-muted-foreground">Пока никто не заходил.</p>
        ) : (
          <div className="overflow-x-auto rounded-xl border">
            <table className="w-full text-sm">
              <thead className="bg-muted/50 text-left">
                <tr>
                  <th className="p-3 font-medium">Студент</th>
                  <th className="p-3 font-medium">Встреч</th>
                  <th className="p-3 font-medium">Изучено / открыто</th>
                  <th className="p-3 font-medium">Время</th>
                  <th className="p-3 font-medium">Квизов</th>
                  <th className="p-3 font-medium">Ср. балл</th>
                  <th className="p-3 font-medium">Последняя</th>
                  <th className="p-3 font-medium">Активность</th>
                </tr>
              </thead>
              <tbody>
                {students.map((s) => (
                  <tr key={s.clerkId} className="border-t">
                    <td className="p-3">
                      <div className="font-medium">{s.name ?? '—'}</div>
                      <div className="text-xs text-muted-foreground">{s.email ?? s.clerkId}</div>
                    </td>
                    <td className="p-3">{s.meetingsTouched}</td>
                    <td className="p-3">
                      <span className="font-medium">{s.partsStudied}</span>
                      <span className="text-muted-foreground"> / {s.partsOpened}</span>
                    </td>
                    <td className="p-3">{fmtDuration(s.secondsTotal)}</td>
                    <td className="p-3">{s.quizzesTaken}</td>
                    <td className="p-3">
                      {s.avgPct != null ? (
                        <span
                          className={
                            s.avgPct >= 80
                              ? 'text-emerald-600 font-medium'
                              : s.avgPct >= 50
                                ? 'text-amber-600'
                                : 'text-rose-600'
                          }
                        >
                          {s.avgPct}%
                        </span>
                      ) : (
                        '—'
                      )}
                    </td>
                    <td className="p-3 text-xs text-muted-foreground">{s.bestMeeting ?? '—'}</td>
                    <td className="p-3 text-xs text-muted-foreground">{fmtDate(s.lastSeenAt)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {/* Время на уроках */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Время на уроках</h2>
        <p className="text-xs text-muted-foreground -mt-2">
          Сверху — где просидели дольше всего. Ярлык показывает характер посещения.
        </p>
        {lessonTime.length === 0 ? (
          <p className="text-sm text-muted-foreground">Нет данных.</p>
        ) : (
          <div className="overflow-x-auto rounded-xl border">
            <table className="w-full text-sm">
              <thead className="bg-muted/50 text-left">
                <tr>
                  <th className="p-3 font-medium">Студент</th>
                  <th className="p-3 font-medium">Встреча</th>
                  <th className="p-3 font-medium">Часть</th>
                  <th className="p-3 font-medium">Время</th>
                  <th className="p-3 font-medium">Характер</th>
                  <th className="p-3 font-medium">Заходов</th>
                  <th className="p-3 font-medium">Последний раз</th>
                </tr>
              </thead>
              <tbody>
                {lessonTime.map((r, i) => (
                  <tr key={`${r.email}-${r.meetingId}-${r.partId}-${i}`} className="border-t">
                    <td className="p-3">{r.name ?? r.email ?? '—'}</td>
                    <td className="p-3">{r.meetingId}</td>
                    <td className="p-3 text-muted-foreground">
                      {r.partId && r.partId !== '-' ? r.partId : '—'}
                    </td>
                    <td className="p-3 font-medium">{fmtDuration(r.seconds)}</td>
                    <td className="p-3">
                      <EngagementBadge seconds={r.seconds} />
                    </td>
                    <td className="p-3 text-muted-foreground">{r.views}</td>
                    <td className="p-3 text-xs text-muted-foreground">
                      {fmtDate(r.lastOpenedAt)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {/* Воронка */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Докуда доходят</h2>
        <p className="text-xs text-muted-foreground -mt-2">
          Тёмная часть — реально изучили, светлая — только открывали
        </p>
        {funnel.length === 0 ? (
          <p className="text-sm text-muted-foreground">Нет данных.</p>
        ) : (
          <div className="rounded-xl border p-5 space-y-2">
            {funnel.map((f) => (
              <div key={f.meetingId} className="flex items-center gap-3">
                <div className="w-40 text-xs text-muted-foreground shrink-0">{f.meetingId}</div>
                <div className="flex-1 h-5 bg-muted rounded overflow-hidden relative">
                  <div
                    className="h-full bg-primary/25 absolute inset-y-0 left-0"
                    style={{ width: `${(f.studentsReached / maxReach) * 100}%` }}
                  />
                  <div
                    className="h-full bg-primary absolute inset-y-0 left-0"
                    style={{ width: `${(f.studentsStudied / maxReach) * 100}%` }}
                  />
                </div>
                <div className="w-16 text-right text-sm">
                  <span className="font-medium">{f.studentsStudied}</span>
                  <span className="text-muted-foreground"> / {f.studentsReached}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Сложные квизы */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Самые сложные квизы</h2>
        <p className="text-xs text-muted-foreground -mt-2">
          Отсортированы по возрастанию среднего балла — сверху то, что заходит хуже всего
        </p>
        {quizStats.length === 0 ? (
          <p className="text-sm text-muted-foreground">Нет данных.</p>
        ) : (
          <div className="overflow-x-auto rounded-xl border">
            <table className="w-full text-sm">
              <thead className="bg-muted/50 text-left">
                <tr>
                  <th className="p-3 font-medium">Встреча</th>
                  <th className="p-3 font-medium">Часть</th>
                  <th className="p-3 font-medium">Попыток</th>
                  <th className="p-3 font-medium">Ср. балл</th>
                </tr>
              </thead>
              <tbody>
                {quizStats.map((q, i) => (
                  <tr key={`${q.meetingId}-${q.partId}-${i}`} className="border-t">
                    <td className="p-3">{q.meetingId}</td>
                    <td className="p-3 text-muted-foreground">{q.partId ?? '—'}</td>
                    <td className="p-3">{q.attempts}</td>
                    <td className="p-3">
                      <span
                        className={
                          q.avgPct >= 80
                            ? 'text-emerald-600 font-medium'
                            : q.avgPct >= 50
                              ? 'text-amber-600'
                              : 'text-rose-600 font-medium'
                        }
                      >
                        {q.avgPct}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </main>
  )
}
