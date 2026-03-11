# Tastaturkürzel

Die Tastaturkürzel von TayPE sind vollständig konfigurierbar. Bearbeitet die
Keybindings-Datei und startet die App neu, um Änderungen zu übernehmen.

## Keybindings-Datei

```
~/Documents/Taype/keybindings.json
```

Diese Datei wird beim ersten Start automatisch mit sinnvollen Standardwerten angelegt.

## Standardkürzel

### Transport

| Kürzel | Aktion |
|----------|--------|
| Space | Play / Stop |
| P | Pause |
| Z | Stop |
| Return | Aufnahme starten / stoppen |
| / | Marker am Tape Head setzen |
| , | Zum vorherigen Marker |
| . | Zum nächsten Marker |
| Unbound | Set 0 at Playhead for the selected Cut |

### Marker

| Kürzel | Aktion |
|----------|--------|
| 1 bis 9 | Zu Marker 1 bis 9 |
| 0 | Zu Marker 10 |
| Cmd+1 bis Cmd+9 | Zu Marker 11 bis 19 |
| Cmd+0 | Zu Marker 20 |
| Cmd+Shift+1 bis Cmd+9 | Zu Marker 21 bis 29 |
| Cmd+Shift+0 | Zu Marker 30 |

### Bearbeitung

| Kürzel | Aktion |
|----------|--------|
| S | Gewählten Clip am Tape Head schneiden |
| D | Gewählten Clip direkt dahinter duplizieren |
| Cmd+D | Gewählten Track ohne Clips duplizieren |
| Cmd+Option+D | Gewählten Track mit Clips duplizieren |
| Cmd+X | Gewählten Clip ausschneiden |
| Cmd+C | Gewählten Clip kopieren |
| Cmd+V | Clip an Position des Tape Heads einsetzen |
| Backspace | Gewählten Clip löschen |
| Delete | Gewählten Nicht-Master-Track löschen |
| Cmd+Z | Undo |
| Cmd+Shift+Z | Redo |
| Escape | Clip- und Track-Auswahl aufheben |

### Reel

| Kürzel | Aktion |
|----------|--------|
| Cmd+S | Checkpoint erstellen |
| Cmd+R | Reel Browser öffnen |

TayPE speichert den Arbeitsstand automatisch, solange der Transport steht.

### Ansicht

| Kürzel | Aktion |
|----------|--------|
| M | Zwischen Timeline und Mixer umschalten |
| I | Channel-Strip-Panel umschalten |
| F | Focus-Ansicht |
| A | Archivansicht umschalten |
| G | Spill |
| E | E-Zoom |
| T | Lineal zwischen Zeit und Takten umschalten |
| K | High-Contrast-Theme umschalten |
| Cmd+K | Virtuelle Tastatur öffnen |

### Zoom

| Kürzel | Aktion |
|----------|--------|
| Cmd + Mausrad | Horizontal zoomen |
| Option + Mausrad | Vertikal zoomen |
| = | Tracks vergrößern |
| - | Tracks verkleinern |
| Shift+- | Track-Höhe zurücksetzen |
| Shift+= | Track-Höhe auf Maximum setzen |

### Maus

| Eingabe | Kontext | Aktion |
|-------|---------|--------|
| Option+Klick | Timeline | Tape Head setzen |
| Rechtsklick + ziehen links/rechts | Timeline | Durch die Zeit scrollen |
| Rechtsklick + ziehen hoch/runter | Timeline | Horizontal zoomen |
| Cmd+ziehen | Clip | Clip kopieren |
| Clip-Kante ziehen | Clip | Clip trimmen |

## Kürzel anpassen

Öffnet `~/Documents/Taype/keybindings.json` in einem Texteditor. Das Format ist
einfach:

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

Jeder Eintrag weist einem Aktionsnamen eine Tastenkombination zu.

Für **Set 0 at Playhead** fügt ihr `set_zero_here` hinzu.

### Format der Tastenkombinationen

- **cmd**
- **ctrl**
- **shift**
- **alt** oder **option**

Beispiele: `"cmd+s"`, `"ctrl+shift+z"`, `"alt+3"`

### Verfügbare Tasten

- Buchstaben: `a` bis `z`
- Zahlen: `0` bis `9`
- Spezialtasten: `space`, `return`, `tab`, `escape`, `delete`, `backspace`
- Pfeile: `up`, `down`, `left`, `right`
- Navigation: `home`, `end`, `pageup`, `pagedown`
- Funktionstasten: `f1` bis `f12`

### Plattform-Kürzel

Diese Standardkürzel sind immer aktiv und können nicht neu belegt werden:

| Kürzel | Aktion |
|----------|--------|
| Cmd+Z | Undo |
| Cmd+Shift+Z | Redo |
| Cmd+X | Ausschneiden |
| Cmd+C | Kopieren |
| Cmd+V | Einfügen |
| Backspace | Gewählten Clip löschen |
| Delete | Gewählten Nicht-Master-Track löschen |
| Cmd+, | Preferences öffnen |

## Virtuelle Tastatur

Wenn die virtuelle Tastatur offen ist (`Cmd+K`), leitet TayPE alle Tasten an
dieses Popup weiter und pausiert die normalen Timeline-/Transport-Kürzel.
Mit `Escape` schließt ihr das Popup wieder.
