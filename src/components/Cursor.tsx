import { useEffect, useRef } from "react";
import "./styles/Cursor.css";
import gsap from "gsap";

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Center transform anchor point
    gsap.set(cursor, { xPercent: -50, yPercent: -50 });

    // High-performance quickTo setters for 60FPS mouse tracking
    const xTo = gsap.quickTo(cursor, "x", { duration: 0.12, ease: "power3.out" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.12, ease: "power3.out" });

    let isHovering = false;

    const onMouseMove = (e: MouseEvent) => {
      if (!isHovering) {
        xTo(e.clientX);
        yTo(e.clientY);
      }
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });

    // Event delegation for interactive hover elements
    const onMouseOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest("[data-cursor]") as HTMLElement | null;
      if (!target) return;

      const cursorType = target.dataset.cursor;
      if (cursorType === "icons") {
        const rect = target.getBoundingClientRect();
        cursor.classList.add("cursor-icons");
        gsap.to(cursor, { 
          x: rect.left + rect.width / 2, 
          y: rect.top + rect.height / 2, 
          duration: 0.15,
          ease: "power2.out" 
        });
        cursor.style.setProperty("--cursorH", `${rect.height}px`);
        isHovering = true;
      } else if (cursorType === "disable") {
        cursor.classList.add("cursor-disable");
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest("[data-cursor]") as HTMLElement | null;
      if (target) {
        cursor.classList.remove("cursor-disable", "cursor-icons");
        isHovering = false;
      }
    };

    const onScroll = () => {
      if (isHovering) {
        cursor.classList.remove("cursor-disable", "cursor-icons");
        isHovering = false;
      }
    };

    document.addEventListener("mouseover", onMouseOver, { passive: true });
    document.addEventListener("mouseout", onMouseOut, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return <div className="cursor-main" ref={cursorRef} aria-hidden="true"></div>;
};

export default Cursor;
