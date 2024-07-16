
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from './Context/ThemeContext'
import App from './App.jsx'
import { Toaster } from "react-hot-toast";
import './index.css'
import ReactGA from "react-ga4";

ReactGA.initialize("G-5Q4WC6TDYB");

// Send pageview with a custom path
ReactGA.send({ hitType: "pageview", page: window.location.pathname });

ReactDOM.createRoot(document.getElementById('root')).render(

    <ThemeProvider>
        <Toaster />
        <App />

    </ThemeProvider>


)
