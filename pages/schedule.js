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
    <div className="flex mb-4">
    <div className="w-full md:w-1/5">
      <SideBar />
    </div>
  <div className="w-full md:w-4/5 p-4">
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
