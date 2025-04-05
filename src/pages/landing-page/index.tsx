import Footer from "../../components/footer";
import AboutSection from "./components/AboutSection";
import LandingFirstSection from "./components/LandingFirstSection";
import StatsSection from "./components/StatsSection";
import "./styles.css";

function LandingPage() {
  return (
    <div>
      <LandingFirstSection />
      <AboutSection />
      <StatsSection />
      <Footer />
    </div>
  );
}

export default LandingPage;
