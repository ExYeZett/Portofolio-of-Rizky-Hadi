import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans, Geist_Mono } from 'next/font/google'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({
  variable: '--font-jakarta',
  subsets: ['latin'],
  display: 'swap',
})
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Muhammad Rizky Hadi Prawiro — AI/ML Engineer',
  description:
    'Portfolio of Muhammad Rizky Hadi Prawiro, an AI/ML Engineer specializing in machine learning modeling, data preprocessing, and real-world AI systems.',
  generator: 'v0.app',
  keywords: [
    'AI Engineer',
    'Machine Learning',
    'Data Science',
    'Python',
    'Muhammad Rizky Hadi Prawiro',
    'Portfolio',
  ],
  authors: [{ name: 'Muhammad Rizky Hadi Prawiro' }],
  openGraph: {
    title: 'Muhammad Rizky Hadi Prawiro — AI/ML Engineer',
    description:
      'AI/ML Engineer specializing in machine learning modeling, data preprocessing, and real-world AI systems.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#160d1f',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`dark ${jakarta.variable} ${geistMono.variable}`}
    >
      <body className="bg-background font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
