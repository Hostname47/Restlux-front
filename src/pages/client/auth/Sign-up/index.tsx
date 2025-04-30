import { Link, useNavigate } from "react-router";
import GoogleIcon from "../../../../components/icons/GoogleIcon";
import ClientLayout from "../../../../layout/client";
import "./styles.css";
import { useState } from "react";
import FormMessage from "../../../../components/form-message";
import LoadingSpinner from "../../../../components/loading-spinner";
import axios from "axios";
import Cookies from "js-cookie";
import { useAppDispatch } from "../../../../app/hooks";
import { loginUser } from "../../../../features/global/globalSlice";

function SignupPage() {
  const [submitting, setSubmitting] = useState(false);
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [error, setError] = useState("");
  const [terms, setTerms] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSignup = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    const data: {
      fullname: string;
      username: string;
      email: string;
      password: string;
      acceptTerms: boolean;
    } = {
      fullname: "",
      username: "",
      email: "",
      password: "",
      acceptTerms: true,
    };

    if (fullname.trim() == "") {
      setError("Full Name field is required");
      return;
    }
    data.fullname = fullname.trim();

    if (username.trim() == "") {
      setError("Username field is required");
      return;
    }

    if (!/^[a-zA-Z0-9_]{8,}$/.test(username.trim())) {
      setError(
        "Username must be at least 8 characters long and contain only letters and numbers."
      );
      return;
    }

    data.username = username.trim();

    if (email.trim() == "") {
      setError("Email field is required");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email.trim())) {
      setError("Invalid email format");
      return;
    }

    data.email = email.trim();

    if (password.trim() == "") {
      setError("Password field is required");
      return;
    }
    if (
      !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/.test(password.trim())
    ) {
      setError(
        "Password must be at least 8 characters long and include at least one letter, one number, and one symbol."
      );
      return;
    }
    if (password != passwordConfirmation) {
      setError(
        "Passwords do not match. Please make sure both passwords are the same."
      );
      return;
    }

    data.password = password.trim();

    if (!terms) {
      setError("You must agree to the terms.");
      return;
    }

    setError("");
    setSubmitting(true);

    axios.get("/sanctum/csrf-cookie").then(() => {
      axios
        .post("api/register", data)
        .then((response) => {
          Cookies.set("auth_token", response.data.token, {
            secure: true,
            sameSite: "Strict",
            expires: 90,
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
          setError(error?.response?.data?.message ?? "Signing up failed");
          setSubmitting(false);
        });
    });
  };

  return (
    <ClientLayout id="signup-page" className="auth-page">
      <div className="body">
        <h1>Sign up</h1>
        <button className="button-style-6">
          <GoogleIcon className="icon" />
          Sign up with Google
        </button>
        <div className="sign-with">
          <div className="line"></div>
          <span className="label">or sign up with</span>
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
            <label htmlFor="fullname">
              Fullname <span className="red">*</span>
            </label>
            <input
              required
              placeholder="your fullname here"
              className="input-style-1"
              type="text"
              name="fullname"
              id="fullname"
              disabled={submitting}
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
            />
          </div>
          <div className="input-container">
            <label htmlFor="username">
              Username <span className="red">*</span>
            </label>
            <input
              required
              placeholder="your fullname here"
              className="input-style-1"
              type="text"
              name="username"
              id="username"
              disabled={submitting}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-container">
            <label htmlFor="email-or-username">
              Email <span className="red">*</span>
            </label>
            <input
              required
              placeholder="Either your email or username"
              className="input-style-1"
              type="email"
              name="email"
              id="email"
              disabled={submitting}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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

          <div className="input-container">
            <label htmlFor="password">
              Password Confirmation <span className="red">*</span>
            </label>
            <input
              placeholder="Password"
              className="input-style-1"
              type="password"
              name="password-confirmation"
              id="password-confirmation"
              disabled={submitting}
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
          </div>

          <div className="input-container same-line">
            <input
              type="checkbox"
              name="terms"
              id="terms"
              disabled={submitting}
              value={terms ? 1 : 2}
              onChange={() => setTerms((v) => !v)}
            />
            <label htmlFor="terms" className="text">
              By Creating an Account, i accept Hiring Hub terms of Use and
              Privacy Policy
            </label>
          </div>

          <button
            type="submit"
            className="button-style-2 full-width"
            onClick={handleSignup}
            disabled={submitting}
          >
            <LoadingSpinner shown={submitting} size={17} color="black" />
            Sign up
          </button>
          <p className="not-already-line">
            Already have an account ? <Link to="/login">Sign in</Link>
          </p>
        </form>
      </div>
    </ClientLayout>
  );
}
export default SignupPage;
