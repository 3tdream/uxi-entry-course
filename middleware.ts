import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse, type NextFetchEvent, type NextRequest } from 'next/server'

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

// NEXT_PUBLIC_* инлайнится на этапе сборки, так что это честная константа
const hasClerkKeys = Boolean(process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY)

let _clerk: ReturnType<typeof clerkMiddleware> | null = null
function clerk() {
  if (!_clerk) {
    _clerk = clerkMiddleware(async (auth, req) => {
      if (!isPublicRoute(req)) await auth.protect()
      return NextResponse.next()
    })
  }
  return _clerk
}

/**
 * ВАЖНО: clerkMiddleware() нельзя ни вызывать, ни создавать, пока нет ключей —
 * он бросает «Missing publishableKey» на КАЖДЫЙ запрос, до того как отработает
 * наш колбэк. Именно так курс целиком лёг в проде 31.07 (dev это не ловит,
 * там Clerk мягче). Поэтому проверка стоит ДО создания middleware.
 */
export default function middleware(req: NextRequest, ev: NextFetchEvent) {
  if (!hasClerkKeys) return NextResponse.next()
  return clerk()(req, ev)
}

export const config = {
  matcher: [
    // всё, кроме статики и _next
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
}
