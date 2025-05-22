import Footer from "../../../components/footer";
import ClientLayout from "../../../layout/client";
import Sidebar from "./components/Sidebar";
import HomeMenusSection from "./sections/menus";
import HomeProductsSection from "./sections/products";
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
          <HomeProductsSection />
          <div style={{ height: 26 }} />
          <HomeReservationSection />
        </div>
      </div>
      <Footer />
    </ClientLayout>
  );
}

export default HomePage;
