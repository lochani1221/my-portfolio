import { useState } from "react";
import FadeIn from "./FadeIn";

const CONTACT_INFO = [
  {
    icon: "📧",
    label: "Email",
    value: "alex@devportfolio.io",
    copyable: true,
  },
  {
    icon: "🐙",
    label: "GitHub",
    value: "github.com/alexchen",
    href: "https://github.com/",
  },
  {
    icon: "💼",
    label: "LinkedIn",
    value: "linkedin.com/in/alexchen",
    href: "https://linkedin.com/",
  },
  {
    icon: "🌍",
    label: "Location",
    value: "San Francisco, CA (Remote OK)",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  const handleCopy = (value) => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: "80px 2rem 120px",
      }}
    >
      {/* Section header */}
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
          Get in touch
        </span>
        <h2
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            fontWeight: 800,
            letterSpacing: "-1px",
            marginBottom: 16,
          }}
        >
          Let's Work Together
        </h2>
        <p
          style={{
            fontSize: 16,
            color: "rgba(232,232,240,0.55)",
            maxWidth: 480,
            lineHeight: 1.7,
            marginBottom: 48,
          }}
        >
          Open to full-time roles, freelance projects, and interesting
          collaborations. Drop me a message!
        </p>
      </FadeIn>

      {/* Two-column layout */}
      <div
        className="contact-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 32,
          maxWidth: 860,
        }}
      >
        {/* Left: Contact form */}
        <FadeIn delay={100}>
          <div
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: 16,
              padding: "28px",
            }}
          >
            {sent ? (
              /* Success state */
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
                <p
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 700,
                    fontSize: 20,
                    marginBottom: 10,
                  }}
                >
                  Message sent!
                </p>
                <p
                  style={{
                    color: "rgba(232,232,240,0.5)",
                    fontSize: 14,
                    lineHeight: 1.6,
                  }}
                >
                  I'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSent(false)}
                  style={{
                    marginTop: 24,
                    padding: "10px 22px",
                    borderRadius: 99,
                    fontSize: 14,
                    fontWeight: 600,
                    cursor: "pointer",
                    border: "1px solid rgba(255,255,255,0.12)",
                    background: "rgba(255,255,255,0.05)",
                    color: "rgba(232,232,240,0.8)",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  Send another
                </button>
              </div>
            ) : (
              /* Form */
              <form
                onSubmit={handleSubmit}
                style={{ display: "flex", flexDirection: "column", gap: 14 }}
              >
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={form.name}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, name: e.target.value }))
                  }
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  value={form.email}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, email: e.target.value }))
                  }
                />
                <textarea
                  rows={5}
                  placeholder="Your message..."
                  required
                  value={form.message}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      message: e.target.value,
                    }))
                  }
                />
                <button
                  type="submit"
                  style={{
                    padding: "12px 22px",
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
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </FadeIn>

        {/* Right: contact info cards */}
        <FadeIn
          delay={200}
          style={{ display: "flex", flexDirection: "column", gap: 12 }}
        >
          {CONTACT_INFO.map((item) => (
            <div
              key={item.label}
              className="contact-info-card"
              onClick={
                item.copyable ? () => handleCopy(item.value) : undefined
              }
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 14,
                padding: "16px 20px",
                display: "flex",
                alignItems: "center",
                gap: 16,
                cursor: item.copyable || item.href ? "pointer" : "default",
                transition: "border-color 0.2s",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <span style={{ fontSize: 22 }}>{item.icon}</span>
              <div>
                <div
                  style={{
                    fontSize: 11,
                    color: "rgba(232,232,240,0.4)",
                    textTransform: "uppercase",
                    letterSpacing: 1,
                    marginBottom: 3,
                  }}
                >
                  {item.label}
                </div>
                <div style={{ fontSize: 14, fontWeight: 500 }}>
                  {item.copyable && copied ? "✓ Copied!" : item.value}
                </div>
              </div>
            </div>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}