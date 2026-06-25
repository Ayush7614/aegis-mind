import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-5 text-center">
      <p className="font-mono text-7xl font-extrabold gradient-text-blood">404</p>
      <h1 className="mt-4 text-2xl font-bold text-white">Signal lost.</h1>
      <p className="mt-3 font-mono text-sm text-slate-400">
        $ aegis open --path "{location.hash || "unknown"}" → no such route
      </p>
      <Link to="/" className="btn-neon mt-8 px-6 py-3 font-mono text-sm font-semibold">
        ← Return to base
      </Link>
    </div>
  );
}
