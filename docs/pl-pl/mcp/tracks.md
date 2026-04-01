# Ścieżki

Narzędzia for creating, configuring, and removing tracks.

---

### `get_tracks`

List all tracks with their channel settings.

**Returns:**
```json
{
  "tracks": [
    {
      "id": "track_1",
      "name": "Ścieżka 1",
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
        "mute": false,
        "solo": false,
        "trim": 0.0
      }
    }
  ]
}
```

### `add_track`

Dodaj a new audio track.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | no | Ścieżka name (default: "Ścieżka N") |
| `color` | string | no | Colour hex string |

**Returns:** `{ "id": "track_2", "name": "Vocals" }`

### `set_track`

Update a track's properties. Only provided fields are changed.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | yes | Ścieżka ID |
| `name` | string | no | Nowy name |
| `color` | string | no | Nowy colour |
| `archived` | boolean | no | Archiwum state (currently mutes track audio) |
| `volume` | number | no | 0.0 to 3.9810717 (0 dB default at 1.0; +12 dB max) |
| `pan` | number | no | -1.0 to +1.0 |
| `mute` | boolean | no | Wycisz state |
| `solo` | boolean | no | Solo state |
| `monitor` | boolean | no | Software monitoring (tracks: hear input through chain; buses: summing toggle) |
| `is_bus` | boolean | no | Szyna designation |
| `input_id` | string | no | Wejście route: audio ("1", "1-2", etc.) or MIDI ("midi:all", "midi:virtual:keyboard", "midi:<device-id>") |
| `output_id` | string | no | Wyjście target: "master" or bus track ID |
| `sends` | array | no | Additional fan-out routes: `[{"target_id":"<bus-or-master>","level":0.0-4.0}]` |
| `trim` | number | no | Wejście trim: -36.0 to +12.0 dB |
| `position` | number | no | 0-based display index (reorders track) |
| `tags` | array | no | Replace track tags with an array of tag strings |
| `preamp_enabled` | boolean | no | Włącz/disable channel preamp |
| `preamp_drive` | number | no | Przedwzmacniacz drive: 0.0 to 36.0 dB |
| `preamp_auto_gain` | boolean | no | Auto-gain compensation |
| `preamp_manual_gain` | number | no | Manual output gain: -36.0 to +12.0 dB |
| `preamp_hp_freq` | number | no | Saturation HP filter: 20.0 to 500.0 Hz |
| `preamp_lp_freq` | number | no | Saturation LP filter: 2000.0 to 20000.0 Hz |
| `preamp_safe` | boolean | no | 4x oversampling (eliminates aliasing at high drive) |

Głośność, pan, mute, solo, monitor, and preamp parameters take effect
immediately (safe during playback). Name, colour, archived, bus, input,
output, and send changes require transport to be stopped.

Setting `is_bus: true` automatically sets the track's input to "none"
(buses receive from routed tracks, not the audio interface). The previous
input is stashed and restored when `is_bus` is later set to `false`, unless
an explicit `input_id` is provided in that same `set_track` call (explicit
input wins). Setting `is_bus: false` also clears any tracks whose
`output_id` or `sends` pointed at that track, preventing stale routes to
a non-bus.

`comp_bus: true` turns the track into a comp bus without changing the
underlying routing model. Child takes are still ordinary tracks routed to
that bus. `comp_input_id` stores the group's shared visible input choice,
and child take tracks inherit that into their real `input_id` while their
own `input_id`, `monitor`, `output_id`, and `is_bus` fields stay locked.
Unlike a plain bus, a comp bus may host instrument inserts, so a MIDI/VSTi
track can enter comp mode without losing its synth.

`set_track` also normalizes `input_id` to track mode: instrument tracks
normalize non-MIDI routes to "midi:all" (except "none"), while non-instrument
tracks normalize MIDI routes ("midi:*") to default audio ("").

Kompresor fields are also supported through `set_track`: `comp_enabled`,
`comp_threshold`, `comp_ratio`, `comp_attack_ms`, `comp_release_ms`,
`comp_knee`, `comp_makeup_gain`, `comp_log_release`, and
`comp_sidechain_low_cut` (fixed `80 Hz` high-pass on the detector sidechain).
`comp_attack_ms` accepts **0.1–100 ms**.
`comp_knee` accepts **0–120 dB**.

**Returns:** Updated track object.

### `remove_track`

Usuń a track and all its clips.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | yes | Ścieżka ID |

**Returns:** `{ "removed": "track_2" }`
