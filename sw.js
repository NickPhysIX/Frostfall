// Frostfall service worker
// Cache version - bump this when assets change to force refresh
const CACHE_VERSION = 'frostfall-v7-0';

// Assets to pre-cache on install
const ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './player.png',
  './survivor.png',
  './bear.png',
  './brute.png',
  './wolf.png',
  './yeti.png',
  './tree.png',
  './tower.png',
  './ice_tower.png',
  './meat.png',
  './campfire.png',
  './axe.png',
  './mat_wood.png',
  './mat_meat.png',
  './mat_money.png',
  './icon-192.png',
  './icon-512.png',
  './apple-touch-icon.png',
  './favicon-32.png'
];

// Install: pre-cache all assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION)
      .then(cache => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

// Activate: clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k !== CACHE_VERSION).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

// Fetch strategy:
// - HTML: network-first (so updates propagate), fallback to cache
// - Everything else: cache-first (fast, works offline)
self.addEventListener('fetch', (event) => {
  const req = event.request;
  // Only handle GET
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  const isHTML = req.mode === 'navigate' || req.destination === 'document' || url.pathname.endsWith('.html') || url.pathname === '/' || url.pathname.endsWith('/');

  if (isHTML) {
    // Network-first for HTML
    event.respondWith(
      fetch(req)
        .then(res => {
          // Update cache in background
          const resClone = res.clone();
          caches.open(CACHE_VERSION).then(c => c.put(req, resClone)).catch(() => {});
          return res;
        })
        .catch(() => caches.match(req).then(r => r || caches.match('./index.html')))
    );
  } else {
    // Cache-first for assets
    event.respondWith(
      caches.match(req).then(cached => {
        if (cached) return cached;
        return fetch(req).then(res => {
          // Cache successful responses for next time
          if (res && res.status === 200 && res.type === 'basic') {
            const resClone = res.clone();
            caches.open(CACHE_VERSION).then(c => c.put(req, resClone)).catch(() => {});
          }
          return res;
        });
      })
    );
  }
});
