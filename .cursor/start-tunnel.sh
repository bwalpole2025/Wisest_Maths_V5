#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
CLOUDFLARED="/tmp/cloudflared"
LOG_DIR="$ROOT/.cursor"
URL_FILE="$LOG_DIR/app-url.txt"
LOG_FILE="$LOG_DIR/cloudflared.log"

mkdir -p "$LOG_DIR"

if [ ! -x "$CLOUDFLARED" ]; then
  curl -fsSL -o "$CLOUDFLARED" https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64
  chmod +x "$CLOUDFLARED"
fi

for _ in $(seq 1 60); do
  if curl -sf --connect-timeout 1 http://127.0.0.1:4000/ >/dev/null 2>&1; then
    break
  fi
  sleep 1
done

if ! curl -sf --connect-timeout 1 http://127.0.0.1:4000/ >/dev/null 2>&1; then
  echo "Error: Next.js dev server is not running on port 4000" >&2
  exit 1
fi

"$CLOUDFLARED" tunnel --url http://127.0.0.1:4000 2>&1 | tee "$LOG_FILE" &
TUNNEL_PID=$!

for _ in $(seq 1 30); do
  URL=$(grep -oE 'https://[a-z0-9-]+\.trycloudflare\.com' "$LOG_FILE" 2>/dev/null | head -1 || true)
  if [ -n "$URL" ]; then
    echo "$URL" > "$URL_FILE"
    echo "Public URL: $URL"
    break
  fi
  sleep 1
done

wait "$TUNNEL_PID"
