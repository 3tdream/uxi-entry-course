import { auth } from '@clerk/nextjs/server'
import { sql } from 'drizzle-orm'
import { NextResponse } from 'next/server'
import { getDb, isDbConfigured } from '@/lib/db'
import { progress } from '@/lib/db/schema'
import { upsertStudent, NO_PART } from '@/lib/db/student'

export const runtime = 'nodejs'

/** Потолок на одну дельту: клиент шлёт раз в 30 с, 180 — запас на лаги/усыпление */
const MAX_DELTA_SECONDS = 180

/**
 * Два режима, различаются наличием `seconds`:
 *  - без seconds  → «открыл страницу»: +1 к просмотрам
 *  - с seconds    → «провёл N секунд»: +N к времени, просмотры НЕ трогаем
 *
 * Второе важно: таймер пингует каждые 30 с, и если бы каждый пинг считался
 * просмотром, views раздулся бы в десятки раз и стал бесполезен.
 */
export async function POST(req: Request) {
  if (!isDbConfigured()) return new NextResponse(null, { status: 204 })

  const { userId } = await auth()
  if (!userId) return new NextResponse(null, { status: 401 })

  let body: { meetingId?: string; partId?: string | null; seconds?: number }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'bad json' }, { status: 400 })
  }

  const meetingId = String(body.meetingId ?? '').slice(0, 120)
  if (!meetingId) return NextResponse.json({ error: 'meetingId required' }, { status: 400 })
  const partId = body.partId ? String(body.partId).slice(0, 120) : NO_PART

  const raw = Number(body.seconds)
  const delta =
    Number.isFinite(raw) && raw > 0 ? Math.min(Math.round(raw), MAX_DELTA_SECONDS) : 0
  const isTimeFlush = delta > 0

  try {
    await upsertStudent(userId)
    await getDb()
      .insert(progress)
      .values({
        clerkId: userId,
        meetingId,
        partId,
        views: isTimeFlush ? 0 : 1,
        seconds: delta,
      })
      .onConflictDoUpdate({
        target: [progress.clerkId, progress.meetingId, progress.partId],
        set: isTimeFlush
          ? { seconds: sql`${progress.seconds} + ${delta}`, lastOpenedAt: sql`now()` }
          : { views: sql`${progress.views} + 1`, lastOpenedAt: sql`now()` },
      })
    return new NextResponse(null, { status: 204 })
  } catch (err) {
    console.error('[track] failed', err)
    return new NextResponse(null, { status: 204 })
  }
}
