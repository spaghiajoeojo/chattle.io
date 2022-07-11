import { precacheAndRoute } from 'workbox-precaching';

declare let self: ServiceWorkerGlobalScope

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting()
  }
});

setTimeout(() => {
  if (Notification.permission === 'granted') {
    self.registration.showNotification('A title', { body: 'A notification body', vibrate: [100, 200, 300] });
  }
}, 10000);

// self.__WB_MANIFEST is default injection point
precacheAndRoute(self.__WB_MANIFEST)