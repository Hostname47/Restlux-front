import ClientLayout from "../../../layout/client";
import HomeMenusSection from "./sections/menus";
import "./styles.css";

function HomePage() {
  return (
    <ClientLayout id="home-page">
      <div className="body">
        <div className="sidebar"></div>
        <div className="content">
          <HomeMenusSection />
        </div>
      </div>
    </ClientLayout>
  );
}

export default HomePage;
