# How to Write Agent Skills (SKILL.md)

> A practical guide for Cursor, Codex, and Claude-style agent skills.

## Goal

Create skills that agents **actually follow** — clear triggers, bounded workflows, explicit tool usage.

## Prerequisites

- A task you repeat often (recon, report writing, eval setup)
- List of CLI tools or MCP servers involved
- Safety / scope rules for the task

## Anatomy of a strong skill

### 1. Title + trigger

State **when** the agent should load this skill:

```markdown
# Hunt SSRF

Use when hunting SSRF on a web target, testing cloud metadata chains,
or when the user mentions fetch, webhook, or URL preview features.
```

### 2. Workflow (numbered)

Agents follow steps better than prose paragraphs:

```markdown
## Workflow
1. Map URL-accepting parameters (Burp, JS files, API docs)
2. Test internal IPs and cloud metadata (169.254.169.254)
3. Confirm with out-of-band or time-based techniques
4. Document validation before reporting
```

### 3. Tools section

Name exact tools — reduces hallucinated commands:

```markdown
## Tools
- `curl` / Burp Repeater for SSRF probes
- `ffuf` for parameter discovery
- Cloud metadata cheat sheet in resources/
```

### 4. Rules (non-negotiable)

```markdown
## Rules
- Authorized scope only
- No destructive payloads on production
- Redact session cookies in any saved output
```

### 5. References

Link to deeper notes in this repo or external primary sources.

## Validation

A good skill should let a fresh agent session complete the workflow without asking "what's SSRF?" for basics — but still ask when scope is unclear.

## My notes

- Keep skills **under ~500 lines**; split mega-skills into hunt-* modules
- Mirror Anthropic's pattern: one skill per vuln class or phase
- Pair offensive skills with `triage-validation` and `evidence-hygiene`

## References

- [Cursor Skills docs](https://cursor.com/docs)
- [Anthropic MCP documentation](https://docs.anthropic.com/en/docs/build-with-claude/mcp)
