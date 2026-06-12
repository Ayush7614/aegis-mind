# Agents & MCP

Model Context Protocol servers, agent orchestration, tool design.

## MCP concepts

| Piece | Role |
|-------|------|
| Server | Exposes tools, resources, prompts |
| Client | IDE / agent that calls the server |
| Tool | Callable function with schema |
| Resource | Readable data (files, APIs) |

## Design principles

1. **Least privilege** — one tool, one capability
2. **Schema strictness** — reject ambiguous inputs
3. **No silent network** — explicit allowlist for fetch tools
4. **Audit logs** — every tool invocation recorded

## Notes

| Note | Description |
|------|-------------|
| — | — |

## Related

- Security → [../../ai-security/agent-threats/](../../ai-security/agent-threats/)
- Skills → [../../anthropic-skills/](../../anthropic-skills/)
