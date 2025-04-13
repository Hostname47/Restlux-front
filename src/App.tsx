import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { store } from "./app/store";
import LandingPage from "./pages/client/landing-page/index";
import AdminDashboard from "./pages/admin/dashboard";
import AdminStatisticsPage from "./pages/admin/statistics";
import AdminAddProductPage from "./pages/admin/orders/add";
import AdminProductsIndexPage from "./pages/admin/orders/index";
import AdminSecurityAccessPage from "./pages/admin/roles-and-permissions";
import LoginPage from "./pages/client/auth/login";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
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
