import Image from 'next/image'



function Post({item}) {
    


    return (
        item.feed_image ? 
        <div className = "flex flex-col w-full lg:flex-row mt-0 lg:mt-3 lg:pt-3 lg:border-t-2 group transition duration-200 ease-in transform ">
            <div className = " lg:w-3/5 lg:mx-auto lg:px-auto justify-center items-center ">
                <div className = "max-w-md md:mx-auto lg:px-auto  ">
                   
                    <div className = "flex mx-auto justify-self-center justify-center mt-2 md:mx-auto md:justify-center md:justify-self-center lg:justify-start">
                        <Image
                            alt={item.product_name + " Type : " + item.category_name}
                            src={item.feed_image}
                            //layout="responsive"
                            width={300}
                            height={300}
                            className = "object-contain lg:object-cover" 
                            // layout = "fill"
                           
                        />
                    </div>
                </div>
            </div>
            <div className = "lg:w-2/5 lg:mt-0 ">
                <div className = "mt-2 lg:mt-2 mx-3   ">
                    <p>{item.product_name}</p>
                    <h3 className = "text-black text-xl font-bold " >{item.category_name}</h3>
                    <h3 className = "text-black text-xl font-bold " >{item.context_name}</h3>
                    <p className = "whitespace-pre-line break-words text-black">{item.comment}</p>
                </div>
            </div>
            {item.buy_url ? <div className = "group flex justify-evenly max-w-2xl mr-10 border-[#D7354A] border-2 items-center self-center px-4 py-2 rounded-full content-center hover:bg-[#D7354A] hover:text-white cursor-pointer">
                <a 
                href={item.buy_url}
                target="_blank"
                rel="noreferrer"
                className = "cursor-pointer "
                >
                <div>
                    <p className = "text-[#D7354A] font-bold group-hover:text-white">BUY</p>
                </div>
                </a>
            </div> : null }
            <div  className = "h-1 bg-red-100 mb-2 lg:hidden" />         
        </div> 
        : null
    )
}

export default Post
