import Header from "@/components/Header";
import { Mail, Download, MapPin, Briefcase, GraduationCap, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import koteshwarImg from "@/assets/koteshwar.png";

const About = () => {
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero with photo */}
        <div className="mb-20 flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-3xl overflow-hidden flex-shrink-0 animate-scale-in shadow-2xl shadow-[hsl(var(--shadow-soft)/0.2)]">
            <img src={koteshwarImg} alt="Chinnolla Koteshwar" className="w-full h-full object-cover object-top" />
          </div>
          <div className="text-center md:text-left space-y-4 animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              About <span className="bg-gradient-to-r from-[hsl(262,83%,58%)] via-[hsl(292,84%,61%)] to-[hsl(38,97%,64%)] bg-clip-text text-transparent">Koteshwar</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Associate Software Engineer building intelligent, scalable systems — from cloud infrastructure to autonomous AI agents.
            </p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start pt-2">
              <span className="flex items-center gap-1.5 text-sm text-muted-foreground"><MapPin className="w-4 h-4" /> Hyderabad, India</span>
              <span className="flex items-center gap-1.5 text-sm text-muted-foreground"><Briefcase className="w-4 h-4" /> Anasol Consultancy</span>
            </div>
          </div>
        </div>

        {/* Story */}
        <section className="mb-16 animate-slide-up stagger-2">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-5 text-muted-foreground">
              <h2 className="text-3xl font-bold text-foreground">My Journey</h2>
              <p>
                I'm Chinnolla Koteshwar, an Associate Software Engineer at Anasol Consultancy Services.
                I hold a B.Tech in Electronics and Communication Engineering from Gokaraju Rangaraju Institute
                of Engineering and Technology (CGPA: 8.39, graduated May 2025).
              </p>
              <p>
                My work spans production-grade ERP systems, job recommendation platforms, and cutting-edge AI projects.
                I'm particularly passionate about Agentic AI — building autonomous systems that can understand natural language,
                plan tasks, and execute complex workflows.
              </p>
              <p>
                I've published an IEEE research paper on "Natural Language Based Autonomous Navigation Vehicle" and actively
                maintain open-source Helm charts and Terraform modules used by teams worldwide.
              </p>
            </div>
            <div className="space-y-4">
              <div className="rounded-2xl bg-card p-6 text-center card-hover">
                <p className="text-4xl font-bold bg-gradient-to-r from-[hsl(262,83%,58%)] to-[hsl(292,84%,61%)] bg-clip-text text-transparent">8.39</p>
                <p className="text-sm text-muted-foreground mt-1">CGPA at GRIET</p>
              </div>
              <div className="rounded-2xl bg-card p-6 text-center card-hover">
                <p className="text-4xl font-bold bg-gradient-to-r from-[hsl(292,84%,61%)] to-[hsl(38,97%,64%)] bg-clip-text text-transparent">988</p>
                <p className="text-sm text-muted-foreground mt-1">/ 1000 in Intermediate</p>
              </div>
              <div className="rounded-2xl bg-card p-6 text-center card-hover">
                <p className="text-4xl font-bold bg-gradient-to-r from-[hsl(38,97%,64%)] to-[hsl(262,83%,58%)] bg-clip-text text-transparent">IEEE</p>
                <p className="text-sm text-muted-foreground mt-1">Published Researcher</p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-16 rounded-2xl bg-card p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-8">Technical Skills</h2>
          <div className="space-y-8">
            {[
              { label: "Languages", items: ["Java", "Python", "C++", "Go", "HCL"] },
              { label: "Technologies", items: ["Machine Learning", "Deep Learning", "Agentic AI", "Computer Vision", "Kubernetes", "CI/CD", "Terraform", "Helm", "Spring Boot"] },
              { label: "Tools & Platforms", items: ["AWS", "TensorFlow", "PyTorch", "OpenCV", "LangChain", "LangGraph", "Docker", "Raspberry Pi", "Istio", "Kafka", "Redis", "GitHub Actions"] },
            ].map((group) => (
              <div key={group.label}>
                <h3 className="font-semibold mb-3 text-muted-foreground text-sm tracking-wider uppercase">{group.label}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((s) => (
                    <span key={s} className="px-4 py-2 rounded-full bg-muted text-sm font-medium hover:bg-muted/80 transition-colors cursor-default">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Positions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Roles & Mentorship</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-card card-hover flex gap-5">
              <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">Backend & DevOps Lead</h3>
                <p className="text-muted-foreground text-sm mb-1">Junior Developers • April 2025</p>
                <p className="text-muted-foreground text-sm">Led backend and DevOps initiatives for junior developer teams.</p>
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-card card-hover flex gap-5">
              <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">Mentor</h3>
                <p className="text-muted-foreground text-sm mb-1">Advance Academic Center (AAC) • March 2023</p>
                <p className="text-muted-foreground text-sm">Mentored students in advanced programming and engineering concepts.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-16 rounded-[2rem] bg-gradient-to-br from-card to-muted">
          <GraduationCap className="w-12 h-12 mx-auto mb-6 text-muted-foreground" />
          <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Interested in collaborating or want to discuss technology? Reach out anytime!
          </p>
          <a href="mailto:chinnollakoteshwar@gmail.com">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-base hover:scale-105 transition-all">
              <Mail className="mr-2 h-5 w-5" />
              Get in Touch
            </Button>
          </a>
        </section>
      </main>
    </div>
  );
};

export default About;
