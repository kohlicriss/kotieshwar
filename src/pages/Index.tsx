import Header from "@/components/Header";
import ArticleCard from "@/components/ArticleCard";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import { articles } from "@/data/articles";
import { Briefcase, GraduationCap, BookOpen, ExternalLink, Cpu, Brain, Database, Sigma, Radio, Wrench } from "lucide-react";

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
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArticles.map((article, index) => (
              <div key={article.id} className={`animate-slide-up stagger-${Math.min(index + 1, 6)}`}>
                <ArticleCard {...article} size="small" />
              </div>
            ))}
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="my-20 rounded-[2.5rem] bg-card p-12 md:p-16 animate-scale-in">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10 text-center">Experience & Education</h2>
          
          <div className="max-w-3xl mx-auto space-y-8">
            {/* Experience */}
            <div className="relative pl-8 border-l-2 border-border">
              <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-primary" />
              <h3 className="text-xl font-bold">Associate Software Engineer</h3>
              <p className="text-muted-foreground font-medium">Anasol Consultancy Services • Hyderabad, India</p>
              <p className="text-sm text-muted-foreground mb-2">Apr 2025 – Present</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Production-grade ERP systems, job recommendation platform. Working with Kubernetes, LangChain, Kafka, Redis, Docker, CI/CD, and AWS Lambda.
              </p>
            </div>

            {/* Education */}
            <div className="relative pl-8 border-l-2 border-border">
              <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-accent" />
              <h3 className="text-xl font-bold">B.Tech — Electronics & Communication Engineering</h3>
              <p className="text-muted-foreground font-medium">GRIET • CGPA: 8.39</p>
              <p className="text-sm text-muted-foreground">Graduated May 2025</p>
            </div>

            <div className="relative pl-8 border-l-2 border-border">
              <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-secondary" />
              <h3 className="text-xl font-bold">Senior Secondary (Intermediate)</h3>
              <p className="text-muted-foreground font-medium">NSR Impulse Junior College • 988/1000</p>
              <p className="text-sm text-muted-foreground">June 2021</p>
            </div>

            <div className="relative pl-8 border-l-2 border-border">
              <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-muted-foreground" />
              <h3 className="text-xl font-bold">Secondary School Certificate</h3>
              <p className="text-muted-foreground font-medium">Matrusri High School • 9.8/10</p>
              <p className="text-sm text-muted-foreground">March 2019</p>
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
                <li><a href="/" className="hover:text-accent transition-colors">Home</a></li>
                <li><a href="/#projects" className="hover:text-accent transition-colors">Projects</a></li>
                <li><a href="/about" className="hover:text-accent transition-colors">About</a></li>
                <li><a href="/contact" className="hover:text-accent transition-colors">Contact</a></li>
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
