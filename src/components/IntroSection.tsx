import { Bot, MessagesSquare, Brain, Cpu, Eye, Compass } from "lucide-react";

const interests = [
  {
    icon: Bot,
    title: "Autonomous Robotics",
    description:
      "Building robots that perceive, plan, and act in the real world — ROS, A* planning, OpenCV, and edge deployment on Raspberry Pi.",
  },
  {
    icon: MessagesSquare,
    title: "Natural Language Systems",
    description:
      "Bridging human language and machine execution — LLM tool-calling, agentic planning with LangChain & LangGraph, and structured output reliability.",
  },
  {
    icon: Brain,
    title: "Reinforcement Learning",
    description:
      "Studying how agents can learn from feedback and self-correct — applied to structured generation in agentic systems and world models.",
  },
  {
    icon: Cpu,
    title: "Intelligent Agents",
    description:
      "Designing deep agents and subagents that reason about intent, fetch context via RAG, and orchestrate multi-step workflows end to end.",
  },
  {
    icon: Eye,
    title: "Computer Vision",
    description:
      "Image processing, object detection (YOLOv8), and real-time perception pipelines — connecting what a system sees to what it decides.",
  },
  {
    icon: Compass,
    title: "Autonomous Systems",
    description:
      "Combining perception, planning, and language to build systems that operate independently — from indoor navigation to API orchestration.",
  },
];

const IntroSection = () => {
  return (
    <section className="max-w-6xl mx-auto py-12 md:py-16 px-4 animate-fade-in">
      <div className="text-center space-y-5 mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card/50 text-xs tracking-[0.2em] uppercase text-muted-foreground">
          <span className="w-1.5 h-1.5 rounded-full bg-[hsl(38,92%,55%)]" />
          Research Interests
        </div>
        <h2 className="text-3xl md:text-4xl font-bold leading-tight max-w-3xl mx-auto animate-slide-up">
          Where my curiosity lives — and what I want to push forward.
        </h2>
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto animate-slide-up stagger-1">
          Six interconnected areas at the intersection of language, perception, and autonomy — the foundation for graduate research in agentic and autonomous AI.
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
