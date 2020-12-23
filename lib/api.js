const API_URL = process.env.WORDPRESS_API_URL
const SPINITRON_API_URL = process.env.SPINITRON_API_URL

async function fetchAPI(query, { variables } = {}) {
  const headers = { 'Content-Type': 'application/json' }

  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers[
      'Authorization'
    ] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`
  }

  const res = await fetch(API_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }
  console.log(json.data);
  return json.data
}
function cleanJson (string) {
  var regex = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;
  var tempString = string.replace(regex, '')
  tempString = tempString.replace(/(\r\n|\n|\r)/gm, "")
  return tempString
}
export async function fetchSpinAPI(url) {
  const res = await fetch(url, { headers: { Authorization: `Bearer ${process.env.SPINITRON_AUTH_KEY}` }})
  const json = await res.json()
  if (json.errors) {
    throw new Error('Failed to fetch API')
  }
  console.log(json)
  return json
}
export async function getShows() {
  const url = SPINITRON_API_URL + "/shows?count=200"
  const data = await fetchSpinAPI(url)
  return data
}
export async function getShowByID(id) {
  const url = SPINITRON_API_URL + "/shows/" + id
  const data = await fetchSpinAPI(url)
  return data
}
export async function getPersonas() {
  const url = SPINITRON_API_URL + "/personas?count=200"
  const data = await fetchSpinAPI(url)
  return data
}
export async function getPersonaByID(id) {
  const url = SPINITRON_API_URL + "/personas/" + id
  const data = await fetchSpinAPI(url)
  return data
}
export async function getEvents() {
  const data = await fetchAPI(
    `
    query allEvents{
      posts(first: 10000) {
    edges {
      node {
        id
        title
        content
        acfEvent {
          start
          end
          location
          image {
            sourceUrl
          }
        }
      }
    }
  }
    }

  `
  )
  return data?.posts
}
export async function getPreviewPost(id, idType = 'DATABASE_ID') {
  const data = await fetchAPI(
    `
    query PreviewPost($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        databaseId
        slug
        status
      }
    }`,
    {
      variables: { id, idType },
    }
  )
  return data.post
}
export async function getPageByUri(page) {
  const data = await fetchAPI(
    `
    query getPagesById($page: String) {
  pageBy(uri: $page) {
    content
    title
    slug
    id
    pageId
  }
}
  `,
    {
      variables: {
      page: page
      },
    }
  )
  return data.pageBy
}
export async function getPostsByCat(cat,number) {
  const data = await fetchAPI(
    `
    query allPosts($cat: String,$number: Int) {
  posts(where: {categoryName: $cat}, first: $number) {
    edges {
      node {
        id
        title
        content
        featuredImage {
          node {
            srcSet
            sourceUrl
          }
        }
      }
    }
  }
}
  `,
    {
      variables: {
      cat: cat,
      number: number
      },
    }
  )
  return data?.posts
}
export async function getAllPostsWithSlug() {
  const data = await fetchAPI(`
    {
      posts(first: 10000) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  return data?.posts
}

export async function getAllPostsForHome(preview) {
  const data = await fetchAPI(
    `
    query AllPosts {
      posts(first: 20, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            title
            excerpt
            slug
            date
            featuredImage {
              node {
                sourceUrl
              }
            }
            author {
              node {
                name
                firstName
                lastName
                avatar {
                  url
                }
              }
            }
          }
        }
      }
    }
  `,
    {
      variables: {
        onlyEnabled: !preview,
        preview,
      },
    }
  )

  return data?.posts
}

export async function getPostAndMorePosts(slug, preview, previewData) {
  const postPreview = preview && previewData?.post
  // The slug may be the id of an unpublished post
  const isId = Number.isInteger(Number(slug))
  const isSamePost = isId
    ? Number(slug) === postPreview.id
    : slug === postPreview.slug
  const isDraft = isSamePost && postPreview?.status === 'draft'
  const isRevision = isSamePost && postPreview?.status === 'publish'
  const data = await fetchAPI(
    `
    fragment AuthorFields on User {
      name
      firstName
      lastName
      avatar {
        url
      }
    }
    fragment PostFields on Post {
      title
      excerpt
      slug
      date
      featuredImage {
        node {
          sourceUrl
        }
      }
      author {
        node {
          ...AuthorFields
        }
      }
      categories {
        edges {
          node {
            name
          }
        }
      }
      tags {
        edges {
          node {
            name
          }
        }
      }
    }
    query PostBySlug($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        ...PostFields
        content
        ${
          // Only some of the fields of a revision are considered as there are some inconsistencies
          isRevision
            ? `
        revisions(first: 1, where: { orderby: { field: MODIFIED, order: DESC } }) {
          edges {
            node {
              title
              excerpt
              content
              author {
                node {
                  ...AuthorFields
                }
              }
            }
          }
        }
        `
            : ''
        }
      }
      posts(first: 3, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            ...PostFields
          }
        }
      }
    }
  `,
    {
      variables: {
        id: isDraft ? postPreview.id : slug,
        idType: isDraft ? 'DATABASE_ID' : 'SLUG',
      },
    }
  )

  // Draft posts may not have an slug
  if (isDraft) data.post.slug = postPreview.id
  // Apply a revision (changes in a published post)
  if (isRevision && data.post.revisions) {
    const revision = data.post.revisions.edges[0]?.node

    if (revision) Object.assign(data.post, revision)
    delete data.post.revisions
  }

  // Filter out the main post
  data.posts.edges = data.posts.edges.filter(({ node }) => node.slug !== slug)
  // If there are still 3 posts, remove the last one
  if (data.posts.edges.length > 2) data.posts.edges.pop()

  return data
}
