self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Cần fetch listener để trình duyệt cho phép cài đặt App
  event.respondWith(fetch(event.request));
});
