import Link from 'next/link'
<<<<<<< HEAD
import Bg from '../components/bgcolor'
=======
>>>>>>> parent of 0f82f69 (background)
import {Howl, Howler} from 'howler';
export default function Header() {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="col-span-4 md:col-span-1 p-4 h-14">
        <div className="text-xl text-center">Welcome to</div>
        <div className="text-2xl text-center">KRLX.ORG</div>
      </div>
      <div className="col-span-4 md:col-span-3">
        <div className="border-2 border-black p-2 overflow-hidden vertical-align">
        <audio src="http://stream.krlx.org:8000/_a" controls/>
        Click above to play the radio. If the player is not working <Link as={`http://stream.krlx.org:8000/_a`} href="http://strean.krlx,org:8000/_a">
          <a
            className="underline hover:no-underline"
          >click here</a>
        </Link> to open it in a new tab. See recently played songs <Link  as={`https://spinitron.com/krlx`} href="https://spinitron.com/krlx">  <a
            className="underline hover:no-underline"
          >here</a><Link><br/>This website is very new and still&nbsp;
        <Link as={`https://thecreativeindependent.com/people/laurel-schwulst-my-website-is-a-shifting-house-next-to-a-river-of-knowledge-what-could-yours-be/`} href="https://thecreativeindependent.com/people/laurel-schwulst-my-website-is-a-shifting-house-next-to-a-river-of-knowledge-what-could-yours-be/">
          <a
            className="underline hover:no-underline"
          >growing</a>
        </Link>
        . &nbsp;
        <Link as={`mailto:board@krlx.org`} href="mailto:manager@krlx.org">
          <a
            className="underline hover:no-underline"
          >Email us</a>
        </Link> with any ideas :)
        </div>
      </div>
    </div>
  )
}
