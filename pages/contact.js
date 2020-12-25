import { getPageByUri } from '../lib/api'
import SideBar from "../components/sideBar"

export default function Contact({data}) {
  return (
  <div>
    <h1>{data.title}</h1>
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
