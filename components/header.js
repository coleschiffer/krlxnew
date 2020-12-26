import Link from 'next/link'
import TopPlayer from '../components/topPlayer'
export default function Header(shows,howler) {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="col-span-4 md:col-span-1 p-4">
        <div className="text-xl text-center">Welcome to</div>
        <div className="text-2xl text-center">KRLX.ORG</div>
      </div>
      <div className="col-span-4 md:col-span-3">
    <TopPlayer
        shows={shows}
        howlerid={howler}
      />
      </div>
    </div>
  )
}
