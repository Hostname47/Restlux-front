import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { store } from "./app/store";
import LandingPage from "./pages/landing-page/index";
import AdminDashboard from "./pages/admin-area/dashboard";
import AdminStatisticsPage from "./pages/admin-area/statistics";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/statistics" element={<AdminStatisticsPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
