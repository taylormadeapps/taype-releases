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

### `get_clips`

List clips and their timing, track, media, and state.
Clip objects include `clip_start` and `slip_offset`; the audible source start is `clip_start + slip_offset`.

### `select_clip`

Select a clip by ID. Selecting a clip also selects its owning track.

Required parameters:

| Param | Description |
|---|---|
| `clip_id` | Clip ID |

## Melodyne / ARA

Melodyne opens from clips, not as a normal insert. These tools are available when the ARA/Melodyne lane is available in the running build.

### `ara2_transfer`

Transfer a clip's audio to Melodyne for pitch/time editing. Playback may continue; recording must be stopped.

### `ara2_commit`

Render Melodyne's processed output and make it the clip's committed playback source. Playback may continue; recording must be stopped.

### `ara2_revert`

Remove Melodyne from a clip and return to the raw source or rebuilt stretch-only audio. Playback may continue; recording must be stopped.

### `ara2_status`

Return the current Melodyne state for a clip: none, analysing, editing, or committed.

ARA tools use:

| Param | Description |
|---|---|
| `clip_id` | Clip ID |
