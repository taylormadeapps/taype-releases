# MCP Tool Reference

Every tool available over TayPE's MCP interface. Tools are discovered
automatically via the `tools/list` handshake - this page documents what
each one does.

---

## Transport

### `play`

Start audio playback.

**Returns:** `{ "playing": true }`

### `stop`

Stop playback and reset position to the beginning.

**Returns:** `{ "playing": false, "position": 0.0 }`

### `get_state`

Get current transport state.

**Returns:**
```json
{
  "playing": false,
  "position": 12.5,
  "duration": 180.0
}
```

### `seek`

Set the playback position.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `position` | number | yes | Position in seconds |

**Returns:** `{ "position": 12.5 }`

---

## Reel Management

Reels are TayPE's session format - each reel is a self-contained project.

### `save_reel`

Save the current reel. If `name` is provided, performs Save As.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | no | New reel name (triggers Save As) |

**Returns:** `{ "name": "MyReel", "directory": "/path/to/reel" }`

### `open_reel`

Open an existing reel by name. Saves the current reel first.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | yes | Reel name to open |

**Returns:** `{ "name": "MyReel", "directory": "/path/to/reel" }`

### `list_reels`

List all available reel names.

**Returns:** `{ "reels": ["Default", "MyReel", "Demo"] }`

### `get_reel_info`

Get info about the currently loaded reel.

**Returns:**
```json
{
  "name": "Default",
  "directory": "/Users/.../Reels/Default",
  "sample_rate": 44100,
  "device_sr_matched": true
}
```

---

## Tracks

### `get_tracks`

List all tracks with their channel settings.

**Returns:**
```json
{
  "tracks": [
    {
      "id": "track_1",
      "name": "Track 1",
      "content_type": "audio",
      "color": "",
      "archived": false,
      "is_bus": false,
      "input_id": "1-2",
      "output_id": "master",
      "channel": {
        "volume": 1.0,
        "pan": 0.0,
        "mute": false,
        "solo": false,
        "trim": 0.0
      }
    }
  ]
}
```

### `add_track`

Add a new audio track.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | no | Track name (default: "Track N") |
| `color` | string | no | Colour hex string |

**Returns:** `{ "id": "track_2", "name": "Vocals" }`

### `set_track`

Update a track's properties. Only provided fields are changed.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | yes | Track ID |
| `name` | string | no | New name |
| `color` | string | no | New colour |
| `archived` | boolean | no | Archive state (mutes, disables processing, hides in Focus) |
| `volume` | number | no | 0.0 to 1.0 |
| `pan` | number | no | -1.0 to +1.0 |
| `mute` | boolean | no | Mute state |
| `solo` | boolean | no | Solo state |
| `is_bus` | boolean | no | Bus designation |
| `input_id` | string | no | Input channel(s): "1", "1-2", etc. |
| `output_id` | string | no | Output target: "master" or bus track ID |
| `trim` | number | no | Input trim: -36.0 to +12.0 dB |
| `position` | number | no | 0-based display index (reorders track) |
| `preamp_enabled` | boolean | no | Enable/disable channel preamp |
| `preamp_drive` | number | no | Preamp drive: 0.0 to 36.0 dB |
| `preamp_auto_gain` | boolean | no | Auto-gain compensation |
| `preamp_manual_gain` | number | no | Manual output gain: -36.0 to +12.0 dB |
| `preamp_hp_freq` | number | no | Saturation HP filter: 20.0 to 500.0 Hz |
| `preamp_lp_freq` | number | no | Saturation LP filter: 2000.0 to 20000.0 Hz |
| `preamp_safe` | boolean | no | 4x oversampling (eliminates aliasing at high drive) |

Volume, pan, mute, solo, and preamp parameters take effect immediately
(safe during playback). Name, colour, archived, bus, input, and output
changes require transport to be stopped.

Setting `is_bus: true` automatically sets the track's input to "none"
(buses receive from routed tracks, not the audio interface).

**Returns:** Updated track object.

### `remove_track`

Remove a track and all its clips.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | yes | Track ID |

**Returns:** `{ "removed": "track_2" }`

---

## Clips

### `add_clip`

Place an audio file on a track at a timeline position.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `track_id` | string | yes | Target track ID |
| `path` | string | yes | Absolute path to audio file |
| `time` | number | no | Timeline position in seconds (default: 0.0) |
| `duration` | number | no | Clip duration in seconds (default: full file length) |
| `clip_start` | number | no | Offset into source file in seconds |
| `name` | string | no | Clip name |

**Returns:** `{ "id": "clip_1", "time": 0.0, "duration": 45.2 }`

### `set_clip`

Move a clip on the timeline or between tracks.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | yes | Clip ID |
| `time` | number | no | New timeline position in seconds |
| `track_id` | string | no | Target track ID (for cross-track moves) |

At least one of `time` or `track_id` must be provided.

**Returns:** Updated clip object.

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
      "track_id": "track_1",
      "time": 0.0,
      "duration": 45.2,
      "clip_start": 0.0,
      "file": "/path/to/take1.wav"
    }
  ]
}
```

---

## Recording

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

---

## Transport Settings

### `set_transport`

Set tempo and/or time signature. Only provided fields are changed.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `tempo` | number | no | BPM |
| `numerator` | number | no | Time signature numerator |
| `denominator` | number | no | Time signature denominator |

**Returns:** Current transport state after changes.

---

## Plugins

### `list_plugins`

Return the scanned VST3 plugin catalogue.

**Returns:**
```json
{
  "plugins": [
    {
      "name": "ValhallaRoom",
      "vendor": "Valhalla DSP",
      "category": "Reverb",
      "format": "VST3",
      "path": "/Library/Audio/Plug-Ins/VST3/ValhallaRoom.vst3",
      "uid": 12345678
    }
  ],
  "count": 1
}
```

### `add_insert`

Load a plugin into one of a track's 4 insert slots. Requires transport
stopped.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `track_id` | string | yes | Target track |
| `plugin_id` | string | yes | Plugin path or UID from `list_plugins` |
| `slot` | number | no | Insert slot index 0-3 (default: 0) |

**Returns:**
```json
{
  "track_id": "...",
  "slot": 0,
  "plugin_name": "ValhallaRoom",
  "bypass": false,
  "enabled": true,
  "latency_samples": 0
}
```

### `remove_insert`

Unload the plugin from a track's insert slot. Requires transport stopped.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `track_id` | string | yes | Target track |
| `slot` | number | no | Insert slot index 0-3 (default: 0) |

**Returns:** `{ "track_id": "...", "slot": 0, "removed": true }`

### `bypass_insert`

Toggle bypass on a track's insert. Safe during playback.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `track_id` | string | yes | Target track |
| `bypass` | boolean | no | Bypass state (default: true) |
| `slot` | number | no | Insert slot index 0-3 (default: 0) |

**Returns:** `{ "track_id": "...", "slot": 0, "bypass": true }`

### `get_insert_info`

Get the current state of a track's insert slot.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `track_id` | string | yes | Target track |
| `slot` | number | no | Insert slot index 0-3 (default: 0) |

**Returns (loaded):**
```json
{
  "track_id": "...",
  "slot": 0,
  "loaded": true,
  "plugin_name": "ValhallaRoom",
  "plugin_id": "/Library/Audio/Plug-Ins/VST3/ValhallaRoom.vst3",
  "uid": "12345678",
  "bypass": false,
  "enabled": true,
  "latency_samples": 512
}
```

**Returns (empty):** `{ "track_id": "...", "slot": 0, "loaded": false }`

### `open_insert_editor`

Open the plugin editor window.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `track_id` | string | yes | Target track |
| `slot` | number | no | Insert slot index 0-3 (default: 0) |

**Returns:** `{ "track_id": "...", "slot": 0, "editor_open": true }`

### `close_insert_editor`

Close the plugin editor window.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `track_id` | string | yes | Target track |
| `slot` | number | no | Insert slot index 0-3 (default: 0) |

**Returns:** `{ "track_id": "...", "slot": 0, "editor_open": false }`

---

## Metronome

### `set_metronome`

Enable or disable the metronome click.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `enabled` | bool | yes | true to enable, false to disable |

**Returns:** `{ "enabled": true }`

---

## View State

### `get_view_state`

Get the current visibility and display state.

**Returns:**
```json
{
  "focus": false,
  "archive_view": false,
  "spill": false,
  "can_spill": false,
  "e_zoom": false,
  "ruler_mode": "time",
  "selected_track": ""
}
```

### `set_focus`

Toggle Focus mode (shows only relevant tracks).

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `enabled` | boolean | yes | Focus on/off |

### `set_archive_view`

Toggle Archive View (show archived tracks).

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `enabled` | boolean | yes | Archive view on/off |

### `set_spill`

Toggle Spill (show tracks routed to selected bus).

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `enabled` | boolean | yes | Spill on/off |

Requires a bus track to be selected.

### `set_e_zoom`

Toggle E-Zoom (zoom to selected clip).

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `enabled` | boolean | yes | E-Zoom on/off |

### `set_ruler_mode`

Set the ruler display to time or beats.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `mode` | string | yes | "time" or "beats" |

### `select_track`

Select a track (or deselect all).

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `track_id` | string | no | Track ID (omit to deselect) |

---

## Undo / Redo

### `undo`

Undo the last change.

**Returns:**
```json
{
  "undone": "Add track",
  "canUndo": true,
  "canRedo": true,
  "undoLabel": "Set transport",
  "redoLabel": "Add track"
}
```

### `redo`

Redo the last undone change. Same return shape as `undo`.

### `get_undo_state`

Check undo/redo availability without performing any action.

**Returns:**
```json
{
  "canUndo": true,
  "canRedo": false,
  "undoLabel": "Add track",
  "redoLabel": ""
}
```

---

## Theme

### `set_theme`

Switch between normal and high-contrast themes. Takes effect immediately
and persists across sessions.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `theme` | string | yes | "normal" or "high_contrast" |

### `get_theme`

Get the current theme.

**Returns:** `{ "theme": "normal" }`

---

## Personality

### `list_personalities`

List all available studio tech personalities.

**Returns:**
```json
{
  "personalities": [
    { "name": "Greg Zenner", "prompt": "..." },
    ...
  ]
}
```

### `set_personality`

Set the active personality by name. See [Personalities](personalities.md).

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | yes | Personality name |

### `get_personality`

Get the currently active personality.

**Returns:** `{ "name": "Greg Zenner", "prompt": "..." }`

---

## Session

### `status`

Comprehensive session snapshot - reel info, transport, all tracks with
peak levels, call sign, undo/redo state, personality, theme, view state,
and metronome. Use this to load context at the start of a conversation.

Note: app state can change at any time due to UI interaction. Always
re-check via `status` before assuming previous values are still valid.

**Returns:**
```json
{
  "reel": { "name": "Default", "directory": "...", "sample_rate": 44100, "device_sr_matched": true },
  "transport": { "playing": false, "recording": false, "position": 0.0, "duration": 0.0, "tempo": 120.0, "numerator": 4, "denominator": 4 },
  "tracks": [ { "id": "track_1", "name": "Audio 1", "volume": 1.0, "pan": 0.0, "mute": false, "solo": false, "peak_l": 0.0, "peak_r": 0.0 } ],
  "call_sign": "tape",
  "undo": { "can_undo": false, "can_redo": false, "undo_label": "", "redo_label": "" },
  "personality": { "name": "Greg Zenner", "system_prompt": "..." },
  "theme": "normal",
  "view": { "focus": false, "archive_view": false, "spill": false, "can_spill": false, "e_zoom": false, "ruler_mode": "time", "selected_track": "" },
  "metronome": { "enabled": false }
}
```

### `callsign_get` / `callsign_set`

Get or set the app's call sign (a short identifier, default: "tape").

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `call_sign` | string | yes (set only) | New call sign |

---

## Transactions

### `tx_begin`

Begin an explicit transaction. Groups multiple changes into a single
undo step. Requires transport stopped.

While active, the UI locks structural edits. Mute, solo, and transport
remain available to the user. If the connection drops, the transaction
is automatically aborted and rolled back.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `label` | string | yes | Undo label for this transaction |

**Returns:** `{ "tx_id": "uuid-...", "label": "Batch edit" }`

### `tx_commit`

Commit the transaction. Pushes the undo snapshot.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `tx_id` | string | yes | Transaction ID from `tx_begin` |

### `tx_abort`

Abort the transaction. Rolls back to pre-transaction state.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `tx_id` | string | yes | Transaction ID from `tx_begin` |

---

## Feedback

### `submit_feedback`

Submit a feedback or crash report. Collects live system info (version,
OS, CPU architecture, audio interface, sample rate, buffer size, loaded
plugins, track count, transport state, license tier) and posts to the
TayPE team along with the user's description.

Before calling this tool, you must show the user everything that will
be sent and get their explicit confirmation. Nothing leaves the machine
without approval.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `description` | string | yes | User's description of the issue |
| `type` | string | no | "feedback" (default) or "crash" |

**Returns:** The collected payload (so you can confirm what was sent).

---

## License

### `get_license_status`

Get the current license state.

**Returns:**
```json
{
  "licensed": true,
  "founder": true,
  "licensee": "Tom Taylor",
  "tier": "founder",
  "sequence": 1,
  "valid_from": "2025-01-01",
  "valid_to": "2026-01-01",
  "era": 1
}
```

### `show_license_dialog`

Show the license dialog.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `type` | string | no | "nag", "licensed", or "auto" (default) |
