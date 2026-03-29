# View State & Session

Tools for view state, undo/redo, theme, personality, and session status.

---

## View State

### `get_view_state`

Get the current visibility and display state. Focus, Archive View, Spill,
and tag-filter state are transient session view modes, while ruler mode
and other explicit app preferences persist separately.

**Returns:**
```json
{
  "focus": false,
  "focus_tag": "",
  "focus_tags": [],
  "tag_filter_mode": "or",
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
| `tag` | string | no | Optional focus tag (Focus-by-Tag) |
| `tags` | string[] | no | Optional multiple focus tags |
| `filter_mode` | string | no | `"or"` (default) or `"and"` for multi-tag focus |

### `set_archive_view`

Toggle Archive View (show archived tracks).

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `enabled` | boolean | yes | Archive view on/off |

### `set_spill`

Toggle Spill (show tracks routed to the selected bus or master).

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `enabled` | boolean | yes | Spill on/off |

Requires a bus or master track to be selected.

Focus, Archive View, Spill, and tag-filter state are not reel data and reset
on relaunch. Ruler mode, automation view, and meter scale still persist as
app-global preferences.

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
    { "name": "Glue & Weight", "prompt": "..." },
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

**Returns:** `{ "name": "Glue & Weight", "prompt": "..." }`

---

## Session

### `status`

Comprehensive session snapshot - reel info, transport, selected Cut, Cut list,
all tracks with peak levels, call sign, undo/redo state, personality, theme,
view state, and metronome. Use this to load context at the start of a conversation.

Note: app state can change at any time due to UI interaction. Always
re-check via `status` before assuming previous values are still valid.

**Returns:**
```json
{
  "reel": { "name": "Default", "directory": "...", "sample_rate": 44100, "device_sr_matched": true },
  "transport": { "playing": false, "recording": false, "position": 0.0, "duration": 0.0, "tempo": 120.0, "numerator": 4, "denominator": 4 },
  "selected_cut_name": "Main Cut",
  "cuts": ["Main Cut", "Verse", "Chorus"],
  "tracks": [ { "id": "track_1", "name": "Audio 1", "tags": ["Vocals"], "volume": 1.0, "pan": 0.0, "mute": false, "solo": false, "peak_l": 0.0, "peak_r": 0.0 } ],
  "call_sign": "tape",
  "undo": { "can_undo": false, "can_redo": false, "undo_label": "", "redo_label": "" },
  "personality": { "name": "Glue & Weight", "system_prompt": "..." },
  "theme": "normal",
  "view": { "focus": false, "focus_tag": "", "focus_tags": [], "tag_filter_mode": "or", "archive_view": false, "spill": false, "can_spill": false, "e_zoom": false, "ruler_mode": "time", "selected_track": "" },
  "metronome": { "enabled": false }
}
```

### `callsign_get` / `callsign_set`

Get or set the app's call sign (a short identifier, default: "tape").

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `call_sign` | string | yes (set only) | New call sign |
