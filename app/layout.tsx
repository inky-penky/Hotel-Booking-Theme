import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import SideNav from './components/sideNav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mima Booking',
  description: 'An hotel booking theme',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex`}>
        <SideNav />
        {children}
      </body>
    </html>
  )
}
