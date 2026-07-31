import { auth } from '@clerk/nextjs/server'
import { sql } from 'drizzle-orm'
import { NextResponse } from 'next/server'
import { getDb, isDbConfigured } from '@/lib/db'
import { progress } from '@/lib/db/schema'
import { upsertStudent, NO_PART } from '@/lib/db/student'

export const runtime = 'nodejs'

/**
 * Отметка «студент открыл страницу».
 * Идемпотентно: одна строка на студента+часть, инкрементим views.
 */
export async function POST(req: Request) {
  // Нет БД — тихо выключаемся, курс должен работать и без трекинга
  if (!isDbConfigured()) return new NextResponse(null, { status: 204 })

  const { userId } = await auth()
  if (!userId) return new NextResponse(null, { status: 401 })

  let body: { meetingId?: string; partId?: string | null }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'bad json' }, { status: 400 })
  }

  const meetingId = String(body.meetingId ?? '').slice(0, 120)
  if (!meetingId) return NextResponse.json({ error: 'meetingId required' }, { status: 400 })
  const partId = body.partId ? String(body.partId).slice(0, 120) : NO_PART

  try {
    await upsertStudent(userId)
    await getDb()
      .insert(progress)
      .values({ clerkId: userId, meetingId, partId })
      .onConflictDoUpdate({
        target: [progress.clerkId, progress.meetingId, progress.partId],
        set: { views: sql`${progress.views} + 1`, lastOpenedAt: sql`now()` },
      })
    return new NextResponse(null, { status: 204 })
  } catch (err) {
    // Трекинг не должен ломать обучение — логируем и отвечаем успехом
    console.error('[track] failed', err)
    return new NextResponse(null, { status: 204 })
  }
}
