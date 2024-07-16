import React, { useContext } from 'react'
import { MdCopyright } from "react-icons/md";
import { ThemeContext } from '../Context/ThemeContext';

function Footer() {
  const {theme}=useContext(ThemeContext)
  return (
    <>
    <footer className={`relative bottom-0 ${theme === 'light'?'bg-gray-100':'bg-slate-900 shadow-lg  shadow-slate-50 text-gray-300' } py-5 flex items-center justify-center`}>
     <span className='text-custom-purple mx-1 flex items-center'><MdCopyright/> 2024</span> All right reserved | <a  target='_blank' href='https://www.linkedin.com/in/mehboob-alam-3999822b3' className='ml-1 hover:text-custom-purple text-purple-900 cursor-pointer'>ApS Developer</a>
    </footer>


      </>

  )
}

export default Footer