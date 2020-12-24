import { useRouter, Link } from 'next/router'
import ErrorPage from 'next/error'
import { getShows, getShowByID, getPersonasByShow } from '../../lib/api'
import ShowPersonas from '../../components/showPersonas'
export default function Show({ show, djs }) {
  const router = useRouter();
  if (!router.isFallback && !show?.id) {
    return <ErrorPage statusCode={404} />
  }
  if (router.isFallback) {
    // your loading indicator
    return <div>loading...</div>
  }
  return (
  <div>
  <img src={show?.image} />
    <h1> {show?.title} </h1>
    <ShowPersonas
      name={djs?.name}
      id={djs?.id}
      autoDJ={djs?.autoDJ}
    />
</div>
  )
}

export async function getStaticProps({ params, preview = false, previewData }) {
  const data = await getShowByID(params.id, preview, previewData)
  const persona = await getPersonasByShow(data)
  return {
    props: {
      preview,
      show: data,
      djs: persona,
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
