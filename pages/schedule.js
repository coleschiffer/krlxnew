import { useRouter, Link } from 'next/router'
import ErrorPage from 'next/error'
import { getShows,getPageByUri } from '../lib/api'
import GetShowsByDay from '../components/getShowsByDay'
import SideBar from "../components/sideBar"

export default function Schedule({ shows, sidePage }) {
  const router = useRouter();

  var d = new Date()
  var day = d.getDay()
  return (
    <div className="grid grid-cols-4 gap-4">
    <div className="col-span-4 md:col-span-1">
      <SideBar data={sidePage}/>
    </div>
  <div className="col-span-4 md:col-span-3 p-3">
  <GetShowsByDay
    day={day}
    shows={shows}
  />
</div>
</div>

  )
}
export async function getStaticProps({ params }) {
  const shows = await getShows()
  const sidePage = await getPageByUri("/side-bar/")

  return {
    props: {
      shows,
      sidePage
    },
  }
}
