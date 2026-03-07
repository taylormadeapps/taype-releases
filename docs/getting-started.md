# Getting Started

TayPE is built around a simple loop: record, listen, commit. No endless
menus, no buried features. Here's how the core workflow fits together.

## The Two Views

TayPE has two main views. Press **M** to toggle between them.

**Timeline** - where you see your tracks, clips, and the tape head moving
across time. This is where you record, arrange, and edit.

**Mixer** - where you shape the sound. Faders, EQ, compression, plugin
inserts. One channel strip per track, laid out left to right.

## Recording

1. Select a track by clicking its header in the timeline.
2. Set the track's input by clicking the input label (e.g. "1-2" for a
   stereo pair from your audio interface).
3. Arm the track for recording by clicking the **R** button, or pressing
   the R button in the track header.
4. Press **Return** to start recording. Press **Return** again to stop.

While recording, you'll see a red ghost clip growing on the track showing
where audio is being captured. When you stop, the final clip appears with
its waveform.

## Playback

- **P** - pause
- **Space** - play / stop
- **Z** - stop and return to the start

Click anywhere in the timeline (or the ruler at the top) to move the tape
head to that position. Hold and drag to scrub.

## Audio Sample Rate and Resampling

Open **Preferences** (**Cmd+,**) and go to the **Audio** tab.

- TayPE runs internally at **48 kHz**.
- The Audio tab keeps the hardware selector rows at the top through **Audio
  buffer size**. The device status, resampling, NAM, and **Apply Audio
  Changes** controls sit underneath.
- Use **Apply Audio Changes** if you want an explicit commit after editing
  audio settings.
- If **Resampling** is **off**, the Sample rate field is read-only and shows
  your interface's current rate.
- With Resampling off, TayPE will try to switch your interface to **48 kHz**
  automatically.
- If your interface is not at 48 kHz while Resampling is off, TayPE flags this
  in red and tells you to engage Resampling.
- If **Resampling** is **on**, you can change the interface sample rate in the
  Audio settings while TayPE continues processing internally at 48 kHz.
- **NAM AMX Acceleration** enables TayPE's Accelerate-backed LSTM path on
  Apple Silicon, including mono/stereo LSTM instances and larger shared
  batches.
- **True Summing** now lives on the master strip's **NAM Summing** panel.
  It only becomes active when **NAM AMX Acceleration** is on: enabled means
  tracks feeding the master pass through NAM before the sum; disabled means
  audio sums first and then runs through the stereo NAM bus.

## Editing

Editing only happens when the transport is stopped. This is by design -
TayPE keeps playback clean and separate from structural changes.

- **Click a clip** to select it
- **Drag a clip** to move it (horizontally for time, vertically to change
  tracks)
- **Cmd+drag** a clip to copy it to a new position
- **S** - split the selected clip at the tape head
- **Cmd+D** - duplicate a clip back-to-back
- **Cmd+X / Cmd+C / Cmd+V** - cut, copy, paste

Drag the edges of a clip to trim it. This is non-destructive - your
original audio is never modified.

## Undo and Redo

- **Cmd+Z** - undo
- **Cmd+Shift+Z** - redo

Every action is undoable. Fader moves, clip edits, track changes - all of it.

## Licensing

Use the **TayPE** application menu to open licensing:

- **License Now** (when unregistered)
- **License** (when registered)

## About TayPE

Use **TayPE > About TayPE** to view the exact app version/build and the
shipped third-party library versions and licences (JUCE, Signalsmith Stretch,
and NeuralAmpModelerCore).

## Popup Help

Use **Help -> Popup Help** to turn on hover help across the transport,
timeline, mixer, and channel strip. After you rest the pointer on a control
for about **0.7 seconds**, TayPE explains what that control does.

## RTFM and Docs Search

Use **Help -> Read the Fine Manual** to open the TayPE docs in your browser.

On macOS, use the search field at the top of the **Help** menu to search the
docs. Pressing Return there opens that doc search in your browser.

On non-macOS builds, **Help -> Search TayPE Docs...** remains available as the
explicit docs-search command.

## Track States

TayPE has three ways to think about tracks:

**Current** - the default. These are your active, living tracks. What you
hear during playback.

**Focus** - press **F** to filter the timeline down to only the tracks
that have audio at the current tape head position. Focus recomputes when
you press the button - it doesn't jitter around while you work. Record-armed
and selected tracks are always visible.

**Archive** - press **A** to toggle archive view. Archived tracks are
completely silent - no playback, no processing, no CPU. Archive is not
"mute" or "hide" - it's putting a track away in the cupboard. You can
pull it back out when you need it.

## Stems and Buses

Tracks can be designated as buses using the **B** button in the track
header. A bus track sums audio from all tracks routed to it, letting you
create submixes (drums bus, vocal bus, etc.).

Route a track to a bus by clicking its output label and selecting the bus
from the list.

Press **G** (Spill) to see only the selected bus and all tracks routed to
it - useful for focusing on a submix.

## What Next

- Learn the [Timeline](timeline.md) in detail
- Explore the [Mixer](mixer.md) and [Channel Strip](channel-strip.md)
- See all [Keyboard Shortcuts](keyboard-shortcuts.md)
