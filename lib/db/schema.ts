/**
 * Схема данных курса — кто учится и как продвигается.
 *
 * Три таблицы:
 *  - students     — один ряд на студента (ключ = Clerk user id)
 *  - progress     — одна строка на «студент × часть», с счётчиком открытий
 *  - quizResults  — история попыток квиза (не upsert — храним все попытки,
 *                   чтобы видеть динамику «со второго раза понял»)
 */
import {
  pgTable,
  text,
  integer,
  timestamp,
  uniqueIndex,
  index,
  serial,
} from 'drizzle-orm/pg-core'

export const students = pgTable(
  'students',
  {
    // Clerk user id (user_xxx) — первичный ключ, никаких своих id
    clerkId: text('clerk_id').primaryKey(),
    email: text('email'),
    name: text('name'),
    firstSeenAt: timestamp('first_seen_at', { withTimezone: true }).defaultNow().notNull(),
    lastSeenAt: timestamp('last_seen_at', { withTimezone: true }).defaultNow().notNull(),
  },
  (t) => ({
    emailIdx: index('students_email_idx').on(t.email),
    lastSeenIdx: index('students_last_seen_idx').on(t.lastSeenAt),
  })
)

export const progress = pgTable(
  'progress',
  {
    id: serial('id').primaryKey(),
    clerkId: text('clerk_id')
      .notNull()
      .references(() => students.clerkId, { onDelete: 'cascade' }),
    // 'meeting-1' | 'module-3' | 'recap-research' и т.п.
    meetingId: text('meeting_id').notNull(),
    // 'part-1' | 'part-2' | null для страниц без частей
    partId: text('part_id'),
    views: integer('views').default(1).notNull(),
    // Суммарное время с ОТКРЫТОЙ и видимой вкладкой. Открытие страницы само по
    // себе прогрессом не считается — по этому полю отличаем «пролистал» от
    // «изучил». Накапливается дельтами, вкладка в фоне не тикает.
    seconds: integer('seconds').default(0).notNull(),
    firstOpenedAt: timestamp('first_opened_at', { withTimezone: true }).defaultNow().notNull(),
    lastOpenedAt: timestamp('last_opened_at', { withTimezone: true }).defaultNow().notNull(),
  },
  (t) => ({
    // одна строка на студента+часть — апдейтим счётчик, а не плодим строки
    uniq: uniqueIndex('progress_student_part_uniq').on(t.clerkId, t.meetingId, t.partId),
    studentIdx: index('progress_student_idx').on(t.clerkId),
  })
)

export const quizResults = pgTable(
  'quiz_results',
  {
    id: serial('id').primaryKey(),
    clerkId: text('clerk_id')
      .notNull()
      .references(() => students.clerkId, { onDelete: 'cascade' }),
    meetingId: text('meeting_id').notNull(),
    partId: text('part_id'),
    score: integer('score').notNull(),
    total: integer('total').notNull(),
    // 0..100, считаем на записи чтобы не пересчитывать в каждом запросе
    pct: integer('pct').notNull(),
    completedAt: timestamp('completed_at', { withTimezone: true }).defaultNow().notNull(),
  },
  (t) => ({
    studentIdx: index('quiz_student_idx').on(t.clerkId),
    partIdx: index('quiz_part_idx').on(t.meetingId, t.partId),
  })
)

export type Student = typeof students.$inferSelect
export type Progress = typeof progress.$inferSelect
export type QuizResult = typeof quizResults.$inferSelect
