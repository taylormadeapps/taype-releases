# Tracks

Tools for creating, configuring, and removing tracks.

---

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
      "tags": ["Vocals", "Lead Vocal"],
      "input_id": "1-2",
      "output_id": "master",
      "channel": {
        "volume": 1.0,
        "pan": 0.0,
        "width": 0.0,
        "width_band_mode": "off",
        "width_split_hz": 150.0,
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
| `archived` | boolean | no | Archive state (currently mutes track audio) |
| `volume` | number | no | 0.0 to 3.9810717 (0 dB default at 1.0; +12 dB max) |
| `pan` | number | no | -1.0 to +1.0 |
| `width` | number | no | -100.0 to +100.0 |
| `width_band_mode` | string | no | `off`, `high`, or `low`; default `off` |
| `width_split_hz` | number | no | Width split point from 40.0 to 12000.0 Hz; default 150.0 |
| `mute` | boolean | no | Mute state |
| `solo` | boolean | no | Solo state |
| `monitor` | boolean | no | Software monitoring (tracks: hear live input through the strip; buses: audition routed bus audio through the strip) |
| `is_bus` | boolean | no | Bus designation |
| `comp_bus` | boolean | no | Comp-bus designation (implies `is_bus`) |
| `input_id` | string | no | Input route: audio ("1", "1-2", etc.) or MIDI ("midi:all", "midi:virtual:keyboard", "midi:<device-id>") |
| `comp_input_id` | string | no | Shared visible input choice for a comp bus |
| `output_id` | string | no | Output target: "master", bus track ID, or `hardware:<stereo route>` for a direct hardware output |
| `sends` | array | no | Additional per-source fan-out routes to downstream buses only: `[{"target_id":"<bus>","level":0.0-4.0,"low_cut_hz":0.0-1000.0,"high_cut_hz":2000.0-20000.0,"delay_samples":0-48000}]`. `delay_ms` is also accepted and converted to samples. |
| `trim` | number | no | Input trim: -36.0 to +12.0 dB |
| `position` | number | no | 0-based display index (reorders track) |
| `tags` | array | no | Replace track tags with an array of tag strings |
| `preamp_enabled` | boolean | no | Enable/disable channel preamp |
| `preamp_drive` | number | no | Preamp drive: Modern/NAM/MD510 0.0 to 18.0 dB, ToTaype centred control -0.5 to +0.5 |
| `preamp_auto_gain` | boolean | no | Auto-gain compensation |
| `preamp_manual_gain` | number | no | Legacy alias for the unified preamp output gain: Modern/NAM/MD510 -18.0 to +12.0 dB, ToTaype centred control -0.5 to +0.5 |
| `preamp_hp_freq` | number | no | Saturation HP filter: 20.0 to 500.0 Hz |
| `preamp_lp_freq` | number | no | Saturation LP filter: 2000.0 to 20000.0 Hz |
| `preamp_safe` | boolean | no | 4x oversampling (eliminates aliasing at high drive) |

Volume, pan, width, width split, mute, solo, monitor, and preamp parameters take effect
immediately (safe during playback). Name, colour, archived, bus, input, and
output changes require transport to be stopped. Send target changes still need
stopped transport, but changing an existing send's `level`, `low_cut_hz`,
`high_cut_hz`, `delay_samples`, or `delay_ms` is safe during playback.
`preamp_manual_gain` now writes the same output-gain stage used by AG and NAM
output compensation, so manual trims and automatic trims stay in one lane.

Direct hardware output IDs use I/O mapping route IDs, for example
`hardware:3-4`. Direct outputs are stereo-only, cannot overlap the master
output pair, cannot overlap another direct output, and cannot overlap a
Hardware Insert send output. Sends remain bus-only.

Setting `is_bus: true` automatically sets the track's input to "none"
(buses receive from routed tracks, not the audio interface). The previous
input is stashed and restored when `is_bus` is later set to `false`, unless
an explicit `input_id` is provided in that same `set_track` call (explicit
input wins). Setting `is_bus: false` also clears any tracks whose
`output_id` or `sends` pointed at that track, preventing stale routes to
a non-bus.

`set_track` also normalizes `input_id` to track mode: instrument tracks
normalize non-MIDI routes to "midi:all" (except "none"), while non-instrument
tracks normalize MIDI routes ("midi:*") to default audio ("").

`comp_bus: true` turns the track into a comp bus without changing the
underlying routing model. Child takes are still ordinary tracks routed to
that bus. `comp_input_id` stores the group's shared visible input choice,
and child take tracks inherit that into their real `input_id` while their
own `input_id`, `monitor`, `output_id`, and `is_bus` fields stay locked.
Unlike a plain bus, a comp bus may host instrument inserts, so a MIDI/VSTi
track can enter comp mode without losing its synth.
The UI hides child-track arm and monitor controls while the track belongs to
the comp group, but low-level `record_start` calls can still target child
tracks to print them back onto the parent comp bus.

Compressor fields are also supported through `set_track`: `comp_enabled`,
`comp_threshold`, `comp_ratio`, `comp_attack_ms`, `comp_release_ms`,
`comp_knee`, `comp_makeup_gain`, `comp_wet_dry_mix`, `comp_detector`, `comp_release_mode`, `comp_log_release`, and
`comp_sidechain_low_cut` (fixed `80 Hz`, 12 dB/oct high-pass on the detector sidechain).
`comp_attack_ms` accepts **0.1-100 ms**.
`comp_knee` accepts **0-120 dB**.

Preamp fields also include `preamp_wet_dry_mix` from **0.0** dry to **1.0**
wet. Bypass and 0% wet ramp to the latency-aligned dry path without removing
the resident processor lane, so latent classic preamp lanes stay compensated
while the colour processor is skipped in steady state.

**Returns:** Updated track object.

### `remove_track`

Remove a track and all its clips.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | yes | Track ID |

**Returns:** `{ "removed": "track_2" }`

### Preamp XTALK

`set_track` accepts `preamp_cross_talk` from `0.0` to `1.0`; `preamp_crosstalk` is accepted as a legacy spelling alias. Missing values default to `0.0`. The value is squared in DSP and blends stereo channels toward unity `(L + R) / 2` before the preamp colour stage. Mono strips ignore it.
