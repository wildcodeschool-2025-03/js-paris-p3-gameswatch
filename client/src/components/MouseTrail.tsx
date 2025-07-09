import { useEffect, useRef } from "react";
import "./MouseTrail.css";

const MouseTrail = () => {
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = trailRef.current;
    if (!container) return;

    let lastTime = 0;
    const fps = 60;
    const interval = 1000 / fps;

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastTime < interval / 2) return;
      lastTime = now;

      const dot = document.createElement("div");
      dot.className = "neon-dot";
      dot.style.left = `${e.clientX}px`;
      dot.style.top = `${e.clientY}px`;
      container.appendChild(dot);

      setTimeout(() => {
        dot.remove();
      }, 800);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <div ref={trailRef} className="trail-container" />;
};

export default MouseTrail;
