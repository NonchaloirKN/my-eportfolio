import { TextSplitter } from "../../utils/textSplitter";
import gsap from "gsap";
import { lenis } from "../Navbar";

export function initialFX() {
  document.body.style.overflowY = "auto";
  if (lenis) {
    lenis.start();
  }
  document.getElementsByTagName("main")[0]?.classList.add("main-active");
  gsap.to("body", {
    backgroundColor: "#040914",
    duration: 0.5,
    delay: 0.5,
  });

  const selectors = [
    ".landing-intro h2",
    ".landing-intro h1",
    ".landing-info h3",
    ".landing-role-title",
  ];
  const elements = selectors.flatMap((selector) =>
    Array.from(document.querySelectorAll(selector))
  );

  var landingText = new TextSplitter(elements, {
    type: "chars,lines",
    linesClass: "split-line",
  });

  gsap.fromTo(
    landingText.chars,
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.out",
      y: 0,
      stagger: 0.025,
      delay: 0.5,
    }
  );

  gsap.fromTo(
    [
      ".hero-intro-badge",
      ".hero-cta-wrapper",
      ".hero-focus-domains",
      ".hero-subheadline-bar",
    ],
    { opacity: 0, y: 25 },
    {
      opacity: 1,
      duration: 1.0,
      ease: "power2.out",
      y: 0,
      stagger: 0.1,
      delay: 0.6,
    }
  );

  gsap.fromTo(
    [
      ".header-wrapper",
      ".fixed-social-bottom-left",
      ".fixed-resume-bottom-right",
      ".nav-fade",
    ],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.0,
      ease: "power1.inOut",
      delay: 0.3,
    }
  );
}
