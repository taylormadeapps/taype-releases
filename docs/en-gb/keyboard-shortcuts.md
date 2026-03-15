# Keyboard Shortcuts

TayPE's keyboard shortcuts are fully configurable. Edit the keybindings
file and restart to apply your changes.

## Keybindings File

```
~/Documents/Taype/keybindings.json
```

This file is created automatically on first launch with sensible defaults.

## Default Shortcuts

### Transport

| Shortcut | Action |
|----------|--------|
| Space | Play / stop |
| P | Pause |
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
| W | Toggle mixer width between narrow and full-width strips (mixer view only) |
| I | Toggle channel strip panel |
| F | Focus view - show only tracks with clips at the tape head |
| A | Toggle archive view |
| G | Spill - show selected bus and its routed tracks |
| E | E-Zoom - zoom to selected clip (press again to restore) |
| T | Toggle ruler between time and beats |
| K | Toggle high contrast theme |
| Cmd+K | Open the virtual keyboard popup |

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

## Customising Shortcuts

Open `~/Documents/Taype/keybindings.json` in any text editor. The format
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
  "toggle_mixer_width": "w",
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

When the virtual keyboard popup is open (`Cmd+K`), TayPE routes all key presses
to the popup and pauses the main timeline/transport shortcuts. Press `Escape`
to close the popup and return to normal shortcut control.

On macOS, TayPE also shows these shortcuts beside the matching menu items in
the native menu bar when the menus are open.
