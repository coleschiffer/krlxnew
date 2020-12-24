import { useRouter, Link } from 'next/router'
import ErrorPage from 'next/error'
import { getShows} from '../../lib/api'
import AlphShows from '../../components/allShowsAlph'
export default function listOfShows({ items }) {
  return (
  <div>
    <AlphShows
      items={items}
    />
</div>
  )
}
export async function getStaticProps({ params, preview = false, previewData }) {
  const allShows = await getShows()
  return {
    props: {
      preview,
      items: allShows.items,
    },
  }
}
