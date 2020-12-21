import { getPostsByCat } from '../lib/api'

export default function Contact({allPosts: {edges}}) {
  const first = edges[0]?.node
  const morePosts = edges.slice(1)
  return (
  <div>
    <h1>{first.title}</h1>
    <h1>{first.content}</h1>

    <img src={first.featuredImage.node.sourceUrl} />

    <h1>{morePosts[0].node.title}</h1>
    <h1>{morePosts[0].node.title}</h1>
  </div>
  )
}

export async function getStaticProps() {
  const allPosts = await getPostsByCat("blog-article",5)
  return {
    props: {
    allPosts
    }
  }
}
