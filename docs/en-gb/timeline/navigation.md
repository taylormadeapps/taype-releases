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
- **=** / **-** — zoom in / out from keyboard around the tape head
- **Option+-** — reset to the default 16-bar frame level
- **Option+=** — jump straight to the maximum horizontal zoom

At deep zoom levels, TayPE caps horizontal zoom at practical sample-level
detail and clips offscreen waveform drawing, so very close inspection stays
responsive.

Once you have manually changed horizontal zoom, TayPE remembers that zoom
level for the next launch. Scroll position stays transient, so a relaunch
comes back at the current Cut zero point instead of trying to restore the old
pan offset.

**Vertical zoom** (track height):
- **Option + mouse wheel** — zoom in/out, anchored to the selected track
- **Shift+=** / **Shift+-** — zoom in / out from keyboard
- **Option+Shift+-** — reset to default track height
- **Option+Shift+=** — jump straight to the maximum track height

When you use the right-click drag pan/zoom gesture, TayPE switches to a
magnifier cursor until you let go. Holding **Command** or **Option** over
the arranger also switches to the magnifier so wheel zoom is obvious before
you move.

TayPE opens with a taller default track height so the track controls and labels are visible straight away.

## E-Zoom

Press **E** to zoom the view to fit the selected clip. Press **E** again to snap back to
your previous zoom and scroll position. If you adjust zoom or scroll while E-Zoom is
active, **E** still returns to the saved view.

## Seeking

Dragging in empty timeline space marquee-selects clips. Click in the ruler to seek regardless of what's below.
Right-click in the upper ruler area to open the zero-point menu for the selected Cut.
Right-click in the lower ruler tick band to use the existing pan/zoom drag.

**Option+click** in empty timeline space still seeks. On a clip body, **Option+click**
toggles clip disable instead. Hold and drag after a seek click to scrub.

When snap is on, ruler seek and seek-drag also lock onto nearby clip starts
and ends, making it easier to line the tape head up before using **Set 0 at Playhead**.

## Markers

Markers belong to the current Cut and stay fixed to absolute timeline time.
Changing tempo, time signature, or the Cut zero point does not move them.

- Right-click the top ruler area and choose **Add Marker at Playhead** to drop
  a marker at the current tape head. If the tape head is already exactly on a
  marker, the same command removes that marker; removal is blocked during
  recording.
- Double-click an empty spot in the upper ruler lane to drop a marker at the
  clicked time. Marker creation stays live during playback and recording.
- Each marker draws as a thin vertical line through the whole timeline, with a
  small label tab to the right of the line in the ruler.
- Drag a marker left or right to move it. When snap is on, marker drags snap
  the same way ruler seeking does, and that drag stays live during playback.
- Double-click a marker tab to name it. If you leave the name blank, TayPE
  shows the marker's current index instead. Rename is allowed during playback,
  but not during recording.
- Right-click a marker tab to delete it or change its colour. Those marker
  edits are also allowed during playback, but not during recording.
- Long labels are truncated in the tab when needed. Hover the marker to see
  the full name in popup help.
- If two markers land on the same timestamp, TayPE keeps the existing marker
  and collapses the duplicate.

Use the transport `<` and `>` buttons, or the marker shortcuts listed in the
keyboard shortcuts page, to move between markers quickly. When the loop has
been explicitly set or enabled, those previous/next jumps also stop at the
loop brace points. Marker navigation is blocked during recording so the record
head cannot jump mid-take. If a jump lands outside the current view, TayPE
brings the playhead back on screen instead of leaving it off to the side.

TayPE treats the song end as the furthest of the last clip plus a short tail,
the latest marker, or an explicit right loop brace. Playback and Print Mix use
that same horizon instead of stopping at the first clip edge they find.
