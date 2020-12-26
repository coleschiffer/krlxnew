import Link from 'next/link'
export default function Header() {
  var sound = new Howl({src: ['http://stream.krlx.org:8000/_a','http://stream.krlx.org:8000/_b'],html5: true, format: ['ogg', 'mp3'],  volume: 0.75})
  var id = sound.play()
  function handleClick(e) {    e.preventDefault();    sound.play(id);  }
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="col-span-4 md:col-span-1 p-4">
        <div className="text-xl text-center">Welcome to</div>
        <div className="text-2xl text-center">KRLX.ORG</div>
      </div>
      <div className="col-span-4 md:col-span-3">
      <div className="border-2 border-black p-2">
        <div className="text-5xl blink ">
        <a href="#" onClick={handleClick}>Press Here to Listen:</a>
        </div>
      </div>
      </div>
    </div>
  )
}
