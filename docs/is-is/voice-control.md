# Raddstýring

Hægt er að stjórna TayPE alveg með rödd þegar það er tengt við Claude lotu í
gegnum MCP. Þú segir eðlilegar skipanir eins og „solo track one“, „turn down
the guitars“ eða „add a new track“ og TayPE framkvæmir þær.

Engin sértæk setningafræði. Engin ferð niður í valmyndir.

Þetta virkar með macOS Shortcut sem fangar röddina þína, sendir hana til
Claude og Claude talar svo við TayPE. Allt keyrir staðbundið á Mac-inum þínum.

## Tveir hamir

**Studio mode**: fyrir hraðar skipanir meðan þú vinnur í TayPE.

**Brain mode**: þegar þú vilt eiga samtal við Claude.

## Það sem þú þarft

- macOS Ventura (13.0) eða nýrra
- Claude Desktop með virka TayPE MCP lotu
- Nokkrar mínútur til að setja upp tvo macOS Shortcuts

## Scriptin

### Studio mode script

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

### Brain mode script

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
