import { Link } from "react-router-dom";
import { config } from "../config";
import { TbBrandGithub } from "react-icons/tb";
import { MdArrowOutward } from "react-icons/md";
import "./MyWorks.css";

const MyWorks = () => {
  return (
    <div className="myworks-page">
      <div className="myworks-header">
        <Link to="/" className="back-button" data-cursor="disable">
          &larr; Back to Home
        </Link>
        <h1>
          Engineering <span>Projects</span>
        </h1>
        <p>A curated collection of verified hardware architectures, edge AI pipelines, and software systems.</p>
      </div>

      <div className="myworks-grid">
        {config.projects.map((project, index) => (
          <div className="myworks-card" key={project.id}>
            <div className="myworks-card-number">0{index + 1}</div>
            <div className="myworks-card-info">
              <span className="myworks-card-category">{project.category}</span>
              <h3>{project.title}</h3>
              <p className="myworks-card-description">{project.description}</p>
              <div className="myworks-card-tech-pills">
                {project.technologies.split(", ").map((tech, tIdx) => (
                  <span key={tIdx} className="myworks-tech-pill">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="myworks-card-action">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="myworks-repo-btn"
                  data-cursor="disable"
                  title={`View ${project.title} on GitHub`}
                >
                  <TbBrandGithub />
                  <span>View Repository</span>
                  <MdArrowOutward />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyWorks;
