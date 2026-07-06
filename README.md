# Wisest Maths Workspace

This repository keeps the Next.js app in `wisest-maths-content/`.

## Run in Cursor/Cloud

From the repository root:

```bash
npm run dev
```

The root script automatically installs app dependencies (if needed) and starts the app with a cloud-safe host binding (`0.0.0.0`).

It also force-cleans stale listeners on port `3000` before launch, so repeated Cursor runs do not get stuck on the wrong port.
