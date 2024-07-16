import React from 'react'

function LoadingOnSearch() {
  return (
    <>
    <div className=' animate-pulse   h-10 rounded-full bg-opacity-15 bg-gray-500 px-2  m-4 w-4/6'></div>
    {/* <span className={`relative gridTitle text-2xl md:text-3xl lg:text-3xl   font-semibold     cursor-pointer`}></span> */}
    
    <div className="loadingConanier gridContainer grid jus justify-items-center justify-content-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4  mt-5 md:mt-10 lg:mt-10">

        <div className={`animate-pulse bg-opacity-15 bg-gray-500 mb-5 gridItem py-2 px-3 w-5/6 gap-5 mx-auto flex pb-4 flex-col  items-center justify-start  rounded-2xl  sahd `}>
            <div className="img w-36 h-36  "></div>
            <div className="px-3 gridItemContent ml-3 flex-col text-center ">
                <h1 className=' w-full h-8'></h1>
                <h1 className=' w-full h-8'></h1>
                <h1 className=' w-full h-7'></h1>
                <h1 className=' w-full h-7'></h1>
                </div>
        </div>
        <div className={`animate-pulse bg-opacity-15 bg-gray-500 mb-5 gridItem py-2 px-3 w-5/6 gap-5 mx-auto flex pb-4 flex-col  items-center justify-start  rounded-2xl  sahd `}>
            <div className="img w-36 h-36  "></div>
            <div className="px-3 gridItemContent ml-3 flex-col text-center ">
                <h1 className=' w-full h-8'></h1>
                <h1 className=' w-full h-8'></h1>
                <h1 className=' w-full h-7'></h1>
                <h1 className=' w-full h-7'></h1>
                </div>
        </div>
        
        <div className={` lg:flex hidden animate-pulse bg-opacity-15 bg-gray-500 mb-5 gridItem py-2 px-3 w-5/6 gap-5 mx-auto  pb-4 flex-col  items-center justify-start  rounded-2xl  sahd `}>
            <div className="img w-36 h-36  "></div>
            <div className="px-3 gridItemContent ml-3 flex-col text-center ">
                <h1 className=' w-full h-8'></h1>
                <h1 className=' w-full h-8'></h1>
                <h1 className=' w-full h-7'></h1>
                <h1 className=' w-full h-7'></h1>
                </div>
        </div>
        </div>
        </>
  )
}

export default LoadingOnSearch