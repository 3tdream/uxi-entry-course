import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { LanguageProvider } from '@/lib/language'
import { LanguageToggle } from '@/components/ui/language-toggle'
import { AuthWidget } from '@/components/ui/auth-widget'
import { TrackVisit } from '@/components/course/track-visit'
import { Clarity } from '@/components/analytics/clarity'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  title: 'UXI Entry Course — UX/UI Design Fundamentals',
  description: 'Interactive course for learning UX/UI design fundamentals',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Пока Clerk-ключей нет — рендерим курс как раньше, без провайдера.
  // Иначе ClerkProvider бросает «Missing publishableKey» и падает весь сайт.
  const authEnabled = Boolean(process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY)

  const tree = (
    <html lang="en" dir="ltr">
      <head>
        {/*
          Showcase fonts for /meeting/7 typography lesson.
          Font files load lazily only when CSS font-family references them
          (font-display: swap), so pages without showcase pay zero cost.
        */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Merriweather:wght@400;700&family=Lora:wght@400;700&family=Roboto:wght@400;700&family=Open+Sans:wght@400;700&family=JetBrains+Mono:wght@400;700&family=Fira+Code:wght@400;700&family=Source+Code+Pro:wght@400;700&family=IBM+Plex+Mono:wght@400;700&family=Source+Sans+3:wght@400;700&family=Montserrat:wght@400;700&family=Oswald:wght@400;700&family=Lato:wght@400;700&family=Roboto+Slab:wght@400;700&family=Lobster&family=Pacifico&display=swap"
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <LanguageProvider>
          <LanguageToggle />
          {authEnabled && <AuthWidget />}
          {authEnabled && <TrackVisit />}
          {children}
        </LanguageProvider>
        {/* Спит без NEXT_PUBLIC_CLARITY_ID; нужен и на публичных страницах */}
        <Clarity />
      </body>
    </html>
  )

  return authEnabled ? <ClerkProvider>{tree}</ClerkProvider> : tree
}
