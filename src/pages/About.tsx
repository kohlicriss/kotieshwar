import Header from "@/components/Header";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero */}
        <div className="mb-16 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-slide-down">
            About Koteshwar
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed animate-slide-up stagger-1">
            Associate Software Engineer passionate about building scalable systems, Agentic AI, and open-source.
          </p>
        </div>

        {/* Story */}
        <section className="mb-16 space-y-6 text-muted-foreground animate-slide-up stagger-2">
          <h2 className="text-3xl font-bold text-foreground mb-6">My Journey</h2>
          <p>
            I'm Chinnolla Koteshwar, an Associate Software Engineer at Anasol Consultancy Services in Hyderabad, India.
            I hold a B.Tech in Electronics and Communication Engineering from Gokaraju Rangaraju Institute of Engineering 
            and Technology (CGPA: 8.39, graduated May 2025).
          </p>
          <p>
            My work spans production-grade ERP systems, job recommendation platforms, and cutting-edge AI projects. I'm 
            particularly passionate about Agentic AI — building autonomous systems that can understand natural language, 
            plan tasks, and execute complex workflows.
          </p>
          <p>
            I've published an IEEE research paper on "Natural Language Based Autonomous Navigation Vehicle" and actively 
            maintain open-source Helm charts and Terraform modules used by teams worldwide.
          </p>
        </section>

        {/* Skills */}
        <section className="mb-16 rounded-2xl bg-card p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-6">Technical Skills</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-3">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {["Java", "Python", "C++", "Go", "HCL"].map((s) => (
                  <span key={s} className="px-4 py-2 rounded-full bg-muted text-sm font-medium">{s}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {["Machine Learning", "Deep Learning", "Agentic AI", "Computer Vision", "Kubernetes", "CI/CD", "Terraform", "Helm", "Spring Boot"].map((s) => (
                  <span key={s} className="px-4 py-2 rounded-full bg-muted text-sm font-medium">{s}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Tools & Platforms</h3>
              <div className="flex flex-wrap gap-2">
                {["AWS", "TensorFlow", "PyTorch", "OpenCV", "LangChain", "LangGraph", "Docker", "Raspberry Pi", "Istio", "Kafka", "Redis", "GitHub Actions"].map((s) => (
                  <span key={s} className="px-4 py-2 rounded-full bg-muted text-sm font-medium">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Positions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Positions of Responsibility</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-muted">
              <h3 className="text-xl font-semibold mb-2">Backend & DevOps Lead</h3>
              <p className="text-muted-foreground text-sm mb-1">Junior Developers • April 2025</p>
              <p className="text-muted-foreground">Led backend and DevOps initiatives for junior developer teams.</p>
            </div>
            <div className="p-6 rounded-xl bg-muted">
              <h3 className="text-xl font-semibold mb-2">Mentor</h3>
              <p className="text-muted-foreground text-sm mb-1">Advance Academic Center (AAC) • March 2023</p>
              <p className="text-muted-foreground">Mentored students in advanced programming and engineering concepts.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-12 rounded-2xl bg-card">
          <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Interested in collaborating or want to discuss technology? Reach out!
          </p>
          <a href="mailto:chinnollakoteshwar@gmail.com">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8">
              <Mail className="mr-2 h-4 w-4" />
              Get in Touch
            </Button>
          </a>
        </section>
      </main>
    </div>
  );
};

export default About;
