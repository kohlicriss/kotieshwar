import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import koteshwarImg from "@/assets/koteshwar.jpeg";

const HeroSection = () => {
  return (
    <section className="relative rounded-[2.5rem] overflow-hidden bg-muted my-12 animate-fade-in">
      <div className="grid md:grid-cols-2 gap-6 md:gap-12 p-6 md:p-12 lg:p-16">
        {/* Left side - Photo */}
        <div className="relative aspect-[3/4] md:aspect-auto rounded-[2rem] overflow-hidden animate-scale-in">
          <img
            src={koteshwarImg}
            alt="Chinnolla Koteshwar"
            className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        </div>

        {/* Right side - Content */}
        <div className="flex flex-col justify-center space-y-6 md:space-y-8">
          <div className="space-y-4 md:space-y-6">
            <p className="text-sm font-medium text-muted-foreground tracking-widest uppercase animate-slide-down">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight animate-slide-down">
              Chinnolla Koteshwar
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-xl animate-slide-up stagger-1">
              Associate Software Engineer at Anasol Consultancy Services. IEEE-published researcher exploring the intersection of <span className="text-foreground font-medium">Agentic AI, world models, and reinforcement learning</span> — building systems that sense, reason, and act.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6 pt-4 animate-slide-up stagger-2">
            <a href="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-4 md:px-10 md:py-6 text-base font-medium transition-all hover:scale-105 w-full sm:w-auto">
                Get in Touch
              </Button>
            </a>

            <div className="flex items-center gap-4">
              <a href="https://github.com/KoteshwarChinnolla" target="_blank" rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border-2 border-border hover:border-primary hover:bg-muted transition-all flex items-center justify-center hover:scale-110"
                aria-label="GitHub">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/koteshwar-chinnolla-2065b4253" target="_blank" rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border-2 border-border hover:border-primary hover:bg-muted transition-all flex items-center justify-center hover:scale-110"
                aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:chinnollakoteshwar@gmail.com"
                className="w-12 h-12 rounded-full border-2 border-border hover:border-primary hover:bg-muted transition-all flex items-center justify-center hover:scale-110"
                aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
