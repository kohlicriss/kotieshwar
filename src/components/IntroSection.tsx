import { Atom, Bot, Server, Cloud, Brain, Network } from "lucide-react";

const interests = [
  {
    icon: Atom,
    title: "Physics & First Principles",
    description:
      "Kinematics, Rigid Body Dynamics, Electrostatics — the foundation that drew me to ECE and to building systems that sense, move, and reason.",
  },
  {
    icon: Bot,
    title: "Robotics & Autonomy",
    description:
      "ROS, A* path planning, OpenCV, Raspberry Pi at the edge. Built a natural-language autonomous navigation vehicle (IEEE published).",
  },
  {
    icon: Brain,
    title: "Agentic AI & Research",
    description:
      "LangChain, LangGraph, RAG, Deep Agents. Researching world models + RL for reliable structured generation in agentic systems.",
  },
  {
    icon: Server,
    title: "Backend & System Design",
    description:
      "Java, Python, Go, Spring Boot, gRPC, Kafka, Redis, Elasticsearch — designing production-grade ERP and recommendation systems.",
  },
  {
    icon: Cloud,
    title: "Cloud, DevOps & Kubernetes",
    description:
      "Kubernetes, Helm, Terraform, AWS Lambda, Istio, CI/CD. Author of open-source Terraform modules and Helm charts in active use.",
  },
  {
    icon: Network,
    title: "NLP & Computer Vision",
    description:
      "BERT pre-training from scratch, transformer pipelines, OpenCV detection — bridging perception and language for real-world systems.",
  },
];

const IntroSection = () => {
  return (
    <section className="max-w-6xl mx-auto py-12 md:py-16 px-4 animate-fade-in">
      <div className="text-center space-y-5 mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card/50 text-xs tracking-[0.2em] uppercase text-muted-foreground">
          <span className="w-1.5 h-1.5 rounded-full bg-[hsl(38,92%,55%)]" />
          Interests & Focus Areas
        </div>
        <h2 className="text-3xl md:text-4xl font-bold leading-tight max-w-3xl mx-auto animate-slide-up">
          From physics and robotics to agentic AI and cloud-scale systems.
        </h2>
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto animate-slide-up stagger-1">
          A curiosity that started with motion and electricity, and grew into building systems that
          sense, reason, and act in the real world.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 animate-slide-up stagger-2">
        {interests.map((item) => (
          <div
            key={item.title}
            className="group relative p-6 rounded-2xl bg-card border border-border hover:border-[hsl(262,83%,58%)]/40 transition-all duration-300 card-hover overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[hsl(262,83%,58%)] to-[hsl(38,92%,55%)] opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-11 h-11 rounded-lg bg-muted group-hover:bg-gradient-to-br group-hover:from-[hsl(262,83%,58%)]/15 group-hover:to-[hsl(38,92%,55%)]/15 flex items-center justify-center mb-4 transition-colors">
              <item.icon className="w-5 h-5 text-foreground" />
            </div>
            <h3 className="text-lg font-bold mb-2">{item.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IntroSection;
