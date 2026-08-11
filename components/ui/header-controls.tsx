'use client'

import { LanguageToggle } from './language-toggle'
import { AuthWidget } from './auth-widget'

/**
 * Правый верхний угол: переключатель языка + аватар/вход.
 *
 * Оба в одном flex-контейнере — так gap между ними стабилен независимо от
 * ширины (аватар 32px vs кнопка «Войти» ~70px). Аватар стоит ПОСЛЕДНИМ,
 * значит крайний справа: он же меню-триггер, а меню по конвенции на внешнем
 * краю. gap-6 = 24px, чтобы элементы «дышали».
 *
 * Сайт всегда dir=ltr (см. layout), так что «внешний край» = правый.
 */
export function HeaderControls({ showAuth }: { showAuth: boolean }) {
  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-6 print:hidden">
      <LanguageToggle />
      {showAuth && <AuthWidget />}
    </div>
  )
}
