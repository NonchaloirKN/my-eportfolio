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
import { 
  TbBrandGithub, 
  TbCpu, 
  TbCloudComputing, 
  TbRoute, 
  TbDeviceAnalytics, 
  TbBinaryTree,
  TbDeviceMobile,
  TbDatabase,
} from "react-icons/tb";
import { config } from "../config";
import "./styles/Artefacts.css";

type TabType = "all" | "technical" | "reflections" | "deliverables";

/* ========================================================= */
/* BESPOKE PROJECT CSS ART VISUALS                           */
/* ========================================================= */

// 1. Maxwell & Spark Neural Network Visual
const MaxwellNeuralVisual = () => (
  <div className="relative w-full h-44 bg-slate-950/85 rounded-xl border border-cyan-500/30 overflow-hidden my-4 flex items-center justify-center p-3 shadow-inner">
    {/* Cyber Matrix Grid Background */}
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#00559612_1px,transparent_1px),linear-gradient(to_bottom,#00559612_1px,transparent_1px)] bg-[size:16px_16px]"></div>

    {/* SVG Connecting Synaptic Lines */}
    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
      <line x1="15" y1="28" x2="50" y2="22" stroke="rgba(0,229,255,0.3)" strokeWidth="1.5" />
      <line x1="15" y1="28" x2="50" y2="78" stroke="rgba(0,229,255,0.3)" strokeWidth="1.5" />
      <line x1="15" y1="72" x2="50" y2="22" stroke="rgba(0,229,255,0.3)" strokeWidth="1.5" />
      <line x1="15" y1="72" x2="50" y2="78" stroke="rgba(0,229,255,0.3)" strokeWidth="1.5" />
      <line x1="50" y1="22" x2="85" y2="50" stroke="rgba(0,229,255,0.3)" strokeWidth="1.5" />
      <line x1="50" y1="78" x2="85" y2="50" stroke="rgba(0,229,255,0.3)" strokeWidth="1.5" />

      {/* Animated Tensor Data Flows */}
      <line x1="15" y1="28" x2="50" y2="22" stroke="#ffffff" strokeWidth="2" className="animate-tensor-path" />
      <line x1="15" y1="72" x2="50" y2="78" stroke="#00e5ff" strokeWidth="2" className="animate-tensor-path" />
      <line x1="50" y1="22" x2="85" y2="50" stroke="#00e5ff" strokeWidth="2" className="animate-tensor-path" />
      <line x1="50" y1="78" x2="85" y2="50" stroke="#ffffff" strokeWidth="2" className="animate-tensor-path" />
    </svg>

    {/* 5 Scattered Neural Nodes */}
    <div className="absolute left-[15%] top-[28%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
      <div className="w-3.5 h-3.5 rounded-full bg-cyan-400 shadow-[0_0_15px_#00e5ff] animate-node-pulse"></div>
      <span className="text-[10px] text-cyan-300 font-mono mt-1">Sensor In</span>
    </div>

    <div className="absolute left-[15%] top-[72%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
      <div className="w-3.5 h-3.5 rounded-full bg-cyan-400 shadow-[0_0_15px_#00e5ff] animate-node-pulse"></div>
      <span className="text-[10px] text-cyan-300 font-mono mt-1">Vision In</span>
    </div>

    <div className="absolute left-[50%] top-[22%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
      <div className="w-3.5 h-3.5 rounded-full bg-cyan-400 shadow-[0_0_15px_#00e5ff] animate-node-pulse"></div>
      <span className="text-[10px] text-cyan-300 font-mono mt-1">ONNX WASM</span>
    </div>

    <div className="absolute left-[50%] top-[78%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
      <div className="w-3.5 h-3.5 rounded-full bg-cyan-400 shadow-[0_0_15px_#00e5ff] animate-node-pulse"></div>
      <span className="text-[10px] text-cyan-300 font-mono mt-1">NPU Core</span>
    </div>

    <div className="absolute left-[85%] top-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
      <div className="w-4 h-4 rounded-full bg-cyan-300 shadow-[0_0_20px_#00e5ff] animate-node-pulse"></div>
      <span className="text-[10px] text-cyan-200 font-bold font-mono mt-1">YOLOv8</span>
    </div>

    {/* HUD Status Tag */}
    <div className="absolute bottom-2 left-3 text-[10px] font-mono text-slate-400 flex items-center gap-2">
      <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
      <span>FORWARD-PASS TENSOR PIPELINE &bull; ACTIVE</span>
    </div>
  </div>
);

// 2. AQUA 3D Laser Scanning Visual
const AquaLaserVisual = () => (
  <div className="relative w-full h-44 bg-slate-950/85 rounded-xl border border-cyan-500/30 overflow-hidden my-4 p-3 shadow-inner flex flex-col justify-between">
    {/* 3D Wireframe Grid Background */}
    <div className="absolute inset-0 bg-[radial-gradient(#00559628_1px,transparent_1px)] [background-size:12px_12px] opacity-70"></div>

    {/* Perspective Grid Lines */}
    <div className="absolute inset-0 flex flex-col justify-between opacity-30 pointer-events-none">
      <div className="w-full h-px bg-cyan-400/40"></div>
      <div className="w-full h-px bg-cyan-400/20"></div>
      <div className="w-full h-px bg-cyan-400/40"></div>
      <div className="w-full h-px bg-cyan-400/20"></div>
      <div className="w-full h-px bg-cyan-400/40"></div>
    </div>

    {/* Surface Point Cloud Targets */}
    <div className="absolute inset-0 flex items-center justify-around px-8 opacity-75">
      {[20, 45, 70, 30, 80, 50, 65, 35].map((h, i) => (
        <div key={i} className="flex flex-col items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#00e5ff]"></div>
          <div className="w-0.5 bg-cyan-500/30" style={{ height: `${h}px` }}></div>
          <div className="text-[8px] font-mono text-cyan-300/80">+{h}mm</div>
        </div>
      ))}
    </div>

    {/* Sweeping Laser Beam and Gradient Aura */}
    <div className="laser-scanner-line"></div>
    <div className="laser-scanner-aura"></div>

    {/* Top HUD */}
    <div className="relative z-20 flex justify-between items-center text-[10px] font-mono text-cyan-300 bg-slate-900/80 backdrop-blur-sm px-2.5 py-1 rounded border border-cyan-500/30">
      <div className="flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
        <span>OPTICAL TRIANGULATION ACTIVE</span>
      </div>
      <span>ACCURACY: &plusmn;0.018mm</span>
    </div>

    {/* Bottom HUD */}
    <div className="relative z-20 flex justify-between items-center text-[9px] font-mono text-slate-400">
      <span>SENSOR: RASPBERRY PI CAMERA 3</span>
      <span>EXPORT: .PLY POINT CLOUD</span>
    </div>
  </div>
);

// 3. UmNyango Bouncing Serverless Cloud Nodes
const UmNyangoCloudVisual = () => (
  <div className="relative w-full h-44 bg-slate-950/85 rounded-xl border border-blue-500/30 overflow-hidden my-4 p-4 shadow-inner flex items-center justify-between">
    {/* Background Network Grid */}
    <div className="absolute inset-0 bg-[radial-gradient(#3b82f615_1px,transparent_1px)] [background-size:14px_14px]"></div>

    {/* SVG Connecting Stream Line */}
    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
      <line x1="20" y1="50" x2="50" y2="50" stroke="rgba(59,130,246,0.3)" strokeWidth="2" />
      <line x1="50" y1="50" x2="80" y2="50" stroke="rgba(249,115,22,0.3)" strokeWidth="2" />
      <line x1="20" y1="50" x2="50" y2="50" stroke="#38bdf8" strokeWidth="2" className="animate-cloud-stream" />
      <line x1="50" y1="50" x2="80" y2="50" stroke="#f97316" strokeWidth="2" className="animate-cloud-stream" />
    </svg>

    {/* Node 1: Mobile Client */}
    <div className="relative z-10 flex flex-col items-center gap-1.5 animate-float-node-1">
      <div className="w-12 h-12 rounded-xl bg-blue-950/80 border border-blue-400/50 shadow-[0_0_15px_rgba(59,130,246,0.4)] flex items-center justify-center text-blue-300 text-xl backdrop-blur-md">
        <TbDeviceMobile />
      </div>
      <span className="text-[10px] font-mono text-blue-200 font-semibold">Mobile App</span>
      <span className="text-[8px] font-mono text-blue-400/80 bg-blue-950/60 px-1.5 py-0.5 rounded border border-blue-500/30">React Client</span>
    </div>

    {/* Node 2: WebSocket API Gateway */}
    <div className="relative z-10 flex flex-col items-center gap-1.5 animate-float-node-2">
      <div className="w-12 h-12 rounded-xl bg-purple-950/80 border border-purple-400/50 shadow-[0_0_15px_rgba(168,85,247,0.4)] flex items-center justify-center text-purple-300 text-xl backdrop-blur-md">
        <TbDatabase />
      </div>
      <span className="text-[10px] font-mono text-purple-200 font-semibold">WebSocket API</span>
      <span className="text-[8px] font-mono text-purple-400/80 bg-purple-950/60 px-1.5 py-0.5 rounded border border-purple-500/30">WSS :443 (12ms)</span>
    </div>

    {/* Node 3: AWS Serverless Lambda */}
    <div className="relative z-10 flex flex-col items-center gap-1.5 animate-float-node-3">
      <div className="w-12 h-12 rounded-xl bg-orange-950/80 border border-orange-400/50 shadow-[0_0_15px_rgba(249,115,22,0.4)] flex items-center justify-center text-orange-300 text-xl backdrop-blur-md">
        <TbCloudComputing />
      </div>
      <span className="text-[10px] font-mono text-orange-200 font-semibold">AWS Lambda</span>
      <span className="text-[8px] font-mono text-orange-400/80 bg-orange-950/60 px-1.5 py-0.5 rounded border border-orange-500/30">Voice Transcribe</span>
    </div>
  </div>
);

// 4. Micromouse Animated Maze Traversal
const MicromouseMazeVisual = () => (
  <div className="relative w-full h-48 bg-slate-950/85 rounded-xl border border-cyan-500/30 overflow-hidden my-4 p-3 shadow-inner flex flex-col items-center justify-center">
    {/* Maze Grid (4x4) */}
    <div className="relative grid grid-cols-4 gap-1.5 p-2 bg-slate-900/90 border border-slate-700/80 rounded-xl shadow-2xl">
      {/* Animated Micromouse Bot */}
      <div className="absolute top-2 left-2 w-8 h-8 rounded-lg bg-emerald-500/40 border-2 border-emerald-400 shadow-[0_0_15px_#10b981] flex items-center justify-center text-emerald-200 z-20 animate-micromouse pointer-events-none">
        <TbCpu className="text-sm" />
      </div>

      {/* 16 Maze Cells */}
      {/* Row 0 */}
      <div className="w-8 h-8 rounded bg-cyan-950/60 border border-cyan-400/40 flex items-center justify-center text-[9px] font-mono font-bold text-cyan-300">S</div>
      <div className="w-8 h-8 rounded bg-cyan-950/30 border border-cyan-500/20"></div>
      <div className="w-8 h-8 rounded bg-slate-950 border border-slate-800 flex items-center justify-center text-[9px] text-slate-700">&#x2715;</div>
      <div className="w-8 h-8 rounded bg-slate-950 border border-slate-800 flex items-center justify-center text-[9px] text-slate-700">&#x2715;</div>

      {/* Row 1 */}
      <div className="w-8 h-8 rounded bg-slate-950 border border-slate-800 flex items-center justify-center text-[9px] text-slate-700">&#x2715;</div>
      <div className="w-8 h-8 rounded bg-cyan-950/30 border border-cyan-500/20"></div>
      <div className="w-8 h-8 rounded bg-cyan-950/30 border border-cyan-500/20"></div>
      <div className="w-8 h-8 rounded bg-slate-950 border border-slate-800 flex items-center justify-center text-[9px] text-slate-700">&#x2715;</div>

      {/* Row 2 */}
      <div className="w-8 h-8 rounded bg-slate-950 border border-slate-800 flex items-center justify-center text-[9px] text-slate-700">&#x2715;</div>
      <div className="w-8 h-8 rounded bg-slate-950 border border-slate-800 flex items-center justify-center text-[9px] text-slate-700">&#x2715;</div>
      <div className="w-8 h-8 rounded bg-cyan-950/30 border border-cyan-500/20"></div>
      <div className="w-8 h-8 rounded bg-cyan-950/30 border border-cyan-500/20"></div>

      {/* Row 3 */}
      <div className="w-8 h-8 rounded bg-slate-950 border border-slate-800 flex items-center justify-center text-[9px] text-slate-700">&#x2715;</div>
      <div className="w-8 h-8 rounded bg-slate-950 border border-slate-800 flex items-center justify-center text-[9px] text-slate-700">&#x2715;</div>
      <div className="w-8 h-8 rounded bg-slate-950 border border-slate-800 flex items-center justify-center text-[9px] text-slate-700">&#x2715;</div>
      <div className="w-8 h-8 rounded bg-emerald-950/80 border-2 border-emerald-400 shadow-[0_0_10px_#10b981] flex items-center justify-center text-[9px] font-mono font-bold text-emerald-300">G</div>
    </div>

    <div className="mt-2 text-[10px] font-mono text-cyan-300 flex items-center gap-2">
      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
      <span>FLOODFILL SOLVER &bull; TRAVERSING 24-CELL MAZE</span>
    </div>
  </div>
);

// 5. Antarctic Probe Frost & Telemetry Visual
const AntarcticProbeVisual = () => (
  <div className="relative w-full h-44 backdrop-blur-xl bg-cyan-950/20 border border-cyan-300/30 rounded-xl overflow-hidden my-4 p-4 shadow-[inset_0_0_25px_rgba(0,229,255,0.12)] flex items-center justify-between">
    {/* Frost background shimmer */}
    <div className="absolute inset-0 bg-[radial-gradient(#00e5ff15_1px,transparent_1px)] [background-size:16px_16px] animate-frost-shimmer"></div>

    {/* Thermometer Tube Graphic */}
    <div className="relative z-10 flex items-center gap-3">
      <div className="w-6 h-28 bg-slate-950/90 rounded-full border border-cyan-400/50 p-1 flex flex-col justify-end shadow-[0_0_15px_rgba(0,229,255,0.3)]">
        <div className="w-full rounded-full bg-gradient-to-t from-cyan-400 via-blue-500 to-rose-500 animate-temp-bar"></div>
      </div>
      <div className="flex flex-col justify-between h-28 text-[9px] font-mono text-cyan-300/70 py-1">
        <span>0&deg;C</span>
        <span>-25&deg;C</span>
        <span className="text-cyan-300 font-bold">-50&deg;C</span>
      </div>
    </div>

    {/* Digital Sensor Telemetry Readout */}
    <div className="relative z-10 flex flex-col justify-center gap-2 flex-1 ml-6 font-mono text-xs">
      <div className="flex items-center justify-between bg-slate-900/80 border border-cyan-500/30 px-3 py-1.5 rounded-lg shadow-sm">
        <span className="text-slate-400 text-[10px]">CORE TEMP:</span>
        <span className="text-cyan-300 font-bold text-sm tracking-wider animate-pulse">-38.4&deg;C</span>
      </div>
      <div className="flex items-center justify-between bg-slate-900/80 border border-cyan-500/30 px-3 py-1 rounded-lg">
        <span className="text-slate-400 text-[10px]">SPECTRAL:</span>
        <span className="text-blue-300 font-semibold text-xs">412nm (UV-B)</span>
      </div>
      <div className="flex items-center justify-between bg-slate-900/80 border border-cyan-500/30 px-3 py-1 rounded-lg">
        <span className="text-slate-400 text-[10px]">PRESSURE / MCU:</span>
        <span className="text-emerald-400 text-[10px]">984.6 hPa &bull; ESP32-C6</span>
      </div>
    </div>
  </div>
);

// 6. YODA RISC Processor Flowing Datapath Pipeline Visual
const YodaProcessorVisual = () => (
  <div className="relative w-full h-44 bg-slate-950/85 rounded-xl border border-indigo-500/30 overflow-hidden my-4 p-3.5 shadow-inner flex flex-col justify-between">
    {/* Top Title Bar */}
    <div className="flex items-center justify-between text-[10px] font-mono text-indigo-300 border-b border-indigo-500/20 pb-1.5">
      <span className="font-bold">5-STAGE RISC DATAPATH PIPELINE</span>
      <span className="text-cyan-400">CLK: 50 MHz &bull; IPC = 1.0</span>
    </div>

    {/* 5 Stages Container with Moving Highlight Token */}
    <div className="relative w-full flex items-center justify-between gap-1.5 py-1">
      {/* Glowing Highlight Box moving through the pipeline */}
      <div className="animate-pipeline-token"></div>

      {/* Stage 1: Fetch */}
      <div className="flex-1 bg-slate-900/80 border border-indigo-500/40 rounded-lg p-2 text-center relative z-0">
        <div className="text-[11px] font-bold text-white font-mono">IF</div>
        <div className="text-[8px] text-indigo-300 font-mono">PC + 4</div>
      </div>

      {/* Stage 2: Decode */}
      <div className="flex-1 bg-slate-900/80 border border-indigo-500/40 rounded-lg p-2 text-center relative z-0">
        <div className="text-[11px] font-bold text-white font-mono">ID</div>
        <div className="text-[8px] text-indigo-300 font-mono">Reg[rs]</div>
      </div>

      {/* Stage 3: Execute */}
      <div className="flex-1 bg-slate-900/80 border border-indigo-500/40 rounded-lg p-2 text-center relative z-0">
        <div className="text-[11px] font-bold text-white font-mono">EX</div>
        <div className="text-[8px] text-indigo-300 font-mono">ALU Core</div>
      </div>

      {/* Stage 4: Memory */}
      <div className="flex-1 bg-slate-900/80 border border-indigo-500/40 rounded-lg p-2 text-center relative z-0">
        <div className="text-[11px] font-bold text-white font-mono">MEM</div>
        <div className="text-[8px] text-indigo-300 font-mono">SRAM</div>
      </div>

      {/* Stage 5: Writeback */}
      <div className="flex-1 bg-slate-900/80 border border-indigo-500/40 rounded-lg p-2 text-center relative z-0">
        <div className="text-[11px] font-bold text-white font-mono">WB</div>
        <div className="text-[8px] text-indigo-300 font-mono">Reg[rd]</div>
      </div>
    </div>

    {/* Clock Cycle Waveform Animation */}
    <div className="flex items-center justify-between gap-2 pt-1 border-t border-indigo-500/20">
      <span className="text-[9px] font-mono text-slate-400">CLOCK WAVE:</span>
      <svg className="w-48 h-3 text-cyan-400" viewBox="0 0 200 12" preserveAspectRatio="none">
        <path
          d="M0,10 L15,10 L15,2 L30,2 L30,10 L45,10 L45,2 L60,2 L60,10 L75,10 L75,2 L90,2 L90,10 L105,10 L105,2 L120,2 L120,10 L135,10 L135,2 L150,2 L150,10 L165,10 L165,2 L180,2 L180,10 L200,10"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="animate-clock-wave"
        />
      </svg>
      <span className="text-[9px] font-mono text-emerald-400">SYNCHRONOUS</span>
    </div>
  </div>
);

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
              Architecture Visuals &amp; Evidence (6)
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
        {/* PART 1: 6 STUNNING PROJECT CARDS WITH BESPOKE CSS ART     */}
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

                {/* Bespoke CSS Art: Maxwell & Spark Neural Network */}
                <MaxwellNeuralVisual />

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

                {/* Bespoke CSS Art: AQUA 3D Laser Scanning */}
                <AquaLaserVisual />

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

                {/* Bespoke CSS Art: UmNyango Bouncing Serverless Nodes */}
                <UmNyangoCloudVisual />

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

                {/* Bespoke CSS Art: Micromouse Animated Maze Traversal */}
                <MicromouseMazeVisual />

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

                {/* Bespoke CSS Art: Antarctic Sensor Interface */}
                <AntarcticProbeVisual />

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

                {/* Bespoke CSS Art: YODA RISC Processor Flowing Datapath Pipeline */}
                <YodaProcessorVisual />

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
