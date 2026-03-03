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
| Z | Stop and return to start |
| Return | Start / stop recording |

### Editing

| Shortcut | Action |
|----------|--------|
| S | Split selected clip at the tape head |
| Cmd+D | Duplicate selected clip back-to-back |
| Cmd+X | Cut selected clip |
| Cmd+C | Copy selected clip |
| Cmd+V | Paste clip at tape head position |
| Cmd+Z | Undo |
| Cmd+Shift+Z | Redo |
| Escape | Deselect clip and track |

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
| K | Toggle high contrast theme |
| Cmd+K | Open the virtual keyboard popup |

### Zoom

| Shortcut | Action |
|----------|--------|
| Cmd + mouse wheel | Horizontal zoom (centred on tape head) |
| Option + mouse wheel | Vertical zoom (anchored to selected track) |
| Cmd+Option+= | Zoom in tracks |
| Cmd+Option+- | Zoom out tracks |
| Cmd+Option+0 | Reset track height to default |

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
  "split_clip": "s",
  "toggle_focus": "f"
}
```

Each entry maps an action name to a key combination.

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
| Cmd+, | Open Preferences |

## Virtual Keyboard Mode

When the virtual keyboard popup is open (`Cmd+K`), TayPE routes all key presses
to the popup and pauses the main timeline/transport shortcuts. Press `Escape`
to close the popup and return to normal shortcut control.
