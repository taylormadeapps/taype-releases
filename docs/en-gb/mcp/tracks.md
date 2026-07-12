# Tracks

### `get_tracks`

Return track IDs, names, states, routing, and selected/focused information.

### `add_track`

Create a new track.

Common parameters include name, colour, track type, input, output, and whether the track should be selected.

### `set_track`

Update a track. This is the main track-editing tool and can set name, colour, mute, solo, archive, record arm, monitor, trim, preamp, filters, EQ, compressor, fader, pan, width, routing, send, and related strip state.

For a multi-output instrument route, set `input_id` to
`plugin-out:<source-track-id>:<output-bus-index>`. Bus index `0` is the
instrument owner's permanent main output and cannot be assigned. `get_tracks`
returns the canonical `input_id` plus `plugin_output_input` metadata containing
the source track ID, bus index, channel pair, and current availability.

### `remove_track`

Remove a track when the edit is allowed. Use archive when you want to keep the material but hide it from the current working set.
