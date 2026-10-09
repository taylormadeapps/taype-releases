# Tracks

### `get_tracks`

Return track IDs, names, states, routing, and selected/focused information.

Comp takes report `is_comp_take` and `parent_id` for the owning comp bus. Instrument-output destinations report `instrument_owner_track_id`. `fader_owner_track_id` is the strip that owns fader/pan for that row.

### `add_track`

Create a new track.

Common parameters include name, colour, track type, input, output, and whether the track should be selected. A track cannot be created under an archived bus.

### `set_track`

Update a track. This is the main track-editing tool and can set name, colour, mute, solo, archive, record arm, monitor, trim, preamp, filters, EQ, compressor, fader, pan, width, routing, send, and related strip state.

`archived: true` takes the track out of the mix completely and keeps everything about it for `archived: false`. An archived track never plays, keys a sidechain, solos or mutes another track, adds latency or runs a plug-in, and it does not count towards the 256-track limit. Unarchive is refused when the reel already has 256 live tracks. A new output, send or `comp_sidechain_source` naming an archived track is refused, and so is changing an archived track's `is_bus` or `comp_bus`; links you set before stay as they are and are silent. If unarchiving switched off hardware inserts whose inputs or outputs another track now uses, the response includes `hardware_inserts_switched_off`; if it set the track's hardware output to `"off"` because another track now uses that output, the response includes `output_set_off: true`. Archived tracks never block another track's `output_id` or hardware insert. An unarchived track's plug-ins load in the background: `get_reel_info` reports `graph_busy: true` until they have, and Undo in TayPE waits for them.

`output_id: "off"` gives the track no main output: it and its sends are heard nowhere, it still keys sidechains, it isn't a stem and the bounces refuse it, and `get_tracks` reports `output_id: "off"`. The master track and comp takes can't be set to Off. A track that goes into a bus set to Off is heard nowhere too.

`mute: true` or `monitor: false` on a bus also silences the sends of every track whose output reaches that bus, directly or through other buses; those tracks still play into the bus. With `monitor: false` the bus still plays its own clips through its own output and sends. A comping bus passes its takes whatever its `monitor`.

For a multi-output instrument route, set `input_id` to
`plugin-out:<source-track-id>:<output-bus-index>`. Bus index `0` is the
instrument owner's permanent main output and cannot be assigned. `get_tracks`
returns the canonical `input_id` plus `plugin_output_input` metadata containing
the source track ID, bus index, name, actual channel count, 1-based first
channel, availability, and a reason when unavailable. `instrument_outputs`
lists the same metadata for every declared auxiliary output, including outputs
that cannot currently be routed.

### `remove_track`

Remove a track when the edit is allowed. Use archive when you want to keep the material but hide it from the current working set.
