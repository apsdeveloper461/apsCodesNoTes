import React, { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon,FaSun } from "react-icons/fa";

function Header() {
    const {toggleTheme,theme}=useContext(ThemeContext)
     const GoToSearchBar=()=>{
      console.log("Click on search bar");
      const search_bar=document.getElementById('searchNotes').focus()
     }
  return (
    <>
    
    <div className="fixed mt-4  h-10 w-full " style={{zIndex:'1'}} >
    <div className={`h-full px-5 py-2 m-auto shadow-md   ${theme === 'light'? 'bg-gray-400 shadow-slate-700': 'bg-gray-600 shadow-slate-400'}  bg-opacity-65 rounded-full flex items-center justify-between`} style={{minWidth:'300px', width:'80vw'}}>
      <h1 className="logo font-extrabold  " style={theme === 'light'?{color:'purple',fontFamily:'fantasy'}:{color:'white',fontFamily:'fantasy'}}>ApS CodeNoTes</h1>


<div className='flex items-center gap-2'>

<AiOutlineSearch onClick={GoToSearchBar} className='bg-custom-purple text-slate-100 p-1 rounded-full cursor-pointer border border-gray-50 h-6 w-6'/>

    {theme== 'light'?<FaMoon className=' cursor-pointer text-gray-800 border-gray-900 h-6 w-6 border p-1 rounded-full' onClick={toggleTheme}/>:<FaSun className='border p-1 h-6 w-6 rounded-full text-gray-100 cursor-pointer' onClick={toggleTheme}/>}
     

</div>
      </div>
    </div>
    </>
  )
}

export default Header