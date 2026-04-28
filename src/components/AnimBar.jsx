import { useState, useEffect } from "react";
import { useInView } from "../hooks/useInView";

/**
 * Animated horizontal progress bar.
 * Triggers when scrolled into view, animates from 0 to `level`%.
 * Props:
 *   level  — 0-100 number
 *   color  — CSS color string for the filled portion
 *   delay  — ms delay before animation starts
 */
export default function AnimBar({ level, color, delay = 0 }) {
  const [width, setWidth] = useState(0);
  const [ref, inView] = useInView(0.1);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => setWidth(level), delay);
      return () => clearTimeout(timer);
    }
  }, [inView, level, delay]);

  return (
    <div
      ref={ref}
      style={{
        background: "rgba(255,255,255,0.06)",
        borderRadius: 99,
        height: 6,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: `${width}%`,
          height: "100%",
          background: color,
          borderRadius: 99,
          transition: "width 0.9s cubic-bezier(.4,0,.2,1)",
        }}
      />
    </div>
  );
}