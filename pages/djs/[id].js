import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { getPersonas, getPersonaByID } from '../../lib/api'

export default function Persona({ persona }) {
  const router = useRouter();
  console.log(persona)
  if (!router.isFallback && !persona?.id) {
    return <ErrorPage statusCode={404} />
  }

  return (
  <div>
  <img src={persona?.image} />
    <h1> {persona?.name} </h1>
    <div dangerouslySetInnerHTML={{ __html: persona?.bio }} />

</div>
  )
}

export async function getStaticProps({ params, preview = false, previewData }) {
  const data = await getPersonaByID(params.id, preview, previewData)

  return {
    props: {
      preview,
      persona: data,
    },
  }
}

export async function getStaticPaths() {
  const allPersonas = await getPersonas()
  const personaPaths = []
  var statement = ""
  for (var i = 0; i < allPersonas.items.length; i++) {
    statement = `/dj/${allPersonas.items[i].id}`
    personaPaths.push({ params: { id: statement} })
  }
  return {
    paths: personaPaths,
    fallback: true,
  }
}
