# Navigation

## Scrolling

Use the wheel, trackpad, scrollbars, or focused arrow keys to move around the reel. The selected track remains the anchor for vertical zoom and visibility.

## Zooming

Use `=` and `-` for horizontal zoom, **Option+-** to reset, **Cmd+wheel** for mouse zoom, and **Option+wheel** for vertical zoom. Hold **Cmd+Option** while scrolling to zoom both axes together. Horizontal zoom centres on the tape head by default, while vertical zoom centres on the selected track. Enable **Preferences > General > Zoom at mouse position** to anchor Cmd+wheel, Option+wheel, Cmd+Option+wheel, and pinch zoom beneath the pointer instead; keyboard and right-drag zoom keep their existing anchors.

The MIDI editor honours the same preference for horizontal Cmd+wheel and pinch
zoom across its piano roll, keyboard rail, timeline header, and control lane.
The roll, header, and control lane preserve the time beneath the pointer after
horizontal scrolling; the keyboard rail uses the visible roll's left edge
because it has no timeline position of its own. Its Option+wheel pitch zoom
already follows the pointer, while right-drag and keyboard zoom keep their
existing anchors. Cmd/Ctrl+Option+wheel changes shared time zoom and pitch-row
height together across the piano roll, keyboard rail, pinned timeline header,
and control lane.

## E-Zoom

E-Zoom is the quick way to enlarge the working track area without changing the whole app scale. It is useful for clip edits and comping.

With the MIDI editor open, `E` fits that whole MIDI clip across the piano roll instead of zooming the arranger. Press `E` again to restore the MIDI editor's previous horizontal zoom and scroll position.

## Seeking

Click the ruler to seek. Option-click in the timeline can seek even over clips.
With absolute Snap enabled, the playhead always lands on the nearest grid line
currently drawn. Clicking a drawn line selects that line even when a clip edge
is very close; away from a line, a nearby clip edge or marker wins only when it
is closer than the grid. Fixed grids that back off visually at low zoom use the
drawn division for playhead placement rather than hidden subdivisions. Clip and
note drags retain their magnetic snap feel. During playback, repeated left/right
navigation steps from a stable ruler anchor so the playhead can move predictably.

## Stopping MIDI cleanly

Stopping or pausing releases notes owned by the MIDI editor preview and cancels notes still scheduled for External MIDI Out. It does not send All Notes Off to hosted instruments; neither does starting playback, so the first beat of host-synchronised instruments is preserved. If a live monitored note sticks while the transport is already stopped, use **Tools > Kill MIDI**.

## Markers

Use `/` to add or remove a marker at the playhead. Use `,` and `.` to move to previous and next markers or loop braces. Number keys jump to marker slots.

Click a marker to move the playhead to it. Dragging a marker moves only the
marker and leaves the playhead or rolling transport alone. Clicking or dragging
empty ruler space keeps the normal immediate playhead seek behaviour.

On the Main Cut, press **Shift+/** to create a **No Cut** range at the playhead, or convert a point marker already there. The shortcut uses the same range rules as the marker menu: the range ends at the next marker, or eight bars later when there is no following marker, and cannot overlap another range. You can also right-click a marker and use **Range** to turn it into a Cut range. Choose **No Cut** for an empty range, **Disable** to return to a normal marker, or an item labelled **Cut: _name_** to play that non-Main Cut from its own zero across the marker range. Assigning a Cut renames the marker to the Cut name, adding a number when needed to keep marker names distinct. Drag the range's right edge to resize it. Point markers can sit inside without changing the range; assigning a range to an interior point truncates the earlier range there. **Populate from Cut** copies the assigned Cut into the range and leaves the marker as No Cut. **Delete Time** and **Insert Time** use the explicit end for ranged markers and the next marker for normal markers.

Use **File > Print Marker Ranges** to export each explicit Cut or No Cut range on the selected Cut in order. Normal markers inside a range do not divide it and never start prints. Unnamed ranged markers use a generated marker label in the output filename.

Realtime prints never pause the audio engine for disk access. If storage cannot keep up, TayPE keeps the print but warns after completion that audio may be missing; use **Offline Render** to guarantee that every rendered block reaches the output file.

## Snap and Transients

Use `S` to toggle timeline snap. Use **Option+S** to switch between absolute and relative snap. **Shift+.** makes the fixed grid finer, **Shift+,** makes it coarser, and **Shift+R** toggles Auto grid.

Use **Tab** to move to the next transient on the selected clip or selected track. Use **Option+Tab** to move to the previous transient.
