import type { Article } from "./types";

export const library: Record<string, Article> = {
  // ────────────────────────────────────────────────────────────── VulHunt
  "vulhunt-framework": {
    lead: "Most security tooling assumes you have the source code. A huge slice of the modern attack surface — firmware, drivers, third-party binaries, UEFI modules — ships only as compiled artifacts. VulHunt Community Edition, open-sourced by Binarly's research team, hunts vulnerabilities directly in those binaries.",
    blocks: [
      { k: "h2", id: "what", t: "1. What is VulHunt?" },
      { k: "p", t: "VulHunt is an open-source vulnerability-hunting framework built to analyze compiled software artifacts without any access to source code. The Community Edition exposes the core engine for independent researchers, reverse engineers, and supply-chain security teams." },
      { k: "p", t: "It targets the layer most scanners ignore: **POSIX executables, UEFI firmware modules, and multiple CPU architectures** including x86, x86-64, ARM, and AArch64." },
      { k: "ul", items: [
        "Built by Binarly's Research team; core engine released under an open-source license",
        "Works on raw binaries, Binary Ninja databases (BNDB), and BA2 archives",
        "Designed for firmware analysis, third-party auditing, and reverse-engineering pipelines",
      ] },

      { k: "h2", id: "how", t: "2. How it works" },
      { k: "p", t: "Instead of leaning on a single abstraction, VulHunt correlates findings across several representations of the same program at once:" },
      { k: "ul", items: [
        "**Disassembled machine code** — the ground truth of what runs",
        "**Intermediate representation (IR)** — normalized, architecture-independent logic",
        "**Decompiled code** — higher-level structure for human-readable patterns",
      ] },
      { k: "p", t: "This multi-layer view is what makes binary analysis reliable enough to act on. Underneath sits **BIAS** (the Binary Analysis and Inspection System), providing dataflow analysis, function-signature matching, a type system, and modular analysis components. The implementation is primarily C++ and Rust." },

      { k: "h3", t: "Rule-based hunting with Lua" },
      { k: "p", t: "At the core is a Lua-powered rule engine. Each rule carries metadata (name, author), target constraints (platform, architecture), and an analysis scope — project-level, function-level, or call-site level. Rules describe the behaviors that indicate a bug:" },
      { k: "ul", items: [
        "Buffer overflow conditions",
        "Authentication-bypass logic",
        "Unsafe memory operations",
        "Firmware-specific weaknesses",
      ] },
      { k: "p", t: "Because rules are reusable and shareable, teams can encode detection logic once and replay it across an entire fleet of binaries." },

      { k: "h2", id: "install", t: "3. Installation" },
      { k: "p", t: "You only need the Rust toolchain, Cargo, and Git. Build the release binary with cargo-make:" },
      { k: "code", lang: "bash", code: "git clone https://github.com/vulhunt-re/vulhunt.git\ncd vulhunt\ncargo make --profile release build\n./target/release/vulhunt-ce --help" },
      { k: "callout", type: "tip", title: "Sanity check the tree", t: "After cloning, `ls` should show `Cargo.toml`, `Makefile.toml`, and a `bias/` directory. The compiled binary lands at `target/release/vulhunt-ce`." },

      { k: "h2", id: "integrations", t: "4. Integrations" },
      { k: "p", t: "VulHunt is built to slot into bigger pipelines rather than live in isolation:" },
      { k: "ul", items: [
        "**Transparency Platform** — upload and manage rule sets, trigger scans remotely, and pull findings/archives",
        "**MCP server mode** — expose the engine over streaming HTTP (SSE) or stdio so AI assistants and other tools can drive it programmatically",
        "**Structured workflows** — guided instruction sets for binary analysis, rule execution, and result interpretation",
      ] },

      { k: "h2", id: "use-cases", t: "5. Where it shines" },
      { k: "ul", items: [
        "**Firmware security** — find vulnerabilities in UEFI modules and embedded images",
        "**Third-party auditing** — evaluate compiled dependencies before you integrate them",
        "**Reverse engineering** — understand behavior and surface unsafe logic",
        "**Supply-chain risk** — gain binary-level visibility where source is unavailable",
      ] },

      { k: "h2", id: "limits", t: "6. Limitations" },
      { k: "ul", items: [
        "Advanced enterprise capabilities are reserved for the commercial platform",
        "Writing effective rules takes real reverse-engineering expertise",
        "Initial setup and toolchain build can be involved",
      ] },

      { k: "h2", id: "wrap", t: "7. Takeaway" },
      { k: "p", t: "As supply-chain risk keeps climbing, binary-level visibility stops being optional. VulHunt brings a structured, rule-driven, multi-representation approach to a corner of security that open source has long neglected — and it does it without ever needing your source code." },
    ],
  },

  // ────────────────────────────────────────────────────────────── Strix
  "strix-ai-hacker": {
    lead: "Static scanners catch known signatures. Real attackers explore, chain bugs, and prove exploitability. Strix is an open-source AI agent that behaves less like a scanner and more like a hands-on penetration tester — it runs your app, pokes at it, and backs every finding with a working proof-of-concept.",
    blocks: [
      { k: "h2", id: "what", t: "1. What makes Strix different" },
      { k: "p", t: "Strix doesn't just match patterns — it actively interacts with your application: navigating flows, testing authentication, manipulating inputs, and attempting real exploitation paths. The result is fewer false positives and findings you can actually act on." },
      { k: "ul", items: [
        "**Thinks like an attacker** — dynamic exploration instead of static rules",
        "**Proof over assumptions** — every finding ships with a validated PoC",
        "**Built for developers** — a clean CLI and readable output, no security PhD required",
        "**Works as a team** — multiple agents cover APIs, frontend, and infrastructure in parallel",
      ] },

      { k: "h2", id: "capabilities", t: "2. What's in the box" },
      { k: "p", t: "Strix ships a full offensive toolkit out of the box:" },
      { k: "ul", items: [
        "HTTP proxy for request/response manipulation",
        "Browser automation for flows like login, XSS, and CSRF",
        "Terminal access for command execution and a Python runtime for custom exploits",
        "Automated recon and attack-surface mapping",
        "Static + dynamic code analysis",
      ] },
      { k: "h3", t: "What it can find" },
      { k: "ul", items: [
        "Access control issues — IDOR, privilege escalation",
        "Injection flaws — SQL, command injection",
        "Server-side bugs — SSRF, deserialization",
        "Client-side issues — XSS, DOM bugs",
        "Authentication problems — JWT, session handling",
        "Business-logic flaws",
      ] },

      { k: "h2", id: "install", t: "3. Installation & setup" },
      { k: "p", t: "You need Docker running and an API key from a supported LLM provider. Install with one command:" },
      { k: "code", lang: "bash", code: "curl -sSL https://strix.ai/install | bash" },
      { k: "p", t: "Then point Strix at a model and provide your key:" },
      { k: "code", lang: "bash", code: 'export STRIX_LLM="openai/gpt-5.4"\nexport LLM_API_KEY="your-api-key"\n\n# optional tuning\nexport STRIX_REASONING_EFFORT="high"\nexport LLM_API_BASE="your-api-base-url"' },

      { k: "h2", id: "run", t: "4. Your first scan" },
      { k: "p", t: "Spin up a safe target — OWASP Juice Shop is the classic deliberately-vulnerable app — and aim Strix at it:" },
      { k: "code", lang: "bash", code: "docker run -d -p 3000:3000 bkimminich/juice-shop\n\n# scan a local directory, a repo, or a live URL\nstrix --target ./app-directory\nstrix --target https://github.com/org/repo\nstrix --target https://your-app.com" },
      { k: "p", t: "Runs are written to a `strix_runs/` folder. Be aware: deep agentic exploration burns tokens — a single thorough Juice Shop run can consume millions of input tokens before it surfaces validated findings, because real exploitation requires patient reconnaissance first." },
      { k: "callout", type: "warn", title: "Watch your token budget", t: "Agentic pentesting is powerful but not free. Start with `--scan-mode quick`, cap scope, and monitor spend — a long run against a live site can cost real money in API usage." },

      { k: "h2", id: "advanced", t: "5. Advanced & CI usage" },
      { k: "code", lang: "bash", code: '# authenticated testing\nstrix --target https://your-app.com \\\n  --instruction "Use credentials user:pass"\n\n# multi-target\nstrix -t https://github.com/org/app -t https://your-app.com\n\n# headless, CI-friendly\nstrix -n --target https://your-app.com' },
      { k: "p", t: "It drops straight into a pipeline. A minimal GitHub Actions job installs Strix and runs a quick scan on every pull request so issues are caught before code reaches production:" },
      { k: "code", lang: "yaml", title: ".github/workflows/strix.yml", code: "name: strix-penetration-test\non:\n  pull_request:\njobs:\n  security-scan:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v6\n      - name: Install Strix\n        run: curl -sSL https://strix.ai/install | bash\n      - name: Run Strix\n        env:\n          STRIX_LLM: ${{ secrets.STRIX_LLM }}\n          LLM_API_KEY: ${{ secrets.LLM_API_KEY }}\n        run: strix -n -t ./ --scan-mode quick" },

      { k: "h2", id: "wrap", t: "6. Takeaway" },
      { k: "p", t: "The real value isn't just running Strix — it's that it reproduces and proves issues the way an attacker would, then hands you something fixable. Used in pre-release checks, CI, or against a lab like Juice Shop, it brings genuine offensive testing to the pace of modern development." },
    ],
  },

  // ────────────────────────────────────────────────────────────── CAI
  "cai-cybersecurity-ai": {
    lead: "Manual pentesting and rule-based scanners can't keep up with modern attack complexity. Cybersecurity AI (CAI), an open-source framework from Alias Robotics, brings autonomous AI agents into real offensive and defensive security work — think of it as an operating system for AI-driven security agents.",
    blocks: [
      { k: "h2", id: "what", t: "1. What is CAI?" },
      { k: "p", t: "CAI is a lightweight, open-source framework for building AI-powered security agents that can discover vulnerabilities, perform reconnaissance, execute exploitation workflows, and assist with defense. It represents a shift from manual to autonomous security, from static tools to agent-based systems, and from reactive to proactive discovery." },
      { k: "p", t: "It's already used by security researchers, ethical hackers, bug-bounty hunters, and enterprises — and the project reports CTF-benchmark speedups of up to **3600× versus human pentesters** on specific tasks." },

      { k: "h2", id: "arch", t: "2. The 8-pillar architecture" },
      { k: "p", t: "CAI is modular and agent-based, built on eight core concepts:" },
      { k: "ol", items: [
        "**Agents** — AI entities that observe, reason, and act",
        "**Tools** — built-in capabilities: Linux command execution, OSINT web search, code execution, SSH tunneling",
        "**Handoffs** — agents delegate tasks to specialized agents",
        "**Patterns** — collaboration styles: swarm, hierarchical, sequential (chain-of-thought), recursive",
        "**Turns & interactions** — execution cycles between agents and tools",
        "**Tracing** — full observability via OpenTelemetry + Phoenix",
        "**Guardrails** — protection against prompt injection, dangerous commands, and malicious payloads",
        "**Human-in-the-loop** — humans keep oversight and control over critical actions",
      ] },

      { k: "h2", id: "features", t: "3. Key features" },
      { k: "ul", items: [
        "**300+ models** — OpenAI, Anthropic Claude, DeepSeek, and local models via Ollama",
        "**Built-in security tools** — recon, exploitation, privilege escalation modules",
        "**Custom agents** — compose bug-bounty, red-team, or blue-team agents",
        "**Multi-layer guardrails** — input/output validation and encoded-payload detection",
        "**Research-driven** — backed by academic papers and benchmarks (including CAIBench)",
      ] },

      { k: "h2", id: "install", t: "4. Installation" },
      { k: "p", t: "You need Python 3.12, Git, and a virtual environment. On Ubuntu:" },
      { k: "code", lang: "bash", code: "sudo apt-get update\nsudo apt-get install -y git python3-pip python3.12-venv\n\npython3.12 -m venv cai_env\nsource cai_env/bin/activate\npip install cai-framework" },
      { k: "p", t: "Drop your keys into a `.env` file, then launch the CLI:" },
      { k: "code", lang: "bash", code: 'echo -e \'OPENAI_API_KEY="sk-1234"\nANTHROPIC_API_KEY=""\nOLLAMA=""\nPROMPT_TOOLKIT_NO_CPR=1\nCAI_STREAM=false\' > .env\n\ncai' },
      { k: "p", t: "Prefer containers? A Docker path works too:" },
      { k: "code", lang: "bash", code: "docker compose build\ndocker compose up -d\ndocker compose exec cai cai" },

      { k: "h2", id: "agent", t: "5. Building a simple agent" },
      { k: "p", t: "The SDK keeps agent definitions compact — name, instructions, model, and a runner:" },
      { k: "code", lang: "python", code: 'from cai.sdk.agents import Agent, Runner, OpenAIChatCompletionsModel\nfrom openai import AsyncOpenAI\n\nagent = Agent(\n    name="Cyber Agent",\n    instructions="You are a cybersecurity expert",\n    model=OpenAIChatCompletionsModel(\n        model="openai/gpt-4o",\n        openai_client=AsyncOpenAI(),\n    ),\n)\n\nresult = await Runner.run(agent, "Scan for vulnerabilities")' },

      { k: "h2", id: "use-cases", t: "6. Real-world use cases" },
      { k: "ul", items: [
        "**Bug-bounty automation** — discovery, report validation, and deduplication",
        "**Web app security** — API scanning, race-condition exploitation, data-exposure detection",
        "**Robotics & OT** — vulnerabilities in humanoid robots, MQTT brokers, and industrial systems",
        "**CTF competitions** — top-10 finishes, outperforming human teams in some phases",
        "**Enterprise testing** — continuous automated assessment and AI-assisted red teaming",
      ] },

      { k: "callout", type: "warn", title: "Ethical use only", t: "CAI is built on democratization and transparency, and it is explicitly designed for authorized, ethical security testing — not illegal hacking. It augments human expertise; it does not replace human judgment or authorization." },

      { k: "h2", id: "wrap", t: "7. Takeaway" },
      { k: "p", t: "CAI isn't fully autonomous and still needs supervision and external models — but as a framework it lays real groundwork for the agent-driven security workflows that are quickly becoming the norm." },
    ],
  },

  // ────────────────────────────────────────────────────────────── archinstall
  "archinstall-4": {
    lead: "Arch Linux is famous for power, flexibility, and a notoriously hands-on install. Archinstall 4.0 — the official guided installer — softens that edge with a modern Textual UI, better automation, and cleaner configuration handling, without sacrificing the control that makes Arch, Arch.",
    blocks: [
      { k: "h2", id: "what", t: "1. What is Archinstall?" },
      { k: "p", t: "Archinstall is the official guided installer for Arch Linux. It lets you install via a menu-driven interface, automate installs with JSON configs, script fully customized setups, or use it as a Python library for system management. Think \"Arch installation — without the pain.\"" },

      { k: "h2", id: "new", t: "2. What's new in 4.0" },
      { k: "ul", items: [
        "**Brand-new Textual UI (TUI)** — moves off curses to a modern, responsive, easier-to-maintain interface",
        "**Firewalld integration** — zone-based firewall management during install",
        "**Enhanced LUKS** — better whole-disk encryption handling and parameters",
        "**GRUB UKI support** — Unified Kernel Image boot entries for a cleaner setup",
        "**Localization** — added Galician, improved translation system",
        "**Removed NTFS root** — encourages Linux-native filesystems (ext4, btrfs)",
        "**Internal cleanup** — LVM moved into dedicated modules, refactored mirrors/interactive modules, perf fixes",
      ] },

      { k: "h2", id: "prep", t: "3. Before you start" },
      { k: "p", t: "Grab the latest ISO from the official mirrors and create a VM (UTM, VirtualBox, or bare metal). On Apple Silicon UTM, choose **Emulate** (not Virtualize) for x86_64, attach the ISO, give it ~64 GB of disk, and boot." },
      { k: "code", lang: "bash", code: "# pick a fast mirror, then download e.g.\n# archlinux-2026.03.01-x86_64.iso\n# from https://archlinux.org/download/" },

      { k: "h2", id: "install", t: "4. Running the installer" },
      { k: "p", t: "Once booted into the live environment, launch the installer:" },
      { k: "code", lang: "bash", code: "archinstall" },
      { k: "p", t: "Then walk the menu top to bottom:" },
      { k: "ol", items: [
        "**Mirrors and repositories** — pick your region",
        "**Disk configuration** — use the best-effort default partition layout on your target disk",
        "**Filesystem** — choose `ext4` (leave the partition summary unchanged)",
        "**Profile** — Desktop → GNOME (press Space to select, Enter to confirm)",
        "**Authentication** — set a root password, add a sudo-enabled user",
        "**Install** — confirm, wait for completion, then reboot",
      ] },
      { k: "callout", type: "tip", title: "Reproducible installs", t: "Everything you click can be captured as a JSON config. Save it once and you can replay an identical Arch setup across machines with a single command — great for labs and security VMs." },

      { k: "h2", id: "wrap", t: "5. Takeaway" },
      { k: "p", t: "Archinstall 4.0 keeps Arch's flexibility but finally makes the install approachable. The new TUI, firewalld, improved encryption, and UKI boot bring it close to a complete, production-ready installer — ideal for spinning up clean, repeatable Linux environments for security work." },
    ],
  },

  // ────────────────────────────────────────────────────────────── pentest-ai-agents (28 subagents)
  "pentest-ai-agents": {
    lead: "General-purpose AI is useful but rarely optimal for offensive security. pentest-ai-agents flips the model: instead of one generalist, it turns Claude Code into a fleet of specialized subagents — each a deep expert in one slice of the penetration-testing lifecycle, from recon to reporting.",
    blocks: [
      { k: "h2", id: "what", t: "1. Why specialized subagents" },
      { k: "p", t: "Traditional AI security helpers are generalists. This open-source project ([0xSteph/pentest-ai-agents](https://github.com/0xSteph/pentest-ai-agents)) installs a roster of purpose-built agents, automatically routing each task to the right specialist. The result is more accurate, contextual, and actionable output — less like a chatbot, more like a full red team living in your terminal." },

      { k: "h2", id: "coverage", t: "2. What the agents cover" },
      { k: "p", t: "Capabilities span the whole engagement lifecycle:" },
      { k: "ul", items: [
        "**Recon & enumeration** — attack-surface discovery, DNS/subdomains/ports, tech fingerprinting",
        "**Web app security** — SQLi, XSS, API testing, business-logic flaws",
        "**Active Directory** — privilege-escalation paths, Kerberos abuse, lateral movement",
        "**Cloud** — misconfigured IAM, storage exposure, container vulnerabilities",
        "**Mobile & wireless** — Android/iOS RE, Wi-Fi and Bluetooth vectors",
        "**Social engineering** — phishing strategy, pretexting scenarios",
        "**Exploit dev & chaining** — multi-step paths, PoC validation, automated chaining",
        "**Detection & defense** — MITRE ATT&CK mapping, blue-team insights",
        "**Malware & forensics** — static/dynamic analysis, timeline reconstruction",
        "**Reporting** — executive summaries, CVSS scoring, remediation guidance",
      ] },

      { k: "h2", id: "install", t: "3. Install on Claude Code" },
      { k: "p", t: "Make sure Claude Code is installed, then verify and launch it:" },
      { k: "code", lang: "bash", code: "claude --version    # e.g. 2.1.109 (Claude Code)\nwhich claude\nclaude               # trust the workspace folder when prompted" },
      { k: "p", t: "Install the agents with the one-line bootstrap:" },
      { k: "code", lang: "bash", code: "curl -fsSL https://raw.githubusercontent.com/0xSteph/pentest-ai-agents/main/install.sh | bash" },
      { k: "p", t: "The installer drops agent definitions into `~/.claude/agents` so they're available in every session. Verify:" },
      { k: "code", lang: "bash", code: "ls ~/.claude/agents\n# web-hunter.md  recon-advisor.md  vuln-scanner.md  credential-tester.md ..." },

      { k: "h2", id: "local", t: "4. Run it free with local models (Ollama)" },
      { k: "p", t: "No Anthropic credits? You can drive the agent prompts with a local model through Ollama instead of the cloud API. Pick a model you have locally, and you get a fully offline, zero-cost pentest lab." },
      { k: "callout", type: "warn", title: "Local-model caveats", t: "The agents are tuned for Claude, so `/recommend` and `@agent` routing may not work perfectly on local models. Fall back to explicit manual prompts like \"You are the web-hunter agent. Suggest ffuf commands to find hidden endpoints.\"" },

      { k: "h2", id: "lab", t: "5. Practice safely (Juice Shop)" },
      { k: "p", t: "Spin up a deliberately vulnerable target and practice against it — never against systems you don't own or aren't authorized to test:" },
      { k: "code", lang: "bash", code: "docker run -d -p 3001:3000 bkimminich/juice-shop\n# open http://localhost:3001" },
      { k: "p", t: "Then prompt an agent with a tight, lab-scoped instruction:" },
      { k: "code", lang: "text", title: "example prompt", code: "You are a web-hunter agent.\nTarget: http://localhost:3001\nGive:\n- steps to find hidden endpoints\n- ffuf commands\n- expected output\nThis is a local lab. Be practical." },

      { k: "h2", id: "wrap", t: "6. Takeaway" },
      { k: "p", t: "The idea is simple but powerful: turn a general AI into role-driven specialists. And the practical kicker — with Claude Code as the UI, Ollama as the engine, and these agent prompts, you can build a capable pentest-learning lab without expensive APIs." },
    ],
  },

  // ────────────────────────────────────────────────────────────── Medusa
  "medusa-ai-scanner": {
    lead: "AI coding assistants, autonomous agents, MCP servers, and RAG pipelines created an entirely new class of security risk that web-app scanners were never built for. MEDUSA is an AI-first security scanner that adds AI-native threat detection — prompt injection, repo poisoning, MCP tool abuse — on top of traditional code scanning.",
    blocks: [
      { k: "h2", id: "what", t: "1. What is MEDUSA?" },
      { k: "p", t: "MEDUSA is an open-source security scanner built for modern AI applications: AI agents, LLM apps, MCP servers, RAG systems, AI coding assistants, and ordinary software projects too. Files like `CLAUDE.md`, `.cursorrules`, `AGENTS.md`, and MCP configs are now part of the dev stack — and attackers have started abusing them to manipulate assistants, poison repos, and even trigger RCE." },
      { k: "ul", items: [
        "9,600+ built-in detection patterns and 200+ CVE detections",
        "AI-specific scanning: prompt injection, repo poisoning, MCP configuration analysis",
        "Multi-language analysis, parallel scanning, CI/CD integration",
      ] },

      { k: "h2", id: "why", t: "2. Why traditional tools fall short" },
      { k: "p", t: "Classic SAST (Semgrep, SonarQube, Bandit) focuses on code vulnerabilities. They don't understand AI-native attack surfaces: instructions hidden in markdown that an agent will obey, a poisoned dependency that rewrites an assistant's behavior, or an MCP server quietly exposing a dangerous tool. MEDUSA adds that AI threat layer." },

      { k: "h2", id: "install", t: "3. Installation & first scan" },
      { k: "p", t: "MEDUSA works almost immediately after install — no heavy setup or external infrastructure. Basic usage is two lines:" },
      { k: "code", lang: "bash", code: "pip install medusa-security\nmedusa scan ." },
      { k: "p", t: "That single command analyzes a project for both traditional vulnerabilities and modern AI-specific risks." },

      { k: "h2", id: "ai-threats", t: "4. The AI-native threats it catches" },
      { k: "ul", items: [
        "**Prompt injection** — malicious instructions embedded in files, docs, or data an agent reads",
        "**Repo poisoning** — tampered config/instruction files designed to hijack an assistant",
        "**MCP tool abuse** — risky or over-privileged tools exposed through MCP servers",
        "**AI workflow manipulation** — chained instructions that redirect autonomous behavior",
        "**AI supply-chain attacks** — compromised models, prompts, or dependencies",
      ] },

      { k: "h2", id: "usage", t: "5. Practical usage" },
      { k: "p", t: "Beyond a local directory scan, MEDUSA fits the places AI risk actually lives:" },
      { k: "ul", items: [
        "Scan GitHub repositories for poisoned instruction files before you trust them",
        "Analyze MCP configurations for dangerous tool exposure",
        "Gate pull requests in CI/CD so AI-native risks are caught pre-merge",
      ] },
      { k: "callout", type: "info", title: "Defense for the AI dev stack", t: "If your team ships `CLAUDE.md`, `.cursorrules`, or MCP servers, those files are now part of your attack surface. Treat them like code: review, scan, and version them." },

      { k: "h2", id: "wrap", t: "6. Takeaway" },
      { k: "p", t: "MEDUSA isn't a replacement for traditional SAST — it's the missing AI-native layer beside it. As agents and MCP ecosystems spread, scanning for prompt injection and repo poisoning becomes as routine as scanning for SQL injection once was." },
    ],
  },

  // ────────────────────────────────────────────────────────────── pentest-ai (autonomous)
  "pentest-ai-autonomous": {
    lead: "Signature scanners struggle with authentication, dynamic SPAs, and multi-step attack chains. Pentest-AI (ptai), an open-source framework from 0xSteph, takes a different stance: the LLM coordinates and the deterministic probes detect — combining AI orchestration with real security tooling over MCP.",
    blocks: [
      { k: "h2", id: "what", t: "1. What is Pentest-AI?" },
      { k: "p", t: "Pentest-AI is an AI-native penetration-testing framework that automates offensive workflows using LLMs plus real tools. It bundles deterministic vulnerability probes, AI reasoning loops, wrapped CLI security tools, MCP-compatible interfaces, and attack-chain correlation — an offensive-security MCP server with 200+ wrapped tools, specialist agents, and SPA-aware probes for the OWASP Top 10." },
      { k: "p", t: "It can enumerate targets, authenticate into apps, scan web and APIs, run external tools, correlate findings, validate vulnerabilities with PoCs, generate detection rules, and produce reports — automatically." },

      { k: "h2", id: "philosophy", t: "2. The key design choice" },
      { k: "quote", t: "\"The LLM coordinates. The probes detect.\"" },
      { k: "p", t: "This separation is the project's strongest idea. The LLM chooses tools, interprets outputs, correlates findings, and plans next actions — but the actual detection comes from deterministic probes, wrapped tools, and reproducible validation checks. That keeps results reliable instead of hallucinated." },

      { k: "h2", id: "agents", t: "3. Specialist agents" },
      { k: "p", t: "Pentest-AI ships domain-focused agents that together behave like a coordinated red team rather than a single scanner:" },
      { k: "ul", items: [
        "`recon` — enumeration and discovery",
        "`web` / `api_security` / `browser` — app, API, and DOM testing",
        "`ad` / `cloud` — Active Directory and cloud security",
        "`credential_tester` / `vuln_scanner` — credential attacks and aggregation",
        "`exploit_chain` / `poc_validator` — multi-step chains and PoC validation",
        "`detection` — Sigma/SPL/KQL rule generation",
        "`llm_redteam` / `mobile` / `wireless` / `report` — specialized coverage and reporting",
      ] },

      { k: "h2", id: "mcp", t: "4. MCP-native" },
      { k: "p", t: "Because it speaks the Model Context Protocol, AI assistants — Claude Code, Cursor, Codex, Claude Desktop — can drive its security tooling directly through natural language. The framework also supports local LLMs via Ollama, so you can run scans without cloud API keys." },

      { k: "h2", id: "install", t: "5. Installation" },
      { k: "p", t: "Clone the repository and follow the project's setup; you can wire it into an MCP-capable assistant or run it standalone:" },
      { k: "code", lang: "bash", code: "git clone https://github.com/0xSteph/pentest-ai.git\ncd pentest-ai\n# follow the repo's install instructions, then connect it\n# to an MCP client (Claude Code / Cursor) or run via CLI" },
      { k: "callout", type: "tip", title: "No-API-key mode", t: "Pentest-AI can run scans driven by a local model through Ollama, which keeps deterministic probe detection fully functional even without cloud credits." },

      { k: "h2", id: "use", t: "6. Where it fits" },
      { k: "ul", items: [
        "Authenticated testing of dynamic SPAs and APIs that break classic scanners",
        "Building and validating multi-step attack chains with PoCs",
        "Generating detection rules (Sigma/SPL/KQL) alongside offensive findings",
        "CI/CD security workflows and automated reporting",
      ] },

      { k: "h2", id: "wrap", t: "7. Takeaway" },
      { k: "p", t: "Pentest-AI is still evolving and needs supervision, but its \"coordinate vs. detect\" split is the right architecture for AI pentesting: you get the contextual reasoning of an operator with the reproducibility of deterministic tooling." },
    ],
  },

  // ────────────────────────────────────────────────────────────── 6 open-source tools
  "6-open-source-ai-security-tools": {
    lead: "Traditional tooling was built for predictable apps and human-driven workflows. That world is gone — autonomous agents, LLM workflows, MCP servers, and compiled supply chains are the new normal, and attackers are adapting fast. Here are six open-source tools that prove how quickly AI security is changing.",
    blocks: [
      { k: "h2", id: "intro", t: "1. A new era of attack surface" },
      { k: "p", t: "The threats have moved beyond SQLi and XSS into prompt injection, repo poisoning, AI workflow hijacking, firmware-level exploitation, and binary bugs hidden deep in compiled systems. Some of the most innovative responses aren't coming from enterprise vendors — they're emerging from open source." },

      { k: "h2", id: "vulhunt", t: "2. VulHunt — binary-level hunting, no source needed" },
      { k: "p", t: "Binarly's open-source framework hunts vulnerabilities directly in compiled binaries, firmware, and UEFI modules by correlating disassembly, IR, and decompiled code, with a Lua rule engine for reusable detection logic." },
      { k: "code", lang: "bash", code: "git clone https://github.com/vulhunt-re/vulhunt.git\ncd vulhunt && cargo make --profile release build\n./target/release/vulhunt-ce --help" },

      { k: "h2", id: "strix", t: "3. Strix — the AI pentester that acts like an attacker" },
      { k: "p", t: "Rather than matching signatures, Strix runs your app, explores it, and validates findings with real proof-of-concepts — multiple agents covering APIs, frontend, and infra in parallel. Install with one line and point it at a directory, repo, or URL." },

      { k: "h2", id: "cai", t: "4. CAI — a framework for security agents" },
      { k: "p", t: "Alias Robotics' Cybersecurity AI gives you an agent-based foundation — tools, handoffs, guardrails, human-in-the-loop — supporting 300+ models for offensive and defensive automation. `pip install cai-framework` and you're building agents." },

      { k: "h2", id: "medusa", t: "5. MEDUSA — AI-native security scanning" },
      { k: "p", t: "MEDUSA scans for both traditional vulnerabilities and AI-specific threats: prompt injection, repo poisoning, and MCP tool abuse, with thousands of built-in patterns. `pip install medusa-security && medusa scan .`" },

      { k: "h2", id: "ptai", t: "6. Pentest-AI — coordinate vs. detect" },
      { k: "p", t: "An MCP-native autonomous pentesting framework where the LLM orchestrates and deterministic probes do the detecting — 200+ wrapped tools and specialist agents, runnable with local models via Ollama." },

      { k: "h2", id: "cve", t: "7. CVE tooling — from noise to next action" },
      { k: "p", t: "Rounding it out, developer-first CVE tools (like CVE Lite CLI and the CVE MCP Server) close the gap between \"something's vulnerable\" and \"here's exactly what to run\" — local-first remediation and AI-orchestrated triage across dozens of intel sources." },

      { k: "callout", type: "info", title: "The common thread", t: "Every one of these rethinks security for an AI-and-supply-chain world: binary visibility without source, agents that prove exploitability, AI-native threat detection, and remediation that meets developers in the terminal." },

      { k: "h2", id: "wrap", t: "8. Takeaway" },
      { k: "p", t: "AI security isn't a future problem — it's shipping now, in open source. Pick the one that maps to your stack, run it against a lab, and you'll quickly see how different this generation of tooling really is." },
    ],
  },

  // ────────────────────────────────────────────────────────────── Claude BugHunter
  "claude-bughunter": {
    lead: "Bug-bounty work is a grind of tabs, notes, and the nagging \"did I already test this?\" — then a report gets closed N/A because you missed one validation step. Claude-BugHunter is an open-source skill bundle that turns Claude Code into something closer to a senior researcher who knows where the bodies are buried.",
    blocks: [
      { k: "h2", id: "what", t: "1. What it actually is" },
      { k: "p", t: "Claude-BugHunter packs **51 specialized cybersecurity skills + 15 slash commands** for Claude Code. Instead of one giant \"be a hacker\" prompt, everything is modular and loads automatically based on context — mention a file-upload form and the file-upload skill loads; mention an Okta tenant and Okta attack flows appear." },
      { k: "p", t: "Coverage spans classic web bugs (XSS, SQLi, IDOR, SSRF), API weirdness (GraphQL, JWT, OAuth, mass assignment), enterprise perimeter (M365/Entra ID, Okta, SharePoint, VPN appliances, vCenter), cloud misconfigs (public S3, IMDS chains, confused deputy), and AI/LLM testing." },

      { k: "h2", id: "highlights", t: "2. The parts that save real time" },
      { k: "h3", t: "The \"don't waste your time\" gate" },
      { k: "p", t: "Before writing a report, run `/triage` and describe the finding. It runs a 7-question checklist — Can an attacker use this now with a real request? Is the impact something the program cares about? Is the asset in scope? Does it work without unobtainable credentials? Is it not just documented behavior? Can you prove impact? Is it not on the never-submit list? One \"no\" and it tells you to move on." },
      { k: "h3", t: "Enterprise attack chains that aren't theory" },
      { k: "p", t: "Point it at a test M365 tenant and it walks user enumeration via AADSTS codes, Smart Lockout math, Conditional Access bypass patterns, and ROPC abuse when MFA isn't enforced — drawn from real disclosed reports, not blog rehashes." },
      { k: "h3", t: "Reporting that doesn't get rejected" },
      { k: "p", t: "`/report` produces copy-paste-ready writeups formatted for HackerOne, Bugcrowd (VRT-aware severity), Intigriti, or client red-team deliverables — and reminds you to redact PII, black-bar headers, and sanitize HAR files." },

      { k: "h2", id: "install", t: "3. Installation" },
      { k: "p", t: "You need macOS or Linux (Windows via WSL2), the Claude Code CLI with a paid plan, Python 3.9+, and git. No Docker, no npm hell." },
      { k: "code", lang: "bash", code: "mkdir -p ~/security-research && cd ~/security-research\ngit clone https://github.com/elementalsouls/Claude-BugHunter.git\ncd Claude-BugHunter && ./scripts/install.sh" },
      { k: "p", t: "The installer copies skills to `~/.claude/skills/`, commands to `~/.claude/commands/`, and wires a `hunt` shell command into your rc file. Restart your shell, then verify:" },
      { k: "code", lang: "bash", code: "source ~/.zshrc          # or ~/.bashrc\nhunt                     # prints usage\nls ~/.claude/skills/ | wc -l   # expect 51" },

      { k: "h2", id: "firsthunt", t: "4. Your first hunt (local Juice Shop)" },
      { k: "p", t: "Run a vulnerable target locally — fast, clean, no internet dependency — and only ever test what you're authorized to:" },
      { k: "code", lang: "bash", code: "docker run -d -p 3000:3000 --name juice-shop bkimminich/juice-shop\n# open http://localhost:3000  (login admin@juice-sh.op / admin123)" },
      { k: "p", t: "Create an engagement folder with `hunt <target>`, launch Claude Code inside it, and let the contextual skills guide methodology, payloads, and validation before you ever draft a report." },

      { k: "callout", type: "warn", title: "Authorized testing only", t: "These skills encode real offensive techniques. Use them on labs, your own assets, or targets explicitly in scope for an authorized program — never anything else." },

      { k: "h2", id: "wrap", t: "5. Takeaway" },
      { k: "p", t: "Claude-BugHunter isn't an \"AI hacks for you\" fantasy. It's a methodology multiplier: it loads the right knowledge at the right moment, kills dead-end findings early, and formats reports that survive triage — exactly where most hunters lose hours." },
    ],
  },

  // ────────────────────────────────────────────────────────────── cve-lite-cli
  "cve-lite-cli": {
    lead: "Dependabot pings \"12 vulnerabilities found,\" you click through, and get a wall of CVE IDs with no fix commands. CVE Lite CLI — an OWASP Incubator project — flips that: it reads your lockfile and hands you copy-and-run fix commands, right when you're in the terminal about to push.",
    blocks: [
      { k: "h2", id: "what", t: "1. What it is" },
      { k: "p", t: "CVE Lite CLI is an OWASP Incubator project (created and maintained by Sonu Kapoor) that scans `package-lock.json`, `pnpm-lock.yaml`, `yarn.lock`, or `bun.lock` for known vulnerabilities. The twist: instead of dumping CVE IDs, it gives you a remediation plan you can act on." },
      { k: "ul", items: [
        "**Copy-and-run fixes** — `npm install pkg@x`, `pnpm add pkg@x`, etc.",
        "**Direct vs. transitive** visibility — is the bug in what you installed or buried three levels deep?",
        "**Parent-aware remediation** — tells you whether a simple update is enough or you must bump the parent",
        "**Offline mode** — sync the advisory DB once, then scan with zero network calls",
        "**Usage-aware filtering** — optionally check whether vulnerable packages are actually imported",
      ] },

      { k: "h2", id: "why", t: "2. Why it feels different" },
      { k: "p", t: "Most security tooling is designed for pipelines, not people. Dependabot files PRs you'll merge eventually; CI blocks builds hours after you've context-switched. CVE Lite CLI assumes the best time to fix a vulnerable dependency is when you're already in the terminal about to push — so it runs locally, fast, and gets out of your way." },

      { k: "h2", id: "install", t: "3. Installation" },
      { k: "p", t: "No accounts, no cloud onboarding, no config files. Install globally:" },
      { k: "code", lang: "bash", code: "npm install -g cve-lite-cli\n# pulls ~43 packages, ~16s on a normal connection" },

      { k: "h2", id: "scan", t: "4. Running a scan" },
      { k: "p", t: "From any project directory:" },
      { k: "code", lang: "bash", code: "cve-lite ." },
      { k: "p", t: "Example output queries the OSV (Open Source Vulnerabilities) database and reports a clear plan:" },
      { k: "code", lang: "text", title: "cve-lite output", code: "CVE Lite CLI (1.17.3)\n  Scan dependencies\n  Highlight critical issues\n  Show a clear fix plan\nAdvisory source: OSV (https://api.osv.dev)\nParsed 69 packages from package-lock (package-lock.json)\n  Queried OSV in 1 batch\n  Scan complete." },

      { k: "h2", id: "osv", t: "5. Why results can differ from npm audit" },
      { k: "p", t: "You may see `npm audit` flag issues that CVE Lite doesn't — that's not a bug, it's database design. `npm audit` checks the npm advisory DB (broader, npm-specific matching, sometimes by version range); CVE Lite queries OSV, a curated cross-ecosystem standard matched by exact version. npm's resolver also silently upgrades to safe patch versions on install, so your tree may already be clean." },
      { k: "code", lang: "bash", code: "# verify what's actually resolved\nnpm list lodash express\n\n# to demo remediation, pin exact vulnerable versions\nrm -rf node_modules package-lock.json\nnpm install lodash@4.17.20 express@4.17.1 --save-exact" },

      { k: "callout", type: "tip", title: "Make it a pre-push habit", t: "Because it's local and offline-capable, `cve-lite .` is fast enough to run before every push — catching vulnerable deps while you still have context, not after CI fails at 2 AM." },

      { k: "h2", id: "wrap", t: "6. Takeaway" },
      { k: "p", t: "CVE Lite CLI isn't another dashboard or PR-blocking gate. It's an honest, developer-first scanner that tells you exactly what to run — closing the gap between \"something's broken\" and \"here's the fix\" where good intentions usually die." },
    ],
  },

  // ────────────────────────────────────────────────────────────── cve-mcp-server
  "cve-mcp-server": {
    lead: "Triaging one CVE means opening NVD for CVSS, EPSS for exploit probability, CISA KEV for active exploitation, GitHub for PoCs, maybe Shodan or VirusTotal — 15–20 minutes a pop. CVE MCP Server gives Claude direct access to 27 security-intelligence tools across 21 sources so one question returns correlated, prioritized intel in seconds.",
    blocks: [
      { k: "h2", id: "what", t: "1. What it is" },
      { k: "p", t: "CVE MCP Server is an open-source, production-grade Model Context Protocol server (built by Mahipal Jangra) that wires Claude into **27 tools across 21 APIs**. Ask one question; Claude orchestrates every relevant lookup in parallel, runs a composite risk calculation, and returns a recommendation with evidence attached. 27 tools, 21 data sources, one protocol, zero browser tabs." },

      { k: "h2", id: "what-you-get", t: "2. What you get" },
      { k: "ul", items: [
        "**27 MCP tools** — CVE lookup, EPSS, KEV, MITRE ATT&CK, Shodan, VirusTotal, dependency scanning, and more",
        "**21 data sources** — NVD, EPSS, CISA KEV, OSV.dev, GitHub GHSA, AbuseIPDB, GreyNoise, MalwareBazaar, ThreatFox, …",
        "**Composite risk engine** — weighted 0–100 score combining CVSS, EPSS, KEV status, and PoC availability",
        "**SQLite cache + audit log** — fast repeat lookups and full tool-invocation history",
        "**Zero-key start** — 8 tools work with no API keys at all",
        "**Outbound HTTPS only** — no inbound ports, no telemetry, private IPs blocked",
      ] },
      { k: "p", t: "Built with Python 3.10+, FastMCP, httpx, aiosqlite, Pydantic v2, and defusedxml. Tools are organized into vulnerability intelligence, exploit/attack intelligence, risk & reporting, network intelligence, threat intelligence, and DevSecOps categories." },

      { k: "h2", id: "install", t: "3. Installation" },
      { k: "p", t: "Prerequisites: Python 3.10+ (3.11/3.12 recommended), `pip` or `uv`, Git, and Claude Desktop or Claude Code. Clone and set up a virtual environment:" },
      { k: "code", lang: "bash", code: "git clone https://github.com/mukul975/cve-mcp-server.git\ncd cve-mcp-server\n\npython -m venv venv\nsource venv/bin/activate   # Windows: .\\venv\\Scripts\\Activate.ps1\n\npip install -e ." },
      { k: "p", t: "Verify the server starts, then wire it into Claude:" },
      { k: "code", lang: "bash", code: "python -m cve_mcp.server\n# FastMCP initializes; Ctrl+C to stop, then add it to your MCP client config" },
      { k: "callout", type: "info", title: "Keys are optional", t: "Eight tools work with no API keys (EPSS, CISA KEV, OSV.dev, MITRE ATT&CK, CWE, CVSS parsing, Ransomwhere, and NVD at a low rate). Add keys later to unlock Shodan, VirusTotal, GreyNoise, and friends." },

      { k: "h2", id: "use", t: "4. What it unlocks" },
      { k: "p", t: "Once connected, Claude becomes a full-spectrum analyst. Ask it to triage a CVE and it can pull the NVD record, EPSS percentile, KEV status, and public PoCs at once; batch-prioritize fifty CVEs by composite risk; map a finding to MITRE ATT&CK; or enrich an IP with Shodan, AbuseIPDB, and GreyNoise — all in one turn." },

      { k: "h2", id: "wrap", t: "5. Takeaway" },
      { k: "p", t: "The glue work of CVE triage — stitching together a dozen siloed sources by hand — is exactly what an MCP server is good at removing. CVE MCP Server turns a tab marathon into a single, evidence-backed question." },
    ],
  },

  // ────────────────────────────────────────────────────────────── Anthropic Cybersecurity Skills
  "anthropic-cybersecurity-skills": {
    lead: "Today's AI agents can write code and search the web, but they can't pick the right Volatility3 plugin for a memory dump or map a finding to MITRE ATT&CK without hallucinating IDs. The Anthropic Cybersecurity Skills library gives any agent the structured decision-making of a senior analyst — step-by-step playbooks, not generic search.",
    blocks: [
      { k: "h2", id: "what", t: "1. What the library is" },
      { k: "p", t: "It's a community project ([mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills)) — **754 skills across 26 security domains**, Apache-2.0 licensed, not affiliated with Anthropic PBC. Each skill is a practitioner playbook in the agentskills.io format: YAML frontmatter for discovery, a Markdown body for execution, plus optional references, scripts, and assets." },
      { k: "callout", type: "info", title: "Not a payload dump", t: "Existing security repos give you wordlists, payloads, or exploit code. This gives an agent the decision workflow a senior analyst follows: prerequisites, step order, verification, and framework mapping." },

      { k: "h2", id: "frameworks", t: "2. Five frameworks, one library" },
      { k: "p", t: "Every skill maps to all five major frameworks at once — one skill, five compliance checkboxes:" },
      { k: "ul", items: [
        "MITRE ATT&CK v19.1 (validated via `mitreattack-python` — zero revoked IDs)",
        "NIST CSF 2.0",
        "MITRE ATLAS",
        "MITRE D3FEND",
        "NIST AI RMF",
      ] },

      { k: "h2", id: "disclosure", t: "3. Progressive disclosure" },
      { k: "p", t: "The clever part is token economics. An agent can scan all 754 skills at roughly ~30 tokens each for discovery, then load only the matching playbooks at ~500–2K tokens. You get broad awareness without blowing the context window — the agent pulls in deep knowledge only when a task actually needs it." },

      { k: "h2", id: "install", t: "4. Installation" },
      { k: "p", t: "The fastest path works with any agentskills.io-compatible platform:" },
      { k: "code", lang: "bash", code: "npx skills add mukul975/Anthropic-Cybersecurity-Skills" },
      { k: "p", t: "Or clone it and inspect the `skills/` directory, where each subfolder is one skill with a `SKILL.md`:" },
      { k: "code", lang: "bash", code: "git clone https://github.com/mukul975/Anthropic-Cybersecurity-Skills.git\ncd Anthropic-Cybersecurity-Skills\nls skills/" },

      { k: "h2", id: "platforms", t: "5. Wiring it into your agent" },
      { k: "p", t: "It works with Cursor, Claude Code, GitHub Copilot, Codex CLI, Gemini CLI, Hermes, and MCP agents. For Claude Code, skills load from `.claude/skills/` (project) or `~/.claude/skills/` (global) — symlink the whole library or copy a subset:" },
      { k: "code", lang: "bash", code: "SKILLS_SRC=~/.cybersec-skills/Anthropic-Cybersecurity-Skills/skills\nmkdir -p ~/.claude/skills\n\n# symlink everything (high discovery surface)\nln -sf \"${SKILLS_SRC}\"/* ~/.claude/skills/\n\n# or copy a focused subset (e.g. DFIR only)\ncp -r \"${SKILLS_SRC}\"/performing-memory-forensics-with-volatility3 ~/.claude/skills/" },
      { k: "p", t: "Verify by asking the agent to use a specific skill — it should read `SKILL.md` and cite structured sections instead of inventing generic commands:" },
      { k: "code", lang: "text", title: "verification prompt", code: "Use the performing-memory-forensics-with-volatility3 skill.\nList prerequisites and the first three Workflow steps only." },

      { k: "h2", id: "domains", t: "6. What the 26 domains cover" },
      { k: "p", t: "From cloud security and DFIR to threat hunting, web-app testing, OT/ICS, and red team — each skill carries prerequisites, an ordered workflow, a verification step, and framework mappings. Real examples include hypothesis-driven threat hunting, multi-cloud breach scoping, and credential-theft analysis in a memory dump." },

      { k: "callout", type: "warn", title: "Authorized use only", t: "These are operational playbooks. They assume legal authorization, defined scope, and human judgment — they don't replace any of those." },

      { k: "h2", id: "wrap", t: "7. Takeaway" },
      { k: "p", t: "This library closes the gap between \"an LLM that searches the web\" and \"an agent that follows a senior analyst's playbook.\" With 754 framework-mapped skills and token-efficient progressive disclosure, it's one of the most practical ways to give an AI agent real security expertise." },
    ],
  },
};
