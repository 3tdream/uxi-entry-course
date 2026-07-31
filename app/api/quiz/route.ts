import { auth } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'
import { getDb, isDbConfigured } from '@/lib/db'
import { quizResults } from '@/lib/db/schema'
import { upsertStudent, NO_PART } from '@/lib/db/student'

export const runtime = 'nodejs'

/**
 * Результат пройденного квиза. Пишем КАЖДУЮ попытку (не upsert) —
 * так видно динамику «со второго раза понял», а не только финальный балл.
 */
export async function POST(req: Request) {
  if (!isDbConfigured()) return new NextResponse(null, { status: 204 })

  const { userId } = await auth()
  if (!userId) return new NextResponse(null, { status: 401 })

  let body: { meetingId?: string; partId?: string | null; score?: number; total?: number }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'bad json' }, { status: 400 })
  }

  const meetingId = String(body.meetingId ?? '').slice(0, 120)
  const total = Number(body.total)
  const score = Number(body.score)

  if (!meetingId || !Number.isFinite(total) || total <= 0) {
    return NextResponse.json({ error: 'meetingId and total required' }, { status: 400 })
  }
  if (!Number.isFinite(score) || score < 0 || score > total) {
    return NextResponse.json({ error: 'score out of range' }, { status: 400 })
  }

  const partId = body.partId ? String(body.partId).slice(0, 120) : NO_PART
  const pct = Math.round((score / total) * 100)

  try {
    await upsertStudent(userId)
    await getDb()
      .insert(quizResults)
      .values({ clerkId: userId, meetingId, partId, score, total, pct })
    return new NextResponse(null, { status: 204 })
  } catch (err) {
    console.error('[quiz] failed', err)
    return new NextResponse(null, { status: 204 })
  }
}
