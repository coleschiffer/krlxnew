import { useRouter, Link } from 'next/router'
import ErrorPage from 'next/error'
import { getPersonas, getPageByUri} from '../../lib/api'
import AlphaPersonas from '../../components/alphaPersonas'
import FeaturesHeader from '../../components/features'
import SideBar from "../../components/sideBar"
import Header from '../../components/header'
import Container from '../../components/container'

export default function listOfShows({ items, sidePage }) {
  return (
    <Container>
    <Header />
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
</Container>
  )
}
export async function getStaticProps({}) {
  const allPersonas = await getPersonas()
  const sidePage = await getPageByUri("/side-bar/")
  if (!sidePage||!allPersonas) {
      return {
        notFound: true,
      }
    }
  return {
    props: {
      items: allPersonas?.items,
      sidePage
    },
  }
}
