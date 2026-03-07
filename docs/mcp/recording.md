# Recording

Tools for recording audio input.

---

### `record_start`

Start recording audio input onto a track. Transport begins playback
for overdub monitoring.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `track_id` | string | yes | Track to record onto |

**Returns:** `{ "track_id": "track_2" }`

### `record_stop`

Stop recording, finalise the audio file, and add the clip to the track.

**Returns:** `{ "clip_id": "clip_3", "time": 5.0, "duration": 12.5 }`
