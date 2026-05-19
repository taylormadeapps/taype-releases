# Keyboard Shortcuts

TayPE's keyboard shortcuts are profile-based. Choose a profile in
**Preferences > Keybindings**; custom profiles are JSON files and can be opened
from that tab with **Edit JSON** in the system editor.

## Keybinding Profiles

```
~/Documents/Taype/keybindings/
```

TayPE refreshes built-in profiles from the app bundle when it starts:
`Default.json` (the TayPE layout) and `Industry Standard Bruh.json` (Pro
Tools-style edit muscle memory for matching TayPE actions). Built-in profiles
are read-only and bundle-owned, so direct edits to those files are overwritten.
Duplicate one to edit it; **Reload** applies changes after the external editor
saves.

`Industry Standard Bruh` keeps loop braces on `[` / `]` and maps setting the
loop from selection to `Cmd+Shift+L`, so the plain arrow keys remain TayPE
navigation.
It uses Pro Tools-style keypad chords where TayPE has clean equivalents,
including `Numpad 7` for metronome, `Ctrl+Option+Numpad +/-` for grid size,
`Option+-` for automation view, and `Option+K` for auto monitor.

Older `~/Documents/Taype/keybindings.json` files are imported once into the
profile folder and archived as `legacy-keybindings*.bak`.

## Default Shortcuts

### Transport

| Shortcut | Action |
|----------|--------|
| Space | Play / stop |
| P | Play / pause (blocked while recording) |
| Z | Stop (returns to start; while recording, Return goes back to the pass start and Punch / Do-Over park at the take end) |
| Return | Record-mode action |
| C | Toggle metronome click |
| ' | Tap tempo. TayPE sets BPM as soon as 4 taps are available, then keeps averaging the last 4 taps until 1.5 seconds without another tap ends the measurement |
| [ | Set the left loop brace to the tape head |
| ] | Set the right loop brace to the tape head |
| L | Set both loop braces to the selected clips and enable loop playback |
| Cmd+L | Toggle loop playback on or off |
| / | Add marker at the tape head |
| , | Go to previous marker or loop brace |
| . | Go to next marker or loop brace |
| Cmd+/ | Set 0 at Playhead for the selected Cut |
| Tab | Jump to the next transient on the selected clip, or the selected track when no clip is selected |
| S | Toggle timeline snap |
| Option+S | Switch snap between absolute and relative mode |

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

The **Transport** menu now exposes the same bound transport actions directly:
**Play / Stop**, **Pause**, **Stop**, **Record**, both loop-brace setters,
**Loop Selected**, **Set 0 at Playhead**, **Tab to Transient**,
**Tap Tempo**, **Metronome**, **Snap**, **Snap Mode**, and a
**Markers** submenu that also contains direct **Go to Marker** jumps split
into fixed **1-10**, **11-20**, and **21-30** folders. The **Edit** menu
carries **Select All** / **Deselect All** alongside the split variants inside
the **Split** submenu, while the **Tracks** menu carries track creation,
selected-track clip selection, reordering, duplication, and deletion. On macOS those menu ticks stay in sync
with toolbar clicks, keyboard shortcuts, and other live state changes instead
of only reflecting the last path that touched the setting.

### Editing

| Shortcut | Action |
|----------|--------|
| \ | Split selected clips that cross the tape head |
| Cmd+\ | Split selected clips at both current loop braces |
| Option+\ | Split all clips at the tape head |
| Cmd+Option+\ | Split all clips at both current loop braces |
| D | Duplicate selected clips back-to-back as a group |
| F | Add or remove start/end fades on selected clips at the **Default Fade Length** set in **Preferences > General**. Crossfade-bound boundaries are left alone; otherwise the missing fade(s) are added, or both are removed when both are present |
| B | Bounce selected clips to one new stem track |
| Cmd+D | Duplicate selected track without clips |
| Cmd+B | Bounce selected tracks to one new stem track and archive the sources |
| Option+D | Duplicate selected track with clips |
| Cmd+Shift+A | Select every clip on the currently selected tracks |
| Cmd+Backspace | Archive or unarchive the selected non-master track |
| Cmd+Delete | Delete selected non-master track |
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
| W | Toggle the focused width context: arranger strip in arranger view, mixer rack in mixer view or detached mixer window |
| Cmd+M | Toggle Tape Mode on the visible mixer; opens the inline mixer if hidden |
| Cmd+Shift+M | Pop the mixer in or out of a separate window |
| I | Toggle channel strip panel |
| Left / Right | In timeline view, move the tape head to the previous or next visible tick. Held/repeated presses keep stepping from the last tick anchor while playback is rolling, so rewind can move backwards against the transport. In the full mixer, inline or detached, scroll the rack left or right. In Tape Mode, inline or detached, also scroll the visible mixer rack left or right |
| Up / Down | In timeline view, scroll the track stack. In the full mixer, inline or detached, scroll the shared strip sections up or down. In Tape Mode, inline or detached, move the tape head to the previous or next visible tick |
| V | Focus view - show only tracks with clips at the tape head, or inside the active loop range |
| A | Toggle automation view |
| Shift+A | Cycle automation display: Volume -> Pan -> Width and enter automation view if needed |
| X | Toggle archive view |
| G | Spill - show selected bus and its routed tracks |
| E | E-Zoom - zoom to selected clip (press again to restore) |
| T | Add a new audio track |
| R | Toggle ruler between time and beats |
| Shift+R | Toggle between Auto grid and the last fixed note grid |
| Shift+, | Choose the next coarser fixed timeline snap grid |
| Shift+. | Choose the next finer fixed timeline snap grid |
| Cmd+K | Toggle high contrast theme |
| K | Open the virtual keyboard popup |
| Backtick (\`) | Open the Performance Monitor window |

The **View** menu also exposes the same focus, automation, deselect, mixer,
channel-strip, ruler, and zoom actions, with mixer, detached-window, width,
Tape Mode, and Tape Length controls grouped under **View > Mixer**. It also
groups automation and zoom controls into **Automation Display**,
**Horizontal Zoom**, and **Vertical Zoom** submenus.
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
| Option+drag | Clip | Copy clip to new position |
| Drag clip edge | Clip | Trim clip (non-destructive) |

## Customising Shortcuts

In **Preferences > Keybindings**, duplicate a built-in profile or select a custom
one, then click **Edit JSON**. Save in your editor and click **Reload**. The
format is straightforward:

```json
{
  "play_pause": "space",
  "pause": "p",
  "stop": "z",
  "record": "return",
  "toggle_metronome": "c",
  "tap_tempo": "'",
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
  "toggle_fade": "f",
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
  "toggle_tape_mode": "cmd+m",
  "detach_mixer": "cmd+shift+m",
  "toggle_focus": "v",
  "toggle_automation_view": "a",
  "toggle_archive_view": "x",
  "toggle_snap": "s",
  "toggle_snap_mode": "alt+s",
  "toggle_snap_grid_auto": "shift+r",
  "snap_grid_coarser": "shift+,",
  "snap_grid_finer": "shift+.",
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
- Numeric keypad: `numpad0` through `numpad9`, `numpadplus`, `numpadminus`,
  `numpadmultiply`, `numpaddivide`, `numpaddecimal`
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
