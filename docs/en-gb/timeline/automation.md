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

Each lane also has a power button, drawn like the channel-strip section power
buttons. Switch a lane off to bypass its automation without deleting anything:
the control returns to its stored mix value, the curve stays visible but
dimmed, and its points remain editable. Lane power belongs to the reel — it
applies to every Cut and stays in place when you reopen the reel. Switch the
lane back on to hear its automation again, exactly as it was.

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

A powered-off lane is never captured. Moving its control during an automation
pass behaves like an ordinary mix edit: the stored value changes and no points
are written. In a grouped gesture, one powered-off lane makes the whole group
behave that way.

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

Each touched capture pass normally ends as its own Touch section. Its final
recorded point releases that parameter back to the stored static value. If
preserved automation begins within 100 ms, TayPE reconnects to it instead of
creating a tiny static interruption. Separate later recordings leave the gap
under static control, without an invented diagonal ramp.

## Editing Breakpoints

Automation breakpoint editing happens in Automation View while transport is stopped.

- Click empty lane space to add and select a point.
- Click an existing point to select it without rewriting it.
- Point markers stay hidden until you hover or select them, same as MIDI
  controller points. The automation curve stays visible.
- Stop points are red while point markers are visible; ordinary points retain
  the lane colour.
- Option-click empty lane space to add a stop point. Option-click an existing
  point to toggle it between an ordinary point and a stop point without
  changing its time or value.
- Double-click an existing point to delete it. Deleting a stop point removes
  that release boundary, so the surviving neighbouring points reconnect.
- Drag a point to move it.
- Hover over a point to see its value painted directly on the lane. The
  readout is always available, stays inside the lane and does not depend on
  Popup Help.
- While moving one or more points, the value follows the point you grabbed
  and updates continuously. TayPE controls show their familiar units;
  plug-in parameters show their normalised percentage.
- A move also shows a two-axis crosshair: a horizontal value guide across the
  full visible lane and a vertical time guide from the ruler to the bottom of
  the visible timeline. Both are visual guides only; they do not snap or
  change the point.
- Shift-drag a point to move the touched point or current selection in time
  only. Values and lane assignments stay fixed.
- Option-drag a point to copy the touched point or current selection in time
  only. The copy pointer appears during the drag. Originals remain in place,
  and copied points preserve their values, relative timing and lane
  assignments even when the selection spans several lanes.
- Constrained moves and copies follow the automation snap setting. Before the
  points land, TayPE clears existing automation from the destination range
  between the earliest and latest selected point on every participating lane.
  A single point therefore replaces only an existing point at the same time.
  The complete move or copy is one undo step.
- Press `D` to duplicate the current point selection after its source range.
  TayPE advances by the selection's first-to-last span plus one current grid
  interval; a single selected point advances by one interval. The copies
  preserve their values, timing and lane assignments, overwrite their
  destination range, become the active selection, and undo in one step.
- Press Command+C or Command+X to copy or cut the selected points, then
  Command+V to place the earliest copied point at the playhead. Existing
  automation is replaced between the first and last pasted points, and the
  pasted points become the active selection. Cut and paste each undo in one
  step.
- A selection copied from several lanes always returns to those same tracks
  and lanes. A selection copied from one lane returns there unless the pointer
  is over another visible lane for the same kind of control, such as Volume on
  another track. Sends, inserts and plug-in controls only match their
  corresponding destination, slot and parameter.
- When grouped track controls are on, editing automation on a selected track
  also edits the same available control on the other selected tracks. Added,
  drawn, duplicated, copied and pasted points use the same values. Moving
  existing points preserves the level difference between tracks while keeping
  their timing together. Tracks without that control are simply left alone.
  A copied selection that already spans several lanes keeps its original lane
  assignments.
- Marquee across lanes to select points by time range.
- Press Command+A to select every point on every header-selected track lane.
  If no tracks are selected, it selects every point on the track under the
  pointer without selecting the track. Outside Automation View, Command+A keeps
  its normal arranger Select All behaviour.
- Press Escape once to clear selected automation points while keeping the
  selected track lanes. With no automation points selected, Escape performs
  the normal arranger deselect.
- Delete or Backspace removes selected points.
- Option-double-click clears the displayed automation lane for that track.
- Hold Command over a lane to show the pencil, then Command-drag to draw one
  undoable automation stroke. The stroke replaces existing points across the
  time span it covers.

Boolean and other stepped controls always edit on their real available values;
they never stop between choices. A stepped point controls the flat segment
after it. Dragging one sideways may pass an unselected point; the points are
reordered by time when the gesture lands.

Automation View keeps its own snap mode. Normal clip view can stay snapped
while automation editing stays free, or the other way round. With automation
snap on, the pencil writes one point on every crossed interval of the selected
grid, even if you move quickly. With snap off, it follows your gesture freely
and then reduces the stroke to a best-fit shape that stays editable, without
quantising times to the grid. If you
draw back across the same time, the latest pass wins.

Recording over existing automation keeps everything before you first touch a
control and replaces only the span you write. The final written point normally
becomes a Touch stop and releases to static; if the next existing point begins
within 100 ms, TayPE reconnects to it instead. Recorded curves are thinned to a
best-fit shape rather than snapped to the grid.

## Automation and Clips

**Edit > Automation Follows Clips** is on by default and remembers its setting.
With it on, moving clips on the same track also moves every automation point
inside those clips. Option-drag and `D` copy those points with the clips.
Points exactly at a clip start are included; points exactly at its end are not.

The carried automation overwrites existing points across its destination time
range. All automation lanes on the track participate, not only the lane
currently visible, and one Undo restores both the clips and automation.

Moving clips to another track does not carry automation. Automation written
directly on a comp bus stays anchored to the timeline when child clips move.
Turn **Automation Follows Clips** off when you deliberately want all
automation to remain where it is.

## Playback Values

Before the first mixer or plug-in automation point, TayPE uses the track's
static mixer value. It interpolates inside each automated section. A red stop
point releases to static immediately afterwards, and a later point begins the
next section without a diagonal ramp across the gap. An ordinary unmarked final
point remains latched at its authored value. MIDI controller and pitch-bend
automation also hold their final authored value.

A powered-off lane always uses the track's stored mix value, no matter what
points it contains.
