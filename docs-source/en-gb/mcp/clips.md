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
