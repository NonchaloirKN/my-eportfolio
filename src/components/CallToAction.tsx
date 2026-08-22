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
          <span className="cta-play-shimmer"></span>
          <span className="cta-play-glow-aura"></span>
          <MdGamepad className="cta-btn-icon cta-gamepad-anim" />
          <span className="cta-btn-play-text">Play With Me &rarr;</span>
          <span className="cta-sparkle-dot"></span>
        </Link>
      </div>
    </div>
  );
};

export default CallToAction;
