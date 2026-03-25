const CACHE_NAME = 'pirate-treasure-v1';
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './css/styles.css',
    './js/speech.js',
    './js/audio.js',
    './js/germanData.js',
    './js/games.js',
    './js/main.js',
    './assets/img/nico_quieto.png',
    './assets/img/nico_hablando.png',
    './assets/img/nico_mapa.png',
    './assets/img/nico_saludo_hablando.png',
    './assets/img/mapa_fondo.png',
    './assets/img/bahia_fondo.png',
    './assets/img/bosque_fondo.png',
    './assets/img/cofre_fondo.png',
    './assets/img/cubierta_fondo.png',
    './assets/img/cueva_fondo.png',
    'https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap'
];

self.addEventListener('install', event => {
    // Forzar al nuevo service worker a tomar el control inmediatamente
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Opened cache');
                return Promise.allSettled(
                    ASSETS_TO_CACHE.map(url => cache.add(url).catch(err => console.warn('Failed to cache', url, err)))
                );
            })
    );
});

self.addEventListener('activate', event => {
    // Tomar el control de todos los clientes inmediatamente
    event.waitUntil(self.clients.claim());
    const cacheWhiteList = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheWhiteList.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Return cache if found, else fetch from network
                if (response) {
                    return response;
                }
                return fetch(event.request).then(
                    function(response) {
                        // Check if we received a valid response
                        if(!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }

                        // IMPORTANT: Clone the response. A response is a stream
                        // and because we want the browser to consume the response
                        // as well as the cache consuming the response, we need
                        // to clone it so we have two streams.
                        var responseToCache = response.clone();

                        caches.open(CACHE_NAME)
                            .then(function(cache) {
                                // Don't cache range requests
                                if (event.request.headers.get('range')) return;
                                cache.put(event.request, responseToCache);
                            });

                        return response;
                    }
                );
            })
    );
});
