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
    poster: "opentaint-poster.jpg",
  },
  {
    slug: "anthropic-cybersecurity-skills",
    title: "Anthropic Cybersecurity Skills: 754 Playbooks for AI Agents",
    subtitle:
      "Framework-mapped security playbooks that give any AI agent the structured decision-making of a senior analyst.",
    excerpt:
      "Apache-2.0, 26 domains, five-framework mappings per skill, and token-efficient progressive disclosure. Install with one npx command across Claude Code, Cursor, and more.",
    date: "2026-06-11",
    readingTime: "13 min read",
    tags: ["AI Agents", "Skills", "MITRE ATT&CK", "Open Source"],
    category: "AI Security Tools",
    accent: "cyber",
    poster: "posters/anthropic-cybersecurity-skills.jpg",
  },
  {
    slug: "cve-mcp-server",
    title: "CVE MCP Server: Turn Claude Into a Full-Spectrum Security Analyst",
    subtitle:
      "Give Claude direct access to 27 security-intelligence tools across 21 sources — CVE triage without the tab marathon.",
    excerpt:
      "NVD, EPSS, KEV, Shodan, VirusTotal and more, correlated into a single composite risk score. Install it, wire it into Claude, and triage fifty CVEs in seconds.",
    date: "2026-06-01",
    readingTime: "12 min read",
    tags: ["MCP", "Threat Intel", "CVE", "Claude"],
    category: "Threat Intel",
    accent: "violet",
    poster: "posters/cve-mcp-server.jpg",
  },
  {
    slug: "claude-bughunter",
    title: "Claude-BugHunter: Claude Code as a Bug-Bounty Machine",
    subtitle:
      "An open-source skill bundle that turns Claude Code into a senior bug-bounty researcher — 51 skills, 15 commands, real triage.",
    excerpt:
      "Context-loading attack skills, a 7-question triage gate that kills dead-end findings, and platform-ready reports that survive review. Install and run your first hunt.",
    date: "2026-05-25",
    readingTime: "17 min read",
    tags: ["Bug Bounty", "Claude Code", "Recon", "Reporting"],
    category: "Bug Bounty",
    accent: "blood",
    poster: "posters/claude-bughunter.jpg",
  },
  {
    slug: "cve-lite-cli",
    title: "CVE Lite CLI: The Dependency Scanner That Tells You What to Run",
    subtitle:
      "An OWASP project that reads your lockfile and hands you copy-and-run fix commands — not just a wall of CVE IDs.",
    excerpt:
      "Direct-vs-transitive visibility, parent-aware remediation, and an offline mode fast enough to run before every push. Plus why its results can differ from npm audit.",
    date: "2026-05-25",
    readingTime: "16 min read",
    tags: ["DevSecOps", "Dependencies", "CVE", "Node.js"],
    category: "DevSecOps",
    accent: "neon",
    poster: "posters/cve-lite-cli.jpg",
  },
  {
    slug: "6-open-source-ai-security-tools",
    title: "AI Security Is Changing Fast — These 6 Open-Source Tools Prove It",
    subtitle:
      "Six open-source projects, from binary hunting to AI-native scanning, that show how fast security is being rebuilt for the AI era.",
    excerpt:
      "VulHunt, Strix, CAI, MEDUSA, Pentest-AI, and developer-first CVE tooling: what each does, why it matters, and how to start.",
    date: "2026-05-22",
    readingTime: "9 min read",
    tags: ["AI Security", "Open Source", "Roundup", "Tooling"],
    category: "AI Security Tools",
    accent: "cyber",
    poster: "posters/6-open-source-ai-security-tools.jpg",
  },
  {
    slug: "pentest-ai-autonomous",
    title: "Pentest-AI: AI-Powered Autonomous Penetration Testing",
    subtitle:
      "An MCP-native autonomous pentesting framework where the LLM coordinates and deterministic probes do the detecting.",
    excerpt:
      "200+ wrapped tools, specialist agents, SPA-aware probes, and local-model support — the reliable architecture for AI-driven offensive security.",
    date: "2026-05-14",
    readingTime: "12 min read",
    tags: ["MCP", "AI Agents", "Pentesting", "Automation"],
    category: "Offensive Security",
    accent: "blood",
    poster: "posters/pentest-ai-autonomous.jpg",
  },
  {
    slug: "medusa-ai-scanner",
    title: "MEDUSA: Securing AI Agents, MCP Servers & LLM Applications",
    subtitle:
      "An AI-first scanner that detects prompt injection, repo poisoning, and MCP tool abuse alongside traditional code vulnerabilities.",
    excerpt:
      "9,600+ patterns and 200+ CVE checks, plus the AI-native threat layer classic SAST misses. One pip install and one command to scan agents, MCP servers, and LLM apps.",
    date: "2026-05-13",
    readingTime: "16 min read",
    tags: ["AI Security", "SAST", "MCP", "Prompt Injection"],
    category: "AI Security Tools",
    accent: "violet",
    poster: "posters/medusa-ai-scanner.jpg",
  },
  {
    slug: "pentest-ai-agents",
    title: "Pentest AI Agents: 28 Subagents That Supercharge Claude Code",
    subtitle:
      "Turn Claude Code into a fleet of specialized subagents that cover the whole pentest lifecycle — recon to reporting.",
    excerpt:
      "Install the agent roster in one line, route tasks to domain experts automatically, and run a fully local, zero-cost pentest lab with Ollama + Juice Shop.",
    date: "2026-05-01",
    readingTime: "6 min read",
    tags: ["Claude Code", "AI Agents", "Pentesting", "Open Source"],
    category: "Offensive Security",
    accent: "neon",
    poster: "posters/pentest-ai-agents.jpg",
  },
  {
    slug: "archinstall-4",
    title: "Archinstall 4.0: A Modern New Way to Install Arch Linux",
    subtitle:
      "The official Arch installer gets a modern Textual UI, firewalld, better LUKS, and UKI boot — guided installs without losing control.",
    excerpt:
      "Everything new in 4.0 plus a clean, step-by-step walkthrough from ISO to GNOME desktop — and JSON configs for reproducible, scriptable security VMs.",
    date: "2026-03-31",
    readingTime: "6 min read",
    tags: ["Linux", "Arch", "Tooling", "Open Source"],
    category: "Tooling",
    accent: "cyber",
    poster: "posters/archinstall-4.jpg",
  },
  {
    slug: "cai-cybersecurity-ai",
    title: "Cybersecurity AI (CAI): The Future of AI-Powered Security",
    subtitle:
      "Alias Robotics' open-source framework for building autonomous security agents — an operating system for AI-driven offense and defense.",
    excerpt:
      "An 8-pillar agent architecture, 300+ models, built-in guardrails, and human-in-the-loop control. Install it, build an agent in a dozen lines, and automate security at scale.",
    date: "2026-03-30",
    readingTime: "4 min read",
    tags: ["AI Agents", "Red Team", "Framework", "Open Source"],
    category: "AI Security Tools",
    accent: "neon",
    poster: "posters/cai-cybersecurity-ai.jpg",
  },
  {
    slug: "strix-ai-hacker",
    title: "Strix: The Open-Source Hacker That Tests Your App Like a Real Attacker",
    subtitle:
      "An open-source AI agent that runs your app, attacks it like a real adversary, and proves every finding with a working PoC.",
    excerpt:
      "Dynamic exploration over static signatures, multi-agent coverage, and CI-ready scans — plus an honest look at the token budget agentic pentesting demands.",
    date: "2026-03-23",
    readingTime: "5 min read",
    tags: ["Pentesting", "AI Agents", "DAST", "Open Source"],
    category: "Offensive Security",
    accent: "blood",
    poster: "posters/strix-ai-hacker.jpg",
  },
  {
    slug: "vulhunt-framework",
    title: "VulHunt: Open-Source Vulnerability Hunting Framework",
    subtitle:
      "Binarly's open-source framework hunts vulnerabilities directly in compiled binaries, firmware, and UEFI — no source code required.",
    excerpt:
      "A rule-driven, multi-representation engine that finds bugs in machine code, IR, and decompiled output. Install, hunt, and audit third-party binaries you can't see the source of.",
    date: "2026-03-17",
    readingTime: "4 min read",
    tags: ["Binary Analysis", "Firmware", "Reverse Engineering", "Open Source"],
    category: "Reverse Engineering",
    accent: "violet",
    poster: "posters/vulhunt-framework.jpg",
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
