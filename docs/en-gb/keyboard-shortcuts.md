# Keyboard Shortcuts

TayPE's keyboard shortcuts are fully configurable. Edit the keybindings
file and restart to apply your changes.

## Keybindings File

```
~/Documents/Taype/keybindings.json
```

This file is created automatically on first launch with sensible defaults.
Older bindings files still auto-migrate on load when TayPE can see they are
just carrying an earlier default layout. That includes the old reversed loop
pair, and the older zoom layout where plain `=` / `-` changed track height.

## Default Shortcuts

### Transport

| Shortcut | Action |
|----------|--------|
| Space | Play / stop |
| P | Pause |
| Z | Stop (returns to start; while recording, Return goes back to the pass start and Punch / Do-Over park at the take end) |
| Return | Record-mode action |
| / | Add marker at the tape head |
| , | Go to previous marker or loop brace |
| . | Go to next marker or loop brace |
| Unbound | Set 0 at Playhead for the selected Cut |
| [ | Set the left loop brace to the tape head |
| ] | Set the right loop brace to the tape head |
| L | Set both loop braces to the selected clips and enable loop playback |
| Cmd+L | Toggle loop playback on or off |

### Markers

| Shortcut | Action |
|----------|--------|
| 1 through 9 | Go to markers 1 through 9 |
| 0 | Go to marker 10 |
| Cmd+1 through Cmd+9 | Go to markers 11 through 19 |
| Cmd+0 | Go to marker 20 |
| Cmd+Shift+1 through Cmd+9 | Go to markers 21 through 29 |
| Cmd+Shift+0 | Go to marker 30 |

## Record Modes

Right-click the transport record button or use **Transport > Record Stop Mode** to
choose what **Return** does during a take:
that right-click menu still works even when the record button itself is
currently disabled for take admission.

- **Return** — commit the pass, stop transport, and go back to the pass start.
- **Punch** — commit the pass and keep playback rolling.
- **Do-Over** — commit only the current pass, delete those just-recorded clips, and restart from the same pass start using the current pre-roll / count-in settings.

**Z** stays the escape hatch. In Return mode it lands back at the pass start; in Punch and Do-Over it commits the pass and parks at the committed take end.

The **Edit** menu carries the split variants, while the **Tracks** menu carries
track duplication and deletion.

### Editing

| Shortcut | Action |
|----------|--------|
| \ | Split selected clips that cross the tape head |
| Cmd+\ | Split selected clips at both current loop braces |
| Option+\ | Split all clips at the tape head |
| Cmd+Option+\ | Split all clips at both current loop braces |
| D | Duplicate selected clips back-to-back as a group |
| B | Bounce selected clips to one new stem track |
| Cmd+D | Duplicate selected track without clips |
| Cmd+B | Bounce selected tracks to one new stem track and archive the sources |
| Cmd+Option+D | Duplicate selected track with clips |
| Cmd+X | Cut selected clips |
| Cmd+C | Copy selected clips |
| Cmd+V | Paste copied clip group at tape head position |
| Cmd+A | Select all visible mixer strips when mixer view has focus; otherwise select all clips, or all clips overlapping the loop when loop is active. In the MIDI editor, select all notes in the open clip |
| Tab | Jump to the next transient on the selected clip, or the selected track when no clip is selected |
| Backspace | Delete selected clips |
| Delete | Disable selected clips |
| Cmd+Option+Backspace | Delete selected non-master track |
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
| W | Toggle the active desk width: mixer rack inline or detached, docked channel strip in arranger view |
| I | Toggle channel strip panel |
| F | Focus view - show only tracks with clips at the tape head, or inside the active loop range |
| A | Toggle automation view |
| X | Toggle archive view |
| G | Spill - show selected bus and its routed tracks |
| E | E-Zoom - zoom to selected clip (press again to restore) |
| T | Toggle ruler between time and beats |
| K | Toggle high contrast theme |
| Cmd+K | Open the virtual keyboard popup |
| § | Open the Performance Monitor window |

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

### Mouse

| Input | Context | Action |
|-------|---------|--------|
| Option+click | Timeline | Seek tape head (even over clips) |
| Right-click drag left/right | Timeline | Scroll through time |
| Right-click drag up/down | Timeline | Horizontal zoom |
| Option+drag | Clip | Copy clip to new position |
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
  "set_left_loop_brace": "[",
  "set_right_loop_brace": "]",
  "toggle_loop": "cmd+l",
  "set_loop_from_selection": "l",
  "go_to_marker_1": "1",
  "split_clip": "\\",
  "split_clip_at_loop_braces": "cmd+\\",
  "split_all_clips_at_playhead": "alt+\\",
  "split_all_clips_at_loop_braces": "cmd+alt+\\",
  "duplicate_clip": "d",
  "bounce_clips_to_stem": "b",
  "bounce_tracks_to_stem": "cmd+b",
  "duplicate_track_without_content": "cmd+d",
  "duplicate_track": "cmd+alt+d",
  "zoom_in_horizontal": "=",
  "zoom_out_horizontal": "-",
  "zoom_reset_horizontal": "alt+-",
  "zoom_max_horizontal": "alt+=",
  "zoom_in_vertical": "shift+=",
  "zoom_out_vertical": "shift+-",
  "zoom_reset_vertical": "alt+shift+-",
  "zoom_max_vertical": "alt+shift+=",
  "toggle_mixer_width": "w",
  "toggle_focus": "f",
  "toggle_automation_view": "a",
  "toggle_archive_view": "x",
  "show_performance_monitor": "§"
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
- Single characters such as `a`, `7`, `\\`, or `§`

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
| Delete | Disable selected clips |
| Cmd+Option+Backspace | Delete selected non-master track |
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

Those windows stay above TayPE while TayPE is frontmost, and yield when you
switch to another application.

Hosted plugin editors are the exception. Those windows keep their own key
handling.

## MIDI Clip Editor

- `Up` / `Down` move the selected notes by one octave.
- `Cmd` / `Ctrl` + `Up` / `Down` move the selected notes by one semitone.
- `Left` / `Right` move the selected notes by one current quantise interval.
- `Delete` / `Backspace` deletes the current note selection.

On macOS, TayPE also shows these shortcuts beside the matching menu items in
the native menu bar when the menus are open.
