# Sprachsteuerung

TayPE lässt sich komplett per Stimme steuern, wenn es über MCP mit einer
Claude-Session verbunden ist. Ihr sprecht natürliche Befehle wie „solo Track eins“,
„Gitarren etwas leiser“, „neuen Track anlegen“, und TayPE setzt sie um.

Keine Spezialsyntax. Kein Menü-Tauchen. Sagt einfach, was passieren soll.

Das Ganze läuft über einen macOS Shortcut, der eure Sprache erfasst, an Claude
sendet, und Claude spricht dann mit TayPE. Alles bleibt lokal auf eurem Mac.

## Zwei Modi

**Studio mode**: für schnelle Befehle direkt beim Arbeiten in TayPE. Ihr drückt
das Kürzel, sprecht, und der Fokus springt zu TayPE zurück.

**Brain mode**: für Gespräche mit Claude. Ein anderes Kürzel, sprechen, Fokus
bleibt auf Claude, damit ihr die Antwort lesen könnt.

## Voraussetzungen

- macOS Ventura (13.0) oder neuer
- Claude Desktop mit aktiver TayPE-MCP-Session
- Ein paar Minuten für zwei macOS-Shortcuts

## Studio mode einrichten

1. Öffnet **Shortcuts**
2. Erstellt einen neuen Shortcut namens **Tape Talkback**
3. Fügt **Dictate Text** hinzu
4. Fügt **Run AppleScript** hinzu und fügt das Studio-Skript ein
5. Speichern
6. Öffnet die Shortcut-Info
7. Hinterlegt **⌘⌥↩** als Tastenkürzel

## Brain mode einrichten

1. Erstellt einen zweiten Shortcut namens **Tape Brain**
2. Fügt **Dictate Text** hinzu
3. Fügt **Run AppleScript** hinzu und fügt das Brain-Skript ein
4. Speichern
5. In den Infos ein passendes Kürzel setzen, etwa **⌃⌥Space**

## Berechtigungen

Beide Shortcuts brauchen Bedienungshilfen-Rechte, um Text an Claude Desktop
zu senden.

1. **System Settings → Privacy & Security → Accessibility** öffnen
2. **Shortcuts** aktivieren
3. **System Events** aktivieren

## Die Skripte

### Studio-Mode-Skript

```applescript
on run {input, parameters}
    set spokenText to (input as text)
    if spokenText is "" then return

    tell application "System Events"
        set frontApp to name of first application process whose frontmost is true
    end tell

    set fullCommand to "tape " & spokenText

    tell application "Claude" to activate
    delay 0.3

    tell application "System Events"
        tell process "Claude"
            keystroke fullCommand
            delay 0.1
            keystroke return
        end tell
    end tell

    if frontApp is "Taype" then
        delay 0.3
        tell application "Taype" to activate
    end if

    return input
end run
```

### Brain-Mode-Skript

```applescript
on run {input, parameters}
    set spokenText to (input as text)
    if spokenText is "" then return

    set fullCommand to "tape " & spokenText

    tell application "Claude" to activate
    delay 0.3

    tell application "System Events"
        tell process "Claude"
            keystroke fullCommand
            delay 0.1
            keystroke return
        end tell
    end tell

    return input
end run
```

## Testen

Im **Studio mode** TayPE nach vorne holen, das Studio-Kürzel drücken und sagen:
„Wie viele Tracks habe ich?“ Der Fokus sollte zu TayPE zurückspringen.

Im **Brain mode** Claude nach vorne holen, das Brain-Kürzel drücken und
fragen: „Was wäre ein guter EQ-Ansatz für ein Room-Mic?“.

## Beispielbefehle

- „play“
- „stop“
- „rewind“
- „solo Track eins“
- „mute drums“
- „Track drei etwas leiser“
- „den Gitarren etwas Höhen wegnehmen“
- „einen neuen Track hinzufügen“
- „undo“
- „welche Tracks habe ich“
- „starte Aufnahme auf Track zwei bei Takt fünf“
- „setze das Tempo auf 95“

## Hardware-Controller

- **Stream Deck**
- **Fußpedal**
- **USB-Macro-Pad**

## Komplett freihändig

macOS kann diese Shortcuts auch über Bedienungshilfen komplett sprachgesteuert
auslösen. Voice Control, Head Tracking und Switch Control funktionieren dafür ebenfalls.

## Tipps

- „tape“ müsst ihr nicht sagen, der Shortcut ergänzt es
- Deutlich sprechen hilft
- Claude gleicht kleine Diktierfehler oft aus
- Nur eine Claude-Session mit TayPE verbunden offen halten
- In lauten Räumen näher ans Mikro oder ein Headset benutzen
