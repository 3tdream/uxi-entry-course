import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

/**
 * Публичное — всё, что можно смотреть без входа.
 * Остальное (встречи, модули, recap, админка, трекинг-API) требует логина —
 * именно это и даёт нам данные о том, кто учится.
 *
 * Чтобы снова открыть курс всем: добавь '/meeting(.*)' и т.д. в isPublicRoute.
 */
const isPublicRoute = createRouteMatcher([
  '/', // лендинг курса — витрина, пускаем всех
  '/sign-in(.*)',
  '/sign-up(.*)',
  '/final(.*)', // финальный проект Marvel Snap — публичная работа-витрина
  '/api/health',
])

export default clerkMiddleware(async (auth, req) => {
  // Если Clerk ещё не настроен (нет ключей) — не блокируем сайт,
  // иначе курс ляжет целиком до того, как Mike заведёт приложение.
  if (!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY) {
    return NextResponse.next()
  }

  if (!isPublicRoute(req)) {
    await auth.protect()
  }

  return NextResponse.next()
})

export const config = {
  matcher: [
    // всё, кроме статики и _next
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
}
