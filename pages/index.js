import Head from 'next/head'
import HeaderNoSearch from '../Components/HeaderNoSearch'
import Footer from '../Components/Footer'
import {API} from '../utils/exports'
import React from 'react'
import { useRouter } from 'next/router'
import LandingPage from '../Components/LandingPage'
import Pixel from '../Components/Pixel'



const Home = (props) => {
  const router = useRouter()
  const [data,setData] = React.useState(props)

  return (
    <div>
      <Head>
        <title>Candid Reviews - Home - Get authentic reviews for all D2C brands </title>
        <meta name="description" content="Reviews for all D2C Indian products. We are India's first social platform for authentic product reviews on new age Indian brands in skin care , hair care and other categories. Now discover and share new D2C products by downloading Candid App. Review them at day level & connect with influencers by using View on Instagram for chat" />
        <link rel="icon" href="/500SCircle.png" />
      </Head>
      <div>
        <Pixel name='FACEBOOK_PIXEL_1' />
        <div className = "bg-white lg:top-0 lg:z-50">
          <HeaderNoSearch />
        </div>
        <div>
          <LandingPage content= {data} />
        </div>
        <div className = "bg-white lg:bottom-0 lg:z-50 mt-20">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Home

export async function getServerSideProps() {


  const res = await fetch(API + 'brands/top')
  const data = await res.json()
  
  // Pass data to the page via props
  return { props: { data } }
}