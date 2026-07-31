'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { useAuth } from '@clerk/nextjs'

/**
 * Тихо отмечает, какую страницу курса открыл вошедший студент.
 * Ошибки намеренно глотаются — трекинг не должен мешать учиться.
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
  // защита от повторной отправки при ре-рендерах и StrictMode-двойном эффекте
  const sent = useRef<string | null>(null)

  useEffect(() => {
    if (!isLoaded || !isSignedIn) return
    const target = parse(pathname)
    if (!target) return

    const key = `${target.meetingId}|${target.partId ?? '-'}`
    if (sent.current === key) return
    sent.current = key

    fetch('/api/track', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(target),
      keepalive: true,
    }).catch(() => {})
  }, [pathname, isSignedIn, isLoaded])

  return null
}
