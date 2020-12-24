import Head from 'next/head'
import Container from '../components/container'
import Intro from '../components/intro'
import Layout from '../components/layout'
import CurrentShow from '../components/layout'
import { getShows } from '../lib/api'

export default function Index({ show }) {

  return (
    <>
    <h1>Welcome to our new website!!!! <br/>
We are glad to have you here. <br/>
KRLX is special community and this is an
atempt to showcase our soul</h1>

    </>
  )
}

export async function getStaticProps() {
  const allShows = await getShows()
  return {
    props: { allShows },
  }
}
