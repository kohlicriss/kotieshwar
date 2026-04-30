import { Github, Linkedin, Mail, ArrowRight, UserRound } from "lucide-react";
import { Link } from "react-router-dom";
import koteshwarImg from "@/assets/koteshwar-hero.png";

const HeroSection = () => {
  return (
    <section className="hero-ambient relative min-h-[calc(100vh-9rem)] rounded-[1.25rem] md:rounded-[1.5rem] overflow-hidden my-3 md:my-4 animate-fade-in border border-border/40 flex items-center">
      {/* Animated backdrop with subtle gradient + grid pattern */}
      <div className="absolute inset-0 bg-[hsl(var(--hero-deep))]" />
      <div
        className="absolute inset-0 opacity-[0.09] hero-grid"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--hero-line)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--hero-line)) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="absolute inset-0 hero-tone" />
      <div className="hero-orbit hero-orbit-one" />
      <div className="hero-orbit hero-orbit-two" />
      <div className="hero-scan" />

      {/* Content grid */}
      <div className="relative w-full grid grid-cols-1 md:grid-cols-[0.82fr_1.18fr] gap-5 md:gap-9 p-4 sm:p-6 md:p-9 lg:p-11 items-center">
        {/* Left: Photo */}
        <div className="relative mx-auto w-full max-w-[245px] md:max-w-[330px] lg:max-w-[360px]">
          <div className="relative aspect-[4/5] md:aspect-square rounded-xl overflow-hidden border border-primary-foreground/10 shadow-2xl hero-photo">
            <img
              src={koteshwarImg}
              alt="Chinnolla Koteshwar"
              className="w-full h-full object-cover object-center transition-all duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
          </div>
          {/* Accent corner mark */}
          <div className="absolute -bottom-1.5 -right-1.5 w-14 h-1 bg-accent" />
          <div className="absolute -bottom-1.5 -right-1.5 w-1 h-14 bg-accent" />
        </div>

        {/* Right: Info */}
        <div className="hero-copy-panel hero-text space-y-3.5 md:space-y-4 text-center md:text-left animate-slide-up">
          {/* Brand mark */}
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <span className="text-xl md:text-2xl font-bold tracking-[0.2em] hero-text">KOTESHWAR</span>
            <span className="hidden md:block h-px flex-1 hero-divider" />
          </div>

          {/* Accent bar + title */}
          <div className="space-y-2 md:space-y-3">
            <div className="w-12 h-0.5 bg-accent mx-auto md:mx-0" />
            <h1 className="text-4xl sm:text-5xl md:text-[3.4rem] lg:text-6xl font-bold leading-[1.02] tracking-tight hero-title">
              Chinnolla Koteshwar
            </h1>
            <p className="text-xs sm:text-sm md:text-base hero-muted tracking-[0.15em] uppercase">
              Associate Software Engineer · IEEE Researcher
            </p>
          </div>

          {/* Description */}
          <p className="hero-body text-sm md:text-base leading-relaxed max-w-xl mx-auto md:mx-0">
            Engineer at Anasol Consultancy Services building production-grade systems across{" "}
            <span className="hero-text font-medium">Agentic AI, robotics, and cloud infrastructure</span>.
            Researching world models and reinforcement learning rooted in physics-first thinking.
          </p>

          {/* Socials + CTA row */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3.5 pt-3.5 hero-border-top">
            <div className="flex items-center gap-5 hero-muted justify-center md:justify-start">
              <a
                href="https://github.com/KoteshwarChinnolla"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:text-accent transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/koteshwar-chinnolla-2065b4253"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-accent transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:chinnollakoteshwar@gmail.com"
                aria-label="Email"
                className="hover:text-accent transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 w-full sm:w-auto">
              <Link
                to="/about"
                className="group inline-flex items-center justify-center gap-2 px-4 py-2.5 hero-outline-button rounded-md font-semibold text-sm tracking-wide transition-all"
              >
                <UserRound className="w-4 h-4" />
                About Me
              </Link>
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-accent text-accent-foreground rounded-md font-semibold text-sm tracking-wide hover:bg-accent/90 transition-all"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
