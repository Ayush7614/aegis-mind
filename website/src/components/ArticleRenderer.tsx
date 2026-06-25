import type { ReactNode } from "react";
import CodeBlock from "./CodeBlock";
import Callout from "./Callout";
import type { Article } from "../posts/types";

let keySeed = 0;
const nextKey = () => `inl-${keySeed++}`;

// Minimal inline formatter: `code`, **bold**, [text](url)
function inline(text: string): ReactNode[] {
  const tokens: ReactNode[] = [];
  const re = /(`[^`]+`)|(\*\*[^*]+\*\*)|(\[[^\]]+\]\([^)]+\))/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) tokens.push(text.slice(last, m.index));
    const tok = m[0];
    if (tok.startsWith("`")) {
      tokens.push(<code key={nextKey()}>{tok.slice(1, -1)}</code>);
    } else if (tok.startsWith("**")) {
      tokens.push(<strong key={nextKey()}>{tok.slice(2, -2)}</strong>);
    } else {
      const mm = /\[([^\]]+)\]\(([^)]+)\)/.exec(tok)!;
      tokens.push(
        <a key={nextKey()} href={mm[2]} target="_blank" rel="noreferrer">
          {mm[1]}
        </a>,
      );
    }
    last = m.index + tok.length;
  }
  if (last < text.length) tokens.push(text.slice(last));
  return tokens;
}

export default function ArticleRenderer({ article }: { article: Article }) {
  return (
    <article className="prose-cyber">
      <p className="lead text-lg text-slate-300">{inline(article.lead)}</p>
      {article.blocks.map((b, i) => {
        switch (b.k) {
          case "h2":
            return (
              <h2 key={i} id={b.id}>
                {b.t}
              </h2>
            );
          case "h3":
            return <h3 key={i}>{inline(b.t)}</h3>;
          case "p":
            return <p key={i}>{inline(b.t)}</p>;
          case "ul":
            return (
              <ul key={i}>
                {b.items.map((it, j) => (
                  <li key={j}>{inline(it)}</li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i}>
                {b.items.map((it, j) => (
                  <li key={j}>{inline(it)}</li>
                ))}
              </ol>
            );
          case "code":
            return <CodeBlock key={i} code={b.code} lang={b.lang} title={b.title} />;
          case "callout":
            return (
              <Callout key={i} type={b.type} title={b.title}>
                {inline(b.t)}
              </Callout>
            );
          case "quote":
            return (
              <blockquote key={i} className="border-l-2 border-neon/50 pl-4 italic text-slate-300">
                {inline(b.t)}
              </blockquote>
            );
          default:
            return null;
        }
      })}
    </article>
  );
}
