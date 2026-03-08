# Reel Management

Tools for managing TayPE reel bundles, checkpoints, and archive packaging.

---

### `save_reel`

Persist the current reel's working state immediately if it changed.

If `name` is omitted, this is a plain save. If `name` is provided and differs
from the current reel name, TayPE duplicates the current reel to a new
`.taype` bundle and switches to it. Passing the current reel name behaves like
plain save.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | no | New reel name for duplicate-and-switch |

**Returns:** `{ "saved": true, "reel": "MyReel" }`

### `open_reel`

Open an existing reel by name. TayPE persists the current reel's working state
before switching.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | yes | Reel name to open |

**Returns:** `{ "opened": true, "reel": "MyReel" }`

### `list_reels`

List all available reel names.

**Returns:** `{ "reels": ["Default", "MyReel", "Demo"] }`

### `get_reel_info`

Get info about the currently loaded reel.

**Returns:**
```json
{
  "name": "Default",
  "directory": "/Users/.../Reels/Default.taype",
  "bundle_path": "/Users/.../Reels/Default.taype",
  "reel_file": "/Users/.../Reels/Default.taype/reel.xml",
  "sample_rate": 44100,
  "device_sr_matched": true,
  "schema_version": 1,
  "checkpoint_count": 3
}
```

### `duplicate_reel`

Duplicate the current reel to a new `.taype` bundle and switch to it.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | yes | New reel name |

**Returns:** `{ "duplicated": true, "reel": "Alt Mix" }`

**Requires:** transport stopped

### `rename_reel`

Rename the current reel bundle. The bundle filename is the canonical reel
name.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | yes | New reel name |

**Returns:** `{ "renamed": true, "reel": "Final Vox" }`

**Requires:** transport stopped

## Checkpoints

### `create_checkpoint`

Create an intentional checkpoint in the current reel history. TayPE flushes
working state first if needed.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | no | Display name for the checkpoint |

**Requires:** transport stopped

### `list_checkpoints`

List checkpoints for the current reel.

**Returns:**
```json
{
  "checkpoints": [
    {
      "id": "cp_1",
      "name": "Before comp",
      "git_tag": "checkpoint/cp_1",
      "git_commit": "abc123...",
      "created_at_utc": "2026-03-07T14:30:00Z",
      "automatic": false
    }
  ]
}
```

### `revert_to_checkpoint`

Revert the current reel working state to a checkpoint chosen by `id` or
`name`.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | no | Checkpoint ID |
| `name` | string | no | Checkpoint display name |

**Returns:** `{ "reverted": true, "reel": "MyReel" }`

**Requires:** transport stopped

### `delete_checkpoint`

Delete a checkpoint tag and its index entry.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | no | Checkpoint ID |
| `name` | string | no | Checkpoint display name |

**Returns:** `{ "deleted": true }`

**Requires:** transport stopped

## Pack / Thin

### `pack_reel`

Create a `.tpak` archive of the current reel.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `destination` | string | no | Output archive path; defaults beside the bundle |
| `thin` | bool | no | `true` for thin pack, `false` for full pack |

**Returns:** `{ "packed": true, "path": "/path/to/MyReel.tpak", "thin": false }`

**Requires:** transport stopped

### `unpack_reel`

Unpack a `.tpak` archive into a `.taype` bundle and open the unpacked reel.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `path` | string | yes | Path to the `.tpak` archive |
| `destination` | string | no | Target `.taype` bundle path; defaults to a unique name in the default reels directory |

**Returns:** `{ "unpacked": true, "bundle_path": "/path/to/MyReel.taype" }`

**Requires:** transport stopped

### `preview_thin_reel`

Preview which bundle-owned media would be removed by a thin operation.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `protectCheckpoints` | bool | no | When true, preserve media reachable from checkpoints |

**Returns:**
```json
{
  "removable_media": ["media/a1b2.wav"],
  "protected_media": ["media/c3d4.wav"]
}
```

### `thin_reel`

Delete unreachable bundle-owned media from the current reel.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `protectCheckpoints` | bool | no | When true, preserve media reachable from checkpoints |

**Returns:** `{ "thinned": true, "removed_count": 4 }`

**Requires:** transport stopped

### `reveal_reel`

Reveal the current reel bundle in Finder.

**Returns:** `{ "revealed": true, "path": "/Users/.../Reels/MyReel.taype" }`
