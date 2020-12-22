import { getPostsByCat } from '../lib/api'
import { getShows } from '../lib/api'

export default function Contact({allPosts: {edges}},spinData) {
  const first = edges[0]?.node
  const morePosts = edges.slice(1)
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
  const allPosts = await getPostsByCat("blog-article",5)
  const spinData = await getShows()

  return {
    props: {
    allPosts,
    spinData
    }
  }

}
