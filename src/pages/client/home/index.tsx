import ClientLayout from "../../../layout/client";
import Sidebar from "./components/Sidebar";
import HomeMenusSection from "./sections/menus";
import HomeReservationSection from "./sections/reservations";
import "./styles.css";

function HomePage() {
  return (
    <ClientLayout id="home-page">
      <div className="body">
        <Sidebar />
        <div className="content">
          <HomeMenusSection />
          <div style={{ height: 26 }} />
          <HomeReservationSection />
          <div style={{ height: 200 }} />
        </div>
      </div>
    </ClientLayout>
  );
}

export default HomePage;
