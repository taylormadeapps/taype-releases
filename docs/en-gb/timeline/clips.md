# Working with Clips

## Selecting

Click a clip to select it. The clip highlights and its track becomes selected too. **Cmd+click** adds or removes clips from the current selection, dragging in empty timeline space marquee-selects clips, and **Cmd+A** selects every clip in the current loop region when loop playback is active. Press **Escape** to deselect everything.

Double-click a clip to open **Clip Properties**. That's where you rename or
recolour the clip, inspect its source paths, reveal those files in Finder from
the little open icons, and, for MIDI-origin clips, use **Edit MIDI** to open
TayPE's MIDI Clip Editor or **Re-render from MIDI** to print a fresh render
through the track's current instrument. If the clip you double-click is part
of the current multi-selection, **Clip Properties** flips into a batch mode:
clip colour still edits the whole selection, but the per-clip name, source,
and MIDI actions are greyed out.
The reel-owned audio and MIDI rows are shown relative to the reel bundle so you
see paths like `media/imports-midi/...`, while the original source row stays
absolute.
MIDI-backed clips also show a small joined-quaver glyph in the clip-name pill
so you can spot them at a glance.

## MIDI Clip Editor

**Cmd+double-click** a MIDI-origin clip to open the floating MIDI Clip
Editor. A regular double-click still opens **Clip Properties**.

Click the grid to add a note. Drag a note to move it in time and pitch.
Right-click a note to delete it. The **Piano/Drum** toggle switches between a
pitched piano-roll view and fixed-length drum rows. The **High Top/Low Top**
toggle flips whether higher notes sit at the top or bottom of the grid.
Drag an empty part of the grid to marquee-select notes, and press
**Cmd/Ctrl+A** to select the lot. When more than one note is selected,
dragging a note moves the whole selection and dragging a note's right-edge
resize handle changes every selected note by the same duration amount.

As you add or move notes, TayPE auditions them through the track's current
instrument. While the editor stays open, TayPE mutes that clip's baked audio
and plays the current note layout through the instrument instead, so transport
playback gives you a live preview rather than the stale printed render.
**Commit** writes the updated MIDI sidecar and re-renders the clip.
**Cancel** closes the window without changing the clip. The editor only opens
while the transport is stopped. The editor also follows the reel timeline, so
it uses the same ruler mode, Cut zero, snap rails, and main playhead as the
arranger.

## Moving

Drag a clip horizontally to reposition it in time. Drag vertically to move it to a different track.

If that clip is part of the current multi-selection, TayPE moves the whole
selected set together. It keeps the spacing between clips and the vertical
track offsets intact.

There's a slight resistance threshold to prevent accidental cross-track moves.

Snap stays soft while you drag, so the clip only grabs a rail when you get near it. When you let go, TayPE still drops the clip onto the nearest visible grid point instead of leaving it hanging between snap zones.

## Copying

Hold **Option** while dragging a clip to copy it. If that clip is part of the
current multi-selection, TayPE copies the whole selected set as one group and
keeps the spacing and track offsets intact. The original and the copy keep
sharing the canonical source media. If the clip already has clip-local
generated audio from stretch or Melodyne, TayPE duplicates that generated
layer for the new clip so later edits can diverge cleanly.

## Loop Braces

The timeline ruler always shows loop braces. Drag the handles to set the loop
start and end, or drag the top ruler space between them to move the whole
range without changing its width. The untouched default span is 16 bars. The
brace handles sit in the top marker lane as little muted-orange **L** and **R** tabs by the
brace lines, so
the lower ruler zoom band stays clear. When loop playback is on, the brace
lines extend through the arranger; when loop playback is off, they stay up in
the ruler. Press **[** to set the left brace at the tape head, **]** to set
the right brace, and **L** to set both braces from the current clip selection
and turn loop playback on. Looping is playback-only; when you record with
braces active, TayPE uses the same range as a linear punch window instead of
cycling the take. If a marker lands on the left brace time, TayPE
flips the brace tab to the other side of the line so both stay readable. The
marker/brace lane only uses the little tab strip at the top of the ruler, and
the right-click scroll/zoom band starts down at the major ruler ticks. If you
drag one brace past the other, TayPE keeps the committed loop braces in order.
While you drag, the grabbed brace stays under the pointer and the far brace
waits where it was; when you let go TayPE carries the opposite brace with it
to preserve the current width, only shortening the range when the timeline
start at `0` gets in the way. Marker tabs and rods
still win pointer hits over the loop drag strip, so marker drag and marker
menus keep working inside the loop range.

## Splitting

| Shortcut | What it does |
|----------|---------------|
| **\\** | Split the selected clips at the tape head |
| **Cmd+\\** | Split the selected clips at both loop braces |
| **Option+\\** | Split every clip that crosses the tape head, across all tracks |
| **Cmd+Option+\\** | Split every clip that crosses either loop brace, across all tracks |

Plain **\\** splits every selected clip that spans the tape head into two.
Both halves keep pointing at the same source audio, and TayPE selects the new
right-hand pieces when the split is done.

The brace versions make both cuts in one go. TayPE only cuts clips that
actually cross a brace, skips clips that already line up with the brace, and
still wraps the whole move as one undo step.

## Trimming

Hover near the lower half of the left or right edge of a clip until the cursor changes to a resize arrow. Drag to trim.

This is non-destructive — you're just changing which portion of the audio file is visible.
If the clip you grabbed is part of the current selection, TayPE trims the whole
selected set with the same edge delta. Left trims move each clip's start and
clip-start offset together, right trims resize the whole set together, and if
any selected clip hits a trim limit the whole gesture stops there.

The upper edge zone is used for stretch. As you drag it, the waveform preview
stretches with the clip instead of looking like a plain trim.

When you let go, TayPE renders the clip's current audible slice into the new
stretched file, so playback restarts from the top of that stretched audio
rather than carrying an old trim offset across.
If the clip you grabbed is part of the current selection, TayPE applies that
same stretch-edge move to the whole selected set and each clip prints its own
stretched render.

## Gain and Fades

Drag the clip gain line up or down to change that clip's level. The waveform redraws with it, so lower gain pulls the waveform inward and unity still leaves a touch of headroom instead of pinning the clip edges. If the grabbed clip is part of the current selection, TayPE applies the same gain change to the whole selected set and keeps the relative gain offsets between clips intact.

Fade handles sit just inside the top corners of the clip, and their hit area
stays inset too, so the edge itself remains available for stretch and trim
gestures.

Fade-ins and fade-outs reshape the waveform too. As you edit a fade, the waveform tapers to match the level envelope instead of staying full-height under a tint, and the guide curve stays clean instead of flooding the quiet part of the clip. On a multi-selection, fade-length and fade-curve drags use the same shared delta across the selected set, so existing offsets stay intact.

## Crossfades

When two clips overlap, the overlap area shows a crossfade overlay. Overlap length sets crossfade duration.

Both clips stay audible through that overlap: the outgoing one fades down while the incoming one fades up, so the seam holds steady instead of dipping.

Drag vertically anywhere in the overlap region to shape the curve. Both sides move together to stay symmetric. Double-click the overlap to reset to a linear curve.

## Clipboard

- **Cmd+X** — cut the selected clip set
- **Cmd+C** — copy the selected clip set
- **Cmd+V** — paste the copied clip set at the tape head
- **D** — duplicate the selected clip set back-to-back

When more than one clip is in the clipboard or duplicate set, TayPE preserves
the spacing between them. Paste uses the selected track as the anchor for the
copied track layout; if no track is selected, each clip goes back to the track
it was copied from.

## Importing Files

Use **File -> Import Audio...** to place an audio file on the selected track at
the tape head.

Use **File -> Import MIDI to Audio...** to render a MIDI file through an
instrument track. TayPE opens a modal track chooser first, then asks for the
MIDI file.

Dropping a MIDI file straight onto the timeline also works. If the target
track has no instrument loaded, TayPE flashes a warning banner instead of
importing the clip.

Imported MIDI clips and recorded instrument takes keep a paired MIDI sidecar
inside the reel. If you edit that MIDI file outside TayPE, go back to **Clip
Properties** and use **Re-render from MIDI** to commit a fresh audio render.
If the clip already has stretch or Melodyne-style derived audio on top, TayPE
warns before that rerender clears those derived edits. While the new audio is
printing, the clip stays in place with a small spinner so you can see the
rerender is still in flight without hearing anything from the offline print.
