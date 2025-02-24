import { Swiper , SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import {Pagination, Navigation} from 'swiper/modules'
import {Link} from 'react-router-dom'
import Beyond from '../assets/beyond.jpeg'
import Poison from '../assets/poison.jpg'
import Spotify from '../assets/spotify.png'
import AppleMusic from '../assets/apple.png'
import Youtube from '../assets/youtube.png'
import Audiomack from '../assets/audiomack.png'

const musics = [
    {id: Beyond , title: "Beyond EP", refSpotify: "4dRt72zKAOVLWqk77CyBmA?si=3XvlpfarTIyz9gE-8bWGFA" , refApple: "beyond-ep/1755071391" , refYoutube: "OLAK5uy_k7WVeQMec3Y_uL-hw0U9g_6nDSsBNw12k&si=pC37Ou9TnM7mpZbf" , refAudiomack: "beyond"} ,

    {id: Poison , title: "Poison EP", refSpotify: "43AEJ0fL93JGl398s8DKoU?si=76EVYYatThGb-yt1utWjIQ", refApple: "poison-ep/1609693976" , refYoutube: "OLAK5uy_k6tz0TEQmfAd7VJavyIijupQauhQY1DmQ&si=iAF0zDEKHESEhZZr" , refAudiomack: "poisonep"}
]



const MusicSlider = () => {
    return (
        <div className="music-slider">
            <h1>MUSIC</h1>
            <Swiper
                slidesPerView={2}
                spaceBetween={50}
                pagination={{clickable: true}}
                navigation={true}
                modules={[Pagination, Navigation]}
                className=""
            >

                {musics.map((music, index) => (
                    <SwiperSlide key={index} className="music-swiper">
                        <Link to={`/music/${index}`} className='music-swiper-link'>
                            <img src={music.id} alt="" />
                            <p>{music.title}</p>
                        </Link>
                        <div className="streaming-links">
                            <a 
                            href={`https://open.spotify.com/album/${music.refSpotify}`}
                            target="_blank"
                            rel="noopener noreferrer">
                                <img src={Spotify} alt="Spotify Link" />
                            </a>                             
                            <a 
                            href={`https://music.apple.com/us/album/${music.refApple}`}
                            target="_blank"
                            rel="noopener noreferrer">
                                <img src={AppleMusic} alt="Spotify Link" />
                            </a>                             
                            <a 
                            href={`https://music.youtube.com/playlist?list=${music.refYoutube}`}
                            target="_blank"
                            rel="noopener noreferrer">
                                <img src={Youtube} alt="Spotify Link" />
                            </a>                             
                            <a 
                            href={`https://audiomack.com/Azixx/album/${music.refAudiomack}`}
                            target="_blank"
                            rel="noopener noreferrer">
                                <img src={Audiomack} alt="Spotify Link" />
                            </a>                             
                        </div>
                        
                    </SwiperSlide>
                )
                
                )}
            </Swiper>

        </div>
    )
}

export default MusicSlider;