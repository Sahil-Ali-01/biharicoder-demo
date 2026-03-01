import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Bihari Coder',
  description: 'Building real projects. Sharing coding knowledge. Full-stack development, open-source contributions, and educational content.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/biharicoder.jpg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/biharicoder.jpg',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/biharicoder.jpg',
      },
    ],
    apple: '/biharicoder.jpg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
