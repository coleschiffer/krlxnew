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
    <div className="flex mb-4">
    <div className="w-full md:w-1/5">
    <SideBar data={sidePage}/>
    </div>
  <div className="p-4 w-full md:w-4/5">
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
