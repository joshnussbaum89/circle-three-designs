import type { Metadata } from 'next'
import { Bebas_Neue, Nunito } from 'next/font/google'
import './globals.css'
import Footer from '@/components/layout/footer'

const bebas = Bebas_Neue({ weight: '400', subsets: ['latin'], variable: '--font-bebas' })
const nunito = Nunito({ weight: '400', subsets: ['latin'], variable: '--font-nunito' })

export const metadata: Metadata = {
  title: 'Circle Three Designs',
  description:
    'Road cases and manufacturing for musical instruments, bands, touring musicians and production companies. Specialty items include flight cases, road cases, ATA cases, Music case, fly racks, fly vaults, guitar vaults, guitar tech briefcases and workboxes. Also make wardrobe cases and now make the CPAC.',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${nunito.variable} ${bebas.variable}`}>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  )
}
