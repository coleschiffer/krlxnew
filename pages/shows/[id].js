import { useRouter, Link } from 'next/router'
import ErrorPage from 'next/error'
import { getShows, getShowByID, getPersonas } from '../../lib/api'
import ShowPersonas from '../../components/showPersonas'
import ShowTime from '../../components/showTime'
import SideBar from "../../components/sideBar"

export default function Show({ show, allPersonas }) {
  const router = useRouter();
  if (!router.isFallback && !show?.id) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <div className="flex mb-4">
    <div className="w-full md:w-1/5">
      <SideBar />
    </div>
  <div className="p-4 w-full md:w-4/5" >
  <h1 className="text-2xl">{show?.title}</h1>
  <img
  src={show?.image}
  />
  <ShowTime
    startTime={show?.start}
    endTime={show?.end}
    oneTime={show?.one_off}
    showDayOfWeek={true}
  />
  <h1 className="text-xl" dangerouslySetInnerHTML={{ __html: show?.description }}></h1>
    <ShowPersonas
      show={show}
      allPersonas={allPersonas}
    />
</div>
</div>

  )
}
export async function getStaticProps({ params}) {
  const data = await getShowByID(params.id)
  const allPersonas = await getPersonas()
  return {
    props: {
      show: data,
      allPersonas,
    },
  }
}

export async function getStaticPaths() {
  const allShows = await getShows()
  const showPaths = []
  var statement = ""
  for (var i = 0; i < allShows.items.length; i++) {
    statement = `/shows/${allShows.items[i].id}`
    showPaths.push({ params: { id: statement} } || [])
  }
  return {
    paths: showPaths,
    fallback: true,
  }
}
