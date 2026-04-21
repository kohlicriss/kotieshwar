import Header from "@/components/Header";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowLeft, ExternalLink, Sparkles } from "lucide-react";
import { articles } from "@/data/articles";

const Projects = () => {
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        {/* Back link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to home
        </Link>

        {/* HERO */}
        <section className="mb-14 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card/50 text-xs tracking-[0.2em] uppercase text-muted-foreground mb-5">
            <Sparkles className="w-3.5 h-3.5 text-[hsl(38,92%,55%)]" />
            Selected Work
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] max-w-4xl">
            Projects, with the{" "}
            <span className="bg-gradient-to-r from-[hsl(262,83%,58%)] via-[hsl(292,84%,61%)] to-[hsl(38,97%,64%)] bg-clip-text text-transparent italic font-serif">
              motivation
            </span>{" "}
            behind them.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Five projects spanning agentic AI, robotics, cloud infrastructure, and computer vision —
            each driven by a real problem I couldn't stop thinking about. Click any card for the full story.
          </p>
        </section>

        {/* Project list */}
        <section className="space-y-8 md:space-y-10">
          {articles.map((p, i) => (
            <Link
              key={p.id}
              to={`/article/${p.id}`}
              className="group block rounded-3xl border border-border bg-card overflow-hidden hover:border-[hsl(262,83%,58%)]/40 transition-all card-hover"
            >
              <div className="grid md:grid-cols-[1.1fr_1.4fr] gap-0">
                {/* Image */}
                <div className="relative aspect-[16/10] md:aspect-auto md:min-h-[320px] overflow-hidden bg-muted">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                  <div className="absolute top-5 left-5 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white text-xs font-medium tracking-wide">
                      {p.category}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-white/90 text-xs font-medium">
                      {p.date}
                    </span>
                  </div>
                  <div className="absolute bottom-5 left-5 text-white/90 text-xs tracking-[0.25em] uppercase">
                    {String(i + 1).padStart(2, "0")} / {String(articles.length).padStart(2, "0")}
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 md:p-9 flex flex-col justify-between gap-6">
                  <div className="space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold leading-tight tracking-tight group-hover:text-[hsl(38,92%,55%)] transition-colors">
                      {p.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">{p.subtitle}</p>

                    <div className="rounded-2xl bg-muted/60 border border-border p-4 md:p-5">
                      <p className="text-xs tracking-[0.25em] uppercase text-[hsl(38,92%,55%)] font-semibold mb-2">
                        Why this project
                      </p>
                      <p className="text-sm text-foreground/85 leading-relaxed line-clamp-3">
                        {p.motivation}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-1">
                      {p.techStack.slice(0, 6).map((t) => (
                        <span key={t} className="px-3 py-1 rounded-full bg-background border border-border text-xs font-medium text-muted-foreground">
                          {t}
                        </span>
                      ))}
                      {p.techStack.length > 6 && (
                        <span className="px-3 py-1 rounded-full text-xs text-muted-foreground">
                          +{p.techStack.length - 6} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-3">
                      {p.links?.slice(0, 2).map((l) => (
                        <span
                          key={l.url}
                          className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          {l.label}
                        </span>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-foreground group-hover:text-[hsl(38,92%,55%)] transition-colors">
                      Read the story
                      <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </section>

        {/* CTA */}
        <section className="mt-20 rounded-[2rem] bg-gradient-to-br from-[hsl(262,60%,12%)] via-[hsl(220,30%,8%)] to-[hsl(220,30%,8%)] text-white p-10 md:p-14 text-center relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[hsl(38,92%,55%)]/20 blur-3xl" />
          <div className="relative max-w-2xl mx-auto space-y-5">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Got a problem worth solving?</h2>
            <p className="text-white/70 leading-relaxed">
              I'm always up for a conversation about agentic AI, robotics, or cloud infrastructure.
            </p>
            <a
              href="mailto:chinnollakoteshwar@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[hsl(38,92%,55%)] text-[hsl(220,30%,8%)] font-semibold hover:bg-[hsl(38,92%,60%)] transition-all"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Projects;
