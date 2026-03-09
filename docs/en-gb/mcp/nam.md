# NAM Console Engine

Tools for managing NAM preamp profiles, mix bus summing, and the TONE3000 library.

---

### `set_preamp_nam`

Load a NAM profile on a track's preamp. Requires transport stopped.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `track_id` | string | yes | Target track |
| `profile` | string | yes | NAM profile filename (e.g. "1073_Hot.nam") |
| `output_gain` | number | no | Post-NAM output gain in dB (default: 0.0) |

**Returns:** `{ "track_id": "...", "profile": "1073_Hot.nam", "architecture": "WaveNet", "output_gain": 0.0 }`

Includes a `cpu_warning` field for heavy architectures (WaveNet, ConvNet).

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
| `drive` | number | no | Input drive in dB (default: 0.0) |
| `output_gain` | number | no | Output gain in dB (default: 0.0) |

**Returns:** `{ "enabled": true, "profile": "SSL_4000G.nam", "architecture": "LSTM", "drive": 6.0, "output_gain": 0.0 }`

### `get_mix_summing`

Get the current NAM summing state on the master bus.

**Returns:** `{ "enabled": true, "profile": "SSL_4000G.nam", "drive": 6.0, "output_gain": 0.0 }` (or `{ "enabled": false }` when off)

### `clear_mix_summing`

Disable NAM summing, revert to digital sum. Requires transport stopped.

**Returns:** `{ "enabled": false }`

### `search_tone3000`

Search the TONE3000 online library for NAM profiles.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `query` | string | yes | Search query |
| `sort` | string | no | "trending", "downloads", "newest", "relevance" |
| `category` | string | no | "all", "amp", "pedal", "full-rig", "ir", "outboard" |
| `architecture` | string | no | "amx", "lstm", "wavenet", "convnet", "linear", "a2" |
| `page` | number | no | Page number (default: 1) |

**Returns:** Array of results with id, name, creator, gear, `thumbnail_url`, download count, `architecture`, and `amx_eligible`. Architecture-filtered searches resolve those fields before filtering; unfiltered searches may return an empty `architecture` string when TONE3000 omits it.

### `download_tone3000`

Download a NAM profile from TONE3000 to the local profiles directory.
Filenames are based on tone metadata (title/creator) for both `preamp`
and `summing`, with tone ID fallback when metadata is unavailable.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `tone_id` | string | yes | TONE3000 tone ID (from search results) |
| `category` | string | no | "preamp" (default) or "summing" |

**Returns:** `{ "status": "downloaded", "tone_id": "abc123", "filename": "1073_Hot.nam", "category": "preamp" }`
