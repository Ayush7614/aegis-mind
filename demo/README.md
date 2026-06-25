# Terminal demos

Reproducible, recorded terminal demos (GIF + PNG) used in the AegisMind blog —
e.g. the OpenTaint guide. Built with [VHS](https://github.com/charmbracelet/vhs).

## What's here

```
demo/
├── bin/opentaint       # colored shim that emulates OpenTaint output
├── bin/install-demo.sh # fake installer body (username masked with a red bar)
├── .demorc             # branded demo shell (green/cyan aegis@vault prompt)
├── .demorc-install     # install demo shell (masked prompt + curl shim)
├── tapes/              # VHS scripts (.tape) — one per demo
│   ├── scan.tape
│   ├── custom-rule.tape
│   ├── install.tape
│   ├── help.tape
│   └── spring-scaffold.tape
├── bin/scaffold-demo.sh # replays a Spring Boot scaffold+run session
└── render.sh           # render every tape into website/public/demos/
```

> The `opentaint` shim is **not** the real tool. It only prints realistic,
> colored output so demos look authentic without a full Java/OpenTaint setup.
> Output GIFs/PNGs land in `website/public/demos/` so the site can embed them.

## Requirements

```bash
brew install vhs ttyd ffmpeg gifsicle
```

> `gifsicle` is optional but recommended — long demos can be large, so compress
> them after rendering, e.g.
> `gifsicle -O3 --lossy=80 --colors 80 in.gif -o in.gif`.

## Regenerate all demos

```bash
# from the repo root
./demo/render.sh
```

## Render a single demo

```bash
# from the repo root (paths in tapes are repo-root relative)
vhs demo/tapes/scan.tape
vhs demo/tapes/custom-rule.tape
```

## Add a new demo

1. Add any new fake commands to `demo/bin/opentaint` (or a new shim in `bin/`).
2. Copy a tape in `tapes/`, change `Output`, the `Type` lines, and the
   `Screenshot` path.
3. Run `./demo/render.sh` and embed the result via the `TerminalDemo` component:

```tsx
<TerminalDemo src="demos/your-demo.gif" caption="what it shows" />
```
