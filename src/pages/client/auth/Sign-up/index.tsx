import { Link } from "react-router";
import GoogleIcon from "../../../../components/icons/GoogleIcon";
import ClientLayout from "../../../../layout/client";
import "./styles.css";
import { useState } from "react";
import FormMessage from "../../../../components/form-message";

function Signup() {
  const [Fname, setFname] = useState("");
  const [Username, setUsername] = useState("");
  const [email, setemail] = useState("");
  const [password1, setpassword1] = useState("");
  const [password2, setpassword2] = useState("");
  const [error, setError] = useState("");
  const [consent, setConsent] = useState(false);
  const handleSignup = (e) => {
    e.preventDefault();
    if (Fname.trim() == "") {
      setError("Full Name field is required");
      return;
    }
    if (Username.trim() == "") {
      setError("Username field is required");
      return;
    }
    if (!/^[a-zA-Z0-9_]{8,}$/.test(Username.trim())) {
      setError(
        "Username must be at least 8 characters long and contain only letters and numbers."
      );
      return;
    }
    if (email.trim() == "") {
      setError("Email field is required");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email.trim())) {
      setError("Invalid email format");
      return;
    }
    if (password1.trim() == "") {
      setError("Password field is required");
      return;
    }
    if (
      !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/.test(password1.trim())
    ) {
      setError(
        "Password must be at least 8 characters long and include at least one letter, one number, and one symbol."
      );
      return;
    }
    if (password1 != password2) {
      setError(
        "Passwords do not match. Please make sure both passwords are the same."
      );
      return;
    }
    setError("");
  };

  return (
    <ClientLayout>
      <div className="auth-body">
        <div className="container">
          <h1>Signup</h1>
          <button className="button">
            <GoogleIcon className="icon" />
            <span>Sign up with Google</span>
          </button>
          <div className="signup-with">
            <div className="line"></div>
            <span className="label">or sign up with</span>
            <div className="line"></div>
          </div>
          <form action="">
            <FormMessage
              content={error}
              showCloseButton
              onCloseButtonClick={() => setError("")}
              color="red"
              styles={{ marginBottom: 16 }}
            />
            <div className="inputs-container">
              <label htmlFor="">
                Full Name <span className="red">*</span>
              </label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Full Name"
                value={Fname}
                onChange={(e) => setFname(e.target.value)}
                required
              />
              <label htmlFor="">
                Username <span className="red">*</span>
              </label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Username"
                value={Username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <label htmlFor="">
                Email Adress <span className="red">*</span>
              </label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Email Adress"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                required
              />
              <label htmlFor="">
                Password <span className="red">*</span>
              </label>
              <input
                type="password"
                name=""
                id=""
                placeholder="Password"
                value={password1}
                onChange={(e) => setpassword1(e.target.value)}
                required
              />
              <label htmlFor="">Confirm Password</label>
              <input
                type="password"
                name=""
                id=""
                placeholder="Confirm Password"
                value={password2}
                onChange={(e) => setpassword2(e.target.value)}
                required
              />
            </div>
            <div className="terms">
              <input type="checkbox" name="" id="check" />
              <label htmlFor="check">
                <span>
                  By Creating an Account, i accept Hiring Hub terms of Use and
                  Privacy Policy{" "}
                </span>
              </label>
            </div>
            <input type="submit" name="" id="submit" onClick={handleSignup} />
            <div className="haveAccount">
              Have an Account ?{" "}
              <Link to="/login">
                <span>Sign in here</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </ClientLayout>
  );
}
export default Signup;
