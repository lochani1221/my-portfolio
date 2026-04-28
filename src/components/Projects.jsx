import FadeIn from "./FadeIn";
import { PROJECTS } from "../data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: "80px 2rem 60px",
      }}
    >
      {/* Section header */}
      <FadeIn>
        <span
          style={{
            display: "inline-block",
            fontSize: 12,
            fontWeight: 600,
            color: "#F97316",
            background: "rgba(249,115,22,0.1)",
            border: "1px solid rgba(249,115,22,0.25)",
            padding: "4px 12px",
            borderRadius: 99,
            letterSpacing: 1,
            textTransform: "uppercase",
            marginBottom: 16,
          }}
        >
          Portfolio
        </span>
        <h2
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            fontWeight: 800,
            letterSpacing: "-1px",
            marginBottom: 40,
          }}
        >
          Featured Projects
        </h2>
      </FadeIn>

      {/* Projects grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 20,
        }}
      >
        {PROJECTS.map((project, i) => (
          <FadeIn key={project.title} delay={i * 100}>
            <div
              className="proj-card"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 16,
                padding: "24px 28px",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                gap: 16,
                transition: "border-color 0.2s, transform 0.2s",
                cursor: "default",
              }}
            >
              {/* Top row: tag + links */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    fontSize: 11,
                    fontWeight: 600,
                    color: project.color,
                    background: project.color + "18",
                    border: `1px solid ${project.color}35`,
                    padding: "3px 10px",
                    borderRadius: 99,
                    letterSpacing: 1,
                    textTransform: "uppercase",
                  }}
                >
                  {project.tag}
                </span>

                <div style={{ display: "flex", gap: 12 }}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    title="GitHub"
                    style={{
                      color: "rgba(232,232,240,0.4)",
                      fontSize: 14,
                      textDecoration: "none",
                      fontFamily: "'DM Mono', monospace",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      (e.target.style.color = "rgba(232,232,240,0.9)")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.color = "rgba(232,232,240,0.4)")
                    }
                  >
                    GitHub ↗
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    title="Live demo"
                    style={{
                      color: "rgba(232,232,240,0.4)",
                      fontSize: 14,
                      textDecoration: "none",
                      fontFamily: "'DM Mono', monospace",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      (e.target.style.color = project.color)
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.color = "rgba(232,232,240,0.4)")
                    }
                  >
                    Live ↗
                  </a>
                </div>
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: 22,
                  fontWeight: 800,
                  letterSpacing: "-0.5px",
                }}
              >
                {project.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.7,
                  color: "rgba(232,232,240,0.55)",
                  flex: 1,
                }}
              >
                {project.desc}
              </p>

              {/* Tech stack pills */}
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {project.tech.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontSize: 11,
                      padding: "3px 10px",
                      borderRadius: 99,
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "rgba(232,232,240,0.5)",
                      fontFamily: "'DM Mono', monospace",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}