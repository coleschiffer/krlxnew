import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { getShows, getShowByID } from '../../lib/api'

export default function Show({ show }) {
  const router = useRouter();
  console.log(show)
  if (!router.isFallback && !show?.id) {
    return <ErrorPage statusCode={404} />
  }

  return (
  <div>
  <img src={show?.image} />
    <h1> {show?.title} </h1>
    <div dangerouslySetInnerHTML={{ __html: show?.description }} />

</div>
  )
}

export async function getStaticProps({ params, preview = false, previewData }) {
  const data = await getShowByID(params.id, preview, previewData)

  return {
    props: {
      preview,
      show: data,
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
