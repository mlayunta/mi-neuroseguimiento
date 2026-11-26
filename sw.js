"use strict";

const CACHE = "mi-neuroseguimiento-v4";

const ARCHIVOS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon.svg"
];

self.addEventListener("install", (evento) => {
  evento.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    await Promise.all(ARCHIVOS.map(async (url) => {
      try {
        await cache.add(new Request(url, { cache: "reload" }));
      } catch (e) {
        console.warn("No se pudo precachear:", url, e);
      }
    }));
    await self.skipWaiting();
  })());
});

self.addEventListener("activate", (evento) => {
  evento.waitUntil((async () => {
    const nombres = await caches.keys();
    await Promise.all(nombres.filter((n) => n !== CACHE).map((n) => caches.delete(n)));
    await self.clients.claim();
  })());
});

self.addEventListener("fetch", (evento) => {
  const peticion = evento.request;
  if (peticion.method !== "GET") return;

  const url = new URL(peticion.url);
  if (url.origin !== self.location.origin) return;

  const esNavegacion = peticion.mode === "navigate" ||
    (peticion.headers.get("accept") || "").includes("text/html");

  if (esNavegacion) {
    evento.respondWith((async () => {
      try {
        const red = await fetch(peticion);
        const cache = await caches.open(CACHE);
        cache.put(peticion, red.clone());
        return red;
      } catch (e) {
        return (await caches.match(peticion)) || (await caches.match("./index.html"));
      }
    })());
    return;
  }

  evento.respondWith((async () => {
    const enCache = await caches.match(peticion);
    if (enCache) return enCache;
    try {
      const red = await fetch(peticion);
      const cache = await caches.open(CACHE);
      cache.put(peticion, red.clone());
      return red;
    } catch (e) {
      return new Response("", { status: 504, statusText: "Sin conexión" });
    }
  })());
});
