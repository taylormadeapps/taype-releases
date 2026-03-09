# リール管理

TayPE のリールバンドル、チェックポイント、アーカイブパッケージを扱うためのツールです。

---

### `save_reel`

現在のリールの作業状態を、変更がある場合に即座に保存します。

`name` を省略した場合は通常の保存です。`name` を指定し、それが現在のリール名と異なる場合は、現在のリールを新しい `.taype` バンドルへ複製して切り替えます。現在のリール名と同じ `name` を渡した場合は、通常保存と同じ動作です。リールが読み込まれていない場合は `name` が必須で、その名前の空リールを新規作成します。

| パラメータ | 型 | 必須 | 説明 |
|-------|------|----------|-------------|
| `name` | string | いいえ | 複製して切り替える新しいリール名 |

**戻り値:** `{ "saved": true, "reel": "MyReel" }`

### `open_reel`

名前を指定して既存のリールを開きます。切り替え前に現在のリールの作業状態は保存されます。

| パラメータ | 型 | 必須 | 説明 |
|-------|------|----------|-------------|
| `name` | string | はい | 開くリール名 |

**戻り値:** `{ "opened": true, "reel": "MyReel" }`

### `list_reels`

利用可能なリール名を一覧します。

**戻り値:** `{ "reels": ["Default", "MyReel", "Demo"] }`

### `get_reel_info`

現在読み込まれているリールの情報を取得します。

**戻り値:**
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

リール未読込時は `loaded` が `false` で、リール固有の名前やパスは空文字になります。

### `close_reel`

現在のリールを閉じ、TayPE を no-reel 状態に戻します。必要なら作業状態を先にフラッシュします。

**戻り値:** `{ "closed": true, "had_reel": true }`

**条件:** トランスポート停止中

### `duplicate_reel`

現在のリールを新しい `.taype` バンドルへ複製し、その複製へ切り替えます。

| パラメータ | 型 | 必須 | 説明 |
|-------|------|----------|-------------|
| `name` | string | はい | 新しいリール名 |

**戻り値:** `{ "duplicated": true, "reel": "Alt Mix" }`

**条件:** トランスポート停止中

### `rename_reel`

現在のリールバンドルをリネームします。バンドルのファイル名が、そのまま正規のリール名です。

| パラメータ | 型 | 必須 | 説明 |
|-------|------|----------|-------------|
| `name` | string | はい | 新しいリール名 |

**戻り値:** `{ "renamed": true, "reel": "Final Vox" }`

**条件:** トランスポート停止中

## チェックポイント

### `create_checkpoint`

現在のリール履歴に、意図的なチェックポイントを作成します。必要であれば先に作業状態をフラッシュします。

| パラメータ | 型 | 必須 | 説明 |
|-------|------|----------|-------------|
| `name` | string | いいえ | チェックポイントの表示名 |

**条件:** トランスポート停止中

### `list_checkpoints`

現在のリールのチェックポイントを一覧します。

**戻り値:**
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

リール履歴を一覧します。TayPE は、現ブランチ向けの互換 `history`、可視コミットツリーを表す `history_tree`、そしてリールブラウザの縦型グラフ表示用 `history_graph` を返します。

| パラメータ | 型 | 必須 | 説明 |
|-------|------|----------|-------------|
| `include_timed_saves` | bool | いいえ | true にすると autosave / timed-save コミットも含める |

**戻り値:** `{ "history": [...], "history_tree": [...], "history_graph": [{"lane":0,"parent_lane":-1,"parent_revision":"","current_lane":true}], "include_timed_saves": false, "current_branch": "main" }`

`include_timed_saves: false` の場合、TayPE は現在状態とタグ付き履歴アンカーだけを見せます。単なる autosave は、そこから restore して分岐起点としてタグ付けされた場合を除き、隠れたままです。

### `revert_to_checkpoint`

`id` または `name` で指定したチェックポイントへ、現在のリール作業状態を戻します。

| パラメータ | 型 | 必須 | 説明 |
|-------|------|----------|-------------|
| `id` | string | いいえ | チェックポイント ID |
| `name` | string | いいえ | チェックポイント表示名 |

**戻り値:** `{ "reverted": true, "reel": "MyReel", "current_branch": "history/before-comp-20260308-113000" }`

**条件:** トランスポート停止中

### `restore_reel_history`

コミット SHA を指定して履歴上のリビジョンを復元します。必要なら現在ラインを保持し、選択したリビジョンから新しい履歴ブランチを切って、その上に復元状態をコミットします。

| パラメータ | 型 | 必須 | 説明 |
|-------|------|----------|-------------|
| `revision` | string | はい | そこから分岐して復元するコミット SHA |

**戻り値:** `{ "restored": true, "revision": "abc123...", "reel": "MyReel", "current_branch": "history/rough-mix-20260308-113412" }`

**条件:** トランスポート停止中

### `delete_checkpoint`

チェックポイントタグと、そのインデックス項目を削除します。

| パラメータ | 型 | 必須 | 説明 |
|-------|------|----------|-------------|
| `id` | string | いいえ | チェックポイント ID |
| `name` | string | いいえ | チェックポイント表示名 |

**戻り値:** `{ "deleted": true }`

**条件:** トランスポート停止中

## Pack / Thin

### `pack_reel`

現在のリールから `.tpak` アーカイブを作成します。

| パラメータ | 型 | 必須 | 説明 |
|-------|------|----------|-------------|
| `destination` | string | いいえ | 出力先アーカイブパス。既定ではバンドルの隣 |
| `thin` | bool | いいえ | `true` で thin pack、`false` で full pack |

**戻り値:** `{ "packed": true, "path": "/path/to/MyReel.tpak", "thin": false }`

**条件:** トランスポート停止中

### `unpack_reel`

`.tpak` アーカイブを `.taype` バンドルへ展開し、そのリールを開きます。

| パラメータ | 型 | 必須 | 説明 |
|-------|------|----------|-------------|
| `path` | string | はい | `.tpak` アーカイブのパス |
| `destination` | string | いいえ | 展開先 `.taype` バンドルパス。既定では標準リールフォルダー内の一意名 |

**戻り値:** `{ "unpacked": true, "bundle_path": "/path/to/MyReel.taype" }`

**条件:** トランスポート停止中

### `preview_thin_reel`

現在のリールをクリーンスレート化した thin export にすると何が残るか、事前表示します。

**戻り値:**
```json
{
  "kept_media": ["media/current.wav"],
  "discarded_media": ["media/old-take.wav"],
  "source_unchanged": true,
  "history_reset": true
}
```

### `thin_reel`

現在の作業状態から、新しいクリーンスレートの `.taype` バンドルを作成し、その履歴をまっさらな repo にリセットしたうえで開きます。元のリールはそのまま残ります。

| パラメータ | 型 | 必須 | 説明 |
|-------|------|----------|-------------|
| `destination` | string | いいえ | 生成先 `.taype` バンドルパス。既定では現在のリールの隣に `{Current Name} Thinned.taype` |

**戻り値:** `{ "thinned": true, "bundle_path": "/path/to/My Reel Thinned.taype", "discarded_count": 4, "history_reset": true, "source_unchanged": true }`

**条件:** トランスポート停止中

### `reveal_reel`

現在のリールバンドルを Finder で表示します。

**戻り値:** `{ "revealed": true, "path": "/Users/.../Reels/MyReel.taype" }`
