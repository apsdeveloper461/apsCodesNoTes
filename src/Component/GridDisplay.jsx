import React, { useContext, useState } from 'react'
import { FaCircleNotch, FaDownload } from "react-icons/fa";
import { FaReadme } from "react-icons/fa";
import { ThemeContext } from '../Context/ThemeContext';
import {  useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';
import { downloadFileHandler } from '../Helper/DownloadFile';

function GridDisplay({ title, data,isDisplay=false }) {

    const navigate=useNavigate()
    const { theme } = useContext(ThemeContext)
   
    const GoToPreviewPage=(T,C)=>{
        console.log(T,C);
        navigate(`/${T}`,{state:C })
    }
    return (
        <>
            {
               isDisplay && data?.length > 0 &&
                <>
                    <span className={`relative gridTitle text-2xl md:text-3xl lg:text-3xl   font-semibold ${theme === 'light' ? 'text-black' : 'text-gray-300'}   px-2 mx-2 my-4  cursor-pointer`}>{title}</span>

                    <div className="gridContainer  grid gap-8  justify-content-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  mt-10 md:mt-10 lg:mt-10">
                        {data?.length > 0 && data.map((item,idx) => {
                            return (
                                <div key={idx + title} className={` relative min-h-full gridItem py-2 px-3 w-5/6 gap-5 mx-auto flex pb-4 flex-col  items-center justify-start ${theme === 'light' ? ' bg-slate-100 shadow-lg shadow-slate-300' : ' text-gray-500 shadow-md shadow-slate-700'} rounded-2xl  sahd `}>
                                    <img className="img w-32 h-32 sm:h-36 sm:w-36 md:h-36 md:w-36 lg:w-36 lg:h-36  cursor-pointer rounded-full  text-center" src={`${item.img.url}`} alt={item.img.alt} />
                                    <div className="px-3 gridItemContent ml-3 flex-col text-center ">
                                        <h1 className='text-xl font-semibold'>{item.title}</h1>
                                        <h2 className='text-md font-light'>{item?.category} </h2>
                                        <button onClick={() => downloadFileHandler(item?.downloadLink,theme)} className='p-1 px-2 w-full m-auto btn border-2 border-purple-800 hover:border-gray-200 hover:text-gray-100 hover:bg-purple-800  outline-purple-800 text-purple-800 rounded-xl flex justify-center items-center gap-2 my-3'>Download Now <FaDownload /></button>
                                        <button onClick={()=>GoToPreviewPage(item.title,item.downloadLink)} className='p-1 px-2 w-full btn border-2 border-purple-800 hover:border-gray-200 hover:text-gray-100 hover:bg-purple-800  outline-purple-800 text-purple-800 rounded-xl flex justify-center items-center gap-2'>Read Online <FaReadme /></button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className={`border-b-2 ${theme == 'light' ? ' border-gray-700' : 'border-gray-700'} pb-4 mx-16 my-10`}></div>
                </>
            }
        </>
    )
}

export default GridDisplay