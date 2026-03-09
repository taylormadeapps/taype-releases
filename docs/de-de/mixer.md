# Der Mixer

Drückt **M**, um zwischen Timeline und Mixer zu wechseln.

Der Mixer zeigt pro Track einen Channel Strip, horizontal von links nach rechts
angeordnet. Der Master Bus steht immer ganz rechts.

![Mixer-Übersicht](../../assets/img/docs/mixer-overview.png)

## Aufbau des Channel Strips

Jeder Strip zeigt von oben nach unten:

- **Track-Name**
- **Input Selector**
- **Control Buttons**: M, S, R, MON, A, B
- **Output Selector**
- **Preamp Section**
- **Filter Section**
- **EQ Section**
- **Compressor Section**
- **Insert Slots**
- **Pan**
- **Fader**
- **Peak Meter**

Jede Processing-Sektion kann über ihren Header auf- oder zugeklappt werden.

## Bedienung

**Fader und Regler** werden vertikal gezogen. Jeder Drag ist eine einzelne
undo-bare Aktion.

**Buttons** werden per Klick umgeschaltet.

Wenn **B** aktiviert wird, wird der Track zum Bus. Wird **B** wieder
deaktiviert, trennt TayPE alle Tracks, die auf diesen Bus geroutet waren.

**Insert Slots** laden per Klick Plugins; Rechtsklick öffnet das Kontextmenü.

**Track Name** lässt sich bei gestopptem Transport per Doppelklick direkt editieren.

## Track-Reihenfolge

Tracks erscheinen im Mixer in derselben Reihenfolge wie in der Timeline.

- **Archive View (A)** zeigt aktive oder archivierte Tracks
- **Focus (F)** zeigt Tracks mit Clips an der Tape-Head-Position
- **Spill (G)** zeigt den ausgewählten Bus und alle dorthin gerouteten Tracks
