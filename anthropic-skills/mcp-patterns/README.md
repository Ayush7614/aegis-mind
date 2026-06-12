# MCP Patterns for Security

Secure MCP server design when agents need offensive or defensive tooling.

## Secure tool design

| Pattern | Good | Bad |
|---------|------|-----|
| Scope | `read_file(path)` with root jail | `run_shell(cmd)` |
| Network | Allowlist domains | Open `fetch(url)` |
| Auth | Per-session capability token | Global admin tool |
| Audit | Log tool name + args (redacted) | Silent execution |

## Anti-patterns

- **God tool** — one MCP tool that does everything
- **Credential passthrough** — tool accepts raw API keys from model output
- **Blind SSRF** — fetch tool with no URL validation

## Notes

| Note | Description |
|------|-------------|
| — | — |

## Related

- [RuntimeWall](https://github.com/RuntimeWall/RuntimeWall) — runtime MCP security
- [../ai-security/runtime-governance/](../../ai-security/runtime-governance/)
