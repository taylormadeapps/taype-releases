# Transport

Tools for controlling playback, tempo, and the metronome.

Tempo and time signature live on the **currently selected Cut**. Use the
Cut tools to switch pages before calling `set_transport` if you want to edit
a different Cut's tempo map.

---

### `play`

Start audio playback.

**Returns:** `{ "playing": true }`

### `stop`

Stop playback. If transport is already stopped, TayPE returns the head to the
selected Cut's zero point.

**Returns:** `{ "playing": false, "position": 0.0 }`

### `get_state`

Get current transport state.

`pdc.monitor_reference_latency_samples` is the slowest active monitored live
path in the current session. Per-track `monitoring_latency` is the true
downstream live-path latency for that monitored source.
`monitor_alignment_delay` is the extra audition-only delay currently applied
to faster monitored live paths so they arrive with that reference. A track
with `monitor_alignment_reference: true` is itself one of the current
slowest monitored live paths.

**Returns:**
```json
{
  "playing": false,
  "position": 12.5,
  "duration": 180.0,
  "zero_time_seconds": 8.0,
  "recording": false,
  "pdc": {
    "total_session_latency_samples": 1024,
    "total_session_latency_ms": 23.2,
    "master_chain_latency_samples": 0,
    "mix_fx_latency_samples": 0,
    "monitor_reference_latency_samples": 768,
    "tracks": [
      {
        "track_id": "track_1",
        "chain_latency": 512,
        "compensation": 512,
        "live_path_latency": 768,
        "monitoring_latency": 768,
        "monitor_alignment_delay": 256,
        "live_monitored": true,
        "monitor_alignment_reference": false
      }
    ]
  }
}
```

### `seek`

Set the playback position.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `position` | number | yes | Position in seconds |

**Returns:** `{ "position": 12.5 }`

### `set_cut_zero`

Set the selected Cut's zero point at the playhead.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `position` | number | no | Zero point in seconds; defaults to current playhead |

**Returns:** `{ "selected": "Verse", "zero_time_seconds": 8.0 }`

### `reset_cut_zero`

Reset the selected Cut's zero point back to timeline start.

**Returns:** `{ "selected": "Verse", "zero_time_seconds": 0.0 }`

### `set_transport`

Set tempo and/or time signature. Only provided fields are changed.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `tempo` | number | no | BPM |
| `numerator` | number | no | Time signature numerator |
| `denominator` | number | no | Time signature denominator |

**Returns:** Current transport state after changes.

### `set_metronome`

Enable or disable the metronome click.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `enabled` | bool | yes | true to enable, false to disable |

**Returns:** `{ "enabled": true }`
