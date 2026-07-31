/**
 * Drizzle-клиент поверх Neon serverless.
 *
 * Ленивая инициализация — намеренно (тот же грабль, что чинили в
 * mission-control): при top-level `neon(process.env.POSTGRES_URL!)` модуль
 * падает на этапе сборки Next.js «Collecting page data», если переменной нет.
 * Здесь соединение создаётся при ПЕРВОМ реальном обращении, поэтому импорт
 * побочных эффектов не имеет и билд проходит даже без БД.
 */
import { neon } from '@neondatabase/serverless'
import { drizzle } from 'drizzle-orm/neon-http'
import * as schema from './schema'

let _db: ReturnType<typeof drizzle<typeof schema>> | null = null

export function getDb() {
  if (_db) return _db
  const url = process.env.POSTGRES_URL
  if (!url) throw new Error('POSTGRES_URL is required at runtime')
  _db = drizzle(neon(url), { schema })
  return _db
}

/** Настроена ли БД вообще — чтобы трекинг молча выключался, а не ронял страницу */
export function isDbConfigured() {
  return Boolean(process.env.POSTGRES_URL)
}

export { schema }
