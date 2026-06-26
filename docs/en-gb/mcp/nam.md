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
  "directory": "/Users/.../Documents/Taype/NAM/Preamps",
  "count": 1
}
```

### `set_mix_summing`

Configure master summing. Requires transport stopped.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `mode` | string | no | `clean`, `classic`, `totaype`, `nam`, or `md510` |
| `profile` | string | NAM only | NAM profile filename |
| `drive` | number | no | Input drive: Modern/NAM/MD510 0.0 to +18.0 dB; ToTaype centred control -0.5 to +0.5 |
| `output_gain` | number | no | Output gain: Modern/NAM/MD510 -18.0 to +12.0 dB; ToTaype centred control -0.5 to +0.5 |

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

Search the TONE3000 online library for A2 NAM packages. TayPE includes the
normal TONE3000 publishable key for OAuth PKCE and opens the browser sign-in
flow if the cached OAuth token is missing or invalid.

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

### Summing XTALK

`set_mix_summing` accepts `cross_talk` from `0.0` to `1.0`. Missing values default to `0.0`. The value is squared in DSP and blends stereo channels toward unity `(L + R) / 2`. With True Summing off, it blends the post-digital-sum stereo path before the master summing colour stage. With True Summing on, it blends each queued stereo feeder pair before Classic, ToTaype, NAM, or MD510 true-summing processing.
