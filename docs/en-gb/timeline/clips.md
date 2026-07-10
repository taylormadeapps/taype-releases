# Working with Clips

Clips are the audio or MIDI regions on the timeline.

## Selecting

Click a clip to select it. Use multi-select gestures for grouped edits. Clip selection and track selection are related but not identical: a selected clip can live on a selected track, while track commands still target the current track set.

Cmd-click toggles clips into or out of the clip selection on mouse-up. Cmd-drag starts a timeline range split instead: drag across one or more tracks, release, and TayPE cuts clips that cross the range boundaries while selecting the pieces inside the dragged range. When Cmd-drag starts in empty space, stays within one track, and the whole range is empty, it creates a silent clip for that exact snapped range. VSTi tracks create a MIDI-backed silent clip; other tracks create a plain silent-audio clip. Occupied ranges and drags across multiple tracks keep the range-split behaviour. When snap is enabled, the range edges magnetise to nearby clip edges and markers before falling back to the current grid; the live preview sticks to those snapped edges once they form a span, and falls back to raw drag feedback only while both edges are on the same snap point.

Cmd+Option-drag on a clip body slips the waveform inside the fixed clip. Drag right to move the waveform right; drag left to move it left. If you slip beyond the source edges, TayPE pads the clip with silence instead of moving or resizing the clip.

On comp take tracks, Cmd-drag uses the horizontal range to split every take lane in the comp bus. The vertical lanes you drag across are promoted for that time range, and sibling take lanes are muted. The lighter strip along the bottom of a comp take clip is the same range gesture without holding Cmd; clicking the strip mutes or promotes the clicked take range. Muting leaves sibling states untouched; promoting a muted take mutes siblings in that range. Option-click does the same from the clip body; Shift+Option-click keeps the plain disable toggle for that take.

## Moving

Drag clips along the timeline or between compatible tracks. TayPE keeps clips aligned to the current snap and grid rules unless you deliberately bypass them. On comp take tracks, muted takes cannot initiate a move; they can still be selected and promoted from the bottom strip or with Option-click.

## Creating Blank Clips

Cmd-drag across empty space on one track to create a silent clip for the dragged duration. On a VSTi track the clip includes an empty MIDI sidecar, ready for the MIDI editor. On other tracks it is a plain silent-audio clip. Double-clicking empty space on a VSTi track still creates a one-bar MIDI clip, or fills the empty gap around the click when the loop is enabled.

## Splitting

Split selected clips at the playhead with `\`. The split commands also live in the Edit menu, including split-at-loop-braces and split-all variants.

## Trimming

Drag clip edges to trim. The original media stays intact; the clip simply plays a different range. On comp take tracks, edge-resizing starts above the bottom comp strip, and muted takes cannot initiate an edge resize. Muted sibling takes do not block an active take's resize; right-trimming an enabled split take can extend that segment's source-out up to the real media end. Resizing an enabled clip into a sibling take cuts the sibling at the new boundary and mutes only the covered section.

## Slipping

Hold Cmd+Option and drag the clip body to move the audio inside the clip without changing the clip's timeline position or length. Fade, gain, trim, and stretch handles keep priority when you grab their hit zones. Slip editing is blocked while recording or while the clip is actively open for Melodyne editing.

## Clip Properties

Open Clip Properties for exact clip details and destructive clip actions. **Reverse** renders a reversed copy through the model transaction system, so the reel owns the derived audio and undo/redo treats the change like any other clip edit.

### Media Paths

Clip Properties shows reel-owned media paths relative to the reel where possible. **Reel Store Audio** shows the stored audio inside the reel, and **Import Source** shows the original imported file when TayPE still knows it. Duplicate actual/store paths are collapsed, and unavailable rows display `n/a`.

## Gain, Fades, and Crossfades

Clip gain adjusts the clip before the channel strip. Fades can be toggled at the default fade length, which starts at 2 ms and can be changed in **Preferences > General**. Overlapping compatible clips can create crossfades where their edges meet. Comp take tracks do not auto-crossfade when edits overlap sibling takes; TayPE uses the default fade length on the splice edges instead. Moving, copying, dropping, importing, or edge-resizing an enabled comp take into a sibling take cuts the sibling at the edited clip boundary and mutes only the newly covered segment; sibling material that was already muted remains muted and does not block the edit. Dropping a clip wholly inside another clip cuts/splits the existing clip without creating a crossfade, even when one boundary lines up; a dropped clip that fully covers another replaces it.

## Clipboard

Copy and paste clips between compatible tracks. TayPE preserves timing and clip data where the destination supports it.

## Melodyne

Open Melodyne from a clip. It is clip-scoped ARA editing, not a normal insert slot.

Use Option-double-click on a single selected clip, the Melodyne glyph on a prepared clip, or Clip Properties where Melodyne is available. A clip being edited in Melodyne is protected from destructive clip edits until the editor closes. Committed Melodyne work stays attached to the clip and can be edited again or reverted.
