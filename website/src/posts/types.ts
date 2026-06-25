export type Block =
  | { k: "h2"; id: string; t: string }
  | { k: "h3"; t: string }
  | { k: "p"; t: string }
  | { k: "ul"; items: string[] }
  | { k: "ol"; items: string[] }
  | { k: "code"; lang?: string; title?: string; code: string }
  | { k: "callout"; type?: "info" | "tip" | "warn" | "danger"; title?: string; t: string }
  | { k: "quote"; t: string };

export type Article = {
  lead: string;
  blocks: Block[];
};

export const tocFromBlocks = (a: Article) =>
  a.blocks
    .filter((b): b is Extract<Block, { k: "h2" }> => b.k === "h2")
    .map((b) => ({ id: b.id, label: b.t.replace(/^\d+\.\s*/, "") }));
