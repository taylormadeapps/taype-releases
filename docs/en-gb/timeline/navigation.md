# Navigation

## Scrolling

Use the wheel, trackpad, scrollbars, or focused arrow keys to move around the reel. The selected track remains the anchor for vertical zoom and visibility.

## Zooming

Use `=` and `-` for horizontal zoom, **Option+-** to reset, **Cmd+wheel** for mouse zoom, and **Option+wheel** for vertical zoom. Horizontal zoom centres on the tape head by default, while vertical zoom centres on the selected track. Enable **Preferences > General > Zoom at mouse position** to anchor Cmd+wheel, Option+wheel, and pinch zoom beneath the pointer instead; keyboard and right-drag zoom keep their existing anchors.

## E-Zoom

E-Zoom is the quick way to enlarge the working track area without changing the whole app scale. It is useful for clip edits and comping.

With the MIDI editor open, `E` fits that whole MIDI clip across the piano roll instead of zooming the arranger. Press `E` again to restore the MIDI editor's previous horizontal zoom and scroll position.

## Seeking

Click the ruler to seek. Option-click in the timeline can seek even over clips. During playback, repeated left/right navigation steps from a stable ruler anchor so the playhead can move predictably.

## Stopping MIDI cleanly

Stopping or pausing releases transport notes once playback has stopped and cancels notes that are still scheduled for External MIDI Out. Starting playback does not send All Notes Off, so the first beat of host-synchronised instruments is preserved. If a live monitored note sticks while the transport is already stopped, use **Tools > Kill MIDI**.

## Markers

Use `/` to add or remove a marker at the playhead. Use `,` and `.` to move to previous and next markers or loop braces. Number keys jump to marker slots.

On the Main Cut, right-click a marker and use **Assign Cut** to turn it into a Cut range. Choose **No Cut** for an empty range, **Disable** to return to a normal marker, or a non-Main Cut to play that Cut from its own zero across the marker range. Assigning a Cut renames the marker to the Cut name, adding a number when needed to keep marker names distinct. Drag the range's right edge to resize it. Point markers can sit inside without changing the range; assigning a range to an interior point truncates the earlier range there, and ranged markers cannot overlap. **Populate from Cut** copies the assigned Cut into the range and leaves the marker as No Cut. **Delete Time** and **Insert Time** use the explicit end for ranged markers and the next marker for normal markers.

Use **File > Print Marker Ranges** to export each explicit Cut or No Cut range on the selected Cut in order. Normal markers inside a range do not divide it and never start prints. Unnamed ranged markers use a generated marker label in the output filename.

Realtime prints never pause the audio engine for disk access. If storage cannot keep up, TayPE keeps the print but warns after completion that audio may be missing; use **Offline Render** to guarantee that every rendered block reaches the output file.

## Snap and Transients

Use `S` to toggle timeline snap. Use **Option+S** to switch between absolute and relative snap. **Shift+.** makes the fixed grid finer, **Shift+,** makes it coarser, and **Shift+R** toggles Auto grid.

Use **Tab** to move to the next transient on the selected clip or selected track. Use **Option+Tab** to move to the previous transient.
