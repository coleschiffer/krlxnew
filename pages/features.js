import { getPageByUri } from '../lib/api'
import Link from "next/router"
import FeaturesHeader from '../components/features'
import SideBar from "../components/sideBar"

export default function Features({data}) {
  return (
    <div className="grid grid-cols-4 gap-4">
    <div className="col-span-4 md:col-span-1">
      <SideBar />
    </div>
  <div className="col-span-4 md:col-span-3 p-3">
      <FeaturesHeader />
        <div dangerouslySetInnerHTML={{ __html: data.content }} />
  </div>
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
