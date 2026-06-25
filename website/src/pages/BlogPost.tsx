import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getPost } from "../data/posts";
import { openTaintToc, OpenTaintGuide } from "../posts/openTaintGuide";
import NotFound from "./NotFound";

const registry: Record<
  string,
  { toc: { id: string; label: string }[]; Content: () => JSX.Element }
> = {
  "opentaint-complete-guide": { toc: openTaintToc, Content: OpenTaintGuide },
};

export default function BlogPost() {
  const { slug = "" } = useParams();
  const post = getPost(slug);
  const entry = registry[slug];
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState(entry?.toc[0]?.id ?? "");

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? (scrolled / max) * 100 : 0);

      if (!entry) return;
      let current = entry.toc[0]?.id ?? "";
      for (const item of entry.toc) {
        const el = document.getElementById(item.id);
        if (el && el.getBoundingClientRect().top <= 140) current = item.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [entry]);

  if (!post || !entry) return <NotFound />;

  const { Content, toc } = entry;

  return (
    <div className="relative">
      {/* reading progress */}
      <div className="fixed inset-x-0 top-0 z-[60] h-0.5 bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-neon via-cyber to-violet transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* header */}
      <header className="relative overflow-hidden border-b border-line/70 pt-32 pb-12 sm:pt-40">
        <div className="absolute inset-0 bg-grid bg-radial-fade opacity-40" />
        <div className="relative mx-auto max-w-4xl px-5">
          <Link
            to="/blog"
            className="font-mono text-xs text-slate-400 transition-colors hover:text-neon"
          >
            ← back to blog
          </Link>
          <div className="mt-5 flex flex-wrap items-center gap-2">
            <span className="chip px-3 py-1 font-mono text-[11px] text-neon">
              {post.category}
            </span>
            <span className="font-mono text-xs text-slate-500">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}{" "}
              · {post.readingTime}
            </span>
          </div>
          <h1 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-400">{post.subtitle}</p>
          <div className="mt-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-neon/40 bg-neon/10 font-mono text-sm font-bold text-neon">
              AK
            </div>
            <div className="leading-tight">
              <div className="font-mono text-sm text-white">Ayush Kumar</div>
              <div className="font-mono text-xs text-slate-500">
                DevRel · Open Source · Community · AI Security
              </div>
            </div>
          </div>

          {post.poster && (
            <figure className="mt-10">
              <div className="glow-ring overflow-hidden rounded-2xl border border-line bg-[#060912]">
                <img
                  src={`${import.meta.env.BASE_URL}${post.poster}`}
                  alt={post.title}
                  className="block w-full"
                />
              </div>
            </figure>
          )}
        </div>
      </header>

      {/* body */}
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 lg:grid-cols-[220px_1fr]">
        {/* TOC */}
        <aside className="hidden lg:block">
          <div className="sticky top-28">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-cyber/70">
              on this page
            </p>
            <nav className="mt-4 space-y-1 border-l border-line">
              {toc.map((t) => (
                <a
                  key={t.id}
                  href={`#${t.id}`}
                  className={`-ml-px block border-l-2 py-1.5 pl-3 font-mono text-xs transition-colors ${
                    active === t.id
                      ? "border-neon text-neon"
                      : "border-transparent text-slate-500 hover:text-slate-300"
                  }`}
                >
                  {t.label}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* article */}
        <div className="min-w-0 max-w-3xl">
          <Content />

          {/* footer CTA */}
          <div className="panel mt-14 p-7 text-center">
            <h3 className="text-xl font-bold text-white">
              Found this useful?
            </h3>
            <p className="mx-auto mt-2 max-w-md text-sm text-slate-400">
              AegisMind is built in the open. Star the repo, fork the vault, and
              add your own field notes.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a
                href="https://github.com/Ayush7614/aegis-mind"
                target="_blank"
                rel="noreferrer"
                className="btn-neon px-5 py-2.5 font-mono text-sm font-semibold"
              >
                ★ Star on GitHub
              </a>
              <Link to="/blog" className="btn-ghost px-5 py-2.5 font-mono text-sm">
                More posts →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
