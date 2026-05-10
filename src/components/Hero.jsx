import { useState } from "react";
import FadeIn from "./FadeIn";
import myPhoto from "../assets/photo.jpg";

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("lochaniketipearachchi@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="about"
      style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: "140px 2rem 80px",
        position: "relative",
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          top: 80,
          left: "50%",
          transform: "translateX(-50%)",
          width: 700,
          height: 400,
          background:
            "radial-gradient(ellipse at center, rgba(124,106,247,0.1) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Main grid: text + photo */}
      <div
        className="hero-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: 48,
          alignItems: "center",
          position: "relative",
        }}
      >
        {/* Left: text content */}
        <div>
          <FadeIn>
            <span
              style={{
                display: "inline-block",
                fontSize: 12,
                fontWeight: 600,
                color: "#00D4AA",
                background: "rgba(0,212,170,0.1)",
                border: "1px solid rgba(0,212,170,0.25)",
                padding: "4px 12px",
                borderRadius: 99,
                letterSpacing: 1,
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              Available for work
            </span>
          </FadeIn>

          <FadeIn delay={100}>
            <h1
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "clamp(2.2rem, 5vw, 3.6rem)",
                fontWeight: 800,
                lineHeight: 1.08,
                letterSpacing: "-1.5px",
                marginBottom: 24,
              }}
            >
              Hi, I'm{" "}
              <span
                style={{
                  background: "linear-gradient(90deg,#00D4AA,#7C6AF7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Miyuranga
              </span>
              .<br />
              Web Developer , Fullstack Developer.
            </h1>
          </FadeIn>

          <FadeIn delay={200}>
            <p
              style={{
                fontSize: 18,
                lineHeight: 1.7,
                color: "rgba(232,232,240,0.6)",
                maxWidth: 540,
                marginBottom: 36,
              }}
            >
             I craft modern, responsive web applications — from clean, intuitive
              frontends to robust, scalable backend systems. Final year undergraduate
              open to freelance, internship, and full-time opportunities.
            </p>
          </FadeIn>

          {/* CTA buttons */}
          <FadeIn
            delay={300}
            style={{ display: "flex", gap: 12, flexWrap: "wrap" }}
          >
            <button
              onClick={() => scrollTo("projects")}
              style={{
                padding: "11px 22px",
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
              View Projects ↓
            </button>

             <a href="/CV_Miyuranga.pdf"
  download="Miyuranga_CV.pdf"
  style={{
    padding: "11px 22px",
    borderRadius: 99,
    fontWeight: 600,
    fontSize: 14,
    cursor: "pointer",
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(255,255,255,0.05)",
    color: "rgba(232,232,240,0.8)",
    fontFamily: "'DM Sans', sans-serif",
    transition: "all 0.2s",
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
  }}
  onMouseEnter={(e) =>
    (e.currentTarget.style.background = "rgba(255,255,255,0.09)")
  }
  onMouseLeave={(e) =>
    (e.currentTarget.style.background = "rgba(255,255,255,0.05)")
  }
>
  📄 Download CV
</a>


            <button
              onClick={copyEmail}
              style={{
                padding: "11px 22px",
                borderRadius: 99,
                fontWeight: 600,
                fontSize: 14,
                cursor: "pointer",
                border: "1px solid rgba(255,255,255,0.12)",
                background: "rgba(255,255,255,0.05)",
                color: "rgba(232,232,240,0.8)",
                fontFamily: "'DM Mono', monospace",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "rgba(255,255,255,0.09)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "rgba(255,255,255,0.05)")
              }
            >
              {copied ? "✓ Copied!" : "📋 lochaniketipearachchi@gmail.com"}
            </button>
          </FadeIn>
        </div>

        {/* Right: photo */}
        <FadeIn delay={200} style={{ position: "relative" }} className="hero-avatar">
          <div
            className="hero-avatar"
            style={{
              position: "relative",
              width: 240,
              height: 240,
            }}
          >
            {/* Gradient ring */}
            <div
              style={{
                position: "absolute",
                inset: -3,
                borderRadius: "50% 40% 60% 50% / 50% 60% 40% 50%",
                background: "linear-gradient(135deg,#00D4AA,#7C6AF7)",
                zIndex: 0,
              }}
            />
            {/* Your photo */}
            <img
              src={myPhoto}
              alt="Miyuranga"
              style={{
                position: "relative",
                zIndex: 1,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "50% 40% 60% 50% / 50% 60% 40% 50%",
                border: "3px solid #0A0A0F",
              }}
            />
            {/* Online dot */}
            <div
              style={{
                position: "absolute",
                bottom: 14,
                right: 14,
                width: 18,
                height: 18,
                borderRadius: "50%",
                background: "#00D4AA",
                border: "3px solid #0A0A0F",
                zIndex: 2,
              }}
            />
          </div>
        </FadeIn>
      </div>

      {/* Tech stack pills */}
      <FadeIn
        delay={500}
        style={{
          display: "flex",
          gap: 10,
          flexWrap: "wrap",
          marginTop: 56,
          paddingTop: 40,
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        {[
          "Laravel",
          "Springboot",
          "React",
          "Supabase",
          "Mysql",
          "MongoDB",
          "Python",
        ].map((tech) => (
          <span
            key={tech}
            style={{
              fontSize: 13,
              padding: "5px 14px",
              borderRadius: 99,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              color: "rgba(232,232,240,0.6)",
              fontFamily: "'DM Mono', monospace",
            }}
          >
            {tech}
          </span>
        ))}
      </FadeIn>
    </section>
  );
}