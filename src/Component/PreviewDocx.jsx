import React, {  useContext, useEffect, useState } from 'react'
import LoadingPreviewDocx from './LoadingPreviewDocx'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { FaDownload, FaArrowLeft } from "react-icons/fa";
import { toast } from 'react-hot-toast';
import { downloadFileHandler } from '../Helper/DownloadFile';
import { ThemeContext } from '../Context/ThemeContext';

function PreviewDocx() {
  const stateData = useLocation()
  const param = useParams()
  const {theme}=useContext(ThemeContext)
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(true)
  const [previewData, setPreviewData] = useState({
    title: '',
    docxPreviewURL: ''
  })


  useEffect(() => {
    window.scrollTo(0, 0)
    console.log(param.docx, stateData.state);
    if (stateData && param) {
      setPreviewData({
        title: param.docx,
        docxPreviewURL: stateData.state
      })
      setTimeout(() => {
        setIsLoading(false)

      }, 1500);
    }
  }, [stateData, param])
  return (
    <>
      {
        isLoading ?
          <LoadingPreviewDocx /> :
          <>

            <h1 className='text-center text-2xl font-semibold text-purple-800 py-3 border-b-2 border-gray-600 mb-4  mx-5'>{previewData.title}</h1>
            <div className='flex items-center justify-center gap-5 mb-5'>

              <button onClick={() => navigate('/#exploreNotes')} className='min-w-40 w-2/6 h-10 btn border-2 border-purple-800 hover:border-gray-200 hover:text-gray-100 hover:bg-purple-800  outline-purple-800 text-purple-800 rounded-xl flex justify-center items-center gap-2'> <FaArrowLeft /> Go Back</button>
              <button onClick={() => downloadFileHandler(previewData?.docxPreviewURL,theme)} className='min-w-40 w-2/6 h-10  btn border-2 border-purple-800 hover:border-gray-200 hover:text-gray-100 hover:bg-purple-800  outline-purple-800 text-purple-800 rounded-xl flex justify-center items-center gap-2 my-3'>Download Now <FaDownload /></button>


            </div>
            <iframe container="#viewer" src={`https://drive.google.com/file/d/${previewData.docxPreviewURL}/preview`} style={{ minHeight: '400px', width: '95vw', height: '95vh' }} className='m-auto rounded-xl h-5/6 pb-10' ></iframe>

          </>
      }
    </>
  )
}

export default PreviewDocx