const CACHE_NAME = 'my-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/jadwal_solat.html',
  '/app.js',
  '/styles.css',
  '/images/logo.png'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      // Caching satu per satu untuk menangani error di setiap file
      return Promise.all(
        urlsToCache.map(function(url) {
          return cache.add(url).catch(function(error) {
            console.error('Failed to cache:', url, error);
          });
        })
      );
    })
  );
});

// Fetch event listener untuk menangani permintaan dari cache
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      // Jika ada response dari cache, kembalikan, jika tidak, fetch dari network
      return response || fetch(event.request);
    })
  );
});
