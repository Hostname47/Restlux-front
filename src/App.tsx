import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { store } from "./app/store";
import LandingPage from "./pages/landing-page/index";
import AdminDashboard from "./pages/admin-area/dashboard";
import AdminStatisticsPage from "./pages/admin-area/statistics";
import AdminAddProductPage from "./pages/admin-area/orders/add";
import AdminProductsIndexPage from "./pages/admin-area/orders/index";
import AdminSecurityAccessPage from "./pages/admin-area/roles-and-permissions";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/statistics" element={<AdminStatisticsPage />} />
          <Route path="/admin/orders/add" element={<AdminAddProductPage />} />
          <Route path="/admin/orders" element={<AdminProductsIndexPage />} />
          <Route
            path="/admin/management"
            element={<AdminSecurityAccessPage />}
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
