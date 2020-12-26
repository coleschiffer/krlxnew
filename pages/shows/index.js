import { useRouter, Link } from 'next/router'
import ErrorPage from 'next/error'
import { getShows, getPageByUri} from '../../lib/api'
import AlphShows from '../../components/allShowsAlph'
import FeaturesHeader from '../../components/features'
import SideBar from "../../components/sideBar"

export default function listOfShows({ items, sidePage }) {
  return (
    <div className="flex mb-4">
    <div className="w-full md:w-1/5">
      <SideBar data={sidePage} />
    </div>
  <div className="w-full md:w-4/5 p-4">
  <FeaturesHeader />
    <AlphShows
      items={items}
    />
</div>
</div>
  )
}
export async function getStaticProps({ params, preview = false, previewData }) {
  const allShows = await getShows()
  const sidePage = await getPageByUri("/side-bar/")

  return {
    props: {
      preview,
      items: allShows?.items,
      sidePage
    },
  }
}
