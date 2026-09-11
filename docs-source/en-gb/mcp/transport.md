# Transport

Transport tools control playback, printing, seeking, tempo, metronome, and cut zero.

### `play`

Start playback.

### `stop`

Stop transport. While recording, stop follows the active record mode and safety rules.

### `get_state`

Return transport, reel, selection, tempo, marker, and current-track state.
`content_extent_seconds` is the informational end of known content or explicit
timeline anchors. It is not a transport limit and may be less than `position`.
`unbounded_timeline` is always true. `duration` is a compatibility alias of
`content_extent_seconds`. Tape Length affects only the mixer reel graphic.

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

Return audio-engine performance metrics such as DSP load, render timing,
overrun state, latency, active track/plugin counts, and optional per-track
rows. Effective latency includes active post-master Listen Bus latency on every
audible route. Raw session-PDC values remain separate, and a synthetic Listen
Bus row exposes its own plug-in and DSP attribution. While active, that row is
the terminal output stage at `depth: 0`; Master and its descendants shift down
one level instead of presenting Listen Bus as a child of Master.

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
| `sample_duration_ms` | Sample briefly and return rolled-up thread CPU/lifetime data. Hard maximum 1000. Values outside 0–1000 are refused |
