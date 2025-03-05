import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Music from './pages/Music'
import Videos from './pages/Videos'
import Navbar from './components/Navbar'
import TopBar from './components/TopBar'
import HomeContent from './components/HomeContent'
import { GiHamburgerMenu } from "react-icons/gi";
import './App.css'
import VideoSlider from './components/VideoSlider'
import MusicSlider from './components/MusicSlider'
import './index.css'
import Footer from './components/Footer'

function App() {
  const [showNav, setShowNav] = useState(false);


  return (
    <>
      <Router>

        <section id="home">
          <header>
            <GiHamburgerMenu onClick={() => setShowNav(!showNav)} />
            <div className="topbar"> <TopBar /> </div>
          </header>

          <Navbar show={showNav} /> 

          <div className="homecontent">
            <HomeContent />
          </div>

        </section>

        <section id="videos">
          <VideoSlider />
        </section>
        
        <section id="music">
          <MusicSlider />
        </section>

        <Footer />

        

        
      </Router>  

   


    </>
  )
}

export default App
