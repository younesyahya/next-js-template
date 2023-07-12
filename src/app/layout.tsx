import './globals.css'
import type { Metadata } from 'next'
import { Layout } from '@/modules/app/react/Layout'
import { AppWrapper } from '@/modules/app/react/AppWrapper'


export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
    <body>
      <AppWrapper>
        <Layout>{children}</Layout>
      </AppWrapper>
    </body>
  </html>
  )
}