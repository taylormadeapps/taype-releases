# NAM コンソールエンジン

NAM プリアンププロファイル、ミックスバスサミング、TONE3000 ライブラリを扱うためのツールです。

---

### `set_preamp_nam`

トラックのプリアンプに NAM プロファイルを読み込みます。トランスポート停止中のみ使えます。

| パラメータ | 型 | 必須 | 説明 |
|-------|------|----------|-------------|
| `track_id` | string | はい | 対象トラック |
| `profile` | string | はい | NAM プロファイルのファイル名（例: `"1073_Hot.nam"`） |
| `output_gain` | number | いいえ | NAM 後段の出力ゲイン（dB、既定: 0.0） |

**戻り値:** `{ "track_id": "...", "profile": "1073_Hot.nam", "architecture": "WaveNet", "output_gain": 0.0 }`

負荷の高いアーキテクチャ（WaveNet、ConvNet）では `cpu_warning` フィールドも含まれます。

### `clear_preamp_nam`

トラックのプリアンプをクリーンゲインモードに戻します。

| パラメータ | 型 | 必須 | 説明 |
|-------|------|----------|-------------|
| `track_id` | string | はい | 対象トラック |

**戻り値:** `{ "track_id": "...", "preamp_mode": "clean" }`

### `list_nam_profiles`

ローカルのプロファイルフォルダーにある NAM プロファイルを一覧します。

| パラメータ | 型 | 必須 | 説明 |
|-------|------|----------|-------------|
| `category` | string | いいえ | `"preamp"`（既定）または `"summing"` |

**戻り値:**
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

マスターバスに NAM サミングプロファイルを読み込みます。トランスポート停止中のみ使えます。

| パラメータ | 型 | 必須 | 説明 |
|-------|------|----------|-------------|
| `profile` | string | はい | NAM プロファイルのファイル名 |
| `drive` | number | いいえ | 入力ドライブ（dB、既定: 0.0） |
| `output_gain` | number | いいえ | 出力ゲイン（dB、既定: 0.0） |

**戻り値:** `{ "enabled": true, "profile": "SSL_4000G.nam", "architecture": "LSTM", "drive": 6.0, "output_gain": 0.0 }`

### `get_mix_summing`

マスターバス上の現在の NAM サミング状態を取得します。

**戻り値:** `{ "enabled": true, "profile": "SSL_4000G.nam", "drive": 6.0, "output_gain": 0.0 }`（オフ時は `{ "enabled": false }`）

### `clear_mix_summing`

NAM サミングを無効にし、デジタルサムへ戻します。トランスポート停止中のみ使えます。

**戻り値:** `{ "enabled": false }`

### `search_tone3000`

TONE3000 のオンラインライブラリで NAM プロファイルを検索します。

| パラメータ | 型 | 必須 | 説明 |
|-------|------|----------|-------------|
| `query` | string | はい | 検索語 |
| `sort` | string | いいえ | `"trending"`、`"downloads"`、`"newest"`、`"relevance"` |
| `category` | string | いいえ | `"all"`、`"amp"`、`"pedal"`、`"full-rig"`、`"ir"`、`"outboard"` |
| `architecture` | string | いいえ | `"amx"`、`"lstm"`、`"wavenet"`、`"convnet"`、`"linear"`、`"a2"` |
| `page` | number | いいえ | ページ番号（既定: 1） |

**戻り値:** id、name、creator、gear、`thumbnail_url`、download count、`architecture`、`amx_eligible` を含む検索結果配列。アーキテクチャ指定検索では、それらの値を解決してから絞り込みます。未指定検索では、TONE3000 側に情報が無い場合 `architecture` が空文字になることがあります。

### `download_tone3000`

TONE3000 から NAM プロファイルをローカルプロファイルフォルダーへダウンロードします。
ファイル名は、`preamp` / `summing` のどちらでも tone のメタデータ（タイトル / creator）を基に決まり、使えない場合は tone ID にフォールバックします。

| パラメータ | 型 | 必須 | 説明 |
|-------|------|----------|-------------|
| `tone_id` | string | はい | TONE3000 の tone ID（検索結果から取得） |
| `category` | string | いいえ | `"preamp"`（既定）または `"summing"` |

**戻り値:** `{ "status": "downloaded", "tone_id": "abc123", "filename": "1073_Hot.nam", "category": "preamp" }`
