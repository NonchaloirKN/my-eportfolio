import { useEffect, useState } from "react";
import About from "./About";
import Career from "./Career";
import Contact from "./Contact";
import Landing from "./Landing";
import WhatIDo from "./WhatIDo";
import TechStackNew from "./TechStackNew";
import Artefacts from "./Artefacts";
import CallToAction from "./CallToAction";
import setSplitText from "./utils/splitText";

import { lenis } from "./Navbar";

const Home = () => {
  const [activeSkillFilter, setActiveSkillFilter] = useState<string | null>(null);

  useEffect(() => {
    // Reset scroll to landing hero section at the top of the page
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }

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
        <WhatIDo setActiveSkillFilter={setActiveSkillFilter} />
        <Career />
        <TechStackNew
          activeSkillFilter={activeSkillFilter}
          setActiveSkillFilter={setActiveSkillFilter}
        />
        <Artefacts />
        <CallToAction />
        <Contact />
      </div>
    </main>
  );
};

export default Home;
