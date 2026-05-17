# Skróty klawiaturowe

TayPE's keyboard shortcuts are fully configurable. Edycja the keybindings
file and restart to apply your changes.

## Keybindings Plik

```
~/Documents/Taype/keybindings.json
```

This file is created automatically on first launch with sensible defaults.

## Domyślne Skróty

### Transport

| Shortcut | Action |
|----------|--------|
| Space | Odtwórz / stop |
| P | Odtwórz / pauza (zablokowane podczas nagrywania) |
| Z | Zatrzymaj (returns to start; while recording, parks at take end) |
| Powrót | Start / stop recording |
| / | Dodaj marker at the tape head |
| , | Go to previous marker |
| . | Go to next marker |
| Unbound | Set 0 at Playhead for the selected Wytnij |

### Markery

| Shortcut | Action |
|----------|--------|
| 1 through 9 | Go to markers 1 through 9 |
| 0 | Go to marker 10 |
| Cmd+1 through Cmd+9 | Go to markers 11 through 19 |
| Cmd+0 | Go to marker 20 |
| Cmd+Shift+1 through Cmd+9 | Go to markers 21 through 29 |
| Cmd+Shift+0 | Go to marker 30 |

### Editing

| Shortcut | Action |
|----------|--------|
| S | Split selected clip at the tape head |
| D | Duplikuj selected clip back-to-back |
| Cmd+D | Duplikuj selected track without clips |
| Cmd+Option+D | Duplikuj selected track with clips |
| Cmd+X | Wytnij selected clip |
| Cmd+C | Kopiuj selected clip |
| Cmd+V | Wklej clip at tape head position |
| Backspace | Usuń selected clip |
| Usuń | Usuń selected non-master track |
| Cmd+Z | Cofnij |
| Cmd+Shift+Z | Powtórz |
| Escape | Odznacz clip and track |

### Reel

| Shortcut | Action |
|----------|--------|
| Cmd+S | Utwórz checkpoint |
| Cmd+R | Otwórz Reel Browser |

TayPE persists working state automatically while transport is stopped, so
there is no separate user-facing Zapisz command.

### Widok

| Shortcut | Action |
|----------|--------|
| M | Toggle between timeline and mixer |
| I | Toggle channel strip panel |
| F | Fokus view - show only tracks with clips at the tape head |
| A | Toggle archive view |
| G | Rozlanie - show selected bus and its routed tracks |
| E | E-Powiększenie - zoom to selected clip (press again to restore) |
| T | Toggle ruler between time and beats |
| K | Toggle high contrast theme |
| Cmd+K | Otwórz the virtual keyboard popup |

### Powiększenie

| Shortcut | Action |
|----------|--------|
| Cmd + mouse wheel | Horizontal zoom (centred on tape head) |
| Option + mouse wheel | Vertical zoom (anchored to selected track) |
| = | Powiększenie in tracks |
| - | Powiększenie out tracks |
| Shift+- | Resetuj track height to default |
| Shift+= | Jump track height to maximum |

### Mouse

| Wejście | Context | Action |
|-------|---------|--------|
| Option+click | Oś czasu | Seek tape head (even over clips) |
| Right-click drag left/right | Oś czasu | Przewijanie through time |
| Right-click drag up/down | Oś czasu | Horizontal zoom |
| Cmd+drag | Clip | Kopiuj clip to new position |
| Drag clip edge | Clip | Przycięcie clip (non-destructive) |

## Customising Skróty

Otwórz `~/Documents/Taype/keybindings.json` in any text editor. The format
is straightforward:

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
  "zoom_in_vertical": "=",
  "zoom_out_vertical": "-",
  "zoom_reset_vertical": "shift+-",
  "zoom_max_vertical": "shift+=",
  "toggle_focus": "f"
}
```

Each entry maps an action name to a key combination.

To bind **Set 0 at Playhead**, add a `set_zero_here` entry. For example,
`"set_zero_here": "0"` would bind it to the `0` key. Marker actions use
`add_marker_here`, `previous_marker`, `next_marker`, and `go_to_marker_N`
for direct jumps.

### Key Combination Format

Combine modifiers with `+`:

- **cmd** - Command key
- **ctrl** - Control key
- **shift** - Shift key
- **alt** or **option** - Alt / Option key

Przykłady: `"cmd+s"`, `"ctrl+shift+z"`, `"alt+3"`

### Available Key Names

- Letters: `a` through `z`
- Numbers: `0` through `9`
- Special: `space`, `return`, `tab`, `escape`, `delete`, `backspace`
- Arrows: `up`, `down`, `left`, `right`
- Navigation: `home`, `end`, `pageup`, `pagedown`
- Function keys: `f1` through `f12`

### Platform Skróty

These standard shortcuts are always active and cannot be reassigned:

| Shortcut | Action |
|----------|--------|
| Cmd+Z | Cofnij |
| Cmd+Shift+Z | Powtórz |
| Cmd+X | Wytnij |
| Cmd+C | Kopiuj |
| Cmd+V | Wklej |
| Backspace | Usuń selected clip |
| Usuń | Usuń selected non-master track |
| Cmd+, | Otwórz Preferencje |

## Virtual Keyboard Mode

When the virtual keyboard popup is open (`Cmd+K`), TayPE routes all key presses
to the popup and pauses the main timeline/transport shortcuts. Press `Escape`
to close the popup and return to normal shortcut control.

The popup is anchored above the transport lane so it stays clear of the
transport controls instead of sitting on top of them.

## Floating Okno Shortcut Pass-Through

TayPE's own floating utility windows still hand unhandled key presses back to
the main app shortcut path. That means `Space`, transport keys, and the rest
still work while the Korektor visualiser, compressor visualiser, MIDI clip editor,
Wydajność Monitorowanie, or floating Melodyne window has focus.

Hosted plugin editors are the exception. Those windows keep their own key
handling.

On macOS, TayPE also shows these shortcuts beside the matching menu items in
the native menu bar when the menus are open.
