import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { isDbConfigured } from '@/lib/db'
import { getStudentSummary, getFunnel, getQuizStats, getTotals } from '@/lib/db/queries'
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

function fmt(d: string | null) {
  if (!d) return '—'
  return new Date(d).toLocaleDateString('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
  })
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

  const [totals, students, funnel, quizStats] = await Promise.all([
    getTotals(),
    getStudentSummary(),
    getFunnel(),
    getQuizStats(),
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
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Студентов', value: totals.students },
          { label: 'Активны за 7 дней', value: totals.activeWeek },
          { label: 'Квизов пройдено', value: totals.quizzes },
          { label: 'Средний балл', value: totals.avgPct != null ? `${totals.avgPct}%` : '—' },
        ].map((s) => (
          <div key={s.label} className="rounded-xl border bg-card p-5">
            <div className="text-3xl font-bold">{s.value}</div>
            <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
          </div>
        ))}
      </section>

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
                  <th className="p-3 font-medium">Частей</th>
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
                    <td className="p-3">{s.partsOpened}</td>
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
                    <td className="p-3 text-xs text-muted-foreground">{fmt(s.lastSeenAt)}</td>
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
        {funnel.length === 0 ? (
          <p className="text-sm text-muted-foreground">Нет данных.</p>
        ) : (
          <div className="rounded-xl border p-5 space-y-2">
            {funnel.map((f) => (
              <div key={f.meetingId} className="flex items-center gap-3">
                <div className="w-40 text-xs text-muted-foreground shrink-0">{f.meetingId}</div>
                <div className="flex-1 h-5 bg-muted rounded overflow-hidden">
                  <div
                    className="h-full bg-primary/70"
                    style={{ width: `${(f.studentsReached / maxReach) * 100}%` }}
                  />
                </div>
                <div className="w-10 text-right text-sm font-medium">{f.studentsReached}</div>
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
