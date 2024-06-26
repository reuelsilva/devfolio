import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.scss'

const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '600'],
  display: 'swap' 
})

export const metadata: Metadata = {
  title: 'Dev Reuel',
  description: '...',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
