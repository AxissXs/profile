const CACHE_NAME = 'my-sveltekit-cache-v1';
const ASSETS = [
	'/',
	'/skills',
	'/stacks',
	'/projects',
	'/offline.html',
	'/favicon.ico',
	'/site.webmanifest',
	'/apple-touch-icon.png',
	'/favicon-32x32.png',
	'/favicon-16x16.png',
	'/android-chrome-512x512.png',
	'/android-chrome-192x192.png',
	'/images/photo.webp',
	'/icons/github.svg',
	'/icons/linkedin.svg',
	'/icons/stack-overflow.svg',
	'/fonts/Vazirmatn-FD-Black.woff2',
	'/fonts/Vazirmatn-FD-Bold.woff2',
    '/fonts/Vazirmatn-FD-ExtraBold.woff2',
    '/fonts/Vazirmatn-FD-ExtraLight.woff2',
    '/fonts/Vazirmatn-FD-Medium.woff2',
    '/fonts/Vazirmatn-FD-Regular.woff2',
    '/fonts/Vazirmatn-FD-Light.woff2',
    '/fonts/Vazirmatn-FD-Thin.woff2',
    '/fonts/Vazirmatn-FD-SemiBold.woff2',
];

self.addEventListener('install', (event) => {
	self.skipWaiting();
	event.waitUntil(
		caches.open(CACHE_NAME).then((cache) => {
			return cache.addAll(ASSETS);
		})
	);
});

self.addEventListener('activate', (event) => {
	event.waitUntil(
		caches.keys().then((keys) =>
			Promise.all(
				keys.map((key) => {
					if (key !== CACHE_NAME) return caches.delete(key);
				})
			)
		)
	);
	self.clients.claim();
});

self.addEventListener('fetch', (event) => {
	event.respondWith(
		caches.match(event.request).then((cached) => {
			return (
				cached ||
				fetch(event.request).catch(() => {
					if (event.request.mode === 'navigate') {
						return caches.match('/offline.html');
					}
				})
			);
		})
	);
});
