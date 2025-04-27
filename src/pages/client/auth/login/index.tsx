import { Link, useNavigate } from "react-router";
import GoogleIcon from "../../../../components/icons/GoogleIcon";
import ClientLayout from "../../../../layout/client";
import "../styles.css";
import "./styles.css";
import { useState } from "react";
import FormMessage from "../../../../components/form-message";
import axios from "axios";
import LoadingSpinner from "../../../../components/loading-spinner";
import { useAppDispatch } from "../../../../app/hooks";
import { loginUser } from "../../../../features/global/globalSlice";
import Cookies from "js-cookie";

function LoginPage() {
  const [login, setLogin] = useState("director@restlux.com");
  const [password, setPassword] = useState("root");
  const [remember, setRemember] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    if (login.trim() == "") {
      setError("Email/Username field is required");
      return;
    }

    // Validate password
    if (!password.trim()) {
      setError("Password field is required");
      return;
    }

    const data: {
      email?: string;
      username?: string;
      password: string;
      remember: number;
    } = {
      password: password.trim(),
      remember: remember ? 1 : 0,
    };

    if (login.includes("@")) {
      // Email-based login
      if (!/\S+@\S+\.\S+/.test(login.trim())) {
        setError("Invalid email format");
        return;
      }

      data.email = login.trim();
    } else {
      // Username-based login
      data.username = login.trim();
    }

    setError("");
    setSubmitting(true);

    axios.get("/sanctum/csrf-cookie").then(() => {
      axios
        .post("api/login", data)
        .then((response) => {
          Cookies.set("auth_token", response.data.token, {
            secure: true, // only over HTTPS
            sameSite: "Strict",
            expires: remember ? 90 : 1,
          });

          // Set axios header globally
          axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${response.data.token}`;
          dispatch(loginUser(response.data.user));
          navigate("/home");
        })
        .catch((error) => {
          console.error("Login error:", error);
          setError(error?.response?.data?.message ?? "Login failed");
          setSubmitting(false);
        });
    });
  };

  return (
    <ClientLayout id="login-page" className="auth-page">
      <div className="body">
        <h1>Login</h1>
        <button className="button-style-6">
          <GoogleIcon className="icon" />
          Sign in with Google
        </button>
        <div className="sign-with">
          <div className="line"></div>
          <span className="label">or sign in with</span>
          <div className="line"></div>
        </div>

        <form>
          <FormMessage
            content={error}
            showCloseButton
            onCloseButtonClick={() => setError("")}
            color="red"
            styles={{ marginBottom: 16 }}
          />
          <div className="input-container">
            <label htmlFor="email-or-username">
              Email / Username <span className="red">*</span>
            </label>
            <input
              required
              placeholder="Either your email or username"
              className="input-style-1"
              type="text"
              name="email-or-username"
              id="email-or-username"
              disabled={submitting}
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            />
          </div>

          <div className="input-container">
            <label htmlFor="password">
              Password <span className="red">*</span>
            </label>
            <input
              placeholder="Password"
              className="input-style-1"
              type="password"
              name="password"
              id="password"
              disabled={submitting}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="input-container same-line">
            <input
              type="checkbox"
              name="remember-me"
              id="remember-me"
              disabled={submitting}
              value={remember ? "checked" : "unchecked"}
              onChange={() => setRemember((v) => !v)}
            />
            <label htmlFor="remember-me" className="text">
              Keep me signed in
            </label>
          </div>

          <button
            type="submit"
            className="button-style-2 full-width"
            onClick={handleLogin}
            disabled={submitting}
          >
            <LoadingSpinner shown={submitting} size={17} color="black" />
            Login
          </button>
          <p className="not-already-line">
            Don't have an account ? <Link to="/signup">Sign up</Link>
          </p>
        </form>
      </div>
    </ClientLayout>
  );
}

export default LoginPage;
