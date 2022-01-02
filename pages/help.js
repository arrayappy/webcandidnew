import Head from 'next/head'
import React from 'react'


function help() {
    return (
        <div>
            <Head>
                <title>Candid Reviews - Help and Contact Us </title>
                <meta name="description" content="This page contains the contact us information of the Candid Reviews App." />
                <link rel="icon" href="/500SCircle.png" />
            </Head>
            <div className='m-10'>
                <h1 className='font-bold text-2xl'>Contact us</h1>
            <p className='mt-5'>
For any issues and concerns with out platform, contact us at hello@getcandid.app. We will respond within 72 hours. 
</p>
</div>
        </div>
    )
}

export default help
