import React, { useContext, useState } from 'react'
import { FaFilter } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { ThemeContext } from '../Context/ThemeContext';

function SubHeader({onChangeSearch,onFilterSelectionChange}) {
    const { theme } = useContext(ThemeContext)
  
    return (
        <div className='w-full h-16  flex items-center justify-end  gap-5 px-5 mb-5 overflow-hidden'>

            <form action="" style={{ maxWidth: '60%', width: '60%' }}>
                <label htmlFor="searchNotes" id='searchbarLabel' className='transistionSearchBar float-right cursor-pointer relative flex text-gray-100 w-full h-8  '>
                    <input type="text" onChange={onChangeSearch} placeholder='Search Notes, books and cheatsheat ...' name="searchNotes" id="searchNotes" className={` cursor-text px-4 border-2 active focus:border-custom-purple rounded-full w-full h-full  ${theme == 'light' ? "text-slate-800 bg-transparent" : "text-gray-100 bg-slate-900"}`} />
                    <FaSearch style={{top:'6px',right:'.2rem' }} className={`text-custom-purple rounded-full  absolute  p-1 h-5 w-5 ${theme == 'light' ? "bg-white" : "bg-slate-900"}`} />
                </label>
            </form>

            <label htmlFor="notesCategory" style={{ maxWidth: '50%' }} className={`flex items-center   gap-2 ${theme === 'light' ? 'text-gray-900' : 'text-gray-100'} `}>
                <span className='flex items-center text-lg p-1'>Filter <FaFilter /></span>
                <select name="notesCategory" onChange={onFilterSelectionChange} className={`cursor-pointer border-2 rounded-md w-4/6 hover:border-custom-purple  ${theme == 'light' ? "bg-transparent" : "bg-slate-900"}`} id="notesCategory">
                    <option value="all">All </option>
                    <option value="cheatsheat">CheatSheat</option>
                    <option value="notes"> Notes</option>
                    <option value="roadmap">Roadmaps</option>
                </select>
            </label>

        </div>
    )
}

export default SubHeader