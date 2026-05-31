const CACHE_NAME = 'galaxia-cache-v8';
const PRECACHE_ASSETS = [
  'index.html',
  'css/styles.css',
  'assets/data/words.json'
];

// Install Event - Precache App Shell
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Precaching app shell');
      return cache.addAll(PRECACHE_ASSETS);
    })
  );
  self.skipWaiting();
});

// Activate Event - Clean old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('Clearing old cache:', cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Helper to slice a cached full response into a 206 Range Response
function createRangeResponse(response, rangeHeader) {
  return response.arrayBuffer().then((arrayBuffer) => {
    const bytes = rangeHeader.replace(/bytes=/, "").split("-");
    const start = parseInt(bytes[0], 10);
    const end = bytes[1] ? parseInt(bytes[1], 10) : arrayBuffer.byteLength - 1;

    if (start >= arrayBuffer.byteLength || end >= arrayBuffer.byteLength) {
      return new Response('', {
        status: 416,
        statusText: 'Range Not Satisfiable',
        headers: { 'Content-Range': `bytes */${arrayBuffer.byteLength}` }
      });
    }

    const sliced = arrayBuffer.slice(start, end + 1);
    const newHeaders = new Headers(response.headers);
    newHeaders.set('Content-Range', `bytes ${start}-${end}/${arrayBuffer.byteLength}`);
    newHeaders.set('Content-Length', sliced.byteLength);
    newHeaders.set('Accept-Ranges', 'bytes');

    return new Response(sliced, {
      status: 206,
      statusText: 'Partial Content',
      headers: newHeaders
    });
  });
}

// Fetch Event - Cache-First for dynamic media assets & static files
self.addEventListener('fetch', (event) => {
  const request = event.request;
  
  // We only cache requests from our own origin
  if (!request.url.startsWith(self.location.origin)) {
    return;
  }

  const rangeHeader = request.headers.get('range');

  if (rangeHeader) {
    event.respondWith(
      caches.match(request).then((cachedResponse) => {
        if (cachedResponse) {
          return createRangeResponse(cachedResponse, rangeHeader);
        }
        
        // Fetch the FULL file from the network to cache it, then return a 206 slice
        const cleanRequest = new Request(request.url, {
          method: request.method,
          headers: new Headers(request.headers)
        });
        cleanRequest.headers.delete('range');

        return fetch(cleanRequest).then((networkResponse) => {
          if (networkResponse.status === 200) {
            const cacheCopy = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, cacheCopy);
            });
            return createRangeResponse(networkResponse, rangeHeader);
          }
          // Fallback if status is not 200 (e.g. from network direct range)
          return fetch(request);
        }).catch(() => fetch(request));
      })
    );
    return;
  }

  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      
      return fetch(request).then((networkResponse) => {
        // Cache dynamic audio, images, or JSON data for offline use.
        // Critical: Only cache full 200 OK responses to prevent cache corruption.
        if (
          networkResponse.status === 200 &&
          (request.url.includes('/assets/audio/') || 
           request.url.includes('/assets/images/') ||
           request.url.endsWith('.json') ||
           request.url.endsWith('.css') ||
           request.url.endsWith('.js'))
        ) {
          const cacheCopy = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, cacheCopy);
          });
        }
        return networkResponse;
      }).catch((err) => {
        console.error('Fetch failed for resource:', request.url, err);
      });
    })
  );
});
