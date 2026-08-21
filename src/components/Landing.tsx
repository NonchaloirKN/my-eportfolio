import { PropsWithChildren, useEffect, useRef } from "react";
import "./styles/Landing.css";
import { config } from "../config";
import { MdArrowOutward } from "react-icons/md";
import { useLoading } from "../context/LoadingProvider";
import { initialFX } from "./utils/initialFX";

const Landing = ({ children }: PropsWithChildren) => {
  const { isLoading } = useLoading();
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (!isLoading && !hasAnimatedRef.current) {
      hasAnimatedRef.current = true;
      initialFX();
    }
  }, [isLoading]);

  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          {/* Left Hero Intro */}
          <div className="landing-intro">
            <h2>Hi, I'm</h2>
            <h1>
              KIYURAN <br />
              <span>NAIDOO</span>
            </h1>

            <p className="hero-intro-badge">
              BSc(Eng) Candidate &bull; University of Cape Town
            </p>

            <div className="hero-cta-wrapper">
              <a
                href="#about"
                className="hero-learn-btn"
                data-cursor="disable"
              >
                <span>Explore Bio &amp; Artefacts</span>
                <MdArrowOutward />
              </a>
            </div>
          </div>

          {/* Right Hero Specialisation & Focus Stack */}
          <div className="landing-info">
            <h3>Specialisation &amp; Focus</h3>

            <div className="landing-role-box">
              <h2 className="landing-role-title">
                Electrical &amp; Computer <br />
                <span className="landing-role-highlight">Engineering Student</span>
              </h2>
            </div>

            <div className="hero-focus-domains">
              <span className="hero-domain-pill">Embedded Systems</span>
              <span className="hero-domain-sep">&bull;</span>
              <span className="hero-domain-pill">AI &amp; Machine Learning</span>
            </div>

            <div className="hero-subheadline-bar">
              <p className="hero-subheadline-text">
                Developing innovative, end-to-end solutions at the intersection of hardware constraints and intelligent software systems.
              </p>
            </div>
          </div>

          {/* Mobile photo - shows only on mobile when 3D character is hidden */}
          <div className="mobile-photo">
            <img
              src="/images/kiyuran_avatar_3d.png"
              alt={config.developer.fullName}
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
