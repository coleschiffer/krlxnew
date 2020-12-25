import { getPageByUri } from '../lib/api'
import Link from "next/router"
import FeaturesHeader from '../components/features'
import SideBar from "../components/sideBar"

export default function Features({data}) {
  return (
    <div className="flex mb-4">
    <div className="w-full md:w-1/5">
      <SideBar />
    </div>
  <div className="p-4">
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
