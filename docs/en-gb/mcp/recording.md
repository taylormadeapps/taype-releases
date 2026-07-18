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

Finalise the active recording pass. This is the low-level MCP take lifecycle,
not the transport record-button macro.

The first audio call takes no parameters. Its response includes:

- `recording_kind`: `audio` or `automation`
- `status`: `pending`, `failed`, `recovery_required`, `completed`, or
  `discarded`
- `generation`: the audio take's positive continuation ID
- `retryable`: whether automatic continuation is allowed
- `recovery_can_retry`: whether an explicit recovery retry is safe
- `recovery_can_discard`: whether an explicit destructive discard is safe
- `transport_disposition`: `not_owned`, `pending`, `applied`, or `failed`
- `error`: a stable finalisation error name
- `clips`: committed clip details when complete

`transport_disposition` reports the post-settlement transport action separately
from take settlement. `not_owned` means a completion callback or late observer
owns that action. `pending` means recording or a manager-owned transport action
has not settled. `applied` means the requested manager policy was satisfied.
`failed` means the take reached terminal `completed` or `discarded`, but its
requested transport action could not be completed; it does not make the take
active or change its terminal status.

If an audio response is `pending`, or is `failed` with `retryable: true`, call
`record_stop` again with the returned generation:

```json
{ "generation": 42 }
```

`status: "failed"` is always retained, retryable, and non-terminal. Only
`completed` and `discarded` are terminal.

If the response is `recovery_required`, stop polling even though the take is
still active. It always reports `retryable: false` so an automated client
cannot accidentally loop or destroy media. Present the available recovery
choices to the operator, then use the same generation with an explicitly
chosen action:

```json
{ "generation": 42, "recovery_action": "retry" }
```

```json
{ "generation": 42, "recovery_action": "discard" }
```

Only offer an action when its matching `recovery_can_*` field is true. Discard
is permanent and requires an explicit operator decision. A successful discard
returns terminal `status: "discarded"`; it is not reported as a completed take.
The `recording` field becomes `false` only for terminal `completed` or
`discarded`.

Terminal results can be queried again by generation for a bounded period,
which lets a client recover a lost final response. Repeating a retry or discard
after settlement returns that immutable recording receipt and its bounded
typed transport-disposition sidecar instead of running the action twice. The
sidecar may settle from `pending` to `applied` or `failed`; it never rewrites
the terminal take result. Poll promptly; old generations eventually expire
from that receipt cache. A retained `recovery_required` generation is not a
receipt and continues to block another recording until it is resolved. Live
stop, poll, retry, and discard mutations are rejected during an explicit MCP
transaction, but a generation lookup which finds an immutable terminal receipt
remains read-only and is still returned.

When automation capture is active, `record_stop` commits touched automation
synchronously and returns `status: "completed"`, `generation: 0`, and the
touched parameter count instead of clips.

### `inject_midi`

Inject MIDI into the live path for testing, virtual control, or assisted workflows.
