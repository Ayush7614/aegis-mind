# Anthropic Skills & Agent Patterns

Cursor / Codex **skills** (`SKILL.md`), security hunting skills, and MCP workflow patterns inspired by Anthropic's agent tooling model.

## What is a skill?

A skill is a **markdown instruction file** that teaches an AI agent how to perform a specialized task — with workflows, tool guidance, and domain rules.

```text
SKILL.md → Agent reads on trigger → Follows structured workflow → Uses MCP tools
```

## Sub-areas

| Folder | Focus |
|--------|--------|
| [security-skills/](./security-skills/) | Bug bounty, recon, vuln-class hunters |
| [skill-anatomy/](./skill-anatomy/) | How to write effective SKILL.md files |
| [mcp-patterns/](./mcp-patterns/) | Tool design for agent security |
| [catalog/](./catalog/) | Index of skills with triggers & scope |

## Skill anatomy (minimal)

```markdown
# Skill Name

Use when [trigger conditions].

## Workflow
1. Step one
2. Step two

## Tools
- Which MCP / CLI tools to use

## Rules
- Scope, safety, evidence hygiene
```

## Security skill categories

| Category | Examples |
|----------|----------|
| Recon | OSINT, subdomain enum, JS analysis |
| Hunt | XSS, IDOR, SSRF, LLM injection |
| Validate | triage-validation, evidence-hygiene |
| Report | report-writing, bugcrowd-reporting |
| Cloud | IAM escalation, bucket enum |
| AI | hunt-llm-ai, prompt injection probes |

## Notes index

| File | Topic | Status |
|------|-------|--------|
| [skill-anatomy/how-to-write-skills.md](./skill-anatomy/how-to-write-skills.md) | Writing SKILL.md | 🟢 |
| — | _Add more skills here_ | ⬜ |

## Related

- Building MCP → [../ai-tools/agents-mcp/](../ai-tools/agents-mcp/)
- Securing agents → [../ai-security/agent-threats/](../ai-security/agent-threats/)
