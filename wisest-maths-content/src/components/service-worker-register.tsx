"use client";

import Script from "next/script";

export function ServiceWorkerRegister() {
  return (
    <Script
      id="sw-register"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          if ('serviceWorker' in navigator) {
            window.addEventListener('load', function () {
              navigator.serviceWorker.register('/sw.js').catch(function () {});
            });
          }
        `,
      }}
    />
  );
}
