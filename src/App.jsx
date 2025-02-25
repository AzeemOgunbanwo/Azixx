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
        <header>
          <GiHamburgerMenu onClick={() => setShowNav(!showNav)} />
          <div className="topbar"> <TopBar /> </div>
        </header>

        <Navbar show={showNav} /> 

        <div className="homecontent">
          <HomeContent />
        </div>

        <VideoSlider />
        

        <MusicSlider />

        <Footer />

        <div className='main'>
          <Routes>
            <Route path='/'  element={<Home />} />
            <Route path='/music'  element={<Music />} />
            <Route path='/videos'  element={<Videos />} />
            {/* <Route path="/video-slider" element={<VideoSlider />} />
            <Route path="/video/:id" element={<VideoPage />} /> */}
          </Routes>
        </div>

        
      </Router>  

   


    </>
  )
}

export default App
