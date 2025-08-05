'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "335882b773476f12909fc6bf331ae6e9",
".git/config": "d35b9201a28ead36e702fe3192600774",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "aaa7d2c7f205b6f2fe034ecc2857bb12",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0a80a7eb00394e820135535bc14db226",
".git/logs/refs/heads/main": "0a80a7eb00394e820135535bc14db226",
".git/logs/refs/remotes/origin/main": "947c4725911ba8f21772e8dddd26473a",
".git/objects/03/e3991a6c91a0aa596f0e98f5f2fcd3400df37e": "2fff67d68477f9d9461dc18320e52a3e",
".git/objects/0b/2a4d907e50af1a098672efb6d8a73e4b043ff7": "69b2b2c6ee078b462c63d7fccbdca32f",
".git/objects/11/5239fd172c6f0fd7102fd38b768413b8538d2e": "23b7267dd3e94adff889ec1480f9a358",
".git/objects/17/2ea200d2d0d2624abc93bf884db1d7b27b31d1": "19824d3860e45568714aab3127bbb65a",
".git/objects/18/0620e703fb734aeb1812f18f1bdac9dd43c968": "1cd00df60659d73be994ee87e12d6af8",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/28/9ca64e9e8083767b8330b46df4c0bc0b3d9038": "fb2680ae401e420afd8cb5f967d06dcc",
".git/objects/2a/11299889ade9d726f4fb11f78bdb90e103f6ce": "2b24abe68da45a69a4d2ac3503c0bc06",
".git/objects/3d/ccb9c415aac52e006db04fa2ed1da665ce005c": "4d7760c354b51aceeb6ef09428faa28d",
".git/objects/3e/d0ddd7136a48520910e7e4bf665362facd60d4": "c8322669a78b5f07c75b1decdc05718d",
".git/objects/49/c0f0ada3d4aa348fc0458be9ba385cec5599ef": "6343501aa28f7c3d8ccf3063dc92ec26",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/58/0b03c8e28230f66546f8da8273664926924de6": "2234a81fcfb16e5a5c142916ee71ad9b",
".git/objects/60/c46f93b1d39617bb7ed569dfcf012b7ce31c91": "f88e26f4c38bea06b20c71ed563f6d09",
".git/objects/61/25605b73cec5ed94c7e57ac6df5420e4f61c4d": "88a5a200c77fba2940c425ef744908ac",
".git/objects/67/c92bff32b07178aa81aba1c951f36a253a25d7": "3296e75db53730e0b4ca7b948f0ffb81",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6d/7ea03d9154b9fe732cc08934882fcd13f00b13": "05b3cc5bc645091cc46933ddc9a7ec0a",
".git/objects/6d/9fe736871a3d61d68c4859a7d88d36ee2249ab": "b8fd5f796665f344e0ee4eab7abad918",
".git/objects/6f/ade1f97d76b9966e969037e8aa133a782c3265": "c76c5c1fa8d863e0d79e1576daf29174",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/73/2addee1d73a16e40a6af1ae6cbf247f0bce4f2": "36ad34cc69bfc527378096ceb9217801",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/78/527a80c568c911951f66821bc6cf6c9c89bb0d": "c1ed5f73daf22e83a0a3026186beae5c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/e68326b55ff6baa3b8b8205ae2e0982844568c": "08712f10da934580cf2dd8e844bfb023",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/8e/5693aee4f3699ce15c077b5421dd7e42f76f68": "403318baf9f37e942e958468323cb871",
".git/objects/95/90780e9cb4a8f39c352a9227996d8a6674457f": "6cae3a0f0b89d2cde9da0bf814bb0fbd",
".git/objects/97/ea9df6b54fc9bfc950bb8bd51d07d5b94b133e": "aeb17ca45dfbf6a3f6e501f0b5be9065",
".git/objects/9b/ce0c50be604ad1f1b0aed287266f3c16e0e9b5": "592705e579f678c4bcb458e06a25ac21",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9c/f3945fd6eb3e387523ebdaf8e501c2e31fba14": "5f76a2f81424666ccc063b4acb86602f",
".git/objects/a6/b8214d4b58f691cceb69a75456d80d25a66416": "0abbdbe3ed324725b9f0a6ff056843b5",
".git/objects/aa/fe609011464e07e7e36a38bd0ce593bb3c694f": "0dd4d1fde51eda10002f6808dfe07866",
".git/objects/ab/c1c8e2cd4878487f7df0087cfff249b7dd3e7a": "2342b58177aa8ba0d81d5290477a343f",
".git/objects/ae/7e16b010cfe111115a137f9e9d836858b9e4f0": "0ee2db2e428859d33b6aa185c44d1246",
".git/objects/b6/85cc865d22308fc10f18095bc56c73ac2a0757": "d332c049ce88e3671cbfdb80032390a9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/c5/a7c623a407e97c77cfa602f9d08358fabac20b": "e752fdb48bce87bb6693f1f29222aecb",
".git/objects/c6/e7d1fa75f6910d19d9739b7518d31bcb9d2dc8": "ad5d1b50c54eb2aaa56c3416c76d64e2",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/cb/4d263a0d123ea2f66628fb0deac7a1579050de": "af571c8089846db020f9221a672db759",
".git/objects/cb/6b7a6137f8e01d986294349a6bc2fadc6d1849": "9df7d09456db8013ef6b3c4b23309f7a",
".git/objects/cf/1036e638c6c9f5819986aac6d14197a2f74703": "9a199d667b4fb5e0b056804311248380",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/dd/3ee747458e9d589c53dda9801f7af85d798cd6": "fcb9175f785f71fc7b6a6c34b79c4c14",
".git/objects/de/15382f49710690cdd3d5200a424f19698d6c76": "84a1f36485bc07d2afc7421e8c574105",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e4/f862669dc36e94f5ac598430964ce9851f226b": "b9cbc83a120ab2225d8c4d8812f6c2a8",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e9/e7abc6d03030886a49dac1a3a32780ddca3da1": "1c5f03c277e9a9307bc6bee02990c3a1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/b4ee514290eb75662210afc521e58a06adedb5": "0705ed2b8e38122353599b145df10cf6",
".git/objects/f1/d394d7465645393a9fddfedaca4fed7fabb362": "f1d9ab33b50a56e4024bc20e32bc3100",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/8ef8debc515828e4e6d2ec5ddcb7b23154e6e9": "917967722991099e7b4a4d352ac2a11b",
".git/refs/heads/main": "b0d6c2c18a8e49298a8ee4e266345ec6",
".git/refs/remotes/origin/main": "b0d6c2c18a8e49298a8ee4e266345ec6",
"assets/AssetManifest.bin": "465f1beb715409067fc1851a2e843d13",
"assets/AssetManifest.bin.json": "1f164e2ac3576985f011e7d1d094e25e",
"assets/AssetManifest.json": "c9b7ea7840d0b8939a39ac423ed6ca42",
"assets/assets/fonts/NataSans-Regular.ttf": "7b3bc3d20e4e519dd2e28988be087ddd",
"assets/assets/images/android.png": "8ade38fc4ea2b7adf1a50980a4e82f52",
"assets/assets/images/dart.png": "42ea8e64b30b406039ae42617c6cc9ca",
"assets/assets/images/facebook.png": "d404a818bd8beed877601f1c167e85f8",
"assets/assets/images/firebase.png": "793f7b6c305d8e50c3fbdd3cb453dc73",
"assets/assets/images/flutter.png": "f72689a921127a847ef4a6f0352cd9cc",
"assets/assets/images/github.png": "f12560820c5070ee4be83c3feb569ce1",
"assets/assets/images/idea.png": "84cdc57aea18c0b8327b7ff567d8ac33",
"assets/assets/images/java.png": "708cba104765aced1141e9629c8db469",
"assets/assets/images/linkedin.png": "1941e2afdf468dd43babcfa3c2e8796d",
"assets/assets/images/profile.jpeg": "531d6c87bfd328e290ba8715c64f9836",
"assets/assets/images/twitter.png": "0186758b8cb6bd18b9b50f74960ce879",
"assets/assets/images/vscode.png": "7d12432d1ce57ef610a5987253425867",
"assets/FontManifest.json": "b6852270b6570d5e838b76aa4f717928",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/NOTICES": "f263246d3e5c35388b3fc1f74182964d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5addeb5cdb73a885e57694acb99c6d12",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "131502a1930f26106ed111a2d568e544",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "af489dc9dfaea4b931af714c0af7ae76",
"/": "af489dc9dfaea4b931af714c0af7ae76",
"main.dart.js": "26545b0ba8d73a8ef671e2285e2d7b55",
"manifest.json": "534de1f169a3943fe2ef823fbb2c8d36",
"version.json": "6c9c33a00862dd1e5b5e7f4bc4d6f9e7"};
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
