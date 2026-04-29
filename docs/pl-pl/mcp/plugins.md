# Wtyczki

Narzędzia for managing VST3 plugin inserts.

---

### `list_plugins`

Powrót the scanned VST3 plugin catalogue plus TayPE's bundled
**Stock** entries such as **Tape Rooms** and **Ache-Delay**.

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

Załaduj a plugin into one of a track's 8 insert slots. Requires transport
stopped.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `track_id` | string | yes | Target track |
| `plugin_id` | string | yes | Wtyczka path or UID from `list_plugins`, or a bundled extension name/path |
| `slot` | number | no | Wstawka slot index 0-7 (default: 0; instruments and MIDI Out must use slot 0) |
| `device_id` | string | no | Initial Core MIDI destination for TayPE's virtual MIDI Out insert |
| `channel` | number | no | Virtual MIDI Out channel override: `0` keeps the source channel; `1-16` force a channel |
| `advance_ms` | number | no | Virtual MIDI Out playback lead in milliseconds |

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

Rozładuj the plugin from a track's insert slot. Requires transport stopped.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `track_id` | string | yes | Target track |
| `slot` | number | no | Wstawka slot index 0-7 (default: 0) |

**Returns:** `{ "track_id": "...", "slot": 0, "removed": true }`

### `bypass_insert`

Toggle bypass on a track's insert. Safe during playback.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `track_id` | string | yes | Target track |
| `bypass` | boolean | no | Pomiń state (default: true) |
| `slot` | number | no | Wstawka slot index 0-7 (default: 0) |

**Returns:** `{ "track_id": "...", "slot": 0, "bypass": true }`

### `get_insert_info`

Get the current state of a track's insert slot.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `track_id` | string | yes | Target track |
| `slot` | number | no | Wstawka slot index 0-7 (default: 0) |

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

### `list_insert_presets`

List saved TayPE plug-in presets that match the current insert slot.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `track_id` | string | yes | Target track |
| `slot` | number | no | Wstawka slot index 0-7 (default: 0) |

**Returns (loaded):**
```json
{
  "track_id": "...",
  "slot": 0,
  "loaded": true,
  "plugin_name": "Master Plan",
  "count": 1,
  "presets": [
    {
      "name": "Opóźnienie Clean",
      "path": "/Users/you/Documents/Taype/Presety/FX/Master Plan/Opóźnienie Clean"
    }
  ]
}
```

**Returns (empty):** `{ "track_id": "...", "slot": 0, "loaded": false, "count": 0, "presets": [] }`

### `load_insert_preset`

Załaduj a saved TayPE plug-in preset into the current insert slot. Requires
transport stopped.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `track_id` | string | yes | Target track |
| `preset_name` | string | yes | Saved preset name/path from `list_insert_presets` |
| `slot` | number | no | Wstawka slot index 0-7 (default: 0) |

**Returns:** `{ "track_id": "...", "slot": 0, "preset_name": "Opóźnienie Clean", "latency_samples": 4706 }`

### `open_insert_editor`

Otwórz the plugin editor window.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `track_id` | string | yes | Target track |
| `slot` | number | no | Wstawka slot index 0-7 (default: 0) |

**Returns:** `{ "track_id": "...", "slot": 0, "editor_open": true }`

### `close_insert_editor`

Zamknij the plugin editor window.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `track_id` | string | yes | Target track |
| `slot` | number | no | Wstawka slot index 0-7 (default: 0) |

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
