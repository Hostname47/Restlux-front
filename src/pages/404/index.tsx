import Footer from "../../components/footer";
import ClientLayout from "../../layout/client";
import "./styles.css";

function NotFoundPage() {
  return (
    <ClientLayout id="not-found">
      <div id="not-found-content">
        <h1>404: Page Not Found</h1>
        <Footer />
      </div>
    </ClientLayout>
  );
}

export default NotFoundPage;
