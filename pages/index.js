import Head from 'next/head'
import Container from '../components/container'
import Intro from '../components/intro'
import Layout from '../components/layout'
import CurrentShow from '../components/layout'
import { getShows } from '../lib/api'
import SideBar from "../components/sideBar"

export default function Index({ show }) {

  return (
    <div className="flex mb-4">
    <div className="w-full md:w-1/5">
      <SideBar />
    </div>
    <div className="w-full md:w-4/5 p-4">
    <h1>Welcome to our new website!!!! <br/>
We are glad to have you here. <br/>
KRLX is special community and this is an
atempt to showcase our soul</h1>
    </div>
    </div>
  )
}

export async function getStaticProps() {
  const allShows = await getShows()
  return {
    props: { show: allShows },
  }
}
