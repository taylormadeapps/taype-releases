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
| P | Play / pause (blocked while recording) |
| Z | Stop (returns to start; while recording, parks at take end) |
| Return | Start / stop recording |
| C | Toggle metronome click |
| [ | Set the left loop brace to the tape head |
| ] | Set the right loop brace to the tape head |
| Cmd+L | Toggle loop playback |
| L | Set the loop from the current selection |
| / | Add marker at the tape head |
| , | Go to previous marker |
| . | Go to next marker |
| Cmd+/ | Set 0 at Playhead for the selected Cut |
| Option+S | Toggle timeline snap |

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
| Option+D | Duplicate selected track with clips |
| Cmd+Shift+A | Select every clip on the currently selected tracks |
| Cmd+Backspace | Archive or unarchive the selected non-master track |
| Cmd+Delete | Delete selected non-master track |
| Cmd+X | Cut selected clip |
| Cmd+C | Copy selected clip |
| Cmd+V | Paste clip at tape head position |
| Backspace | Delete selected clip |
| Delete | Toggle clip disable for the selected clips |
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

The **Transport** menu now exposes the same bound transport actions directly:
**Play / Stop**, **Pause**, **Stop**, **Record**, both loop-brace setters,
**Loop Selected**, **Set 0 at Playhead**, **Tab to Transient**, **Snap**, and a
**Markers** submenu that also contains direct **Go to Marker** jumps split
into fixed **1-10**, **11-20**, and **21-30** folders. The **Edit** menu
carries **Select All** / **Deselect All** alongside the split variants inside
the **Split** submenu, while the **Tracks** menu carries track creation,
selected-track clip selection, reordering, duplication, and deletion.

### View

| Shortcut | Action |
|----------|--------|
| M | Toggle between timeline and mixer |
| W | Toggle the active desk width: mixer rack inline or detached, docked channel strip in arranger view |
| I | Toggle channel strip panel |
| Left / Right | In timeline view, move the tape head to the previous or next visible tick. Held/repeated presses keep stepping from the last tick anchor while playback is rolling, so rewind can move backwards against the transport. In mixer view, scroll the rack left or right |
| Up / Down | In timeline view, scroll the track stack. In mixer view, scroll the shared strip sections up or down |
| F | Focus view - show only tracks with clips at the tape head |
| A | Toggle automation view |
| Shift+A | Cycle automation display: Volume -> Pan -> Width and enter automation view if needed |
| X | Toggle archive view |
| G | Spill - show selected bus and its routed tracks |
| E | E-Zoom - zoom to selected clip (press again to restore) |
| T | Add a new audio track |
| R | Toggle ruler between time and beats |
| K | Toggle high contrast theme |
| Cmd+K | Open the virtual keyboard popup |
| Backtick (\`) | Open the Performance Monitor window |

The **View** menu also exposes the same focus, automation, mixer,
channel-strip, ruler, and zoom actions, grouped into
**Automation Display**, **Horizontal Zoom**, and **Vertical Zoom** submenus.
The automation submenu carries both **Cycle Automation Display** and the
direct **Show Volume / Show Pan / Show Width** picks.

### Zoom

| Shortcut | Action |
|----------|--------|
| Cmd + mouse wheel | Horizontal zoom (centred on tape head) |
| Option + mouse wheel | Vertical zoom (anchored to selected track) |
| = | Zoom the timeline in around the tape head |
| - | Zoom the timeline out around the tape head |
| Option+- | Reset the timeline to the default 16-bar frame level |
| Option+= | Jump the timeline to maximum horizontal zoom |
| Shift+= | Zoom in tracks |
| Shift+- | Zoom out tracks |
| Option+Shift+- | Reset track height to default |
| Option+Shift+= | Jump track height to maximum |

On macOS, those same zoom bindings show beside their **View** menu entries in
the native menu bar.

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
  "toggle_metronome": "c",
  "add_marker_here": "/",
  "previous_marker": ",",
  "next_marker": ".",
  "set_left_loop_brace": "[",
  "set_right_loop_brace": "]",
  "toggle_loop": "cmd+l",
  "set_loop_from_selection": "l",
  "set_zero_here": "cmd+/",
  "go_to_marker_1": "1",
  "split_clip": "\\",
  "split_clip_at_loop_braces": "cmd+\\",
  "split_all_clips_at_playhead": "alt+\\",
  "split_all_clips_at_loop_braces": "cmd+alt+\\",
  "duplicate_clip": "d",
  "bounce_clips_to_stem": "b",
  "bounce_tracks_to_stem": "cmd+b",
  "duplicate_track_without_content": "cmd+d",
  "duplicate_track": "alt+d",
  "select_clips_on_selected_tracks": "cmd+shift+a",
  "archive_track": "cmd+backspace",
  "delete_track": "cmd+delete",
  "zoom_in_horizontal": "=",
  "zoom_out_horizontal": "-",
  "zoom_reset_horizontal": "alt+-",
  "zoom_max_horizontal": "alt+=",
  "cycle_automation_display": "shift+a",
  "zoom_in_vertical": "shift+=",
  "zoom_out_vertical": "shift+-",
  "zoom_reset_vertical": "alt+shift+-",
  "zoom_max_vertical": "alt+shift+=",
  "toggle_mixer_width": "w",
  "toggle_focus": "f",
  "toggle_automation_view": "a",
  "toggle_archive_view": "x",
  "toggle_snap": "alt+s",
  "show_performance_monitor": "`"
}
```

Each entry maps an action name to a key combination.

**Set 0 at Playhead** defaults to `Cmd+/`. Override it with a
`set_zero_here` entry if you want a different key. For example,
`"set_zero_here": "0"` would move it to the `0` key. Marker actions use
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
