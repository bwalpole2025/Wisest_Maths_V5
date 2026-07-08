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
            if (location.hostname === 'localhost' || location.hostname === '127.0.0.1') {
              navigator.serviceWorker.getRegistrations().then(function (regs) {
                regs.forEach(function (r) { r.unregister(); });
              });
              caches.keys().then(function (keys) {
                keys.forEach(function (k) { caches.delete(k); });
              });
            } else {
              window.addEventListener('load', function () {
                navigator.serviceWorker.register('/sw.js').catch(function () {});
              });
            }
          }
        `,
      }}
    />
  );
}
