# Registrazione

Tools for recording audio input.

---

### `record_start`

Start recording audio input onto a track. Trasporto begins playback for
overdub monitoring.

questo tool does not require `tx_begin`, but it is rejected while an MCP
transaction is active. TayPE expects MCP clients to keep transactions short
and get back out before transport work.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `track_id` | string | yes | Traccia to record onto |

**Returns:** `{ "recording": true, "track_id": "track_2", "position": 5.0 }`

### `record_stop`

Stop recording, finalize the WAV file, add the recorded clip to the track, and
persist the reel working state immediately.

questo tool does not require `tx_begin`, but it is rejected while an MCP
transaction is active.

**Returns:**
```json
{
  "recording": false,
  "clip_id": "clip_3",
  "time": 5.0,
  "duration": 12.5
}
```
