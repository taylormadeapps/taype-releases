# Automation

Automation records and edits mix and plug-in moves over time. TayPE automates
eligible mixer controls and parameters reported by loaded audio plug-ins.

## Automation View

Use `A` to toggle Automation View. The top selector provides quick Volume, Pan
and Width views across every visible track. Each track header has its own
selector when you need to show a different mixer or plug-in parameter on that
track. Its **Automated** section lists parameters that already contain
automation points.

With Grouped Track Controls enabled, selecting a parameter on one
multi-selected track also shows the equivalent parameter on the other selected
tracks where it exists. Tracks without that mixer object, insert or matching
plug-in parameter keep their current view. This changes the displayed lanes
only; it does not copy or alter automation data.

Automation View changes what the timeline shows and what Record means. It does not switch automation playback on or off. Existing automation plays during normal playback and during ordinary audio recording.

Mixer and channel-strip controls follow their automated values during playback
and when you move the stopped playhead, so the control display agrees with the
sound and the curve.

## Capture

With Automation View off, Record starts an audio take. With Automation View on, Record starts automation capture.

During an automation capture pass, TayPE writes only eligible controls you
actually touch. This includes live-safe mixer controls and automatable
parameters reported by loaded audio plug-ins. Monitor, routing, track
structure, plug-in rack changes and controls that rebuild the audio graph are
not automation targets. Untouched parameters keep their existing automation or
static value.

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
