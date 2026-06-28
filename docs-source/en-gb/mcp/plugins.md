# Plugins

Tools for managing VST3 plugin inserts and the Mix FX bus.

---

### `list_plugins`

Return the scanned VST3 plugin catalogue plus TayPE's bundled
**Stock** entries such as **Tape Rooms** and **Ache-Delay**.
Melodyne is omitted because it opens through the clip-scoped ARA tools, not as
an insert.

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

Load a plugin into one of a track's 8 insert slots. Requires transport
stopped.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `track_id` | string | yes | Target track |
| `plugin_id` | string | yes | Plugin path or UID from `list_plugins`, a bundled extension name/path, `taype://insert/midi-out`, or `taype://insert/hardware-io` |
| `slot` | number | no | Insert slot index 0-7 (default: 0; instruments and MIDI Out must use slot 0) |
| `device_id` | string | no | Initial Core MIDI destination for TayPE's virtual MIDI Out insert |
| `channel` | number | no | Virtual MIDI Out channel override: `0` keeps the source channel; `1-16` force a channel |
| `advance_ms` | number | no | Virtual MIDI Out playback lead in milliseconds |
| `output_route_id` | string | no | Hardware Insert send output route from I/O mapping aliases; mono and stereo endpoints are valid, and routes overlapping the master output are rejected |
| `input_route_id` | string | no | Hardware Insert return input route from I/O mapping aliases; mono and stereo endpoints are valid |
| `latency_offset_samples` | number | no | Hardware Insert non-negative extra compensation delay; negative values clamp to 0 |
| `hardware_input_trim_db` | number | no | Hardware Insert send trim in dB, clamped to -24..+12 |
| `hardware_output_trim_db` | number | no | Hardware Insert return trim in dB, clamped to -24..+12 |
| `hardware_ag_measure_mode` | number | no | Hardware Insert auto-gain mode: `0` Peak, `1` RMS |
| `hardware_color` | string | no | Optional Hardware Insert slot colour; empty uses the track colour |

Melodyne cannot be loaded through `add_insert`; open it from a clip instead.

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
| `slot` | number | no | Insert slot index 0-7 (default: 0) |

**Returns:** `{ "track_id": "...", "slot": 0, "removed": true }`

### `bypass_insert`

Toggle bypass on a track's insert. Safe during playback. Audio-FX bypass keeps
the plug-in in the sandbox chain and ramps that slot to latency-aligned dry
audio, so PDC remains unchanged.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `track_id` | string | yes | Target track |
| `bypass` | boolean | no | Bypass state (default: true) |
| `slot` | number | no | Insert slot index 0-7 (default: 0) |

**Returns:** `{ "track_id": "...", "slot": 0, "bypass": true }`

### `disable_insert`

Disable a plugin in one insert slot. The plugin stays loaded for state/editor
recall, but it leaves the audio graph, receives no sandbox processing, burns no
processing CPU, and contributes zero latency. Requires transport stopped.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `track_id` | string | yes | Target track |
| `slot` | number | no | Insert slot index 0-7 (default: 0) |

**Returns:** `{ "track_id": "...", "slot": 0, "enabled": false }`

### `enable_insert`

Re-enable a previously disabled plugin. The resident plugin rejoins the audio
graph, sandbox dispatch, and PDC graph. Requires transport stopped.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `track_id` | string | yes | Target track |
| `slot` | number | no | Insert slot index 0-7 (default: 0) |

**Returns:** `{ "track_id": "...", "slot": 0, "enabled": true }`

### `get_insert_info`

Get the current state of a track's insert slot.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `track_id` | string | yes | Target track |
| `slot` | number | no | Insert slot index 0-7 (default: 0) |

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
  "latency_samples": 512,
  "supports_mono_main": true,
  "main_bus_channels": 1
}
```

**Returns (empty):** `{ "track_id": "...", "slot": 0, "loaded": false }`

`supports_mono_main` tells you whether that plug-in offers a mono main-bus
layout TayPE can use on mono strips. `main_bus_channels` is the live main-bus
width for the loaded slot: `1` for true mono, `2` for stereo, or `0` for the
virtual `External MIDI Out` insert.

### `list_insert_presets`

List saved TayPE plug-in presets that match the current insert slot.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `track_id` | string | yes | Target track |
| `slot` | number | no | Insert slot index 0-7 (default: 0) |

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
      "name": "Latency Clean",
      "path": "[TAPE_HOME]/Presets/FX/Master Plan/Latency Clean"
    }
  ]
}
```

**Returns (empty):** `{ "track_id": "...", "slot": 0, "loaded": false, "count": 0, "presets": [] }`

### `load_insert_preset`

Load a saved TayPE plug-in preset into the current insert slot. Requires
transport stopped.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `track_id` | string | yes | Target track |
| `preset_name` | string | yes | Saved preset name/path from `list_insert_presets` |
| `slot` | number | no | Insert slot index 0-7 (default: 0) |

**Returns:** `{ "track_id": "...", "slot": 0, "preset_name": "Latency Clean", "latency_samples": 4706 }`

### `open_insert_editor`

Open the plugin editor window.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `track_id` | string | yes | Target track |
| `slot` | number | no | Insert slot index 0-7 (default: 0) |

**Returns:** `{ "track_id": "...", "slot": 0, "editor_open": true }`

### `close_insert_editor`

Close the plugin editor window.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `track_id` | string | yes | Target track |
| `slot` | number | no | Insert slot index 0-7 (default: 0) |

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

### `set_insert_hardware_io`

Configure an existing Hardware Insert. Any omitted popup field keeps its
current value; older reels that do not contain these fields use the defaults
shown here.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `track_id` | string | yes | Target track |
| `slot` | number | no | Insert slot index 0-7 (default: 0) |
| `output_route_id` | string | no | Send output route ID, or empty for no send; mono and stereo endpoints are valid, and routes overlapping the master output are rejected |
| `input_route_id` | string | no | Return input route ID, or empty for silence; mono and stereo endpoints are valid |
| `latency_offset_samples` | number | no | Non-negative extra compensation delay in samples; negative values clamp to 0 |
| `hardware_input_trim_db` | number | no | Send trim in dB, clamped to -24..+12; default 0 |
| `hardware_output_trim_db` | number | no | Return trim in dB, clamped to -24..+12; default 0 |
| `hardware_ag_measure_mode` | number | no | Auto-gain mode: `0` Peak, `1` RMS; default 0 |
| `hardware_color` | string | no | Optional slot colour; empty uses the track colour |

**Returns:** `{ "track_id": "...", "slot": 2, "hardware_output_route_id": "3-4", "hardware_input_route_id": "3-4", "hardware_latency_offset_samples": 64, "hardware_input_trim_db": 0.0, "hardware_output_trim_db": -1.5, "hardware_ag_measure_mode": 0, "hardware_color": "ff4fb3ff", "latency_samples": 672 }`

### `set_mix_fx`

Enable or disable tape summing. Requires transport stopped.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `enabled` | boolean | yes | true to enable, false to disable |

**Returns:** `{ "enabled": true, "plugin_loaded": true }`

### `open_mix_fx_editor`

Open the Softube Tape plugin editor window.

**Returns:** `{ "editor_open": true }`
