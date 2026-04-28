import { useRef, useState, useEffect } from "react";

/**
 * Returns [ref, inView].
 * Attach ref to any DOM element — inView becomes true once it
 * enters the viewport and stays true (one-shot animation trigger).
 */
export function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}