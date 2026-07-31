import { currentUser } from '@clerk/nextjs/server'
import { sql } from 'drizzle-orm'
import { getDb } from './index'
import { students } from './schema'

/**
 * Создаёт студента при первом обращении и двигает last_seen_at при каждом
 * следующем. Имя/почту тянем из Clerk — своей формы регистрации нет.
 */
export async function upsertStudent(clerkId: string) {
  const db = getDb()

  const user = await currentUser().catch(() => null)
  const email = user?.primaryEmailAddress?.emailAddress ?? null
  const name =
    [user?.firstName, user?.lastName].filter(Boolean).join(' ').trim() ||
    user?.username ||
    null

  await db
    .insert(students)
    .values({ clerkId, email, name })
    .onConflictDoUpdate({
      target: students.clerkId,
      set: {
        lastSeenAt: sql`now()`,
        // почта/имя могли появиться или измениться уже после регистрации
        email: sql`coalesce(excluded.email, ${students.email})`,
        name: sql`coalesce(excluded.name, ${students.name})`,
      },
    })
}

/** В БД part_id не может быть NULL в unique-индексе (NULL != NULL в Postgres) */
export const NO_PART = '-'
