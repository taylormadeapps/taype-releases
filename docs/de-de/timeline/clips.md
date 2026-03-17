# Clips

## Auswählen

Klickt auf einen Clip, um ihn zu wählen. **Escape** hebt alles auf.
MIDI-basierte Clips zeigen ausserdem ein kleines verbundenes Achtelnoten-Symbol
im Namensfeld des Clips, damit ihr sie sofort erkennt.

Ein normaler Doppelklick öffnet **Clip Properties**. Dort könnt ihr den Clip
umbenennen oder umfärben, die Quellpfade prüfen, diese über die kleinen
Öffnen-Symbole im Finder anzeigen und bei MIDI-Clips mit **Edit MIDI** TayPEs
MIDI-Clip-Editor öffnen oder per **Re-render from MIDI** neu rendern.

## MIDI-Clip-Editor

**Cmd+Doppelklick** auf einen MIDI-basierten Clip öffnet den schwebenden
MIDI-Clip-Editor. Ein normaler Doppelklick öffnet weiter **Clip Properties**.

Klickt in das Raster, um eine Note hinzuzufügen. Zieht eine Note, um sie in
Zeit und Tonhöhe zu verschieben. Ein Rechtsklick auf eine Note löscht sie. Der
Schalter **Piano/Drum** wechselt zwischen Piano-Roll-Ansicht und festen
Drum-Zeilen. Der Schalter **Hoch oben/Tief oben** dreht um, ob hohe oder tiefe
Noten oben im Raster liegen.
Zieht über einen leeren Teil des Rasters, um mehrere Noten per Rahmen zu
markieren, und **Cmd/Ctrl+A** wählt alle. Wenn mehrere Noten gewählt sind,
verschiebt das Ziehen einer Note die ganze Auswahl, und der rechte
Resize-Griff ändert die Dauer aller gewählten Noten gemeinsam.

Während ihr Noten setzt oder bewegt, spielt TayPE sie über das aktuelle
Instrument der Spur an. **Commit** schreibt die aktualisierte MIDI-Begleitdatei
und rendert den Clip neu. **Cancel** schließt ohne Änderungen. Der Editor
öffnet nur bei gestopptem Transport. Er folgt außerdem der Reel-Timeline und
nutzt denselben Linealmodus, denselben Cut-Nullpunkt, dieselben Snap-Raster
und denselben Haupt-Playhead wie der Arranger.

## Bewegen

Zieht einen Clip horizontal für die Zeit und vertikal auf einen anderen Track.

## Kopieren

Mit **Cmd** beim Ziehen kopiert ihr den Clip.

## Schneiden

Wählt einen Clip, setzt den Tape Head und drückt **S**.

## Trimmen

Zieht die linke oder rechte Clip-Kante. Das bleibt nicht-destruktiv.

## Gain und Fades

Die Gain-Linie im Clip lässt sich nach oben oder unten ziehen.

## Crossfades

Überlappen zwei Clips, zeigt TayPE den Crossfade-Bereich an.

## Zwischenablage

- **Cmd+X**
- **Cmd+C**
- **Cmd+V**
- **Cmd+D**
