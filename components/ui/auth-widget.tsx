'use client'

import { SignInButton, UserButton, useAuth } from '@clerk/nextjs'
import { useLanguage } from '@/lib/language'

/**
 * Аватар студента / кнопка входа. Позиционирование — на родителе
 * (HeaderControls), здесь только содержимое. Аватар — крайний справа
 * (он же меню-триггер), поэтому в HeaderControls стоит последним.
 *
 * Ветвимся через useAuth(), а не <SignedIn>/<SignedOut> — в Clerk v7 их
 * заменил серверный <Show when="signed-in">, который нельзя звать из
 * клиентского компонента.
 */
export function AuthWidget() {
  const { lang } = useLanguage()
  const { isLoaded, isSignedIn } = useAuth()

  // до гидрации Clerk держим место аватара, чтобы соседний тоггл не прыгал
  if (!isLoaded) return <div className="w-8 h-[34px]" aria-hidden />

  return isSignedIn ? (
    <div className="flex items-center h-[34px]">
      <UserButton appearance={{ elements: { avatarBox: 'w-8 h-8' } }} />
    </div>
  ) : (
    <SignInButton mode="modal">
      <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card border shadow-sm hover:shadow-md transition-all text-sm font-medium">
        {lang === 'ru' ? 'Войти' : 'Sign in'}
      </button>
    </SignInButton>
  )
}
