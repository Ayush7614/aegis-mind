import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import { posts } from "../data/posts";

const accentText: Record<string, string> = {
  neon: "text-neon",
  cyber: "text-cyber",
  violet: "text-violet",
  blood: "text-blood",
};

export default function Blog() {
  return (
    <div className="mx-auto max-w-7xl px-5 pt-32 pb-10 sm:pt-40">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyber/70">
          // the aegismind blog
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Field notes &amp; <span className="gradient-text">deep dives</span>
        </h1>
        <p className="mt-4 max-w-2xl text-slate-400">
          Long-form, reproducible guides on security tooling, AI red teaming, and
          the workflows that scale. No fluff — built to be run.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {posts.map((p, i) => (
          <Reveal key={p.slug} delay={i * 90}>
            <Link
              to={`/blog/${p.slug}`}
              className="panel card-hover group flex h-full flex-col p-7"
            >
              <div className="flex flex-wrap items-center gap-2">
                {p.featured && (
                  <span className="chip px-3 py-1 font-mono text-[11px] text-neon">
                    ★ Featured
                  </span>
                )}
                <span className={`chip px-3 py-1 font-mono text-[11px] ${accentText[p.accent]}`}>
                  {p.category}
                </span>
                <span className="font-mono text-xs text-slate-500">
                  {new Date(p.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}{" "}
                  · {p.readingTime}
                </span>
              </div>
              <h2 className="mt-5 text-2xl font-bold leading-snug text-white group-hover:text-neon">
                {p.title}
              </h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
                {p.excerpt}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {p.tags.slice(0, 5).map((t) => (
                  <span key={t} className="chip px-2.5 py-1 font-mono text-[10px] text-slate-400">
                    #{t}
                  </span>
                ))}
              </div>
              <span className="mt-6 inline-flex items-center gap-2 font-mono text-sm font-semibold text-neon">
                Read post
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
