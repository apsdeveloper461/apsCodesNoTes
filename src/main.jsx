import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider, ThemeContext } from './Context/ThemeContext'
import App from './App.jsx'
import {  Toaster} from "react-hot-toast";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(

    <ThemeProvider>
        <Toaster />
        <App />

    </ThemeProvider>


)
