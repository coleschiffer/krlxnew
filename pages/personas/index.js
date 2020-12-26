import { useRouter, Link } from 'next/router'
import ErrorPage from 'next/error'
import { getPersonas, getPageByUri} from '../../lib/api'
import AlphaPersonas from '../../components/alphaPersonas'
import FeaturesHeader from '../../components/features'
import SideBar from "../../components/sideBar"

export default function listOfShows({ items, sidePage }) {
  return (
    <div className="flex mb-4">
    <div className="w-full md:w-1/5">
      <SideBar data={sidePage} />
    </div>
  <div className="p-4 w-full md:w-4/5">
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
