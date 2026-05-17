# Atajos de teclado

Los atajos de TayPE son totalmente configurables. Edita el archivo de
keybindings y reinicia para aplicar los cambios.

## Archivo de keybindings

```
~/Documents/Taype/keybindings.json
```

Se crea automáticamente al primer arranque.

## Atajos por defecto

### Transporte

| Atajo | Acción |
|----------|--------|
| Space | Reproducir / detener |
| P | Reproducir / pausa |
| Z | Detener |
| Return | Empezar / detener grabación |
| / | Añadir marcador en el cabezal |
| , | Ir al marcador anterior |
| . | Ir al marcador siguiente |
| Sin asignar | Set 0 at Playhead for the selected Cut |

### Marcadores

| Atajo | Acción |
|----------|--------|
| 1 a 9 | Ir a los marcadores 1 a 9 |
| 0 | Ir al marcador 10 |
| Cmd+1 a Cmd+9 | Ir a los marcadores 11 a 19 |
| Cmd+0 | Ir al marcador 20 |
| Cmd+Shift+1 a Cmd+9 | Ir a los marcadores 21 a 29 |
| Cmd+Shift+0 | Ir al marcador 30 |

### Edición

| Atajo | Acción |
|----------|--------|
| S | Dividir clip seleccionado en el cabezal |
| D | Duplicar clip seleccionado a continuación |
| Cmd+D | Duplicar pista sin clips |
| Cmd+Option+D | Duplicar pista con clips |
| Cmd+X | Cortar clip seleccionado |
| Cmd+C | Copiar clip seleccionado |
| Cmd+V | Pegar clip en la posición del cabezal |
| Backspace | Borrar clip seleccionado |
| Delete | Borrar pista seleccionada no master |
| Cmd+Z | Deshacer |
| Cmd+Shift+Z | Rehacer |
| Escape | Deseleccionar clip y pista |

### Reel

| Atajo | Acción |
|----------|--------|
| Cmd+S | Crear checkpoint |
| Cmd+R | Abrir Reel Browser |

## Vista

| Atajo | Acción |
|----------|--------|
| M | Alternar entre timeline y mezclador |
| I | Alternar panel de channel strip |
| F | Focus |
| A | Alternar vista de archivo |
| G | Spill |
| E | E-Zoom |
| T | Alternar regla entre tiempo y compases |
| K | Alternar tema de alto contraste |
| Cmd+K | Abrir teclado virtual |

## Zoom

| Atajo | Acción |
|----------|--------|
| Cmd + rueda | Zoom horizontal |
| Option + rueda | Zoom vertical |
| = | Acercar pistas |
| - | Alejar pistas |
| Shift+- | Restablecer altura de pista |
| Shift+= | Llevar la altura de pista al máximo |

## Ratón

| Entrada | Contexto | Acción |
|-------|---------|--------|
| Option+clic | Timeline | Mover el cabezal |
| Clic derecho y arrastrar izquierda/derecha | Timeline | Desplazarse en el tiempo |
| Clic derecho y arrastrar arriba/abajo | Timeline | Zoom horizontal |
| Cmd+arrastrar | Clip | Copiar clip |
| Arrastrar borde del clip | Clip | Recortar clip |

## Personalizar atajos

Abre `~/Documents/Taype/keybindings.json` en cualquier editor de texto.

```json
{
  "play_pause": "space",
  "pause": "p",
  "stop": "z",
  "record": "return",
  "add_marker_here": "/",
  "previous_marker": ",",
  "next_marker": ".",
  "go_to_marker_1": "1",
  "split_clip": "s",
  "duplicate_clip": "d",
  "duplicate_track_without_content": "cmd+d",
  "duplicate_track": "cmd+alt+d",
  "toggle_focus": "f"
}
```

Cada entrada asigna una acción a una combinación de teclas.

## Modo teclado virtual

Cuando el teclado virtual está abierto (`Cmd+K`), TayPE envía todas las
pulsaciones a ese popup y pausa los atajos principales.
