import { getPageByUri } from '../lib/api'
import Link from "next/router"
import FeaturesHeader from '../components/features'
export default function Features({data}) {
  return (
  <div>
      <FeaturesHeader />
        <div dangerouslySetInnerHTML={{ __html: data.content }} />
  </div>
  )
}

export async function getStaticProps() {
  const data = await getPageByUri("/contact/")
  return {
    props: {
    data
    },
  }
}
