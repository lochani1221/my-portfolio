import { useInView } from "../hooks/useInView";

/**
 * Wraps children in a div that fades + slides up when scrolled into view.
 * Props:
 *   delay   — ms delay before animation starts (stagger children)
 *   style   — extra inline styles on the wrapper
 */
export default function FadeIn({ children, delay = 0, style = {} }) {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}