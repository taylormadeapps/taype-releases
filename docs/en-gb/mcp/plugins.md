# Plugins

Tools for managing VST3 plugin inserts and the Mix FX bus.

---

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

### `restart_sandbox`

Restart the plugin sandbox host process. Requires transport stopped.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| _(none)_ | | | |

**Returns (success):** `{ "success": true }`

**Returns (failure):**
```json
{ "success": false, "error": "..." }
```

---

## Mix FX (Tape Summing)

### `get_mix_fx`

Get the current Mix FX state (Softube Multitrack Tape on the master bus).

**Returns:**
```json
{
  "enabled": false,
  "plugin_loaded": false,
  "plugin_name": "Tape Multi Track",
  "available": true
}
```

`available` is true when Softube Multitrack Tape is installed.

### `set_mix_fx`

Enable or disable tape summing. Requires transport stopped.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `enabled` | boolean | yes | true to enable, false to disable |

**Returns:** `{ "enabled": true, "plugin_loaded": true }`

### `open_mix_fx_editor`

Open the Softube Tape plugin editor window.

**Returns:** `{ "editor_open": true }`
