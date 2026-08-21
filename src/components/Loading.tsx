import { useEffect, useRef, useState } from "react";
import "./styles/Loading.css";
import { useLoading } from "../context/LoadingProvider";
import { config } from "../config";
import Marquee from "react-fast-marquee";

const Loading = ({ percent }: { percent: number }) => {
  const { setIsLoading } = useLoading();
  const [loaded, setLoaded] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const hasTriggeredRef = useRef(false);

  useEffect(() => {
    if (percent >= 100 && !hasTriggeredRef.current) {
      hasTriggeredRef.current = true;
      setLoaded(true);

      // Display "Welcome to My ePortfolio" for 600ms, then start the smooth 1000ms CSS fade-out
      setTimeout(() => {
        setIsTransitioning(true);

        // Unmount loader component ONLY after the 1000ms CSS fade completes
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      }, 600);
    }
  }, [percent, setIsLoading]);

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const { currentTarget: target } = e;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  }

  return (
    <>
      <div className={`loading-header ${isTransitioning ? "loading-header-fade" : ""}`}>
        <a href="/#" className="loader-title" data-cursor="disable">
          <span className="loader-kn-badge">KN</span>
          <span className="loader-name">{config.developer.fullName}</span>
          <span className="loader-badge">BSc(Eng) ECE</span>
        </a>
        <div className={`loaderGame ${isTransitioning ? "loader-out" : ""}`}>
          <div className="loaderGame-container">
            <div className="loaderGame-in">
              {[...Array(27)].map((_, index) => (
                <div className="loaderGame-line" key={index}></div>
              ))}
            </div>
            <div className="loaderGame-ball"></div>
          </div>
        </div>
      </div>
      <div className={`loading-screen ${isTransitioning ? "fade-out" : ""}`}>
        <div className="loading-marquee">
          <Marquee>
            <span>&nbsp; Embedded Systems &nbsp;</span> <span>&nbsp; Edge AI &amp; Machine Learning &nbsp;</span>
            <span>&nbsp; Electrical &amp; Computer Engineering &nbsp;</span> <span>&nbsp; University of Cape Town &nbsp;</span>
          </Marquee>
        </div>
        <div
          className={`loading-wrap ${isTransitioning ? "loading-clicked" : ""}`}
          onMouseMove={(e) => handleMouseMove(e)}
        >
          <div className="loading-hover"></div>
          <div className={`loading-button ${loaded ? "loading-complete" : ""}`}>
            {!loaded ? (
              <div className="loading-single-text">
                Entering My ePortfolio <span className="loading-pct-val">{percent}%</span>
                <span className="loading-blink-box"></span>
              </div>
            ) : (
              <div className="loading-enter-text">
                <span>Welcome to My ePortfolio</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Loading;

export const setProgress = (setLoading: (value: number) => void) => {
  let percent: number = 0;

  let interval = setInterval(() => {
    if (percent <= 50) {
      let rand = Math.round(Math.random() * 5);
      percent = percent + rand;
      setLoading(percent);
    } else {
      clearInterval(interval);
      interval = setInterval(() => {
        percent = percent + Math.round(Math.random());
        setLoading(percent);
        if (percent > 91) {
          clearInterval(interval);
        }
      }, 2000);
    }
  }, 100);

  function clear() {
    clearInterval(interval);
    setLoading(100);
  }

  function loaded() {
    return new Promise<number>((resolve) => {
      clearInterval(interval);
      interval = setInterval(() => {
        if (percent < 100) {
          percent++;
          setLoading(percent);
        } else {
          resolve(percent);
        }
      }, 2);
    });
  }
  return { loaded, percent, clear };
};
