import { Github, Linkedin, Mail, ArrowRight, UserRound } from "lucide-react";
import { Link } from "react-router-dom";
import koteshwarImg from "@/assets/koteshwar-hero.png";

const HeroSection = () => {
  return (
    <section className="hero-ambient relative min-h-[calc(100vh-7.5rem)] rounded-[1.75rem] md:rounded-[2rem] overflow-hidden my-4 md:my-6 animate-fade-in border border-border/40 flex items-center">
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
      <div className="absolute inset-0 bg-gradient-to-br from-accent/25 via-transparent to-secondary/20" />
      <div className="hero-orbit hero-orbit-one" />
      <div className="hero-orbit hero-orbit-two" />
      <div className="hero-scan" />

      {/* Content grid */}
      <div className="relative w-full grid grid-cols-1 md:grid-cols-[0.9fr_1.2fr] gap-6 md:gap-12 p-5 sm:p-7 md:p-12 lg:p-14 items-center">
        {/* Left: Photo */}
        <div className="relative mx-auto w-full max-w-[280px] md:max-w-none">
          <div className="relative aspect-[4/5] md:aspect-square rounded-2xl overflow-hidden border border-primary-foreground/10 shadow-2xl hero-photo">
            <img
              src={koteshwarImg}
              alt="Chinnolla Koteshwar"
              className="w-full h-full object-cover object-center transition-all duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
          </div>
          {/* Accent corner mark */}
          <div className="absolute -bottom-2 -right-2 w-16 h-1 bg-accent" />
          <div className="absolute -bottom-2 -right-2 w-1 h-16 bg-accent" />
        </div>

        {/* Right: Info */}
        <div className="text-primary-foreground space-y-4 md:space-y-5 text-center md:text-left animate-slide-up">
          {/* Brand mark */}
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <span className="text-xl md:text-2xl font-bold tracking-[0.2em] text-primary-foreground">KOTESHWAR</span>
            <span className="hidden md:block h-px flex-1 bg-primary-foreground/20" />
          </div>

          {/* Accent bar + title */}
          <div className="space-y-2 md:space-y-3">
            <div className="w-12 h-0.5 bg-accent mx-auto md:mx-0" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.05] tracking-tight">
              Chinnolla Koteshwar
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-primary-foreground/65 tracking-[0.15em] uppercase">
              Associate Software Engineer · IEEE Researcher
            </p>
          </div>

          {/* Description */}
          <p className="text-primary-foreground/80 text-sm md:text-base leading-relaxed max-w-xl mx-auto md:mx-0">
            Engineer at Anasol Consultancy Services building production-grade systems across{" "}
            <span className="text-primary-foreground font-medium">Agentic AI, robotics, and cloud infrastructure</span>.
            Researching world models and reinforcement learning rooted in physics-first thinking.
          </p>

          {/* Socials + CTA row */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4 border-t border-primary-foreground/10">
            <div className="flex items-center gap-5 text-primary-foreground/70 justify-center md:justify-start">
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
                className="group inline-flex items-center justify-center gap-2 px-4 py-2.5 border border-primary-foreground/20 text-primary-foreground rounded-md font-semibold text-sm tracking-wide hover:bg-primary-foreground/10 transition-all"
              >
                <UserRound className="w-4 h-4" />
                About Me
              </Link>
              <a
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-accent text-accent-foreground rounded-md font-semibold text-sm tracking-wide hover:bg-accent/90 transition-all"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
