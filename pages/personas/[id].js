import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { getPersonas, getPersonaByID, getShowByID } from '../../lib/api'
import Link from 'next/link'
import ShowItem from '../../components/showItem'

export default function Persona({ persona, her }) {
  const router = useRouter()
  console.log(her)
  if (!router.isFallback && !persona?.id) {
    return <ErrorPage statusCode={404} />
  }
  return (
  <div>
  <img src={persona?.image} />
    <h1> {persona?.name} </h1>
    <div dangerouslySetInnerHTML={{ __html: persona?.bio }} />
    <h1>Shows:</h1>
    <ShowItem
      title={her?.title}
      id={her?.id}
      image={her?.image}
      startTime={her?.start}
      endTime={her?.end}
    />
</div>
  )
}

export async function getStaticProps({ params, preview = false, previewData }) {
  const data = await getPersonaByID(params.id, preview, previewData)
  const show = await getShowByID(data?._links.shows[data?._links.shows.length-1].href.substring(32))
  return {
    props: {
      preview,
      persona: data,
      her: show,
    },
  }
}

export async function getStaticPaths() {
  const allPersonas = await getPersonas()
  const personaPaths = []
  var statement = ""
  for (var i = 0; i < allPersonas.items.length; i++) {
    statement = `/personas/${allPersonas.items[i].id}`
    personaPaths.push({ params: { id: statement} } || [])
  }
  return {
    paths: personaPaths,
    fallback: true,
  }
}
