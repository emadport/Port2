if(!self.define){let e,s={};const c=(c,a)=>(c=new URL(c+".js",a).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(a,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let t={};const r=e=>c(e,n),f={module:{uri:n},exports:t,require:r};s[n]=Promise.all(a.map((e=>f[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-7c2a5a06"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/1.webp",revision:"bef793cdb46d42b7fc8b104a1b1c8d09"},{url:"/2.webp",revision:"a190a4aa679cbebc7332d6cb0a28555f"},{url:"/3.webp",revision:"cc1ac9d24ddd6bf6caee1daace278ec6"},{url:"/AllianceLogo.png",revision:"a5bb0e8dc5c2a1fed78902f36cb93b11"},{url:"/Playground - http:localhost:3000:api:graphql.html",revision:"c7320e7687acbd04e9c92d1b6586df92"},{url:"/Rectangle 1.png",revision:"b3a90a387aeca65b45b26fc91e2c92b9"},{url:"/[removal.ai]_tmp-648f7caf9813b.webp",revision:"283e8c1ac5b7634e510107f1f75a6297"},{url:"/_next/static/_xW5GFQAe7nqf_9RmzpoL/_buildManifest.js",revision:"600aac9d93851aec4c8c7e50258867f7"},{url:"/_next/static/_xW5GFQAe7nqf_9RmzpoL/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/0b7b90cd.836e93feb5f62eec.js",revision:"836e93feb5f62eec"},{url:"/_next/static/chunks/1181-4aff722f7bbca854.js",revision:"4aff722f7bbca854"},{url:"/_next/static/chunks/1524-54c50ff84aff1d8f.js",revision:"54c50ff84aff1d8f"},{url:"/_next/static/chunks/1737-b274b26d8e80c680.js",revision:"b274b26d8e80c680"},{url:"/_next/static/chunks/1872.0499b693493e4946.js",revision:"0499b693493e4946"},{url:"/_next/static/chunks/1922-33b334dc9c24e4cf.js",revision:"33b334dc9c24e4cf"},{url:"/_next/static/chunks/1a48c3c1-d7e9690906817dc2.js",revision:"d7e9690906817dc2"},{url:"/_next/static/chunks/1bfc9850-32e8f446379ed887.js",revision:"32e8f446379ed887"},{url:"/_next/static/chunks/252f366e-720d89c6acfacab6.js",revision:"720d89c6acfacab6"},{url:"/_next/static/chunks/2683-ed6883f1be19c64b.js",revision:"ed6883f1be19c64b"},{url:"/_next/static/chunks/31664189-4f315845d91cfc5c.js",revision:"4f315845d91cfc5c"},{url:"/_next/static/chunks/3686-21af286902b1a504.js",revision:"21af286902b1a504"},{url:"/_next/static/chunks/4214.8823c6862b34aa31.js",revision:"8823c6862b34aa31"},{url:"/_next/static/chunks/423.dc3647a9ba607365.js",revision:"dc3647a9ba607365"},{url:"/_next/static/chunks/4651-ff9f121faa9e36e9.js",revision:"ff9f121faa9e36e9"},{url:"/_next/static/chunks/4656.7877e2ba351fc10a.js",revision:"7877e2ba351fc10a"},{url:"/_next/static/chunks/4949-3accb49557f5a8a6.js",revision:"3accb49557f5a8a6"},{url:"/_next/static/chunks/53.160166e09db9a31f.js",revision:"160166e09db9a31f"},{url:"/_next/static/chunks/545f34e4-564a640c81f0f046.js",revision:"564a640c81f0f046"},{url:"/_next/static/chunks/551-c22378186f194090.js",revision:"c22378186f194090"},{url:"/_next/static/chunks/58-6490b0578c2f0275.js",revision:"6490b0578c2f0275"},{url:"/_next/static/chunks/6154-27e8a47c9f1f67e3.js",revision:"27e8a47c9f1f67e3"},{url:"/_next/static/chunks/659-b71b05719546bf94.js",revision:"b71b05719546bf94"},{url:"/_next/static/chunks/6728d85a-b0efd5a7209deda2.js",revision:"b0efd5a7209deda2"},{url:"/_next/static/chunks/6893-856a55f7573d8173.js",revision:"856a55f7573d8173"},{url:"/_next/static/chunks/6957.9e6ec4f33d59454a.js",revision:"9e6ec4f33d59454a"},{url:"/_next/static/chunks/7302-f6c63b7d1b1acc3d.js",revision:"f6c63b7d1b1acc3d"},{url:"/_next/static/chunks/78e521c3-b81b3f846e86c786.js",revision:"b81b3f846e86c786"},{url:"/_next/static/chunks/7f0c75c1-0eae4a1d8721fce5.js",revision:"0eae4a1d8721fce5"},{url:"/_next/static/chunks/8034-d008d4632c4817bc.js",revision:"d008d4632c4817bc"},{url:"/_next/static/chunks/8764-aa024dcf4476cde8.js",revision:"aa024dcf4476cde8"},{url:"/_next/static/chunks/8809.8d87adfbf71ee711.js",revision:"8d87adfbf71ee711"},{url:"/_next/static/chunks/8938.e5619c14fe1d51c8.js",revision:"e5619c14fe1d51c8"},{url:"/_next/static/chunks/8969.5554c5d2375a716f.js",revision:"5554c5d2375a716f"},{url:"/_next/static/chunks/9101-432e4774dd2abf5b.js",revision:"432e4774dd2abf5b"},{url:"/_next/static/chunks/9369-545cde5164930495.js",revision:"545cde5164930495"},{url:"/_next/static/chunks/95b64a6e-4f446949d4b1d2a1.js",revision:"4f446949d4b1d2a1"},{url:"/_next/static/chunks/9933-f8410a459d7270f9.js",revision:"f8410a459d7270f9"},{url:"/_next/static/chunks/ae51ba48-bdff175492737db7.js",revision:"bdff175492737db7"},{url:"/_next/static/chunks/b98bc7c3-a6a78fd6c8dfac06.js",revision:"a6a78fd6c8dfac06"},{url:"/_next/static/chunks/d7eeaac4-98c976943054c8ae.js",revision:"98c976943054c8ae"},{url:"/_next/static/chunks/ea88be26.58ed6ef11764b90d.js",revision:"58ed6ef11764b90d"},{url:"/_next/static/chunks/framework-3236775a9ca336a2.js",revision:"3236775a9ca336a2"},{url:"/_next/static/chunks/main-ecfbb49c1b16cc4b.js",revision:"ecfbb49c1b16cc4b"},{url:"/_next/static/chunks/pages/%5Bname%5D-a2608eb4b04afd48.js",revision:"a2608eb4b04afd48"},{url:"/_next/static/chunks/pages/%5Bname%5D/checkout-dd5bc049af3d5e33.js",revision:"dd5bc049af3d5e33"},{url:"/_next/static/chunks/pages/%5Bname%5D/menu-cd5033c7b92485ac.js",revision:"cd5033c7b92485ac"},{url:"/_next/static/chunks/pages/%5Bname%5D/menu/%5B...category%5D-d437ecef92b76d20.js",revision:"d437ecef92b76d20"},{url:"/_next/static/chunks/pages/%5Bname%5D/orderHistory/%5BcustomerId%5D-f2eca5ad79f60a4b.js",revision:"f2eca5ad79f60a4b"},{url:"/_next/static/chunks/pages/%5Bname%5D/reservation-116c6e2fa87e2aad.js",revision:"116c6e2fa87e2aad"},{url:"/_next/static/chunks/pages/404-181a4a850956b5bb.js",revision:"181a4a850956b5bb"},{url:"/_next/static/chunks/pages/_app-c70c777db4b59188.js",revision:"c70c777db4b59188"},{url:"/_next/static/chunks/pages/_error-e18771d792fd8fe7.js",revision:"e18771d792fd8fe7"},{url:"/_next/static/chunks/pages/about-90df8faae520ce92.js",revision:"90df8faae520ce92"},{url:"/_next/static/chunks/pages/admin-dc23586272f3595a.js",revision:"dc23586272f3595a"},{url:"/_next/static/chunks/pages/admin/%5Brestaurant%5D-d1afd264dfd2cb2a.js",revision:"d1afd264dfd2cb2a"},{url:"/_next/static/chunks/pages/admin/%5Brestaurant%5D/dashboard-6619080cd40d0126.js",revision:"6619080cd40d0126"},{url:"/_next/static/chunks/pages/admin/%5Brestaurant%5D/menu-171ce62668accdd3.js",revision:"171ce62668accdd3"},{url:"/_next/static/chunks/pages/admin/%5Brestaurant%5D/menu/%5B...category%5D-40ddb4a5b77e484d.js",revision:"40ddb4a5b77e484d"},{url:"/_next/static/chunks/pages/admin/%5Brestaurant%5D/orders-8c04135c07b2f624.js",revision:"8c04135c07b2f624"},{url:"/_next/static/chunks/pages/admin/%5Brestaurant%5D/rapport-e9abfeff281f5737.js",revision:"e9abfeff281f5737"},{url:"/_next/static/chunks/pages/admin/%5Brestaurant%5D/reservations-e502f3eef82361e4.js",revision:"e502f3eef82361e4"},{url:"/_next/static/chunks/pages/admin/%5Brestaurant%5D/setting-a11d6f7f3f5e7b43.js",revision:"a11d6f7f3f5e7b43"},{url:"/_next/static/chunks/pages/auth/deleteUser-774d52da6b74bc78.js",revision:"774d52da6b74bc78"},{url:"/_next/static/chunks/pages/auth/login-8f6d51b440fb7043.js",revision:"8f6d51b440fb7043"},{url:"/_next/static/chunks/pages/auth/resetPass-651c1a467e0f9a58.js",revision:"651c1a467e0f9a58"},{url:"/_next/static/chunks/pages/auth/signup-3f5bb1553902ff35.js",revision:"3f5bb1553902ff35"},{url:"/_next/static/chunks/pages/chat-efc8c7d534e0042a.js",revision:"efc8c7d534e0042a"},{url:"/_next/static/chunks/pages/index-1112f0e53d930cbd.js",revision:"1112f0e53d930cbd"},{url:"/_next/static/chunks/pages/map-c6f93d0b973f05b0.js",revision:"c6f93d0b973f05b0"},{url:"/_next/static/chunks/pages/profile-398f5b619025104d.js",revision:"398f5b619025104d"},{url:"/_next/static/chunks/pages/terms/terms-9469dab51a1f296f.js",revision:"9469dab51a1f296f"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-eea1cc4baf723a5c.js",revision:"eea1cc4baf723a5c"},{url:"/_next/static/css/008a224d9d5c1d57.css",revision:"008a224d9d5c1d57"},{url:"/_next/static/css/06d5a3f9a828a139.css",revision:"06d5a3f9a828a139"},{url:"/_next/static/css/0afd7edb3abe203e.css",revision:"0afd7edb3abe203e"},{url:"/_next/static/css/13a5f80ac0d376fb.css",revision:"13a5f80ac0d376fb"},{url:"/_next/static/css/240f3dfe28f94490.css",revision:"240f3dfe28f94490"},{url:"/_next/static/css/2a917bbcdc8cc55c.css",revision:"2a917bbcdc8cc55c"},{url:"/_next/static/css/2c88d40ca14e9c43.css",revision:"2c88d40ca14e9c43"},{url:"/_next/static/css/3829812b745d4e5a.css",revision:"3829812b745d4e5a"},{url:"/_next/static/css/3ce60015a9af33b8.css",revision:"3ce60015a9af33b8"},{url:"/_next/static/css/3e3964372d1485d0.css",revision:"3e3964372d1485d0"},{url:"/_next/static/css/3fae0c60ed91d531.css",revision:"3fae0c60ed91d531"},{url:"/_next/static/css/441a6b0f9bad460f.css",revision:"441a6b0f9bad460f"},{url:"/_next/static/css/60b792f367932eb9.css",revision:"60b792f367932eb9"},{url:"/_next/static/css/6cae5bea24b46879.css",revision:"6cae5bea24b46879"},{url:"/_next/static/css/6eb949a89dc65918.css",revision:"6eb949a89dc65918"},{url:"/_next/static/css/731f53df53c6dc1d.css",revision:"731f53df53c6dc1d"},{url:"/_next/static/css/754551e48d612cf9.css",revision:"754551e48d612cf9"},{url:"/_next/static/css/7a0c9f88ea3d820c.css",revision:"7a0c9f88ea3d820c"},{url:"/_next/static/css/89b2026f2ebe37e4.css",revision:"89b2026f2ebe37e4"},{url:"/_next/static/css/9eba61f99b2639cb.css",revision:"9eba61f99b2639cb"},{url:"/_next/static/css/9ff07b5196e8211c.css",revision:"9ff07b5196e8211c"},{url:"/_next/static/css/abfa156bf9c8b02e.css",revision:"abfa156bf9c8b02e"},{url:"/_next/static/css/afb9426a487b532b.css",revision:"afb9426a487b532b"},{url:"/_next/static/css/b20a716dda3dcf58.css",revision:"b20a716dda3dcf58"},{url:"/_next/static/css/b4d2a5fdbef2cdef.css",revision:"b4d2a5fdbef2cdef"},{url:"/_next/static/css/b87565bb4967bda0.css",revision:"b87565bb4967bda0"},{url:"/_next/static/css/bd2a7e5a362ec114.css",revision:"bd2a7e5a362ec114"},{url:"/_next/static/css/c2ffbfbdf535dd54.css",revision:"c2ffbfbdf535dd54"},{url:"/_next/static/css/c804f5e0d05a11c2.css",revision:"c804f5e0d05a11c2"},{url:"/_next/static/css/ccd99fb0953ce8bf.css",revision:"ccd99fb0953ce8bf"},{url:"/_next/static/css/e4463a52f45bedb1.css",revision:"e4463a52f45bedb1"},{url:"/_next/static/css/e7f54d4b437682ad.css",revision:"e7f54d4b437682ad"},{url:"/_next/static/css/f9b4f9322a444d73.css",revision:"f9b4f9322a444d73"},{url:"/_next/static/css/fbbb6b2839d7884c.css",revision:"fbbb6b2839d7884c"},{url:"/_next/static/media/layers-2x.9859cd12.png",revision:"9859cd12"},{url:"/_next/static/media/layers.ef6db872.png",revision:"ef6db872"},{url:"/_next/static/media/marker-icon-2x.93fdb12c.png",revision:"93fdb12c"},{url:"/_next/static/media/marker-icon.d577052a.png",revision:"d577052a"},{url:"/_next/static/media/marker-shadow.612e3b52.png",revision:"612e3b52"},{url:"/alert.mp3",revision:"1e8064baf5bba4beca38552075308796"},{url:"/alert2.mp3",revision:"78dccfdb37e2486661a3126b424a40c5"},{url:"/blur.webp",revision:"436ad026516b24bf35801b58265a020b"},{url:"/blur_image.webp",revision:"b18a197132f9d063a31d6dbf3b1e0002"},{url:"/calc.gif",revision:"1164913b4932faae0fe871859b01684b"},{url:"/cards.webp",revision:"334163edd4941af40eaa14b111462af1"},{url:"/drinks.png",revision:"2e67ad8ae39b4bed4bf9ffee38c0a2d2"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/food-item.webp",revision:"81b58baabe9f1da3a47c07e840f88357"},{url:"/food3.webp",revision:"7dfa624847e6d4a4f9a76021756356da"},{url:"/food4.webp",revision:"35932a042542ffa521659da4ed0896f0"},{url:"/icon-192x192.png",revision:"d2421b77e96d30dd3226882ffa926efa"},{url:"/icon-256x256.png",revision:"c23a83cdba617bbc46b6883fb7876b4e"},{url:"/icon-384x384.png",revision:"fd5408d8952e74c614092e4ec3e17e6f"},{url:"/icon-512x512.png",revision:"3684f6600a78ad3e79689bdd5f8464c2"},{url:"/instagram-logo.svg",revision:"204ff617dbd6428a30cba09c86a3b924"},{url:"/manifest.json",revision:"1fac7a75aabf736bae26584bdd3f4a89"},{url:"/n.png",revision:"d125d084ef4c25914298f338d7e41128"},{url:"/n.webp",revision:"ee2ecaf77af18444264760894b70f7a0"},{url:"/rapport.png",revision:"d5521437e2c39bb3537f3040daed10e4"},{url:"/res.png",revision:"48152529fc57d2ed4582feda339e25b7"},{url:"/res1-cut.webp",revision:"6ffc57443e3c8ee5e7106ea1089791c8"},{url:"/res1.webp",revision:"74bd38b056b994a56e03f566e8d7fcf4"},{url:"/res2-cut.webp",revision:"d9c0d9f33bf3de98920b3e7d45b1bb61"},{url:"/res2.webp",revision:"9b9abcc099d0bba9ec07f80aea52a2fa"},{url:"/shutter.svg",revision:"1ab3cf0df91b5baee34803ee918b1fe0"},{url:"/spinner2.json",revision:"632e8de66109681ed4b228c50a683d6d"},{url:"/starter.png",revision:"8c8557af432f87515ef6f5ad7b06838a"},{url:"/svgup",revision:"f36bfef00e0556df1983befea599ddaf"},{url:"/take-away.webp",revision:"b9bb0d3324017a7dd8fe5679eac20ca5"},{url:"/vawedown",revision:"657d6e5ae263829c54c3e61885af6475"},{url:"/vaweup",revision:"37fac0a3bce51c53a8d151b4188eeb27"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:c,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
