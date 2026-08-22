import { Link } from "react-router-dom";
import { 
  MdArrowBack, 
  MdSportsEsports, 
  MdMemory, 
  MdAutoAwesome, 
  MdConstruction 
} from "react-icons/md";
import { FaChessKnight, FaMicrochip } from "react-icons/fa6";
import { TbBinaryTree } from "react-icons/tb";
import "./styles/PlayWithMe.css";

const PlayWithMe = () => {
  return (
    <div className="play-page-wrapper">
      {/* Ambient background glow accents */}
      <div className="play-ambient-glow-1"></div>
      <div className="play-ambient-glow-2"></div>

      {/* Pinned Top-Left Back Button for seamless SPA navigation */}
      <Link 
        to="/" 
        className="play-back-btn" 
        data-cursor="disable"
        title="Return to Portfolio Homepage"
      >
        <MdArrowBack className="play-back-icon" />
        <span>Back to Home</span>
      </Link>

      {/* Main Central Container */}
      <div className="play-main-container">
        {/* Header Area */}
        <header className="play-header">
          <div className="play-badge-pill">
            <MdSportsEsports />
            <span>Experimental Simulation Lab</span>
          </div>
          <h1 className="play-title">Interactive Engineering Playground</h1>
          <p className="play-subtitle">
            A sandbox for algorithmic demonstrations, real-time WebAssembly game engines, 
            and autonomous simulation arenas engineered by Kiyuran Naidoo.
          </p>
        </header>

        {/* Playground Grid of Interactive Modules */}
        <div className="play-grid">
          {/* Card 1: AI Chess Arena (In Development) */}
          <div className="play-card">
            <div>
              <div className="play-card-top">
                <div className="play-card-icon-box">
                  <FaChessKnight />
                </div>
                <span className="play-status-tag status-active">
                  In Development &bull; WASM
                </span>
              </div>

              {/* Bespoke Chess Board Preview Visual */}
              <div className="play-card-visual">
                <div className="play-chess-preview">
                  {[...Array(36)].map((_, i) => {
                    const row = Math.floor(i / 6);
                    const col = i % 6;
                    const isLight = (row + col) % 2 === 0;
                    return (
                      <div 
                        key={i} 
                        className={`chess-cell ${isLight ? "cell-light" : "cell-dark"}`} 
                      />
                    );
                  })}
                  <FaChessKnight className="chess-knight-icon" />
                </div>
              </div>

              <div className="play-card-content">
                <h3>AI Chess Arena</h3>
                <p>
                  High-performance chess simulation engine powered by custom WebAssembly evaluation algorithms, 
                  bitboard move generation, and alpha-beta minimax search AI.
                </p>

                <ul className="play-features-list">
                  <li>
                    <span className="feature-dot"></span>
                    <span>Low-latency WebAssembly evaluation engine</span>
                  </li>
                  <li>
                    <span className="feature-dot"></span>
                    <span>Minimax AI with piece-square table heuristics</span>
                  </li>
                  <li>
                    <span className="feature-dot"></span>
                    <span>Real-time technical chat companion</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="play-card-footer">
              <button className="play-btn-action" disabled data-cursor="disable">
                <MdConstruction className="text-base" />
                <span>Engine Compiling (Coming Soon)</span>
              </button>
            </div>
          </div>

          {/* Card 2: Autonomous Robotics Maze Sandbox (Planned) */}
          <div className="play-card">
            <div>
              <div className="play-card-top">
                <div className="play-card-icon-box">
                  <TbBinaryTree />
                </div>
                <span className="play-status-tag status-planned">
                  Planned &bull; Algorithm
                </span>
              </div>

              <div className="play-card-visual">
                <div className="flex items-center justify-center gap-2 p-3 bg-slate-900/90 border border-slate-800 rounded-lg">
                  <div className="grid grid-cols-4 gap-1">
                    {[...Array(16)].map((_, i) => (
                      <div 
                        key={i} 
                        className={`w-4 h-4 rounded-sm ${
                          i === 0 ? "bg-cyan-400" : i === 15 ? "bg-emerald-400" : "bg-slate-800"
                        }`} 
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="play-card-content">
                <h3>Micromouse Maze Solver</h3>
                <p>
                  Interactive pathfinding sandbox visualizing real-time Manhattan distance floodfill 
                  and autonomous obstacle avoidance in arbitrary mazes.
                </p>

                <ul className="play-features-list">
                  <li>
                    <span className="feature-dot"></span>
                    <span>Step-by-step heuristic floodfill execution</span>
                  </li>
                  <li>
                    <span className="feature-dot"></span>
                    <span>Interactive wall placing and maze editor</span>
                  </li>
                  <li>
                    <span className="feature-dot"></span>
                    <span>Telemetry metrics: execution cycles &amp; memory</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="play-card-footer">
              <button className="play-btn-action" disabled data-cursor="disable">
                <MdAutoAwesome className="text-base" />
                <span>Planned Module</span>
              </button>
            </div>
          </div>

          {/* Card 3: RISC Processor Datapath Emulator (Planned) */}
          <div className="play-card">
            <div>
              <div className="play-card-top">
                <div className="play-card-icon-box">
                  <FaMicrochip />
                </div>
                <span className="play-status-tag status-planned">
                  Planned &bull; Hardware
                </span>
              </div>

              <div className="play-card-visual">
                <div className="flex items-center gap-1 font-mono text-[10px] text-cyan-300">
                  <span className="px-2 py-1 bg-slate-900 border border-cyan-500/40 rounded">IF</span>
                  <span>&rarr;</span>
                  <span className="px-2 py-1 bg-slate-900 border border-cyan-500/40 rounded">ID</span>
                  <span>&rarr;</span>
                  <span className="px-2 py-1 bg-slate-900 border border-cyan-500/40 rounded">EX</span>
                  <span>&rarr;</span>
                  <span className="px-2 py-1 bg-slate-900 border border-cyan-500/40 rounded">WB</span>
                </div>
              </div>

              <div className="play-card-content">
                <h3>RISC Datapath Emulator</h3>
                <p>
                  5-stage pipelined processor simulator with register file inspection, 
                  hazard detection, and instruction memory disassembly.
                </p>

                <ul className="play-features-list">
                  <li>
                    <span className="feature-dot"></span>
                    <span>Clock cycle stepping &amp; pipeline visualizer</span>
                  </li>
                  <li>
                    <span className="feature-dot"></span>
                    <span>Assembly code editor &amp; assembler</span>
                  </li>
                  <li>
                    <span className="feature-dot"></span>
                    <span>ALU control &amp; forwarding unit diagnostics</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="play-card-footer">
              <button className="play-btn-action" disabled data-cursor="disable">
                <MdMemory className="text-base" />
                <span>Planned Module</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayWithMe;
