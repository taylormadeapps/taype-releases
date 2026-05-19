# Transport

Narzędzia for controlling playback, tempo, and the metronome.

Tempo and time signature live on the **currently selected Wytnij**. Use the
Wytnij tools to switch pages before calling `set_transport` if you want to edit
a different Wytnij's tempo map.

---

### `play`

Start audio playback.

**Returns:** `{ "playing": true }`

### `stop`

Zatrzymaj playback. If transport is already stopped, TayPE returns the head to the
selected Wytnij's zero point.

**Returns:** `{ "playing": false, "position": 0.0 }`

### `get_state`

Get current transport state.

**Returns:**
```json
{
  "playing": false,
  "position": 12.5,
  "duration": 180.0,
  "printing": false,
  "zero_time_seconds": 8.0
}
```

### `print_mix`

Start or stop realtime Print Mix capture on the current reel.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `enabled` | bool | yes | `true` starts Print Mix, `false` stops and commits it |

Starting requires a loaded reel, a stopped transport, audible clips on the
timeline, and a device sample rate that matches the reel.

**Returns:**
```json
{
  "enabled": true,
  "printing": true,
  "file": "/Users/you/Documents/Taype/Prints/My Reel/My Reel-01.wav"
}
```

### `seek`

Set the playback position.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `position` | number | yes | Position in seconds |

**Returns:** `{ "position": 12.5 }`

### `set_cut_zero`

Set the selected Wytnij's zero point at the playhead.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `position` | number | no | Zero point in seconds; defaults to current playhead |

**Returns:** `{ "selected": "Verse", "zero_time_seconds": 8.0 }`

### `reset_cut_zero`

Resetuj the selected Wytnij's zero point back to timeline start.

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

Włącz or disable the metronome click.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `enabled` | bool | yes | true to enable, false to disable |

**Returns:** `{ "enabled": true }`
