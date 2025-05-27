import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '１００万人DAO - 遊休資産価値化プロジェクト',
  description: 'DAOの理念とエコシステムを通じて、遊休資産の価値化を推進し、新しい社会システムを構築します。',
  keywords: 'DAO, 遊休資産, ブロックチェーン, 分散組織, 社会問題解決',
  authors: [{ name: '１００万人DAO' }],
  creator: '１００万人DAO',
  publisher: '１００万人DAO',
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://100man-dao.com',
    title: '１００万人DAO - 遊休資産価値化プロジェクト',
    description: 'DAOの理念とエコシステムを通じて、遊休資産の価値化を推進し、新しい社会システムを構築します。',
    siteName: '１００万人DAO',
  },
  twitter: {
    card: 'summary_large_image',
    title: '１００万人DAO - 遊休資産価値化プロジェクト',
    description: 'DAOの理念とエコシステムを通じて、遊休資産の価値化を推進し、新しい社会システムを構築します。',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className="dark">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
          {children}
        </div>
      </body>
    </html>
  )
}
