import "./styles/About.css";
import { config } from "../config";
import { MdSchool, MdEngineering, MdMemory } from "react-icons/md";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-me">
        <div className="about-header-pill">
          <span className="about-dot"></span>
          <span className="about-subtitle-text">BSc(Eng) Candidate &bull; University of Cape Town</span>
        </div>
        <h3 className="title">{config.about.title}</h3>
        <p className="para">
          {config.about.description}
        </p>

        <div className="about-highlights">
          <div className="about-pill">
            <MdEngineering className="about-pill-icon" />
            <span>Hardware &bull; Software Co-Design</span>
          </div>
          <div className="about-pill">
            <MdMemory className="about-pill-icon" />
            <span>Embedded Systems &bull; TinyML</span>
          </div>
          <div className="about-pill">
            <MdSchool className="about-pill-icon" />
            <span>Dean's Merit List &bull; Schneider Scholar</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
