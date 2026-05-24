/* =========================================================
   FLORESCE · Service Worker
   Strategy: cache-first com network fallback + revalidação
   ========================================================= */

const CACHE = "floresce-v3";
const ASSETS = [
  "./",
  "./index.html",
  "./styles.css?v=3",
  "./app.js?v=3",
  "./data/weeks.js",
  "./data/milestones.js",
  "./data/licenses.js",
  "./manifest.webmanifest",
  "./icons/icon-192.svg",
  "./icons/icon-512.svg",
  // Google Fonts (cached at runtime via fetch handler)
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE)
      .then((cache) => cache.addAll(ASSETS).catch(() => {}))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;

  // Cache-first com network fallback
  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) {
        // Revalida em background
        fetch(req)
          .then((res) => {
            if (res && res.status === 200) {
              const copy = res.clone();
              caches.open(CACHE).then((c) => c.put(req, copy)).catch(() => {});
            }
          })
          .catch(() => {});
        return cached;
      }
      // Não tem em cache: busca na rede e cacheia
      return fetch(req)
        .then((res) => {
          if (res && res.status === 200 && res.type === "basic") {
            const copy = res.clone();
            caches.open(CACHE).then((c) => c.put(req, copy)).catch(() => {});
          }
          return res;
        })
        .catch(() => caches.match("./index.html"));
    })
  );
});
