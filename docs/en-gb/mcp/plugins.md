# Plugins

Tools for managing VST3 plugin inserts and the Mix FX bus.

---

### `list_plugins`

Return the scanned VST3 plugin catalogue plus TayPE's bundled
**Taype Stock** entries such as **Taype Rooms**, **Ache-Delay**,
**T-Clipper**, **Taype Drive**, **Taype EQ**, and **Taype Comp**.
Melodyne is omitted because it opens through the clip-scoped ARA tools, not as
an insert.

Those Taype Stock VST3 entries are Taype-only: outside Taype they warn on
open and stay dry/pass-through instead of processing audio.

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
| `advance_ms` | number | no | Virtual MIDI Out early-send amount in milliseconds; omitted uses the current corrected interface round-trip estimate from Audio prefs |
| `output_route_id` | string | no | Hardware Insert send output route from I/O mapping aliases; mono and stereo endpoints are valid, and routes overlapping the master output are rejected |
| `input_route_id` | string | no | Hardware Insert return input route from I/O mapping aliases; mono and stereo endpoints are valid |
| `latency_offset_samples` | number | no | Hardware Insert non-negative extra compensation delay; negative values clamp to 0 |
| `hardware_input_trim_db` | number | no | Hardware Insert send trim in dB, clamped to -24..+12 |
| `hardware_output_trim_db` | number | no | Hardware Insert return trim in dB, clamped to -24..+12 |
| `hardware_ag_measure_mode` | number | no | Hardware Insert auto-gain mode: `0` Peak, `1` RMS |
| `hardware_color` | string | no | Optional Hardware Insert slot colour; empty uses the track colour |
| `hardware_recall_image_path` | string | no | Optional Hardware Insert recall photo path, or newline-separated paths, under `media/recall-images/`; empty means no photo |
| `hardware_low_cut_hz` | number | no | Hardware Insert low-cut frequency in Hz, clamped to 20..1000; 20 disables low cut |
| `hardware_high_cut_hz` | number | no | Hardware Insert high-cut frequency in Hz, clamped to 2000..20000; 20000 disables high cut |
| `hardware_filter_position` | string | no | `before` filters before the hardware send; `after` filters after the return |

**Returns:**
```json
{
  "track_id": "...",
  "slot": 0,
  "plugin_name": "External MIDI Out",
  "bypass": false,
  "enabled": true,
  "latency_samples": 0,
  "is_midi_out": true,
  "midi_output_id": "iac-driver-bus-1",
  "midi_output_name": "IAC Driver Bus 1",
  "midi_channel": 0,
  "midi_output_advance_ms": 12.5,
  "midi_output_advance_samples": 600
}
```

**Errors:**
- `Only the first insert slot can host instruments or MIDI Out`
- `Open Melodyne from a clip, not an insert slot.`

Bundled stock names from `list_plugins` can be loaded directly through
`plugin_id`, including **Taype Drive**, **Taype EQ**, and **Taype Comp**.

### `remove_insert`

Unload the plugin from a track's insert slot. Requires transport stopped.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `track_id` | string | yes | Target track |
| `slot` | number | no | Insert slot index 0-7 (default: 0) |

**Returns:** `{ "track_id": "...", "slot": 0, "removed": true }`

### `bypass_insert`

Toggle bypass on a track's insert. Safe during playback.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `track_id` | string | yes | Target track |
| `bypass` | boolean | no | Bypass state (default: true) |
| `slot` | number | no | Insert slot index 0-7 (default: 0) |

**Returns:** `{ "track_id": "...", "slot": 0, "bypass": true }`

### `disable_insert`

Disable a plugin in one insert slot. The assignment and saved state stay in the
reel, but TayPE unloads the plugin from the sandbox. It leaves the audio graph,
receives no sandbox processing, burns no processing CPU, and contributes zero
latency. Requires transport stopped.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `track_id` | string | yes | Target track |
| `slot` | number | no | Insert slot index 0-7 (default: 0) |

**Returns:** `{ "track_id": "...", "slot": 0, "enabled": false }`

### `enable_insert`

Re-enable a previously disabled plugin. TayPE loads the plugin from the stored
state chunk, then rejoins the audio graph, sandbox dispatch, and PDC graph.
Requires transport stopped.

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
  "wet_dry_mix": 1.0,
  "latency_samples": 512,
  "supports_mono_main": true,
  "main_bus_channels": 1,
  "supports_sidechain": true,
  "sidechain_source": "self",
  "is_midi_out": false,
  "midi_output_id": "",
  "midi_output_name": "",
  "midi_channel": 0,
  "midi_output_advance_ms": 0.0,
  "midi_output_advance_samples": 0
}
```

**Returns (empty):** `{ "track_id": "...", "slot": 0, "loaded": false }`

`supports_sidechain` is `true` when the plug-in exposes an aux input bus that
TayPE can feed. `sidechain_source` is `""` for none, `"self"` for self-ducking,
or a non-bus track ID for an external key.

`supports_mono_main` tells you whether the plug-in exposes a mono main-bus
layout TayPE can use on mono strips. `main_bus_channels` is the live main-bus
width for that slot: `1` for true mono, `2` for stereo, or `0` for the
virtual `External MIDI Out` or `Hardware Insert`.

For Hardware Inserts, `is_hardware_io` is true and the response includes
`hardware_output_route_id`, `hardware_input_route_id`, and
`hardware_latency_offset_samples`, plus the popup fields
`hardware_input_trim_db`, `hardware_output_trim_db`,
`hardware_ag_measure_mode`, `hardware_color`, and
`hardware_recall_image_path`, `hardware_low_cut_hz`,
`hardware_high_cut_hz`, and `hardware_filter_position`. These are CoreAudio
I/O mapping route IDs, not TayPE bus routes. Mono and stereo endpoints are
both valid; the realtime hardware stage fans out or averages at the device
boundary to match the track strip width.

### `set_insert_sidechain`

Set or clear the sidechain source for an insert slot. Requires transport
stopped.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `track_id` | string | yes | Receiver track |
| `slot` | number | no | Insert slot index 0-7 (default: 0) |
| `sidechain_source` | string | no | `""` clears, `"self"` self-keys, any non-bus track ID selects that track |

**Returns:**
```json
{
  "track_id": "...",
  "slot": 0,
  "supports_sidechain": true,
  "sidechain_source": "track_2"
}
```

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
| `hardware_recall_image_path` | string | no | Optional recall photo path, or newline-separated paths, under `media/recall-images/`; empty clears all recall photos |
| `hardware_low_cut_hz` | number | no | Low-cut frequency in Hz, clamped to 20..1000; 20 disables low cut |
| `hardware_high_cut_hz` | number | no | High-cut frequency in Hz, clamped to 2000..20000; 20000 disables high cut |
| `hardware_filter_position` | string | no | `before` for send-side filtering or `after` for return-side filtering |

**Returns:** `{ "track_id": "...", "slot": 2, "hardware_output_route_id": "3-4", "hardware_input_route_id": "3-4", "hardware_latency_offset_samples": 64, "hardware_input_trim_db": 0.0, "hardware_output_trim_db": -1.5, "hardware_ag_measure_mode": 0, "hardware_color": "ff4fb3ff", "hardware_recall_image_path": "media/recall-images/guitar-pedal-a1b2c3d4e5f6.jpg", "hardware_low_cut_hz": 80.0, "hardware_high_cut_hz": 12000.0, "hardware_filter_position": "before", "latency_samples": 672 }`

**Requires:** transport stopped

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

Reinitialise the plugin sandbox host. If the process is alive, TayPE keeps
hosted plugins resident. When the audio format is unchanged it only rebuilds
sandbox workers so they rejoin the current audio device workgroup; sample-rate
or block-size changes still require plugin prepare. If it is dead, TayPE
launches a fresh sandbox and reloads live insert slots from cached state.
Requires transport stopped.

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
