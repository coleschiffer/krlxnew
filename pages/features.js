import { getPageByUri } from '../lib/api'
import Link from "next/router"
import FeaturesHeader from '../components/features'
import SideBar from "../components/sideBar"
import Head from 'next/head'
import Container from '../components/container'
import Header from '../components/header'

export default function Features({data}) {
  return (
    <Container>
    <Head>
    <title>
    Features - KRLX 88.1 FM
    </title>
    </Head>
    <Header />
    <div className="grid grid-cols-4 gap-4">
    <div className="col-span-4 md:col-span-1">
      <SideBar />
    </div>
  <div className="col-span-4 md:col-span-3 p-3">
      <FeaturesHeader />
        <div dangerouslySetInnerHTML={{ __html: data.content }} />
  </div>
  </div>
</Container>
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
