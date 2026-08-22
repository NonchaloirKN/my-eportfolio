import { Link } from "react-router-dom";
import { config } from "../config";
import { MdEmail, MdGamepad } from "react-icons/md";
import "./styles/CallToAction.css";

const CallToAction = () => {
  return (
    <div className="cta-section">
      <div className="cta-buttons">
        <a
          href={`mailto:${config.contact.email}`}
          className="cta-btn cta-btn-primary"
          data-cursor="disable"
        >
          <MdEmail className="cta-btn-icon" />
          Get in Touch &rarr;
        </a>

        <Link to="/play" className="cta-btn cta-btn-play" data-cursor="disable">
          <MdGamepad className="cta-btn-icon" />
          Play With Me &rarr;
        </Link>
      </div>
    </div>
  );
};

export default CallToAction;
