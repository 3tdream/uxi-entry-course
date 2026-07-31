/**
 * Заглушка на случай, если код с Clerk уже задеплоен, а ключи ещё не заведены.
 * Без неё страницы входа и админки отдают 500 (ClerkProvider отсутствует).
 */
export function AuthNotConfigured({ what }: { what: string }) {
  return (
    <main className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-md text-center space-y-3">
        <h1 className="text-xl font-semibold">{what} пока недоступен</h1>
        <p className="text-sm text-muted-foreground">
          Авторизация ещё не настроена. Нужно задать переменные{' '}
          <code className="text-xs">NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY</code> и{' '}
          <code className="text-xs">CLERK_SECRET_KEY</code>.
        </p>
        <a href="/" className="inline-block text-sm underline underline-offset-4">
          Вернуться к курсу
        </a>
      </div>
    </main>
  )
}

export const authEnabled = () => Boolean(process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY)
