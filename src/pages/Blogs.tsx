import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, BookOpen, Clock, ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import { blogs } from "@/data/blogs";

const Blogs = () => {
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to home
        </Link>

        {/* Hero */}
        <section className="mb-14 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card/50 text-xs tracking-[0.2em] uppercase text-muted-foreground mb-5">
            <BookOpen className="w-3.5 h-3.5 text-[hsl(38,92%,55%)]" />
            Writing
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] max-w-4xl">
            Notes from the{" "}
            <span className="bg-gradient-to-r from-[hsl(262,83%,58%)] via-[hsl(292,84%,61%)] to-[hsl(38,97%,64%)] bg-clip-text text-transparent italic font-serif">
              build floor
            </span>
            .
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Long-form notes on agentic AI, distributed systems and the engineering decisions behind them. Fresh posts dropping soon — bookmark and come back.
          </p>
        </section>

        {/* Blog grid */}
        <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {blogs.map((b, i) => {
            const inner = (
              <>
              {/* Cover */}
              <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-[hsl(262,60%,18%)] via-[hsl(220,30%,12%)] to-[hsl(38,60%,20%)]">
                <div className="absolute inset-0 opacity-30 mix-blend-overlay bg-[radial-gradient(circle_at_30%_20%,white,transparent_60%)]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-serif text-7xl font-bold text-white/15 group-hover:text-white/25 transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white text-xs font-medium">
                    {b.category}
                  </span>
                </div>
                {b.status === "external" && (
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white text-[10px] font-bold tracking-wider uppercase">
                      <ExternalLink className="w-3 h-3" /> dev.to
                    </span>
                  </div>
                )}
                {/* TODO[image]: drop the original cover into src/assets/blogs/{b.coverNote} and render it here */}
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col">
                <h2 className="text-xl font-bold leading-snug tracking-tight group-hover:text-[hsl(38,92%,55%)] transition-colors">
                  {b.title}
                </h2>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-1">
                  {b.excerpt}
                </p>
                <div className="mt-5 flex items-center justify-between pt-4 border-t border-border">
                  <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Clock className="w-3.5 h-3.5" />
                    {b.readTime}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground/70">
                    {b.status === "external" ? "Read on dev.to" : "Read post"}
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:rotate-45 transition-transform" />
                  </span>
                </div>
              </div>
              </>
            );
            const className =
              "group relative rounded-3xl border border-border bg-card overflow-hidden hover:border-[hsl(262,83%,58%)]/40 transition-all card-hover flex flex-col";
            return b.status === "external" && b.externalUrl ? (
              <a key={b.slug} href={b.externalUrl} target="_blank" rel="noreferrer" className={className}>
                {inner}
              </a>
            ) : (
              <Link key={b.slug} to={`/blogs/${b.slug}`} className={className}>
                {inner}
              </Link>
            );
          })}
        </section>

        {/* Newsletter / CTA */}
        <section className="mt-20 rounded-[2rem] bg-gradient-to-br from-[hsl(262,60%,12%)] via-[hsl(220,30%,8%)] to-[hsl(220,30%,8%)] text-white p-10 md:p-14 text-center relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[hsl(38,92%,55%)]/20 blur-3xl" />
          <div className="relative max-w-2xl mx-auto space-y-5">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Want to know when posts drop?</h2>
            <p className="text-white/70 leading-relaxed">
              Reach out and I'll add you to the list — no spam, just thoughtful writing on AI and distributed systems.
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

export default Blogs;