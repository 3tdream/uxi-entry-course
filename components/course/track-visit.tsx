'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { useAuth } from '@clerk/nextjs'

/** Как часто сбрасывать накопленное время на сервер */
const FLUSH_EVERY_MS = 30_000

/**
 * Отмечает, какую страницу курса открыл студент, и сколько он на ней реально
 * пробыл. Ошибки намеренно глотаются — трекинг не должен мешать учиться.
 *
 * Время считается ТОЛЬКО пока вкладка видима: свёрнутая или фоновая вкладка
 * счётчик замораживает, иначе «оставил открытым на ночь» дало бы 8 часов
 * мнимого изучения.
 *
 * Разбираемые пути:
 *   /meeting/7/part/part-1  → meeting-7 / part-1
 *   /meeting/7              → meeting-7
 *   /module/x/lesson/y      → module-x / y
 *   /recap/research         → recap-research
 */
function parse(pathname: string): { meetingId: string; partId: string | null } | null {
  const seg = pathname.split('/').filter(Boolean)
  if (seg.length === 0) return null

  if (seg[0] === 'meeting' && seg[1]) {
    return { meetingId: `meeting-${seg[1]}`, partId: seg[2] === 'part' && seg[3] ? seg[3] : null }
  }
  if (seg[0] === 'module' && seg[1]) {
    return { meetingId: `module-${seg[1]}`, partId: seg[2] === 'lesson' && seg[3] ? seg[3] : null }
  }
  if (seg[0] === 'recap') {
    return { meetingId: `recap-${seg[1] ?? 'index'}`, partId: null }
  }
  return null
}

export function TrackVisit() {
  const pathname = usePathname()
  const { isSignedIn, isLoaded } = useAuth()
  // защита от повторной отправки просмотра при ре-рендерах
  const sentView = useRef<string | null>(null)

  useEffect(() => {
    if (!isLoaded || !isSignedIn) return
    const target = parse(pathname)
    if (!target) return

    const key = `${target.meetingId}|${target.partId ?? '-'}`
    if (sentView.current !== key) {
      sentView.current = key
      fetch('/api/track', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(target),
        keepalive: true,
      }).catch(() => {})
    }

    // --- накопление времени ---
    let unflushedMs = 0
    let lastTick: number | null =
      document.visibilityState === 'visible' ? Date.now() : null

    const accumulate = () => {
      if (lastTick == null) return
      const now = Date.now()
      unflushedMs += now - lastTick
      lastTick = now
    }

    const flush = (useBeacon = false) => {
      accumulate()
      const secs = Math.floor(unflushedMs / 1000)
      if (secs < 1) return
      // остаток меньше секунды переносим дальше, чтобы ничего не терять
      unflushedMs -= secs * 1000

      const payload = JSON.stringify({ ...target, seconds: secs })
      // на закрытии вкладки обычный fetch успевают отменить — нужен beacon
      if (useBeacon && typeof navigator !== 'undefined' && navigator.sendBeacon) {
        navigator.sendBeacon(
          '/api/track',
          new Blob([payload], { type: 'application/json' })
        )
        return
      }
      fetch('/api/track', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: payload,
        keepalive: true,
      }).catch(() => {})
    }

    const onVisibility = () => {
      if (document.visibilityState === 'visible') {
        lastTick = Date.now()
      } else {
        accumulate()
        lastTick = null // пауза: фоновая вкладка не тикает
        flush()
      }
    }

    const onPageHide = () => flush(true)

    const timer = setInterval(() => flush(), FLUSH_EVERY_MS)
    document.addEventListener('visibilitychange', onVisibility)
    window.addEventListener('pagehide', onPageHide)

    return () => {
      clearInterval(timer)
      document.removeEventListener('visibilitychange', onVisibility)
      window.removeEventListener('pagehide', onPageHide)
      flush(true) // уход на другой урок — досылаем остаток
    }
  }, [pathname, isSignedIn, isLoaded])

  return null
}
