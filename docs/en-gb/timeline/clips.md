# Working with Clips

## Selecting

Click a clip to select it. The clip highlights and its track becomes selected too. Press **Escape** to deselect everything.

## Moving

Drag a clip horizontally to reposition it in time. Drag vertically to move it to a different track.

There's a slight resistance threshold to prevent accidental cross-track moves.

Snap stays soft while you drag, so the clip only grabs a rail when you get near it. When you let go, TayPE still drops the clip onto the nearest visible grid point instead of leaving it hanging between snap zones.

## Copying

Hold **Cmd** while dragging a clip to copy it. The original stays put and a duplicate appears at the drop position. Both clips share the same source audio file.

## Splitting

Select a clip, position the tape head where you want the split, and press **S**. The clip divides into two at that point. Both halves reference the same audio file — nothing is destroyed.

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
