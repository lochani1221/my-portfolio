import FadeIn from "./FadeIn";
import { EXPERIENCE } from "../data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
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
            color: "#EC4899",
            background: "rgba(236,72,153,0.1)",
            border: "1px solid rgba(236,72,153,0.25)",
            padding: "4px 12px",
            borderRadius: 99,
            letterSpacing: 1,
            textTransform: "uppercase",
            marginBottom: 16,
          }}
        >
          Career
        </span>
        <h2
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            fontWeight: 800,
            letterSpacing: "-1px",
            marginBottom: 48,
          }}
        >
          Experience
        </h2>
      </FadeIn>

      {/* Timeline */}
      <div style={{ position: "relative" }}>
        {/* Vertical gradient line */}
        <div
          style={{
            position: "absolute",
            left: 20,
            top: 0,
            bottom: 0,
            width: 1,
            background:
              "linear-gradient(to bottom, #00D4AA, #7C6AF7, transparent)",
          }}
        />

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {EXPERIENCE.map((item, i) => (
            <FadeIn key={item.company} delay={i * 120}>
              <div style={{ position: "relative", marginLeft: 52 }}>
                {/* Timeline dot */}
                <div
                  style={{
                    position: "absolute",
                    left: -40,
                    top: 24,
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    background: item.color,
                    border: "2px solid #0A0A0F",
                    boxShadow: `0 0 0 4px ${item.color}25`,
                  }}
                />

                {/* Card */}
                <div
                  className="exp-card"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: 16,
                    padding: "22px 26px",
                    transition: "border-color 0.2s",
                  }}
                >
                  {/* Role + period */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      flexWrap: "wrap",
                      gap: 12,
                      marginBottom: 10,
                    }}
                  >
                    <div>
                      <h3
                        style={{
                          fontFamily: "'Syne', sans-serif",
                          fontSize: 18,
                          fontWeight: 700,
                          marginBottom: 5,
                        }}
                      >
                        {item.role}
                      </h3>
                      <span
                        style={{
                          fontSize: 14,
                          color: item.color,
                          fontWeight: 600,
                        }}
                      >
                        {item.company}
                      </span>
                    </div>

                    <span
                      style={{
                        fontSize: 12,
                        padding: "4px 12px",
                        borderRadius: 99,
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        color: "rgba(232,232,240,0.45)",
                        fontFamily: "'DM Mono', monospace",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {item.period}
                    </span>
                  </div>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: 14,
                      lineHeight: 1.7,
                      color: "rgba(232,232,240,0.55)",
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}