# Automation

Automation records and edits mix moves over time. TayPE currently exposes volume, pan, and width automation.

## Automation View

Use `A` to toggle Automation View. Use `Shift+A` to cycle the displayed parameter: volume, pan, then width. The timeline shows one displayed parameter at a time for every visible track.

Automation View changes what the timeline shows and what Record means. It does not switch automation playback on or off. Existing automation plays during normal playback and during ordinary audio recording.

## Capture

With Automation View off, Record starts an audio take. With Automation View on, Record starts automation capture.

During an automation capture pass, TayPE writes only the controls you actually touch. Volume, pan, and width moves can be captured. Untouched parameters keep their existing automation or static value.

The transport record button shows an automation badge while Record means automation capture.

## Editing Breakpoints

Automation breakpoint editing happens in Automation View while transport is stopped.

- Double-click a lane to add a point.
- Double-click an existing point to delete it.
- Drag a point to move it.
- Marquee across lanes to select points by time range.
- Delete or Backspace removes selected points.
- Option-click resets a point to the track's current static/default value.
- Option-double-click clears the displayed automation lane for that track.

Automation View keeps its own snap mode. Normal clip view can stay snapped while automation editing stays free, or the other way round.

## Playback Values

Before the first automation point, TayPE uses the track's static mixer value. Between points, it interpolates. After the last point, it holds the last automation value. There is no hidden jump back to the static value unless you write that move.
