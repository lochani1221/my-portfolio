import { useState } from "react";
import FadeIn from "./FadeIn";
import AnimBar from "./AnimBar";
import { SKILLS } from "../data/skills";

export default function Skills() {
  const [activeTab, setActiveTab] = useState("Frontend");
  const tabs = Object.keys(SKILLS);

  return (
    <section
      id="skills"
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
            color: "#7C6AF7",
            background: "rgba(124,106,247,0.1)",
            border: "1px solid rgba(124,106,247,0.25)",
            padding: "4px 12px",
            borderRadius: 99,
            letterSpacing: 1,
            textTransform: "uppercase",
            marginBottom: 16,
          }}
        >
          Expertise
        </span>
        <h2
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            fontWeight: 800,
            letterSpacing: "-1px",
            marginBottom: 32,
          }}
        >
          Skills & Technologies
        </h2>
      </FadeIn>

      {/* Tab buttons */}
      <FadeIn delay={100} style={{ display: "flex", gap: 8, marginBottom: 32 }}>
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: "8px 20px",
              borderRadius: 99,
              fontSize: 13,
              fontWeight: 600,
              cursor: "pointer",
              border: "none",
              transition: "all 0.2s",
              fontFamily: "'DM Sans', sans-serif",
              background:
                activeTab === tab
                  ? "linear-gradient(135deg,#00D4AA,#7C6AF7)"
                  : "rgba(255,255,255,0.06)",
              color:
                activeTab === tab ? "#fff" : "rgba(232,232,240,0.6)",
            }}
          >
            {tab}
          </button>
        ))}
      </FadeIn>

      {/* Skill cards grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 16,
        }}
      >
        {SKILLS[activeTab].map((skill, i) => (
          <FadeIn key={skill.name} delay={i * 80}>
            <div
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 16,
                padding: "20px 24px",
                transition: "border-color 0.2s",
              }}
            >
              {/* Skill name + percentage */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 14,
                }}
              >
                <span style={{ fontWeight: 600, fontSize: 15 }}>
                  {skill.name}
                </span>
                <span
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: 13,
                    color: i % 2 === 0 ? "#00D4AA" : "#7C6AF7",
                    fontWeight: 500,
                  }}
                >
                  {skill.level}%
                </span>
              </div>

              {/* Animated progress bar */}
              <AnimBar
                level={skill.level}
                color={i % 2 === 0 ? "#00D4AA" : "#7C6AF7"}
                delay={i * 100}
              />
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}