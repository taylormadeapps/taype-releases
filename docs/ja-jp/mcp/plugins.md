# プラグイン

VST3 プラグインインサートと Mix FX バスを管理するためのツールです。

---

### `list_plugins`

スキャン済みの VST3 プラグインカタログを返します。

**戻り値:**
```json
{
  "plugins": [
    {
      "name": "ValhallaRoom",
      "vendor": "Valhalla DSP",
      "category": "Reverb",
      "format": "VST3",
      "path": "/Library/Audio/Plug-Ins/VST3/ValhallaRoom.vst3",
      "uid": 12345678
    }
  ],
  "count": 1
}
```

### `add_insert`

トラックの 8 つあるインサートスロットのどれかにプラグインを読み込みます。トランスポート停止中のみ使えます。

| パラメータ | 型 | 必須 | 説明 |
|-------|------|----------|-------------|
| `track_id` | string | はい | 対象トラック |
| `plugin_id` | string | はい | `list_plugins` で得たプラグインパスまたは UID |
| `slot` | number | いいえ | インサートスロット番号 0-7（既定: 0） |

**戻り値:**
```json
{
  "track_id": "...",
  "slot": 0,
  "plugin_name": "ValhallaRoom",
  "bypass": false,
  "enabled": true,
  "latency_samples": 0
}
```

### `remove_insert`

トラックのインサートスロットからプラグインを取り外します。トランスポート停止中のみ使えます。

| パラメータ | 型 | 必須 | 説明 |
|-------|------|----------|-------------|
| `track_id` | string | はい | 対象トラック |
| `slot` | number | いいえ | インサートスロット番号 0-7（既定: 0） |

**戻り値:** `{ "track_id": "...", "slot": 0, "removed": true }`

### `bypass_insert`

トラックのインサートをバイパス切り替えします。再生中でも安全に使えます。

| パラメータ | 型 | 必須 | 説明 |
|-------|------|----------|-------------|
| `track_id` | string | はい | 対象トラック |
| `bypass` | boolean | いいえ | バイパス状態（既定: true） |
| `slot` | number | いいえ | インサートスロット番号 0-7（既定: 0） |

**戻り値:** `{ "track_id": "...", "slot": 0, "bypass": true }`

### `get_insert_info`

トラックのインサートスロットの現在状態を取得します。

| パラメータ | 型 | 必須 | 説明 |
|-------|------|----------|-------------|
| `track_id` | string | はい | 対象トラック |
| `slot` | number | いいえ | インサートスロット番号 0-7（既定: 0） |

**戻り値（読み込み済み）:**
```json
{
  "track_id": "...",
  "slot": 0,
  "loaded": true,
  "plugin_name": "ValhallaRoom",
  "plugin_id": "/Library/Audio/Plug-Ins/VST3/ValhallaRoom.vst3",
  "uid": "12345678",
  "bypass": false,
  "enabled": true,
  "latency_samples": 512
}
```

**戻り値（空スロット）:** `{ "track_id": "...", "slot": 0, "loaded": false }`

### `open_insert_editor`

プラグインのエディターウィンドウを開きます。

| パラメータ | 型 | 必須 | 説明 |
|-------|------|----------|-------------|
| `track_id` | string | はい | 対象トラック |
| `slot` | number | いいえ | インサートスロット番号 0-7（既定: 0） |

**戻り値:** `{ "track_id": "...", "slot": 0, "editor_open": true }`

### `close_insert_editor`

プラグインのエディターウィンドウを閉じます。

| パラメータ | 型 | 必須 | 説明 |
|-------|------|----------|-------------|
| `track_id` | string | はい | 対象トラック |
| `slot` | number | いいえ | インサートスロット番号 0-7（既定: 0） |

**戻り値:** `{ "track_id": "...", "slot": 0, "editor_open": false }`

### `restart_sandbox`

プラグインサンドボックスホストプロセスを再起動します。トランスポート停止中のみ使えます。

| パラメータ | 型 | 必須 | 説明 |
|-------|------|----------|-------------|
| _(none)_ | | | |

**戻り値（成功）:** `{ "success": true }`

**戻り値（失敗）:**
```json
{ "success": false, "error": "..." }
```

---

## Mix FX（Tape Summing）

### `get_mix_fx`

現在の Mix FX 状態（マスターバス上の Softube Multitrack Tape）を取得します。

**戻り値:**
```json
{
  "enabled": false,
  "plugin_loaded": false,
  "plugin_name": "Tape Multi Track",
  "available": true
}
```

`available` は、Softube Multitrack Tape がインストールされているとき true です。

### `set_mix_fx`

テープサミングを有効 / 無効にします。トランスポート停止中のみ使えます。

| パラメータ | 型 | 必須 | 説明 |
|-------|------|----------|-------------|
| `enabled` | boolean | はい | true で有効、false で無効 |

**戻り値:** `{ "enabled": true, "plugin_loaded": true }`

### `open_mix_fx_editor`

Softube Tape プラグインのエディターウィンドウを開きます。

**戻り値:** `{ "editor_open": true }`
