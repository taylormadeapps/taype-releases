# 表示とセッション

表示状態、undo / redo、テーマ、パーソナリティ、セッション状態を扱うツールです。

---

## 表示状態

### `get_view_state`

現在の表示フィルターや表示設定を取得します。

**戻り値:**
```json
{
  "focus": false,
  "focus_tag": "",
  "focus_tags": [],
  "tag_filter_mode": "or",
  "archive_view": false,
  "spill": false,
  "can_spill": false,
  "e_zoom": false,
  "ruler_mode": "time",
  "selected_track": ""
}
```

### `set_focus`

Focus モードを切り替えます（関連するトラックだけを表示します）。

| パラメータ | 型 | 必須 | 説明 |
|-------|------|----------|-------------|
| `enabled` | boolean | はい | Focus のオン / オフ |
| `tag` | string | いいえ | 任意のフォーカスタグ（Focus-by-Tag） |
| `tags` | string[] | いいえ | 複数タグでのフォーカス |
| `filter_mode` | string | いいえ | 複数タグ時の条件。`"or"`（既定）または `"and"` |

### `set_archive_view`

Archive View を切り替えます（アーカイブ済みトラック表示）。

| パラメータ | 型 | 必須 | 説明 |
|-------|------|----------|-------------|
| `enabled` | boolean | はい | Archive View のオン / オフ |

### `set_spill`

Spill を切り替えます（選択中のバスまたはマスターへ送られているトラックだけを表示）。

| パラメータ | 型 | 必須 | 説明 |
|-------|------|----------|-------------|
| `enabled` | boolean | はい | Spill のオン / オフ |

選択中トラックがバスまたはマスターである必要があります。

### `set_e_zoom`

E-Zoom を切り替えます（選択中クリップに合わせてズーム）。

| パラメータ | 型 | 必須 | 説明 |
|-------|------|----------|-------------|
| `enabled` | boolean | はい | E-Zoom のオン / オフ |

### `set_ruler_mode`

ルーラー表示を時間または拍に切り替えます。

| パラメータ | 型 | 必須 | 説明 |
|-------|------|----------|-------------|
| `mode` | string | はい | `"time"` または `"beats"` |

### `select_track`

トラックを選択します（省略するとすべて解除）。

| パラメータ | 型 | 必須 | 説明 |
|-------|------|----------|-------------|
| `track_id` | string | いいえ | トラック ID（省略で選択解除） |

---

## Undo / Redo

### `undo`

直前の変更を元に戻します。

**戻り値:**
```json
{
  "undone": "Add track",
  "canUndo": true,
  "canRedo": true,
  "undoLabel": "Set transport",
  "redoLabel": "Add track"
}
```

### `redo`

最後に取り消した変更をやり直します。戻り値の形は `undo` と同じです。

### `get_undo_state`

操作はせず、undo / redo の可否だけを取得します。

**戻り値:**
```json
{
  "canUndo": true,
  "canRedo": false,
  "undoLabel": "Add track",
  "redoLabel": ""
}
```

---

## テーマ

### `set_theme`

通常テーマと高コントラストテーマを切り替えます。即時反映され、セッションをまたいで保持されます。

| パラメータ | 型 | 必須 | 説明 |
|-------|------|----------|-------------|
| `theme` | string | はい | `"normal"` または `"high_contrast"` |

### `get_theme`

現在のテーマを取得します。

**戻り値:** `{ "theme": "normal" }`

---

## パーソナリティ

### `list_personalities`

利用可能なスタジオテックパーソナリティをすべて一覧します。

**戻り値:**
```json
{
  "personalities": [
    { "name": "Greg Zenner", "prompt": "..." },
    ...
  ]
}
```

### `set_personality`

名前を指定してアクティブなパーソナリティを設定します。詳しくは [パーソナリティ](personalities.md) を参照してください。

| パラメータ | 型 | 必須 | 説明 |
|-------|------|----------|-------------|
| `name` | string | はい | パーソナリティ名 |

### `get_personality`

現在アクティブなパーソナリティを取得します。

**戻り値:** `{ "name": "Greg Zenner", "prompt": "..." }`

---

## セッション

### `status`

リール情報、トランスポート、選択中 Cut、Cut 一覧、ピークレベル付きの全トラック、コールサイン、undo / redo 状態、パーソナリティ、テーマ、表示状態、メトロノームをまとめて返す、包括的なセッションスナップショットです。会話の冒頭で状況を読み込むのに向いています。

注意: アプリ状態は UI 操作でいつでも変わり得ます。以前の値を前提にせず、必要なときは `status` を再取得してください。

**戻り値:**
```json
{
  "reel": { "name": "Default", "directory": "...", "sample_rate": 44100, "device_sr_matched": true },
  "transport": { "playing": false, "recording": false, "position": 0.0, "duration": 0.0, "tempo": 120.0, "numerator": 4, "denominator": 4 },
  "selected_cut_name": "Main Cut",
  "cuts": ["Main Cut", "Verse", "Chorus"],
  "tracks": [ { "id": "track_1", "name": "Audio 1", "tags": ["Vocals"], "volume": 1.0, "pan": 0.0, "mute": false, "solo": false, "peak_l": 0.0, "peak_r": 0.0 } ],
  "call_sign": "tape",
  "undo": { "can_undo": false, "can_redo": false, "undo_label": "", "redo_label": "" },
  "personality": { "name": "Greg Zenner", "system_prompt": "..." },
  "theme": "normal",
  "view": { "focus": false, "focus_tag": "", "focus_tags": [], "tag_filter_mode": "or", "archive_view": false, "spill": false, "can_spill": false, "e_zoom": false, "ruler_mode": "time", "selected_track": "" },
  "metronome": { "enabled": false }
}
```

### `callsign_get` / `callsign_set`

アプリのコールサイン（短い識別子、既定は `"tape"`）を取得 / 設定します。

| パラメータ | 型 | 必須 | 説明 |
|-------|------|----------|-------------|
| `call_sign` | string | `set` のときのみ必須 | 新しいコールサイン |
