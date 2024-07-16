import React, { useContext, useRef } from 'react'
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { MdLibraryBooks } from "react-icons/md";
import { ThemeContext } from '../Context/ThemeContext';

function LandingPage() {
  const { theme } = useContext(ThemeContext)

  return (
    <>
      <section className="hero">
        <div className={`background-image backImg   w-full ${theme === 'light' ? 'landingbglight' : 'landingbgdark'}`} > </div>
        <div className='background-image  contOverImage w-full'>
          <h1 className='text-purple-500  text-center' >Welcome to APS CodeNotes</h1>
          <p className={`${theme === 'light' ? 'text-custom-gray' : 'text-gray-300'} text-center`} >
            Explore our library of programming resources, including books, notes, and study materials. Transform your skills with our comprehensive collection.
          </p>
          <div className="heroDivButtons">
            <a  href={'#exploreNotes'} className=" border-2    bg-gradient-to-r from-custom-purple to-purple-900 border-custom-purple text-white px-4 py-2 rounded-full hover:opacity-80 flex items-center"> Browse Notes <MdLibraryBooks className='mx-1' />  </a>
            <a href={'#exploreData'} className="border-2 bg-gradient-to-r  border-custom-purple from-custom-purple text-white px-4 py-2 rounded-full hover:opacity-80 flex items-center  ">Explore<FaArrowRight className='p-1' /></a>

          </div>
        </div>
        <div className="description z-20 text-gray-200">
          <h1 className='text-custom-purple text-center font-extrabold ' style={{ fontSize: '30px' }}>About Us</h1>
          <div>
            <p>Welcome to <span className="text-purple-500">APS CodeNotes</span>, your ultimate resource for coding notes and books! Our platform is dedicated to providing <span className="text-purple-500">high-quality resources</span> for  developers of all levels Whether you're looking to learn a new programming language, prepare for a certification exam. With our platform, you'll have access to a wealth of coding knowledge, including <span className="text-purple-500">detailed explanations</span>, <span className="text-purple-500">practical examples</span>, and <span className="text-purple-500">real-world applications</span>. Our goal is to provide you with the tools you need to succeed in the world of programming. </p>
            <p>At <span className="text-purple-500">APS CodeNotes</span>, we believe that learning should be <span className="text-purple-500">easy</span>, <span className="text-purple-500">efficient</span>, and <span className="text-purple-500">accessible</span>. That's why we've created a platform that's <span className="text-purple-500">intuitive</span>, <span className="text-purple-500">user-friendly</span>, and constantly updated with <span className="text-purple-500">fresh content</span>. Our notes and books are written in a clear and concise manner, making it easy for you to understand even the most complex coding concepts. With <span className="text-purple-500">APS CodeNotes</span>, you'll be able to <span className="text-purple-500">learn faster</span>, <span className="text-purple-500">code smarter</span>, and <span className="text-purple-500">stay ahead of the curve</span> in the world of programming. </p>
          </div>
        </div>

      </section>
    
    </>
  )
}

export default LandingPage