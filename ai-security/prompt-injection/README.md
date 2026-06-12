# Prompt Injection

Direct, indirect, and multi-modal injection against LLM systems.

## Types

| Type | Vector | Example |
|------|--------|---------|
| Direct | User chat input | "Ignore previous instructions…" |
| Indirect | RAG docs, emails, web pages | Hidden instructions in PDF |
| Tool-use | MCP / function calls | Malicious URL in fetched page |
| ASCII smuggling | Unicode tag blocks | Invisible to humans, visible to model |

## Defense layers

1. Input sanitization (limited alone)
2. System prompt hardening
3. Output filtering
4. Tool allowlists & network egress control
5. Human-in-the-loop for high-risk actions

## Notes

| Note | Description |
|------|-------------|
| — | — |
