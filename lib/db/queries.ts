import { sql } from 'drizzle-orm'
import { getDb } from './index'

export type StudentRow = {
  clerkId: string
  email: string | null
  name: string | null
  firstSeenAt: string
  lastSeenAt: string
  partsOpened: number
  meetingsTouched: number
  quizzesTaken: number
  avgPct: number | null
  bestMeeting: string | null
}

/** Сводка по студентам — одна строка на человека, для главной таблицы админки */
export async function getStudentSummary(): Promise<StudentRow[]> {
  const db = getDb()
  const { rows } = await db.execute(sql`
    select
      s.clerk_id                                        as "clerkId",
      s.email                                           as "email",
      s.name                                            as "name",
      s.first_seen_at                                   as "firstSeenAt",
      s.last_seen_at                                    as "lastSeenAt",
      coalesce(p.parts_opened, 0)::int                  as "partsOpened",
      coalesce(p.meetings_touched, 0)::int              as "meetingsTouched",
      coalesce(q.quizzes_taken, 0)::int                 as "quizzesTaken",
      q.avg_pct::int                                    as "avgPct",
      p.last_meeting                                    as "bestMeeting"
    from students s
    left join (
      select clerk_id,
             count(*)                       as parts_opened,
             count(distinct meeting_id)     as meetings_touched,
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

export type FunnelRow = { meetingId: string; studentsReached: number }

/** Сколько уникальных студентов дошло до каждой встречи — воронка отвала */
export async function getFunnel(): Promise<FunnelRow[]> {
  const db = getDb()
  const { rows } = await db.execute(sql`
    select meeting_id as "meetingId", count(distinct clerk_id)::int as "studentsReached"
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
      (select round(avg(pct)) from quiz_results)::int as "avgPct"
  `)
  return rows[0] as unknown as {
    students: number
    activeWeek: number
    quizzes: number
    avgPct: number | null
  }
}
