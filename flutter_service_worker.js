'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "e6afac7f35061685af15c1bdec468f78",
"assets/AssetManifest.bin.json": "3d0dc846be305e67ca381c735a4900b9",
"assets/AssetManifest.json": "bf0d17ceb0bc03a093bed6bd13a951ff",
"assets/assets/images/ansible_logo.png": "0314f43ae98827c6889d30e29c5e171a",
"assets/assets/images/apache_logo.png": "fa1719796303141067d3d7bed21b9fa8",
"assets/assets/images/aws_devops_certificate.png": "2c85f30831628cfaa169ee8c426742a4",
"assets/assets/images/aws_logo.png": "a7e580cb3bd89c20500fce34a3b63e56",
"assets/assets/images/aws_logo.png.png": "6b22c977a0f2ccd16b488035ae898d95",
"assets/assets/images/bash_logo.png": "df7503f869bbc2c7913ab409ab6e1c25",
"assets/assets/images/bitbucket_logo.png": "44137651f721e362c90ab276c2e86023",
"assets/assets/images/bugzilla_logo.png": "726eaf773fcf5d23b94079972ec8fe2e",
"assets/assets/images/bulb.jpg": "01555541a170d94347b510dd05137a3b",
"assets/assets/images/cka_certificate.png": "1ba5d5646a69ff4a491a136c6ce89dd9",
"assets/assets/images/cloudwatch_logo.png": "8c772645223f236da09079d3c3fe7154",
"assets/assets/images/confluence_logo.png": "a6d1107e24af39f3c2c533941c890359",
"assets/assets/images/dev1.jpg": "7e57c92fd0d2f2cf5eef8802047c67b3",
"assets/assets/images/dev2.jpg": "f8cc7b40b1b7673b1a069015c4dc110c",
"assets/assets/images/devops-red.jpg": "1310bb2afa429e295ce95dccefd440d6",
"assets/assets/images/devops2.png": "78e9f756b09fdc0b61c63933e01a5740",
"assets/assets/images/docker_logo.png": "eb7df8b6f223f785d829106d64846d58",
"assets/assets/images/dynamodb_logo.png": "26e361100323e36f05803565663c730a",
"assets/assets/images/github_logo.png": "7ea67df8f3ea706fdc9b493725fa0835",
"assets/assets/images/git_logo.png": "f5664f2dbd81e2b2926cae76660f219c",
"assets/assets/images/grafana_logo.png": "22a5b06e9615f5a3f91773b1d8db0645",
"assets/assets/images/jenkins-logo.png": "aa3311ae50e01662f39df5e234e8d3b1",
"assets/assets/images/jenkins_logo.png": "dec10d9de5c8daa77d05c5379d37f959",
"assets/assets/images/jira_logo.png": "fb6f8d0884ee7b21b68f772a032b4e3f",
"assets/assets/images/json_logo.png.png": "ee0baa4696ce1f537f7124fd80061f6d",
"assets/assets/images/khaji.png": "e3ba8ed038b3be67ddd213c959d90018",
"assets/assets/images/khazi_pp.png": "6a99ba41c95193da5cec76f82b580c2f",
"assets/assets/images/khazi_pp2.jpg": "a59d6f042791fa73af6d1afc4e79d799",
"assets/assets/images/khazi_resume.pdf": "f51b8d71c502dbf4dab6877d8863ccac",
"assets/assets/images/kubernetes_logo.png": "8fc4ffd495694c3a0989ccc0dd2d21eb",
"assets/assets/images/linux_logo.png": "f2567d63f52a845240cc46317d923acf",
"assets/assets/images/maven_logo.png": "57fb6322eb317f3ce4f4017e62691983",
"assets/assets/images/mobile1.jpg": "1705c96f6832d1b5cbbc7d5bb41ee6f9",
"assets/assets/images/mysql_logo.png": "94821cfecbda59d19d109b8493b4c196",
"assets/assets/images/nginx_logo.png": "7ab389aabd63bd843a734ef9c503f7bd",
"assets/assets/images/nodeping_logo.png": "5878cf029dd4aebf39ba8359d898b039",
"assets/assets/images/postgresql_logo.png": "438d7dde013b271cdd3c9ac34006d543",
"assets/assets/images/prometheus_logo.png": "465be37cc139918958b887b7f0448a7c",
"assets/assets/images/python_logo.png": "f956b4978b5428f087613edb7943a4be",
"assets/assets/images/rds_logo.png": "2df1e45144711098c4972defe9e769f4",
"assets/assets/images/s9.jpg": "ad21e040dfeb601a0756a80b7b71fe87",
"assets/assets/images/snowflake_logo.png": "5086332b6ae55a3b54d031f4f20e41bc",
"assets/assets/images/terraform_logo.png.png": "388a97a3e71f2b22507db39d32df2627",
"assets/assets/images/tomcat_logo.png": "bb40bd4f4c343cb929d7b8a54a248129",
"assets/assets/images/w1.jpg": "7a8175c260ad0a5cf2a955162c8fc848",
"assets/assets/images/w10.jpg": "df206328c8464ddd2659ea3c74926ac2",
"assets/assets/images/w11.png": "50b8990cfcbcdaad8b66b247acc654be",
"assets/assets/images/w2.jpg": "a8f088b5c301804ce2ce0843dd764c01",
"assets/assets/images/w3.jpg": "a9c2506dcb04dfaeaad4a2616304a3d6",
"assets/assets/images/w4.png": "15259e0096995c1d468d2e0346097cfa",
"assets/assets/images/w5.jpg": "6a637169809ef1d9820ac1d3ecec93b0",
"assets/assets/images/w6.jpg": "86f69e1239f1c6738629f3b09d5bab47",
"assets/assets/images/w7.jpg": "d2435ad9bf40f98217004bcb0422e094",
"assets/assets/images/w8.jpg": "e384ce91c4dd1273b4929a69c21a4b5d",
"assets/assets/images/w9.jpg": "84ce7b2ef63641cf5fd431e54e48c854",
"assets/assets/images/web.jpg": "e4c09803a12ece3445767eeb1fe031c1",
"assets/assets/images/windows_server_logo.png": "c9894c7c788dd20a8c44094519e69f5e",
"assets/assets/images/xmatters_logo.png": "646b5374f6c7fca20391b83a7667c09e",
"assets/assets/images/yaml_logo.png": "511f1b5a34659cec11c6307565835fc9",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "61fac22cb7cbf732045cda5af126edf3",
"assets/NOTICES": "694aac2171cc76d609d8c81d71a332de",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "cdfb02dea76c7baa84be0f84d2214927",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "bf21cd8fd775a3c59fd53afdee39e0e6",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "0a0175107dc17bc28fe229249cf1206e",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "fa8b56ae99974a656ed8d6320fef7b0e",
"/": "fa8b56ae99974a656ed8d6320fef7b0e",
"main.dart.js": "b7749bdb46ada800f0841a2c30214364",
"manifest.json": "bb711777f61440f84d0ec58141669575",
"version.json": "505a61cda247f576744c06f0a713d1ae"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
