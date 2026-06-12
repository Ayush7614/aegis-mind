# Promptfoo

Eval and red teaming with Promptfoo — configs, providers, CI integration.

## Quick start

```bash
npm install -g promptfoo
promptfoo init
promptfoo eval
promptfoo view
```

## Config structure

```yaml
# promptfooconfig.yaml (example skeleton)
description: Basic policy eval
prompts:
  - "You are a helpful assistant. User: {{input}}"
providers:
  - ollama:llama3.2
tests:
  - vars:
      input: "Say hello"
    assert:
      - type: llm-rubric
        value: Response is polite and safe
```

## Notes

| Note | Description |
|------|-------------|
| — | — |
