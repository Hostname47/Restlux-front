import { Link } from "react-router";
import video from "../../../../assets/videos/sharpening-knife.mp4";
import Ornament from "../../../../components/icons/LoginIcon copy";

function VideoSection() {
  return (
    <div id="landing-page-video-section">
      <div className="shadow">
        <Ornament className="ornament" />
        <h2 className="section-title">
          OUR FOOD <span>Philosophy "</span>
        </h2>
        <p className="first-title">
          ⚜ Crafted with Precision, Served with Grace ⚜
        </p>
        <p className="second-title">
          Sharpening <b>more</b> than knives—sharpening the art of fine cuisine.
        </p>
        <Link to="" className="button-style-4">
          Read more
        </Link>
      </div>
      <video controls={false} autoPlay muted playsInline loop preload="none">
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
}

export default VideoSection;
