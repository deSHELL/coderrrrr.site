import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import localFont from 'next/font/local'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Coderrrrr.site',
  description: 'Coderrrrr.site, the domain of Deva Midhun.',
}

const myFont = localFont({
  src: './fonts/pro-fa-solid-900-5.9.0.woff2',
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={myFont.className}>
      <body className={inter.className}>
        <div className="min-h-screen bg-background text-foreground">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  )
}
