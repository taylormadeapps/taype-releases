# View & Session

## View State

### `get_view_state`

Return current view, selected track, focus, archive view, spill, E-Zoom, ruler mode, mixer width, and related UI state.

### `set_view_state`

Change view-related state in one call.

### `set_automation_view`

Enable or disable Automation View and optionally choose the displayed parameter.

Required parameters:

| Param | Description |
|---|---|
| `enabled` | Whether Automation View is shown |

Optional parameters:

| Param | Description |
|---|---|
| `display` | `volume`, `pan`, or `width` |

### `set_focus`

Focus the working view on a track or context.

### `set_archive_view`

Show or hide archived tracks.

### `set_spill`

Show a narrowed working set.

### `set_e_zoom`

Enable or disable E-Zoom.

### `set_ruler_mode`

Switch ruler display.

### `select_track`

Select a track by ID.

### `select_clip`

Select a clip by ID. The owning track becomes selected too.

### `tab_to_transient`

Move the transport to the next or previous transient. TayPE uses the selected clip where possible, otherwise it scans clips on the selected track.

Optional parameters:

| Param | Description |
|---|---|
| `direction` | `next` or `previous` |

## Automation Data

### `list_automation_targets`

List the mixer and plug-in automation targets currently available on a track.
Use the returned `target` object unchanged with the automation data tools.
Mixer targets report native control ranges; plug-in targets use normalised
0..1 values. Pass `include_unavailable: true` to include registered mixer
controls that do not exist in the track's current module or mode state.

Every plug-in automation operation requires the insert's live parameter
catalogue to be ready so the parameter identity can be verified. Calls fail
while the catalogue is unready; they never read or mutate reel state using an
unverified parameter ID.

### `get_automation_points`

Get automation points for one structured target in the selected cut.
This read remains available during recording and take finalisation.

### `set_automation_points`

Replace automation points for one structured target in the selected cut. Points
must be sorted by time. A point may include optional `stop_after: true`; that
point ends a mixer or plug-in automated section and returns the parameter to its
stored static value until another point begins a new section.

### `clear_automation`

Remove all automation points for one structured target in the selected cut.

### `set_automation_enabled`

Switch one target's automation lane on or off for the whole reel. A powered-off lane keeps its points, but playback bypasses them and the stored mix value applies. Takes an additional boolean `enabled` parameter, and `get_automation_points` reports the current state in its `enabled` field.

`set_automation_points`, `clear_automation`, and `set_automation_enabled` are
all refused while audio or automation recording is active, while recording is
stopping or finalising, and while a failed finalisation remains retained for
recovery or discard. They remain available during ordinary playback and may be
grouped inside an MCP transaction when recording is idle.

Automation data tools use:

| Param | Description |
|---|---|
| `track_id` | Target track |
| `target` | Structured target returned by `list_automation_targets` |

A mixer target contains `kind: "mixer"`, `parameter_id`, and `object_id` when
the control belongs to a send destination or insert instance. A plug-in target
contains `kind: "plugin"`, `parameter_id`, `plugin_instance_id`, and
`plugin_uid`. Slot numbers are presentation locations, not automation identity.

Mixer point values use native mixer units. Plug-in point values use the
host-normalised 0..1 domain. In particular, `send.level` accepts and returns
0..2; higher submitted values clamp to 2.

## Undo / Redo

### `undo` / `redo` / `get_undo_state`

Move through undo history and inspect whether undo/redo is available.

## Theme

### `set_theme` / `get_theme`

Change or inspect theme and contrast state.

## Session

### `status`

Return a high-level app and session status.

### `callsign_get` / `callsign_set`

Read or set the studio callsign used by assistant workflows. Default is `tape`. At session start, call `callsign_get`. When the user prefixes a request with that word, treat the rest as a direct command.
