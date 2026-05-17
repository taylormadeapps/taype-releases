# キーボードショートカット

TayPE のキーボード ショートカットは完全に構成可能です。キーバインド ファイルを編集し、再起動して変更を適用します。

## キーバインドファイル

```
~/Documents/Taype/keybindings.json
```

このファイルは、最初の起動時に適切なデフォルトで自動的に作成されます。

## デフォルトのショートカット

### 輸送

| Shortcut | Action |
|----------|--------|
| Space | Play / stop |
| P | Play / pause |
| Z | Stop (returns to start; while recording, parks at take end) |
| Return | Start / stop recording |
| / | Add marker at the tape head |
| , | Go to previous marker |
| . | Go to next marker |
| Unbound | Set 0 at Playhead for the selected Cut |

### マーカー

| Shortcut | Action |
|----------|--------|
| 1 through 9 | Go to markers 1 through 9 |
| 0 | Go to marker 10 |
| Cmd+1 through Cmd+9 | Go to markers 11 through 19 |
| Cmd+0 | Go to marker 20 |
| Cmd+Shift+1 through Cmd+9 | Go to markers 21 through 29 |
| Cmd+Shift+0 | Go to marker 30 |

### 編集

| Shortcut | Action |
|----------|--------|
| S | Split selected clip at the tape head |
| D | Duplicate selected clip back-to-back |
| Cmd+D | Duplicate selected track without clips |
| Cmd+Option+D | Duplicate selected track with clips |
| Cmd+X | Cut selected clip |
| Cmd+C | Copy selected clip |
| Cmd+V | Paste clip at tape head position |
| Backspace | Delete selected clip |
| Delete | Delete selected non-master track |
| Cmd+Z | Undo |
| Cmd+Shift+Z | Redo |
| Escape | Deselect clip and track |

### リール

| Shortcut | Action |
|----------|--------|
| Cmd+S | Create checkpoint |
| Cmd+R | Open Reel Browser |

TayPE は、トランスポートが停止している間、動作状態を自動的に維持するため、ユーザー向けの個別の保存コマンドはありません。

### ビュー

| Shortcut | Action |
|----------|--------|
| M | Toggle between timeline and mixer |
| I | Toggle channel strip panel |
| F | Focus view - show only tracks with clips at the tape head |
| A | Toggle archive view |
| G | Spill - show selected bus and its routed tracks |
| E | E-Zoom - zoom to selected clip (press again to restore) |
| T | Toggle ruler between time and beats |
| K | Toggle high contrast theme |
| Cmd+K | Open the virtual keyboard popup |

### ズーム

| Shortcut | Action |
|----------|--------|
| Cmd + mouse wheel | Horizontal zoom (centred on tape head) |
| Option + mouse wheel | Vertical zoom (anchored to selected track) |
| = | Zoom in tracks |
| - | Zoom out tracks |
| Shift+- | Reset track height to default |
| Shift+= | Jump track height to maximum |

### ねずみ

| Input | Context | Action |
|-------|---------|--------|
| Option+click | Timeline | Seek tape head (even over clips) |
| Right-click drag left/right | Timeline | Scroll through time |
| Right-click drag up/down | Timeline | Horizontal zoom |
| Cmd+drag | Clip | Copy clip to new position |
| Drag clip edge | Clip | Trim clip (non-destructive) |

## ショートカットのカスタマイズ

任意のテキスト エディタで `~/Documents/Taype/keybindings.json` を開きます。形式は簡単です。

```json
{
  "play_pause": "space",
  "pause": "p",
  "stop": "z",
  "record": "return",
  "add_marker_here": "/",
  "previous_marker": ",",
  "next_marker": ".",
  "go_to_marker_1": "1",
  "split_clip": "s",
  "duplicate_clip": "d",
  "duplicate_track_without_content": "cmd+d",
  "duplicate_track": "cmd+alt+d",
  "toggle_focus": "f"
}
```

各エントリは、アクション名をキーの組み合わせにマップします。

**再生ヘッドに 0 を設定**するには、`set_zero_here` エントリを追加します。たとえば、`"set_zero_here": "0"` は、`0` キーにバインドします。マーカー アクションは、直接ジャンプに `add_marker_here`、`previous_marker`、`next_marker`、および `go_to_marker_N` を使用します。

### キーの組み合わせの形式

修飾子を `+` と結合します。

- **cmd** - コマンド キー
- **ctrl** - コントロール キー
- **シフト** - シフトキー
- **alt** または **option** - Alt / Option キー

例: `"cmd+s"`、`"ctrl+shift+z"`、`"alt+3"`

### 利用可能なキー名

- 文字: `a` ～ `z`
- 番号: `0` ～ `9`
- 特殊: `space`、`return`、`tab`、`escape`、`delete`、`backspace`
- 矢印: `up`、`down`、`left`、`right`
- ナビゲーション: `home`、`end`、`pageup`、`pagedown`
- ファンクション キー: `f1` ～ `f12`

### プラットフォームのショートカット

これらの標準ショートカットは常にアクティブであり、再割り当てすることはできません。

| Shortcut | Action |
|----------|--------|
| Cmd+Z | Undo |
| Cmd+Shift+Z | Redo |
| Cmd+X | Cut |
| Cmd+C | Copy |
| Cmd+V | Paste |
| Backspace | Delete selected clip |
| Delete | Delete selected non-master track |
| Cmd+, | Open Preferences |

## 仮想キーボードモード

仮想キーボード ポップアップが開いているとき (`Cmd+K`)、TayPE はすべてのキー押下をポップアップにルーティングし、メインのタイムライン/トランスポート ショートカットを一時停止します。 `Escape` を押してポップアップを閉じ、通常のショートカット コントロールに戻ります。

macOS では、TayPE は、メニューが開いているときに、ネイティブ メニュー バー内の一致するメニュー項目の横にこれらのショートカットも表示します。
