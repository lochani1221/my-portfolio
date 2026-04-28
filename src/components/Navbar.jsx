import { useState, useEffect } from "react";

const NAV_LINKS = ["About", "Skills", "Projects", "Experience", "Contact"];

export default function Navbar() {
  const [active, setActive] = useState("About");
  const [scrolled, setScrolled] = useState(false);

  // Track which section is in view
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const scrollY = window.scrollY + 120;
      NAV_LINKS.forEach((name) => {
        const el = document.getElementById(name.toLowerCase());
        if (el && scrollY >= el.offsetTop) {
          setActive(name);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "0 2rem",
        height: 64,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: scrolled
          ? "rgba(10,10,15,0.9)"
          : "rgba(10,10,15,0.6)",
        backdropFilter: "blur(16px)",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.07)"
          : "1px solid transparent",
        transition: "all 0.3s ease",
      }}
    >
      {/* Logo */}
      <span
        onClick={() => scrollTo("about")}
        style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 800,
          fontSize: 20,
          letterSpacing: "-0.5px",
          background: "linear-gradient(90deg,#00D4AA,#7C6AF7)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          cursor: "pointer",
          userSelect: "none",
        }}
      >
        alex.dev
      </span>

      {/* Desktop nav links */}
      <ul
        className="nav-desktop"
        style={{
          display: "flex",
          gap: 4,
          listStyle: "none",
        }}
      >
        {NAV_LINKS.map((name) => (
          <li
            key={name}
            className="nav-link"
            onClick={() => scrollTo(name)}
            style={{
              cursor: "pointer",
              padding: "6px 14px",
              borderRadius: 99,
              fontSize: 14,
              fontWeight: 500,
              transition: "all 0.2s",
              background:
                active === name
                  ? "rgba(124,106,247,0.15)"
                  : "transparent",
              color:
                active === name
                  ? "#7C6AF7"
                  : "rgba(232,232,240,0.6)",
              border:
                active === name
                  ? "1px solid rgba(124,106,247,0.3)"
                  : "1px solid transparent",
            }}
          >
            {name}
          </li>
        ))}
      </ul>

      {/* CTA button */}
      <button
        onClick={() => scrollTo("contact")}
        style={{
          padding: "9px 20px",
          borderRadius: 99,
          fontWeight: 600,
          fontSize: 14,
          cursor: "pointer",
          border: "none",
          background: "linear-gradient(135deg,#00D4AA,#7C6AF7)",
          color: "#fff",
          fontFamily: "'DM Sans', sans-serif",
          transition: "opacity 0.2s",
        }}
        onMouseEnter={(e) => (e.target.style.opacity = 0.85)}
        onMouseLeave={(e) => (e.target.style.opacity = 1)}
      >
        Hire Me
      </button>
    </nav>
  );
}