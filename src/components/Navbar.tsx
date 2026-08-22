import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import Lenis from "lenis";
import { config, navLinks } from "../config";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollTrigger);
export let lenis: Lenis | null = null;

const Navbar = () => {
  const [activeSection, setActiveSection] = useState<string>("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    // Initialize Lenis smooth scroll
    lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 2,
      infinite: false,
    });

    lenis.on("scroll", ScrollTrigger.update);
    const tickerUpdate = (time: number) => {
      lenis?.raf(time * 1000);
    };
    gsap.ticker.add(tickerUpdate);
    gsap.ticker.lagSmoothing(0);
    lenis.start();

    // Scroll state tracker for sticky navbar styling & active section sync
    const updateActiveSection = () => {
      const scrollY = window.scrollY;
      const scrolled = scrollY > 20;
      setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));

      if (scrollY < 180) {
        setActiveSection("");
        return;
      }

      // Check sections from bottom to top
      const reversedIds = ["contact", "artefacts", "skills", "experience", "about"];
      for (const id of reversedIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Active when the section is occupying the top 45% view area
          if (rect.top <= window.innerHeight * 0.45 && rect.bottom >= window.innerHeight * 0.1) {
            setActiveSection(id);
            return;
          }
        }
      }
    };

    window.addEventListener("scroll", updateActiveSection, { passive: true });
    lenis.on("scroll", updateActiveSection);

    // Initial check and delayed check after initial DOM render
    updateActiveSection();
    const initTimer = setTimeout(updateActiveSection, 500);

    const handleResize = () => {
      lenis?.resize();
      updateActiveSection();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(initTimer);
      gsap.ticker.remove(tickerUpdate);
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", handleResize);
      lenis?.destroy();
    };
  }, []);

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setActiveSection("");
    setMobileMenuOpen(false);
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href) as HTMLElement;
    if (target) {
      if (lenis && window.innerWidth > 768) {
        lenis.scrollTo(target, {
          offset: -70,
          duration: 1.2,
        });
      } else {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <>
      <header className={`header-wrapper ${isScrolled ? "header-scrolled" : ""}`}>
        <nav className="header" aria-label="Main Navigation">
          {/* Stylised KN Logo (Top Left) - Back to top */}
          <a
            href="#landingDiv"
            className="navbar-logo-btn"
            data-cursor="disable"
            onClick={scrollToTop}
            title="Scroll to Top - Kiyuran Naidoo"
            aria-label="Scroll to Top - Kiyuran Naidoo"
          >
            <span className="navbar-logo-kn">KN</span>
            <span className="navbar-logo-glow"></span>
          </a>

          {/* Email (Top Center) */}
          <a
            href={`mailto:${config.contact.email}`}
            className="navbar-connect"
            data-cursor="disable"
            title="Send Email"
          >
            <span className="status-dot"></span>
            <span className="navbar-email-text">{config.contact.email}</span>
          </a>

          {/* Desktop Navigation Links (Top Right) */}
          <ul className="desktop-nav">
            {navLinks.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li
                  key={item.id}
                  className={isActive ? "nav-item-active" : ""}
                >
                  <a
                    href={item.href}
                    data-cursor="disable"
                    onClick={(e) => {
                      setActiveSection(item.id);
                      scrollToSection(e, item.href);
                    }}
                    className={`nav-link-anchor ${isActive ? "active" : ""}`}
                  >
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Mobile Menu Toggle Button */}
          <button
            className="mobile-nav-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            data-cursor="disable"
          >
            {mobileMenuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
          </button>
        </nav>

        {/* Mobile Dropdown Menu */}
        <div className={`mobile-nav-menu ${mobileMenuOpen ? "mobile-nav-open" : ""}`}>
          <ul>
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className={`transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "text-cyan-400 font-bold"
                        : "text-gray-300 font-normal hover:text-cyan-200"
                    }`}
                    onClick={(e) => {
                      setActiveSection(link.id);
                      scrollToSection(e, link.href);
                    }}
                  >
                    {link.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </header>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
