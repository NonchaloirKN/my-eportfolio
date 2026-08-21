import { useState } from "react";
import { 
  MdArrowOutward, 
  MdDescription, 
  MdPsychology, 
  MdCheck, 
  MdKeyboardArrowDown, 
  MdKeyboardArrowUp,
  MdLayers,
  MdAccountTree,
} from "react-icons/md";
import { TbBrandGithub, TbCpu, TbCloudComputing, TbRoute, TbDeviceAnalytics, TbBinaryTree } from "react-icons/tb";
import { config } from "../config";
import "./styles/Artefacts.css";

type TabType = "all" | "technical" | "reflections" | "deliverables";

interface ReflectionItem {
  id: number;
  title: string;
  topic: string;
  theme: string;
  excerpt: string;
  content: string[];
  keyTakeaways: string[];
}

const reflectionsData: ReflectionItem[] = [
  {
    id: 1,
    title: "Bridging the Gap: My Identity as a Systems-Level Problem Solver",
    topic: "Engineering Practice & Identity",
    theme: "Engineering Identity & Systems Thinking",
    excerpt: "To me, engineering identity extends far beyond technical proficiency, as it is rooted in the responsibility to synthesise theory into tangible, innovative solutions...",
    content: [
      "To me, engineering identity extends far beyond technical proficiency, as it is rooted in the responsibility to synthesise theory into tangible, innovative solutions. As an electrical and computer engineering student, I perceive my identity as a dynamic bridge between low-level hardware constraints and high-level software ecosystems.",
      "My immersion in multidisciplinary environments has profoundly shaped this perspective. Transitioning from assembling printed circuit boards to architecting full-stack machine learning and AI platforms at maxwell+spark taught me that my true value lies in systems-level thinking and adaptability. Furthermore, contributing to the AQUA (Adaptive Quality Upscaling with Advanced) Manufacturing master's level research initiative by developing sub-pixel laser triangulation algorithms reinforced the necessity of rigorous precision and theoretical validation when navigating physical-digital interfaces.",
      "Equally important to my identity is collaboration. Researching battery management systems and fire suppression systems with the UCT Formula Student Africa team highlighted our profession’s reliance on cross-functional teamwork, while building digital application solutions under the pressure of tight hackathon constraints at the Standard Bank UniHack further substantiated the importance of user-centric design.",
      "Ultimately, my engineering identity is anchored in a continuous loop of learning and application, viewing complex challenges not as obstacles but as necessary catalysts to advance society through technology."
    ],
    keyTakeaways: [
      "Hardware-Software Synthesis",
      "Systems-Level Thinking",
      "Precision & Mathematical Validation",
      "Cross-Functional Team Collaboration"
    ]
  },
  {
    id: 2,
    title: "The Social Contract: Building with Conscience",
    topic: "Professional Ethics & Public Safety",
    theme: "Engineering Ethics & Social Responsibility",
    excerpt: "The readings by Doherty and Bielefeldt reinforced my belief that engineering is a profound social contract, not a neutral, isolated act...",
    content: [
      "The readings by Doherty and Bielefeldt reinforced my belief that engineering is a profound social contract, not a neutral, isolated act. Our responsibility as engineers extends far beyond functional compliance, as it demands that we actively anticipate the long-term human and environmental impacts of our designs.",
      "Gwynne-Evans’ analysis of the Challenger disaster, specifically the dangerous tension between managerial priorities and engineering ethics, resonates deeply with my work on the UCT Formula Student Africa Racing team. Researching and designing battery management and fire suppression systems taught me that prioritising budget or weight constraints over rigorous safety standards directly compromises human lives. Similarly, while architecting full-stack AI platforms at maxwell+spark, I realised that digital ecosystems require the same rigorous ethical scrutiny as physical infrastructure. An algorithm optimised purely for commercial deployment speed, without considering potential biases or real-world harm, represents a failure of professional fidelity.",
      "The professional I intend to be will not merely ask if a solution is technologically viable, but whether it actively and equitably serves the community. True engineering identity lies in balancing relentless innovation with an unwavering commitment to ethical integrity and public welfare, and I aim to maintain the moral courage to prioritise public welfare over organisational pressure."
    ],
    keyTakeaways: [
      "The Engineer's Social Contract (Doherty & Bielefeldt)",
      "Ethical Fidelity vs Organisational Pressure",
      "Safety-Critical Systems Rigour (BMS & High Voltage)",
      "Algorithmic Responsibility in Edge AI"
    ]
  },
  {
    id: 3,
    title: "The Specialist’s Challenge: Balancing Depth with Team Dynamics",
    topic: "Team Dynamics & Collaboration",
    theme: "Belbin Team Roles & Group Dynamics",
    excerpt: "In collaborative engineering group activities, I have identified my primary Belbin role as the Specialist. During ethical dilemma case analyses, I found myself instinctively retreating into the background...",
    content: [
      "In collaborative engineering group activities, I have identified my primary Belbin role as the Specialist. During complex technical and ethical dilemma analyses, I found myself instinctively retreating into the background to research technical context, preferring to provide deep, fact-based contributions rather than managing the social flow of the group.",
      "However, playing the Specialist carries inherent friction. My deep focus on technical accuracy can sometimes isolate me from the broader group discussion or slow the team down if I get bogged down in details. I saw this challenge clearly in multi-disciplinary team settings. While I was focused on research, it was my teammates acting as Resource Investigators who sparked initial conversations, and Coordinators who drove us toward actual decisions. My Specialist tendencies complement Completers and Implementers, providing them with the robust technical foundation they need to refine and polish our final outputs.",
      "I have realised that my personal challenge is to avoid letting my technical focus create a silo. Effective teamwork requires me to trust team coordination and external perspectives, stepping out of my technical comfort zone to ensure my research actively and directly supports our shared, collective goal rather than just my own standard of accuracy."
    ],
    keyTakeaways: [
      "Primary Belbin Role: Specialist",
      "Managing Technical Siloing & Over-Analysis",
      "Cross-Role Synergy (Coordinator, Resource Investigator, Completer)",
      "Collaborative Trust & Collective Mission"
    ]
  }
];

const Artefacts = () => {
  const [activeTab, setActiveTab] = useState<TabType>("all");
  const [expandedReflection, setExpandedReflection] = useState<number | null>(1);

  const toggleReflection = (id: number) => {
    setExpandedReflection(expandedReflection === id ? null : id);
  };

  return (
    <section className="artefacts-section section-container" id="artefacts">
      <div id="projects" style={{ position: "relative", top: "-100px" }}></div>
      <div className="artefacts-container">
        {/* Section Header */}
        <div className="artefacts-header">
          <span className="artefacts-badge">Technical Evidence &bull; Verified Portfolio</span>
          <h2>
            Artefacts <span>&amp;</span> <br />
            Technical Evidence
          </h2>
          <p className="artefacts-subtitle">
            A curated selection of technical projects and professional reflections demonstrating my capability to architect end-to-end solutions, navigate complex hardware-software integrations, and uphold rigorous ethical standards in engineering.
          </p>

          {/* Filter & View Tabs */}
          <div className="artefacts-tab-bar">
            <button
              className={`artefact-tab-btn ${activeTab === "all" ? "tab-btn-active" : ""}`}
              onClick={() => setActiveTab("all")}
              data-cursor="disable"
            >
              <MdLayers />
              All Artefacts (9)
            </button>
            <button
              className={`artefact-tab-btn ${activeTab === "technical" ? "tab-btn-active" : ""}`}
              onClick={() => setActiveTab("technical")}
              data-cursor="disable"
            >
              <MdAccountTree />
              Architecture Flowcharts &amp; Evidence (6)
            </button>
            <button
              className={`artefact-tab-btn ${activeTab === "reflections" ? "tab-btn-active" : ""}`}
              onClick={() => setActiveTab("reflections")}
              data-cursor="disable"
            >
              <MdPsychology />
              Professional Reflections (3)
            </button>
            <button
              className={`artefact-tab-btn ${activeTab === "deliverables" ? "tab-btn-active" : ""}`}
              onClick={() => setActiveTab("deliverables")}
              data-cursor="disable"
            >
              <MdDescription />
              Verified Repositories (6)
            </button>
          </div>
        </div>

        {/* ========================================================= */}
        {/* PART 1: 6 STUNNING PROJECT CARDS WITH INTERACTIVE FLOWCHARTS */}
        {/* ========================================================= */}
        {(activeTab === "all" || activeTab === "technical") && (
          <div className="artefacts-group-block">
            <div className="group-title-row">
              <div className="group-title-left">
                <span className="group-icon-pill">
                  <MdAccountTree />
                </span>
                <div>
                  <h3>Part 1: Verified Architecture Pipelines &amp; Systems</h3>
                  <p>High-fidelity system architectures, edge AI dataflows, and optical metrology pipelines built for verified engineering applications.</p>
                </div>
              </div>
              <span className="group-badge">Live System Architectures</span>
            </div>

            <div className="technical-evidence-grid">
              {/* Project 1: Maxwell & Spark Full-Stack AI Platform */}
              <div className="evidence-card border border-cyan-500/20 bg-slate-900/80 backdrop-blur-xl rounded-2xl p-6 shadow-2xl transition-all duration-300 hover:border-cyan-400/50">
                <div className="evidence-card-header flex justify-between items-start mb-4">
                  <div className="evidence-title-area">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 mb-2">
                      <TbCpu className="text-sm" /> Edge AI &bull; Full-Stack Platform
                    </span>
                    <h4 className="text-2xl font-bold text-white tracking-tight">Maxwell &amp; Spark Full-Stack AI Platform</h4>
                    <p className="text-xs text-slate-400 mt-1">maxwell+spark (Pty) Ltd &bull; Dec 2025 - Feb 2026</p>
                  </div>
                  <a
                    href="https://github.com/NonchaloirKN/Maxwell_and_Spark_Jan26"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="evidence-repo-btn inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-cyan-300 bg-cyan-950/40 border border-cyan-500/40 hover:bg-cyan-500/20 hover:border-cyan-400 hover:text-white transition-all shadow-lg shadow-cyan-950/50"
                    data-cursor="disable"
                  >
                    <TbBrandGithub className="text-base" />
                    <span>View Repository</span>
                    <MdArrowOutward className="text-sm" />
                  </a>
                </div>

                <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                  Architected a full-stack platform featuring live YOLO ONNX inference in WebAssembly, SignalR WebSockets telemetry streaming, and an interrupt-driven STM32N6 NPU OS shell.
                </p>

                {/* High-Fidelity Flowchart: Maxwell & Spark */}
                <div className="flex md:flex-row flex-col items-center gap-3 w-full py-4">
                  <div className="bg-slate-800/80 border border-cyan-500/50 shadow-[0_0_15px_rgba(0,229,255,0.2)] rounded-lg p-3 text-cyan-50 text-sm font-semibold backdrop-blur-sm flex-1 text-center w-full">
                    STM32N6 Edge OS
                  </div>
                  <div className="w-4 h-4 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_10px_#00e5ff] flex-shrink-0"></div>
                  <div className="bg-slate-800/80 border border-cyan-500/50 shadow-[0_0_15px_rgba(0,229,255,0.2)] rounded-lg p-3 text-cyan-50 text-sm font-semibold backdrop-blur-sm flex-1 text-center w-full">
                    ASP.NET Core SignalR
                  </div>
                  <div className="w-4 h-4 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_10px_#00e5ff] flex-shrink-0"></div>
                  <div className="bg-slate-800/80 border border-cyan-500/50 shadow-[0_0_15px_rgba(0,229,255,0.2)] rounded-lg p-3 text-cyan-50 text-sm font-semibold backdrop-blur-sm flex-1 text-center w-full">
                    React + ONNX WASM
                  </div>
                </div>

                <div className="evidence-card-footer mt-4">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 rounded-md text-xs bg-slate-800/80 border border-slate-700 text-slate-300 font-mono">STM32N6</span>
                    <span className="px-2.5 py-1 rounded-md text-xs bg-slate-800/80 border border-slate-700 text-slate-300 font-mono">Neural-ART NPU</span>
                    <span className="px-2.5 py-1 rounded-md text-xs bg-slate-800/80 border border-slate-700 text-slate-300 font-mono">ONNX WASM</span>
                    <span className="px-2.5 py-1 rounded-md text-xs bg-slate-800/80 border border-slate-700 text-slate-300 font-mono">SignalR WebSockets</span>
                    <span className="px-2.5 py-1 rounded-md text-xs bg-slate-800/80 border border-slate-700 text-slate-300 font-mono">React</span>
                  </div>
                </div>
              </div>

              {/* Project 2: AQUA Manufacturing Vision System */}
              <div className="evidence-card border border-cyan-500/20 bg-slate-900/80 backdrop-blur-xl rounded-2xl p-6 shadow-2xl transition-all duration-300 hover:border-cyan-400/50">
                <div className="evidence-card-header flex justify-between items-start mb-4">
                  <div className="evidence-title-area">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 mb-2">
                      <TbDeviceAnalytics className="text-sm" /> Optical Metrology &bull; 3D Laser Scanning
                    </span>
                    <h4 className="text-2xl font-bold text-white tracking-tight">AQUA Manufacturing Vision System</h4>
                    <p className="text-xs text-slate-400 mt-1">UCT Master&apos;s Research Initiative &bull; Jun 2025 - Aug 2025</p>
                  </div>
                  <a
                    href="https://github.com/uruncleinthefurniturebusiness/AQUA_Manufacturing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="evidence-repo-btn inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-cyan-300 bg-cyan-950/40 border border-cyan-500/40 hover:bg-cyan-500/20 hover:border-cyan-400 hover:text-white transition-all shadow-lg shadow-cyan-950/50"
                    data-cursor="disable"
                  >
                    <TbBrandGithub className="text-base" />
                    <span>View Repository</span>
                    <MdArrowOutward className="text-sm" />
                  </a>
                </div>

                <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                  Engineered an automated optical laser triangulation pipeline extracting sub-pixel laser profiles from Raspberry Pi Camera 3 feeds into dense 3D point clouds.
                </p>

                {/* High-Fidelity Vertical Pipeline: AQUA */}
                <div className="flex flex-col gap-2 w-full py-4">
                  {['Raspberry Pi Camera 3', 'OpenCV: Sub-Pixel Thresholding', '3D Spatial Triangulation', '.PLY Point Cloud Export'].map((step) => (
                    <div key={step} className="w-full bg-gradient-to-r from-slate-900 to-slate-800 border-l-4 border-cyan-400 p-3 rounded-r-lg text-gray-200 text-sm font-medium shadow-md">
                      {step}
                    </div>
                  ))}
                </div>

                <div className="evidence-card-footer mt-4">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 rounded-md text-xs bg-slate-800/80 border border-slate-700 text-slate-300 font-mono">Python 3.11</span>
                    <span className="px-2.5 py-1 rounded-md text-xs bg-slate-800/80 border border-slate-700 text-slate-300 font-mono">OpenCV</span>
                    <span className="px-2.5 py-1 rounded-md text-xs bg-slate-800/80 border border-slate-700 text-slate-300 font-mono">Triangulation Math</span>
                    <span className="px-2.5 py-1 rounded-md text-xs bg-slate-800/80 border border-slate-700 text-slate-300 font-mono">Pi Camera 3</span>
                    <span className="px-2.5 py-1 rounded-md text-xs bg-slate-800/80 border border-slate-700 text-slate-300 font-mono">.PLY / .STL Point Clouds</span>
                  </div>
                </div>
              </div>

              {/* Project 3: UmNyango Health Services (AWS Cloud) */}
              <div className="evidence-card border border-cyan-500/20 bg-slate-900/80 backdrop-blur-xl rounded-2xl p-6 shadow-2xl transition-all duration-300 hover:border-cyan-400/50">
                <div className="evidence-card-header flex justify-between items-start mb-4">
                  <div className="evidence-title-area">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 mb-2">
                      <TbCloudComputing className="text-sm" /> Cloud Architecture &bull; Voice AI Triage
                    </span>
                    <h4 className="text-2xl font-bold text-white tracking-tight">UmNyango Health Services (AWS Cloud)</h4>
                    <p className="text-xs text-slate-400 mt-1">Standard Bank UniHack 2026 Winner &bull; Serverless Infrastructure</p>
                  </div>
                  <a
                    href="https://github.com/maarijbhai/Standard-Bank-UniHack-2026"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="evidence-repo-btn inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-cyan-300 bg-cyan-950/40 border border-cyan-500/40 hover:bg-cyan-500/20 hover:border-cyan-400 hover:text-white transition-all shadow-lg shadow-cyan-950/50"
                    data-cursor="disable"
                  >
                    <TbBrandGithub className="text-base" />
                    <span>View Repository</span>
                    <MdArrowOutward className="text-sm" />
                  </a>
                </div>

                <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                  Standard Bank UniHack AI healthcare platform facilitating real-time multilingual voice triage, WebSocket API Gateway routing, and serverless AWS Lambda transcription pipelines.
                </p>

                {/* High-Fidelity Cloud Infrastructure: UmNyango */}
                <div className="flex md:flex-row flex-col items-center justify-between w-full py-4 gap-4">
                  <div className="bg-blue-900/40 border border-blue-500/50 rounded-lg p-4 text-center text-blue-100 flex-1 w-full font-medium">
                    React Frontend
                  </div>
                  <span className="text-blue-400 font-bold text-xl animate-pulse">⟷</span>
                  <div className="bg-purple-900/40 border border-purple-500/50 rounded-lg p-4 text-center text-purple-100 flex-1 w-full font-medium">
                    WebSocket API Gateway
                  </div>
                  <span className="text-orange-400 font-bold text-xl animate-pulse">⟷</span>
                  <div className="bg-orange-900/40 border border-orange-500/50 rounded-lg p-4 text-center text-orange-100 flex-1 w-full font-medium">
                    AWS Lambda &amp; Transcribe
                  </div>
                </div>

                <div className="evidence-card-footer mt-4">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 rounded-md text-xs bg-slate-800/80 border border-slate-700 text-slate-300 font-mono">AWS Lambda</span>
                    <span className="px-2.5 py-1 rounded-md text-xs bg-slate-800/80 border border-slate-700 text-slate-300 font-mono">Amazon Transcribe</span>
                    <span className="px-2.5 py-1 rounded-md text-xs bg-slate-800/80 border border-slate-700 text-slate-300 font-mono">WebSocket API Gateway</span>
                    <span className="px-2.5 py-1 rounded-md text-xs bg-slate-800/80 border border-slate-700 text-slate-300 font-mono">React</span>
                    <span className="px-2.5 py-1 rounded-md text-xs bg-slate-800/80 border border-slate-700 text-slate-300 font-mono">Node.js</span>
                  </div>
                </div>
              </div>

              {/* Project 4: Micromouse Maze Navigator */}
              <div className="evidence-card border border-cyan-500/20 bg-slate-900/80 backdrop-blur-xl rounded-2xl p-6 shadow-2xl transition-all duration-300 hover:border-cyan-400/50">
                <div className="evidence-card-header flex justify-between items-start mb-4">
                  <div className="evidence-title-area">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 mb-2">
                      <TbRoute className="text-sm" /> Robotics &bull; Autonomous Pathfinding
                    </span>
                    <h4 className="text-2xl font-bold text-white tracking-tight">Micromouse Maze Navigator</h4>
                    <p className="text-xs text-slate-400 mt-1">Autonomous 24-Cell Robotic Navigation</p>
                  </div>
                  <a
                    href="https://github.com/joshua-naidoo/Micromouse-Project"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="evidence-repo-btn inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-cyan-300 bg-cyan-950/40 border border-cyan-500/40 hover:bg-cyan-500/20 hover:border-cyan-400 hover:text-white transition-all shadow-lg shadow-cyan-950/50"
                    data-cursor="disable"
                  >
                    <TbBrandGithub className="text-base" />
                    <span>View Repository</span>
                    <MdArrowOutward className="text-sm" />
                  </a>
                </div>

                <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                  Programmed complex path-planning and cell-mapping logic for an autonomous 24-cell micromouse maze navigation system.
                </p>

                {/* High-Fidelity 2x2 Maze Grid: Micromouse */}
                <div className="grid grid-cols-2 gap-2 p-4 bg-slate-900/50 rounded-lg border border-slate-700 w-48 mx-auto my-2">
                  <div className="bg-cyan-500/20 border border-cyan-400 h-10 rounded shadow-[0_0_10px_#00e5ff] flex items-center justify-center text-xs text-cyan-200 font-medium">
                    Start
                  </div>
                  <div className="bg-cyan-500/50 border border-cyan-400 h-10 rounded animate-pulse shadow-[0_0_15px_#00e5ff] flex items-center justify-center text-xs text-cyan-100 font-medium">
                    Path
                  </div>
                  <div className="bg-slate-800 h-10 rounded border border-slate-600"></div>
                  <div className="bg-green-500/30 border border-green-400 h-10 rounded shadow-[0_0_10px_#4ade80] flex items-center justify-center text-xs text-green-200 font-medium">
                    Target
                  </div>
                </div>

                <div className="evidence-card-footer mt-4">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 rounded-md text-xs bg-slate-800/80 border border-slate-700 text-slate-300 font-mono">C++</span>
                    <span className="px-2.5 py-1 rounded-md text-xs bg-slate-800/80 border border-slate-700 text-slate-300 font-mono">Floodfill Algorithm</span>
                    <span className="px-2.5 py-1 rounded-md text-xs bg-slate-800/80 border border-slate-700 text-slate-300 font-mono">IR Proximity Sensors</span>
                    <span className="px-2.5 py-1 rounded-md text-xs bg-slate-800/80 border border-slate-700 text-slate-300 font-mono">Encoders</span>
                    <span className="px-2.5 py-1 rounded-md text-xs bg-slate-800/80 border border-slate-700 text-slate-300 font-mono">PID Control</span>
                  </div>
                </div>
              </div>

              {/* Project 5: Antarctic Spectrophotometer Probe */}
              <div className="evidence-card border border-cyan-500/20 bg-slate-900/80 backdrop-blur-xl rounded-2xl p-6 shadow-2xl transition-all duration-300 hover:border-cyan-400/50">
                <div className="evidence-card-header flex justify-between items-start mb-4">
                  <div className="evidence-title-area">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 mb-2">
                      <TbDeviceAnalytics className="text-sm" /> Telemetry &bull; Extreme Environment IoT
                    </span>
                    <h4 className="text-2xl font-bold text-white tracking-tight">Antarctic Spectrophotometer Probe</h4>
                    <p className="text-xs text-slate-400 mt-1">Autonomous Sub-Zero Environmental Sensing</p>
                  </div>
                  <a
                    href="https://github.com/StormRaider01/Antarctic_Probe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="evidence-repo-btn inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-cyan-300 bg-cyan-950/40 border border-cyan-500/40 hover:bg-cyan-500/20 hover:border-cyan-400 hover:text-white transition-all shadow-lg shadow-cyan-950/50"
                    data-cursor="disable"
                  >
                    <TbBrandGithub className="text-base" />
                    <span>View Repository</span>
                    <MdArrowOutward className="text-sm" />
                  </a>
                </div>

                <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                  Contributed to the circuit design, bill of materials, and firmware for a spectrophotometer probe utilising ESP32-C6 microcontrollers and spectral sensors.
                </p>

                {/* High-Fidelity Hardware Pinout: Antarctic Probe */}
                <div className="flex items-center justify-center gap-4 py-4 w-full">
                  <div className="bg-zinc-800 border-2 border-zinc-500 rounded-md p-4 text-zinc-100 font-mono text-sm relative">
                    <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-2 h-2 bg-yellow-400 rounded-full"></div>
                    ESP32-C6 MCU
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-[10px] text-gray-400 uppercase tracking-widest">I2C / SPI</span>
                    <div className="w-16 h-0.5 bg-yellow-400/50 border-t border-dashed border-yellow-400"></div>
                  </div>
                  <div className="bg-zinc-800 border-2 border-zinc-500 rounded-md p-4 text-zinc-100 font-mono text-sm relative">
                    <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-2 h-2 bg-yellow-400 rounded-full"></div>
                    Spectral Sensors
                  </div>
                </div>

                <div className="evidence-card-footer mt-4">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 rounded-md text-xs bg-slate-800/80 border border-slate-700 text-slate-300 font-mono">C++</span>
                    <span className="px-2.5 py-1 rounded-md text-xs bg-slate-800/80 border border-slate-700 text-slate-300 font-mono">ESP32-C6</span>
                    <span className="px-2.5 py-1 rounded-md text-xs bg-slate-800/80 border border-slate-700 text-slate-300 font-mono">Spectral Sensors</span>
                    <span className="px-2.5 py-1 rounded-md text-xs bg-slate-800/80 border border-slate-700 text-slate-300 font-mono">Circuit Design</span>
                    <span className="px-2.5 py-1 rounded-md text-xs bg-slate-800/80 border border-slate-700 text-slate-300 font-mono">Low-Power Sleep States</span>
                  </div>
                </div>
              </div>

              {/* Project 6: YODA RISC Processor */}
              <div className="evidence-card border border-cyan-500/20 bg-slate-900/80 backdrop-blur-xl rounded-2xl p-6 shadow-2xl transition-all duration-300 hover:border-cyan-400/50">
                <div className="evidence-card-header flex justify-between items-start mb-4">
                  <div className="evidence-title-area">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 mb-2">
                      <TbBinaryTree className="text-sm" /> Computer Architecture &bull; Hardware Design
                    </span>
                    <h4 className="text-2xl font-bold text-white tracking-tight">YODA RISC Processor</h4>
                    <p className="text-xs text-slate-400 mt-1">HDL Processor Architecture &bull; Timing Analysis</p>
                  </div>
                  <a
                    href="https://github.com/joshua-naidoo/YODA_GROUP_18"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="evidence-repo-btn inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-cyan-300 bg-cyan-950/40 border border-cyan-500/40 hover:bg-cyan-500/20 hover:border-cyan-400 hover:text-white transition-all shadow-lg shadow-cyan-950/50"
                    data-cursor="disable"
                  >
                    <TbBrandGithub className="text-base" />
                    <span>View Repository</span>
                    <MdArrowOutward className="text-sm" />
                  </a>
                </div>

                <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                  Designed and implemented a baseline RISC processor architecture using hardware description languages and timing analysis.
                </p>

                {/* High-Fidelity Linear Datapath Pipeline: YODA RISC */}
                <div className="flex flex-wrap items-center justify-center gap-2 py-4">
                  {['Fetch', 'Decode', 'ALU Execute', 'Memory', 'Writeback'].map((stage, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="bg-indigo-900/60 border border-indigo-400/50 px-3 py-1 rounded text-xs font-mono text-indigo-100 uppercase tracking-wider">
                        {stage}
                      </div>
                      {i < 4 && <span className="text-indigo-500/70">▶</span>}
                    </div>
                  ))}
                </div>

                <div className="evidence-card-footer mt-4">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 rounded-md text-xs bg-slate-800/80 border border-slate-700 text-slate-300 font-mono">Verilog / HDL</span>
                    <span className="px-2.5 py-1 rounded-md text-xs bg-slate-800/80 border border-slate-700 text-slate-300 font-mono">RISC Architecture</span>
                    <span className="px-2.5 py-1 rounded-md text-xs bg-slate-800/80 border border-slate-700 text-slate-300 font-mono">Timing Analysis</span>
                    <span className="px-2.5 py-1 rounded-md text-xs bg-slate-800/80 border border-slate-700 text-slate-300 font-mono">FPGA Execution</span>
                    <span className="px-2.5 py-1 rounded-md text-xs bg-slate-800/80 border border-slate-700 text-slate-300 font-mono">Instruction Decoder</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* PART 2: PROFESSIONAL & ETHICAL ENGINEERING REFLECTIONS */}
        {/* ========================================================= */}
        {(activeTab === "all" || activeTab === "reflections") && (
          <div className="artefacts-group-block">
            <div className="group-title-row">
              <div className="group-title-left">
                <span className="group-icon-pill icon-pill-academic">
                  <MdPsychology />
                </span>
                <div>
                  <h3>Part 2: Professional &amp; Ethical Engineering Reflections</h3>
                  <p>Critical engineering ethics, professional identity formulations, and Belbin group dynamic analyses.</p>
                </div>
              </div>
              <span className="group-badge">Professional Formulations</span>
            </div>

            <div className="reflections-accordion-list">
              {reflectionsData.map((ref) => {
                const isExpanded = expandedReflection === ref.id;
                return (
                  <div
                    key={ref.id}
                    className={`reflection-card ${isExpanded ? "reflection-card-expanded" : ""}`}
                  >
                    <div
                      className="reflection-header-clickable"
                      onClick={() => toggleReflection(ref.id)}
                      data-cursor="disable"
                    >
                      <div className="reflection-header-left">
                        <div className="reflection-number-badge">
                          0{ref.id}
                        </div>
                        <div className="reflection-title-box">
                          <span className="reflection-theme-tag">{ref.theme}</span>
                          <h4>{ref.title}</h4>
                          <span className="reflection-topic-label">{ref.topic} &bull; University of Cape Town</span>
                        </div>
                      </div>

                      <div className="reflection-toggle-btn">
                        <span>{isExpanded ? "Collapse" : "Read Full Reflection"}</span>
                        {isExpanded ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
                      </div>
                    </div>

                    {/* Excerpt preview when collapsed */}
                    {!isExpanded && (
                      <div className="reflection-preview" onClick={() => toggleReflection(ref.id)}>
                        <p>{ref.excerpt}</p>
                      </div>
                    )}

                    {/* Expanded Full Reflection Content */}
                    {isExpanded && (
                      <div className="reflection-full-content">
                        <div className="reflection-body-paragraphs">
                          {ref.content.map((para, pIdx) => (
                            <p key={pIdx}>{para}</p>
                          ))}
                        </div>

                        <div className="reflection-key-takeaways">
                          <h5>Key Conceptual Anchors:</h5>
                          <div className="takeaways-flex">
                            {ref.keyTakeaways.map((item, tIdx) => (
                              <span key={tIdx} className="takeaway-pill">
                                <MdCheck />
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* PART 3: ACADEMIC DELIVERABLES & VERIFIED REPOSITORIES */}
        {/* ========================================================= */}
        {(activeTab === "all" || activeTab === "deliverables") && (
          <div className="artefacts-group-block">
            <div className="group-title-row">
              <div className="group-title-left">
                <span className="group-icon-pill">
                  <MdDescription />
                </span>
                <div>
                  <h3>Part 3: Verified Project Repositories &amp; Specifications</h3>
                  <p>Comprehensive engineering source repositories, algorithm implementations, and hardware documentation.</p>
                </div>
              </div>
              <span className="group-badge">Open Source Repositories</span>
            </div>

            <div className="artefacts-grid">
              {config.artefacts.map((art, idx) => (
                <div className="artefact-card" key={art.id}>
                  <div className="artefact-card-top">
                    <div className="artefact-icon-box">
                      <TbBrandGithub />
                    </div>
                    <span className="artefact-tag">{art.tag}</span>
                  </div>

                  <div className="artefact-card-body">
                    <span className="artefact-num">0{idx + 1}</span>
                    <h3>{art.title}</h3>
                    <span className="artefact-cat">{art.category}</span>
                    <p>{art.description}</p>
                  </div>

                  <div className="artefact-card-footer">
                    <a
                      href={art.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="artefact-btn"
                      data-cursor="disable"
                      title={`Open ${art.title} Repository`}
                    >
                      <span>View Repository</span>
                      <MdArrowOutward />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Artefacts;
