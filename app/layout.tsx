import type { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'
// import localFont from 'next/font/local'
import './globals.css'

const notoSans = Noto_Sans({
  weight: ['400', '700']
})

// const geistMono = localFont({
//   src: './fonts/GeistMonoVF.woff',
//   variable: '--font-geist-mono',
//   weight: '100 900'
// })

export const metadata: Metadata = {
  title: 'Fun with Flags',
  description: 'Having fun with the flags of the world.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${notoSans.className} antialiased`}>{children}</body>
    </html>
  )
}
