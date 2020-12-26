import Clock from '../components/Clock'
import Link from 'next/link'
import { getPageByUri } from '../lib/api'
export default function SideBar(data) {
data = data.data
  return (
    <div className="border-black border-2 p-3">
      <div className="text-3xl">KRLX 88.1 FM</div>
      <div className="text-xl">A service of <a className="underline" target="_blank" href="https://carleton.edu">Carleton College</a> <a className="underline" target="_blank" href="https://www.ci.northfield.mn.us/">Northfield, MN</a>. Call the studio at <a className="underline" target="_blank" href="tel:5072224127">507-222-4127</a> and chat with our djs  <a className="underline" target="_blank" href="#">here</a> </div>
      The time is <Clock />

      <div dangerouslySetInnerHTML={{ __html: data?.content }} />
      <br/>
      <div><Link as={`/`} href="/">
        <a
          className="text-2xl pt-4 underline hover:no-underline"
        >Home</a>
      </Link>
      </div>
      <div><Link as={`/schedule`} href="/schedule">
        <a
          className="text-2xl pt-4 underline hover:no-underline"
        >Schedule</a>
      </Link>
      </div>
      <div><Link as={`/personas`} href="/personas">
        <a
          className="text-2xl pt-4 underline hover:no-underline"
        >DJs</a>
      </Link>
      </div>
      <div><Link as={`/blog`} href="/blog">
        <a
          className="text-2xl pt-4 underline hover:no-underline"
        >Blog</a>
      </Link>
      </div>
      <div><Link as={`/about`} href="/about">
        <a
          className="text-2xl pt-4 underline hover:no-underline"
        >About</a>
      </Link>
      </div>
      <div>
        <Link as={`/public-file`} href="/public-file">
          <a
            className="text-l pt-4 underline hover:no-underline"
          >Public File</a>
        </Link>
        </div>
    </div>
  )
}
