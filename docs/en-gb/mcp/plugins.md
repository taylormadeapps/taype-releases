# Plugins

Plugin tools manage VST3 inserts, TayPE stock processors, hardware inserts, MIDI Out, sidechains, presets, and plugin editor windows.

### `list_plugins`

Return the scanned plugin catalogue plus bundled TayPE stock entries such as **Taype Rooms**, **Ache-Delay**, **T-Clipper**, **Taype Drive**, **Taype EQ**, and **Taype Comp**. Plug-ins that advertise ARA2 are not listed as normal inserts because they open from clips through TayPE's selected ARA2 provider workflow.

### `list_midi_outputs`

List available Core MIDI output destinations for the MIDI Out insert.

### `add_insert`

Load a plugin into an insert slot.

Important parameters:

| Param | Description |
|---|---|
| `track_id` | Target track |
| `plugin_id` | Plugin ID, path, bundled stock name, hardware insert URI, or MIDI Out URI |
| `slot` | Insert slot index, 0-7 |
| `device_id` | MIDI Out destination |
| `channel` | MIDI Out channel, or 0 to keep source channel |
| `advance_ms` | MIDI Out early-send timing |
| `output_route_id` / `input_route_id` | Hardware Insert send and return routes |
| `latency_offset_samples` | Extra hardware compensation |
| `hardware_input_trim_db` / `hardware_output_trim_db` | Hardware send and return trims |
| `hardware_low_cut_hz` / `hardware_high_cut_hz` | Hardware Insert filters |
| `hardware_filter_position` | Whether hardware filters sit before send or after return |

### `remove_insert`

Unload an insert slot.

### `bypass_insert`

Bypass an insert while keeping latency-aligned dry audio.

### `set_insert_wet_dry_mix`

Set the wet/dry blend for an insert. `0.0` is dry, `1.0` is wet. This can be changed while playing and TayPE ramps the change.

Required parameters:

| Param | Description |
|---|---|
| `track_id` | Target track |
| `wet_dry_mix` | Blend from `0.0` to `1.0` |

Optional parameters:

| Param | Description |
|---|---|
| `slot` | Insert slot index, 0-7 |

### `disable_insert` / `enable_insert`

Disable removes an insert from processing while keeping its assignment and state. Enable restores it to the graph.

### `get_insert_info`

Read one insert slot's assignment, bypass, enabled state, latency, editor state, hardware settings, MIDI Out settings, and sidechain information.
The `editor_open` field becomes false when the window closes, One-window mode
replaces it, or the plug-in sandbox exits.

### `list_insert_presets` / `load_insert_preset`

List and load presets for the insert.

### `open_insert_editor` / `close_insert_editor`

Open or close the plugin editor window.

### `restart_sandbox`

Restart the sandbox for a plugin that has become unhealthy.

### `set_insert_hardware_io`

Update Hardware Insert routing, trim, latency, filtering, colour, and recall image settings.

### `set_insert_sidechain`

Set or clear the sidechain source for one insert slot. Use `self` for self-keying, a source track ID for external keying, or an empty string to clear. Requires stopped transport.

Required parameters:

| Param | Description |
|---|---|
| `track_id` | Target track |

Optional parameters:

| Param | Description |
|---|---|
| `slot` | Insert slot index, 0-7 |
| `sidechain_source` | `self`, source track ID, or empty string |

### `set_insert_midi_output`

Configure the device and channel for a MIDI Out insert. Requires stopped transport.

Required parameters:

| Param | Description |
|---|---|
| `track_id` | Target track |

Optional parameters:

| Param | Description |
|---|---|
| `slot` | Insert slot index |
| `device_id` | Core MIDI output destination |
| `channel` | MIDI channel, or `0` to keep source channels |
| `advance_ms` | Early-send timing compensation |

## Sidechains

Sidechain-capable plugins can receive eligible source taps. Use insert info and `set_insert_sidechain` to inspect and set sidechain state. TayPE validates sidechain choices so a plugin cannot be fed by an invalid or unsafe source.
