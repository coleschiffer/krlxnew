import { getPageByUri } from '../lib/api'
import SideBar from "../components/sideBar"
export default function PublicFile({data, sidePage}) {
  return (
    <div className="flex mb-4">
    <div className="w-full md:w-1/5">
    <SideBar data={sidePage}/>
    </div>
  <div className="p-4 w-full md:w-4/5">
    <div className="text-xl">{data.title}</div>
        <div dangerouslySetInnerHTML={{ __html: data.content }} />
  </div>
  </div>
  )
}

export async function getStaticProps() {
  const data = await getPageByUri("/public-file/")
  const sidePage = await getPageByUri("/side-bar/")
  return {
    props: {
    data,
    sidePage
    },
  }
}
