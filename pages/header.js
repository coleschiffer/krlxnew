import Link from 'next/link'
import TopPlayer from '../components/topPlayer'
export default function Header(shows) {
  return (
    <div className="flex mb-4 h-auto border-2 border-black">
      <div className="w-full md:w-1/5">
      <div className="pl-4 content-center">
        <div className="text-xl">Welcome to</div>
        <div className="text-2xl">KRLX.ORG</div>
        </div>
      </div>
      <div className="w-full md:w-4/5">
      <TopPlayer
        shows={shows}
      /> this does not work yet :/
      </div>
    </div>
  )
}
