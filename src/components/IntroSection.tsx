import { Code2, Cloud, Brain, Wrench } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Backend Engineering",
    description: "Java, Python, Go, Spring Boot — building production-grade ERP systems and scalable services.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Kubernetes, Terraform, Docker, AWS Lambda, CI/CD pipelines, Helm charts, and infrastructure as code.",
  },
  {
    icon: Brain,
    title: "Agentic AI",
    description: "LangChain, LangGraph, RAG, Deep Agents — crafting voice-driven AI assistants and autonomous systems.",
  },
  {
    icon: Wrench,
    title: "Tools & Platforms",
    description: "Kafka, Redis, gRPC, GitHub Actions, Istio, Raspberry Pi, TensorFlow, PyTorch, OpenCV.",
  },
];

const IntroSection = () => {
  return (
    <section className="max-w-5xl mx-auto py-12 md:py-16 px-4 animate-fade-in">
      <div className="text-center space-y-6 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold leading-tight animate-slide-up">
          Engineering intelligent, scalable systems — from cloud infrastructure to autonomous AI agents.
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-slide-up stagger-1">
          B.Tech in ECE from GRIET (CGPA 8.39). Published IEEE researcher. Open-source contributor. 
          Mentor at Advance Academic Center.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-slide-up stagger-2">
        {skills.map((skill) => (
          <div
            key={skill.title}
            className="group p-6 rounded-2xl bg-card hover:bg-muted/80 transition-all duration-300 card-hover"
          >
            <div className="w-12 h-12 rounded-xl bg-muted group-hover:bg-background flex items-center justify-center mb-4 transition-colors">
              <skill.icon className="w-6 h-6 text-foreground" />
            </div>
            <h3 className="text-lg font-bold mb-2">{skill.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IntroSection;
