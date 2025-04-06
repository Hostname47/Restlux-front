import { useEffect, useState } from "react";
import Star from "../../../components/icons/Star";
import Image from "./../../../assets/images/svgs/flat/girl-flower.svg";

const testims = [
  {
    client: "Mouad Nassri",
    content:
      "Restlux curates only the finest—every meal feels like a five-star experience.",
  },
  {
    client: "Thomas Aquinas",
    content:
      "I stopped guessing where to dine—Restlux always leads me to elegance.",
  },
  {
    client: "John the Baptist",
    content: "Luxury dining made effortless—Restlux never misses",
  },
];

function TestimonialsSection() {
  const [visible, setVisible] = useState(true);
  const [testimonials] = useState(testims);
  const [index, setIndex] = useState(0);

  const set = (i: number) => {
    if (i === index) {
      return;
    }

    setVisible(false);
    setTimeout(() => {
      setIndex(i);
      setVisible(true);
    }, 400);
  };

  useEffect(() => {
    // Testimonials will be fetched from database. (Admin will be able to manage testimonials)
  }, []);

  return (
    <div id="landing-page-testimonials">
      <span className="section-above-title black">Our testimonials</span>
      <h2 className="section-title black">
        WHAT THEY'RE <span className="highlighted">Saying"</span>
      </h2>
      <div>
        <div className={`content ${visible ? "fade-in" : "fade-out"}`}>
          <span className="brackets">"</span>
          <div className="stars">
            {Array.from({ length: 5 }, (_, i) => (
              <Star key={i} className="star" />
            ))}
          </div>
          <p className="testim">{testimonials[index].content}</p>
          <b className="client">~ {testimonials[index].client}</b>

          <div className="nav-buttons">
            {Array.from({ length: testimonials.length }, (_, i) => (
              <button key={i} type="button" onClick={() => set(i)}>
                {i + 1}
              </button>
            ))}
          </div>
        </div>
        <img src={Image} className="image" />
      </div>
    </div>
  );
}

export default TestimonialsSection;
