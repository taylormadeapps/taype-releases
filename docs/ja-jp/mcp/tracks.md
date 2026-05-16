# トラック

トラックの作成、設定、削除を行うためのツールです。

---

### `get_tracks`

すべてのトラックと、そのチャンネル設定を一覧します。

**戻り値:**
```json
{
  "tracks": [
    {
      "id": "track_1",
      "name": "Track 1",
      "content_type": "audio",
      "color": "",
      "archived": false,
      "is_bus": false,
      "tags": ["Vocals", "Lead Vocal"],
      "input_id": "1-2",
      "output_id": "master",
      "channel": {
        "volume": 1.0,
        "pan": 0.0,
        "mute": false,
        "solo": false,
        "trim": 0.0
      }
    }
  ]
}
```

### `add_track`

新しいオーディオトラックを追加します。

| パラメータ | 型 | 必須 | 説明 |
|-------|------|----------|-------------|
| `name` | string | いいえ | トラック名（既定: `"Track N"`） |
| `color` | string | いいえ | 色の 16 進文字列 |

**戻り値:** `{ "id": "track_2", "name": "Vocals" }`

### `set_track`

トラックのプロパティを更新します。指定した項目だけが変更されます。

| パラメータ | 型 | 必須 | 説明 |
|-------|------|----------|-------------|
| `id` | string | はい | トラック ID |
| `name` | string | いいえ | 新しい名前 |
| `color` | string | いいえ | 新しい色 |
| `archived` | boolean | いいえ | アーカイブ状態（現在はトラック音声もミュート） |
| `volume` | number | いいえ | 0.0 から 3.9810717（既定 1.0 = 0 dB、最大 +12 dB） |
| `pan` | number | いいえ | -1.0 から +1.0 |
| `mute` | boolean | いいえ | ミュート状態 |
| `solo` | boolean | いいえ | ソロ状態 |
| `monitor` | boolean | いいえ | ソフトウェアモニタリング（トラック: 入力をチェーン経由で聴く / バス: サミング切り替え） |
| `is_bus` | boolean | いいえ | バス指定 |
| `input_id` | string | いいえ | 入力ルート: オーディオ（`"1"`、`"1-2"` など）または MIDI（`"midi:all"`、`"midi:virtual:keyboard"`、`"midi:<device-id>"`） |
| `output_id` | string | いいえ | 出力先: `"master"` またはバストラック ID |
| `sends` | array | いいえ | 追加のファンアウトルート: `[{"target_id":"<bus-or-master>","level":0.0-4.0}]` |
| `trim` | number | いいえ | 入力トリム: -36.0 から +12.0 dB |
| `position` | number | いいえ | 0 始まりの表示位置（トラック並べ替え） |
| `tags` | array | いいえ | トラックのタグを、この配列で丸ごと置き換える |
| `preamp_enabled` | boolean | いいえ | チャンネルプリアンプの有効 / 無効 |
| `preamp_drive` | number | いいえ | プリアンプドライブ: Modern/NAM/MD510 0.0 から 18.0 dB、ToTaype は -0.5 から +0.5 のセンター制御 |
| `preamp_auto_gain` | boolean | いいえ | オートゲイン補正 |
| `preamp_manual_gain` | number | いいえ | 統合プリアンプ出力ゲインへの互換エイリアス: Modern/NAM/MD510 -18.0 から +12.0 dB、ToTaype は -0.5 から +0.5 のセンター制御 |
| `preamp_hp_freq` | number | いいえ | サチュレーション HP フィルター: 20.0 から 500.0 Hz |
| `preamp_lp_freq` | number | いいえ | サチュレーション LP フィルター: 2000.0 から 20000.0 Hz |
| `preamp_safe` | boolean | いいえ | 4x オーバーサンプリング（高ドライブ時のエイリアシングを抑える） |

volume、pan、mute、solo、monitor、preamp 系パラメータは即時反映され、再生中でも安全です。name、color、archived、bus、input、output、send の変更はトランスポート停止中のみです。`preamp_manual_gain` は AG や NAM の出力補正と同じ出力ゲイン段を書き換える互換エイリアスなので、手動調整と自動調整が別々の隠れた経路に分かれません。

`is_bus: true` にすると、そのトラックの入力は自動で `"none"` になります（バスはオーディオインターフェイスからではなく、他トラックから受けるためです）。後で `is_bus` を `false` に戻すと、同じ `set_track` 呼び出し内で明示的な `input_id` が渡されていない限り、以前の入力が復元されます。`is_bus: false` に戻したときは、そのトラックを参照していた `output_id` や `sends` もクリアされ、非バスへ向けた古いルートが残りません。

`set_track` は `input_id` をトラックモードに合わせて正規化します。インストゥルメントトラックでは、`"none"` 以外の非 MIDI ルートは `"midi:all"` に変換されます。非インストゥルメントトラックでは、`"midi:*"` のような MIDI ルートは既定オーディオ入力（`""`）へ戻されます。

コンプレッサー関連パラメータも `set_track` で扱えます: `comp_enabled`、`comp_threshold`、`comp_ratio`、`comp_attack_ms`、`comp_release_ms`、`comp_knee`、`comp_makeup_gain`、`comp_wet_dry_mix`、`comp_log_release`、`comp_sidechain_low_cut`（検出側サイドチェインの固定 `80 Hz` ハイパス）。`comp_attack_ms` は **0.1–100 ms** を受け付けます。

**戻り値:** 更新後のトラックオブジェクト。

### `remove_track`

トラックと、そのトラック上のすべてのクリップを削除します。

| パラメータ | 型 | 必須 | 説明 |
|-------|------|----------|-------------|
| `id` | string | はい | トラック ID |

**戻り値:** `{ "removed": "track_2" }`
