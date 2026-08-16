# Transport

Transport tools control playback, printing, seeking, tempo, metronome, and cut zero.

### `play`

Start playback.

### `stop`

Stop transport. While recording, stop follows the active record mode and safety rules.

### `get_state`

Return transport, reel, selection, tempo, marker, and current-track state.
The `duration` field is the informational end of known content or explicit
timeline anchors. It may be less than `position` and is never a stop boundary.

### `print_mix`

Render the current mix to an audio file.

### `seek`

Move the playhead to any non-negative timeline position, including beyond
known content and the Tape Mode graphic length.

### `set_cut_zero` / `reset_cut_zero`

Set or clear the selected cut's zero point.

### `set_transport`

Set tempo, loop, count-in, ruler, or related transport settings.

### `set_metronome`

Enable, disable, or configure metronome behaviour.

## Varispeed

### `set_varispeed`

Set the transport-level varispeed multiplier. Valid range is `0.5` to `2.0`. Pitch is preserved. Recording is allowed under varispeed, but changing varispeed is blocked while a take is running.

Required parameters:

| Param | Description |
|---|---|
| `multiplier` | Playback speed multiplier |

Example:

```json
{ "multiplier": 0.75 }
```

### `get_varispeed`

Return the current multiplier and effective tempo.

## Performance and Diagnostics

### `get_performance`

Return audio-engine performance metrics such as DSP load, render timing, overrun state, latency, active track/plugin counts, and optional per-track rows.

Optional parameters:

| Param | Description |
|---|---|
| `include_track_rows` | Include raw per-track performance rows |

### `set_detailed_performance_telemetry`

Enable or disable detailed performance telemetry for a measured diagnostic window.

Required parameters:

| Param | Description |
|---|---|
| `enabled` | Whether detailed telemetry collection is enabled |

Optional parameters:

| Param | Description |
|---|---|
| `reset` | Clear existing detailed telemetry while changing state |

### `get_thread_scheduling`

Capture thread scheduling snapshots for the TayPE process and, optionally, the connected sandbox.

Optional parameters:

| Param | Description |
|---|---|
| `include_sandbox` | Include the connected sandbox process where available |
| `sample_ms` | Sample briefly and return rolled-up thread CPU/lifetime data |

### `set_dev_taype_rooms_host_mode`

Developer diagnostic switch for Taype Rooms hosting. This is for support and diagnostics, not ordinary session control.

Required parameters:

| Param | Description |
|---|---|
| `mode` | `environment`, `sandbox`, or `in_app` |
