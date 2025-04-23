import { BrowserRouter, Route, Routes } from "react-router";
import LandingPage from "../../pages/client/landing-page";
import LoginPage from "../../pages/client/auth/login";
import HomePage from "../../pages/client/home";
import AdminDashboard from "../../pages/admin/dashboard";
import AdminStatisticsPage from "../../pages/admin/statistics";
import AdminProductsIndexPage from "../../pages/admin/orders/index";
import AdminSecurityAccessPage from "../../pages/admin/roles-and-permissions";
import { useEffect, useState } from "react";
import TextLogo from "../logos/TextLogo";
import LoadingSpinner from "../loading-spinner";
import axios from "axios";
import { useAppDispatch } from "../../app/hooks";
import { loginUser } from "../../features/global/globalSlice";
import Cookies from "js-cookie";
import Signup from "../../pages/client/auth/Sign-up";
import AdminAddProductPage from "../../pages/admin/products/add";
import AdminAddOrderPage from "../../pages/admin/orders/add";

function Bootstrapper() {
  const [bootstrapped, setBootstrapped] = useState(false);
  const dispatch = useAppDispatch();

  const setup = () => {
    animate();

    const token = Cookies.get("auth_token");
    if (token) {
      // Set the token globally in Axios
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }

    axios
      .get("/api/user")
      .then((res) => {
        dispatch(loginUser(res.data));
      })
      .catch(() => {})
      .finally(() => {
        setBootstrapped(true);
      });
  };

  const animate = () => {
    const el = document.querySelector(
      "#global-loading-area .moving-logo-container"
    );
    if (el instanceof HTMLElement) {
      el.style.width = "144px";
    }
  };

  useEffect(() => {
    setup();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return !bootstrapped ? (
    <div id="global-loading-area">
      <div className="logo-container">
        <div className="r-container">
          <TextLogo className="r" />
        </div>
        <div className="moving-logo-container">
          <TextLogo className="moving-logo" />
        </div>
      </div>
      <div className="wait-box">
        <p className="wait">Just a moment..</p>
        <LoadingSpinner shown size={12} color="gray" />
      </div>
    </div>
  ) : (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<HomePage />} />

        
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/statistics" element={<AdminStatisticsPage />} />
        <Route path="/admin/products/add" element={<AdminAddProductPage/>} />
        <Route path="/admin/orders/add" element={<AdminAddOrderPage/>} />
        <Route path="/admin/orders" element={<AdminProductsIndexPage />} />
        <Route path="/admin/management" element={<AdminSecurityAccessPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Bootstrapper;
