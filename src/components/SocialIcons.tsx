import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { TbFileCv } from "react-icons/tb";
import { config } from "../config";
import "./styles/SocialIcons.css";

const SocialIcons = () => {
  return (
    <>
      {/* Fixed Social Links (Bottom Left) */}
      <div className="fixed-social-bottom-left" aria-label="Social Links">
        <a
          href={config.contact.github}
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub Profile (@NonchaloirKN)"
          aria-label="GitHub Profile"
          className="fixed-social-icon"
          data-cursor="disable"
        >
          <FaGithub />
        </a>

        <a
          href={config.contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn Profile (Kiyuran Naidoo)"
          aria-label="LinkedIn Profile"
          className="fixed-social-icon"
          data-cursor="disable"
        >
          <FaLinkedinIn />
        </a>

        <a
          href={`mailto:${config.contact.email}`}
          title="Direct Email (kiyuran.naidoo@gmail.com)"
          aria-label="Send Email"
          className="fixed-social-icon"
          data-cursor="disable"
        >
          <MdEmail />
        </a>
      </div>

      {/* Single Fixed Resume Button (Bottom Right) */}
      <div className="fixed-resume-bottom-right">
        <a
          className="global-resume-btn"
          href={config.developer.cvUrl}
          target="_blank"
          rel="noopener noreferrer"
          download
          title="Download Kiyuran Naidoo - CV 2026.pdf"
          data-cursor="disable"
        >
          <TbFileCv className="resume-icon" />
          <span>Resume (CV)</span>
        </a>
      </div>
    </>
  );
};

export default SocialIcons;
