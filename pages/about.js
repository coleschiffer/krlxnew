import { getPageByUri } from '../lib/api'
import SideBar from "../components/sideBar"
import AboutHeader from "../components/about"
export default function About({data,sidePage}) {
  return (
    <div className="grid grid-cols-4 gap-4">
    <div className="col-span-4 md:col-span-1">
    <SideBar data={sidePage}/>
    </div>
  <div className="col-span-4 md:col-span-3 p-3">
        <AboutHeader />

        <div dangerouslySetInnerHTML={{ __html: data.content }} />
  </div>
  </div>
  )
}

export async function getStaticProps() {
  const data = await getPageByUri("/about/")
  const sidePage = await getPageByUri("/side-bar/")

  return {
    props: {
    data,
    sidePage
    },
  }
}
