import Image0 from "../../../../assets/images/vertical/0.jpg";
import Image1 from "../../../../assets/images/vertical/1.jpg";
import Image2 from "../../../../assets/images/vertical/2.jpg";
import Image3 from "../../../../assets/images/vertical/3.jpg";

function AboutSection() {
  return (
    <div id="landing-page-about-section">
      <div>
        <b className="section-above-title">Our story</b>
        <h2 className="section-title">
          ABOUT <span>Restlux"</span>
        </h2>
        <div className="gallery">
          <div className="image-container">
            <img src={Image0} className="image" />
          </div>
          <div className="image-container">
            <img src={Image1} className="image" />
          </div>
          <div className="image-container">
            <img src={Image2} className="image" />
          </div>
          <div className="image-container">
            <img src={Image3} className="image" />
          </div>
        </div>
        <p className="content">
          RestLux curates the finest dining experiences, <br /> blending luxury,
          flavor, and unforgettable ambiance in one place.
        </p>
        <button className="button-style-4">More about us</button>
      </div>
    </div>
  );
}

export default AboutSection;
