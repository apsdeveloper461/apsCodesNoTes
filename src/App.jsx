
import { useContext } from 'react'
import './App.css'
import FormPage from './FormPage'
import { ThemeContext } from './Context/ThemeContext'
import Footer from './Component/Footer'
import LoadingOnSearch from './Component/LoadingOnSearch'
import PreviewDocx from './Component/PreviewDocx'
import {BrowserRouter as Router,Routes,Route, Link  } from "react-router-dom";
import Home from './Pages/Home'

function App() {
  const { theme } = useContext(ThemeContext)
  return (
   <Router>
      <div className={`w-full min-h-screen  ${theme == 'light' ? 'bg-white' : "bg-slate-900"}`} style={{ zIndex: '-1' }}>
        
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/:docx' exact element={<PreviewDocx/>}/>
        

        </Routes>
      <Footer/>
      </div>
      
    </Router>
    

  )
}

export default App
