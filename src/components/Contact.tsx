import { useState, useEffect, FormEvent } from "react";
import { 
  MdArrowOutward, 
  MdDownload, 
  MdEmail, 
  MdLocationOn, 
  MdSchool, 
  MdSend, 
  MdCheckCircle
} from "react-icons/md";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import "./styles/Contact.css";
import { config } from "../config";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    const contactTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".contact-section",
        start: "top 80%",
        end: "bottom center",
        toggleActions: "play none none none",
      },
    });

    contactTimeline.fromTo(
      ".contact-section h3",
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );

    contactTimeline.fromTo(
      ".contact-box, .contact-form-container",
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: "power3.out" },
      "-=0.4"
    );

    return () => {
      contactTimeline.kill();
    };
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSending(true);

    // Form submission logic targeting kiyuran.naidoo@gmail.com
    const mailtoUrl = `mailto:kiyuran.naidoo@gmail.com?subject=${encodeURIComponent(
      formData.subject || `Portfolio Contact from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
      window.location.href = mailtoUrl;
    }, 600);
  };

  return (
    <footer className="contact-section section-container" id="contact">
      <div className="contact-container">
        <div className="contact-header-top">
          <span className="contact-badge">Let's Connect</span>
          <h3>{config.developer.fullName}</h3>
          <p className="contact-role-sub">
            {config.developer.title} &bull; {config.developer.university} &bull; {config.developer.degree}
          </p>
        </div>

        {/* Interactive Contact & Message Grid */}
        <div className="contact-main-grid">
          {/* Left Column: Direct Message Form */}
          <div className="contact-form-container">
            <h4>Send a Direct Message</h4>
            <p className="form-subtext">
              Reach out regarding embedded systems engineering, AI research, graduate roles, or collaboration.
            </p>

            {submitted ? (
              <div className="form-success-box">
                <MdCheckCircle className="success-icon" />
                <h5>Message Dispatched!</h5>
                <p>Opening your email client to send directly to <strong>kiyuran.naidoo@gmail.com</strong>.</p>
                <button
                  type="button"
                  className="reset-btn"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", subject: "", message: "" });
                  }}
                  data-cursor="disable"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="contact-name">Your Name</label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. Dr. Jane Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      data-cursor="disable"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-email">Your Email</label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="e.g. jane.smith@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      data-cursor="disable"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="contact-subject">Subject</label>
                  <input
                    id="contact-subject"
                    type="text"
                    required
                    placeholder="e.g. Engineering Opportunity / Research Collaboration"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    data-cursor="disable"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    data-cursor="disable"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="form-submit-btn"
                  disabled={sending}
                  data-cursor="disable"
                >
                  <MdSend />
                  <span>{sending ? "Routing Message..." : "Send Message to kiyuran.naidoo@gmail.com"}</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Contact Details & Social Links */}
          <div className="contact-sidebar">
            <div className="contact-box">
              <h4>Direct Contact Details</h4>
              <p>
                <a href={`mailto:${config.contact.email}`} data-cursor="disable" title="Primary Email">
                  <MdEmail /> {config.contact.email}
                </a>
              </p>
              <h4>Academic Email</h4>
              <p>
                <a href={`mailto:${config.contact.academicEmail}`} data-cursor="disable" title="UCT Email">
                  <MdSchool /> {config.contact.academicEmail}
                </a>
              </p>
              <h4>Location</h4>
              <p>
                <span><MdLocationOn /> {config.social.location}</span>
              </p>
            </div>

            <div className="contact-box">
              <h4>Connect &amp; Verified Profiles</h4>
              <a
                href={config.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="disable"
                className="contact-social"
                title="GitHub Profile"
              >
                <span><FaGithub /> GitHub (@NonchaloirKN)</span> <MdArrowOutward />
              </a>
              <a
                href={config.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="disable"
                className="contact-social"
                title="LinkedIn Profile"
              >
                <span><FaLinkedinIn /> LinkedIn (Kiyuran Naidoo)</span> <MdArrowOutward />
              </a>
              <a
                href={config.developer.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="disable"
                className="contact-social contact-social-cv"
                download="Kiyuran Naidoo - CV 2026 - ePortfolio.pdf"
                title="Download Kiyuran Naidoo - CV 2026 - ePortfolio.pdf"
              >
                <span><MdDownload /> Curriculum Vitae 2026 (PDF)</span> <MdArrowOutward />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bar */}
        <div className="contact-footer-bar">
          <div className="footer-left">
            <h2>
              Engineered &amp; Designed by <span>{config.developer.fullName}</span>
            </h2>
            <p className="contact-course-note">
              University of Cape Town &bull; BSc(Eng) Electrical &amp; Computer Engineering &bull; Honours Graduate 2026
            </p>
          </div>
          <div className="footer-right">
            <h5>
              &copy; 2026 Kiyuran Naidoo. Professional ePortfolio.
            </h5>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
