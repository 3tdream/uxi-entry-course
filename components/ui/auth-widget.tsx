'use client'

import { SignInButton, UserButton, useAuth } from '@clerk/nextjs'
import { useLanguage } from '@/lib/language'

/**
 * Аватар студента / кнопка входа. Живёт слева от переключателя языка
 * (тот прибит к top-4 right-4), поэтому сдвинут на right-[4.75rem].
 *
 * Ветвимся через useAuth(), а не <SignedIn>/<SignedOut> — в Clerk v7 их
 * заменил серверный <Show when="signed-in">, который нельзя звать из
 * клиентского компонента.
 */
export function AuthWidget() {
  const { lang } = useLanguage()
  const { isLoaded, isSignedIn } = useAuth()

  // до гидрации Clerk не рендерим ничего — иначе прыгает вёрстка
  if (!isLoaded) return null

  return (
    <div className="fixed top-4 right-[4.75rem] z-50 print:hidden">
      {isSignedIn ? (
        <div className="flex items-center h-[34px]">
          <UserButton appearance={{ elements: { avatarBox: 'w-8 h-8' } }} />
        </div>
      ) : (
        <SignInButton mode="modal">
          <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card border shadow-sm hover:shadow-md transition-all text-sm font-medium">
            {lang === 'ru' ? 'Войти' : 'Sign in'}
          </button>
        </SignInButton>
      )}
    </div>
  )
}
