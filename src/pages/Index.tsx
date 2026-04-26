import Header from "@/components/Header";
import ArticleCard from "@/components/ArticleCard";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import { articles } from "@/data/articles";
import { Briefcase, GraduationCap, BookOpen, ExternalLink, Cpu, Brain, Database, Sigma, Radio, Wrench, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const coursework = [
  { icon: Brain, label: "AI & Machine Learning", items: "Artificial Neural Networks · Machine Learning · Python" },
  { icon: Cpu, label: "Computer Science", items: "Data Structures · OOP (Java) · Cloud Computing · DBMS" },
  { icon: Radio, label: "IoT & Embedded Systems", items: "Internet of Things · Microcontrollers" },
  { icon: Sigma, label: "Mathematics", items: "Linear Algebra · Differential Calculus · Probability & Stochastic Processes" },
  { icon: Wrench, label: "Control & Signals", items: "Linear Control Systems · Digital Signal Processing · Signals & Systems" },
  { icon: Database, label: "Core Electronics", items: "Analog & Digital Circuits · VLSI · Networks" },
];

const Index = () => {
  const featuredArticles = articles;

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <HeroSection />

        {/* Skills Section */}
        <IntroSection />

        {/* Projects Grid */}
        <section id="projects" className="py-12">
          <div className="flex items-center justify-between mb-12 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Projects & Work</h2>
            <Link
              to="/projects"
              className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full border border-border hover:border-[hsl(38,92%,55%)]/60 hover:bg-card transition-all group"
            >
              View all projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArticles.map((article, index) => (
              <div key={article.id} className={`animate-slide-up stagger-${Math.min(index + 1, 6)}`}>
                <ArticleCard {...article} size="small" />
              </div>
            ))}
          </div>

          <div className="mt-10 text-center sm:hidden">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full border border-border hover:border-[hsl(38,92%,55%)]/60 hover:bg-card transition-all"
            >
              View all projects <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Coursework */}
        <section className="my-16 md:my-20 scroll-reveal">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card/50 text-xs tracking-[0.2em] uppercase text-muted-foreground">
              <BookOpen className="w-3.5 h-3.5" />
              Relevant Coursework
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">The foundation under the work</h2>
            <p className="text-muted-foreground text-base md:text-lg">
              Six pillars from B.Tech ECE with a Minor in AI/ML — the academic groundwork behind every project.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {coursework.map((c, index) => (
              <div key={c.label} className={`group interactive-card flip-card p-6 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all scroll-reveal stagger-${Math.min(index + 1, 6)}`}>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0 group-hover:bg-accent/15 transition-colors">
                    <c.icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-base">{c.label}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{c.items}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Publication Highlight */}
        <section className="my-16 md:my-20 rounded-[2rem] overflow-hidden relative border border-border bg-card p-8 md:p-12 scroll-reveal interactive-card">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
          <div className="relative grid md:grid-cols-[auto_1fr_auto] gap-6 md:gap-10 items-center">
            <div className="w-14 h-14 rounded-2xl bg-accent/15 border border-accent/30 flex items-center justify-center">
              <BookOpen className="w-7 h-7 text-accent" />
            </div>
            <div className="space-y-2">
              <p className="text-xs tracking-[0.25em] uppercase text-accent font-semibold">IEEE Publication · ICOCT 2025</p>
              <h3 className="text-xl md:text-2xl font-bold leading-tight">
                Natural Language Based Autonomous Navigation Vehicle
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                C. Koteshwar, M. D. Chaithanya, M. Abdul Kaleem, A. Vishnubhatla — DOI 10.1109/ICOCT64433.2025.11118685
              </p>
            </div>
            <a
              href="https://ieeexplore.ieee.org/document/11118685"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:scale-105 transition-all"
            >
              Read Paper <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* Experience & Education */}
        <section className="my-16 md:my-20 animate-fade-in">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card/50 text-xs tracking-[0.2em] uppercase text-muted-foreground">
              <Briefcase className="w-3.5 h-3.5" />
              Experience & Education
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">A timeline of work and learning</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Experience Card */}
            <div className="rounded-3xl bg-card border border-border p-7 md:p-8 hover:border-[hsl(262,83%,58%)]/40 transition-all card-hover">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[hsl(262,83%,58%)]/10 flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-[hsl(262,83%,58%)]" />
                </div>
                <p className="text-xs tracking-[0.25em] uppercase font-semibold text-muted-foreground">Work Experience</p>
              </div>
              <h3 className="text-xl font-bold leading-tight">Associate Software Engineer — AI & DevOps</h3>
              <p className="text-sm font-medium text-foreground/80 mt-1">Anasol Consultancy Services · Hyderabad</p>
              <p className="text-xs text-muted-foreground mt-1 mb-4">Apr 2025 – Present</p>
              <ul className="space-y-2.5 text-sm text-muted-foreground leading-relaxed">
                <li className="flex gap-2"><span className="text-[hsl(262,83%,58%)] mt-1.5 w-1 h-1 rounded-full bg-current flex-shrink-0" /> Built and maintained AI-enabled backend systems for enterprise applications.</li>
                <li className="flex gap-2"><span className="text-[hsl(262,83%,58%)] mt-1.5 w-1 h-1 rounded-full bg-current flex-shrink-0" /> Worked on recommendation systems and agent-based workflows for internal automation.</li>
                <li className="flex gap-2"><span className="text-[hsl(262,83%,58%)] mt-1.5 w-1 h-1 rounded-full bg-current flex-shrink-0" /> Scalable infrastructure with AWS, Kubernetes, Terraform, Helm, Redis, Kafka, microservices.</li>
                <li className="flex gap-2"><span className="text-[hsl(262,83%,58%)] mt-1.5 w-1 h-1 rounded-full bg-current flex-shrink-0" /> Authored reusable open-source Terraform modules and Helm charts in active production use.</li>
              </ul>
            </div>

            {/* Education Card */}
            <div className="rounded-3xl bg-card border border-border p-7 md:p-8 hover:border-[hsl(38,92%,55%)]/40 transition-all card-hover">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[hsl(38,92%,55%)]/10 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-[hsl(38,92%,55%)]" />
                </div>
                <p className="text-xs tracking-[0.25em] uppercase font-semibold text-muted-foreground">Education</p>
              </div>
              <div className="space-y-5">
                <div className="relative pl-5 border-l-2 border-[hsl(38,92%,55%)]">
                  <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-[hsl(38,92%,55%)]" />
                  <h4 className="font-bold leading-tight">B.Tech — Electronics & Communication Engineering</h4>
                  <p className="text-xs text-[hsl(38,92%,55%)] font-semibold mt-0.5">Minor: AI / ML</p>
                  <p className="text-sm text-muted-foreground mt-1">GRIET, Hyderabad · CGPA 8.39 / 10</p>
                  <p className="text-xs text-muted-foreground">May 2025</p>
                </div>
                <div className="relative pl-5 border-l-2 border-border">
                  <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-muted-foreground" />
                  <h4 className="font-bold leading-tight">Senior Secondary (Intermediate)</h4>
                  <p className="text-sm text-muted-foreground mt-1">NSR Impulse Junior College · 988 / 1000</p>
                  <p className="text-xs text-muted-foreground">June 2021</p>
                </div>
                <div className="relative pl-5 border-l-2 border-border">
                  <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-muted-foreground" />
                  <h4 className="font-bold leading-tight">Secondary School Certificate</h4>
                  <p className="text-sm text-muted-foreground mt-1">Matrusri High School · 9.8 / 10</p>
                  <p className="text-xs text-muted-foreground">March 2019</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="my-20 rounded-[2.5rem] bg-card p-12 md:p-16 text-center animate-scale-in">
          <div className="max-w-2xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Let's build something great.</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Open to collaborations, open-source contributions, and interesting engineering challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:chinnollakoteshwar@gmail.com">
                <button className="px-10 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 hover:scale-105 transition-all">
                  Email Me
                </button>
              </a>
              <a href="https://linkedin.com/in/koteshwar-chinnolla-2065b4253" target="_blank" rel="noopener noreferrer">
                <button className="px-10 py-4 rounded-full border-2 border-border font-medium hover:bg-muted hover:scale-105 transition-all">
                  LinkedIn
                </button>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-4">Navigate</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
                <li><Link to="/projects" className="hover:text-accent transition-colors">Projects</Link></li>
                <li><Link to="/about" className="hover:text-accent transition-colors">About</Link></li>
                <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="https://github.com/KoteshwarChinnolla" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">GitHub</a></li>
                <li><a href="https://linkedin.com/in/koteshwar-chinnolla-2065b4253" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">LinkedIn</a></li>
                <li><a href="mailto:chinnollakoteshwar@gmail.com" className="hover:text-accent transition-colors">Email</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Skills</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Java, Python, Go, C++</li>
                <li>Kubernetes, Terraform, AWS</li>
                <li>LangChain, TensorFlow, PyTorch</li>
                <li>Kafka, Redis, Docker</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2025 Chinnolla Koteshwar. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
