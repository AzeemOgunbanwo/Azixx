import { useParams, Link } from "react-router-dom";

const VideoPage = () => {
  const { id } = useParams();

  return (
    <div className="videopage">
      <h1 className="text-2xl font-bold mb-4">🎬 Now Playing</h1>
      <iframe
        width="800"
        height="450"
        src={`https://www.youtube.com/embed/${id}?autoplay=1`}
        title="YouTube Video Player"
        frameBorder="0"
        allowFullScreen
        className="rounded-lg shadow-lg"
      ></iframe>
      <Link
        to="/video-slider"
        className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-white transition-all"
      >
        ⬅ Back to Video Slider
      </Link>
    </div>
  );
};

export default VideoPage;
