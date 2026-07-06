#!/usr/bin/env bash
set -euo pipefail

APP_DIR="wisest-maths-content"
PORT="${PORT:-3000}"

if [ ! -d "${APP_DIR}/node_modules" ]; then
  echo "Installing app dependencies in ${APP_DIR}..."
  npm --prefix "${APP_DIR}" install --no-audit --no-fund
fi

if command -v lsof >/dev/null 2>&1; then
  EXISTING_PIDS="$(lsof -tiTCP:${PORT} -sTCP:LISTEN || true)"
  if [ -n "${EXISTING_PIDS}" ]; then
    echo "Port ${PORT} is busy; stopping existing listener(s): ${EXISTING_PIDS}"
    kill ${EXISTING_PIDS} || true
    sleep 1
  fi
fi

echo "Starting Next.js on 0.0.0.0:${PORT}..."
exec npm --prefix "${APP_DIR}" run dev -- --port "${PORT}"
