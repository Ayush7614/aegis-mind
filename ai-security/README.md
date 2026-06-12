# AI Security

Securing and attacking LLM-backed systems — red teaming, guardrails, runtime governance.

## Sub-areas

| Folder | Focus |
|--------|--------|
| [red-teaming/](./red-teaming/) | Jailbreaks, probe suites, Deepteam / Promptfoo |
| [prompt-injection/](./prompt-injection/) | Direct, indirect, tool-use injection |
| [guardrails/](./guardrails/) | Input/output filters, policy layers |
| [agent-threats/](./agent-threats/) | ASI framework, tool poisoning, exfil |
| [runtime-governance/](./runtime-governance/) | Sandboxing, allowlists, observability |

## Threat model quick map

```text
User input → Model → Tools (MCP) → Data stores → Downstream APIs
     ↑           ↑         ↑            ↑
  injection   jailbreak  poisoning    IDOR via AI
```

## Learning path

```text
1. LLM attack surface mapping
2. Prompt injection (direct + indirect)
3. Red team with automated eval (Promptfoo, Deepteam)
4. Agent / MCP security (tool scope, SSRF via fetch tools)
5. Runtime governance (RuntimeWall patterns)
```

## Notes index

| File | Topic | Status |
|------|-------|--------|
| — | _Add your first note here_ | ⬜ |

## Related

- Tools → [../ai-security-tools/](../ai-security-tools/)
- Building agents → [../ai-tools/](../ai-tools/)
- Skills → [../anthropic-skills/](../anthropic-skills/)
