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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "116cd9f57137613b8b91398a7c15bfe6"
  },
  {
    "url": "about/index.html",
    "revision": "bcb033a22e83cbb2c1fd550c0c743bcf"
  },
  {
    "url": "article/detection.html",
    "revision": "34a51d734dfb689ddbf2318cb4a8726e"
  },
  {
    "url": "article/flux-dataflow.html",
    "revision": "e902914968c34ff064209fac194ade32"
  },
  {
    "url": "article/highschool.html",
    "revision": "d8b1935d20f452ce645a4e378112a025"
  },
  {
    "url": "article/idx.html",
    "revision": "bb4601e026a3570f0d6a9d769e6158f3"
  },
  {
    "url": "article/index.html",
    "revision": "eaa91e6409cb662fffc60398604109c4"
  },
  {
    "url": "article/quanteract.html",
    "revision": "cf720bd358c678610f662b10de98b235"
  },
  {
    "url": "article/smartjack.html",
    "revision": "9f5933648908ab94c8e57f2979cfad55"
  },
  {
    "url": "article/spring-react.html",
    "revision": "d977af9f24769c25952d16df3c9e2e7a"
  },
  {
    "url": "article/spring-vue.html",
    "revision": "923c180bca056916edef0933b909a61d"
  },
  {
    "url": "assets/css/0.styles.2963fa68.css",
    "revision": "83191dd2d75bb0dba58133c792e5852c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.48ccf0a5.js",
    "revision": "bd9325a02dbfa6cfb009b75241412975"
  },
  {
    "url": "assets/js/11.fe170ac0.js",
    "revision": "65dce727bdac708cf3b1c7761668e79f"
  },
  {
    "url": "assets/js/12.0c558e7a.js",
    "revision": "3c6516ef3c80ab7cc0584847931f102f"
  },
  {
    "url": "assets/js/13.3a94f3d4.js",
    "revision": "9ef957495863e38219b8ea2b23998265"
  },
  {
    "url": "assets/js/14.d19632c6.js",
    "revision": "9638e910b64bd5886ab4e02257d3831a"
  },
  {
    "url": "assets/js/15.fb6679ba.js",
    "revision": "07dbef71b32bc4fba6628092cd853e08"
  },
  {
    "url": "assets/js/16.37b899b7.js",
    "revision": "5d1ec09831b759b7725f44c60af0952f"
  },
  {
    "url": "assets/js/17.f8573b90.js",
    "revision": "2e2a947669400487f983cd7485754c27"
  },
  {
    "url": "assets/js/18.0f228e06.js",
    "revision": "57eb72250fbe7dc3510fb96c19679d8e"
  },
  {
    "url": "assets/js/19.8734537b.js",
    "revision": "6d46668442e92cfd0d0956cf5ba859a1"
  },
  {
    "url": "assets/js/2.d52da30c.js",
    "revision": "41ec3a372819c45f8134c698f4db2390"
  },
  {
    "url": "assets/js/20.c704a5e6.js",
    "revision": "29f9529553b61a8ef8877663a239ba6b"
  },
  {
    "url": "assets/js/21.2936f0f7.js",
    "revision": "a0d1172f76e7fe92b93bebe7e28d9255"
  },
  {
    "url": "assets/js/22.4aac7bf3.js",
    "revision": "dd4d7bc17c5263da7eb7e9fd17de9584"
  },
  {
    "url": "assets/js/23.3242801c.js",
    "revision": "3a44cabf0503a33c3be5f3b22f1690cb"
  },
  {
    "url": "assets/js/24.1707d262.js",
    "revision": "68a9042cdb42a105a6340077d5e69586"
  },
  {
    "url": "assets/js/25.7702fe43.js",
    "revision": "8f7eceded2e849fa7543a979a2adeb6d"
  },
  {
    "url": "assets/js/26.facf8a5c.js",
    "revision": "925db4decbfaa9bab445823a7032faad"
  },
  {
    "url": "assets/js/27.a2a30a7d.js",
    "revision": "80627f76645811e9ae791fd9323cee58"
  },
  {
    "url": "assets/js/28.dde70064.js",
    "revision": "61fb3783e5f04ed390973500c3267b8d"
  },
  {
    "url": "assets/js/3.5e752d57.js",
    "revision": "a64487fbbb38666771fca78ea328db00"
  },
  {
    "url": "assets/js/4.56de053f.js",
    "revision": "8c09688928c0c30adfaa2e965319a206"
  },
  {
    "url": "assets/js/5.af8c99ee.js",
    "revision": "bebae24fac92e5c847485b964ee3cb2a"
  },
  {
    "url": "assets/js/6.78055a73.js",
    "revision": "6aebd7c2b8baf45df78cab2e076dbb78"
  },
  {
    "url": "assets/js/7.cf0e4e25.js",
    "revision": "7275ee159de41457a43b0c320e83b351"
  },
  {
    "url": "assets/js/8.ed3879da.js",
    "revision": "d130ca25440ae9d39818bf3dc494a67d"
  },
  {
    "url": "assets/js/9.f900547c.js",
    "revision": "0eedd39a9ac3d6c2b07a8958d875cecc"
  },
  {
    "url": "assets/js/app.9cc346ee.js",
    "revision": "80b3d043227e2ec1405fa591bb520992"
  },
  {
    "url": "config/index.html",
    "revision": "39475d61f7cf1271d1b35a765b196732"
  },
  {
    "url": "ga/ga.js",
    "revision": "603bc8b8fde5f28541f46d5f6ee0fc17"
  },
  {
    "url": "images/22888189426.20200518154229.jpg",
    "revision": "012d286bb4d11e3643488f1c08fc3a73"
  },
  {
    "url": "images/binary.jpg",
    "revision": "92091fd539709febc5c4425e268091a1"
  },
  {
    "url": "images/coordinates.png",
    "revision": "e7b8f21beeaf7d1a46a2110a40841488"
  },
  {
    "url": "images/delivery.jpg",
    "revision": "a3797fac0503f3bc7f8a215689eac511"
  },
  {
    "url": "images/image (1).png",
    "revision": "9b0d9eac14902f21032b5b8de1db41c0"
  },
  {
    "url": "images/image.png",
    "revision": "e7ae3f978e3b3779a0298f1576317150"
  },
  {
    "url": "images/index.jpg",
    "revision": "ab6e612245a15e2fdcb161b960ac0a84"
  },
  {
    "url": "images/kc.jpg",
    "revision": "1daf9f1d0fe957c9b6678c174fbf87aa"
  },
  {
    "url": "images/logo-padd.jpg",
    "revision": "720f8b1e2c8b442b49e81212c57a2d0b"
  },
  {
    "url": "images/logo.jpg",
    "revision": "b759e4a52e52e61fba8d9dff07bec4ae"
  },
  {
    "url": "images/monthly.jpg",
    "revision": "a51cf5c538eed1cde136478743674c71"
  },
  {
    "url": "images/octahedral.png",
    "revision": "84368fe226190ec9cfa7acc5b31567a6"
  },
  {
    "url": "images/phonebook.jpg",
    "revision": "676875b8dc0f01d4a59ca267b6754404"
  },
  {
    "url": "images/pointofview.png",
    "revision": "848e563dde39382fc0a1d77bd3bec4c2"
  },
  {
    "url": "images/silla.jpg",
    "revision": "db052ad3b4220deabdfa72d7b98656a9"
  },
  {
    "url": "images/smartjack.jpg",
    "revision": "cf75b84b5523fa6f2129f21d6ee5e58c"
  },
  {
    "url": "images/smartjackdog.jpg",
    "revision": "c72dab2c28d9da2267dd9f018ba54fc6"
  },
  {
    "url": "images/truston.jpg",
    "revision": "36c1407fc829b9ecaacd3061a939c99e"
  },
  {
    "url": "index.html",
    "revision": "ba5f3426e876768581aa710bd9ad399e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
