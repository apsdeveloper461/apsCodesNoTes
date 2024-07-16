import React from 'react'

function LoadingPreviewDocx() {
  return (
    <>
    {/* <p className='mb-5'></p> */}
    <div className=' animate-pulse m-auto   h-10 rounded-full bg-opacity-15 bg-gray-500 px-2  w-3/6 '></div>
    {/* <div className=' animate-pulse m-auto   h-10 rounded-full bg-opacity-15 bg-gray-500 px-2 mt-2  w-2/6'></div> */}
    <div className='flex items-center justify-center gap-5'>
    <div className=' animate-pulse    min-w-40 w-2/6 h-10 rounded-full bg-opacity-15 bg-gray-500 px-2 mt-2  ' style={{width:'25vw'}}></div>
    <div className=' animate-pulse   min-w-40 w-2/6 h-10 rounded-full bg-opacity-15 bg-gray-500 px-2 mt-2  ' style={{width:'25vw'}}></div>


    </div>
    <div className=' animate-pulse m-auto   h-screen rounded-xl bg-opacity-15 bg-gray-500 px-2  my-7 ' style={{width:'90%',height:'80vh'}}></div>
    </>
  )
}

export default LoadingPreviewDocx