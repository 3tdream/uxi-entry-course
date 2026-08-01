import { sql } from 'drizzle-orm'
import { getDb } from './index'

/**
 * Пороги вовлечённости (в секундах). Открытие страницы прогрессом не считается —
 * значимым считаем урок, на котором студент провёл хотя бы STUDIED_MIN.
 */
export const STUDIED_MIN = 180 // 3 мин

export type Engagement = 'skim' | 'active' | 'away' | 'stuck'

export function engagementOf(seconds: number): Engagement {
  if (seconds < 180) return 'skim' // < 3 мин — пролистывает
  if (seconds < 1800) return 'active' // 3–30 мин — работает
  if (seconds < 3600) return 'away' // 30–60 мин — начал и отошёл
  return 'stuck' // 60+ мин — завис / забыл вкладку
}

export const engagementLabel: Record<Engagement, string> = {
  skim: 'пролистал',
  active: 'активен',
  away: 'начал и отошёл',
  stuck: 'завис',
}

export type StudentRow = {
  clerkId: string
  email: string | null
  name: string | null
  firstSeenAt: string
  lastSeenAt: string
  partsOpened: number
  partsStudied: number
  meetingsTouched: number
  secondsTotal: number
  quizzesTaken: number
  avgPct: number | null
  bestMeeting: string | null
}

/** Сводка по студентам — одна строка на человека */
export async function getStudentSummary(): Promise<StudentRow[]> {
  const db = getDb()
  const { rows } = await db.execute(sql`
    select
      s.clerk_id                              as "clerkId",
      s.email                                 as "email",
      s.name                                  as "name",
      s.first_seen_at                         as "firstSeenAt",
      s.last_seen_at                          as "lastSeenAt",
      coalesce(p.parts_opened, 0)::int        as "partsOpened",
      coalesce(p.parts_studied, 0)::int       as "partsStudied",
      coalesce(p.meetings_touched, 0)::int    as "meetingsTouched",
      coalesce(p.seconds_total, 0)::int       as "secondsTotal",
      coalesce(q.quizzes_taken, 0)::int       as "quizzesTaken",
      q.avg_pct::int                          as "avgPct",
      p.last_meeting                          as "bestMeeting"
    from students s
    left join (
      select clerk_id,
             count(*)                                        as parts_opened,
             count(*) filter (where seconds >= ${STUDIED_MIN}) as parts_studied,
             count(distinct meeting_id)                      as meetings_touched,
             sum(seconds)                                    as seconds_total,
             (array_agg(meeting_id order by last_opened_at desc))[1] as last_meeting
      from progress group by clerk_id
    ) p on p.clerk_id = s.clerk_id
    left join (
      select clerk_id, count(*) as quizzes_taken, avg(pct) as avg_pct
      from quiz_results group by clerk_id
    ) q on q.clerk_id = s.clerk_id
    order by s.last_seen_at desc
  `)
  return rows as unknown as StudentRow[]
}

export type LessonTimeRow = {
  name: string | null
  email: string | null
  meetingId: string
  partId: string | null
  seconds: number
  views: number
  lastOpenedAt: string
}

/**
 * Время по каждому уроку у каждого студента — самое честное «что реально было».
 * Сортировка по времени убыв.: сверху те, кто действительно сидел над материалом.
 */
export async function getLessonTime(limit = 200): Promise<LessonTimeRow[]> {
  const db = getDb()
  const { rows } = await db.execute(sql`
    select
      s.name          as "name",
      s.email         as "email",
      p.meeting_id    as "meetingId",
      p.part_id       as "partId",
      p.seconds::int  as "seconds",
      p.views::int    as "views",
      p.last_opened_at as "lastOpenedAt"
    from progress p
    join students s on s.clerk_id = p.clerk_id
    order by p.seconds desc, p.last_opened_at desc
    limit ${limit}
  `)
  return rows as unknown as LessonTimeRow[]
}

export type FunnelRow = { meetingId: string; studentsReached: number; studentsStudied: number }

/** Сколько студентов открывало встречу и сколько реально на ней задержалось */
export async function getFunnel(): Promise<FunnelRow[]> {
  const db = getDb()
  const { rows } = await db.execute(sql`
    select meeting_id as "meetingId",
           count(distinct clerk_id)::int as "studentsReached",
           count(distinct clerk_id) filter (where seconds >= ${STUDIED_MIN})::int as "studentsStudied"
    from progress
    group by meeting_id
    order by count(distinct clerk_id) desc
  `)
  return rows as unknown as FunnelRow[]
}

export type QuizStatRow = {
  meetingId: string
  partId: string | null
  attempts: number
  avgPct: number
}

/** Средний балл по каждому квизу — где материал не заходит */
export async function getQuizStats(): Promise<QuizStatRow[]> {
  const db = getDb()
  const { rows } = await db.execute(sql`
    select meeting_id as "meetingId",
           part_id    as "partId",
           count(*)::int as "attempts",
           round(avg(pct))::int as "avgPct"
    from quiz_results
    group by meeting_id, part_id
    order by avg(pct) asc
  `)
  return rows as unknown as QuizStatRow[]
}

export async function getTotals() {
  const db = getDb()
  const { rows } = await db.execute(sql`
    select
      (select count(*) from students)::int as "students",
      (select count(*) from students where last_seen_at > now() - interval '7 days')::int as "activeWeek",
      (select count(*) from quiz_results)::int as "quizzes",
      (select round(avg(pct)) from quiz_results)::int as "avgPct",
      (select coalesce(sum(seconds),0) from progress)::int as "secondsTotal",
      (select count(*) from progress where seconds >= ${STUDIED_MIN})::int as "partsStudied"
  `)
  return rows[0] as unknown as {
    students: number
    activeWeek: number
    quizzes: number
    avgPct: number | null
    secondsTotal: number
    partsStudied: number
  }
}
