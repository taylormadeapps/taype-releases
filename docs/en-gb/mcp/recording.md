# Recording

### `get_record_mode` / `set_record_mode`

Read or change the active record-stop behaviour.

### `get_loop_record_mode` / `set_loop_record_mode`

Read or change loop-record behaviour.

Accepted values are `auto_punch`, `loop`, `dub`, and `sooper_looper`. `dub`
plays each completed lap immediately during the next lap and commits all new
laps enabled as separate comp takes.

### `record_start`

Start recording armed tracks.

Provide `track_id` for a single track or `track_ids` for a multitrack start. If Automation View is enabled, `record_start` starts automation capture instead and track IDs are optional.

### `record_stop`

Stop the active recording pass using the selected record mode.

When automation capture is active, `record_stop` commits touched automation and returns the touched parameter count instead of clips.

### `inject_midi`

Inject MIDI into the live path for testing, virtual control, or assisted workflows.
