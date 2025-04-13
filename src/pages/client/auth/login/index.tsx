import { Link } from "react-router";
import GoogleIcon from "../../../../components/icons/GoogleIcon";
import ClientLayout from "../../../../layout/client";
import "../styles.css";
import "./styles.css";

function LoginPage() {
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
          <div className="input-container">
            <label htmlFor="email-or-username">
              Email / Username <span className="red">*</span>
            </label>
            <input
              placeholder="Either your email or username"
              className="input-style-1"
              type="text"
              name="email-or-username"
              id="email-or-username"
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
            />
          </div>

          <div className="input-container same-line">
            <input type="checkbox" name="remember-me" id="remember-me" />
            <label htmlFor="remember-me" className="text">
              Keep me signed in
            </label>
          </div>

          <button className="button-style-2 full-width">Login</button>
          <p className="not-already-line">
            Don't have an account ? <Link to="/register">Sign up</Link>
          </p>
        </form>
      </div>
    </ClientLayout>
  );
}

export default LoginPage;
