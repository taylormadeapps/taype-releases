# Insert Slots

Vier serielle Plugin-Slots für VST3-Plugins. Ein Klick auf einen leeren Slot
lädt ein Plugin. Rechtsklick auf einen belegten Slot öffnet Bypass, Remove oder
den Plugin-Editor.

Bei archivierten Spuren werden aktive oder gebypasste Inserts in der
Archivansicht rot als offline angezeigt. TayPE behält den gespeicherten
Plugin-Zustand für das spätere Zurückholen aus dem Archiv, entlädt aber den
gehosteten Plugin-Prozess. Solange die Spur archiviert ist, können Sie einen
Slot entfernen oder ein aktives Insert deaktivieren; Laden, Ändern, Öffnen,
Bypass, Reaktivieren, Verschieben, Routing, Wet/Dry-Änderungen und Presets
erfordern zuerst das Zurückholen der Spur aus dem Archiv.

Der Master Bus hat dieselben vier Slots.

## Taype Drive XTALK

Taype Drive mirrors the channel-strip preamp XTALK control. In stereo non-clean modes, XTALK blends left and right into each other before the drive/preamp stage, using the same power-law taper and defaulting to `0.0`.
