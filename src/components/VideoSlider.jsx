import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";


const videos = [
  { id: "HxGjoBxq6qM", title: "AZIXX - KIA" },
  { id: "h6-wJMzCKwo", title: "AZIXX - POISON" },
  { id: "m8FI74DihiA", title: "AZIXX - ALUBARIKA" },
];

const VideoSlider = () => (
  <div className="videoslider">
    <h1>VIDEOS</h1>
    <Swiper
      slidesPerView={1}
      spaceBetween={20}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="swiper-nav"
    >
      {videos.map((video, index) => (
        <SwiperSlide key={index} className="swiper">
          <Link to={`/video/${index}`} className="swiper-link">
            <iframe
              src={`https://www.youtube.com/embed/${video.id}`}
              title="YouTube Video Player"
              allowFullScreen
            ></iframe>
            <p>{video.title}</p>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

export default VideoSlider;
