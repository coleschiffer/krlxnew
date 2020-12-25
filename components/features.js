import Link from 'next/link'

export default function FeaturesHeader() {

  return (
    <h2 className="text-2xl">
      <Link href="/features">
        <a className="hover:underline">features</a>
      </Link>&nbsp;&nbsp;
      <Link href="/personas">
        <a className="hover:underline">DJs</a>
      </Link>&nbsp;&nbsp;
      <Link href="/shows">
            <a className="hover:underline">Shows</a>
        </Link>
    </h2>
  )
}
