self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('uktrends-store').then((cache) => cache.addAll(['/uktrends-website/']))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});

