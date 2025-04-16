import LogoutIcon from "../../../icons/LogoutIcon";
import axios from "axios";
import { logoutUser } from "../../../../features/global/globalSlice";
import { useAppDispatch } from "../../../../app/hooks";
import Cookies from "js-cookie";
import { useState } from "react";
import LoadingSpinner from "../../../loading-spinner";

function LogoutButton() {
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();

  const logout = () => {
    setLoading(true);

    axios
      .post("/api/logout")
      .then(() => {
        Cookies.remove("auth_token");
        dispatch(logoutUser());
      })
      .catch(() => {
        setLoading(false);
      });
  };

  return (
    <button className="button-style-1" onClick={logout}>
      <div className="icon-container">
        {loading && <LoadingSpinner size={16} color="white" shown absolute />}
        <LogoutIcon className="icon" style={{ opacity: loading ? 0 : 1 }} />
      </div>
      Logout
    </button>
  );
}

export default LogoutButton;
