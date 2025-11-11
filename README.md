# 🚀 GoHigher!

¡Bienvenido a GoHigher! Un adictivo juego de plataformas vertical hecho en JavaScript puro. El objetivo es simple: ¡llega lo más alto que puedas!

<img width="781" height="906" alt="imagen" src="https://github.com/user-attachments/assets/d1a43a64-387d-425b-b0b6-30a47d782410" />

## 🕹️ Cómo Jugar

No requiere instalación, dependencias, ni servidores.

Simplemente abre el archivo .html en tu navegador web favorito (Chrome, Firefox, Edge, etc.) y ¡empieza a jugar!

> Controles

    ⬅️ / ➡️ (o teclas A / D): Moverse de lado a lado.

    Barra Espaciadora: Saltar.

    ENTER: Reiniciar el juego (después de perder).

## 🛠️ Tecnologías Utilizadas

Este juego fue construido desde cero con un enfoque minimalista:

- HTML5 `<canvas>`: Para todo el renderizado gráfico. Todos los elementos (jugador, plataformas) se dibujan como rectángulos (fillRect).

- JavaScript (Vanilla JS): Toda la lógica del juego, físicas, colisiones y controles están escritos en JavaScript puro, sin frameworks.

- ZzFX (Zuper Zmall Zound Zynth): Una micro-librería (<1KB) incrustada directamente en el script para generar todos los efectos de sonido (salto y game over) en tiempo real.

- HTML5 `<audio>`: Para la reproducción de la música de fondo (MP3).

## ✨ Características Principales

- Jugabilidad Infinita: Las plataformas se generan proceduralmente a medida que el jugador asciende. ¡El único límite es tu habilidad!

- Tamaño Mínimo: Todo el juego (código, gráficos, sonidos) está contenido en un solo archivo HTML y pesa menos de 10KB.

- Audio Híbrido: Utiliza lo mejor de dos mundos: música MP3 de alta calidad para el ambiente y efectos de sonido procedurales (ZzFX) para una respuesta instantánea y ligera.

- Scroll Vertical: La "cámara" sigue al jugador a medida que sube, creando la ilusión de un mundo infinito hacia arriba.

- Reciclaje de Plataformas: Para optimizar la memoria, solo existe un número fijo de plataformas. Cuando una sale de la pantalla por abajo, se "recicla" y se mueve a la parte superior.

## 🎯 Futuras Ideas (To-Do)

El juego base está completo, pero aquí hay algunas ideas para expandirlo:

- Plataformas Móviles: Plataformas que se mueven horizontal o verticalmente.

- Plataformas Quebradizas: Plataformas que desaparecen después de tocarlas.

- Power-ups: Como un "super salto" o un "escudo" temporal.

- Enemigos: Obstáculos simples que te hacen perder.

- Mejores Gráficos: Reemplazar los rectángulos con sprites (imágenes de personajes y plataformas).

## 🙏 Créditos y Agradecimientos

- Efectos de Sonido: Gracias a Frank Force por la increíble micro-librería ZzFX.

- Música: Credito a @SketchyLogic de OpenGameArt.Org por la música de fondo

## 👨‍💻 Autor

[Israel Sanchez](https://github.com/Ysraelsn)
