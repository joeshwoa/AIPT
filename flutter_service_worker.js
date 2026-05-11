'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "5cc0010ee244618d86556fbacad324db",
"version.json": "15a256be12dfc6f46fc9f697c147ab9f",
"index.html": "ab36368a4caa9b66a952f6d1ae2838a4",
"/": "ab36368a4caa9b66a952f6d1ae2838a4",
"main.dart.js": "d1f9a3fbe01113d14342360b355a2088",
"terms.html": "a7eefac6d6e3957e32641ba95601af9f",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.png": "0a4dc890ca2b23fbc557cdafeeb4d787",
"icons/Icon-192.png": "a85607777200ca964e12a3232c5fa93f",
"icons/Icon-maskable-192.png": "a85607777200ca964e12a3232c5fa93f",
"icons/Icon-maskable-512.png": "5f75b9d1b48e3ab659854b9b4aa19e38",
"icons/Icon-512.png": "5f75b9d1b48e3ab659854b9b4aa19e38",
"manifest.json": "597b234f2a5ced087db2c193c3ba0dba",
"sitemap.xml": "32ac6cb039af25b665004cc2504737ad",
"robots.txt": "c8ce38e82fa6f00bc9175e35a72eeef7",
".git/config": "adb5c6ffb81f11e3c901746fc053f11a",
".git/objects/59/c890a6915c45ab4a919d8b4a5e53a05225b1a5": "0327de0d4c6d02a958a87f1a9fa6ec59",
".git/objects/66/b1ffc363605bae60e6fd03c0175a21d22a9672": "b9519e71b7ab8f6a0d06c03fcad49cb7",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/68/fa5dd9bf4156c26d2551f465eb27fecf4b9e7d": "6864c529e21136bfd77dbe1fa84429a3",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/9b/dccf178d96f83153afd7f8f83626c114b05cfd": "c372e4e126805d43c1ea685cd2e80460",
".git/objects/9e/f5df44076efaefbb509a7a5ce9872c8760e7f6": "77fbeaff67d5a654548ac494beb207ef",
".git/objects/04/7c92f6e2212473dc436020afed689527076d44": "fc5336fbd874bbfc2f2d81b35bfbb103",
".git/objects/69/b2023ef3b84225f16fdd15ba36b2b5fc3cee43": "6ccef18e05a49674444167a08de6e407",
".git/objects/51/1efb42a1c8b994bf6d126c09cdafa360f24a76": "724ac0565cdf6a5d503bff620ec66991",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/93/64f4324689bdc2d1c819f840d18c7e7ffef7fe": "b96351ce76141c69501d4459dc2aa8cc",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/94/3d79158b60830effe17122b4566643df6c6ad8": "7a7554a2ea8ab9e26e742a430ab31a40",
".git/objects/94/942e3bb2be71f95f04ebe5f3ef8496ae22ddb3": "f9c2a21e4e3e3c94f385a089d87dc019",
".git/objects/05/c16b5d5f87db5888a736010e8283f042bf3aee": "83966b287e6f5684c3f9c1908b0b856d",
".git/objects/9d/7ae42fee507b31ee2bc353e17819eaa96f810e": "2423c76f3f8060249f19f91561a621aa",
".git/objects/a3/7555c04a521d114f5684efdbc4ca04d15c2d74": "2a5dfaca96a22792b08310a11e2846f1",
".git/objects/a3/8da02e46c53b487ac7e8e124373e030d5f4a91": "ecfdbde7318f05e917c77f98d136a3d4",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/ac/c16cd4c107e3370db0b0a5993ce4a5a1589d03": "85bc28ace0d39b448672e1c79840fe53",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/bb/afe7d66a91ca481d37632e0af44f838d0e8938": "f68b81557d2b0e814cc91236b96a44ca",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/df/f989a5d7e302a402e1b9c4fd5774f2f4af59e9": "00c8e43174a401940fff1b0df34f18ca",
".git/objects/a2/83be98c2364b0a402b3d8c0ebf24da47a7d210": "688e18334c09c249994be4d8d6b13089",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/ee/e4ef285d7b4b73ffe99ba64ff7b1570d5ba89c": "82e3af80c2a1bb7c677fc475d23728e4",
".git/objects/c9/fe87cc6271ed61addfeb216cb4f6c6222871e8": "8cdabb4a3577d5c64e93877653aa5225",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/fb/8957262c33e8e379572622026358e1e71c0b2e": "97ffeb315cc70fcf1b318706e808655d",
".git/objects/c1/0144999e1793671866512acfe790750756c6ff": "e49b4c7526bb0006ddb168dbdc34eb95",
".git/objects/18/aed38942e2ad8deb71579687fdbaa45c0704d1": "e08da2854a66f448f708903b487cc803",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/42/da0703e642608a3a0ace97069f6e2a29f19066": "5d26cd6b3547286c907498b19e7912b9",
".git/objects/73/70be9abea07299748836952addfed4273570b5": "abba978b2bbffe9e2533619bd15d3f35",
".git/objects/8f/e7797006e779b386d430abcb99e053ba9341b0": "3cfc54ccdb807bfdbeaae1d79beabf2e",
".git/objects/8f/046bde1dce55e31caf2192a4e3181e42d28d30": "6d250f4839f8f075dee031a7aba35941",
".git/objects/81/40693ddcc35da5771f40e0e41c56557fbf2098": "76b65797832dc58d2142e55f26c9e442",
".git/objects/72/4d057bfde8817f8ba87f330b08d20da51a0ce9": "7063661672d6713b0fe3b17fba041779",
".git/objects/44/011fdf7ecd0cbe3570b093b1b9682d95bd036c": "0fcbfc7ce501a74d215752e574ed4160",
".git/objects/6b/781ce258d54c4ebed4db34b7fee5c30ad352b1": "3313d1bc859f4f765b32810bac80b997",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6b/6693a3930d2105b16c855547c44740cd031d39": "43237fb0dc97bb956667c272f025a2c2",
".git/objects/96/dad80bc1beba1b3775cf315d8d35fb75563860": "b97dbc6c86b383d81a051dc7ac2ad695",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/30/3ba8ace27cfe6ce7d1e4ce2cb35b803ebf8ca5": "c750530b529a6eed61feb4ae6768da4e",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/01/02dee84e62d457e3b97f25576f28723303ff1f": "dc314b5b5340a60553a1a768d616f4b7",
".git/objects/99/73cbe72a2707564e9d605774864d54ec9341b3": "6a3f56042aa8de422081db494795c300",
".git/objects/64/be622f23bcba7b6624cd2a6ed6b4beca885e9b": "a7d15506a4d6e381341575d97f985fba",
".git/objects/90/ffad5fa9b5d5a5ae7fe7a7870f4c1efe7c2625": "6bb0d21193856c46ce67846e65cc61b6",
".git/objects/bf/05afe17abdb77cda56e13cbd7318f576ec5960": "f62261bd4d3797dc35c2d523e4f88983",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/a0/2299acff751d371d26a537db3c910cec472389": "98945fd59c42193ad5a9514a64aac245",
".git/objects/b8/dcf201db455423d49cc9c549b677ebaeb7df73": "0ff69fd8e88d1d1187a0d5af80397048",
".git/objects/b8/2698041fde85ac0522b0560673692770b54733": "63b417a806c6fe49be699f3fd31e6f64",
".git/objects/b1/21cc515d89ea0c4a2e9081743b1697d077353a": "36dec1cf1c6fd4a91baf52324015ae63",
".git/objects/dc/2e5d08677d603b6755dc6c34fc8ad9aa6fc8a5": "37e9533cdb5c11a36791a0617a2e6cd0",
".git/objects/d5/72f7431b7967dad9b9c894a81bdaaee9a2e9f2": "4bae090e79b32cb111bb2bb20bdf6af0",
".git/objects/af/59cbc5a40d07de58e313456535bb7226ba2f35": "ebfad8e944408076765eca360f701bb4",
".git/objects/de/27d670f91969cd52468343d308270481a3d3ff": "b5c669e7e91bd5e28cea1dc9a8fcc8d4",
".git/objects/de/a1b8e8ecefebbc8e38fdbcd7eac8ff6faa5f41": "d2d8868a78c2346decb2a0a9fa827951",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/a1/b2e6c26093066510a31147e7aec9abdc8d6c5e": "497e638f8eb5169a2bc418898ea69d95",
".git/objects/ef/0dc2aeda8a2192cd6559f502b56777b37370c6": "f56921f8cd49524e039722d1a289bfb5",
".git/objects/c4/307a204e7dbe442a52c163596ba0a72b58bba5": "410ba6ea7d0a9a1f56da0d9dac681da0",
".git/objects/c4/d04de78644767f11761d083da45da194c1552a": "51865cb0230a4ceb8446301da02e7c22",
".git/objects/ea/d408f40dfc6459a53dc88fdac8424c7f07610f": "8c1eeb4016ac1e9ee60f089ec9a7f761",
".git/objects/e6/eb8f689cbc9febb5a913856382d297dae0d383": "466fce65fb82283da16cdd7c93059ff3",
".git/objects/fa/aa90bdc1b7cf797968510da73517543badecf7": "8e5b93f967f7a2259885792e3fe9bc6e",
".git/objects/fa/66dbde5fc863b0645e153ff04b6cf995fafdff": "759abf120b91d88e13f20e9da7a8913b",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/1b/91855b7eb94836fd568a7d54d93f4dcaaaf44e": "bb50ff0eeadd956c597b11985a00d96b",
".git/objects/4f/02ae3ef32e4c9c416969abfc5874c8b1d3863b": "91931de2c4b043e93c2a5b57540b8213",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/71/1830ede02a366f8b99f88e52f3148405e67eaf": "1c56194fe72ac80022249dc2cb6f915a",
".git/objects/1c/8ed9cb59b7d1178b89a25ea04d2e6d9bc6dcbb": "625c5f7fb5ccd61bff46c3322835c88c",
".git/objects/82/08bc10259a03ce05f87a1914d465d7338d83e0": "ab482139531d30f042cd79fe2a38a754",
".git/objects/8b/1126a7b26819f2911dbc738d7fb482d10b61f0": "aa192ebe5661e7e9434decda6fa5d226",
".git/objects/7a/d345dcea7cdaf29e82f1ffa92c1979565ede5a": "3f5bbde537e671c863f03e96ff0a3e1f",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "77009847f46cdd6091caf433d7ca0e46",
".git/logs/refs/heads/main": "a6116907bb317a4b33ad3d8641175240",
".git/logs/refs/remotes/origin/main": "e3441e32e8cfc0e40545ad044d225f0f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "5cd74485bf1b2b05343322cfa1491ec1",
".git/refs/remotes/origin/main": "5cd74485bf1b2b05343322cfa1491ec1",
".git/index": "959a9dc76da128ca11c25692c55ceb8f",
".git/COMMIT_EDITMSG": "cc3aa971622026f8a649705d5da55169",
"assets/NOTICES": "60ecba4ce65406a37f2c8305b76f5d95",
"assets/FontManifest.json": "a6b3c6b4b63191ee2d04f6edfedff763",
"assets/AssetManifest.bin.json": "592107783b07417d604706e930499c56",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "1b3ab96bf0de14c60559c561c18559f5",
"assets/fonts/MaterialIcons-Regular.otf": "cc3f7d426992e5a8d173efc7c5390db2",
"assets/assets/tflite/calories_model.tflite": "b0c4c898a8852b5a9fda8aaffcc8539a",
"assets/assets/tflite/fitness_pose_classifier.tflite": "80676d0015c1c6db6c3f705ec3879267",
"assets/assets/images/app_icon.png": "9ceae1ee2bcd2b6a411b24cfde2ec896",
"assets/assets/images/smartworkout/assets/images/bodyPart/forearms_male_dark.png": "f262cfd0fe37e34b2b70d6769b5a6a52",
"assets/assets/images/smartworkout/assets/images/bodyPart/legs_male_dark.png": "c6602e802ca9a48dae782554903f673e",
"assets/assets/images/smartworkout/assets/images/bodyPart/chest_male_dark.png": "9e0003970602278a8e5adcbee42b38d3",
"assets/assets/images/smartworkout/assets/images/bodyPart/shoulders_male_dark.png": "3770392d8825c4e90a943746a556f694",
"assets/assets/images/smartworkout/assets/images/bodyPart/triceps_male_dark.png": "ded2fc3cb0b28d57fd69d5c7582fe2e5",
"assets/assets/images/smartworkout/assets/images/bodyPart/biceps_male_dark.png": "fce6def1c60583d601b291965371e0a6",
"assets/assets/images/smartworkout/assets/images/bodyPart/back_male_dark.png": "be56ecb70bd487e3a72f4b67dd3fe894",
"assets/assets/images/smartworkout/assets/images/bodyPart/gluteus_male_dark.png": "d67f91ec2149ef7ac8c93831af8a6a4c",
"assets/assets/images/smartworkout/assets/images/bodyPart/abs_male_dark.png": "55950f17e2c060af4dc11620ca5f391c",
"assets/assets/images/play_store_512.png": "8582573e827fad621aac26a16c1def72",
"assets/assets/images/app_logo.png": "77a7c6de8fa2fec6a8106e0bee530691",
"assets/assets/images/dev_logo.png": "6821099f126b255d70a9e9890c6702da",
"assets/assets/images/equipment/angle.png": "fe17313921150bb2906d048152b353f8",
"assets/assets/images/equipment/leg-curl.png": "8ec20a611cc0fa61cb1c9fbc523c20f8",
"assets/assets/images/equipment/weight.png": "9ae5b2996c0a454774198bf2989259ed",
"assets/assets/images/equipment/shuffle.png": "45da22a2e9b5bffad0a7fbd7ad7d7bcd",
"assets/assets/images/equipment/resistance-band.png": "66d0f5194a168523db7381d1e976b913",
"assets/assets/images/equipment/barbell.png": "6b98708fb4fa4d3b9ce971ce2afc808d",
"assets/assets/json/poses_model_metadata.json": "4da5f30a1534927fba1f0b92b6a3bd82",
"assets/assets/json/calories_model_config.json": "aa923ec429130d0298f47cb81a18ea3c",
"assets/assets/json/exercise_db.json": "ac932032e94786e15c4bb5eba5e28982",
"assets/assets/json/exercises_full.json": "4f18ab2c918c2b583135df03f3f471de",
"assets/assets/json/gym_exercise_generator.json": "0c7704e0c78257f4e6e1d3daa827b30d",
"assets/assets/fonts/JetBrainsMono-Regular.ttf": "3c265c5a740649823327d74a46a84d54",
"assets/assets/fonts/SpaceGrotesk.ttf": "effdd4f91ca207acce255f127a81d842",
"assets/assets/fonts/Inter.ttf": "bff0f6e3b9e2259a28313168a907054f",
"assets/assets/fonts/JetBrainsMono-Medium.ttf": "38a5e21ca3765cb6a433d223032a0ca3",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01"};
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
