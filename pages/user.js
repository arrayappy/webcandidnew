import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import Header from '../Components/HeaderNoSearch'
import MainPage from '../Components/MainPage'
import { API } from '../utils/exports'
//import Error from '../../Components/Error'



const UserName = (props) => {
  const router = useRouter()
  const {user_name} = router.query
  const [data,setData] = React.useState(props)

  React.useEffect(() => {
    console.log(user_name)
    console.log(API)
    console.log(props)
  },[user_name,data,props])

  return (
    <div>
      <Head>
        <title> Candid reviews posted by {user_name} </title>
        <meta name="description" content={"Find best products shared by " + user_name + " and incentivize them by buying using their links"} />
        <link rel="icon" href="/500SCircle.png" />
      </Head>
      <div>
        <div className = "bg-white lg:sticky lg:top-0 lg:z-50">
          <Header />
        </div>
        <div>
          <MainPage content= {data} /> 
        </div>
      </div>
    </div>
  )

}

export async function getServerSideProps(context) {
  
  const { user_name } = context.query

  // Fetch data from external API

   const res = await fetch(API + 'user?user_name=' + user_name)
   const data = await res.json()
  
//   // Pass data to the page via props
   return { props: { data } }
}


export default UserName

