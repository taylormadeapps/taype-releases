# Recording

Tools for recording audio input.

`get_record_mode` / `set_record_mode` control the transport's record-button
macro. `get_loop_record_mode` / `set_loop_record_mode` control whether loop
braces auto-punch or wrap during record. `record_start` / `record_stop` stay
low-level and let MCP clients drive the take lifecycle directly.

---

### `get_record_mode`

Get the current transport record-button mode.

**Returns:**
```json
{
  "record_mode": "return"
}
```

### `set_record_mode`

Persist the transport record-button mode. This changes how the UI record
button and **Return** shortcut behave; it does not start or stop a take by
itself.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `record_mode` | string | yes | `"return"`, `"punch"`, or `"do_over"` |

**Returns:**
```json
{
  "record_mode": "punch"
}
```

### `get_loop_record_mode`

Get the current loop-record mode.

**Returns:**
```json
{
  "loop_record_mode": "auto_punch"
}
```

### `set_loop_record_mode`

Persist the loop-record mode.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `loop_record_mode` | string | yes | `"auto_punch"` or `"loop"` |

**Returns:**
```json
{
  "loop_record_mode": "loop"
}
```

### `record_start`

Start recording audio input onto one or more tracks. Transport begins
playback for overdub monitoring.

This tool does not require `tx_begin`, but it is rejected while an MCP
transaction is active. TayPE expects MCP clients to keep transactions short
and get back out before transport work.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `track_id` | string | no | Single-track compatibility path |
| `track_ids` | array[string] | no | Tracks to record onto in caller order |

Comp buses are special: `record_start` on the comp bus itself always creates a
new child take track for that comp group, regardless of `monitor`. `monitor`
only controls whether the comp bus also auditions its shared comp input
through the normal bus strip. Calling `record_start` on one or more comp-child
tracks instead collapses those child selections into a single print pass on
the parent comp bus.

Plain buses record their routed input sum too. `monitor` does not decide
whether that routed audio is capturable; it only decides whether you also hear
the bus through its own strip during the pass.

**Returns:**
```json
{
  "recording": true,
  "track_id": "track_2",
  "track_ids": ["track_2", "track_5"],
  "dropped_same_input_track_ids": ["track_7"],
  "position": 5.0
}
```

### `record_stop`

Stop recording, finalize the WAV file, add the recorded clip or clips to the
project, and persist the reel working state immediately.

This tool does not require `tx_begin`, but it is rejected while an MCP
transaction is active.

**Returns:**
```json
{
  "recording": false,
  "clips": [
    {
      "track_id": "track_2",
      "clip_id": "clip_3",
      "time": 5.0,
      "duration": 12.5
    }
  ],
  "clip_id": "clip_3",
  "time": 5.0,
  "duration": 12.5
}
```
