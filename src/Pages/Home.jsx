import React, { useContext, useEffect, useRef, useState } from 'react'
import LandingPage from '../Component/LandingPage';
import { ThemeContext } from '../Context/ThemeContext';
import Header from '../Component/Header';
import SubHeader from '../Component/SubHeader';
import GridDisplay from '../Component/GridDisplay'
import { FaArrowUp } from "react-icons/fa";
import CheatSheat from '../assets/CheatSheat'
import LoadingOnSearch from '../Component/LoadingOnSearch';
import Notes from '../assets/Notes'
import Roadmaps from "../assets/roadmap";
import { toast } from "react-hot-toast";

function Home() {
    const { theme } = useContext(ThemeContext)
    const [searchData, setSearchData] = useState('')
    const [cheatsheatData, setCheatsheatData] = useState(CheatSheat)
    const [notesData, setNotesData] = useState(Notes)
    const [roadmap, setRoadmap] = useState(Roadmaps)
    const [filterCategory,setFilterCategory]=useState({
        isCheatsheat:true,
        isNotes:true,
        isRoadmap:true
    })
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        console.log(Roadmaps);
        setCheatsheatData(CheatSheat)
        setNotesData(Notes)
        setRoadmap(Roadmaps)
    }, [CheatSheat, Notes,Roadmaps])
const getBgToastColor=(condition)=>{
    return theme === condition? 'white':'black';
    
}
    // Category Filter function 
    const categoryFilter=(event)=>{
                 
        try {
            setIsLoading(true)
            const e=event.target.value
            // console.log(e);
            if(e.toLowerCase() === 'all'){
                setFilterCategory({
                    isCheatsheat:true,
                    isNotes:true,
                    isRoadmap:true
                })
            }else if(e.toLowerCase() === 'cheatsheat'){
                setFilterCategory({
                    isCheatsheat:true,
                    isNotes:false,
                    isRoadmap:false
                })
            }else if(e.toLowerCase() === 'notes'){
                setFilterCategory({
                    isCheatsheat:false,
                    isNotes:true,
                    isRoadmap:false
                })
            }else{
                setFilterCategory({
                    isCheatsheat:false,
                    isNotes:false,
                    isRoadmap:true
                })
            }
            setTimeout(() => {
                setIsLoading(false)
            }, 1000);
        } catch (error) {
            setIsLoading(false)
            console.error("Filter Error",error)
            toast.error('Something wrong! Reload page and then try', {
                style: {
                  backgroundColor:getBgToastColor('light'), 
                  color:getBgToastColor('dark'),
                  fontWeight:'600'
                },
                position: 'right-center', // change position to top-center
              });
        }
    }
    window.onscroll = () => {
    if(document.getElementById('scrollToTop')){
            if (window.scrollY > 200) {
                document.getElementById('scrollToTop').style.display = 'block'
            } else {
                document.getElementById('scrollToTop').style.display = 'none'
            }
        }
    }
    const ScrollToTopClickHandler = () => {
        window.scrollTo(0, 0)
    }
    const searchBarChangeDataHandler = (event) => {
        try {
            const e = event.target.value
            setIsLoading(true);
            // if
            setCheatsheatData(CheatSheat.filter((item) => {
                return (
                    item.title.toLowerCase().includes(e.toLowerCase()) || item.category.toLowerCase().includes(e.toLowerCase()) || item.search.toLowerCase().includes(e.toLowerCase())
                )
            }))
            setNotesData(Notes.filter((item) => {
                return (
                    item.title.toLowerCase().includes(e.toLowerCase()) || item.category.toLowerCase().includes(e.toLowerCase()) || item.search.toLowerCase().includes(e.toLowerCase())
                )
            }))
            setRoadmap(Roadmaps.filter((item) => {
                return (
                    item.title.toLowerCase().includes(e.toLowerCase())  || item.search.toLowerCase().includes(e.toLowerCase())
                )
            }))
            setTimeout(() => {
                setIsLoading(false)
            }, 1000);
        } catch (error) {
            setIsLoading(false);
            toast.error('Something wrong!  Try Again', {
                style: {
                  backgroundColor:getBgToastColor('light'), 
                  color:getBgToastColor('dark'),
                  fontWeight:'600'
                },
                position: 'right-center', // change position to top-center
              });
        }
    }

    return (
        <>
            <Header />
            <LandingPage />
            <div className={`border-b-2 ${theme == 'light' ? ' border-gray-500' : 'border-gray-100'} pb-4 mx-10 my-4`}></div>
            <div id='scrollToTop' onClick={ScrollToTopClickHandler} className={`p-2 h-10 rounded-full w-10 ${theme === 'light' ? 'bg-slate-200' : 'bg-slate-800'}    border-2 border-custom-purple`} ><FaArrowUp className='w-full h-full text-custom-purple' /></div>
            <SubHeader onChangeSearch={searchBarChangeDataHandler} onFilterSelectionChange={categoryFilter} />
            <section id='exploreData' className='mb-10 w-screen' >
                {isLoading ? <LoadingOnSearch /> : <>
                    <GridDisplay title='Cheat Sheats' data={cheatsheatData} isDisplay={filterCategory.isCheatsheat} />
                    <div id="exploreNotes"></div>
                    <GridDisplay title='Notes' data={notesData} isDisplay={filterCategory.isNotes} />
                    <GridDisplay title='Road Maps' data={roadmap} isDisplay={filterCategory.isRoadmap} />
                    {cheatsheatData?.length < 1 && notesData?.length < 1 && roadmap?.length < 1 &&
                        <div className='w-screen my-44 m-auto flex items-center justify-center text-red-700 text-2xl px-10 text-center'> No  Found & Use other Keyword for Searching</div>
                    }
                </>}
            </section>
        </>
    )
}

export default Home