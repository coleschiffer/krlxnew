import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import MoreStories from '../../components/more-stories'
import PostHeader from '../../components/post-header'
import SectionSeparator from '../../components/section-separator'
import Layout from '../../components/layout'
import { getAllPostsWithSlug, getPostAndMorePosts, getPageByUri } from '../../lib/api'
import PostTitle from '../../components/post-title'
import Head from 'next/head'
import Tags from '../../components/tags'
import SideBar from "../../components/sideBar"
import Header from '../../components/header'

export default function Post({ post, posts, sidePage}) {
  const router = useRouter()
  const morePosts = posts?.edges

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <div className="grid grid-cols-4 gap-4">
    <div className="col-span-4 md:col-span-1">
      <SideBar data={sidePage}/>
    </div>
    <div className="col-span-4 md:col-span-3 p-3">
    <Layout>
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>
                  {post.title} - KRLX 88.1 FM
                </title>
                <meta
                  property="og:image"
                  content={post.featuredImage?.node?.sourceUrl}
                />
              </Head>
              <Header/>

              <PostHeader
                title={post.title}
                coverImage={post.featuredImage?.node}
                date={post.date}
                author={post.author?.node}
                categories={post.categories}
              />
              <PostBody content={post.content} />
              <footer>
                {post.tags.edges.length > 0 && <Tags tags={post.tags} />}
              </footer>
            </article>

            <SectionSeparator />
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </>
        )}
      </Container>
    </Layout>
    </div>
    </div>
  )
}

export async function getStaticProps({ params}) {
  if (!params.slug) {
      return {
        notFound: true,
      }
    }
  if(params.slug) {
    const data = await getPostAndMorePosts(params.slug)
  }
  const sidePage = await getPageByUri("/side-bar/")
  if (!data) {
      return {
        notFound: true,
      }
    }
  return {
    props: {
      post: data.post,
      posts: data.posts,
      sidePage,
    },
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug()
  if (!allPosts) {
      return {
        notFound: true,
      }
    }
  return {
    paths: allPosts.edges.map(({ node }) => `/posts/${node.slug}`) || [],
    fallback: true,
  }
}
