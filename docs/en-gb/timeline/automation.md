# Automation

Automation records and edits mix and plug-in moves over time. TayPE automates
eligible mixer controls and parameters reported by loaded audio plug-ins.

## Automation View

Use `A` to toggle Automation View. The top selector provides quick Volume, Pan
and Width views across every visible track. Each track header has its own
selector when you need to show a different mixer or plug-in parameter on that
track. Its **Automated** section lists parameters that already contain
automation points.

Use the `+` beside a track's selector to keep another parameter visible in a
sub-lane. Each sub-lane has its own parameter selector and a `-` button. The
minus button hides the lane; it does not delete the automation. Adding the same
parameter again brings its existing points back.

To rearrange tracks while sub-lanes are open, begin the drag in the main track
header. Dropping over any of a track's sub-lanes places the dragged track after
that track; the number of visible sub-lanes does not change the drop position.

The lane arrangement belongs to the reel. It stays in place when you move
between Cuts and when you reopen the reel. The automation points themselves
still belong to each Cut, so the same visible lane can contain different moves
in different Cuts.

Automation lanes keep their normal value scale while you scroll vertically. A
lane that is partly outside the window is clipped at the edge, not compressed
into the visible remainder.

With Grouped Track Controls enabled, selecting a parameter on one
multi-selected track also shows the equivalent parameter on the other selected
tracks where it exists. Tracks without that mixer object, insert or matching
plug-in parameter keep their current view. This changes the displayed lanes
only; it does not copy or alter automation data. Adding, changing or removing a
sub-lane affects only that track.

Plug-in lanes follow the plug-in instance when you move it to another insert or
track. Removing or replacing the plug-in leaves its old lanes intact but
unavailable; they do not attach themselves to the new plug-in merely because
it uses the same slot. If TayPE cannot obtain a trustworthy parameter list, the
picker reports that discovery is unavailable instead of pretending the plug-in
has no parameters.

If a plug-in changes its own parameter layout, TayPE temporarily marks those
parameters unavailable and rediscovers them after playback stops. It never
applies an old parameter number to the plug-in's new layout. If that happens
during automation capture, TayPE discards the pass rather than joining data
from two different layouts.

Automation View changes what the timeline shows and what Record means. It does
not switch automation playback on or off. Existing automation plays during
normal playback and during ordinary audio recording.

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

Hardware control-surface faders, pan controls and mute buttons follow the same
capture rules as the on-screen mixer. Relative moves start from the value you
are hearing, and grouped controls are applied only when every selected track
can accept that automation target. TayPE writes the group at one transport
position before changing the live mixer, so a rejected track cannot leave a
partial group or an unrecorded audible change.

Plug-in capture uses bounded event queues. If TayPE cannot flush the complete
pass, or a queue overflows, it discards that pass and reports the failure
instead of keeping incomplete automation.

The transport record button shows an automation badge while Record means automation capture.

## Editing Breakpoints

Automation breakpoint editing happens in Automation View while transport is stopped.

- Click empty lane space to add and select a point.
- Click an existing point to select it without rewriting it.
- Double-click an existing point to delete it.
- Drag a point to move it.
- Shift-drag a point to move the touched point or current selection in time
  only. Values and lane assignments stay fixed.
- Option-drag a point to copy the touched point or current selection in time
  only. The copy pointer appears during the drag. Originals remain in place,
  and copied points preserve their values, relative timing and lane
  assignments even when the selection spans several lanes.
- Constrained moves and copies follow the automation snap setting. A copied
  point replaces an existing point at the same destination time, and the
  complete copy is one undo step.
- Marquee across lanes to select points by time range.
- Press Command+A to select every point on every header-selected track lane.
  If no tracks are selected, it selects every point on the track under the
  pointer without selecting the track. Outside Automation View, Command+A keeps
  its normal arranger Select All behaviour.
- Press Escape once to clear selected automation points while keeping the
  selected track lanes. With no automation points selected, Escape performs
  the normal arranger deselect.
- Delete or Backspace removes selected points.
- Option-click resets a point to the track's current static/default value.
- Option-double-click clears the displayed automation lane for that track.
- Hold Command over a lane to show the pencil, then Command-drag to draw one
  undoable automation stroke. The stroke replaces existing points across the
  time span it covers.

Boolean and other stepped controls always edit on their real available values;
they never stop between choices. A stepped point controls the flat segment
after it. Dragging one sideways stops at the next unselected point rather than
passing through it and reversing the order of the switches.

Automation View keeps its own snap mode. Normal clip view can stay snapped
while automation editing stays free, or the other way round. With automation
snap on, the pencil writes one point on every crossed interval of the selected
grid, even if you move quickly. With snap off, it follows your gesture freely
and then removes unnecessary points while keeping the shape editable. If you
draw back across the same time, the latest pass wins.

## Playback Values

Before the first automation point, TayPE uses the track's static mixer value. Between points, it interpolates. After the last point, it holds the last automation value. There is no hidden jump back to the static value unless you write that move.
