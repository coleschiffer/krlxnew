import { getEvents } from '../lib/api'

export default function Events({allEvents: {edges}}) {
  const first = edges[0]?.node
  return (
  <div>
    <h1>{first.title}</h1>
    <h1>{first.content}</h1>

    <img src={first.featuredImage.node.sourceUrl} />

    <h1>{morePosts[0].node.title}</h1>
    <h1>{morePosts[0].node.title}</h1>
    <iframe src="https://widgets.spinitron.com/widget/schedule?station=krlx"></iframe>
  </div>
  )
}

export async function getStaticProps() {
  const allEvents = await getEvents()
  return {
    props: {
    allEvents
    }
  }
}
