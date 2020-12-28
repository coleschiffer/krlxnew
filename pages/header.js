import Link from 'next/link'
export default function Header() {

  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="col-span-4 md:col-span-1 p-4 h-14">
        <div className="text-xl text-center">Welcome to</div>
        <div className="text-2xl text-center">KRLX.ORG</div>
      </div>
      <div className="col-span-4 md:col-span-3">
        <div className="border-2 border-black p-2 overflow-hidden">
        <audio controls>
          <source src="http://stream.krlx.org:8000/_a" type="audio/ogg">
          <source src="http://stream.krlx.org:8000/_b" type="audio/mpeg">
        </audio>
        </div>
      </div>
    </div>
  )
}
