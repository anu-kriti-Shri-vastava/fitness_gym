let cacheData = "appV1";

this.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(cacheData).then((cache) => {
            return cache.addAll([
                "/static/js/bundle.js",
                "/favicon.ico",
                "/static/media/banner.5209b5e92a864ca0c615.png",
                "/exercisedb.p.rapidapi.com/exercises/bodyPartList",
                "/manifest.json",
                "/#exercises",
                "https://v2.exercisedb.io/image/TjPH0fiA30s1qp",
                "/static/media/gym.6e701417c428e2fbc267.png",
                "/exercisedb.p.rapidapi.com/exercises",
                "/index.html",
                "/"
            ]);
        })
    );
});

// this.addEventListener("fetch",(event) => {
//     if(!navigator.onLine){
//         event.respondWith(
//             caches.match(event.request).then((result)=>{
//                 if(result){
//                     return result
//                 }
//             })
//         )
//     }
// })

this.addEventListener("fetch", (event) => {
    if (!navigator.onLine) {
        event.respondWith(
            caches.match(event.request).then((result) => {
                // Return the cached response if found, otherwise fetch from the network
                return result || fetch(event.request).catch(() => {
                    // If fetching from the network fails, provide a fallback response
                    return new Response("You are offline and the requested resource is not available in the cache.");
                });
            })
        );
    }
});