# Working with Clips

Clips are the audio or MIDI regions on the timeline. On comp take tracks,
automatic comp edits leave Loop Record (Dub) takes layered, unsplit, and in
their current mute state. Use the comp strip, Option-click, or the ordinary
disable control when you want to mute a Dub take explicitly.

## Selecting

Click a clip to select it. Use multi-select gestures for grouped edits. Clip selection and track selection are related but not identical: a selected clip can live on a selected track, while track commands still target the current track set.

## Moving

Drag clips along the timeline or between compatible tracks. TayPE keeps clips aligned to the current snap and grid rules unless you deliberately bypass them. On comp take tracks, muted takes cannot initiate a move; they can still be selected and promoted from the bottom strip or with Option-click.

## Creating Blank MIDI Clips

Create a blank MIDI clip where you want to write or capture notes, then open it in the MIDI editor.

## Splitting

Split selected clips at the playhead with `\`. The split commands also live in the Edit menu, including split-at-loop-braces and split-all variants.

## Trimming

Drag clip edges to trim. The original media stays intact; the clip simply plays a different range. On comp take tracks, edge-resizing starts above the bottom comp strip, and muted takes cannot initiate an edge resize. Muted sibling takes do not block an active take's resize; right-trimming an enabled split take can extend that segment's source-out up to the real media end.

## Clip Properties

Open Clip Properties for exact clip details and destructive clip actions. **Reverse** renders a reversed copy through the model transaction system, so the reel owns the derived audio and undo/redo treats the change like any other clip edit.

### Media Paths

Clip Properties shows reel-owned media paths relative to the reel where possible. **Reel Store Audio** shows the stored audio inside the reel, and **Import Source** shows the original imported file when TayPE still knows it. Duplicate actual/store paths are collapsed, and unavailable rows display `n/a`.

## Gain, Fades, and Crossfades

Clip gain adjusts the clip before the channel strip. Fades can be toggled at the default fade length. Overlapping compatible clips can create crossfades where their edges meet. Dropping a clip wholly inside another clip cuts/splits the existing clip without creating a crossfade, even when one boundary lines up; a dropped clip that fully covers another replaces it.

## Clipboard

Copy and paste clips between compatible tracks. TayPE preserves timing and clip data where the destination supports it.

## Melodyne

Open Melodyne from a clip. It is clip-scoped ARA editing, not a normal insert slot.

Use Option-double-click on a single selected clip, the Melodyne glyph on a prepared clip, or Clip Properties where Melodyne is available. A clip being edited in Melodyne is protected from destructive clip edits until the editor closes. Committed Melodyne work stays attached to the clip and can be edited again or reverted.
