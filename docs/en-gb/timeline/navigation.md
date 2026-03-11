# Navigation

## Scrolling

- **Mouse wheel** — scroll up/down through tracks
- **Trackpad horizontal swipe** — scroll left/right through time
- **Right-click drag left/right** — pan through time

Thin overlay scrollbars appear when you scroll and fade away after a moment. You can also drag the scrollbar thumbs directly.

During playback, the timeline uses paged follow: when the tape head reaches the right edge, the view jumps forward one page.

## Zooming

**Horizontal zoom** (time):
- **Cmd + mouse wheel** — zoom in/out, centred on the tape head
- **Right-click drag up/down** — drag down to zoom in, up to zoom out

**Vertical zoom** (track height):
- **Option + mouse wheel** — zoom in/out, anchored to the selected track
- **=** / **-** — zoom in / out from keyboard
- **Shift+-** — reset to default track height
- **Shift+=** — jump straight to the maximum track height

When you use the right-click drag pan/zoom gesture, TayPE switches to a
magnifier cursor until you let go. Holding **Command** or **Option** over
the arranger also switches to the magnifier so wheel zoom is obvious before
you move.

TayPE opens with a taller default track height so the track controls and labels are visible straight away.

## E-Zoom

Press **E** to zoom the view to fit the selected clip. Press **E** again to snap back to your previous zoom and scroll position.

## Seeking

Click anywhere in the timeline (that isn't a clip) to move the tape head. Click in the ruler to seek regardless of what's below.
Right-click in the upper ruler area to open the zero-point menu for the selected Cut.
Right-click in the lower ruler tick band to use the existing pan/zoom drag.

**Option+click** anywhere on the timeline always seeks, even over a clip. Hold and drag after clicking to scrub.

When snap is on, ruler seek and seek-drag also lock onto nearby clip starts
and ends, making it easier to line the tape head up before using **Set 0 at Playhead**.

## Markers

Markers belong to the current Cut and stay fixed to absolute timeline time.
Changing tempo, time signature, or the Cut zero point does not move them.

- Right-click the top ruler area and choose **Add Marker at Playhead** to drop
  a marker at the current tape head.
- Each marker draws as a thin vertical line through the whole timeline, with a
  small label tab to the right of the line in the ruler.
- Drag a marker left or right to move it. When snap is on, marker drags snap
  the same way ruler seeking does.
- Double-click a marker tab to name it. If you leave the name blank, TayPE
  shows the marker's current index instead.
- Right-click a marker tab to delete it or change its colour.
- Long labels are truncated in the tab when needed. Hover the marker to see
  the full name in popup help.
- If two markers land on the same timestamp, TayPE keeps the existing marker
  and collapses the duplicate.

Use the transport `<` and `>` buttons, or the marker shortcuts listed in the
keyboard shortcuts page, to move between markers quickly.
