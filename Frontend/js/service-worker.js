const CACHE_NAME = 'learnzone-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/css/tailwind.css', // Ensure this path is correct after Tailwind build
    // '/css/style.css', // Uncomment if you add custom CSS to style.css
    '/js/main.js',
    '/js/service-worker.js',
    '/public/manifest.json',
    '/public/icons/icon-192x192.png', // Add your icon paths
    '/public/icons/icon-512x512.png',  // Add your icon paths
    '/login.html', // Add other HTML pages you create
    '/signup.html', // Add other HTML pages you create
    '/lessons.html',
    '/community.html',
    '/progress.html'
];

self.addEventListener('install', event => {
    console.log('Service Worker: Install Event');
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Service Worker: Caching App Shell');
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Cache hit - return response
                if (response) {
                    console.log('Service Worker: Fetching from cache:', event.request.url);
                    return response;
                }
                // No cache - fetch from network
                console.log('Service Worker: Fetching from network:', event.request.url);
                return fetch(event.request);
            })
            .catch(() => {
                // Fallback for when both cache and network fail (e.g., completely offline for an uncached asset)
                // You might return an offline page here
                console.log('Service Worker: Fetch failed, returning generic offline fallback if available.');
                // return caches.match('/offline.html'); // Optional: create an /offline.html
            })
    );
});

self.addEventListener('activate', event => {
    console.log('Service Worker: Activate Event');
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('Service Worker: Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});