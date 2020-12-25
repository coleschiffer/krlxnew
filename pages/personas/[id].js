import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { getPersonas, getPersonaByID, getShows } from '../../lib/api'
import Link from 'next/link'
import PersonaShowItems from '../../components/personaShowItems'
export default function Persona({ persona, allShows }) {
  const router = useRouter()
  if (router.isFallback) {
    // your loading indicator
    return <div>loading...</div>
  }
  if (!router.isFallback && !persona?.id) {
    return <ErrorPage statusCode={404} />
  }
  return (
  <div>
  <h1 className="text-2xl">{persona?.name}</h1>
  <img
  src={persona?.image}
  />
  <h1 className="text-xl" dangerouslySetInnerHTML={{ __html: persona?.bio }}></h1>
    <h1>Shows:</h1>
    <PersonaShowItems
      allShows={allShows}
      persona={persona}
    />
</div>
  )
}

export async function getStaticProps({ params, preview = false, previewData }) {
  const data = await getPersonaByID(params.id, preview, previewData)
  var show = null
  if(data?._links.shows.length>0) {
    show = await getShows()
  }
  data?._links.shows[data?._links.shows.length-1].href.substring(32)
  return {
    props: {
      preview,
      persona: data,
      allShows: show,
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
