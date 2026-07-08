"use client";

type Katex = typeof import("katex").default;

let katexPromise: Promise<Katex> | null = null;

export function loadKatex(): Promise<Katex> {
  if (!katexPromise) {
    katexPromise = import("katex").then((m) => m.default);
  }
  return katexPromise;
}

export async function renderKatexAsync(tex: string, displayMode: boolean): Promise<string> {
  const katex = await loadKatex();
  try {
    return katex.renderToString(tex, {
      displayMode,
      throwOnError: false,
      strict: false,
      trust: true,
      output: "html",
    });
  } catch {
    return tex;
  }
}
