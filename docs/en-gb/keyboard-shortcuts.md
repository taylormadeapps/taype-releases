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
| Home / Fn+Left | Absolute timeline start (0.0) in the arranger, far-left mixer channel, or focused MIDI clip start (revealed in the piano roll) |
| End / Fn+Right | Last clip boundary in the arranger, far-right mixer channel, or focused MIDI clip end (revealed in the piano roll) |
| Page Up / Fn+Up | Top arranger track, page mixer panels upward, RTZ in Reels, or highest used MIDI note |
| Page Down / Fn+Down | Bottom arranger track, page mixer panels downward, last clip boundary in Reels, or lowest used MIDI note |
| Cmd+P | Print mix |
| Cmd+Option+P | Print loop |
| Option+P | Hide or restore all open plug-in windows from anywhere in TayPE |
| C | Toggle metronome |
| ' | Tap tempo |
| Cmd+/ | Set cut zero at playhead |

While the MIDI editor is active, Home, End, Page Up, and Page Down stay with
the piano roll in normal, maximised, and full-screen window postures. Moving
focus away, minimising, or closing the editor returns them to the main window.
Plain Left and Right move selected MIDI notes by one quantise interval; with no
note selection they move the shared playhead by the arranger's visible ruler
tick and do not scroll the piano roll.
Plain Up and Down move selected MIDI notes by one semitone. Cmd+Up and Cmd+Down
move them by one octave.
Plain L applies Legato to selected notes, or every note when none are selected.
Within each MIDI channel, every note or simultaneous chord onset extends to the
next chronological target onset regardless of pitch. The final selected onset
stays unchanged even when later unselected notes exist.
In the MIDI editor, L never triggers the arranger's Loop Selected action.
Escape clears selected MIDI notes first and keeps the editor open. Press Escape
again with no selected notes to close the editor.
Cmd+C and Cmd+X copy or cut the selected notes. Cmd+V places the earliest
copied note at the shared playhead while preserving the phrase's relative
timing, pitch, length, velocity, and MIDI channel.
The configured split shortcut cuts selected notes crossing the playhead. With
no note selection, it cuts only the note beneath the mouse: at the nearest
selected MIDI quantise or hardware-groove line when Snap is enabled, or at the
exact pointer position when Snap is off. If the mouse is not over a note,
nothing is cut. It does not split the arranger clip while the MIDI editor is
active.
Plain Q applies the current Quantise settings while the MIDI editor is active.
Ctrl+Q selects the next division and Ctrl+Shift+Q selects the previous one;
both directions wrap and restore that division's last-used Straight or groove
option. Option+Q selects the next Straight or groove option inside the current
division and Option+Shift+Q selects the previous one; both directions wrap
without leaving the division. These quantise keys stay in the MIDI editor
instead of controlling video there. On macOS, Cmd+Q starts TayPE's normal safe
quit process directly.

### Editing

| Action | Shortcut |
|---|---|
| Split selected clips at playhead; with no selection, split under the pointer at the nearest active grid rail when snap is enabled (or the exact pointer when snap is off) without selecting either result | `\` |
| Split selected clips at loop braces | `Cmd+\` |
| Split selected clips at visible grid | `Shift+\` |
| Split all clips at playhead | `Option+\` |
| Split all clips at loop braces | `Cmd+Option+\` |
| Toggle fade | F |
| Slip waveform inside fixed clip | Cmd+Option+drag clip body |
| Duplicate selected clips / automation points / MIDI notes | D |
| Select clips on selected tracks | Cmd+Shift+A |
| Join clips | J |
| Offline bounce selected clips to stem | B |
| Bounce selected clips to external WAV | Option+B |
| Rerender MIDI clips through the current instrument | H |
| Disable selected clips | Backspace |
| Delete selected clips | Delete |
| Cut / copy / paste selected clips or automation points | Cmd+X / Cmd+C / Cmd+V |

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
| Add or convert a No Cut range at playhead (Main Cut only) | Shift+/ |
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
| Toggle contextual E-Zoom | E |
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
| Vertical zoom in / out | Shift+= / Shift+- (vertical pitch-row zoom while the MIDI editor is active) |
| Reset vertical zoom | Option+Shift+- |
| Maximum vertical zoom | Option+Shift+= |
| Mouse wheel | Vertical scroll or focused lane scroll |
| Cmd+wheel | Horizontal zoom |
| Option+wheel | Vertical zoom anchored to the selected track, or the pointer when enabled in General preferences |
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
| Close the current reel | Cmd+W |

## Customising Shortcuts

Open the shortcut/profile controls from Preferences. Built-in profiles refresh from the app bundle after updates. Custom profiles remain yours.

TayPE validates shortcut files and falls back to defaults if a profile is broken. Older shortcut layouts are migrated when TayPE can recognise them.

## Record Stop Modes and Record Modes

Right-click **Stop** to choose Record Stop Mode. **Return** commits and returns,
**Punch** commits and parks at the end, and **Do-Over** restarts after
discarding the just-recorded pass when you press Record again. **Z** always
stops safely.

Right-click **Record** to choose Record Mode. **Auto Punch** records linearly
and uses the loop braces as a punch window when Loop is enabled. **Comp**
creates comp history with or without Loop. **Dub** creates layered Don't Comp
takes with or without Loop and adds live lap feedback when Loop is enabled.
**Sooper-Looper** keeps its existing loop-required armed-track workflow.

## Virtual Keyboard Mode

With the Virtual Keyboard and a plug-in window open, QWERTY note keys continue
to work while the plug-in window has focus. Releasing the computer key releases
the MIDI note; hiding or closing the plug-in window also clears held notes.

When the virtual keyboard popup is open, QWERTY note keys and other unmodified letter keys are reserved for playing, so they do not accidentally trigger timeline shortcuts. `P` is the exception and still controls transport Play/Pause. Close the popup to return all shortcuts to the main UI.

## Floating Windows

Floating windows such as the EQ Visualiser, Performance Monitor, Hardware Insert recall, video reference, MIDI Monitor, Melodyne, MIDI editor, and plugin editors keep enough shortcut pass-through for transport and common session actions while protecting text fields and plugin focus.

Option+P remains available while a TayPE dialog, picker, text field, or hosted
plug-in editor has focus. TayPE-owned auxiliary windows temporarily sit above
the plug-in stack while active; leaving them restores the previous plug-in
order without stealing focus. A Print Mix export window owns a stronger
visibility lease: plug-in windows stay hidden until that export window closes.

When a plug-in window is in front, the plug-in editor gets first refusal on
ordinary keys, including native VST3 views. Toolbar buttons on that window do
not keep keyboard focus after you click them. Any key the plug-in does not
consume, including repeats and the matching key-up, is offered to a visible,
non-minimised MIDI editor first. MIDI-local
Return, Quantise, note navigation and editing, clipboard, split, duplicate, and
pitch-row zoom therefore stay with the MIDI editor; unhandled keys continue to
the global shortcut path. Escape still closes the plug-in window first.

When a frontmost plug-in window closes, a visible, non-minimised MIDI editor
regains focus. If none is available, focus returns to TayPE's main window.
Closing a background plug-in does not pull focus away from another application.
