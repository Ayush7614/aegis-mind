import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "./Logo";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/#tracks", label: "Tracks" },
  { to: "/#vault", label: "Vault" },
  { to: "/blog", label: "Blog" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line/80 bg-base/80 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5">
        <Link to="/" className="group flex items-center gap-2.5">
          <Logo className="h-9 w-9 transition-transform duration-300 group-hover:rotate-[18deg]" />
          <div className="leading-none">
            <span className="font-mono text-lg font-extrabold tracking-tight text-white">
              Aegis<span className="gradient-text">Mind</span>
            </span>
            <span className="block text-[10px] uppercase tracking-[0.32em] text-cyber/70">
              security vault
            </span>
          </div>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <NavItem key={l.to} to={l.to} end={l.end}>
              {l.label}
            </NavItem>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="https://github.com/Ayush7614/aegis-mind"
            target="_blank"
            rel="noreferrer"
            className="btn-neon px-4 py-2 font-mono text-sm font-semibold"
          >
            ★ Star on GitHub
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="btn-ghost flex h-10 w-10 items-center justify-center md:hidden"
        >
          <div className="space-y-1.5">
            <span
              className={`block h-0.5 w-5 bg-white transition-transform ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span className={`block h-0.5 w-5 bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
            <span
              className={`block h-0.5 w-5 bg-white transition-transform ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {open && (
        <div className="border-t border-line/70 bg-base/95 px-5 py-4 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <NavItem key={l.to} to={l.to} end={l.end}>
                {l.label}
              </NavItem>
            ))}
            <a
              href="https://github.com/Ayush7614/aegis-mind"
              target="_blank"
              rel="noreferrer"
              className="btn-neon mt-2 px-4 py-2.5 text-center font-mono text-sm font-semibold"
            >
              ★ Star on GitHub
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function NavItem({
  to,
  end,
  children,
}: {
  to: string;
  end?: boolean;
  children: React.ReactNode;
}) {
  const isHash = to.includes("#");
  if (isHash) {
    return (
      <Link
        to={to}
        className="rounded-lg px-3.5 py-2 font-mono text-sm text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
      >
        {children}
      </Link>
    );
  }
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        `rounded-lg px-3.5 py-2 font-mono text-sm transition-colors hover:bg-white/5 hover:text-white ${
          isActive ? "text-neon text-glow" : "text-slate-300"
        }`
      }
    >
      {children}
    </NavLink>
  );
}
