# The Timeline

The timeline is where you see your session laid out in time. Tracks run
top to bottom, time runs left to right. The tape head (a vertical line)
shows the current playback position.

## Layout

The left column shows **track headers** with controls. The main area shows
**clips** - rectangles filled with waveforms representing your audio.

The **ruler** along the top shows time. Press **T** to toggle between
minutes:seconds and bars|beats.

The **transport bar** has playback controls, BPM display, and position
readout. It stays along the bottom and remains visible; when the channel
strip panel is open, the strip stays full-height and the transport aligns
with the arranger width. The left-side view controls are ordered:
**Show Mixer**, **Focus**, **Spill**, **Archive**.

### Ruler Header Controls

The left side of the ruler has quick controls:

- **Channel Strip** - show/hide the channel strip side panel (auto-minimizes when no track is selected; if opened with no selection, it shows an empty "Select a track" state with the divider still visible)
- **+** - add a new track
- **Metronome** - toggle click on/off
- **Snap** - toggle grid snap
- **Ruler Mode** - switch between time and bars|beats

## Track Headers

Each track header shows:

- **Colour strip** - click to change the track colour from 24 swatches
- **Track name** - double-click to rename (only when stopped)
- **R** - record arm (red circle when armed)
- **MON** - software monitoring (hear input through the track channel strip)
- **Bus** (school-bus icon) - designate as bus track (bus tracks receive from routed tracks)
- **M** - mute (speaker icon, crossed out when muted)
- **S** - solo
- **Archive** - managed from the channel strip and MCP (not shown in timeline header)
- **I/O labels** - input source and output destination (click to change)
  (at very small track heights, labels are hidden until you zoom in)
- **Mini meter** - stereo peak meter in the header, updated at 4 Hz using
  the highest peak seen in each quarter-second window

## Working with Clips

### Selecting

Click a clip to select it. The clip highlights and its track becomes
selected too. Press **Escape** to deselect everything.

### Moving

Drag a clip horizontally to reposition it in time. Drag vertically to
move it to a different track (there's a slight resistance threshold to
prevent accidental cross-track moves).

### Copying

Hold **Cmd** while dragging a clip to copy it. The original stays put
and a duplicate appears at the drop position. Both clips share the same
source audio file.

### Splitting

Select a clip, position the tape head where you want the split, and press
**S**. The clip divides into two at that point. Both halves reference the
same audio file - nothing is destroyed.

### Trimming

Hover near the left or right edge of a clip (the cursor changes to a
resize arrow). Drag to trim. This is non-destructive - you're just
changing which portion of the audio file is visible.

### Crossfades

When two clips overlap, the overlap area shows a dedicated crossfade overlay.
Overlap length sets crossfade duration; there are no extra overlap-specific
fade-length handles.

To shape the crossfade, drag vertically anywhere in the overlap region.
Both sides move together to stay symmetric:
- left clip fade-out curve
- right clip fade-in curve

Double-click the overlap to reset both sides to a linear curve.

### Clipboard

- **Cmd+X** - cut (copy and delete)
- **Cmd+C** - copy
- **Cmd+V** - paste at the tape head position on the selected track
- **Cmd+D** - duplicate back-to-back (immediately after the original)

## Navigating

### Scrolling

- **Mouse wheel** - scroll up/down through tracks
- **Trackpad horizontal swipe** - scroll left/right through time
- **Right-click drag left/right** - pan through time

Thin overlay scrollbars appear when you scroll and fade away after a moment.
You can also drag the scrollbar thumbs directly.

### Zooming

**Horizontal zoom** (time):
- **Cmd + mouse wheel** - zoom in/out, centred on the tape head
- **Right-click drag up/down** - drag down to zoom in, up to zoom out

**Vertical zoom** (track height):
- **Option + mouse wheel** - zoom in/out, anchored to the selected track
- **Cmd+Option+=** / **Cmd+Option+-** - zoom in / out from keyboard
- **Cmd+Option+0** - reset to default track height

### E-Zoom

Press **E** to zoom the view to fit the selected clip. Press **E** again
to snap back to your previous zoom and scroll position. Handy for quickly
inspecting a specific clip.

## Seeking

Click anywhere in the timeline area (that isn't a clip) to move the tape
head to that time. Click in the ruler to seek regardless of what's below.

**Option+click** anywhere on the timeline always seeks, even over a clip.
This lets you position the head without having to find empty space.

Hold and drag after clicking to scrub - the head follows your cursor.

## View Modes

Four view filters help you focus on what matters. All are toggles:

| Shortcut | Mode | What It Does |
|----------|------|-------------|
| F | Focus | Show only tracks with clips at the tape head position |
| A | Archive View | Toggle between active tracks and archived tracks |
| G | Spill | Show the selected bus and all tracks routed to it |
| E | E-Zoom | Zoom to fit the selected clip |

Record-armed and selected tracks are always visible regardless of the
active view filter.

## Recording

While recording, a translucent red "ghost clip" grows on the armed track
showing where audio is being captured. The waveform updates roughly once
per second so you can see the signal coming in.

When you stop, the ghost clip is replaced by the real clip with its
final waveform.

Recorded clips stay anchored to the position where you punched in. Latency
compensation is applied internally so back-to-back takes keep the timing
you performed.

If you press **Stop** while recording, the head parks at the end of the
committed take so what you just captured is immediately visible.

## Input and Output Routing

**Input** - click the input label in the track header.
- Audio tracks (no instrument insert): audio inputs only (Default, None,
  mono channels, stereo pairs).
- Instrument tracks (instrument insert present): MIDI inputs only
  (All MIDI, Virtual Keyboard, hardware MIDI devices, None).

When a track switches into instrument mode, non-MIDI input routes are
automatically changed to **All MIDI**. When it switches back to audio mode,
MIDI routes are reset to default audio input.

**MON** - click the MON button to hear live input through the full track
channel strip and inserts. When transport is stopped, MON passes live
input only; timeline clips stay silent until you press play.

**Output** - click the output label to choose where the track sends its
audio. Options are "Master" (the main output) or any bus track you've
created.

If you turn off bus mode on a track, any tracks that were routed to that
bus are disconnected so nothing stays pointed at a non-bus destination.

If your audio interface changes and a track references a channel that no
longer exists, the input label appears greyed out. The setting is
preserved - plug the interface back in and it works again.
