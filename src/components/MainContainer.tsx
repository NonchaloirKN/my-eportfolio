import { useEffect } from "react";
import About from "./About";
import Career from "./Career";
import Contact from "./Contact";
import Landing from "./Landing";
import WhatIDo from "./WhatIDo";
import TechStackNew from "./TechStackNew";
import Artefacts from "./Artefacts";
import CallToAction from "./CallToAction";
import setSplitText from "./utils/splitText";

const MainContainer = () => {
  useEffect(() => {
    const resizeHandler = () => {
      setSplitText();
    };
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <main className="main-body">
      <div className="container-main">
        <Landing />
        <About />
        <WhatIDo />
        <Career />
        <TechStackNew />
        <Artefacts />
        <CallToAction />
        <Contact />
      </div>
    </main>
  );
};

export default MainContainer;
