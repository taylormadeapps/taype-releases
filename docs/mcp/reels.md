# Reel Management

Tools for managing TayPE's reel (session) files.

---

### `save_reel`

Save the current reel. If `name` is provided, performs Save As.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | no | New reel name (triggers Save As) |

**Returns:** `{ "name": "MyReel", "directory": "/path/to/reel" }`

### `open_reel`

Open an existing reel by name. Saves the current reel first.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | yes | Reel name to open |

**Returns:** `{ "name": "MyReel", "directory": "/path/to/reel" }`

### `list_reels`

List all available reel names.

**Returns:** `{ "reels": ["Default", "MyReel", "Demo"] }`

### `get_reel_info`

Get info about the currently loaded reel.

**Returns:**
```json
{
  "name": "Default",
  "directory": "/Users/.../Reels/Default",
  "sample_rate": 44100,
  "device_sr_matched": true
}
```
