# NAM Console Engine

Narzędzia for managing NAM preamp profiles, mix bus summing, and the TONE3000 library.

---

### `set_preamp_nam`

Załaduj a NAM profile on a track's preamp. Requires transport stopped.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `track_id` | string | yes | Target track |
| `profile` | string | yes | NAM profile filename (e.g. "1073_Hot.nam") |
| `output_gain` | number | no | Post-NAM output gain in dB, -18.0 to +12.0 (default: 0.0) |

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
  "directory": "/Users/.../Documents/Taype/NAM/Preamps",
  "count": 1
}
```

### `set_mix_summing`

Załaduj a NAM summing profile on the master bus. Requires transport stopped.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `profile` | string | yes | NAM profile filename |
| `drive` | number | no | Wejście drive in dB, 0.0 to +18.0 (default: 0.0) |
| `output_gain` | number | no | Wyjście gain in dB, -18.0 to +12.0 (default: 0.0) |

**Returns:** `{ "enabled": true, "profile": "SSL_4000G.nam", "architecture": "LSTM", "drive": 6.0, "output_gain": 0.0 }`

### `get_mix_summing`

Get the current NAM summing state on the master bus.

**Returns:** `{ "enabled": true, "profile": "SSL_4000G.nam", "drive": 6.0, "output_gain": 0.0 }` (or `{ "enabled": false }` when off)

### `clear_mix_summing`

Wyłącz NAM summing, revert to digital sum. Requires transport stopped.

**Returns:** `{ "enabled": false }`

### `search_tone3000`

Search the TONE3000 online library for NAM profiles.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `query` | string | yes | Search query |
| `sort` | string | no | "trending", "newest", "oldest". Omit for default (relevance). |
| `category` | string | no | "all", "amp-cab", "amp", "cab", "pedal", "outboard", "space", "experimental". Legacy "full-rig" maps to "amp-cab"; legacy "ir" filters `format="ir"`. |
| `architecture` | string | no | "amx", "lstm", "wavenet", "convnet", "linear", "a2" |
| `page` | number | no | Page number (default: 1) |

**Returns:** Array of results with id, name, creator, gear, `format`, `thumbnail_url`, download count, `architecture`, and `amx_eligible`. TONE3000 gear is the captured form factor; NAM/IR lives in `format`. Architecture-filtered searches resolve those fields before filtering; unfiltered searches may return an empty `architecture` string when TONE3000 omits it.

### `download_tone3000`

Download a NAM profile from TONE3000 to the local profiles directory.
Filenames are based on tone metadata (title/creator) for both `preamp`
and `summing`, with tone ID fallback when metadata is unavailable. If the
requested tone is already present locally with matching metadata, TayPE returns
that file instead of downloading a duplicate.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `tone_id` | string | yes | TONE3000 tone ID (from search results) |
| `category` | string | no | "preamp" (default) or "summing" |

**Returns:** `{ "status": "ok", "tone_id": "abc123", "filename": "1073_Hot.nam", "category": "preamp" }`

### Summing XTALK

`set_mix_summing` accepts `cross_talk` from `0.0` to `1.0`. Missing values default to `0.0`. The value is squared in DSP and blends stereo channels toward unity `(L + R) / 2`. With True Summing off, it blends the post-digital-sum stereo path before the master summing colour stage. With True Summing on, it blends each queued stereo feeder pair before Classic, ToTaype, NAM, or MD510 true-summing processing.
