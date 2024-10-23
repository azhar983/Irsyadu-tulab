const CACHE_NAME = 'prayer-times-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/styles.css',  // Tambahkan file CSS yang digunakan
    '/app.js',      // Tambahkan file JavaScript yang digunakan
    '/offline.html' // Halaman offline opsional
];

// Instal Service Worker dan cache file-file penting
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

// Mengambil file dari cache
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                // File ditemukan di cache
                if (response) {
                    return response;
                }
                // Jika tidak ada di cache, ambil dari jaringan
                return fetch(event.request);
            }).catch(() => {
                return caches.match('/offline.html');
            })
    );
});

// Menghapus cache lama saat ada pembaruan
self.addEventListener('activate', (event) => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (!cacheWhitelist.includes(cacheName)) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
