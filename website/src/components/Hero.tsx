import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const lines = [
  { p: "$", c: "aegis recon --target self", t: "cmd" },
  { p: ">", c: "loading offensive playbooks ........ ok", t: "ok" },
  { p: ">", c: "loading ai-security red-team kit .... ok", t: "ok" },
  { p: ">", c: "indexing 6 domains, 24 tracks ...... ok", t: "ok" },
  { p: "$", c: "aegis open --section opentaint-guide", t: "cmd" },
  { p: ">", c: "mind sharpened. shields up.", t: "neon" },
];

function useTypewriter(words: string[], speed = 90) {
  const [i, setI] = useState(0);
  const [sub, setSub] = useState(0);
  const [del, setDel] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    const word = words[i % words.length];
    if (!del && sub === word.length) {
      const to = setTimeout(() => setDel(true), 1400);
      return () => clearTimeout(to);
    }
    if (del && sub === 0) {
      setDel(false);
      setI((x) => x + 1);
      return;
    }
    const to = setTimeout(() => {
      setSub((s) => s + (del ? -1 : 1));
      setText(word.slice(0, sub + (del ? -1 : 1)));
    }, del ? 45 : speed);
    return () => clearTimeout(to);
  }, [sub, del, i, words, speed]);

  return text;
}

export default function Hero() {
  const word = useTypewriter([
    "red teamers",
    "AppSec engineers",
    "AI builders",
    "bug hunters",
  ]);

  return (
    <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-[1.1fr_1fr]">
        {/* Left */}
        <div className="reveal">
          <div className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-3.5 py-1.5">
            <span className="h-2 w-2 animate-pulse-slow rounded-full bg-neon shadow-[0_0_12px_#00ff9c]" />
            <span className="font-mono text-xs tracking-wide text-slate-300">
              v1.0 · learning in public
            </span>
          </div>

          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Forge your
            <br />
            <span className="gradient-text animate-gradient text-glow">
              security mind.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300/90">
            AegisMind is an open, version-controlled vault for{" "}
            <span className="font-mono text-cyber">{word}</span>
            <span className="cursor-blink" />
            <br className="hidden sm:block" />
            Cybersecurity, AI/LLM security, offensive tooling, agent stacks, and
            Anthropic-style skills — curated in the open.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              to="/blog/opentaint-complete-guide"
              className="btn-neon px-6 py-3.5 font-mono text-sm font-semibold"
            >
              Read the OpenTaint guide →
            </Link>
            <Link
              to="/#tracks"
              className="btn-ghost px-6 py-3.5 font-mono text-sm text-slate-200"
            >
              Explore tracks
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
            {[
              ["6", "domains"],
              ["4", "learning tracks"],
              ["∞", "shared in the open"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="font-mono text-2xl font-bold text-white">{n}</div>
                <div className="text-xs uppercase tracking-widest text-slate-500">
                  {l}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — terminal */}
        <div className="reveal" style={{ animationDelay: "150ms" }}>
          <div className="panel glow-ring relative overflow-hidden p-0">
            <div className="scanline" />
            <div className="flex items-center gap-2 border-b border-line/80 bg-white/[0.02] px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-blood/80" />
              <span className="h-3 w-3 rounded-full bg-amber/80" />
              <span className="h-3 w-3 rounded-full bg-neon/80" />
              <span className="ml-3 font-mono text-xs text-slate-400">
                aegis@vault: ~/mind
              </span>
            </div>
            <div className="space-y-2 p-5 font-mono text-[13px] leading-relaxed sm:text-sm">
              {lines.map((l, idx) => (
                <div
                  key={idx}
                  className="reveal flex gap-2"
                  style={{ animationDelay: `${400 + idx * 320}ms` }}
                >
                  <span
                    className={
                      l.p === "$" ? "text-cyber" : "text-slate-600"
                    }
                  >
                    {l.p}
                  </span>
                  <span
                    className={
                      l.t === "neon"
                        ? "text-neon text-glow"
                        : l.t === "ok"
                        ? "text-slate-300"
                        : "text-white"
                    }
                  >
                    {l.c}
                    {l.t === "ok" && (
                      <span className="ml-1 text-neon">✓</span>
                    )}
                  </span>
                </div>
              ))}
              <div className="flex gap-2 pt-1">
                <span className="text-cyber">$</span>
                <span className="cursor-blink text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
