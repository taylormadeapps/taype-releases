# Plugins

Plugin tools manage VST3 inserts, TayPE stock processors, hardware inserts, MIDI Out, sidechains, presets, and plugin editor windows.

### `list_plugins`

Return the scanned plugin catalogue plus bundled TayPE stock entries such as **Taype Rooms**, **Ache-Delay**, **T-Clipper**, **Taype Drive**, **Taype EQ**, and **Taype Comp**. ARA-only plug-ins (SpectraLayers, WaveLab, and others marked OnlyARA) are not listed as normal inserts because they open from clips through TayPE's selected ARA2 provider workflow. Dual-mode ARA2 effects such as Melodyne stay in this list and load as ordinary non-ARA inserts.

An entry with `timedOutOnScan` is **Needs Attention**: its scan was skipped. A plug-in TayPE never read has `uid` 0 and its bundle's file name; one it read before keeps that `uid` and name. It can still be inserted, and its first load, in the plug-in sandbox, records its real name, vendor, category and `uid` and drops `timedOutOnScan`.

### `list_midi_outputs`

List available Core MIDI output destinations for the MIDI Out insert, and in
`plugins` every audio-effect plug-in with a MIDI input that a MIDI Out can play
(`track_id`, `track_name`, `slot`, `plugin_name`).

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
| `audio_input_route_id` | MIDI Out Audio Return; mapped/default mono or stereo input, or empty for None |
| `feedback_protection` | MIDI Out live-input protection: `off`, `playing_synth`, or `playing_controller` |
| `output_route_id` / `input_route_id` | Hardware Insert send and return routes |
| `latency_offset_samples` | Extra hardware compensation |
| `hardware_input_trim_db` / `hardware_output_trim_db` | Hardware send and return trims |
| `hardware_low_cut_hz` / `hardware_high_cut_hz` | Hardware Insert filters |
| `hardware_filter_position` | Whether hardware filters sit before send or after return |

Instruments go at the front of the rack: an instrument can go in any slot with
only instruments or empty slots before it, effects and Hardware Inserts go
after the last instrument, and MIDI Out goes only in slot 0 of a track with
no instrument. A load that would break this is refused, for example
`"Instruments go before any effect in the insert rack."`, and so is a load
into a slot whose plug-in is still loading.

### `remove_insert`

Unload an insert slot.

### `bypass_insert`

Bypass an insert while keeping latency-aligned dry audio. A bypassed
instrument adds no audio and passes the MIDI it receives on unchanged.

### `set_insert_wet_dry_mix`

Set the wet/dry blend of an effect or Hardware Insert, or the trim and MIDI
from of an instrument. Send at least one of `wet_dry_mix`,
`instrument_trim_db` and `midi_from`. All three can be changed while
playing: TayPE ramps wet/dry and trim changes, and a MIDI from change ends
the notes the instrument was playing from its old source.

`wet_dry_mix` `0.0` is dry and `1.0` is wet. `instrument_trim_db` is the
instrument's level in the mix of the track's instruments, from -144 to
+12 dB; a value outside that is clamped, and the reply gives the stored
value. `midi_from` is `previous_plugin` (the default: the MIDI as the plug-in
before it passes it on) or `track_input` (the MIDI as it came into the
track).

Each field is refused on a slot that does not have it: instruments have no
wet/dry, since their level is the trim; MIDI Out has none of the three; and
only instruments have a trim and MIDI from. TayPE checks every field before
changing anything, so a call with one refused field changes nothing. A trim
is also refused while a MIDI clip render is using the instrument. A disabled
instrument stores the values and uses them when it is enabled again.

Required parameters:

| Param | Description |
|---|---|
| `track_id` | Target track |

Optional parameters:

| Param | Description |
|---|---|
| `slot` | Insert slot index, 0-7 |
| `wet_dry_mix` | Blend from `0.0` to `1.0`. Effects and Hardware Inserts |
| `instrument_trim_db` | Trim in dB, -144 to +12. Instruments |
| `midi_from` | `previous_plugin` or `track_input`. Instruments |

Example: `{ "track_id": "...", "slot": 1, "instrument_trim_db": -6.0, "midi_from": "track_input" }`

### `disable_insert` / `enable_insert`

Disable removes an insert from processing and PDC while keeping its hosted
instance, editor, assignment, and runtime state resident. Enable reuses that
instance. Both operations are available during playback; recording and print
capture remain protected.

### `get_insert_info`

Read one insert slot's assignment, bypass, enabled state, latency, editor state, hardware settings, MIDI Out settings, and sidechain information. MIDI Out reports the Audio Return ID/name, whether it is assigned and currently available, `feedback_protection` (`off`, `playing_synth`, or `playing_controller`), plus `midi_render_mode` (`realtime_audio_return_capture` or `offline_audio_passthrough`). A MIDI Out also reports its plug-in destination fields, as `set_insert_midi_output` returns them, and `plugin_destination_held_notes`: the notes it has sent that plug-in and not yet released. Any plug-in reports `has_midi_input`, `true` when it takes MIDI of its own, and `has_midi_output`, `true` when it sends MIDI of its own, such as a pattern generator. `is_instrument` is `true` for an instrument slot. An instrument also reports its `instrument_trim_db` and `midi_from`.
The `editor_open` field becomes false when the window closes, One-window mode
replaces it, or the plug-in sandbox exits.
`stopped_until_reload` is true while the plug-in is stopped until it is
reloaded or removed, and `stop_cause` says why: `buffer_size_change` (a buffer
size or sample rate change could not be applied to it) or `sidechain_change` (a
sidechain change could not be undone) or `midi_render_restore_failed` (an
instrument could not return to live playing after a MIDI clip render; until it
is reloaded, every instrument on its track is silent). Otherwise `stop_cause`
is empty. MIDI
Out and Hardware Inserts always report `false`.
`insert_loading` is true while a plug-in is still loading into the slot,
including one replacing a MIDI Out or Hardware Insert, which the other
fields still describe until it lands. Edits that would change that slot
are refused until the load finishes.

Optional parameters:

| Param | Description |
|---|---|
| `include_state` | Include the live plug-in state chunk |
| `include_parameters` | List automatable parameters with distinct value fields |
| `evaluate_at` | Seconds used for `evaluated_value`. Default is the playhead |

When `include_parameters` is true and the catalogue is ready, each parameter reports `default_value`, `base_value` (stored/static, what automation releases to), `evaluated_value` (lane value at `evaluate_at`), and `host_applied_value` (latest value TayPE published to the runtime). `current_value` is a deprecated alias of `base_value`.

### `set_insert_parameter`

Set one insert's stored/static plug-in parameter by stable id. This writes the base value. It does not create or rewrite an automation lane; use the structured plug-in target returned by `list_automation_targets` with `set_automation_points` for that.

Required parameters:

| Param | Description |
|---|---|
| `track_id` | Target track |
| `parameter` | Stable parameter id from `get_insert_info` with `include_parameters` |
| `value` | Normalised value 0.0–1.0 |

Optional parameters:

| Param | Description |
|---|---|
| `slot` | Insert slot index, 0-7 |

Safe during playback.

The value reaches the plug-in the next time it processes. From then on TayPE
treats the plug-in as changed, as it does after an edit in the plug-in's own
window: `get_insert_info` reports `state_dirty: true`, the next timed save
stores it, and Restart Plugin Sandbox keeps it. A value the plug-in has not
processed yet is not saved and does not survive a restart.

### `list_insert_presets` / `load_insert_preset`

List and load presets for the insert.

### `open_insert_editor` / `close_insert_editor`

Open or close the plugin editor window. `open_insert_editor` starts the open
and returns immediately with `editor_open` and `editor_opening`; it does not
wait for the native window. Poll `get_insert_info` until the window is open.
A plug-in stopped until reload has no editor to open, so `open_insert_editor`
fails with `plugin_stopped_until_reload`.

### `restart_sandbox`

Restart the plugin sandbox. Always rebuilds the full assigned plugin set on a
new helper, including disabled assigned plugins. A connected helper is not a
shortcut that skips reload.

Returns `result`: `complete`, `complete_with_exclusions`, `failed`, or
`refused`. `success` is true only for `complete`.

### `set_insert_hardware_io`

Update Hardware Insert routing, trim, latency, filtering, colour, and recall image settings.

### `set_insert_sidechain`

Set or clear the sidechain source for one insert slot. Use `self` for self-keying, a source track ID for external keying, or an empty string to clear. Requires stopped transport. A newly chosen source that is archived is refused; a source archived after you chose it stays set and keys silence until it is unarchived.

Required parameters:

| Param | Description |
|---|---|
| `track_id` | Target track |

Optional parameters:

| Param | Description |
|---|---|
| `slot` | Insert slot index, 0-7 |
| `sidechain_source` | `self`, source track ID, or empty string |

A source the plugin refuses is still saved. The call succeeds and reports `sidechain_available: false` with the reason in `sidechain_unavailable_reason`.

### `set_insert_midi_output`

Configure the device, channel, timing, Audio Return, and live MIDI feedback
protection for a MIDI Out insert.
Requires stopped transport and no pending MIDI clip render. A refused edit
leaves the saved route unchanged.

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
| `audio_input_route_id` | Audio Return route; empty clears to None, omission retains it |
| `feedback_protection` | `off`, `playing_synth`, or `playing_controller`; omission retains it |
| `plugin_track_id` | Instead of a device: the track of an audio-effect plug-in with a MIDI input, on another track |
| `plugin_slot` | That plug-in's insert slot, with `plugin_track_id` |

A device and a plug-in are never both set. Choosing a plug-in clears the
device, Audio Return, feedback protection and timing, which are refused
alongside it. The result reports `plugin_destination_track_id`,
`plugin_destination_slot`, `plugin_destination_name` and
`plugin_destination_state` (`none`, `available`, `disabled`, `archived` or
`unavailable`).

## Sidechains

Sidechain-capable plugins can receive eligible source taps. Use insert info and `set_insert_sidechain` to inspect and set sidechain state. TayPE validates sidechain choices so a plugin cannot be fed by an invalid or unsafe source.

`sidechain_available` is `false` when a chosen source does not reach the plugin, and `sidechain_unavailable_reason` says why: the plug-in refused its sidechain input, the sidechain could not be connected, the plug-in is not loaded, or it has no sidechain input. The choice stays saved, and the plugin window's **Sidechain** selector shows the same reason.
