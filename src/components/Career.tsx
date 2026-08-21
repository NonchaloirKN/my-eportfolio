import "./styles/Career.css";
import { config, Experience } from "../config";
import { MdMemory, MdCenterFocusStrong, MdSchool, MdCalendarToday, MdLocationOn } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";

const getNodeIcon = (nodeType: Experience["nodeType"]) => {
  switch (nodeType) {
    case "hardware":
      return <MdMemory className="career-node-icon" />;
    case "visionAI":
      return <MdCenterFocusStrong className="career-node-icon" />;
    case "academic":
      return <MdSchool className="career-node-icon" />;
    default:
      return <MdMemory className="career-node-icon" />;
  }
};

const getNodeTypeBadge = (nodeType: Experience["nodeType"]) => {
  switch (nodeType) {
    case "hardware":
      return "Hardware & Firmware";
    case "visionAI":
      return "Vision & Edge AI";
    case "academic":
      return "Education & Honours";
    default:
      return "Engineering";
  }
};

const Career = () => {
  return (
    <section className="career-section section-container" id="experience">
      <div className="career-container">
        <div className="career-header">
          <span className="career-badge">Career Roadmap</span>
          <h2>
            Experience <span>&amp;</span>
            <br /> Education Timeline
          </h2>
          <p className="career-subtitle">
            A chronological timeline of my professional engineering internships, industrial research, and academic achievements at the University of Cape Town.
          </p>
        </div>

        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {config.experiences.map((exp: Experience, index: number) => (
            <div key={exp.id || index} className="career-info-box">
              {/* Left Details Column */}
              <div className="career-info-left">
                <div className="career-node-header">
                  <div className="career-icon-wrapper" data-nodetype={exp.nodeType}>
                    {getNodeIcon(exp.nodeType)}
                  </div>
                  <span className="career-category-tag">
                    {getNodeTypeBadge(exp.nodeType)}
                  </span>
                </div>

                <div className="career-role-info">
                  <h4>{exp.position}</h4>
                  <h5>{exp.company}</h5>
                </div>

                <div className="career-meta-tags">
                  <span className="career-period-tag">
                    <MdCalendarToday /> {exp.period}
                  </span>
                  <span className="career-location-tag">
                    <MdLocationOn /> {exp.location}
                  </span>
                </div>
              </div>

              {/* Right Content Column: Bullet Points & Tech Chips */}
              <div className="career-info-right">
                <ul className="career-points-list">
                  {exp.points.map((point: string, pIdx: number) => (
                    <li key={pIdx} className="career-point-item">
                      <span className="point-icon-box">
                        <FaCheck />
                      </span>
                      <p>{point}</p>
                    </li>
                  ))}
                </ul>

                <div className="career-tech-stack">
                  {exp.technologies.map((tech: string, tIdx: number) => (
                    <span key={tIdx} className="career-tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Career;
