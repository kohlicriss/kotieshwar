import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import koteshwarImg from "@/assets/koteshwar.jpeg";

const HeroSection = () => {
  return (
    <section className="relative rounded-[2rem] overflow-hidden my-8 animate-fade-in border border-border/40">
      {/* Dark backdrop with subtle gradient + grid pattern */}
      <div className="absolute inset-0 bg-[hsl(220,30%,8%)]" />
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(0,0%,100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0,0%,100%) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(262,60%,20%)]/40 via-transparent to-[hsl(38,90%,50%)]/10" />
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[hsl(262,83%,58%)]/20 blur-3xl" />

      {/* Content grid */}
      <div className="relative grid md:grid-cols-[1fr_1.2fr] gap-6 md:gap-10 p-6 md:p-10 items-center">
        {/* Left: Photo */}
        <div className="relative">
          <div className="relative aspect-square rounded-xl overflow-hidden border border-white/10 shadow-2xl">
            <img
              src={koteshwarImg}
              alt="Chinnolla Koteshwar"
              className="w-full h-full object-cover object-top grayscale-[20%] transition-all duration-700 hover:grayscale-0 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>
          {/* Accent corner mark */}
          <div className="absolute -bottom-2 -right-2 w-16 h-1 bg-[hsl(38,92%,55%)]" />
          <div className="absolute -bottom-2 -right-2 w-1 h-16 bg-[hsl(38,92%,55%)]" />
        </div>

        {/* Right: Info */}
        <div className="text-white space-y-5">
          {/* Brand mark */}
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold tracking-[0.2em] text-white">KOTESHWAR</span>
            <span className="h-px flex-1 bg-white/20" />
          </div>

          {/* Accent bar + title */}
          <div className="space-y-3">
            <div className="w-12 h-0.5 bg-[hsl(38,92%,55%)]" />
            <h1 className="text-4xl md:text-5xl font-bold leading-[1.05] tracking-tight">
              Chinnolla Koteshwar
            </h1>
            <p className="text-sm md:text-base text-white/60 tracking-[0.15em] uppercase">
              Associate Software Engineer · IEEE Researcher
            </p>
          </div>

          {/* Description */}
          <p className="text-white/75 text-sm md:text-base leading-relaxed max-w-xl">
            Engineer at Anasol Consultancy Services building production-grade systems across{" "}
            <span className="text-white font-medium">Agentic AI, robotics, and cloud infrastructure</span>.
            Researching world models and reinforcement learning for reliable structured generation.
          </p>

          {/* Socials + CTA row */}
          <div className="flex items-center justify-between pt-3 border-t border-white/10">
            <div className="flex items-center gap-5 text-white/70">
              <a
                href="https://github.com/KoteshwarChinnolla"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:text-[hsl(38,92%,55%)] transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/koteshwar-chinnolla-2065b4253"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-[hsl(38,92%,55%)] transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:chinnollakoteshwar@gmail.com"
                aria-label="Email"
                className="hover:text-[hsl(38,92%,55%)] transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            <a
              href="/contact"
              className="group inline-flex items-center gap-2 px-5 py-2.5 bg-[hsl(38,92%,55%)] text-[hsl(220,30%,8%)] rounded-md font-semibold text-sm tracking-wide hover:bg-[hsl(38,92%,60%)] transition-all"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
