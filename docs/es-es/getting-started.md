# Primeros pasos

TayPE está construido alrededor de un bucle simple: grabar, escuchar y
comprometerse. Sin menús interminables ni funciones enterradas.

## Las dos vistas

TayPE tiene dos vistas principales. Pulsa **M** para alternar entre ellas.

**Timeline**: donde ves las pistas, los clips y el cabezal de cinta moverse
en el tiempo. Aquí grabas, arreglas y editas.

**Mezclador**: donde moldeas el sonido. Faders, EQ, compresión e inserts.
Una tira de canal por pista, de izquierda a derecha.

## Abrir y crear reels

TayPE se abre en el **Reel Browser**. Ahí puedes abrir un reel existente,
volver a uno reciente o crear uno nuevo.

Usa **Open From File...** cuando el reel o el pack esté fuera de tu biblioteca normal.

Los bundles temporales abiertos desde carpetas temporales del sistema no se
guardan en Recents, así que las pruebas no ensucian tu lista normal.

Cuando creas un reel, TayPE abre un diálogo nativo de guardado en
`~/Documents/Taype/Reels` y propone un nombre como `Untitled Reel.taype`.

El estado de trabajo se guarda automáticamente mientras el transporte está
parado. No hay un comando Save separado. Pulsa **Cmd+S** para crear un
checkpoint con nombre.

Si quieres empezar limpio sin arrastrar el historial anterior, usa
**Thin Reel...** en el Reel Browser. TayPE pregunta dónde poner el bundle
adelgazado, añade `Thinned` al nombre por defecto y deja intacto el reel fuente.

## Grabación

1. Selecciona una pista haciendo clic en su cabecera.
2. Ajusta la entrada de la pista haciendo clic en la etiqueta de entrada.
3. Arma la pista para grabar con **R**.
4. Pulsa **Return** para empezar. Pulsa otra vez para detener.

Mientras grabas verás crecer un clip fantasma rojo en la pista. Al parar,
aparece el clip definitivo con su forma de onda.

## Reproducción

- **P**: pausa
- **Space**: reproducir / detener
- **Z**: detener y volver al inicio

Haz clic en cualquier punto de la timeline o de la regla superior para mover
el cabezal. Mantén pulsado y arrastra para scrub.

## Frecuencia de muestreo y resampling

Abre **Preferences** (**Cmd+,**) y ve a la pestaña **Audio**.

- TayPE trabaja internamente a **48 kHz**.
- Si **Resampling** está **off**, el campo de sample rate es de solo lectura.
- Con resampling desactivado, TayPE intenta poner tu interfaz en **48 kHz**.
- Si no está a 48 kHz, TayPE lo marca en rojo.
- Si **Resampling** está **on**, puedes cambiar la frecuencia de la interfaz
  mientras TayPE sigue procesando a 48 kHz.
- **NAM AMX Acceleration** activa la ruta LSTM acelerada en Apple Silicon.
- **True Summing** vive en el panel **NAM Summing** del master.

## Edición

La edición solo ocurre con el transporte parado.

- **Haz clic en un clip** para seleccionarlo
- **Arrastra un clip** para moverlo
- **Cmd+arrastrar** para copiarlo
- **S** para dividirlo en la posición del cabezal
- **Cmd+D** para duplicarlo a continuación
- **Cmd+X / Cmd+C / Cmd+V** para cortar, copiar y pegar

Arrastra los bordes del clip para recortarlo. Es no destructivo.

## Deshacer y rehacer

- **Cmd+Z**
- **Cmd+Shift+Z**

Todo se puede deshacer.

## Licencia

Usa el menú **TayPE** de la aplicación para abrir la licencia.

## Acerca de TayPE

Usa **TayPE > About TayPE** para ver la versión exacta y las licencias de las
dependencias incluidas.

## Ayuda emergente

Usa **Help -> Popup Help** o el botón **?** de la barra de transporte para
activar la ayuda al pasar el puntero.

## Manual y búsqueda en la documentación

Usa **Help -> Read the Fine Manual** para abrir en el navegador la versión de
GitBook de TayPE que corresponda a ese idioma cuando exista. Si el idioma
actual de la app todavía no tiene una sección publicada en la documentación,
TayPE recurre al inglés.

En macOS, el campo de búsqueda en la parte superior del menú **Help** busca en
la versión correspondiente de la documentación. Si ese idioma no tiene sección
de GitBook, la búsqueda recurre al inglés.

**Help -> Search TayPE Docs...** sigue disponible como búsqueda explícita.

## Idioma de la aplicación

Usa **Help -> Language** para elegir el idioma que TayPE usará en el siguiente
arranque. TayPE guarda la elección al momento y pide reiniciar.

El menú solo muestra los archivos de idioma presentes y válidos. El bundle alpha
actual incluye **English (UK)** más borradores de **Français**, **Deutsch**,
**Español**, **Íslenska** y **日本語**.

## Guild Picks

Usa **Tools -> Guild Picks** para ver una lista pequeña y curada de plugins.

## Estados de pista

**Current**: el estado por defecto.

**Focus**: **F** filtra la timeline para mostrar solo pistas con audio en la
posición actual del cabezal.

**Archive**: **A** cambia a la vista de archivo. Las pistas archivadas quedan
totalmente en silencio.

## Stems y buses

Puedes convertir una pista en bus con el botón **B**. Un bus suma el audio de
las pistas que se enrutan a él.

Pulsa **G** (Spill) para ver solo el bus seleccionado y las pistas que van a él.

## Qué sigue

- Aprende la [timeline](timeline/README.md) en detalle
- Explora el [mezclador](mixer.md) y el [canal](channel-strip/README.md)
- Consulta todos los [atajos de teclado](keyboard-shortcuts.md)
