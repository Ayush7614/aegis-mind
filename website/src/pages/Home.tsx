import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Reveal from "../components/Reveal";
import { posts } from "../data/posts";

const marquee = [
  "Burp Suite", "ffuf", "nuclei", "Semgrep", "CodeQL", "OpenTaint", "Promptfoo",
  "Deepteam", "MCP", "RAG", "Spring", "Java", "Ghidra", "Frida", "OWASP",
  "Metasploit", "Cursor Skills", "RuntimeWall",
];

const features = [
  {
    icon: "◉",
    title: "Inter-procedural depth",
    body: "Notes and tooling that track data flow across functions, persistence layers, and async code — not just syntax patterns.",
    accent: "text-neon",
  },
  {
    icon: "⚡",
    title: "AI-era workflows",
    body: "Agent skills, MCP patterns, and LLM red-team playbooks that turn a single finding into reusable, deterministic rules.",
    accent: "text-cyber",
  },
  {
    icon: "🛡",
    title: "Offensive + defensive",
    body: "From recon and exploitation to guardrails and runtime governance — both sides of the engagement, in one vault.",
    accent: "text-violet",
  },
  {
    icon: "❯",
    title: "Reproducible, copy-paste",
    body: "Every note follows Goal → Prereqs → Steps → Validation → References → My notes. Built to actually be run.",
    accent: "text-amber",
  },
];

const tracks = [
  {
    n: "01",
    title: "Cybersecurity foundations",
    flow: "Recon → Web/API → Cloud → Bug Bounty → Reporting",
    href: "https://github.com/Ayush7614/aegis-mind/tree/main/cybersecurity",
    accent: "neon",
  },
  {
    n: "02",
    title: "AI security",
    flow: "Threat model → Red team LLMs → Guardrails → Runtime governance",
    href: "https://github.com/Ayush7614/aegis-mind/tree/main/ai-security",
    accent: "cyber",
  },
  {
    n: "03",
    title: "Build + secure agents",
    flow: "Local LLMs → Agents & MCP → Eval with Promptfoo → Ship",
    href: "https://github.com/Ayush7614/aegis-mind/tree/main/ai-tools",
    accent: "violet",
  },
  {
    n: "04",
    title: "Anthropic-style skills",
    flow: "Skill anatomy → Security skills → MCP design → Orchestration",
    href: "https://github.com/Ayush7614/aegis-mind/tree/main/anthropic-skills",
    accent: "blood",
  },
];

const vault = [
  { title: "Cybersecurity", desc: "Recon, web vulns, cloud, bug bounty, red team", tag: "5 sections", href: "https://github.com/Ayush7614/aegis-mind/tree/main/cybersecurity" },
  { title: "AI Security", desc: "LLM red teaming, prompt injection, ASI framework", tag: "5 sections", href: "https://github.com/Ayush7614/aegis-mind/tree/main/ai-security" },
  { title: "AI Tools", desc: "LLMs, agents, MCP, RAG, local stacks", tag: "4 sections", href: "https://github.com/Ayush7614/aegis-mind/tree/main/ai-tools" },
  { title: "AI Security Tools", desc: "Promptfoo, Deepteam, guardrails, eval harnesses", tag: "3 sections", href: "https://github.com/Ayush7614/aegis-mind/tree/main/ai-security-tools" },
  { title: "Anthropic Skills", desc: "Agent skills, security patterns, MCP workflows", tag: "4 sections", href: "https://github.com/Ayush7614/aegis-mind/tree/main/anthropic-skills" },
  { title: "Resources", desc: "Books, courses, reports, wordlists, templates", tag: "4 sections", href: "https://github.com/Ayush7614/aegis-mind/tree/main/resources" },
];

const accentMap: Record<string, string> = {
  neon: "text-neon border-neon/40",
  cyber: "text-cyber border-cyber/40",
  violet: "text-violet border-violet/40",
  blood: "text-blood border-blood/40",
};

export default function Home() {
  const featured = posts.find((p) => p.featured) ?? posts[0];

  return (
    <>
      <Hero />

      {/* Marquee */}
      <div className="relative my-6 overflow-hidden border-y border-line/60 bg-base-2/40 py-4">
        <div className="flex w-max animate-marquee gap-10 pr-10">
          {[...marquee, ...marquee].map((m, i) => (
            <span
              key={i}
              className="flex items-center gap-3 font-mono text-sm text-slate-500"
            >
              <span className="text-neon/60">▹</span>
              {m}
            </span>
          ))}
        </div>
      </div>

      {/* Why */}
      <Section id="why" eyebrow="// why aegismind" title="Depth of an agent, cost of a static analyzer">
        <div className="grid gap-5 sm:grid-cols-2">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 90}>
              <div className="panel card-hover h-full p-6">
                <div className={`text-2xl ${f.accent}`}>{f.icon}</div>
                <h3 className="mt-4 text-xl font-semibold text-white">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{f.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Tracks */}
      <Section id="tracks" eyebrow="// learning tracks" title="Pick a path — or mix them">
        <div className="grid gap-5 md:grid-cols-2">
          {tracks.map((t, i) => (
            <Reveal key={t.n} delay={i * 90}>
              <a
                href={t.href}
                target="_blank"
                rel="noreferrer"
                className="panel card-hover group flex h-full flex-col p-6"
              >
                <div className="flex items-center justify-between">
                  <span className={`font-mono text-4xl font-extrabold ${accentMap[t.accent].split(" ")[0]} opacity-80`}>
                    {t.n}
                  </span>
                  <span className="font-mono text-xs text-slate-500 transition-transform group-hover:translate-x-1">
                    open ↗
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">{t.title}</h3>
                <code className="mt-3 block rounded-lg border border-line/70 bg-black/30 px-3 py-2 font-mono text-xs text-slate-400">
                  {t.flow}
                </code>
              </a>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Vault map */}
      <Section id="vault" eyebrow="// repository map" title="Inside the vault">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {vault.map((v, i) => (
            <Reveal key={v.title} delay={i * 70}>
              <a
                href={v.href}
                target="_blank"
                rel="noreferrer"
                className="panel card-hover group flex h-full flex-col p-6"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-mono text-lg font-semibold text-white group-hover:text-neon">
                    {v.title}
                  </h3>
                  <span className="chip px-2.5 py-1 font-mono text-[10px] text-slate-400">
                    {v.tag}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{v.desc}</p>
                <span className="mt-4 font-mono text-xs text-cyber/70 transition-transform group-hover:translate-x-1">
                  cd ./{v.title.toLowerCase().replace(/ /g, "-")} →
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Featured post */}
      <Section id="featured" eyebrow="// from the blog" title="Deep dives & field notes">
        <Reveal>
          <Link
            to={`/blog/${featured.slug}`}
            className="panel glow-ring card-hover group block overflow-hidden"
          >
            <div className="grid md:grid-cols-[1.5fr_1fr]">
              <div className="p-7 sm:p-9">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="chip px-3 py-1 font-mono text-[11px] text-neon">
                    ★ Featured
                  </span>
                  <span className="chip px-3 py-1 font-mono text-[11px] text-slate-400">
                    {featured.category}
                  </span>
                  <span className="font-mono text-xs text-slate-500">
                    {featured.readingTime}
                  </span>
                </div>
                <h3 className="mt-5 text-2xl font-bold leading-snug text-white group-hover:text-neon sm:text-3xl">
                  {featured.title}
                </h3>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-400">
                  {featured.excerpt}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {featured.tags.map((t) => (
                    <span key={t} className="chip px-2.5 py-1 font-mono text-[10px] text-slate-400">
                      #{t}
                    </span>
                  ))}
                </div>
                <span className="mt-7 inline-flex items-center gap-2 font-mono text-sm font-semibold text-neon">
                  Read the full guide
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </span>
              </div>
              <div className="relative hidden items-center justify-center border-l border-line/70 bg-[radial-gradient(circle_at_center,rgba(0,255,156,0.12),transparent_70%)] md:flex">
                <div className="scanline" />
                <pre className="font-mono text-[11px] leading-relaxed text-slate-500">
{`source(req.getParameter)
   │  taint ▒▒▒▒
   ▼
service.process()
   │  taint ▒▒▒▒
   ▼
repo.rawQuery() ⚠
   └─ SQL INJECTION`}
                </pre>
              </div>
            </div>
          </Link>
        </Reveal>
        <div className="mt-6 text-center">
          <Link to="/blog" className="btn-ghost inline-block px-5 py-2.5 font-mono text-sm">
            View all posts →
          </Link>
        </div>
      </Section>

      {/* CTA */}
      <Section id="cta" eyebrow="// contribute" title="">
        <Reveal>
          <div className="panel relative overflow-hidden p-8 text-center sm:p-12">
            <div className="absolute inset-0 bg-grid opacity-30" />
            <div className="relative">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Everything here is <span className="gradient-text">learned in public</span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-slate-400">
                Pull requests and issues welcome. Fork the vault, add your notes,
                and help build the open security knowledge base for the AI era.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  href="https://github.com/Ayush7614/aegis-mind"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-neon px-6 py-3.5 font-mono text-sm font-semibold"
                >
                  ★ Star the repo
                </a>
                <a
                  href="https://github.com/Ayush7614/aegis-mind/blob/main/docs/CONTRIBUTING.md"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost px-6 py-3.5 font-mono text-sm"
                >
                  Read contributing guide
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-7xl px-5 py-16 sm:py-20">
      <div className="mb-9">
        <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyber/70">
          {eyebrow}
        </p>
        {title && (
          <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
        )}
      </div>
      {children}
    </section>
  );
}
