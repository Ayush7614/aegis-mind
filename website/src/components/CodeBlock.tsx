import { useState } from "react";

export default function CodeBlock({
  code,
  lang = "bash",
  title,
}: {
  code: string;
  lang?: string;
  title?: string;
}) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* noop */
    }
  };

  return (
    <div className="group my-6 overflow-hidden rounded-xl border border-line bg-[#070a12]">
      <div className="flex items-center justify-between border-b border-line/80 bg-white/[0.02] px-4 py-2.5">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-blood/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-neon/70" />
          <span className="ml-2 font-mono text-[11px] uppercase tracking-wider text-slate-500">
            {title ?? lang}
          </span>
        </div>
        <button
          onClick={copy}
          className="rounded-md border border-line px-2.5 py-1 font-mono text-[11px] text-slate-400 transition-colors hover:border-neon/50 hover:text-neon"
        >
          {copied ? "✓ copied" : "copy"}
        </button>
      </div>
      <pre className="overflow-x-auto p-4 font-mono text-[13px] leading-relaxed text-slate-200">
        <code>{code}</code>
      </pre>
    </div>
  );
}
