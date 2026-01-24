#!/usr/bin/env bash
set -euo pipefail

# Wrapper to run Codex CLI non-TUI reliably with the bundled Node version.

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
CODEX_NODE="$HOME/.nvm/versions/node/v22.18.0/bin/node"
CODEX_CLI="$HOME/.nvm/versions/node/v22.18.0/lib/node_modules/@openai/codex/bin/codex.js"

if [[ ! -x "$CODEX_NODE" ]]; then
  echo "Missing Node at: $CODEX_NODE" >&2
  exit 1
fi

if [[ ! -f "$CODEX_CLI" ]]; then
  echo "Missing Codex CLI at: $CODEX_CLI" >&2
  exit 1
fi

if [[ $# -lt 1 ]]; then
  echo "Usage: scripts/codex-run.sh <codex-subcommand> [args...]" >&2
  echo "Example: scripts/codex-run.sh exec \"Summarize repo status\"" >&2
  exit 1
fi

cd "$ROOT_DIR"
exec "$CODEX_NODE" "$CODEX_CLI" "$@"
