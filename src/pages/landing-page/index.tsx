import Footer from "../../components/footer";
import AboutSection from "./components/AboutSection";
import LandingFirstSection from "./components/LandingFirstSection";
import NewsletterSection from "./components/NewsletterSection";
import MenusSection from "./components/MenusSection";
import StatsSection from "./components/StatsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import "./styles.css";

function LandingPage() {
  return (
    <div id="landing-page">
      <LandingFirstSection />
      <AboutSection />
      <MenusSection />
      <TestimonialsSection />
      <NewsletterSection />
      <StatsSection />
      <Footer />
    </div>
  );
}

export default LandingPage;
