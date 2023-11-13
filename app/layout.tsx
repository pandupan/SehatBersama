import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layouts/Navbar'
import Footer from '@/components/layouts/Footer'
import ProviderWrapper from '@/components/layouts/ProviderWrapper'

const poppins = Poppins({ subsets: ['latin'], weight: ['100','200', '300', '400', '500', '600', '700', '800', '900'] })

export const metadata: Metadata = {
  title: 'Sehat Bersama',
  description: 'Aplikasi konsultasi kesehatan',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ProviderWrapper>
            <Navbar/>
              {children}
            <Footer/>
        </ProviderWrapper>
      </body>
    </html>
  )
}
