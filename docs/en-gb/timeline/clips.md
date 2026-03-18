# Working with Clips

## Selecting

Click a clip to select it. The clip highlights and its track becomes selected too. **Cmd+click** adds or removes clips from the current selection, dragging in empty timeline space marquee-selects clips, and **Cmd+A** selects every clip in the current loop region when loop playback is active. Press **Escape** to deselect everything.

Double-click a clip to open **Clip Properties**. That's where you rename or
recolour the clip, inspect its source paths, reveal those files in Finder from
the little open icons, and, for MIDI-origin clips, use **Edit MIDI** to open
TayPE's MIDI Clip Editor or **Re-render from MIDI** to print a fresh render
through the track's current instrument.
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

There's a slight resistance threshold to prevent accidental cross-track moves.

Snap stays soft while you drag, so the clip only grabs a rail when you get near it. When you let go, TayPE still drops the clip onto the nearest visible grid point instead of leaving it hanging between snap zones.

## Copying

Hold **Option** while dragging a clip to copy it. If more than one clip is selected, TayPE copy-drags the whole selection as a group and preserves the relative spacing. Both the originals and the copies keep pointing at the same source media.

## Loop Braces

The timeline ruler always shows loop braces. Drag the handles to set the loop
start and end, or drag the top ruler space between them to move the whole
range without changing its width. The untouched default span is 16 bars. The
brace handles sit in the top marker lane as little **L** and **R** tabs by the
brace lines, so
the lower ruler zoom band stays clear. When loop playback is on, the brace
lines extend through the arranger; when loop playback is off, they stay up in
the ruler. Press **[** to set the left brace at the tape head, **]** to set
the right brace, and **L** to set both braces from the current clip selection
and turn loop playback on. If a marker lands on the left brace time, TayPE
flips the brace tab to the other side of the line so both stay readable.

## Splitting

Select a clip, position the tape head where you want the split, and press **\\**. The clip divides into two at that point. Both halves reference the same audio file — nothing is destroyed.

## Trimming

Hover near the lower half of the left or right edge of a clip until the cursor changes to a resize arrow. Drag to trim.

This is non-destructive — you're just changing which portion of the audio file is visible.

The upper edge zone is used for stretch. As you drag it, the waveform preview
stretches with the clip instead of looking like a plain trim.

When you let go, TayPE renders the clip's current audible slice into the new
stretched file, so playback restarts from the top of that stretched audio
rather than carrying an old trim offset across.

## Gain and Fades

Drag the clip gain line up or down to change that clip's level. The waveform redraws with it, so lower gain pulls the waveform inward and unity fills the clip body.

Fade handles sit just inside the top corners of the clip, and their hit area
stays inset too, so the edge itself remains available for stretch and trim
gestures.

Fade-ins and fade-outs reshape the waveform too. As you edit a fade, the waveform tapers to match the level envelope instead of staying full-height under a tint, and the guide curve stays clean instead of flooding the quiet part of the clip.

## Crossfades

When two clips overlap, the overlap area shows a crossfade overlay. Overlap length sets crossfade duration.

Both clips stay audible through that overlap: the outgoing one fades down while the incoming one fades up, so the seam holds steady instead of dipping.

Drag vertically anywhere in the overlap region to shape the curve. Both sides move together to stay symmetric. Double-click the overlap to reset to a linear curve.

## Clipboard

- **Cmd+X** — cut (copy and delete)
- **Cmd+C** — copy
- **Cmd+V** — paste at the tape head position on the selected track
- **Cmd+D** — duplicate back-to-back (immediately after the original)

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
