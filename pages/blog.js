import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Layout from '../components/layout'
import { getAllPostsForHome,getPageByUri } from '../lib/api'
import SideBar from "../components/sideBar"

export default function Blog({ allPosts: { edges }, sidePage}) {
  const heroPost = edges[0]?.node
  const morePosts = edges.slice(1)

  return (
    <div className="grid grid-cols-4 gap-4">
    <div className="col-span-4 md:col-span-1">
    <SideBar data={sidePage}/>
    </div>
  <div className="col-span-4 md:col-span-3 p-3">
      <Layout>
        <Container>
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.featuredImage?.node}
              date={heroPost.date}
              author={heroPost.author?.node}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
      </div>
      </div>
  )
}

export async function getStaticProps({ }) {
  const sidePage = await getPageByUri("/side-bar/")
  const allPosts = await getAllPostsForHome()
  return {
    props: { allPosts },
  }
}
