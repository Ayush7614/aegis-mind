#!/usr/bin/env bash
# Regenerate all terminal demo GIFs + PNG screenshots.
# Requirements: vhs, ttyd, ffmpeg  (brew install vhs ttyd ffmpeg)
# Usage: ./demo/render.sh           (run from repo root or anywhere)
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

mkdir -p website/public/demos

for tape in demo/tapes/*.tape; do
  echo "▸ rendering $tape"
  vhs "$tape"
done

echo "✓ demos written to website/public/demos/"
ls -lh website/public/demos
