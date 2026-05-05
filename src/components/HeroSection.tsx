import { Github, Linkedin, Mail, ArrowRight, UserRound, MapPin, Circle } from "lucide-react";
import { Link } from "react-router-dom";

import koteshwarImg from "@/assets/koteshwar-hero.png";

const HeroSection = () => {
  return (
    <>
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');

        .hero-garamond { font-family: 'EB Garamond', Georgia, serif; }
        .hero-dm       { font-family: 'DM Sans', system-ui, sans-serif; }

        .hero-status-dot {
          width: 6px;
          height: 6px;
          border-radius: 9999px;
          background: #16a34a;
          animation: hero-pulse 2s ease-in-out infinite;
          flex-shrink: 0;
        }
        @keyframes hero-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.45; transform: scale(0.75); }
        }

        .hero-photo-ring {
          position: absolute;
          inset: -6px;
          border-radius: 9999px;
          border: 1px dashed rgba(128,128,128,0.3);
          pointer-events: none;
        }

        .hero-social-link {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 5px 8px;
          border-radius: 6px;
          font-size: 11.5px;
          color: inherit;
          text-decoration: none;
          transition: background 0.15s;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .hero-social-link:hover { background: rgba(128,128,128,0.08); }

        .hero-tag {
          font-size: 11px;
          padding: 3px 10px;
          border-radius: 9999px;
          border: 0.5px solid rgba(128,128,128,0.25);
          background: rgba(128,128,128,0.06);
          white-space: nowrap;
          letter-spacing: 0.02em;
        }

        .hero-btn-outline {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 14px;
          font-size: 12px;
          font-weight: 500;
          border-radius: 7px;
          border: 0.5px solid rgba(128,128,128,0.3);
          background: transparent;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.15s;
          letter-spacing: 0.025em;
        }
        .hero-btn-outline:hover { background: rgba(128,128,128,0.06); }

        .hero-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          font-size: 12px;
          font-weight: 500;
          border-radius: 7px;
          border: 0.5px solid rgba(0,0,0,0.15);
          cursor: pointer;
          text-decoration: none;
          transition: opacity 0.15s;
          letter-spacing: 0.025em;
        }
        .hero-btn-primary:hover { opacity: 0.82; }

        @media (max-width: 600px) {
          .hero-body-grid { grid-template-columns: 1fr !important; }
          .hero-photo-col { border-right: none !important; border-bottom: 1px solid rgba(128,128,128,0.12) !important; flex-direction: row !important; gap: 20px !important; justify-content: flex-start !important; }
          .hero-social-links { flex-direction: row !important; flex-wrap: wrap !important; }
          .hero-stats-grid { grid-template-columns: repeat(3, 1fr) !important; }
          .hero-footer { flex-direction: column !important; align-items: flex-start !important; }
          .hero-footer-btns { width: 100% !important; }
          .hero-btn-outline, .hero-btn-primary { flex: 1 !important; justify-content: center !important; }
        }
      `}</style>

      <section
        className="hero-dm my-3 md:my-4 animate-fade-in"
        style={{
          border: "0.5px solid rgba(128,128,128,0.2)",
          borderRadius: "16px",
          overflow: "hidden",
          background: "var(--background, #fff)",
        }}
      >
        {/* ── Top bar ─────────────────────────────── */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "13px 24px",
            borderBottom: "0.5px solid rgba(128,128,128,0.12)",
            background: "rgba(128,128,128,0.03)",
            flexWrap: "wrap",
            gap: "8px",
          }}
        >
          <span
            className="hero-garamond"
            style={{ fontSize: "14px", fontWeight: 500, letterSpacing: "0.18em", opacity: 0.55, textTransform: "uppercase" }}
          >
            CH · Koteshwar
          </span>

          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: "7px",
              padding: "4px 12px",
              borderRadius: "9999px",
              background: "rgba(22,163,74,0.08)",
              border: "0.5px solid rgba(22,163,74,0.25)",
              fontSize: "11.5px",
              color: "#15803d",
              fontWeight: 500,
              letterSpacing: "0.03em",
            }}
          >
            <span className="hero-status-dot" />
            
          </span>
        </div>

        {/* ── Body grid ───────────────────────────── */}
        <div
          className="hero-body-grid"
          style={{ display: "grid", gridTemplateColumns: "185px 1fr" }}
        >
          {/* Left: Photo + socials */}
          <div
            className="hero-photo-col"
            style={{
              borderRight: "0.5px solid rgba(128,128,128,0.12)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "28px 20px",
              background: "rgba(128,128,128,0.02)",
              gap: "20px",
            }}
          >
            {/* Avatar */}
            <div style={{ position: "relative", flexShrink: 0 }}>
              <div
                style={{
                  width: "96px",
                  height: "96px",
                  borderRadius: "9999px",
                  border: "1.5px solid rgba(128,128,128,0.2)",
                  background: "rgba(128,128,128,0.06)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                }}
              >
                <img
                  src={koteshwarImg}
                  alt="Chinnolla Koteshwar"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />

              </div>
              <div className="hero-photo-ring" />
            </div>

            {/* Social links */}
            <div
              className="hero-social-links"
              style={{ display: "flex", flexDirection: "column", gap: "4px", width: "100%", opacity: 0.65 }}
            >
              <a
                className="hero-social-link"
                href="https://github.com/KoteshwarChinnolla"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github size={13} strokeWidth={1.5} style={{ flexShrink: 0 }} />
                KoteshwarChinnolla
              </a>
              <a
                className="hero-social-link"
                href="https://linkedin.com/in/koteshwar-chinnolla-2065b4253"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={13} strokeWidth={1.5} style={{ flexShrink: 0 }} />
                koteshwar-chinnolla
              </a>
              <a
                className="hero-social-link"
                href="mailto:chinnollakoteshwar@gmail.com"
                aria-label="Email"
              >
                <Mail size={13} strokeWidth={1.5} style={{ flexShrink: 0 }} />
                chinnollakoteshwar
              </a>
            </div>
          </div>

          {/* Right: Info */}
          <div
            style={{
              padding: "30px 28px 24px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: "18px",
            }}
          >
            {/* Name block */}
            <div style={{ borderLeft: "2px solid currentColor", paddingLeft: "14px" }}>
              <h1
                className="hero-garamond"
                style={{ fontSize: "28px", fontWeight: 500, lineHeight: 1.1, letterSpacing: "-0.01em", margin: "0 0 4px" }}
              >
                Chinnolla Koteshwar
              </h1>
              <p style={{ fontSize: "11.5px", opacity: 0.45, letterSpacing: "0.13em", textTransform: "uppercase", margin: 0, fontWeight: 400 }}>
                Associate Software Engineer · IEEE Researcher
              </p>
            </div>

            {/* Bio */}
            <p style={{ fontSize: "13.5px", lineHeight: 1.78, opacity: 0.7, margin: 0, maxWidth: "440px" }}>
              Engineer at{" "}
              <strong style={{ opacity: 1, fontWeight: 500 }}>Anasol Consultancy Services</strong>{" "}
              building production-grade systems across{" "}
              <strong style={{ opacity: 1, fontWeight: 500 }}>Agentic AI, robotics, and cloud infrastructure</strong>.
              Researching world models and reinforcement learning grounded in physics-first principles.
            </p>

            {/* Tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {["Agentic AI", "Reinforcement Learning", "World Models", "Cloud Infrastructure", "Robotics", "Physics-Based AI"].map((tag) => (
                <span key={tag} className="hero-tag" style={{ opacity: 0.7 }}>{tag}</span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Stats row ───────────────────────────── */}
        <div
          className="hero-stats-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            borderTop: "0.5px solid rgba(128,128,128,0.12)",
          }}
        >
          {[
            { num: "1+", label: "Years Industry Exp." },
            { num: "IEEE", label: "Published Researcher" },
            { num: "Prod.", label: "Systems Deployed" },
          ].map(({ num, label }, i) => (
            <div
              key={label}
              style={{
                padding: "15px 24px",
                borderRight: i < 2 ? "0.5px solid rgba(128,128,128,0.12)" : "none",
                display: "flex",
                flexDirection: "column",
                gap: "3px",
                background: "rgba(128,128,128,0.02)",
              }}
            >
              <span
                className="hero-garamond"
                style={{ fontSize: "20px", fontWeight: 500, lineHeight: 1.1 }}
              >
                {num}
              </span>
              <span style={{ fontSize: "10.5px", opacity: 0.4, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* ── Footer ──────────────────────────────── */}
        <div
          className="hero-footer"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "13px 24px",
            borderTop: "0.5px solid rgba(128,128,128,0.12)",
            background: "rgba(128,128,128,0.02)",
            gap: "12px",
            flexWrap: "wrap",
          }}
        >
          <span style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", opacity: 0.4 }}>
            <MapPin size={12} strokeWidth={1.5} />
            Hyderabad, India
          </span>

          <div className="hero-footer-btns" style={{ display: "flex", gap: "8px" }}>
            <Link
              to="/about"
              className="hero-btn-outline hero-dm"
            >
              <UserRound size={13} strokeWidth={1.5} />
              About Me
            </Link>
            <Link
              to="/contact"
              className="hero-btn-primary hero-dm"
              style={{ }}
            >
              <span style={{display: "flex", alignItems: "center", gap: "6px" }}>
                Get in Touch
                <ArrowRight size={13} strokeWidth={1.5} />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;