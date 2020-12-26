import Head from 'next/head'
import Container from '../components/container'
import Layout from '../components/layout'
import CurrentShow from '../components/layout'
import { getShows, getPageByUri } from '../lib/api'
import SideBar from "../components/sideBar"

export default function Index({ show,sidePage }) {

  return (
    <div className="grid grid-cols-4 gap-4">
    <div className="col-span-4 md:col-span-1">
      <SideBar data={sidePage}/>
    </div>
    <div className="col-span-4 md:col-span-3 p-3">
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
