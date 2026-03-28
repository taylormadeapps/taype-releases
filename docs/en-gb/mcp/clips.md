# Clips

Tools for placing, moving, and managing audio clips on the timeline.

---

### `add_clip`

Place an audio file on a track at a timeline position.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `track_id` | string | yes | Target track ID |
| `path` | string | yes | Absolute path to audio file |
| `time` | number | no | Timeline position in seconds (default: 0.0) |
| `duration` | number | no | Clip duration in seconds (default: full file length) |
| `clip_start` | number | no | Effective playback offset into source file in seconds |
| `name` | string | no | Clip name |

**Returns:** `{ "id": "clip_1", "time": 0.0, "duration": 45.2 }`

### `set_clip`

Move a clip on the timeline or between tracks, resize it with an offline
stretch render, pitch-shift it offline, or disable it without removing it.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | yes | Clip ID |
| `time` | number | no | New timeline position in seconds |
| `duration` | number | no | New clip duration in seconds; changing this mints an offline derived render |
| `track_id` | string | no | Target track ID (for cross-track moves) |
| `pitch_semitones` | integer | no | Offline pitch shift, clamped to `-24..+24` semitones |
| `pitch_cents` | integer | no | Fine offline pitch shift, clamped to `-50..+49` cents |
| `disabled` | boolean | no | `true` disables clip playback while keeping the clip on the timeline |

At least one mutable field must be provided.

**Returns:** Updated clip object.

If the change needs an offline derived render, the immediate response can show
`derived_pending=true` and `stretch_pending=true`; poll `get_clips` until they
clear.

### `remove_clip`

Remove a clip.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | yes | Clip ID |

**Returns:** `{ "removed": "clip_1" }`

### `get_clips`

List clips, optionally filtered by track.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `track_id` | string | no | Filter by track (omit for all) |

**Returns:**
```json
{
  "clips": [
    {
      "id": "clip_1",
      "name": "take1.wav",
      "disabled": false,
      "track_id": "track_1",
      "time": 0.0,
      "duration": 45.2,
      "clip_start": 0.0,
      "record_alignment_offset": 0.0,
      "source_start": "00:00.000",
      "source_end": "00:45.200",
      "pitch_semitones": 0,
      "pitch_cents": 0,
      "pitch_shifted": false,
      "repitch_semitones": 0.0,
      "derived_path": "",
      "derived_pending": false,
      "stretch_pending": false,
      "stretched_wav_path": "",
      "file": "/path/to/take1.wav"
    }
  ]
}
```

`stretched_wav_path` is a compatibility alias of `derived_path`.
`clip_start` is the effective playback offset into the source media. For
recorded clips it can include automatic record alignment, and
`record_alignment_offset` reports that portion explicitly. `source_start` /
`source_end` show the user-facing trim window before any derived stretch
render, so a fresh recorded take still shows `00:00.000` until you actually
trim it. `repitch_semitones` is the combined semitone-plus-cents value sent to
the offline pitch render.
