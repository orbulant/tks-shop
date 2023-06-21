import { ReactNode } from 'react'

import arrowLeft from '@iconify/icons-ph/arrow-left'
import { Icon } from '@iconify/react'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Link from 'next/link'

import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'

type LayoutProps = {
  title?: string
  backToPreviousPage?: string
  desc?: string
  children: ReactNode
}

const inter = Inter({ subsets: ['latin'] })

export default function Layout(props: LayoutProps) {
  const { title, desc, backToPreviousPage, children } = props

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
      </Head>
      <Navbar />
      <main className={`flex min-h-screen flex-col p-1 ${inter.className}`}>
        {backToPreviousPage && (
          <div className="flex h-16 items-center">
            <Link href={backToPreviousPage} className=" transition hover:opacity-80 active:scale-90">
              <Icon icon={arrowLeft} className="h-8 w-8" />
            </Link>
          </div>
        )}
        {children}
      </main>
      <Footer />
    </>
  )
}
