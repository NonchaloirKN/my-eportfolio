import { useState } from "react";
import "./styles/TechStackNew.css";
import { 
  MdCode, 
  MdPsychology, 
  MdBuild, 
  MdVerified,
  MdCheck,
  MdOutlineLayers
} from "react-icons/md";
import { TbCpu } from "react-icons/tb";

interface SkillItem {
  name: string;
  icon?: string;
  tag?: string;
}

interface SkillCategory {
  id: string;
  category: string;
  icon: JSX.Element;
  accent: string;
  tagline: string;
  skills: SkillItem[];
}

const skillCategories: SkillCategory[] = [
  {
    id: "software",
    category: "Software & Programming",
    icon: <MdCode className="category-header-icon" />,
    accent: "#00e5ff",
    tagline: "High-level algorithms, low-level firmware description & full-stack web architectures",
    skills: [
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
      { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "ASP.NET Core", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg" },
      { name: "MATLAB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg" },
      { name: "Verilog", tag: "HDL" },
      { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    ],
  },
  {
    id: "hardware",
    category: "Hardware & Embedded Systems",
    icon: <TbCpu className="category-header-icon" />,
    accent: "#38bdf8",
    tagline: "Microcontroller architectures, peripheral buses, bare-metal firmware & circuit fabrication",
    skills: [
      { name: "STM32 Architectures", tag: "ARM Cortex / NPU" },
      { name: "ATMEGA Series", tag: "AVR / ISP" },
      { name: "Arduino", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg" },
      { name: "SPI Protocol", tag: "High-Speed Bus" },
      { name: "UART", tag: "Async Serial" },
      { name: "I2C", tag: "2-Wire Bus" },
      { name: "WebSockets", tag: "SignalR / Real-Time" },
      { name: "Circuit Design", tag: "Schematics" },
      { name: "PCB Assembly", tag: "Soldering / 48V" },
    ],
  },
  {
    id: "ml-vision",
    category: "Machine Learning & Vision",
    icon: <MdPsychology className="category-header-icon" />,
    accent: "#00e5ff",
    tagline: "Edge AI quantisation, neural acceleration, optical metrology & 3D triangulation",
    skills: [
      { name: "OpenCV", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
      { name: "ONNX Runtime", tag: "Web & Edge" },
      { name: "Edge AI Inference", tag: "TinyML / NPU" },
      { name: "YOLO Object Detection", tag: "YOLOv8" },
      { name: "CNNs", tag: "Vision Architectures" },
      { name: "3D-Scanning Pipelines", tag: ".STL / .PLY" },
    ],
  },
  {
    id: "tools-devops",
    category: "Engineering Tools & DevOps",
    icon: <MdBuild className="category-header-icon" />,
    accent: "#38bdf8",
    tagline: "EDA circuit simulation, 3D mechanical CAD, embedded IDEs & modern version control",
    skills: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "STM32CubeIDE", tag: "Embedded IDE" },
      { name: "SolidWorks", tag: "3D CAD" },
      { name: "KiCad", tag: "PCB Layout" },
      { name: "LTSpice", tag: "SPICE Simulation" },
      { name: "Blender", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg" },
    ],
  },
  {
    id: "competencies",
    category: "Core Competencies (From Work Experience)",
    icon: <MdVerified className="category-header-icon" />,
    accent: "#00e5ff",
    tagline: "Validated engineering methodologies applied across industrial systems & university research",
    skills: [
      { name: "Full-Stack Architecture", tag: "React & ASP.NET" },
      { name: "State Machine Design", tag: "Interrupt-Driven" },
      { name: "Battery Management Systems (BMS)", tag: "48V Li-Ion" },
      { name: "Professional Technical Reporting", tag: "IEEE Standard" },
    ],
  },
];

interface TechStackProps {
  activeSkillFilter?: string | null;
  setActiveSkillFilter?: (filter: string | null) => void;
}

const TechStackNew = ({
  activeSkillFilter = null,
  setActiveSkillFilter,
}: TechStackProps) => {
  const [localFilter, setLocalFilter] = useState<string>("all");

  let filteredCategories = skillCategories;
  if (activeSkillFilter === "software") {
    filteredCategories = skillCategories.filter(
      (cat) => cat.id === "software" || cat.id === "ml-vision"
    );
  } else if (activeSkillFilter === "hardware") {
    filteredCategories = skillCategories.filter((cat) => cat.id === "hardware");
  } else if (localFilter !== "all") {
    filteredCategories = skillCategories.filter((cat) => cat.id === localFilter);
  }

  return (
    <section className="techstack-new" id="skills">
      {/* Subtle Video Background with Overlay */}
      <div className="techstack-video-container">
        <video autoPlay loop muted playsInline className="techstack-video">
          <source src={`${import.meta.env.BASE_URL.replace(/\/$/, "")}/video/video.webm`} type="video/webm" />
        </video>
        <div className="techstack-overlay"></div>
      </div>

      {/* Content Container */}
      <div className="techstack-content section-container">
        <div className="techstack-header">
          <span className="techstack-badge">Technical Arsenal</span>
          <h2>
            Skills <span>&amp;</span> Proficiencies
          </h2>
          <p className="techstack-subtitle">
            A structured matrix of my technical capabilities spanning hardware design, low-level firmware, machine learning pipelines, and full-stack software systems.
          </p>

          {/* Dynamic Active Filter Badge & Reset Button */}
          {activeSkillFilter && (
            <div className="flex flex-wrap items-center justify-center gap-3 my-4 animate-fade-in">
              <span className="text-xs text-cyan-300 font-mono bg-cyan-950/70 border border-cyan-500/40 px-3.5 py-1.5 rounded-full shadow-[0_0_15px_rgba(0,229,255,0.15)]">
                Active Filter: <strong className="text-white uppercase tracking-wider">{activeSkillFilter === "software" ? "AI & Software Systems" : "Embedded & Hardware"}</strong>
              </span>
              <button
                onClick={() => {
                  setActiveSkillFilter?.(null);
                  setLocalFilter("all");
                }}
                className="px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-400 bg-slate-900/90 border border-cyan-400/50 rounded-full hover:bg-cyan-500/20 hover:scale-105 transition-all shadow-[0_0_12px_rgba(0,229,255,0.25)] cursor-pointer"
                data-cursor="disable"
              >
                Show All Skills &#x2715;
              </button>
            </div>
          )}

          {/* Interactive Category Filter Pills */}
          <div className="skills-filter-bar">
            <button
              className={`filter-tab ${!activeSkillFilter && localFilter === "all" ? "filter-active" : ""}`}
              onClick={() => {
                setActiveSkillFilter?.(null);
                setLocalFilter("all");
              }}
              data-cursor="disable"
            >
              <MdOutlineLayers className="tab-icon" />
              All Competencies ({skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)})
            </button>

            {skillCategories.map((cat) => {
              const isTabActive =
                activeSkillFilter
                  ? (activeSkillFilter === "software" && (cat.id === "software" || cat.id === "ml-vision")) ||
                    (activeSkillFilter === "hardware" && cat.id === "hardware")
                  : localFilter === cat.id;

              return (
                <button
                  key={cat.id}
                  className={`filter-tab ${isTabActive ? "filter-active" : ""}`}
                  onClick={() => {
                    setActiveSkillFilter?.(null);
                    setLocalFilter(cat.id);
                  }}
                  data-cursor="disable"
                >
                  {cat.category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Categorised Visual Cards Matrix */}
        <div className="skills-matrix-grid">
          {filteredCategories.map((cat, cIdx) => (
            <div
              key={cat.id}
              className={`skill-category-card ${cat.id === "competencies" ? "card-competencies-span" : ""}`}
              style={{ animationDelay: `${cIdx * 0.1}s` }}
            >
              <div className="category-card-header">
                <div className="category-icon-box">
                  {cat.icon}
                </div>
                <div>
                  <span className="category-count-badge">
                    {cat.skills.length} Technologies
                  </span>
                  <h3>{cat.category}</h3>
                </div>
              </div>

              <p className="category-tagline">{cat.tagline}</p>

              <div className="skills-pills-wrap">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-pill-item" data-cursor="disable">
                    {skill.icon ? (
                      <img src={skill.icon} alt={skill.name} className="skill-pill-logo" loading="lazy" />
                    ) : (
                      <span className="skill-pill-bullet">
                        <MdCheck />
                      </span>
                    )}
                    <span className="skill-pill-name">{skill.name}</span>
                    {skill.tag && (
                      <span className="skill-pill-tag">{skill.tag}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackNew;
