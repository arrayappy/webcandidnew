import Image from 'next/image'
import React from 'react'

const LandingScreen3 = () => {
    return (
        <div className = "pt-20">
            <div>
                <h1 className = "font-bold text-lg text-center my-4 text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#d83c51] to-[#efb0b8]">HOW TO EARN MONEY IN 3 SIMPLE STEPS</h1>
            </div>
            <div className = "flex flex-col lg:flex-row mt-10">
                <div className = "flex flex-1 flex-col mx-4 items-center pt-10 lg:pt-0">
                    <Image width={533} height={533} src={'/Social.png'} alt="Candid Logo" layout = 'fixed'/>
                    <h2 className = "flex flex-wrap font-bold text-lg mt-5">ADD YOUR PRODUCT CRITIC ALONG WITH BUY LINK</h2>
                    <h4 className = "flex flex-wrap text-center	text-sm px-5 mt-3 ">Write authentic reviews for the product you used along with flipkart or amazon link</h4>
                </div>
                <div className = "flex flex-1 flex-col mx-4 items-center pt-10 lg:pt-0">
                    <Image width={533} height={533} src={'/Contextual.png'} alt="Candid Logo" layout = 'fixed'/>
                    <h2 className = "flex flex-wrap font-bold text-lg mt-5">SHARE THESE CRITICS WITH YOUR FRIENDS</h2>
                    <h4 className = "flex flex-wrap text-center	text-sm px-5 mt-3">Share these reviews on social media and other channels</h4>
                </div>
                <div className = "flex flex-1 flex-col mx-4 items-center pt-10 lg:pt-0">
                    <Image width={533} height={533} src={'/Brands.png'} alt="Candid Logo" layout = 'fixed'/>
                    <h2 className = "flex flex-wrap font-bold text-lg mt-5">EARN MONEY WHEN YOUR FRIENDS BUY FROM THOSE CRITICS</h2>
                    <h4 className = "flex flex-wrap text-center	text-sm px-5 mt-3">When your friends buy from the buy link on your post, you will get rewarded</h4>
                </div>
            </div> 
        </div>
    )
}

export default LandingScreen3
