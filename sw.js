/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-9ebb550a34b0c9642539.js"
  },
  {
    "url": "framework-985f05d65ff007f89938.js"
  },
  {
    "url": "app-c9506329ae10283585f8.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "13441ecac07715f4fc3c60a2d3b6115b"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-77466cc0b3ed4dac08eb.js"
  },
  {
    "url": "polyfill-95f59e652fe95bed95ef.js"
  },
  {
    "url": "styles.95c19c08ce1e8b7eb36e.css"
  },
  {
    "url": "styles-7d4153d260c0197f0043.js"
  },
  {
    "url": "6cc8443b1d4f1f7b93bbb555f9440d2606a4366e-65a84fbbc9f6389a391b.js"
  },
  {
    "url": "7dfe2cbead57b74ee8034526a019ebe38b748377-e50de652243bdab95990.js"
  },
  {
    "url": "e4b1649e3b2c55a94ae40236dae23197bf3071dd-1ce5cec75c098196a8c7.js"
  },
  {
    "url": "f651cd236536b0861ca655e6586c162b9e32d15e-5025e5b9e032c9cd0451.js"
  },
  {
    "url": "component---src-pages-index-js-6e1025778203abfde6ef.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "0c8eca216020c1ba373ef3dfe0c985d3"
  },
  {
    "url": "page-data/sq/d/1048884215.json",
    "revision": "b0bab19decf4a02b66329b6c4ffe5249"
  },
  {
    "url": "page-data/sq/d/1367266899.json",
    "revision": "77d325cd7ebf756dbefa1b7000930788"
  },
  {
    "url": "page-data/sq/d/157104633.json",
    "revision": "270a9d3e8cac69461b7d3bd8bd1855b8"
  },
  {
    "url": "page-data/sq/d/1604955154.json",
    "revision": "22cbb28ef339df7181f422f824b61c17"
  },
  {
    "url": "page-data/sq/d/1634675698.json",
    "revision": "ed5d6508b652e538d1d6bb9711adfb82"
  },
  {
    "url": "page-data/sq/d/1764094379.json",
    "revision": "40c08fa0ee2dfe8ac06c4a21088ed099"
  },
  {
    "url": "page-data/sq/d/1794611690.json",
    "revision": "fe82e44b40e978813c8015c5ac3cdf1b"
  },
  {
    "url": "page-data/sq/d/1795066084.json",
    "revision": "70f7ce270ef371d0cff3c57e22068b1e"
  },
  {
    "url": "page-data/sq/d/2091575419.json",
    "revision": "a982dbf2bb5ef1bc0e74f2bca8a52841"
  },
  {
    "url": "page-data/sq/d/2576184863.json",
    "revision": "1e4f74817bd1c2dd3c5a243b24367daa"
  },
  {
    "url": "page-data/sq/d/284984113.json",
    "revision": "e9c93578c42b390d9109bc55165153a4"
  },
  {
    "url": "page-data/sq/d/3023396775.json",
    "revision": "8f08eb7b1d15a3491a0ab368b45efcb7"
  },
  {
    "url": "page-data/sq/d/3253664308.json",
    "revision": "c07a22914e9717f6b5367e8cb1dcdc99"
  },
  {
    "url": "page-data/sq/d/3400195001.json",
    "revision": "6e70afb7e0ec17fce5c8d03945921d6d"
  },
  {
    "url": "page-data/sq/d/3700676189.json",
    "revision": "97dc2236603b20f84b34eb6f2ba42e76"
  },
  {
    "url": "page-data/sq/d/3869989848.json",
    "revision": "cabc6652d28648aaab6de591eb941a28"
  },
  {
    "url": "page-data/sq/d/511617852.json",
    "revision": "e692687330d707ce3270682893ad4efc"
  },
  {
    "url": "page-data/sq/d/814449831.json",
    "revision": "c4b3dca7335a681b2e2e860e825c8275"
  },
  {
    "url": "page-data/sq/d/830535043.json",
    "revision": "ead2f0abc0459a44c651163b5379310c"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "7dfdb724246875b7ce78e85be7917a0c"
  },
  {
    "url": "component---src-pages-portfolio-js-61c36cd6559990a2ca15.js"
  },
  {
    "url": "page-data/portfolio/page-data.json",
    "revision": "2d142da245b5b5b414d336b27916ada7"
  },
  {
    "url": "9aef068255bcc9fa50c8d1030a01d8bdd0752257-61a15e31d7bbd423d954.js"
  },
  {
    "url": "component---src-pages-services-js-31f757d7cc0a25b79a47.js"
  },
  {
    "url": "page-data/services/page-data.json",
    "revision": "977a89e93f2a3c541d79cfd2fa4aad19"
  },
  {
    "url": "component---src-pages-blog-js-285ceb3a4b82be0c4326.js"
  },
  {
    "url": "page-data/blog/page-data.json",
    "revision": "8ba09879db470ec9ceefc1d869c8fe81"
  },
  {
    "url": "component---src-pages-contacts-js-4fe56d610131e9411448.js"
  },
  {
    "url": "page-data/contacts/page-data.json",
    "revision": "588b535ae337268b180485f4a2b21b0d"
  },
  {
    "url": "component---src-pages-thanks-js-af5babf97a44f3a17f89.js"
  },
  {
    "url": "page-data/thanks/page-data.json",
    "revision": "1bee5734ad14f131b46e3a0a4d2d590f"
  },
  {
    "url": "component---src-pages-404-js-34deaa6d410937310f7a.js"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "e91cfb8b0db525cae8b8100b012dcba9"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "18c92cf8eee4211e2a1eb03d4bab5665"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/.*\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-c9506329ae10283585f8.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
