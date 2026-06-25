export default function TerminalDemo({
  src,
  title = "aegis@vault: ~/spring-app",
  caption,
}: {
  src: string;
  title?: string;
  caption?: string;
}) {
  const base = import.meta.env.BASE_URL;
  return (
    <figure className="my-7">
      <div className="glow-ring overflow-hidden rounded-xl border border-line bg-[#060912]">
        <div className="flex items-center justify-between border-b border-line/80 bg-white/[0.02] px-4 py-2.5">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-blood/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-neon/70" />
            <span className="ml-2 font-mono text-[11px] text-slate-500">{title}</span>
          </div>
          <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-neon/80">
            <span className="h-1.5 w-1.5 animate-pulse-slow rounded-full bg-neon shadow-[0_0_8px_#00ff9c]" />
            live demo
          </span>
        </div>
        <img
          src={`${base}${src}`}
          alt={caption ?? title}
          loading="lazy"
          className="block w-full"
        />
      </div>
      {caption && (
        <figcaption className="mt-2.5 text-center font-mono text-xs text-slate-500">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
