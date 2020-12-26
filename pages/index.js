import Head from 'next/head'
import Container from '../components/container'
import Layout from '../components/layout'
import CurrentShow from '../components/layout'
import { getShows, getPageByUri } from '../lib/api'
import SideBar from "../components/sideBar"

export default function Index({ show,sidePage }) {

  return (
    <div className="flex mb-4">
    <div className="w-full md:w-1/5">
      <SideBar data={sidePage}/>
    </div>
    <div className="w-full md:w-4/5 p-4">
    <h1>Welcome to our new website!!!! <br/>
We are glad to have you here. <br/>
KRLX is a special community and this is an
atempt to showcase that</h1>
I am going to make a cool listening page here soon
    </div>
    </div>
  )
}

export async function getStaticProps() {
  const sidePage = await getPageByUri("/side-bar/")
  const allShows = await getShows()
  return {
    props: { show: allShows, sidePage},
  }
}
