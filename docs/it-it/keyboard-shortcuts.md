# Scorciatoie da Tastiera

Le scorciatoie da tastiera di TayPE sono basate su profili. Scegli un profilo in
**Preferenze > Scorciatoie**; i profili personalizzati sono file JSON e si aprono
da quella scheda con **Modifica JSON** nell'editor di sistema.

## Profili di scorciatoie

```
~/Documents/Taype/keybindings/
```

TayPE aggiorna i profili integrati dal bundle dell'app all'avvio: `Default.json`
(la mappatura TayPE) e `Industry Standard Bruh.json` (memoria muscolare di
editing in stile Pro Tools per le azioni TayPE equivalenti). I profili integrati
sono in sola lettura e appartengono al bundle; le modifiche dirette a quei file
vengono sovrascritte. Duplica un profilo per modificarlo; **Ricarica** applica
le modifiche dopo il salvataggio nell'editor esterno.

`Industry Standard Bruh` mantiene le parentesi del loop su `[` / `]` e assegna
“imposta loop dalla selezione” a `Cmd+Shift+L`, così le frecce senza modificatori
restano per la navigazione TayPE.

I vecchi file `~/Documents/Taype/keybindings.json` vengono importati una sola
volta nella cartella dei profili e archiviati come `legacy-keybindings*.bak`.

## Default Shortcuts

### Transport

| Shortcut | Action |
|----------|--------|
| Space | Play / stop |
| P | Riproduci / pausa (bloccato durante la registrazione) |
| Z | Stop (returns to start; while recording, parks at take end) |
| Return | Start / stop recording |
| / | Add marker at the tape head |
| , | Go to previous marker |
| . | Go to next marker |
| Unbound | Set 0 at Playhead for the selected Cut |

### Markers

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
| D | Duplicate selected clip back-to-back |
| Cmd+D | Duplicate selected track without clips |
| Cmd+Option+D | Duplicate selected track with clips |
| Cmd+X | Cut selected clip |
| Cmd+C | Copy selected clip |
| Cmd+V | Paste clip at tape head position |
| Backspace | Delete selected clip |
| Delete | Delete selected non-master track |
| Cmd+Z | Undo |
| Cmd+Shift+Z | Redo |
| Escape | Deselect clip and track |

### Reel

| Shortcut | Action |
|----------|--------|
| Cmd+S | Create checkpoint |
| Cmd+R | Open Reel Browser |

TayPE persists working state automatically while transport is stopped, so
there is no separate user-facing Save command.

### View

| Shortcut | Action |
|----------|--------|
| M | Toggle between timeline and mixer |
| I | Toggle channel strip panel |
| F | Focus view - show only tracks with clips at the tape head |
| A | Toggle archive view |
| G | Spill - show selected bus and its routed tracks |
| E | E-Zoom - zoom to selected clip (press again to restore) |
| T | Toggle ruler between time and beats |
| Cmd+K | Toggle high contrast theme |
| K | Open the virtual keyboard popup |

### Zoom

| Shortcut | Action |
|----------|--------|
| Cmd + mouse wheel | Horizontal zoom (centred on tape head) |
| Option + mouse wheel | Vertical zoom (anchored to selected track) |
| = | Zoom in tracks |
| - | Zoom out tracks |
| Shift+- | Reset track height to default |
| Shift+= | Jump track height to maximum |

### Mouse

| Input | Context | Action |
|-------|---------|--------|
| Option+click | Timeline | Seek tape head (even over clips) |
| Right-click drag left/right | Timeline | Scroll through time |
| Right-click drag up/down | Timeline | Horizontal zoom |
| Cmd+drag | Clip | Copy clip to new position |
| Drag clip edge | Clip | Trim clip (non-destructive) |

## Personalizzare le scorciatoie

In **Preferenze > Scorciatoie**, duplica un profilo integrato o selezionane uno
personalizzato, poi fai clic su **Modifica JSON**. Salva nell'editor e fai clic
su **Ricarica**. Il formato è semplice:

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

Examples: `"cmd+s"`, `"ctrl+shift+z"`, `"alt+3"`

### Available Key Names

- Letters: `a` through `z`
- Numbers: `0` through `9`
- Special: `space`, `return`, `tab`, `escape`, `delete`, `backspace`
- Arrows: `up`, `down`, `left`, `right`
- Navigation: `home`, `end`, `pageup`, `pagedown`
- Function keys: `f1` through `f12`
- Numeric keypad: `numpad0` through `numpad9`, `numpadplus`, `numpadminus`,
  `numpadmultiply`, `numpaddivide`, `numpaddecimal`

### Platform Shortcuts

These standard shortcuts are always active and cannot be reassigned:

| Shortcut | Action |
|----------|--------|
| Cmd+Z | Undo |
| Cmd+Shift+Z | Redo |
| Cmd+X | Cut |
| Cmd+C | Copy |
| Cmd+V | Paste |
| Backspace | Delete selected clip |
| Delete | Delete selected non-master track |
| Cmd+, | Open Preferences |

## Virtual Keyboard Mode

When the virtual keyboard popup is open (`K`), TayPE routes all key presses
to the popup and pauses the main timeline/transport shortcuts. Press `Escape`
to close the popup and return to normal shortcut control.

The popup is anchored above the transport lane so it stays clear of the
transport controls instead of sitting on top of them.

## Floating Window Shortcut Pass-Through

TayPE's own floating utility windows still hand unhandled key presses back to
the main app shortcut path. That means `Space`, transport keys, and the rest
still work while the EQ visualiser, compressor visualiser, MIDI clip editor,
Performance Monitor, or floating Melodyne window has focus.

Hosted plugin editors are the exception. Those windows keep their own key
handling.

On macOS, TayPE also shows these shortcuts beside the matching menu items in
the native menu bar when the menus are open.
