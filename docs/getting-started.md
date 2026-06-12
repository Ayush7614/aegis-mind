# Getting Started

Welcome to **AegisMind** — a structured vault for cybersecurity and AI security learning.

## Who this is for

- Security engineers moving into **AI / LLM security**
- Builders shipping **agents & MCP tools** who need a security lens
- Bug bounty hunters adding **AI feature** surface to their workflow
- DevRel / technical writers organizing **public learning**

## How to use this repo

### 1. Browse by folder

Each top-level directory has its own `README.md` index. Start there — don't grep the whole tree on day one.

### 2. Follow a learning track

See the main [README](../README.md#learning-tracks) for four suggested paths (cyber, AI security, build+secure, Anthropic skills).

### 3. Add your own notes

Copy the note template below into the right folder. Use lowercase filenames with hyphens: `prompt-injection-basics.md`.

## Note template

```markdown
# Title

> One-line summary

## Goal
What you will learn or accomplish.

## Prerequisites
- Tools, accounts, prior reading

## Steps
1. Step one with command or screenshot reference
2. Step two

## Validation
How to confirm success (output, behavior, test case).

## References
- [Link title](url)

## My notes
Gotchas, engagement stories, things that broke.
```

## Folder placement guide

| Content type | Folder |
|--------------|--------|
| XSS, IDOR, SSRF, recon, cloud IAM | `cybersecurity/` |
| Prompt injection, jailbreaks, ASI threats | `ai-security/` |
| Ollama, RAG, agents, MCP setup | `ai-tools/` |
| Promptfoo, Deepteam, guardrail configs | `ai-security-tools/` |
| Cursor/Codex skills, SKILL.md patterns | `anthropic-skills/` |
| External links, cheatsheets, books | `resources/` |

## Safety rules

1. **Authorized testing only** — lab targets, bug bounty scope, your own infra.
2. **No secrets** — never commit `.env`, API keys, session cookies, or client artifacts.
3. **Redact PoCs** — mask tokens and PII in screenshots before pushing.
4. **Scope discipline** — note which program / engagement context applies.

## Local setup (optional)

This repo is mostly Markdown. No build step required.

```bash
git clone https://github.com/Ayush7614/aegis-mind.git
cd aegis-mind
# Use your editor — Cursor, VS Code, Obsidian, etc.
```

For Markdown preview in VS Code / Cursor: open any `.md` file and use **Markdown Preview**.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md).
