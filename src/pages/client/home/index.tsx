import ClientLayout from "../../../layout/client";
import "./styles.css";

function HomePage() {
  return (
    <ClientLayout id="home-page">
      <div className="sidebar"></div>
      <div className="body"></div>
    </ClientLayout>
  );
}

export default HomePage;
