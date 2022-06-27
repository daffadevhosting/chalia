importScripts('https://cdn.jsdelivr.net/npm/workbox-cdn/workbox/workbox-sw.js');

const { registerRoute } = workbox.routing;
const { CacheFirst, NetworkFirst, StaleWhileRevalidate } = workbox.strategies;
const { CacheableResponse } = workbox.cacheableResponse;

workbox.core.setCacheNameDetails({
  prefix: 'http://localhost:4000',
  suffix: '2022-06'
});

registerRoute(
  '/',
  new NetworkFirst()
);

registerRoute(
  /page[0-99]/,
  new NetworkFirst()
)

registerRoute(
  new RegExp('/\\d{4}/\\d{2}/\\d{2}/.+'),
  new StaleWhileRevalidate()
)

workbox.precaching.precacheAndRoute([
  { url: '/', revision: '202206280514' },
  { url: '/products/', revision: '202206280514' },
  { url: '/blog/', revision: '202206280514' },
  { url: '/cart/', revision: '202206280514' },
  { url: '/checkout/', revision: '202206280514' },
  { url: '/order-terkirim', revision: '202206280514' },
  { url: '/link_bayar/', revision: '202206280514' },
  { url: '/assets/css/style.css', revision: '202206280514' }
])

registerRoute(
  ({request}) => request.destination === 'image' ,
  new CacheFirst({
    plugins: [
      new CacheableResponse({statuses: [0, 200]})
    ],
  })
);

registerRoute(
  /\/(images|favicon|css)/,
  new CacheFirst()
);
