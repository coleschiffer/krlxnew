import Head from 'next/head'
import Header from '../components/header'
import Container from '../components/container'
import Layout from '../components/layout'
import { getShows, getPageByUri } from '../lib/api'
import SideBar from "../components/sideBar"
import Song from "../components/song"
import ReactPlayer from 'react-player/youtube'
export default function Index({ show,sidePage,homePage }) {

  return (
    <Container>
    <Head>
    <title>
    Home - KRLX 88.1 FM
    </title>
    </Head>
    <Header />
    <div className="grid grid-cols-4 gap-4">
    <div className="col-span-4 md:col-span-1">
      <SideBar data={sidePage}/>
    </div>
    <div className="col-span-4 md:col-span-3 p-3">
    <div dangerouslySetInnerHTML={{ __html: homePage?.content }} />
    </div>
    </div>

    </Container>
  )
}

export async function getStaticProps() {
  const sidePage = await getPageByUri("/side-bar/")
  const homePage = await getPageByUri("/home/")

  const allShows = await getShows()
  return {
    props: { show: allShows, sidePage, homePage},
  }
}
