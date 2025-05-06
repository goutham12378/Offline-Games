self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('game-cache').then((cache) =>
      cache.addAll([
        '/',
        '/index.html',
        '/style.css',
        '/sw.js',
        '/games/tic-tac-toe.html',
        '/games/snake.html',
        '/games/tetris.html',
        '/games/pong.html',
        '/games/memory.html',
        '/games/whack-a-mole.html',
        '/games/brick-breaker.html',
        '/games/flappy-bird.html',
        '/games/guess-number.html',
        '/games/rock-paper-scissors.html'
      ])
    )
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
