// The hosted web version's offline cache (registered in main.tsx only for
// the "pages" build). Stale-while-revalidate: whatever was cached plays at
// once, offline too, and the newest version is fetched behind it for the
// next launch.
// "1.6.0-9f033598" is replaced by scripts/pages.mjs with the package
// version plus a hash of the build, so each release gets a fresh cache.
const CACHE = "ruinborne-1.6.0-9f033598";

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
// Drop the caches of earlier releases (their hashed assets are dead weight).
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
