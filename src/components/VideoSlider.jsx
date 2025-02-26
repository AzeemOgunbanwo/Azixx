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
  { id: "FqllYbvYB1I?si=dbnKgqrBmokGOjtO", title: "AZIXX - JAIYE LO (LYRICS)" },
  { id: "ObE8xdk8bMM?si=IwWiSX3qxOOJiILy", title: "AZIXX - ONE LIFE (LYRICS)" },
  { id: "jRX96LLwOVc?si=Qvn4rsr7z6ewoOf8", title: "AZIXX - WOLO (LYRICS)" },
  { id: "MLExkVdEkEE?si=S3GIUFZ6uPAf6DOA", title: "AZIXX - CRUISE GIRL (LYRICS)" },
  { id: "QLaMe7Fi0oM?si=O5ERMhz5xy6nHZxE", title: "AZIXX - INSIDER (VIRAL VIDEO)" },
  { id: "mo2fObY2Y-w?si=FPch7zHnt4HuAJGr", title: "AZIXX - OJORO (LYRICS)" },
  { id: "l0MMUlOuABA?si=5hcYA2JJVoYDqYZP", title: "AZIXX - ADURA (LYRICS)" },
  { id: "Owomuv0zov0?si=NftDJ-PiwwmqH50B", title: "AZIXX - DISTANCE (LYRICS)" },
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
