import Link from 'next/link'
import TopPlayer from '../components/topPlayer'
export default function Header(shows) {
  return (
    <div className="grid grid-cols-4 gap-4 border-2 border-black">
      <div className="col-span-4 md:col-span-1">
        <div className="text-xl">Welcome to</div>
        <div className="text-2xl">KRLX.ORG</div>
        </div>
      <div className="col-span-4 md:col-span-3">
        <TopPlayer
          shows={shows}
        /> this does not work yet :/
      </div>
    </div>
  )
}
