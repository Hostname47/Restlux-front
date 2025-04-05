import { useState } from "react";
import Messanger from "../../../assets/images/svgs/flat/messanger.svg";
import MessageIcon from "../../../components/icons/MessageIcon";
import FormMessage from "../../../components/form-message";
import LoadingSpinner from "../../../components/loading-spinner";

function NewsletterSection() {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [email, setEmail] = useState("");

  const send = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    if (email == "") {
      setError("Email address is required !");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Incorrect email format !");
      return;
    }

    setError("");
    setSubmitting(true);

    setTimeout(() => {
      setNotice("Congratulation, you've been subscribed to our newsletter");
      setSubmitting(false);
    }, 2000);
  };

  return (
    <div id="landing-page-newsletter-section">
      <div>
        <img src={Messanger} className="illustration" />
        <div className="content-container">
          <span className="section-above-title black">Keep in touch</span>
          <h2 className="section-title">
            JOIN OUR<span className="highlighted">Newsletter"</span>
          </h2>
          <p className="content">
            Subscribe to our newsletter and be the first to hear about new
            updates, <br />
            expert tips, and special offers delivered straight to your inbox.
          </p>
          <form className="subscription-form">
            {error && (
              <FormMessage
                content={error}
                color="red"
                showCloseButton
                onCloseButtonClick={() => setError("")}
              />
            )}
            {notice && <FormMessage content={notice} color="green" />}
            <label htmlFor="email-input">
              Email <span className="red">*</span>
            </label>
            <input
              type="text"
              id="email-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="email-input"
              placeholder="Your email here.."
            />
            <button
              className="button-style-5"
              disabled={submitting}
              onClick={send}
            >
              <div className="icon-box">
                <MessageIcon className="icon" opacity={submitting ? 0 : 1} />
                <LoadingSpinner shown={submitting} absolute />
              </div>
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewsletterSection;
