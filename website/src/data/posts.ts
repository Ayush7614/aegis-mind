export type Post = {
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  date: string;
  readingTime: string;
  tags: string[];
  category: string;
  accent: "neon" | "cyber" | "violet" | "blood";
  featured?: boolean;
  poster?: string;
};

export const posts: Post[] = [
  {
    slug: "opentaint-complete-guide",
    title: "OpenTaint: The Open-Source Taint Analysis Engine for the AI Era",
    subtitle:
      "A complete, hands-on guide — what it is, how it works, installation, four real examples, and the AI agent workflows that make it scale.",
    excerpt:
      "Formal inter-procedural taint analysis that finds what AST-pattern matchers miss, lets LLM agents turn a single finding into a deterministic rule, and replays it across your whole codebase at zero token cost. Here is everything, end to end.",
    date: "2026-06-25",
    readingTime: "18 min read",
    tags: ["AppSec", "SAST", "Taint Analysis", "AI Agents", "Java", "Spring"],
    category: "AI Security Tools",
    accent: "neon",
    featured: true,
    poster: "opentaint-poster.png",
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
