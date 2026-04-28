export default function Footer() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "32px 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 16,
        maxWidth: 1100,
        margin: "0 auto",
      }}
    >
      <span
        onClick={() => scrollTo("about")}
        style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 800,
          fontSize: 18,
          background: "linear-gradient(90deg,#00D4AA,#7C6AF7)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          cursor: "pointer",
        }}
      >
        alex.dev
      </span>

      <p
        style={{
          fontSize: 13,
          color: "rgba(232,232,240,0.3)",
        }}
      >
        Designed & built by Alex Chen — {new Date().getFullYear()}
      </p>

      <div style={{ display: "flex", gap: 20 }}>
        {["About", "Projects", "Contact"].map((link) => (
          <span
            key={link}
            onClick={() => scrollTo(link.toLowerCase())}
            style={{
              fontSize: 13,
              color: "rgba(232,232,240,0.4)",
              cursor: "pointer",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.target.style.color = "rgba(232,232,240,0.9)")
            }
            onMouseLeave={(e) =>
              (e.target.style.color = "rgba(232,232,240,0.4)")
            }
          >
            {link}
          </span>
        ))}
      </div>
    </footer>
  );
}