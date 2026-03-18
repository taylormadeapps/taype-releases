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

Stop playback. While transport is running, TayPE returns the head to the
current play-pass origin. If playback has already auto-ended, that return has
already happened, so a stopped-state `stop` call returns the head to the
selected Cut's zero point.

**Returns:** `{ "playing": false, "position": 0.0 }`

### `get_state`

Get current transport state.

**Returns:**
```json
{
  "playing": false,
  "position": 12.5,
  "duration": 180.0,
  "zero_time_seconds": 8.0,
  "loop_enabled": false,
  "loop_start_seconds": 0.0,
  "loop_end_seconds": 0.0
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

Set tempo, time signature, and/or playback loop range. Only provided fields
are changed.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `tempo` | number | no | BPM |
| `numerator` | number | no | Time signature numerator |
| `denominator` | number | no | Time signature denominator |
| `loop_enabled` | bool | no | Enable or disable loop playback |
| `loop_start_seconds` | number | no | Absolute loop start in seconds |
| `loop_end_seconds` | number | no | Absolute loop end in seconds |

Loop range updates require both loop endpoints and at least `0.5` seconds of
width.

**Returns:** Current transport state after changes, including the loop fields.

### `set_metronome`

Enable or disable the metronome click.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `enabled` | bool | yes | true to enable, false to disable |

**Returns:** `{ "enabled": true }`
