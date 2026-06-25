const styles: Record<string, { border: string; icon: string; label: string; color: string }> = {
  info: { border: "border-cyber/40", icon: "ℹ", label: "Note", color: "text-cyber" },
  tip: { border: "border-neon/40", icon: "✦", label: "Tip", color: "text-neon" },
  warn: { border: "border-amber/40", icon: "⚠", label: "Heads up", color: "text-amber" },
  danger: { border: "border-blood/40", icon: "☠", label: "Caution", color: "text-blood" },
};

export default function Callout({
  type = "info",
  title,
  children,
}: {
  type?: keyof typeof styles;
  title?: string;
  children: React.ReactNode;
}) {
  const s = styles[type];
  return (
    <div className={`my-6 rounded-xl border ${s.border} bg-white/[0.02] p-5`}>
      <div className={`flex items-center gap-2 font-mono text-sm font-semibold ${s.color}`}>
        <span>{s.icon}</span>
        <span>{title ?? s.label}</span>
      </div>
      <div className="mt-2 text-sm leading-relaxed text-slate-300">{children}</div>
    </div>
  );
}
