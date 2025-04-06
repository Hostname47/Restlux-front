import Footer from "../../components/footer";
import AboutSection from "./components/AboutSection";
import LandingFirstSection from "./components/LandingFirstSection";
import NewsletterSection from "./components/NewsletterSection";
import MenusSection from "./components/MenusSection";
import StatsSection from "./components/StatsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import "./styles.css";
import VideoSection from "./components/VideoSection";
import ClientLayout from "../../layout/client";

function LandingPage() {
  return (
    <ClientLayout id="landing-page">
      <LandingFirstSection />
      <AboutSection />
      <MenusSection />
      <VideoSection />
      <TestimonialsSection />
      <NewsletterSection />
      <StatsSection />
      <Footer />
    </ClientLayout>
  );
}

export default LandingPage;
