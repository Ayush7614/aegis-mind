# Contributing

Thanks for helping grow AegisMind. This repo is designed for **clear, reproducible security learning** — not link dumps.

## What we want

- Step-by-step notes with **validation** steps
- Real tool configs (Promptfoo YAML, nuclei templates, skill stubs)
- Cheatsheets you actually use in engagements
- Honest **failure notes** ("this didn't work because…")

## What we don't want

- Copied course material without attribution
- Live credentials, cookies, or client data
- Unverified "hacks" without reproduction steps
- Mass link lists with no structure

## Pull request flow

1. Fork the repo
2. Create a branch: `add/prompt-injection-notes` or `fix/typos-in-recon`
3. Add content in the correct folder (see [getting-started.md](./getting-started.md))
4. Update the section `README.md` index if you add a new file
5. Open a PR with:
   - **What** you added
   - **Why** it's useful
   - **How** you validated it (if applicable)

## Style

- Use `#` titles, `##` sections — keep hierarchy shallow
- Code blocks with language tags: `bash`, `yaml`, `python`
- Prefer tables for comparison (tools, severity, bypass techniques)
- Link to primary sources (papers, vendor docs, disclosed reports)

## Issues

Use issues for:

- Topic requests ("add section on MCP tool poisoning")
- Corrections to outdated tool versions
- Discussions on severity / methodology

---

Built in public by [Ayush Kumar](https://github.com/Ayush7614).
