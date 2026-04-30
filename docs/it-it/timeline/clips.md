# Working con Clip

## Selecting

Fai clic a clip to select it. The clip highlights and its track becomes selected too. Press **Escape** to deselect everything.

## Moving

Trascina a clip horizontally to reposition it in time. Trascina vertically to move it to a different track.

There's a slight resistance threshold to prevent accidental cross-track moves.

## Copying

Hold **Cmd** while dragging a clip to copy it. The original stays put and a duplicate appears at the drop position. Both clips share the same source audio file.

## Splitting

Seleziona a clip, position the tape head where you want the split, and press **S**. The clip divides in two at che point. Both halves reference the same audio file — nothing is destroyed.

## Trimming

Hover near the left or right edge of a clip until the cursor changes to a resize arrow. Trascina to trim.

questo is non-destructive — you're just changing which portion of the audio file is visible.

## Guadagno and Fades

Trascina the clip gain line up or down to change che clip's level. The line, centre handle, and gain readout appear when the clip is selected or hovered. The waveform redraws with gain all the time, so lower gain pulls the waveform inward and unity still leaves a little headroom instead of pinning the clip edges.

Fade-ins and fade-outs reshape the waveform too. Fade handles and guide curves appear when the clip is selected or hovered, while the waveform, clip name, and clip glyphs stay visible. As you edit a fade, the waveform tapers to match the level envelope instead of staying full-height under a tint.

## Crossfades

When two clips overlap, the overlap area shows a crossfade overlay. Overlap length sets crossfade duration.

Both clips stay audible through che overlap: the outgoing one fades down while the incoming one fades up, so the seam holds steady instead of dipping.

Trascina vertically anywhere in the overlap region to shape the curve. Both sides move together to stay symmetric. Doppio clic the overlap to reset to a linear curve.

## Clipboard

- **Cmd+X** — cut (copy and delete)
- **Cmd+C** — copy
- **Cmd+V** — paste at the tape head position on the selected track
- **Cmd+D** — duplicate back-to-back (immediately after the original)
