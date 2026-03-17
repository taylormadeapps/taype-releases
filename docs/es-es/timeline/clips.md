# Clips

## Selección

Haz clic en un clip para seleccionarlo. **Escape** limpia la selección.
Los clips con respaldo MIDI tambien muestran un pequeno glifo de corcheas unidas
en la pastilla del nombre para que se distingan de un vistazo.

El doble clic normal abre **Clip Properties**. Ahi puedes renombrar o
recolorear el clip, revisar sus rutas de origen, revelar esos archivos en
Finder con los pequenos iconos de apertura y, en los clips de origen MIDI,
usar **Edit MIDI** para abrir el editor MIDI de TayPE o **Re-render from MIDI**
para sacar un nuevo render con el instrumento actual.

## Editor MIDI del clip

**Cmd+doble clic** en un clip con origen MIDI abre el editor flotante del clip
MIDI. El doble clic normal sigue abriendo **Clip Properties**.

Haz clic en la rejilla para añadir una nota. Arrastra una nota para moverla en
tiempo y tono. Haz clic derecho sobre una nota para borrarla. El conmutador
**Piano/Drum** cambia entre la vista piano roll y la vista de batería. El
conmutador **Agudo arriba/Grave arriba** invierte si las notas altas o bajas
quedan arriba en la rejilla.
Arrastra sobre una zona vacía de la rejilla para hacer una selección por
marco, y **Cmd/Ctrl+A** selecciona todas las notas. Cuando hay varias notas
seleccionadas, arrastrar una nota mueve todo el grupo y arrastrar el asa de
redimensión del borde derecho cambia la duración de toda la selección.

Mientras añades o mueves notas, TayPE las preescucha a través del instrumento
actual de la pista. **Commit** guarda el archivo MIDI asociado actualizado y
vuelve a renderizar el clip. **Cancel** cierra la ventana sin cambios. El
editor solo se abre con el transporte parado. Tambien sigue la linea de tiempo
del reel y usa el mismo modo de regla, el mismo cero del corte, la misma
rejilla de ajuste y el mismo cabezal principal que el arreglador.

## Mover

Arrastra un clip en horizontal para moverlo en el tiempo y en vertical para
cambiarlo de pista.

## Copiar

Mantén **Cmd** al arrastrar para copiarlo.

## Cortar

Selecciona un clip, coloca el cabezal y pulsa **S**.

## Recorte

Arrastra los bordes del clip. Es no destructivo.

## Portapapeles

- **Cmd+X**
- **Cmd+C**
- **Cmd+V**
- **Cmd+D**
