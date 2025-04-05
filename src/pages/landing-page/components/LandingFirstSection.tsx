import { Link } from "react-router";
import CalendarIcon from "../../../components/icons/CalendarIcon";

function LandingFirstSection() {
  return (
    <div id="landing-first-section">
      <h2>
        " The <span className="highlighted">Taste</span> <br />
        Of Sophistication
      </h2>
      <div className="definition-container">
        <span className="word">
          Restlux<span className="emoji">🔊</span>
        </span>
      </div>
      <p className="pronunc">
        <span className="gray">noun</span> | \ ˈrest-ˌlŭks \
      </p>
      <ul>
        <li>
          1: A state of refined comfort where elegant design merges with smart
          innovation.
        </li>
        <li>
          2: A lifestyle brand dedicated to elevating everyday living through
          intelligent luxury. — “After upgrading to Restlux, his evenings felt
          effortlessly luxurious.”
        </li>
      </ul>
      <div className="buttons">
        <Link to="" className="button-style-2">
          <CalendarIcon className="icon" />
          Book a table
        </Link>
        <Link to="" className="button-style-3">
          Reservations
        </Link>
      </div>
    </div>
  );
}

export default LandingFirstSection;
