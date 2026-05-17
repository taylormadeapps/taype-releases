# Aufnahme

## Ghost Clip

Während der Aufnahme wächst ein roter Ghost Clip auf dem armed Track.
Beim Stop wird er durch den endgültigen Clip ersetzt.

## Timing

Aufgenommene Clips bleiben an der Punch-In-Position verankert.
Wenn eine Aufnahme den Anfang oder das Ende eines vorhandenen Clips überlappt,
trimmt TayPE den alten Clip bis zur neuen Take-Grenze und setzt nur einen sehr
kurzen Anti-Klick-Fade. Es wird kein langer automatischer Crossfade erzeugt.
Liegt die Aufnahme mitten in einem vorhandenen Clip, wird der alte Clip um die
neue Aufnahme herum geteilt.

Play / Pause ist während einer laufenden Aufnahme gesperrt. Beende den Take mit
**Record** oder **Stop**.

## Input / Output Routing

**Input** wird über das Eingangslabel im Track-Header gewählt.

- Audio-Tracks zeigen nur Audio-Eingänge
- Instrument-Tracks zeigen nur MIDI-Eingänge

**MON** schaltet Live-Monitoring durch die ganze Track-Kette.

**Output** wählt **Master** oder einen vorhandenen Bus.
