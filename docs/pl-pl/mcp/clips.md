# Clipy

Narzędzia for placing, moving, and managing audio clips on the timeline.

---

### `add_clip`

Place an audio file on a track at a timeline position.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `track_id` | string | yes | Target track ID |
| `path` | string | yes | Absolute path to audio file |
| `time` | number | no | Oś czasu position in seconds (default: 0.0) |
| `duration` | number | no | Clip duration in seconds (default: full file length) |
| `clip_start` | number | no | Offset into source file in seconds |
| `name` | string | no | Clip name |

**Returns:** `{ "id": "clip_1", "time": 0.0, "duration": 45.2 }`

### `set_clip`

Move a clip on the timeline or between tracks.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | yes | Clip ID |
| `time` | number | no | Nowy timeline position in seconds |
| `track_id` | string | no | Target track ID (for cross-track moves) |

At least one of `time` or `track_id` must be provided.

**Returns:** Updated clip object.

### `remove_clip`

Usuń a clip.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | yes | Clip ID |

**Returns:** `{ "removed": "clip_1" }`

### `get_clips`

List clips, optionally filtered by track.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `track_id` | string | no | Filtr by track (omit for all) |

**Returns:**
```json
{
  "clips": [
    {
      "id": "clip_1",
      "name": "take1.wav",
      "track_id": "track_1",
      "time": 0.0,
      "duration": 45.2,
      "clip_start": 0.0,
      "file": "/path/to/take1.wav"
    }
  ]
}
```
