# Reel Management

Tools for managing TayPE reel bundles, checkpoints, and archive packaging.

---

### `save_reel`

Persist the current reel's working state immediately if it changed.

If `name` is omitted, questo is a plain save. If `name` is provided and differs
da the current reel name, TayPE duplicates the current reel to a new
`.taype` bundle and switches to it. Passing the current reel name behaves like
plain save. If no reel is loaded, `name` is required and TayPE creates a new
empty reel con che name.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | no | New reel name for duplicate-and-switch |

**Returns:** `{ "saved": true, "reel": "MyReel" }`

### `open_reel`

Apri an existing reel by name. TayPE persists the current reel's working state
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
  "loaded": true,
  "name": "Default",
  "directory": "/Users/.../Reels/Default.taype",
  "bundle_path": "/Users/.../Reels/Default.taype",
  "reel_file": "/Users/.../Reels/Default.taype/reel.xml",
  "sample_rate": 44100,
  "device_sr_matched": true,
  "schema_version": 1,
  "checkpoint_count": 3,
  "current_branch": "main"
}
```

When no reel is loaded, `loaded` is `false` and the reel-specific path/name
fields are empty strings.

### `close_reel`

Unload the current reel and leave TayPE in a no-reel state. TayPE flushes the
working state first if needed.

**Returns:** `{ "closed": true, "had_reel": true }`

**Requires:** transport stopped

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

Crea an intentional checkpoint in the current reel history. TayPE flushes
working state first if needed.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | no | Visualizzazione name for the checkpoint |

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

### `list_reel_history`

List reel history. TayPE returns a compatibility `history` view for the
current branch, a branch-aware `history_tree` for the visible commit tree,
and a chronological `history_graph` for the Reel Browser's vertical graph view.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `include_timed_saves` | bool | no | When true, include autosave/timed-save commits |

**Returns:** `{ "history": [...], "history_tree": [...], "history_graph": [{"lane":0,"parent_lane":-1,"parent_revision":"","current_lane":true}], "include_timed_saves": false, "current_branch": "main" }`

con `include_timed_saves: false`, TayPE keeps the current state and tagged
history anchors only. Plain autosaves stay hidden unless they were tagged as a
branch origin when you restored da them.

### `revert_to_checkpoint`

Revert the current reel working state to a checkpoint chosen by `id` or
`name`.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | no | Checkpoint ID |
| `name` | string | no | Checkpoint display name |

**Returns:** `{ "reverted": true, "reel": "MyReel", "current_branch": "history/before-comp-20260308-113000" }`

**Requires:** transport stopped

### `restore_reel_history`

Restore a historical revision chosen by commit SHA. TayPE preserves the
current line if needed, creates a new history branch da the selected
revision, and commits the restored state there.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `revision` | string | yes | Commit SHA to branch da and restore |

**Returns:** `{ "restored": true, "revision": "abc123...", "reel": "MyReel", "current_branch": "history/rough-mix-20260308-113412" }`

**Requires:** transport stopped

### `delete_checkpoint`

Elimina a checkpoint tag and its index entry.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | no | Checkpoint ID |
| `name` | string | no | Checkpoint display name |

**Returns:** `{ "deleted": true }`

**Requires:** transport stopped

## Pack / Thin

### `pack_reel`

Crea a `.tpak` archive of the current reel.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `destination` | string | no | Output archive path; defaults beside the bundle |
| `thin` | bool | no | `true` for thin pack, `false` for full pack |

**Returns:** `{ "packed": true, "path": "/path/to/MyReel.tpak", "thin": false }`

**Requires:** transport stopped

### `unpack_reel`

Unpack a `.tpak` archive in a `.taype` bundle and open the unpacked reel.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `path` | string | yes | Path to the `.tpak` archive |
| `destination` | string | no | Target `.taype` bundle path; defaults to a unique name in the default reels directory |

**Returns:** `{ "unpacked": true, "bundle_path": "/path/to/MyReel.taype" }`

**Requires:** transport stopped

### `preview_thin_reel`

Preview a clean-slate thin export of the current reel.

**Returns:**
```json
{
  "kept_media": ["media/current.wav"],
  "discarded_media": ["media/old-take.wav"],
  "source_unchanged": true,
  "history_reset": true
}
```

### `thin_reel`

Crea a new clean-slate `.taype` bundle da the current working state,
reset its history to a fresh repo, and open it. The source reel stays
untouched.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `destination` | string | no | Target `.taype` bundle path; defaults to `{Current Name} Thinned.taype` beside the current reel |

**Returns:** `{ "thinned": true, "bundle_path": "/path/to/My Reel Thinned.taype", "discarded_count": 4, "history_reset": true, "source_unchanged": true }`

**Requires:** transport stopped

### `reveal_reel`

Reveal the current reel bundle in Finder.

**Returns:** `{ "revealed": true, "path": "/Users/.../Bobine/MyReel.taype" }`
