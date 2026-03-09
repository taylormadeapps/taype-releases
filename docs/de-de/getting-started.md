# Erste Schritte

TayPE ist um eine einfache Schleife gebaut: aufnehmen, hören, festlegen. Keine
endlosen Menüs, keine vergrabenen Funktionen. So greift der Kern-Workflow ineinander.

## Die zwei Ansichten

TayPE hat zwei Hauptansichten. Mit **M** schaltet ihr zwischen ihnen um.

**Timeline**: Hier seht ihr Tracks, Clips und den Tape Head durch die Zeit laufen.
Hier wird aufgenommen, arrangiert und editiert.

**Mixer**: Hier formt ihr den Sound. Fader, EQ, Kompression, Plugin-Inserts.
Ein Channel Strip pro Track, von links nach rechts angeordnet.

## Reels öffnen und anlegen

TayPE startet im **Reel Browser**. Dort öffnet ihr bestehende Reels, springt in
ein kürzlich benutztes Reel oder legt ein neues an.

Verwendet **Open From File...** im Reel Browser, wenn das gewünschte Reel oder
Pack außerhalb eurer normalen Library liegt.

Temporäre Bundles aus System-Temp-Ordnern werden nicht in Recents gespeichert,
damit Tests und Entpack-Aktionen eure eigentliche Reel-Liste nicht zumüllen.

Beim Anlegen eines Reels öffnet TayPE einen nativen Save-Dialog unter
`~/Documents/Taype/Reels` und schlägt einen Namen wie `Untitled Reel.taype`
vor. Ort und Name lassen sich in diesem einen Schritt ändern.

Der Arbeitszustand wird automatisch gespeichert, solange der Transport steht.
Es gibt keinen separaten Save-Befehl. Mit **Cmd+S** erzeugt ihr stattdessen
einen benannten Checkpoint: eine bewusste Marke, zu der ihr später zurückkönnt.

Wenn ihr ohne alten Verlauf neu anfangen wollt, benutzt **Thin Reel...** im
Reel Browser. TayPE fragt nach dem Ziel für das ausgedünnte Bundle, hängt
standardmäßig `Thinned` an den Namen an und lässt das Quell-Reel unangetastet.

In der History des Reel Browsers ist die Standardansicht tag-getrieben:
aktueller Stand, benannte Checkpoints und Branch-Origin-Tags. Wenn ihr von
einem Autosave abzweigt, taggt TayPE diesen Commit, damit er sichtbar bleibt.
Normale Autosave-Head-Commits bleiben verborgen, bis **Show Autosaves**
aktiviert ist. Die History erscheint als durchgehender vertikaler Git-Stil-Graph.
Mit **Focus** springt ihr nach dem Erkunden alter Commits schnell zurück zum
aktuellen Zustand.

## Aufnahme

1. Wählt einen Track, indem ihr in der Timeline auf den Header klickt.
2. Stellt den Eingang des Tracks über das Eingangslabel ein
   (z. B. `1-2` für ein Stereo-Paar eures Interfaces).
3. Schaltet den Track mit **R** aufnahmebereit.
4. Drückt **Return**, um die Aufnahme zu starten. Noch einmal **Return** stoppt sie.

Während der Aufnahme wächst ein roter Ghost Clip auf dem Track mit und zeigt,
wo gerade Audio aufgenommen wird. Nach dem Stop erscheint der endgültige Clip
mit Wellenform.

## Wiedergabe

- **P**: Pause
- **Space**: Play / Stop
- **Z**: Stop und zurück zum Anfang

Klickt irgendwo in die Timeline oder oben in das Lineal, um den Tape Head zu
verschieben. Halten und ziehen scrubbt durch die Zeit.

## Sample Rate und Resampling

Öffnet **Preferences** (**Cmd+,**) und dann den Reiter **Audio**.

- TayPE arbeitet intern mit **48 kHz**.
- Im Audio-Tab bleiben die Hardware-Auswahlzeilen bis **Audio buffer size**
  oben stehen. Darunter folgen Gerätestatus, Resampling, NAM und
  **Apply Audio Changes**.
- Mit **Apply Audio Changes** könnt ihr Änderungen an den Audio-Einstellungen
  explizit übernehmen.
- Wenn **Resampling** **off** ist, ist das Sample-Rate-Feld schreibgeschützt.
- Bei deaktiviertem Resampling versucht TayPE automatisch, das Interface auf
  **48 kHz** umzuschalten.
- Ist das Interface dann nicht auf 48 kHz, markiert TayPE das rot und fordert
  euch auf, Resampling zu aktivieren.
- Wenn **Resampling** **on** ist, könnt ihr die Interface-Sample-Rate ändern,
  während TayPE intern weiter mit 48 kHz verarbeitet.
- **NAM AMX Acceleration** aktiviert TayPEs Accelerate-gestützten LSTM-Pfad auf
  Apple Silicon, inklusive Mono-/Stereo-LSTM-Instanzen und größeren Shared Batches.
- **True Summing** sitzt jetzt im **NAM Summing** Panel des Master-Strips.
  Aktiv ist es nur, wenn **NAM AMX Acceleration** eingeschaltet ist.

## Editieren

Editieren passiert nur bei gestopptem Transport. Das ist Absicht: TayPE trennt
saubere Wiedergabe von strukturellen Änderungen.

- **Clip anklicken**, um ihn zu wählen
- **Clip ziehen**, um ihn zu verschieben
- **Cmd+ziehen**, um einen Clip zu kopieren
- **S**: ausgewählten Clip am Tape Head schneiden
- **Cmd+D**: Clip direkt dahinter duplizieren
- **Cmd+X / Cmd+C / Cmd+V**: ausschneiden, kopieren, einfügen

Die Ränder eines Clips lassen sich zum Trimmen ziehen. Das ist nicht-destruktiv.

## Undo und Redo

- **Cmd+Z**: Undo
- **Cmd+Shift+Z**: Redo

Jede Aktion ist rückgängig machbar: Fader-Bewegungen, Clip-Edits, Track-Änderungen.

## Lizenzierung

Über das **TayPE** App-Menü öffnet ihr die Lizenzierung:

- **License Now**
- **License**

## Über TayPE

Mit **TayPE > About TayPE** seht ihr die exakte Version / den Build sowie die
mitgelieferten Abhängigkeiten und Lizenzen.

## Popup Help

Über **Help -> Popup Help** oder den rechten **?**-Schalter in der
Transportleiste aktiviert ihr Hover-Hilfe für Transport, Timeline, Mixer und
Channel Strip. Nach etwa **0.7 Sekunden** erklärt TayPE das jeweilige Element.

## RTFM und Docs-Suche

Mit **Help -> Read the Fine Manual** öffnet ihr die passende TayPE-GitBook-
Sprache im Browser, wenn diese Übersetzung veröffentlicht ist. Falls es für
die aktuelle App-Sprache noch keinen Docs-Bereich gibt, fällt TayPE auf
Englisch zurück.

Unter macOS könnt ihr außerdem das Suchfeld oben im **Help**-Menü verwenden.
Return oder der Suchbutton öffnen die Suche im passenden Docs-Bereich im
Browser. Wenn es für diese Sprache keinen GitBook-Bereich gibt, wird auf
Englisch zurückgefallen.

**Help -> Search TayPE Docs...** bleibt auf jeder Plattform als explizite
Suche verfügbar.

## App-Sprache

Mit **Help -> Language** wählt ihr die Sprache, die TayPE beim nächsten Start
benutzen soll. Die Auswahl wird sofort gespeichert, TayPE zeigt eine
Bestätigung in der neu gewählten Sprache und bittet dann um einen Neustart.

Im Menü erscheinen nur Sprachdateien, die im TayPE-Sprachenordner tatsächlich
vorhanden und gültig sind. So lassen sich auch unfertige Sprachpakete testen.

Das aktuelle Alpha-Bundle enthält **English (UK)** plus Entwürfe für
**Français**, **Deutsch**, **Español**, **Íslenska** und **日本語**.

## Guild Picks

Über **Tools -> Guild Picks** bekommt ihr eine kleine kuratierte Plugin-Liste
für Leute, die wirklich Platten fertig machen wollen.

Guild Picks trägt diesen Hinweis:

**No affiliations. No kickbacks. Just plugins we genuinely rate for making records.**

## Track-Zustände

TayPE kennt drei Arten, Tracks zu betrachten:

**Current**: der Standard. Eure aktiven, lebenden Tracks.

**Focus**: Mit **F** zeigt die Timeline nur Tracks mit Audio an der aktuellen
Position des Tape Heads. Armed und ausgewählte Tracks bleiben immer sichtbar.

**Archive**: Mit **A** wechselt ihr in die Archivansicht. Archivierte Tracks
sind vollständig still: keine Wiedergabe, kein Processing, keine CPU.

## Stems und Busse

Tracks können mit **B** im Track-Header als Busse markiert werden. Ein Bus
summiert das Audio aller dorthin gerouteten Tracks und ermöglicht Submixe.

Ein Track wird auf einen Bus geroutet, indem ihr sein Ausgangslabel anklickt
und den Bus aus der Liste auswählt.

Mit **G** (Spill) seht ihr nur den gewählten Bus und die Tracks, die zu ihm laufen.

## Wie weiter?

- Die [Timeline](timeline/README.md) im Detail kennenlernen
- [Mixer](mixer.md) und [Channel Strip](channel-strip/README.md) erkunden
- Alle [Tastaturkürzel](keyboard-shortcuts.md) ansehen
