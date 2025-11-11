let // ZzFXMicro - Zuper Zmall Zound Zynth - v1.3.2 by Frank Force
  zzfxV = 0.3, // volume
  zzfxX = new AudioContext(), // audio context
  zzfx = // play sound
    (
      p = 1,
      k = 0.05,
      b = 220,
      e = 0,
      r = 0,
      t = 0.1,
      q = 0,
      D = 1,
      u = 0,
      y = 0,
      v = 0,
      z = 0,
      l = 0,
      E = 0,
      A = 0,
      F = 0,
      c = 0,
      w = 1,
      m = 0,
      B = 0,
      N = 0
    ) => {
      let M = Math,
        d = 2 * M.PI,
        R = 44100,
        G = (u *= (500 * d) / R / R),
        C = (b *= ((1 - k + 2 * k * M.random((k = []))) * d) / R),
        g = 0,
        H = 0,
        a = 0,
        n = 1,
        I = 0,
        J = 0,
        f = 0,
        h = N < 0 ? -1 : 1,
        x = (d * h * N * 2) / R,
        L = M.cos(x),
        Z = M.sin,
        K = Z(x) / 4,
        O = 1 + K,
        X = (-2 * L) / O,
        Y = (1 - K) / O,
        P = (1 + h * L) / 2 / O,
        Q = -(h + L) / O,
        S = P,
        T = 0,
        U = 0,
        V = 0,
        W = 0;
      e = R * e + 9;
      m *= R;
      r *= R;
      t *= R;
      c *= R;
      y *= (500 * d) / R ** 3;
      A *= d / R;
      v *= d / R;
      z *= R;
      l = (R * l) | 0;
      p *= zzfxV;
      for (h = (e + m + r + t + c) | 0; a < h; k[a++] = f * p)
        ++J % ((100 * F) | 0) ||
          ((f = q
            ? 1 < q
              ? 2 < q
                ? 3 < q
                  ? 4 < q
                    ? ((g / d) % 1 < D / 2) * 2 - 1
                    : Z(g ** 3)
                  : M.max(M.min(M.tan(g), 1), -1)
                : 1 - (((((2 * g) / d) % 2) + 2) % 2)
              : 1 - 4 * M.abs(M.round(g / d) - g / d)
            : Z(g)),
          (f =
            (l ? 1 - B + B * Z((d * a) / l) : 1) *
            (4 < q ? s : (f < 0 ? -1 : 1) * M.abs(f) ** D) *
            (a < e
              ? a / e
              : a < e + m
              ? 1 - ((a - e) / m) * (1 - w)
              : a < e + m + r
              ? w
              : a < h - c
              ? ((h - a - c) / t) * w
              : 0)),
          (f = c
            ? f / 2 +
              (c > a
                ? 0
                : ((a < h - c ? 1 : (h - a) / c) * k[(a - c) | 0]) / 2 / p)
            : f),
          N
            ? (f = W = S * T + Q * (T = U) + P * (U = f) - Y * V - X * (V = W))
            : 0),
          (x = (b += u += y) * M.cos(A * H++)),
          (g += x + x * E * Z(a ** 5)),
          n && ++n > z && ((b += v), (C += v), (n = 0)),
          !l || ++I % l || ((b = C), (u = G), (n = n || 1));
      (X = zzfxX), (p = X.createBuffer(1, h, R));
      p.getChannelData(0).set(k);
      b = X.createBufferSource();
      b.buffer = p;
      b.connect(X.destination);
      b.start();
    };
//Config Inicial
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const bgMusic = document.getElementById("bgMusic");
canvas.width = 600;
canvas.height = 800;

//Variables globales
let score = 0;
let highScore = localStorage.getItem("highScore") || 0;
let gameOver = false;
let keys = {};
let audioInited = false;

//Efectos de Sonido
const soundJump = [, , 90, , 0.01, 0.03, 1, 2, , , 2.3, , 0.2, , , 0.1];
const soundGameOver = [
  ,
  ,
  925,
  0.04,
  0.3,
  0.6,
  1,
  0.3,
  ,
  6.27,
  -184,
  0.09,
  0.17,
];

const player = {
  x: canvas.width / 2 - 15,
  y: canvas.height - 100,
  width: 30,
  height: 30,
  color: "#FF5733",
  vy: 0,
  vx: 0,
  jumpStr: -13,
  gravity: 0.4,
  speed: 4,
  onGround: false,
};

let platforms = [];
const platWidth = 80;
const platHeight = 15;
const platCount = 10;

function init() {
  score = 0;
  gameOver = false;
  player.y = canvas.height - 100;
  player.x = canvas.width / 2 - player.width / 2;
  player.vy = 0;
  player.vx = 0;
  player.onGround = false;

  platforms = [];

  //Crear la primer plataforma debajo del jugador
  platforms.push({
    x: canvas.width / 2 - platWidth / 2,
    y: canvas.height - 50,
    w: platWidth,
    h: platHeight,
  });

  //Genrar el resto de plataformas
  for (let i = 1; i < platCount; i++) {
    platforms.push({
      x: Math.random() * (canvas.width - platWidth),
      y: canvas.height - 50 - i * (canvas.height / platCount),
      w: platWidth,
      h: platHeight,
    });
  }
  if (audioInited) {
    // Solo si el usuario ya interactuó
    bgMusic.currentTime = 0; // Reiniciar la canción
    bgMusic.play();
  }
}

// Si el juego termina presionar Enter
function update() {
  if (gameOver) {
    if (keys["Enter"]) init();
    return;
  }

  // Movimiento lateral
  if (keys["ArrowLeft"] || keys["a"]) player.vx = -player.speed;
  else if (keys["ArrowRight"] || keys["d"]) player.vx = player.speed;
  else player.vx *= 0.8;

  player.x += player.vx;
  // Aplicar gravedad siempre primero
  player.vy += player.gravity;
  player.y += player.vy;

  player.onGround = false; // Asumimos que está en el aire hasta probar lo contrario

  // Pantalla infinita lateral
  if (player.x + player.width < 0) player.x = canvas.width;
  if (player.x > canvas.width) player.x = -player.width;

  // -- COLISIONES --
  if (player.vy > 0) {
    // Solo chequeamos colisión si está cayendo
    platforms.forEach((p) => {
      if (
        player.x < p.x + p.w &&
        player.x + player.width > p.x &&
        player.y + player.height > p.y &&
        player.y + player.height < p.y + p.h + player.vy
      ) {
        // Colisión detectada: poner al jugador justo encima de la plataforma
        player.y = p.y - player.height;
        player.vy = 0;
        player.onGround = true; // ¡Está en el suelo!
      }
    });
  }

  // -- SALTO MANUAL --
  // Si está en el suelo Y se presiona espacio
  if (player.onGround && keys[" "]) {
    player.vy = player.jumpStr;
    player.onGround = false;
    zzfx(...soundJump);
  }

  // -- CÁMARA / SCROLL --
  if (player.y < canvas.height / 2) {
    let offset = canvas.height / 2 - player.y;
    player.y = canvas.height / 2;
    platforms.forEach((p) => (p.y += offset));
    score += Math.floor(offset);
    if (score > highScore) highScore = score;
  }

  // -- RECICLAJE --
  platforms.forEach((p) => {
    if (p.y > canvas.height) {
      let highestY = canvas.height;
      platforms.forEach((plat) => {
        if (plat.y < highestY) highestY = plat.y;
      });
      // Ajusté un poco la distancia de generación para que sea alcanzable con salto manual
      p.y = highestY - (Math.random() * 100 + 60);
      p.x = Math.random() * (canvas.width - p.w);
    }
  });

  if (player.y > canvas.height) {
    if (!gameOver) {
      // Solo ejecutar esto la primera vez
      zzfx(...soundGameOver); // Efecto de sonido
      bgMusic.pause(); // Pausar la música MP3
    }
    gameOver = true;
    localStorage.setItem("highScore", highScore);
  }
}

function draw() {
  ctx.fillStyle = "#333";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#00FFAA";
  platforms.forEach((p) => ctx.fillRect(p.x, p.y, p.w, p.h));

  ctx.fillStyle = player.color;
  ctx.fillRect(player.x, player.y, player.width, player.height);
  ctx.fillStyle = "white";
  let eyeDir = player.vx >= 0 ? 1 : -1;
  ctx.fillRect(player.x + 8 + 4 * eyeDir, player.y + 8, 5, 5);
  ctx.fillRect(player.x + 18 + 4 * eyeDir, player.y + 8, 5, 5);

  ctx.fillStyle = "white";
  ctx.font = "20px monospace";
  ctx.fillText(`Score: ${score}`, 10, 40); // Bajé un poco el texto por las instrucciones
  ctx.font = "14px monospace";
  ctx.fillText(`Best: ${highScore}`, 10, 60);

  if (gameOver) {
    ctx.fillStyle = "rgba(0,0,0,0.7)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.font = "40px monospace";
    ctx.fillText("GAME OVER", canvas.width / 2, canvas.height / 2);
    ctx.font = "20px monospace";
    ctx.fillText("Presiona ENTER", canvas.width / 2, canvas.height / 2 + 40);
    ctx.textAlign = "left";
  }
}

function loop() {
  update();
  draw();
  requestAnimationFrame(loop);
}

window.addEventListener("keydown", (e) => {
  if (!audioInited) {
    zzfxX.resume(); // Despierta los efectos de sonido ZzFX
    bgMusic.volume = 0.3; // Bajar volumen para que no tape los efectos
    bgMusic.play(); // Iniciar la música MP3
    audioInited = true;
  }
  keys[e.key] = true;
  if (
    ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", " "].indexOf(e.key) > -1
  ) {
    e.preventDefault();
  }
});
window.addEventListener("keyup", (e) => (keys[e.key] = false));

init();
loop();
