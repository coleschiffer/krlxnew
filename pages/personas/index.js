import { useRouter, Link } from 'next/router'
import ErrorPage from 'next/error'
import { getPersonas} from '../../lib/api'
import AlphaPersonas from '../../components/alphaPersonas'
import FeaturesHeader from '../../components/features'

export default function listOfShows({ items }) {
  return (
  <div>
  <FeaturesHeader />
    <AlphaPersonas
      items={items}
    />
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
