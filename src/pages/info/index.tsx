import Link from 'next/link'

import Layout from '@/components/layout/Layout'

export default function Info() {
  return (
    <Layout title="Information" desc="Information about this website">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Disclaimer!</h1>
        <p>This project was created by Tan Ka-Shing during his time in Xsolla Labs (Jan 2023 - June 2023)</p>
        <p>
          This site uses Next.js with infinite scrolling on the homepage, each individual square is meant to represent a
          game.
        </p>
        <p>
          The look and feel of the site should match that of{' '}
          <Link href="https://x.la/" className="text-blue-800 underline hover:text-blue-950" target="_blank">
            https://x.la/
          </Link>
        </p>
      </div>
    </Layout>
  )
}
