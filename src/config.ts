export interface NavLink {
  id: string;
  title: string;
  href: string;
}

export interface Experience {
  id: number;
  position: string;
  company: string;
  period: string;
  location: string;
  nodeType: "hardware" | "visionAI" | "academic";
  description: string;
  points: string[];
  technologies: string[];
}

export const navLinks: NavLink[] = [
  { id: "about", title: "About", href: "#about" },
  { id: "experience", title: "Experience", href: "#experience" },
  { id: "skills", title: "Skills", href: "#skills" },
  { id: "artefacts", title: "Artefacts", href: "#artefacts" },
  { id: "contact", title: "Contact", href: "#contact" },
];

export const config = {
  developer: {
    name: "Kiyuran",
    fullName: "Kiyuran Naidoo",
    title: "Electrical & Computer Engineer",
    subtitle: "Embedded Systems | Edge AI | Machine Learning",
    university: "University of Cape Town (UCT)",
    degree: "BSc(Eng) Electrical & Computer Engineering",
    cvUrl: `${import.meta.env.BASE_URL.replace(/\/$/, "")}/Kiyuran Naidoo - CV 2026 - ePortfolio.pdf`,
    description:
      "Final-Year BSc(Eng) Electrical and Computer Engineering student at the University of Cape Town. Specialising in the intersection of hardware and software: Embedded Systems, Edge AI, and Machine Learning."
  },
  social: {
    github: "https://github.com/NonchaloirKN",
    linkedin: "https://www.linkedin.com/in/kiyuran-naidoo-b12301354",
    email: "kiyuran.naidoo@gmail.com",
    academicEmail: "NDXKIY004@myuct.ac.za",
    location: "Cape Town / Durban, South Africa"
  },
  navLinks,
  about: {
    title: "About Me",
    heading: "Bridging Silicon and Software",
    description:
      "I am a final-year BSc(Eng) Electrical and Computer Engineering student at the University of Cape Town, driven by a passion for developing innovative, end-to-end solutions to complex, real-world technical challenges. My fascination with the intersection of hardware and software, particularly within embedded systems, artificial intelligence, machine learning, and the 4th Industrial Revolution, fuels my ambition to advance society through technology. Recent professional experiences spanning full-stack AI platform development, microcontroller architectures, and computer vision have equipped me with the practical skills and adaptability necessary to thrive in fast-paced professional engineering environments. I am eager to bring this blend of technical proficiency, academic rigour, and a collaborative mindset to dynamic roles focused on cutting-edge innovation."
  },
  experiences: [
    {
      id: 1,
      position: "Electrical/Software Engineering Intern",
      company: "Maxwell+Spark (Pty) Ltd",
      period: "Dec 2025 - Feb 2026",
      location: "Durban, South Africa",
      nodeType: "hardware" as const,
      description:
        "Architected full-stack dataset capture & YOLO training platform with SignalR WebSockets and browser onnxruntime-web inference. Researched STM32N6 Neural-ART NPU architecture, OS shell in C/C++, and built 48V PCB / ISP flasher systems.",
      points: [
        "Architected a full-stack web application (React, ASP.NET Core, Python) for custom dataset capture and YOLO object detection training.",
        "Implemented SignalR for real-time WebSocket streaming and onnxruntime-web for live browser inference.",
        "Researched the STM32N6 microcontroller featuring a Neural-ART Accelerator NPU, building a basic OS shell and interrupt-driven CLI in C/C++.",
        "Assembled 48V PCBs and constructed a custom In-System Programming (ISP) setup to burn bootloaders."
      ],
      technologies: ["STM32N6", "C/C++", "Neural-ART NPU", "ONNX Runtime", "React", "ASP.NET Core", "SignalR", "KiCad", "48V BMS"]
    },
    {
      id: 2,
      position: "Software/Vision Engineering Vacation Work",
      company: "AQUA Manufacturing",
      period: "Jun 2025 - Aug 2025",
      location: "Cape Town, South Africa",
      nodeType: "visionAI" as const,
      description:
        "Contributed to a Master's-level research initiative for an Adaptive Quality Upscaling system. Developed Python OpenCV pipeline on Raspberry Pi Camera 3 for 3D laser triangulation point cloud generation.",
      points: [
        "Contributed to a Master's-level research initiative for an \"Adaptive Quality Upscaling with Advanced Manufacturing\" system.",
        "Developed Python scripts utilising OpenCV to capture images from a Raspberry Pi Camera 3, isolating laser lines for a 3D-Scanning System.",
        "Implemented mathematical frameworks for 3D triangulation to convert 2D laser coordinates into spatial points, exporting data to .STL and PLY point cloud formats."
      ],
      technologies: ["Python", "OpenCV", "Raspberry Pi Camera 3", "3D Triangulation", "Point Clouds (.STL/.PLY)", "Advanced Manufacturing"]
    },
    {
      id: 3,
      position: "BSc(Eng) Electrical and Computer Engineering",
      company: "University of Cape Town",
      period: "2023 - 2026",
      location: "Cape Town, South Africa",
      nodeType: "academic" as const,
      description:
        "Final-year degree programme in Electrical and Computer Engineering. Recipient of multiple Dean's Merit honours, Schneider Electric Bursary, and Electrical Engineering team member on UCT Formula Student Africa.",
      points: [
        "Consistently achieved Dean’s Merit List (2023, 2024, 2025).",
        "Member of the UCT Formula Student Africa (FSA) Racing Team (Electrical Engineering).",
        "Awarded the Schneider Electric Bursary (2025 & 2026)."
      ],
      technologies: ["Dean's Merit List", "Schneider Electric Bursary", "UCT FSA Racing", "Embedded Systems", "Edge AI", "Optical Metrology"]
    }
  ],
  projects: [
    {
      id: 1,
      title: "Maxwell & Spark Full-Stack AI Platform",
      category: "Edge AI & Industrial Firmware",
      technologies: "STM32N6, Neural-ART NPU, C/C++, React, ASP.NET Core, ONNX Runtime Web, SignalR",
      image: "/images/Drishti.png",
      description:
        "Architected a full-stack platform featuring live YOLO ONNX inference in WebAssembly, SignalR WebSockets telemetry streaming, and an interrupt-driven STM32N6 NPU OS shell.",
      link: "https://github.com/NonchaloirKN/Maxwell_and_Spark_Jan26"
    },
    {
      id: 2,
      title: "AQUA Manufacturing Vision System",
      category: "Computer Vision & Optical Metrology",
      technologies: "Python, OpenCV, Raspberry Pi Camera 3, 3D Triangulation, .PLY / .STL Point Clouds",
      image: "/images/VoteChain.png",
      description:
        "Engineered an automated optical laser triangulation pipeline extracting sub-pixel laser profiles from Raspberry Pi Camera 3 feeds into dense 3D point clouds.",
      link: "https://github.com/uruncleinthefurniturebusiness/AQUA_Manufacturing"
    },
    {
      id: 3,
      title: "UmNyango Health Services (AWS Cloud)",
      category: "Cloud AI & Full-Stack Platform",
      technologies: "React, WebSocket API Gateway, AWS Lambda, Amazon Transcribe, Node.js",
      image: "/images/Phoenix3.0.png",
      description:
        "Standard Bank UniHack AI healthcare platform facilitating real-time multilingual voice triage, WebSocket API Gateway routing, and serverless AWS Lambda transcription pipelines.",
      link: "https://github.com/maarijbhai/Standard-Bank-UniHack-2026"
    },
    {
      id: 4,
      title: "Micromouse Maze Navigator",
      category: "Robotics & Algorithm Design",
      technologies: "C++, Floodfill Algorithm, IR Proximity Sensors, Encoders, PID Control",
      image: "/images/FloodSpaces.png",
      description:
        "Programmed complex path-planning and cell-mapping logic for an autonomous 24-cell micromouse maze navigation system.",
      link: "https://github.com/joshua-naidoo/Micromouse-Project"
    },
    {
      id: 5,
      title: "Antarctic Spectrophotometer Probe",
      category: "Telemetry & Extreme Environment IoT",
      technologies: "C++, ESP32-C6, Spectral Sensors, Circuit Design, Low-Power Firmware",
      image: "/images/Drishti.png",
      description:
        "Contributed to the circuit design, bill of materials, and firmware for a spectrophotometer probe utilising ESP32-C6 microcontrollers and spectral sensors.",
      link: "https://github.com/StormRaider01/Antarctic_Probe"
    },
    {
      id: 6,
      title: "YODA RISC Processor",
      category: "Computer Architecture & Hardware Design",
      technologies: "Verilog / HDL, RISC Architecture, Timing Analysis, FPGA Execution",
      image: "/images/VoteChain.png",
      description:
        "Designed and implemented a baseline RISC processor architecture using hardware description languages and timing analysis.",
      link: "https://github.com/joshua-naidoo/YODA_GROUP_18"
    }
  ],
  artefacts: [
    {
      id: 1,
      title: "Maxwell & Spark Full-Stack AI Platform",
      category: "Edge AI & Industrial Firmware",
      description: "STM32N6 Neural-ART OS shell, SignalR full-duplex WebSocket stream, and in-browser ONNX quantised inference engine.",
      tag: "Industrial Firmware",
      link: "https://github.com/NonchaloirKN/Maxwell_and_Spark_Jan26"
    },
    {
      id: 2,
      title: "AQUA Manufacturing Vision System",
      category: "Computer Vision & Metrology",
      description: "Python and OpenCV algorithms performing sub-pixel laser extraction, camera matrix transforms, and .PLY/.STL point cloud export.",
      tag: "Vision Research",
      link: "https://github.com/uruncleinthefurniturebusiness/AQUA_Manufacturing"
    },
    {
      id: 3,
      title: "UmNyango Health Services (AWS Cloud)",
      category: "Cloud AI & Voice Triage",
      description: "Serverless AWS Lambda pipeline integrating Amazon Transcribe, WebSocket API Gateway, and React frontend triage interface.",
      tag: "Cloud AI Platform",
      link: "https://github.com/maarijbhai/Standard-Bank-UniHack-2026"
    },
    {
      id: 4,
      title: "Micromouse Maze Navigator",
      category: "Robotics & Algorithm Design",
      description: "Programmed complex path-planning and cell-mapping logic for an autonomous 24-cell micromouse maze navigation system.",
      tag: "Robotics Control",
      link: "https://github.com/joshua-naidoo/Micromouse-Project"
    },
    {
      id: 5,
      title: "Antarctic Spectrophotometer Probe",
      category: "Telemetry & Extreme IoT",
      description: "Contributed to the circuit design, bill of materials, and firmware for a spectrophotometer probe utilising ESP32-C6 microcontrollers and spectral sensors.",
      tag: "Telemetry Systems",
      link: "https://github.com/StormRaider01/Antarctic_Probe"
    },
    {
      id: 6,
      title: "YODA RISC Processor",
      category: "Computer Architecture",
      description: "Designed and implemented a baseline RISC processor architecture using hardware description languages and timing analysis.",
      tag: "Hardware Architecture",
      link: "https://github.com/joshua-naidoo/YODA_GROUP_18"
    }
  ],
  contact: {
    email: "kiyuran.naidoo@gmail.com",
    academicEmail: "NDXKIY004@myuct.ac.za",
    github: "https://github.com/NonchaloirKN",
    linkedin: "https://www.linkedin.com/in/kiyuran-naidoo-b12301354",
    location: "Cape Town / Durban, South Africa",
    cvUrl: `${import.meta.env.BASE_URL.replace(/\/$/, "")}/Kiyuran Naidoo - CV 2026 - ePortfolio.pdf`
  },
  skills: {
    embedded: {
      title: "EMBEDDED & HARDWARE",
      description: "Bare-metal firmware, microcontrollers, and hardware design",
      details:
        "Designing low-level firmware and hardware architectures. Specialising in ARM Cortex-M, STM32 (including STM32N6 NPU), ATmega, FreeRTOS, KiCad PCB layout, LTspice circuit simulation, and standard serial protocols (SPI, I2C, UART, CAN).",
      tools: [
        "C",
        "C++",
        "STM32 / ARM",
        "FreeRTOS",
        "Verilog",
        "KiCad",
        "LTspice",
        "CAN Bus",
        "SPI / I2C / UART",
        "Logic Analyzers",
        "PCB Assembly"
      ]
    },
    softwareAI: {
      title: "AI & SOFTWARE SYSTEMS",
      description: "Edge AI, Computer Vision, and Full-Stack Engineering",
      details:
        "Deploying intelligence onto resource-constrained edge devices and building high-performance software systems. Proficient in Python, OpenCV, PyTorch, ONNX Runtime Web, React, TypeScript, ASP.NET Core, and Linux/Docker environments.",
      tools: [
        "Python",
        "PyTorch",
        "OpenCV",
        "ONNX Runtime",
        "Edge AI / TinyML",
        "React",
        "TypeScript",
        "ASP.NET Core",
        "SignalR",
        "Linux",
        "Docker",
        "Git"
      ]
    }
  }
};
