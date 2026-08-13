# Keyboard Shortcuts

TayPE ships editable shortcut profiles. Built-in profiles are read-only; custom profiles can override them from Preferences.

Standard macOS shortcuts such as undo, copy, paste, and Preferences are handled separately from the editable TayPE shortcut profile.

## Default Shortcuts

### Transport

| Shortcut | Action |
|---|---|
| Space | Play / stop |
| P | Play / pause (blocked while recording) |
| Z | Stop / escape pass |
| Return | Record |
| Home / Fn+Left | First clip boundary in the arranger, far-left mixer channel, or focused MIDI clip start |
| End / Fn+Right | Last clip boundary in the arranger, far-right mixer channel, or focused MIDI clip end |
| Page Up / Fn+Up | Top arranger track, page mixer panels upward, RTZ in Reels, or highest used MIDI note |
| Page Down / Fn+Down | Bottom arranger track, page mixer panels downward, last clip boundary in Reels, or lowest used MIDI note |
| Cmd+P | Print mix |
| Cmd+Option+P | Print loop |
| C | Toggle metronome |
| ' | Tap tempo |
| Cmd+/ | Set cut zero at playhead |

While the MIDI editor is visible and not minimised, Home, End, Page Up, and
Page Down stay with the piano roll in normal, maximised, and full-screen window
postures. Minimising or closing the editor returns them to the main window.

### Editing

| Action | Shortcut |
|---|---|
| Split selected clips at playhead | `\` |
| Split selected clips at loop braces | `Cmd+\` |
| Split all clips at playhead | `Option+\` |
| Split all clips at loop braces | `Cmd+Option+\` |
| Toggle fade | F |
| Duplicate selected clips | D |
| Select clips on selected tracks | Cmd+Shift+A |
| Join clips | J |
| Offline bounce selected clips to stem | B |
| Bounce selected clips to external WAV | Option+B |
| Rerender MIDI clips through the current instrument | H |
| Disable selected clips | Backspace |
| Delete selected clips | Delete |
| Cut / copy / paste clips | Cmd+X / Cmd+C / Cmd+V |

### Tracks

| Action | Shortcut |
|---|---|
| Add audio track | T |
| Bulk add tracks | Cmd+T |
| Duplicate selected track without clips | Cmd+D |
| Duplicate selected track with clips | Option+D |
| Rerender every MIDI clip on the selected tracks | Cmd+Shift+H |
| Offline bounce selected tracks to stem | Cmd+B |
| Archive selected track | Cmd+Backspace |
| Delete selected track | Cmd+Delete |
| Move selected track up / down | Cmd+Option+Up / Cmd+Option+Down |
| Toggle grouped track controls | Cmd+G |

### Loop, Markers, and Navigation

| Action | Shortcut |
|---|---|
| Set left loop brace | [ |
| Set right loop brace | ] |
| Toggle loop | Cmd+L |
| Set loop from selection | L |
| Add marker at playhead | / |
| Previous marker or loop brace | , |
| Next marker or loop brace | . |
| Go to markers 1-10 | 1-9, 0 |
| Go to markers 11-20 | Cmd+1-9, Cmd+0 |
| Go to markers 21-30 | Cmd+Shift+1-9, Cmd+Shift+0 |
| Next transient | Tab |
| Previous transient | Option+Tab |

### View

| Action | Shortcut |
|---|---|
| Toggle focus view | V |
| Toggle automation view | A |
| Cycle automation display | Shift+A |
| Toggle archive view | X |
| Toggle spill view | G |
| Toggle E-Zoom | E |
| Toggle snap | S |
| Toggle snap mode | Option+S |
| Snap grid finer / coarser | Shift+. / Shift+, |
| Toggle Auto grid | Shift+R |
| Toggle ruler time/beats | R |
| Toggle mixer | M |
| Toggle mixer width / focused width | W |
| Toggle Tape Mode | Cmd+M |
| Toggle LaForgé mastering meter | Option+M |
| Toggle channel strip | I |
| Open virtual keyboard | K |
| Detach mixer | Cmd+Shift+M |
| Toggle high contrast | Cmd+K |
| Increase UI scale | Cmd+Option+= |
| Decrease UI scale | Cmd+Option+- |

### Zoom and Scroll

| Action | Shortcut |
|---|---|
| Horizontal zoom in / out | = / - |
| Reset horizontal zoom | Option+- |
| Maximum horizontal zoom | Option+= |
| Vertical zoom in / out | Shift+= / Shift+- |
| Reset vertical zoom | Option+Shift+- |
| Maximum vertical zoom | Option+Shift+= |
| Mouse wheel | Vertical scroll or focused lane scroll |
| Cmd+wheel | Horizontal zoom |
| Option+wheel | Vertical zoom anchored to selected track |
| Right-drag horizontally | Timeline pan |
| Right-drag vertically | Timeline zoom |

### Utility Windows and Session Tools

| Action | Shortcut |
|---|---|
| Show Performance Monitor | Backtick |
| Kill live MIDI / all notes off | Section sign key |
| Toggle video reference window | Q |
| Toggle video reference audio | Shift+Q |
| Toggle video burn-in | Option+Q |
| Toggle Record Follows Select | ; |
| Toggle Auto Monitor | Shift+; |
| Select all in current context | Cmd+A |
| Open Preferences | Cmd+, |

## Customising Shortcuts

Open the shortcut/profile controls from Preferences. Built-in profiles refresh from the app bundle after updates. Custom profiles remain yours.

TayPE validates shortcut files and falls back to defaults if a profile is broken. Older shortcut layouts are migrated when TayPE can recognise them.

## Record Stop Modes and Record Modes

Right-click **Stop** to choose Record Stop Mode. **Return** commits and returns,
**Punch** commits and parks at the end, and **Do-Over** restarts after
discarding the just-recorded pass when you press Record again. **Z** always
stops safely.

Right-click **Record** to choose Record Mode. **Auto Punch** records linearly
and uses the braces as a punch window when Loop is enabled. **Comp** creates
comp history with or without Loop. **Dub** creates layered Don't Comp takes
with or without Loop and adds live lap feedback when Loop is enabled.
**Sooper-Looper** retains its loop-required armed-track workflow.

## Virtual Keyboard Mode

When the virtual keyboard popup is open, it consumes keyboard input so note keys do not accidentally trigger timeline shortcuts. Close it to return shortcuts to the main UI.

## Floating Windows

Floating windows such as the EQ Visualiser, Performance Monitor, Hardware Insert recall, video reference, MIDI Monitor, Melodyne, MIDI editor, and plugin editors keep enough shortcut pass-through for transport and common session actions while protecting text fields and plugin focus.
