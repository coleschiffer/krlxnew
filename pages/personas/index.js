import { useRouter, Link } from 'next/router'
import ErrorPage from 'next/error'
import { getPersonas, getPageByUri} from '../../lib/api'
import AlphaPersonas from '../../components/alphaPersonas'
import FeaturesHeader from '../../components/features'
import SideBar from "../../components/sideBar"

export default function listOfShows({ items, sidePage }) {
  return (
    <div className="grid grid-cols-4 gap-4">
    <div className="col-span-4 md:col-span-1">
      <SideBar data={sidePage} />
    </div>
  <div className="col-span-4 md:col-span-3 p-3">
  <FeaturesHeader />
    <AlphaPersonas
      items={items}
    />
</div>
</div>

  )
}
export async function getStaticProps({}) {
  const allPersonas = await getPersonas()
  const sidePage = await getPageByUri("/side-bar/")

  return {
    props: {
      items: allPersonas?.items,
      sidePage
    },
  }
}
