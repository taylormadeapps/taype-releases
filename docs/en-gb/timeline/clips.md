# Working with Clips

Clips are the audio or MIDI regions on the timeline.

## Selecting

Click a clip to select it. Use multi-select gestures for grouped edits. Clip selection and track selection are related but not identical: a selected clip can live on a selected track, while track commands still target the current track set.

## Moving

Drag clips along the timeline or between compatible tracks. TayPE keeps clips aligned to the current snap and grid rules unless you deliberately bypass them.

## Creating Blank MIDI Clips

Create a blank MIDI clip where you want to write or capture notes, then open it in the MIDI editor.

## Splitting

Split selected clips at the playhead with `\`. The split commands also live in the Edit menu, including split-at-loop-braces and split-all variants.

## Trimming

Drag clip edges to trim. The original media stays intact; the clip simply plays a different range.

## Gain, Fades, and Crossfades

Clip gain adjusts the clip before the channel strip. Fades can be toggled at the default fade length. Overlapping compatible clips can create crossfades where their edges meet.

## Clipboard

Copy and paste clips between compatible tracks. TayPE preserves timing and clip data where the destination supports it.

## Melodyne

Open Melodyne from a clip. It is clip-scoped ARA editing, not a normal insert slot.

Use Option-double-click on a single selected clip, the Melodyne glyph on a prepared clip, or Clip Properties where Melodyne is available. A clip being edited in Melodyne is protected from destructive clip edits until the editor closes. Committed Melodyne work stays attached to the clip and can be edited again or reverted.
