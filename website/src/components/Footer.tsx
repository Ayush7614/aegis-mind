import { Link } from "react-router-dom";
import Logo from "./Logo";

const cols = [
  {
    title: "Vault",
    links: [
      { label: "Cybersecurity", href: "https://github.com/Ayush7614/aegis-mind/tree/main/cybersecurity" },
      { label: "AI Security", href: "https://github.com/Ayush7614/aegis-mind/tree/main/ai-security" },
      { label: "AI Tools", href: "https://github.com/Ayush7614/aegis-mind/tree/main/ai-tools" },
      { label: "Anthropic Skills", href: "https://github.com/Ayush7614/aegis-mind/tree/main/anthropic-skills" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "GitHub", href: "https://github.com/Ayush7614" },
      { label: "NeuralVerse Blog", href: "https://neural-verse-peach.vercel.app/" },
      { label: "Portfolio", href: "https://ayushbuilds-dev.vercel.app/" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/ayush-kumar-984443191/" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative z-10 mt-24 border-t border-line/70 bg-base-2/60">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Link to="/" className="flex items-center gap-2.5">
            <Logo className="h-9 w-9" />
            <span className="font-mono text-lg font-extrabold text-white">
              Aegis<span className="gradient-text">Mind</span>
            </span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
            Shield your stack · sharpen your mind · ship in the open. A living
            knowledge base for cybersecurity, AI security, and red-team craft.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {["Apache-2.0 + MIT", "Learn in public", "PRs welcome"].map((t) => (
              <span key={t} className="chip px-3 py-1 font-mono text-[11px] text-slate-300">
                {t}
              </span>
            ))}
          </div>
        </div>

        {cols.map((c) => (
          <div key={c.title}>
            <h4 className="font-mono text-xs uppercase tracking-[0.25em] text-cyber/80">
              {c.title}
            </h4>
            <ul className="mt-4 space-y-2.5">
              {c.links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-slate-400 transition-colors hover:text-neon"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-line/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-5 text-xs text-slate-500 sm:flex-row">
          <span className="font-mono">© 2026 Ayush Kumar · built with curiosity</span>
          <span className="font-mono">
            Never commit secrets, live creds, or client data.
          </span>
        </div>
      </div>
    </footer>
  );
}
