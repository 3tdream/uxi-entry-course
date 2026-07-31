# Логин + аналитика курса — что нужно сделать

Код готов и задеплоен. Пока переменные не заданы, всё работает **как раньше**:
курс открыт всем, трекинг молча выключен, `/sign-in` и `/admin` показывают
заглушку вместо 500. Как только ключи появятся — включится авторизация и сбор
данных. Обратного пути ломать ничего не нужно.

Порядок: сначала Neon (2 мин), потом Clerk (5 мин), потом Vercel (2 мин).

---

## 1. Neon — база для прогресса

1. <https://console.neon.tech> → **New Project**
   - Name: `uxi-course`
   - Region: ближе к Vercel (`AWS eu-central-1` или `us-east-1`)
2. Скопируй **Connection string** (вкладка Dashboard → Connect, режим **Pooled**).
   Выглядит как `postgresql://...@ep-xxx-pooler.../neondb?sslmode=require`
3. Создай таблицы — вставь в **SQL Editor** содержимое файла
   `drizzle/0000_course_tracking.sql` и выполни.

> Это отдельный проект, не трогает базу mission-control. Free tier бесплатен.

---

## 2. Clerk — вход студентов

1. <https://dashboard.clerk.com> → **Create application**
   - Name: `UXI Entry Course`
   - Способы входа: **Email** + **Google** (рекомендую — меньше трения)
2. Со страницы **API Keys** скопируй:
   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` (`pk_live_…` или `pk_test_…`)
   - `CLERK_SECRET_KEY` (`sk_…`)
3. **Domains** → добавь `uxi-entry-course.vercel.app`

> Free tier до 10 000 активных пользователей в месяц — нам хватит с запасом.

---

## 3. Vercel — переменные окружения

Project `uxi-entry-course` → **Settings → Environment Variables**.
Добавь на **Production** (и Preview, если нужно):

| Переменная | Значение |
|---|---|
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | из Clerk |
| `CLERK_SECRET_KEY` | из Clerk |
| `POSTGRES_URL` | из Neon (pooled) |
| `ADMIN_EMAILS` | `3tdream@gmail.com` |

⚠️ Через CLI задавать только флагом `--value`:
```bash
vercel env add POSTGRES_URL production --value "postgresql://..."
```
(`echo` дописывает `\n` и ломает значение — уже наступали.)

После добавления — **Redeploy** (переменные подхватываются только новым билдом).

---

## 4. Проверка

1. Открой `uxi-entry-course.vercel.app` в инкогнито → должно **редиректить на вход**
2. Зарегистрируйся, пройди любой квиз до конца
3. Зайди на `/admin` → увидишь себя в таблице, +1 квиз, средний балл

---

## Что где лежит

| Файл | Зачем |
|---|---|
| `middleware.ts` | что закрыто, что открыто |
| `lib/db/schema.ts` | 3 таблицы: students / progress / quiz_results |
| `app/api/track/route.ts` | пишет «открыл страницу» |
| `app/api/quiz/route.ts` | пишет результат квиза |
| `app/admin/page.tsx` | дашборд |
| `drizzle/0000_course_tracking.sql` | миграция для Neon |

## Что открыто без логина

`/` (лендинг), `/final/*` (проект Marvel Snap — витрина), `/sign-in`, `/sign-up`.
Всё остальное требует входа — именно это и даёт данные.

Открыть курс обратно всем: добавь `'/meeting(.*)'` в `isPublicRoute` в
`middleware.ts`. Данные при этом продолжат собираться с тех, кто вошёл.
