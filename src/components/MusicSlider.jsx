import { Swiper , SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import {Pagination, Navigation} from 'swiper/modules'
import {Link} from 'react-router-dom'
import Beyond from '../assets/beyond.webp'
import Poison from '../assets/poison.webp'
import Spotify from '../assets/spotify.webp'
import AppleMusic from '../assets/apple.png'
import Youtube from '../assets/youtube.webp'
import Audiomack from '../assets/audiomack.png'
`   `
const MusicSlider = () => {
    return (
        <div className="music-slider">
            <h1>MUSIC</h1>
            <ul className='music-container'>
                <li>
                    <img src={Beyond} alt="" />

                    <p>Beyond EP</p>

                    <div className="streaming-links">
                            <a 
                            href={`https://open.spotify.com/album/4dRt72zKAOVLWqk77CyBmA?si=3XvlpfarTIyz9gE-8bWGFA`}
                            target="_blank"
                            rel="noopener noreferrer">
                                <img src={Spotify} alt="Spotify Link" />
                            </a>                             
                            <a 
                            href={`https://music.apple.com/us/album/beyond-ep/1755071391`}
                            target="_blank"
                            rel="noopener noreferrer">
                                <img src={AppleMusic} alt="Spotify Link" />
                            </a>                             
                            <a 
                            href={`https://music.youtube.com/playlist?list=OLAK5uy_k7WVeQMec3Y_uL-hw0U9g_6nDSsBNw12k&si=pC37Ou9TnM7mpZbf`}
                            target="_blank"
                            rel="noopener noreferrer">
                                <img src={Youtube} alt="Spotify Link" />
                            </a>                             
                            <a 
                            href={`https://audiomack.com/Azixx/album/beyond`}
                            target="_blank"
                            rel="noopener noreferrer">
                                <img src={Audiomack} alt="Spotify Link" />
                            </a>                             
                        </div>

                </li>
                <li> 
                    <img src={Poison} alt="" />

                    <p>Poison EP</p>

                    <div className="streaming-links">
                            <a 
                            href={`https://open.spotify.com/album/43AEJ0fL93JGl398s8DKoU?si=76EVYYatThGb-yt1utWjIQ`}
                            target="_blank"
                            rel="noopener noreferrer">
                                <img src={Spotify} alt="Spotify Link" />
                            </a>                             
                            <a 
                            href={`https://music.apple.com/us/album/poison-ep/1609693976`}
                            target="_blank"
                            rel="noopener noreferrer">
                                <img src={AppleMusic} alt="Spotify Link" />
                            </a>                             
                            <a 
                            href={`https://music.youtube.com/playlist?list=OLAK5uy_k6tz0TEQmfAd7VJavyIijupQauhQY1DmQ&si=iAF0zDEKHESEhZZr`}
                            target="_blank"
                            rel="noopener noreferrer">
                                <img src={Youtube} alt="Spotify Link" />
                            </a>                             
                            <a 
                            href={`https://audiomack.com/Azixx/album/poisonep`}
                            target="_blank"
                            rel="noopener noreferrer">
                                <img src={Audiomack} alt="Spotify Link" />
                            </a>                             
                        </div>

                </li>
            </ul>
        </div>
    )
}

export default MusicSlider;