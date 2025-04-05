import Footer from "../../components/footer";
import AboutSection from "./components/AboutSection";
import LandingFirstSection from "./components/LandingFirstSection";
import "./styles.css";

function LandingPage() {
  return (
    <div>
      <LandingFirstSection />
      <AboutSection />
      <Footer />
    </div>
  );
}

export default LandingPage;
