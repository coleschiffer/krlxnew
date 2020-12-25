import { useRouter, Link } from 'next/router'
import ErrorPage from 'next/error'
import { getPersonas} from '../../lib/api'
import AlphaPersonas from '../../components/alphaPersonas'
import FeaturesHeader from '../../components/features'
import SideBar from "../../components/sideBar"

export default function listOfShows({ items }) {
  return (
    <div className="flex mb-4">
    <div className="w-full md:w-1/5">
      <SideBar />
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
  return {
    props: {
      items: allPersonas?.items,
    },
  }
}
