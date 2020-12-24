import Link from 'next/link'

export default function FeaturesHeader() {

  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/features">
        <a className="hover:underline">features</a>
      </Link> -
      <Link href="/personas">
        <a className="hover:underline">DJs</a>
      </Link> -
      <Link href="/shows">
            <a className="hover:underline">Shows</a>
        </Link>
    </h2>
  )
}
