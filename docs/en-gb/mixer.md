# The Mixer

The mixer is the desk view: many channel strips side by side, with faders, meters, inserts, routing, buses, and selected-track focus visible at once.

![Mixer overview](../.gitbook/assets/mixer-overview.png)

## Width Modes

The mixer has two width modes:

* **Narrow desk mode** shows compact strips so more tracks fit on screen.
* **Full strip mode** gives each track the wider channel-strip layout.

Press **W** while the mixer is focused, or use the Mixer Width toolbar button. The timeline's docked strip has its own width mode, so changing mixer width does not clobber the arranger strip width.

When a track is selected, width changes keep that selected strip in view. TayPE should not jump to an arbitrary centre point just because the strip layout changed.

## Track Selection

Click a strip title or unused background in its PAN/FADER panel to select it. **Cmd-click** toggles tracks into the visible selection. **Shift-click** extends a visible range. The fader, knobs, meters, readouts, utility buttons, and panel resize or preset controls keep their own actions and do not change track selection. Grouped fader, pan, width, section power, and insert power edits apply to the visible selected strips while preserving relative offsets where that matters.

The first selected track stays the primary track for the docked strip and focused operations.

## Channel Order

Mixer strips follow the reel's track order. Ordinary tracks sit together. Bus and master strips open a stronger separator so routing landmarks stand out.

## Scrolling

Use the horizontal scroll gesture, arrow keys when the mixer is focused, or the visible rack controls to move through large sessions. The selected track should remain easy to find after width changes, scale changes, or switching between inline and detached mixer windows.

## Detached Mixer

Use **Cmd+Shift+M** to pop the mixer into a separate window. The detached mixer has its own focus for keyboard shortcuts. A focused detached mixer controls its own width with **W** while the arranger underneath keeps its own docked strip state.
