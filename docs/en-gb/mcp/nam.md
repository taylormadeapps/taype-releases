# NAM Console Engine

Tools for managing NAM preamp profiles, mix bus summing, and the TONE3000 library.

---

### `set_preamp_nam`

Load a NAM profile on a track's preamp. Requires transport stopped.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `track_id` | string | yes | Target track |
| `profile` | string | yes | NAM profile filename (e.g. "1073_Hot.nam") |
| `output_gain` | number | no | Post-NAM output gain in dB, -18.0 to +12.0 (default: 0.0) |

**Returns:** `{ "track_id": "...", "profile": "1073_Hot.nam", "tone_id": "abc123", "architecture": "WaveNet", "output_gain": 0.0 }`

Includes `tone_id` when the local NAM file carries TONE3000 metadata, plus a `cpu_warning` field for heavy architectures (WaveNet, ConvNet).

### `clear_preamp_nam`

Revert a track's preamp to clean gain mode.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `track_id` | string | yes | Target track |

**Returns:** `{ "track_id": "...", "preamp_mode": "clean" }`

### `list_nam_profiles`

List available NAM profiles from the local profiles directory.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `category` | string | no | "preamp" (default) or "summing" |

**Returns:**
```json
{
  "profiles": [
    { "filename": "1073_Hot.nam", "size_bytes": 2200000 }
  ],
  "directory": "/Users/.../Documents/TayPE/NAM/Preamps",
  "count": 1
}
```

### `set_mix_summing`

Load a NAM summing profile on the master bus. Requires transport stopped.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `profile` | string | yes | NAM profile filename |
| `drive` | number | no | Input drive in dB, 0.0 to +18.0 (default: 0.0) |
| `output_gain` | number | no | Output gain in dB, -18.0 to +12.0 (default: 0.0) |

**Returns:** `{ "enabled": true, "profile": "SSL_4000G.nam", "tone_id": "abc123", "architecture": "LSTM", "drive": 6.0, "output_gain": 0.0 }`

### `get_mix_summing`

Get the current NAM summing state on the master bus.

**Returns:** `{ "enabled": true, "profile": "SSL_4000G.nam", "tone_id": "abc123", "drive": 6.0, "output_gain": 0.0 }` (or `{ "enabled": false }` when off)

### `get_true_summing`

Get the current global `SUM` preference state.

**Returns:** `{ "enabled": false }`

### `set_true_summing`

Enable or disable the global `SUM` preference. Requires transport stopped.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `enabled` | boolean | yes | `true` enables the true-summing path, `false` disables it |

**Returns:** `{ "status": "ok", "enabled": true }`

### `clear_mix_summing`

Disable NAM summing, revert to digital sum. Requires transport stopped.

**Returns:** `{ "enabled": false }`

### `search_tone3000`

Search the TONE3000 online library for NAM packages.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `query` | string | yes | Search query |
| `sort` | string | no | "trending", "newest", "oldest". Omit for default (relevance). |
| `category` | string | no | "all", "amp", "pedal", "full-rig", "ir", "outboard" |
| `page` | number | no | Page number (default: 1) |

**Returns:** Array of package results with id, name, creator, gear, `thumbnail_url`, download count, package-level `architecture` / `amx_eligible`, and a full `models` list.

### `list_local_profiles`

List local NAM packages grouped by tone/package identity.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `category` | string | no | "preamp" (default) or "summing" |
| `track_id` | string | no | For `preamp`, marks which local model is loaded on that track |

**Returns:** Array of local packages. Each package includes package metadata, favourite state, and a `models` array with filenames, paths, architectures, and an optional `loaded` flag.

### `download_tone3000`

Download a full NAM package from TONE3000 to the local profiles directory.
All models inside the package are fetched and a package sidecar is written so
later local loads keep the model identity intact.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `tone_id` | string | yes | TONE3000 tone ID (from search results) |
| `category` | string | no | "preamp" (default) or "summing" |

**Returns:** Package-level download metadata including `downloaded_count`, `package_sidecar`, and a `files` array describing every local `.nam` file written for the package.
