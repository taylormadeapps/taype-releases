# Clips

### `add_clip`

Create or import a clip onto a track.

### `set_clip`

Move, trim, slip, rename, disable, adjust gain, or update fades for a clip.
Use `slip_offset` for signed waveform slip inside the fixed clip window; `clip_start` remains the trim/source anchor.

### `remove_clip`

Remove a clip from the reel.

### `rerender_midi_clip`

Render a MIDI clip through its source instrument path where supported.

### `get_midi_draft`

Read the current clip-scoped MIDI draft. If none is active for this clip, initialise it from committed MIDI. Does not open the editor window.

Required parameters:

| Param | Description |
|---|---|
| `clip_id` | MIDI-origin clip ID |

Returns draft revision, dirty flag, committed and original MIDI paths, clip window, and an `events` array (`note_on`, `note_off`, `muted_note`, `cc`, `pitch_bend`, `channel_pressure`, `poly_pressure`, `program_change`, or `raw`).

### `replace_midi_draft`

Replace the in-memory draft with a complete event document. One editor-local undo step. Does not write a MIDI file, change clip MIDI paths, rerender, or enter Reel undo.

Required parameters:

| Param | Description |
|---|---|
| `clip_id` | MIDI-origin clip ID |
| `expected_revision` | Must match `draft_revision` from `get_midi_draft` |
| `events` | Complete replacement document |

A stale revision or a changed committed MIDI path refuses with no partial change.

### `quantise_midi_draft`

Set or invoke the same quantiser the MIDI editor uses. Headless scope is the whole draft or an explicit time/channel/pitch filter, never an invisible UI selection.

### `undo_midi_draft` / `redo_midi_draft`

Local draft undo and redo. Not Reel undo.

### `commit_midi_draft`

Write the draft into clip truth. `keep_unrendered` writes a fresh current MIDI revision without replacing audio. `render_now` writes MIDI then rerenders. Original MIDI is never overwritten.

Required parameters:

| Param | Description |
|---|---|
| `clip_id` | MIDI-origin clip ID |
| `action` | `keep_unrendered` or `render_now` |

### `discard_midi_draft`

Destroy the ephemeral draft without changing clip MIDI or audio.

### `midi_editor`

`get`, `open`, or `close` the MIDI editor window. Opening is never required for draft read, replace, or quantise. Closing a dirty draft is refused.

### `restore_original_midi_clip`

Restore original MIDI. Stop-to-edit. Undoable at the Reel. Does not overwrite original bytes.

### `get_clip_audio`

Read-only observation of the audio file the engine will play for a clip, before inserts, fader, buses, and master. It does not encode samples into JSON or overwrite media.

`get_clips` path fields are not a substitute: a pending derived path can look present while the engine is not playing it. This tool reports `asset_state` and `in_engine_graph` from the same rule the engine uses.

Required parameters:

| Param | Description |
|---|---|
| `clip_id` | Clip ID |

### `get_clips`

List clips and their timing, track, media, and state.
Clip objects include `clip_start` and `slip_offset`; the audible source start is `clip_start + slip_offset`.

### `select_clip`

Select a clip by ID. Selecting a clip also selects its owning track.

Required parameters:

| Param | Description |
|---|---|
| `clip_id` | Clip ID |

## ARA2

ARA2 providers open from clips, not as normal inserts. Choose the global
provider from TayPE's **ARA2** menu; Melodyne is the default only when no other
choice has been stored. These tools are available when the ARA2 lane is present
in the running build.

### `ara2_transfer`

Transfer a clip's current audible audio to the selected provider. Playback may continue; recording must be stopped.

### `ara2_commit`

Render the provider's processed output and make it the clip's committed playback source. Playback may continue; recording must be stopped.

### `ara2_revert`

Restore the clip's original audio layer, rebuilding stretch/pitch-only audio when required. Playback may continue; recording must be stopped.

### `ara2_status`

Return the current ARA2 state for a clip: `none`, `editing`, or `melodyned`.

ARA tools use:

| Param | Description |
|---|---|
| `clip_id` | Clip ID |
