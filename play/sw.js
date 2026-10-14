// The hosted web version's offline cache (registered in main.tsx only for
// the "pages" build). Stale-while-revalidate: whatever was cached plays at
// once, offline too, and the newest version is fetched behind it for the
// next launch.
// Bump on every release so old hashed assets are dropped.
const CACHE = "ruinborne-1.6.0";

// At install, every file of the game (precache.json, written by
// scripts/pages.mjs), so it plays offline from the first launch.
self.addEventListener("install", (e) => {
  self.skipWaiting();
  e.waitUntil(
    fetch("./precache.json")
      .then((r) => r.json())
      .then((list) => caches.open(CACHE).then((c) => c.addAll(list)))
      .catch(() => undefined),
  );
});
self.addEventListener("activate", (e) =>
  e.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith("ruinborne") && k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  ),
);

self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET" || new URL(e.request.url).origin !== self.location.origin) return;
  e.respondWith(
    caches.open(CACHE).then(async (cache) => {
      const hit = await cache.match(e.request);
      const fresh = fetch(e.request)
        .then((res) => {
          if (res.ok) cache.put(e.request, res.clone());
          return res;
        })
        .catch(() => hit);
      return hit || fresh;
    }),
  );
});
