import { useState, useCallback, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Chess, Square, PieceSymbol, Color } from "chess.js";
import RedoxChessEngine from "../utils/redoxchessEngine";
import { 
  MdArrowBack, 
  MdSportsEsports, 
  MdSend, 
  MdRefresh, 
  MdSwapVert,
  MdAutoAwesome,
  MdMemory
} from "react-icons/md";
import { FaChessKnight, FaMicrochip } from "react-icons/fa6";
import { TbBinaryTree } from "react-icons/tb";
import { lenis } from "./Navbar";
import "./styles/PlayWithMe.css";

// SVG Chess Piece Icons with Electric Cyan & Slate Styling
const PIECES: Record<string, string> = {
  wK: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill="none" fill-rule="evenodd" stroke="#00e5ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path stroke-linejoin="miter" d="M22.5 11.63V6M20 8h5"/><path fill="#ffffff" stroke-linecap="butt" stroke-linejoin="miter" d="M22.5 25s4.5-7.5 3-10.5c0 0-1-2.5-3-2.5s-3 2.5-3 2.5c-1.5 3 3 10.5 3 10.5"/><path fill="#ffffff" d="M12.5 37c5.5 3.5 14.5 3.5 20 0v-7s9-4.5 6-10.5c-4-6.5-13.5-3.5-16 4V27v-3.5c-2.5-7.5-12-10.5-16-4-3 6 6 10.5 6 10.5v7"/><path d="M12.5 30c5.5-3 14.5-3 20 0m-20 3.5c5.5-3 14.5-3 20 0m-20 3.5c5.5-3 14.5-3 20 0"/></g></svg>`,
  wQ: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill="#ffffff" fill-rule="evenodd" stroke="#00e5ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M8 12a2 2 0 1 1-4 0 2 2 0 1 1 4 0zm16.5-4.5a2 2 0 1 1-4 0 2 2 0 1 1 4 0zM41 12a2 2 0 1 1-4 0 2 2 0 1 1 4 0zM16 9a2 2 0 1 1-4 0 2 2 0 1 1 4 0zM33 9a2 2 0 1 1-4 0 2 2 0 1 1 4 0z"/><path stroke-linecap="butt" d="M9 26c8.5-1.5 21-1.5 27 0l2-12-7 11V11l-5.5 13.5-3-15-3 15L14 11v14L7 14l2 12z"/><path stroke-linecap="butt" d="M9 26c0 2 1.5 2 2.5 4 1 1.5 1 1 .5 3.5-1.5 1-1.5 2.5-1.5 2.5-1.5 1.5.5 2.5.5 2.5 6.5 1 16.5 1 23 0 0 0 1.5-1 0-2.5 0 0 .5-1.5-1-2.5-.5-2.5-.5-2 .5-3.5 1-2 2.5-2 2.5-4-8.5-1.5-18.5-1.5-27 0z"/><path fill="none" d="M11.5 30c3.5-1 18.5-1 22 0M12 33.5c6-1 15-1 21 0"/></g></svg>`,
  wR: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill="#ffffff" fill-rule="evenodd" stroke="#00e5ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path stroke-linecap="butt" d="M9 39h27v-3H9v3zm3-3v-4h21v4H12zm-1-22V9h4v2h5V9h5v2h5V9h4v5"/><path d="M34 14l-3 3H14l-3-3"/><path stroke-linecap="butt" stroke-linejoin="miter" d="M31 17v12.5H14V17"/><path d="M31 29.5l1.5 2.5h-20l1.5-2.5"/><path fill="none" stroke-linejoin="miter" d="M11 14h23"/></g></svg>`,
  wB: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill="none" fill-rule="evenodd" stroke="#00e5ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><g fill="#ffffff" stroke-linecap="butt"><path d="M9 36c3.39-.97 10.11.43 13.5-2 3.39 2.43 10.11 1.03 13.5 2 0 0 1.65.54 3 2-.68.97-1.65.99-3 .5-3.39-.97-10.11.46-13.5-1-3.39 1.46-10.11.03-13.5 1-1.35.49-2.32.47-3-.5 1.35-1.46 3-2 3-2z"/><path d="M15 32c2.5 2.5 12.5 2.5 15 0 .5-1.5 0-2 0-2 0-2.5-2.5-4-2.5-4 5.5-1.5 6-11.5-5-15.5-11 4-10.5 14-5 15.5 0 0-2.5 1.5-2.5 4 0 0-.5.5 0 2z"/><path d="M25 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 1 1 5 0z"/></g><path stroke-linejoin="miter" d="M17.5 26h10M15 30h15m-7.5-14.5v5M20 18h5"/></g></svg>`,
  wN: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill="none" fill-rule="evenodd" stroke="#00e5ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path fill="#ffffff" d="M22 10c10.5 1 16.5 8 16 29H15c0-9 10-6.5 8-21"/><path fill="#ffffff" d="M24 18c.38 2.91-5.55 7.37-8 9-3 2-2.82 4.34-5 4-1.042-.94 1.41-3.04 0-3-1 0 .19 1.23-1 2-1 0-4.003 1-4-4 0-2 6-12 6-12s1.89-1.9 2-3.5c-.73-.994-.5-2-.5-3 1-1 3 2.5 3 2.5h2s.78-1.992 2.5-3c1 0 1 3 1 3"/><path fill="#040914" d="M9.5 25.5a.5.5 0 1 1-1 0 .5.5 0 1 1 1 0zm5.433-9.75a.5 1.5 30 1 1-.866-.5.5 1.5 30 1 1 .866.5z"/></g></svg>`,
  wP: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><path fill="#ffffff" stroke="#00e5ff" stroke-width="1.5" stroke-linecap="round" d="M22.5 9c-2.21 0-4 1.79-4 4 0 .89.29 1.71.78 2.38C17.33 16.5 16 18.59 16 21c0 2.03.94 3.84 2.41 5.03-3 1.06-7.41 5.55-7.41 13.47h23c0-7.92-4.41-12.41-7.41-13.47 1.47-1.19 2.41-3 2.41-5.03 0-2.41-1.33-4.5-3.28-5.62.49-.67.78-1.49.78-2.38 0-2.21-1.79-4-4-4z"/></svg>`,

  bK: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill="none" fill-rule="evenodd" stroke="#a855f7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path stroke-linejoin="miter" d="M22.5 11.63V6" stroke="#c084fc"/><path fill="#0f172a" stroke="#c084fc" d="M20 8h5"/><path fill="#0f172a" stroke="#c084fc" stroke-linecap="butt" stroke-linejoin="miter" d="M22.5 25s4.5-7.5 3-10.5c0 0-1-2.5-3-2.5s-3 2.5-3 2.5c-1.5 3 3 10.5 3 10.5"/><path fill="#0f172a" stroke="#c084fc" d="M12.5 37c5.5 3.5 14.5 3.5 20 0v-7s9-4.5 6-10.5c-4-6.5-13.5-3.5-16 4V27v-3.5c-2.5-7.5-12-10.5-16-4-3 6 6 10.5 6 10.5v7"/><path stroke="#c084fc" d="M12.5 30c5.5-3 14.5-3 20 0m-20 3.5c5.5-3 14.5-3 20 0m-20 3.5c5.5-3 14.5-3 20 0"/></g></svg>`,
  bQ: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill-rule="evenodd" stroke="#a855f7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><g fill="#0f172a"><circle cx="6" cy="12" r="2.75"/><circle cx="14" cy="9" r="2.75"/><circle cx="22.5" cy="8" r="2.75"/><circle cx="31" cy="9" r="2.75"/><circle cx="39" cy="12" r="2.75"/></g><path fill="#0f172a" stroke-linecap="butt" d="M9 26c8.5-1.5 21-1.5 27 0l2.5-12.5L31 25l-.3-14.1-5.2 13.6-3-14.5-3 14.5-5.2-13.6L14 25 6.5 13.5 9 26z"/><path fill="#0f172a" stroke-linecap="butt" d="M9 26c0 2 1.5 2 2.5 4 1 1.5 1 1 .5 3.5-1.5 1-1.5 2.5-1.5 2.5-1.5 1.5.5 2.5.5 2.5 6.5 1 16.5 1 23 0 0 0 1.5-1 0-2.5 0 0 .5-1.5-1-2.5-.5-2.5-.5-2 .5-3.5 1-2 2.5-2 2.5-4-8.5-1.5-18.5-1.5-27 0z"/><path fill="none" stroke-linecap="butt" d="M11 38.5a35 35 1 0 0 23 0"/><path fill="none" d="M11 29a35 35 1 0 1 23 0m-21.5 2.5h20m-21 3a35 35 1 0 0 22 0"/></g></svg>`,
  bR: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill-rule="evenodd" stroke="#a855f7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path fill="#0f172a" stroke-linecap="butt" d="M9 39h27v-3H9v3zm3.5-7l1.5-2.5h17l1.5 2.5h-20zm-.5 4v-4h21v4H12z"/><path fill="#0f172a" stroke-linecap="butt" stroke-linejoin="miter" d="M14 29.5v-13h17v13H14z"/><path fill="#0f172a" stroke-linecap="butt" d="M14 16.5L11 14h23l-3 2.5H14zM11 14V9h4v2h5V9h5v2h5V9h4v5H11z"/><path fill="none" stroke-linejoin="miter" d="M12 35.5h21m-20-4h19m-18-2h17m-17-13h17M11 14h23"/></g></svg>`,
  bB: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill="none" fill-rule="evenodd" stroke="#a855f7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><g fill="#0f172a" stroke-linecap="butt"><path d="M9 36c3.39-.97 10.11.43 13.5-2 3.39 2.43 10.11 1.03 13.5 2 0 0 1.65.54 3 2-.68.97-1.65.99-3 .5-3.39-.97-10.11.46-13.5-1-3.39 1.46-10.11.03-13.5 1-1.35.49-2.32.47-3-.5 1.35-1.46 3-2 3-2z"/><path d="M15 32c2.5 2.5 12.5 2.5 15 0 .5-1.5 0-2 0-2 0-2.5-2.5-4-2.5-4 5.5-1.5 6-11.5-5-15.5-11 4-10.5 14-5 15.5 0 0-2.5 1.5-2.5 4 0 0-.5.5 0 2z"/><path d="M25 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 1 1 5 0z"/></g><path stroke-linejoin="miter" d="M17.5 26h10M15 30h15m-7.5-14.5v5M20 18h5"/></g></svg>`,
  bN: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill="none" fill-rule="evenodd" stroke="#a855f7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path fill="#0f172a" d="M22 10c10.5 1 16.5 8 16 29H15c0-9 10-6.5 8-21"/><path fill="#0f172a" d="M24 18c.38 2.91-5.55 7.37-8 9-3 2-2.82 4.34-5 4-1.042-.94 1.41-3.04 0-3-1 0 .19 1.23-1 2-1 0-4.003 1-4-4 0-2 6-12 6-12s1.89-1.9 2-3.5c-.73-.994-.5-2-.5-3 1-1 3 2.5 3 2.5h2s.78-1.992 2.5-3c1 0 1 3 1 3"/><path fill="#c084fc" d="M9.5 25.5a.5.5 0 1 1-1 0 .5.5 0 1 1 1 0zm5.433-9.75a.5 1.5 30 1 1-.866-.5.5 1.5 30 1 1 .866.5z"/></g></svg>`,
  bP: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><path fill="#0f172a" stroke="#a855f7" stroke-width="1.5" stroke-linecap="round" d="M22.5 9c-2.21 0-4 1.79-4 4 0 .89.29 1.71.78 2.38C17.33 16.5 16 18.59 16 21c0 2.03.94 3.84 2.41 5.03-3 1.06-7.41 5.55-7.41 13.47h23c0-7.92-4.41-12.41-7.41-13.47 1.47-1.19 2.41-3 2.41-5.03 0-2.41-1.33-4.5-3.28-5.62.49-.67.78-1.49.78-2.38 0-2.21-1.79-4-4-4z"/></svg>`,
};

interface MoveHistory {
  from: string;
  to: string;
  piece: string;
  captured?: string;
  san: string;
}

interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

// Local conversational intelligence fallback for Kiyuran Naidoo
const getLocalKiyuranResponse = (userInput: string): string => {
  const q = userInput.toLowerCase();

  if (q.includes("hi") || q.includes("hello") || q.includes("hey")) {
    return "Hey there! 👋 I'm Kiyuran. Great to connect with you in my playground. Feel free to challenge me to a game of chess or ask about my engineering work at UCT!";
  }
  if (q.includes("maxwell") || q.includes("spark") || q.includes("internship")) {
    return "At Maxwell+Spark (Dec 2025 – Feb 2026, Durban), I architected a full-stack edge AI platform with React, ASP.NET Core, and onnxruntime-web for live YOLO inference. I also worked on STM32N6 Neural-ART NPU firmware in C/C++ and assembled 48V battery management PCBs!";
  }
  if (q.includes("aqua") || q.includes("vision") || q.includes("laser") || q.includes("triangulation")) {
    return "In my AQUA Manufacturing research at UCT, I engineered an automated 3D optical laser triangulation pipeline using Python and OpenCV on a Raspberry Pi Camera 3, converting 2D profiles into spatial .STL and .PLY point clouds for adaptive manufacturing!";
  }
  if (q.includes("micromouse") || q.includes("maze") || q.includes("robot")) {
    return "The Micromouse project was an autonomous 24-cell (6x4 grid) maze solver written in C++. It uses a real-time Floodfill heuristic algorithm with IR proximity sensing and PID motor encoder control!";
  }
  if (q.includes("umnyango") || q.includes("health") || q.includes("unihack") || q.includes("aws")) {
    return "UmNyango Health Services was built for the Standard Bank UniHack 2026. It's a serverless AWS platform with real-time WebSocket API routing and Amazon Transcribe for multilingual voice triage!";
  }
  if (q.includes("antarctic") || q.includes("probe") || q.includes("iot")) {
    return "The Antarctic Probe is an extreme-environment spectrophotometer probe using ESP32-C6 microcontrollers and spectral sensors, designed for low-power sub-zero (-50°C) data collection.";
  }
  if (q.includes("yoda") || q.includes("risc") || q.includes("processor") || q.includes("cpu")) {
    return "The YODA RISC Processor is a 5-stage pipelined CPU architecture designed in Verilog HDL with instruction fetch, decode, ALU execution, memory access, and writeback hazard control.";
  }
  if (q.includes("uct") || q.includes("degree") || q.includes("university") || q.includes("grade") || q.includes("dean")) {
    return "I am in my final year studying BSc(Eng) in Electrical and Computer Engineering at the University of Cape Town (2023–2026). I've achieved the Dean's Merit List (2023, 2024, 2025) and am a Schneider Electric Scholar!";
  }
  if (q.includes("formula") || q.includes("racing") || q.includes("fsa")) {
    return "I'm part of the Electrical Engineering team on UCT Formula Student Africa (FSA) Racing, working on vehicle telemetry sensors, CAN bus communications, and electrical harnesses.";
  }
  if (q.includes("email") || q.includes("contact") || q.includes("hire") || q.includes("cv") || q.includes("resume")) {
    return "You can reach me directly at kiyuran.naidoo@gmail.com or NDXKIY004@myuct.ac.za. You can also download my verified 2026 CV from the contact section of the portfolio!";
  }
  if (q.includes("chess") || q.includes("move") || q.includes("game") || q.includes("play")) {
    return "Let's play! ♟️ You're playing White, and my WebAssembly bot is powered by the custom RedoxChess evaluation engine. Make your opening move on the board!";
  }

  return "That's an interesting question! As an Electrical & Computer Engineer specializing in Embedded Systems, TinyML, and Hardware-Software Co-Design, I'm always looking to bridge silicon with software. Feel free to ask more about my projects, research, or internships!";
};

const PlayWithMe = () => {
  const [activeTab, setActiveTab] = useState<"chess" | "sandboxes">("chess");
  const [game, setGame] = useState(new Chess());
  const [selectedSquare, setSelectedSquare] = useState<Square | null>(null);
  const [possibleMoves, setPossibleMoves] = useState<Square[]>([]);
  const [moveHistory, setMoveHistory] = useState<MoveHistory[]>([]);
  const [capturedWhite, setCapturedWhite] = useState<string[]>([]);
  const [capturedBlack, setCapturedBlack] = useState<string[]>([]);
  const [boardFlipped, setBoardFlipped] = useState(false);
  const [lastMove, setLastMove] = useState<{ from: Square; to: Square } | null>(null);
  const [gameStatus, setGameStatus] = useState<string>("White's turn");
  const [engineThinking, setEngineThinking] = useState(false);
  const redoxchessRef = useRef<RedoxChessEngine | null>(null);

  // Chat State
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content: "Hello! I am Kiyuran Naidoo 👋 Welcome to my interactive playground! Challenge my AI chess engine on the board, or ask me anything about my engineering projects, UCT coursework, or research!"
    }
  ]);
  const [chatInput, setChatInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatBottomRef = useRef<HTMLDivElement | null>(null);

  const files = boardFlipped ? ["h", "g", "f", "e", "d", "c", "b", "a"] : ["a", "b", "c", "d", "e", "f", "g", "h"];
  const ranks = boardFlipped ? ["1", "2", "3", "4", "5", "6", "7", "8"] : ["8", "7", "6", "5", "4", "3", "2", "1"];

  const scrollToTopLanding = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }
  };

  const updateGameStatus = useCallback((g: Chess) => {
    if (g.isCheckmate()) {
      setGameStatus(g.turn() === "w" ? "Checkmate! Black wins!" : "Checkmate! White wins!");
    } else if (g.isDraw()) {
      if (g.isStalemate()) setGameStatus("Draw by stalemate");
      else if (g.isThreefoldRepetition()) setGameStatus("Draw by threefold repetition");
      else if (g.isInsufficientMaterial()) setGameStatus("Draw by insufficient material");
      else setGameStatus("Draw");
    } else if (g.isCheck()) {
      setGameStatus(g.turn() === "w" ? "White is in check!" : "Black is in check!");
    } else {
      setGameStatus(g.turn() === "w" ? "White's turn" : "Black's turn");
    }
  }, []);

  useEffect(() => {
    updateGameStatus(game);
  }, [game, updateGameStatus]);

  useEffect(() => {
    const initEngine = async () => {
      try {
        redoxchessRef.current = new RedoxChessEngine();
        await redoxchessRef.current.init();
      } catch (e) {
        console.warn("WASM Chess Engine initialization fallback:", e);
      }
    };
    initEngine();
    return () => {
      redoxchessRef.current?.quit();
    };
  }, []);

  const makeMove = useCallback((from: Square, to: Square) => {
    try {
      const gameCopy = new Chess(game.fen());
      const move = gameCopy.move({ from, to, promotion: "q" });

      if (move) {
        if (move.captured) {
          if (move.color === "w") {
            setCapturedBlack((prev) => [...prev, move.captured!]);
          } else {
            setCapturedWhite((prev) => [...prev, move.captured!]);
          }
        }

        setMoveHistory((prev) => [
          ...prev,
          {
            from: move.from,
            to: move.to,
            piece: move.piece,
            captured: move.captured,
            san: move.san
          }
        ]);

        setLastMove({ from, to });
        setGame(gameCopy);
        setSelectedSquare(null);
        setPossibleMoves([]);
      }
    } catch {
      setSelectedSquare(null);
      setPossibleMoves([]);
    }
  }, [game]);

  useEffect(() => {
    if (game.turn() === "b" && !game.isGameOver() && redoxchessRef.current) {
      setEngineThinking(true);
      redoxchessRef.current.setPosition(game.fen());
      redoxchessRef.current.getBestMove((move) => {
        if (move && move.length >= 4) {
          const from = move.substring(0, 2) as Square;
          const to = move.substring(2, 4) as Square;
          makeMove(from, to);
        }
        setEngineThinking(false);
      }, 12);
    }
  }, [game, makeMove]);

  const getPieceAt = (square: Square): { type: PieceSymbol; color: Color } | null => {
    return game.get(square) || null;
  };

  const handleSquareClick = (square: Square) => {
    if (engineThinking || game.turn() !== "w") return;
    const piece = getPieceAt(square);

    if (selectedSquare) {
      if (possibleMoves.includes(square)) {
        makeMove(selectedSquare, square);
      } else if (piece && piece.color === game.turn()) {
        setSelectedSquare(square);
        const moves = game.moves({ square, verbose: true });
        setPossibleMoves(moves.map((m) => m.to as Square));
      } else {
        setSelectedSquare(null);
        setPossibleMoves([]);
      }
    } else {
      if (piece && piece.color === game.turn()) {
        setSelectedSquare(square);
        const moves = game.moves({ square, verbose: true });
        setPossibleMoves(moves.map((m) => m.to as Square));
      }
    }
  };

  const resetGame = () => {
    setGame(new Chess());
    setSelectedSquare(null);
    setPossibleMoves([]);
    setMoveHistory([]);
    setCapturedWhite([]);
    setCapturedBlack([]);
    setLastMove(null);
    setGameStatus("White's turn");
    setBoardFlipped(false);
  };

  const flipBoard = () => {
    if (moveHistory.length > 0) {
      if (window.confirm("Start a fresh game on flipped board?")) {
        resetGame();
        setBoardFlipped(!boardFlipped);
      }
      return;
    }
    setBoardFlipped(!boardFlipped);
  };

  const sendMessage = async () => {
    const text = chatInput.trim();
    if (!text) return;

    const userMsg: ChatMessage = { role: "user", content: text };
    setChatMessages((prev) => [...prev, userMsg]);
    setChatInput("");
    setIsTyping(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [
            ...chatMessages.filter((m) => m.role !== "system"),
            userMsg
          ]
        })
      });

      if (response.ok) {
        const data = await response.json();
        if (data?.choices?.[0]?.message?.content) {
          setChatMessages((prev) => [
            ...prev,
            { role: "assistant", content: data.choices[0].message.content }
          ]);
          setIsTyping(false);
          return;
        }
      }
      throw new Error("Fallback required");
    } catch {
      // Offline / Static fallback intelligence
      setTimeout(() => {
        const reply = getLocalKiyuranResponse(text);
        setChatMessages((prev) => [
          ...prev,
          { role: "assistant", content: reply }
        ]);
        setIsTyping(false);
      }, 500);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages, isTyping]);

  const renderPiece = (piece: { type: PieceSymbol; color: Color } | null) => {
    if (!piece) return null;
    const key = `${piece.color}${piece.type.toUpperCase()}`;
    const svg = PIECES[key];
    if (!svg) return null;
    return <div className="chess-piece-glyph" dangerouslySetInnerHTML={{ __html: svg }} />;
  };

  const isSquareLight = (file: string, rank: string): boolean => {
    const fileIndex = "abcdefgh".indexOf(file);
    const rankIndex = parseInt(rank) - 1;
    return (fileIndex + rankIndex) % 2 === 1;
  };

  const renderCapturedPieces = (pieces: string[], color: Color) => {
    return pieces.map((piece, index) => {
      const key = `${color}${piece.toUpperCase()}`;
      const svg = PIECES[key];
      return (
        <div
          key={index}
          className="strip-captured-piece"
          dangerouslySetInnerHTML={{ __html: svg || "" }}
        />
      );
    });
  };

  const formatMoveHistory = () => {
    const formatted: { moveNum: number; white: string; black: string }[] = [];
    for (let i = 0; i < moveHistory.length; i += 2) {
      formatted.push({
        moveNum: Math.floor(i / 2) + 1,
        white: moveHistory[i]?.san || "",
        black: moveHistory[i + 1]?.san || ""
      });
    }
    return formatted;
  };

  return (
    <div className="play-page-wrapper">
      {/* Cyberpunk ambient backdrops */}
      <div className="play-ambient-glow-1"></div>
      <div className="play-ambient-glow-2"></div>

      {/* Pinned Top-Left Back Button for seamless SPA navigation to top of Home */}
      <Link
        to="/"
        className="play-back-btn"
        data-cursor="disable"
        onClick={scrollToTopLanding}
        title="Return to Portfolio Homepage Landing"
      >
        <MdArrowBack className="play-back-icon" />
        <span>Back to Home</span>
      </Link>

      <div className="play-main-container">
        {/* Header */}
        <header className="play-header">
          <div className="play-badge-pill">
            <MdSportsEsports />
            <span>Interactive Engineering Lab</span>
          </div>
          <h1 className="play-title">Playground &amp; AI Arena</h1>
          <p className="play-subtitle">
            Challenge my WebAssembly chess bot, chat with my autonomous technical companion, 
            or explore experimental engineering sandboxes.
          </p>
        </header>

        {/* Tab Switcher */}
        <div className="play-tab-switcher">
          <button
            className={`play-tab-btn ${activeTab === "chess" ? "active" : ""}`}
            onClick={() => setActiveTab("chess")}
            data-cursor="disable"
          >
            <FaChessKnight />
            <span>AI Chess Arena &amp; Chat</span>
          </button>
          <button
            className={`play-tab-btn ${activeTab === "sandboxes" ? "active" : ""}`}
            onClick={() => setActiveTab("sandboxes")}
            data-cursor="disable"
          >
            <MdMemory />
            <span>Simulation Sandboxes (2)</span>
          </button>
        </div>

        {/* =========================================================================
            TAB 1: AI CHESS ARENA + TALK WITH ME CHAT
            ========================================================================= */}
        {activeTab === "chess" && (
          <div className="arena-grid-layout">
            {/* Left Panel: 💬 Talk With Me */}
            <div className="talk-panel-container">
              <div className="talk-header">
                <div className="talk-header-title">
                  <span className="talk-online-dot"></span>
                  <span>💬 Talk With Me</span>
                </div>
                <span className="talk-badge">Live Companion</span>
              </div>

              <div className="talk-messages-list">
                {chatMessages.map((msg, idx) => (
                  <div key={idx} className={`talk-bubble ${msg.role}`}>
                    {msg.content}
                  </div>
                ))}
                {isTyping && (
                  <div className="talk-bubble assistant talk-typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                )}
                <div ref={chatBottomRef} />
              </div>

              <div className="talk-input-container">
                <input
                  type="text"
                  className="talk-text-input"
                  placeholder="Ask about UCT, projects, research..."
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyDown={handleKeyPress}
                  data-cursor="disable"
                />
                <button
                  className="talk-send-btn"
                  onClick={sendMessage}
                  data-cursor="disable"
                  title="Send Message"
                >
                  <MdSend />
                </button>
              </div>
            </div>

            {/* Middle Panel: Chess Board */}
            <div className="chess-board-center-section">
              {/* Opponent: Kiyuran Naidoo */}
              <div className="chess-player-strip">
                <div className="strip-player-meta">
                  <div className="strip-avatar-box">
                    <img
                      src={`${import.meta.env.BASE_URL.replace(/\/$/, "")}/images/mypic.jpeg`}
                      alt="Kiyuran Naidoo"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = "none";
                      }}
                    />
                  </div>
                  <div className="strip-name-rating">
                    <h4>Kiyuran Naidoo</h4>
                    <span>{engineThinking ? "⚡ Computing Best Move..." : "WASM Engine • ELO 3640"}</span>
                  </div>
                </div>
                <div className="strip-captured-box">
                  {renderCapturedPieces(capturedWhite, "w")}
                </div>
              </div>

              {/* Chess Board Grid */}
              <div className="chess-board-grid-wrapper">
                <div className="chess-grid-8x8">
                  {ranks.map((rank) =>
                    files.map((file) => {
                      const square = `${file}${rank}` as Square;
                      const piece = getPieceAt(square);
                      const isLight = isSquareLight(file, rank);
                      const isSelected = selectedSquare === square;
                      const isPossibleMove = possibleMoves.includes(square);
                      const isLastMoveSquare =
                        lastMove && (lastMove.from === square || lastMove.to === square);
                      const isCheck =
                        game.isCheck() && piece?.type === "k" && piece?.color === game.turn();

                      return (
                        <div
                          key={square}
                          className={`chess-tile ${isLight ? "tile-light" : "tile-dark"} 
                            ${isSelected ? "tile-selected" : ""} 
                            ${isLastMoveSquare ? "tile-last-move" : ""} 
                            ${isCheck ? "tile-in-check" : ""}`}
                          onClick={() => handleSquareClick(square)}
                          data-cursor="disable"
                        >
                          {file === (boardFlipped ? "h" : "a") && (
                            <span className="chess-coord-rank">{rank}</span>
                          )}
                          {rank === (boardFlipped ? "8" : "1") && (
                            <span className="chess-coord-file">{file}</span>
                          )}

                          {renderPiece(piece)}

                          {isPossibleMove && (
                            <div
                              className={`chess-move-target-dot ${
                                piece ? "capture" : ""
                              }`}
                            />
                          )}
                        </div>
                      );
                    })
                  )}
                </div>
              </div>

              {/* Player: You (White) */}
              <div className="chess-player-strip">
                <div className="strip-player-meta">
                  <div className="strip-avatar-box">
                    <span>👤</span>
                  </div>
                  <div className="strip-name-rating">
                    <h4>You</h4>
                    <span>{boardFlipped ? "Black" : "White"}</span>
                  </div>
                </div>
                <div className="strip-captured-box">
                  {renderCapturedPieces(capturedBlack, "b")}
                </div>
              </div>
            </div>

            {/* Right Panel: Game Diagnostics & Controls */}
            <div className="chess-controls-panel">
              <div className={`chess-status-banner ${game.isCheck() ? "check" : ""}`}>
                {gameStatus}
              </div>

              <div className="chess-moves-history-box">
                <div className="chess-moves-heading">Move Record</div>
                {formatMoveHistory().map((m, i) => (
                  <div key={i} className="chess-move-row-item">
                    <span className="chess-move-num">{m.moveNum}.</span>
                    <span className="chess-move-white">{m.white}</span>
                    <span className="chess-move-black">{m.black}</span>
                  </div>
                ))}
              </div>

              <div className="chess-btn-actions">
                <button
                  onClick={resetGame}
                  className="chess-action-button chess-btn-new"
                  data-cursor="disable"
                >
                  <MdRefresh />
                  <span>New Game</span>
                </button>
                <button
                  onClick={flipBoard}
                  className="chess-action-button chess-btn-flip"
                  data-cursor="disable"
                >
                  <MdSwapVert />
                  <span>Flip Board</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            TAB 2: SIMULATION SANDBOXES
            ========================================================================= */}
        {activeTab === "sandboxes" && (
          <div className="sandboxes-grid">
            {/* Card 1: Micromouse Maze Sandbox */}
            <div className="sandbox-card">
              <div>
                <div className="play-card-top">
                  <div className="play-card-icon-box">
                    <TbBinaryTree />
                  </div>
                  <span className="play-status-tag status-active">
                    Algorithm • In Development
                  </span>
                </div>

                <div className="play-card-visual">
                  <div className="flex items-center justify-center gap-2 p-3 bg-slate-900/90 border border-slate-800 rounded-lg">
                    <div className="grid grid-cols-6 gap-1">
                      {[...Array(24)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-3.5 h-3.5 rounded-sm ${
                            i === 0
                              ? "bg-cyan-400"
                              : i === 23
                              ? "bg-emerald-400"
                              : i % 4 === 1
                              ? "bg-slate-800"
                              : "bg-cyan-950/40 border border-cyan-500/20"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="play-card-content">
                  <h3>Micromouse 24-Cell Maze Sandbox</h3>
                  <p>
                    Interactive visualizer demonstrating autonomous robot pathfinding, 
                    Manhattan distance floodfill mapping, and real-time obstacle avoidance.
                  </p>

                  <ul className="play-features-list">
                    <li>
                      <span className="feature-dot"></span>
                      <span>Real-time heuristic cell traversal</span>
                    </li>
                    <li>
                      <span className="feature-dot"></span>
                      <span>Custom wall &amp; target placement</span>
                    </li>
                    <li>
                      <span className="feature-dot"></span>
                      <span>Execution cycles &amp; memory telemetry</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="play-card-footer">
                <button className="play-btn-action" disabled data-cursor="disable">
                  <MdAutoAwesome className="text-base" />
                  <span>Module Compiling</span>
                </button>
              </div>
            </div>

            {/* Card 2: RISC Processor Datapath Emulator */}
            <div className="sandbox-card">
              <div>
                <div className="play-card-top">
                  <div className="play-card-icon-box">
                    <FaMicrochip />
                  </div>
                  <span className="play-status-tag status-planned">
                    Architecture • Planned
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
        )}
      </div>
    </div>
  );
};

export default PlayWithMe;
