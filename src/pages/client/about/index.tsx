import Footer from "../../../components/footer";
import ClientLayout from "../../../layout/client";
import Img from "./assets/resto.jpeg";
import "./index.css";

function AboutPage() {
  return (
    <ClientLayout id="about">
      <main className="main-content">
        <div className="content-container">
          <div className="about-image">
            <img src={Img} />
          </div>

          <div className="about-text">
            <h1 className="about-title">ABOUT US</h1>

            <div className="about-description">
              <p>
                We bring luxury dining to your fingertips with effortless online
                reservations and ordering. Enjoy gourmet meals crafted by top
                chefs using the finest ingredients-all available for quick
                booking through our easy-to-use platform. Whether you're
                planning a special occasion or a business lunch, secure your
                table in just a few clicks and focus on savoring the experience.
              </p>
              <p>
                Beyond the food, we provide personalized touches with bespoke
                menus tailored to diners' preferences. Attention to detail
                extends to every aspect, including artfully plated dishes and a
                tranquil setting. Whether for a romantic date or an exclusive
                gathering, we transform meals into memorable experiences,
                blending culinary artistry with unmatched hospitality.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </ClientLayout>
  );
}

export default AboutPage;
