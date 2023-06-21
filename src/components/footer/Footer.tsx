import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center px-2 py-4 text-xs md:px-0">
      <span>All rights reserved, 2023. This site uses cookies.</span>
      <span>
        View our{' '}
        <Link href="/" className="underline hover:no-underline">
          privacy policy
        </Link>
        .
      </span>
      <span>
        View{' '}
        <Link href="/" className="underline hover:no-underline">
          cookie settings
        </Link>
        .
      </span>
    </footer>
  )
}
