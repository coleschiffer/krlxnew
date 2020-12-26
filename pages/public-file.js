import { getPageByUri } from '../lib/api'
import SideBar from "../components/sideBar"
export default function PublicFile({data, sidePage}) {
  return (
    <div className="grid grid-cols-4 gap-4">
    <div className="col-span-4 md:col-span-1">
    <SideBar data={sidePage}/>
    </div>
  <div className="col-span-4 md:col-span-3 p-3">
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
