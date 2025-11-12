# 🚀 GoHigher!

¡Bienvenido a GoHigher! Un adictivo juego de plataformas vertical hecho en JavaScript puro. El objetivo es simple: ¡llega lo más alto que puedas!

Este proyecto comenzó como un desafío inspirado en [js13kGames](https://js13kgames.com/), pero ha evolucionado para incluir una banda sonora completa en MP3 y múltiples mecánicas de juego como plataformas móviles y quebradizas.

![Demo de Salto Infinito con nuevas plataformas](https://github.com/user-attachments/assets/9a8f058b-ee86-43e2-9018-da86ad3ddbe0)


## 🕹️ Cómo Jugar

No requiere instalación, dependencias, ni servidores.

Simplemente abre el archivo .html en tu navegador web favorito (Chrome, Firefox, Edge, etc.) y ¡empieza a jugar!

### Controles

    ⬅️ / ➡️ (o teclas A / D): Moverse de lado a lado.

    Barra Espaciadora: Saltar.

    ENTER: Reiniciar el juego (después de perder).
### Plataformas

<span style="color:#00FFAA;">■</span> Plataforma Verde: Normal y segura.

<span style="color:#FFC300;">■</span> Plataforma Amarilla: Móvil. ¡Se mueve de lado a lado!

<span style="color:#E74C3C;">■</span> Plataforma Roja: Quebradiza. ¡Se rompe y desaparece después de saltar de ella!

## 🛠️ Tecnologías Utilizadas

Este juego fue construido desde cero con un enfoque minimalista:

- HTML5 `<canvas>`: Para todo el renderizado gráfico. Todos los elementos (jugador, plataformas) se dibujan como rectángulos (fillRect).

- JavaScript (Vanilla JS): Toda la lógica del juego, físicas, colisiones y controles están escritos en JavaScript puro, sin frameworks.

- ZzFX (Zuper Zmall Zound Zynth): Una micro-librería (<1KB) incrustada directamente en el script para generar todos los efectos de sonido (salto y game over) en tiempo real.

- HTML5 `<audio>`: Para la reproducción de la música de fondo (MP3).

## ✨ Características Principales

- Plataformas Dinámicas: ¡No todas las plataformas son seguras! El juego incluye plataformas móviles (amarillas) que te transportan y plataformas quebradizas (rojas) que se rompen al saltar.

- Nivel Infinito Procedural: Las plataformas se generan proceduralmente a medida que el jugador asciende.

- Audio Híbrido: Música MP3 para el ambiente y efectos de sonido ZzFX para una respuesta instantánea.

- Scroll Vertical: La "cámara" sigue al jugador a medida que sube.

- Reciclaje de Plataformas: Optimización de memoria que reutiliza las plataformas que salen de la pantalla.

- Portabilidad Total: Corre en cualquier navegador moderno sin necesidad de un servidor.

## 🎯 Futuras Ideas (To-Do)

El juego base está completo, pero aquí hay algunas ideas para expandirlo:

- [x] ~~Plataformas Móviles:~~ (¡Hecho!)
- [x] ~~Plataformas Quebradizas~~ (¡Hecho!)

- [ ] Power-ups: Como un "super salto" o un "escudo" temporal.

- [ ] Enemigos: Obstáculos simples que te hacen perder.

- [ ] Mejores Gráficos: Reemplazar los rectángulos con sprites (imágenes de personajes y plataformas).

## 🙏 Créditos y Agradecimientos

- Efectos de Sonido: Gracias a Frank Force por la increíble micro-librería ZzFX.

- Música: Credito a @SketchyLogic de OpenGameArt.Org por la música de fondo

## 👨‍💻 Autor

[Israel Sanchez](https://github.com/Ysraelsn)
