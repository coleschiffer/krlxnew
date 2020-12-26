import { getPageByUri } from '../lib/api'
import SideBar from "../components/sideBar"
import AboutHeader from "../components/about"
export default function About({data,sidePage}) {
  return (
    <div className="flex mb-4">
    <div className="w-full md:w-1/5">
    <SideBar data={sidePage}/>
    </div>
  <div className="p-4 w-full md:w-4/5">
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
