import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/lib/language'
import { LanguageToggle } from '@/components/ui/language-toggle'

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
  return (
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
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Merriweather:wght@400;700&family=Lora:wght@400;700&family=Roboto:wght@400;700&family=Open+Sans:wght@400;700&family=JetBrains+Mono:wght@400;700&family=Fira+Code:wght@400;700&family=Source+Code+Pro:wght@400;700&family=IBM+Plex+Mono:wght@400;700&family=Source+Sans+3:wght@400;700&family=Montserrat:wght@400;700&family=Oswald:wght@400;700&family=Lato:wght@400;700&family=Roboto+Slab:wght@400;700&display=swap"
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <LanguageProvider>
          <LanguageToggle />
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
