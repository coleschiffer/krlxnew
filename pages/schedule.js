import { useRouter, Link } from 'next/router'
import ErrorPage from 'next/error'
import { getShows } from '../lib/api'
import GetShowsByDay from '../components/getShowsByDay'
export default function Schedule({ shows }) {
  const router = useRouter();

  var d = new Date()
  var day = d.getDay()
  return (
  <div>
  <GetShowsByDay
    day={day}
    shows={shows}
  />
</div>
  )
}
export async function getStaticProps({ params }) {
  const shows = await getShows()
  return {
    props: {
      shows
    },
  }
}
