# ボイスコントロール

TayPE は、MCP で接続した Claude セッション経由で、声だけでも操作できます。たとえば「トラック 1 をソロ」「ギターを少し下げて」「新しいトラックを追加して」のように自然に話せば、内容を解釈して TayPE に反映します。

特別な文法は不要です。メニューを潜る必要もありません。やりたいことをそのまま言えば大丈夫です。

これは、音声を拾って Claude に渡し、Claude が TayPE とやり取りする macOS ショートカットで動きます。処理はすべて Mac 上で完結し、あなたの声がマシンの外へ送られることはありません。

## 2 つのモード

ボイスコントロールには 2 つのモードがあり、それぞれ別のキーボードショートカットを持ちます。

**Studio モード** - TayPE で作業しながら素早く命令を出すためのモードです。ショートカットを押して話すと、フォーカスは TayPE に戻ります。セッションを離れずに、「再生」「停止」「トラック 2 をソロ」「今のを undo」といった操作をこなせます。

**Brain モード** - Claude と会話したいときのモードです。別のショートカットを押して話すと、フォーカスは Claude 側に残るので、そのまま返答を読めます。「このステムはどうルーティングすべき?」「ルームマイクに合うコンプ設定は?」のような相談向きです。

押すキーによってモードが決まります。設定の切り替えやトグルは必要ありません。

## 必要なもの

- macOS Ventura (13.0) 以降
- TayPE MCP セッションに接続した Claude Desktop
- 2 つの macOS ショートカットを作るための数分

## Studio モードの設定

このショートカットは、声の命令を Claude に送り、フォーカスを TayPE に戻します。

1. Mac で **ショートカット** アプリを開きます
2. 新しいショートカットを作成し、名前を **Tape Talkback** にします
3. **Dictate Text** アクションを追加します
   - 「Stop listening」は **After Pause** に設定します
4. **Run AppleScript** アクションを追加し、下の Studio モード用スクリプトを貼り付けます
5. ショートカットを保存します
6. エディタ右上の **情報ボタン** をクリックします
7. **Add Keyboard Shortcut** をクリックし、**⌘⌥↩** を割り当てます
   （Cmd + Option + Return）

## Brain モードの設定

このショートカットは、音声コマンドを Claude に送り、フォーカスを Claude 側に残します。

1. もう 1 つショートカットを作成し、名前を **Tape Brain** にします
2. **Dictate Text** アクションを追加します
   - 「Stop listening」は **After Pause** に設定します
3. **Run AppleScript** アクションを追加し、下の Brain モード用スクリプトを貼り付けます
4. ショートカットを保存します
5. **情報ボタン** をクリックし、**Add Keyboard Shortcut** を開きます
6. 使いやすいキーコンボを割り当てます（例: **⌃⌥Space**）

## 権限

どちらのショートカットも、Claude Desktop に文字を送るためにアクセシビリティ権限が必要です。

1. **システム設定 → プライバシーとセキュリティ → アクセシビリティ** を開きます
2. 一覧に **Shortcuts** があり、オンになっていることを確認します
3. 一覧に **System Events** があり、オンになっていることを確認します

どちらかが無ければ、**+** ボタンから追加してください。

## スクリプト

### Studio モード用スクリプト

**Tape Talkback** ショートカットの **Run AppleScript** アクションに、次を貼り付けます。

```
on run {input, parameters}
    set spokenText to (input as text)
    if spokenText is "" then return

    tell application "System Events"
        set frontApp to name of first application process whose frontmost is true
    end tell

    set fullCommand to "tape " & spokenText

    tell application "Claude" to activate
    delay 0.3

    tell application "System Events"
        tell process "Claude"
            keystroke fullCommand
            delay 0.1
            keystroke return
        end tell
    end tell

    if frontApp is "Taype" then
        delay 0.3
        tell application "Taype" to activate
    end if

    return input
end run
```

### Brain モード用スクリプト

**Tape Brain** ショートカットの **Run AppleScript** アクションに、次を貼り付けます。

```
on run {input, parameters}
    set spokenText to (input as text)
    if spokenText is "" then return

    set fullCommand to "tape " & spokenText

    tell application "Claude" to activate
    delay 0.3

    tell application "System Events"
        tell process "Claude"
            keystroke fullCommand
            delay 0.1
            keystroke return
        end tell
    end tell

    return input
end run
```

## テスト方法

**Studio モード:** TayPE を前面に出して、Studio 用ショートカットを押します。「今トラックはいくつある?」と話してください。少し待つと、Claude が裏で処理を続けるあいだフォーカスは TayPE に戻るはずです。

**Brain モード:** Claude を前面に出して、Brain 用ショートカットを押します。「ルームマイクにはどんな EQ がいい?」と話してください。フォーカスは Claude に残るので、そのまま返答を読めます。

## コマンド例

自然な言い方で大丈夫です。たとえば次のように話せます。

- 「再生」
- 「停止」
- 「巻き戻して」
- 「1 番トラックをソロ」
- 「ドラムをミュート」
- 「3 番トラックを少し下げて」
- 「ギターの上を少し落として」
- 「新しいトラックを追加」
- 「今のを取り消して」
- 「今どんなトラックがある?」
- 「5 小節目から 2 番トラックで録音して」
- 「テンポを 95 にして」

正確なパラメータ名や値を知っている必要はありません。やりたいことを説明すれば、Claude がそこを埋めます。

## ハードウェアコントローラー

キーボードショートカットは物理ボタンにも割り当てられます。手を使わない運用に向いています。

- **Stream Deck** - それぞれのショートカットをボタンに割り当てる
- **フットペダル** - 楽器から両手を離さず操作できる
- **USB マクロパッド** - キーコンボを送れるなら使えます

## 完全ハンズフリー（キーボード不要）

キーボードを使えない場合でも、macOS のアクセシビリティ機能で、これらのショートカットを声だけで起動できます。

1. システム設定 → アクセシビリティで **Voice Control** をオンにします
2. カスタム音声コマンド（例: 「talkback」）を作り、Tape Talkback ショートカットを起動するようにします
3. 以後「talkback」と言うと音声入力が始まり、その次の言葉がコマンドとして送られます

macOS はヘッドトラッキングやスイッチコントロールにも対応しており、これらも適応入力デバイス経由でショートカットを起動できます。

## ヒント

- 「tape」と言う必要はありません。ショートカット側が自動で付けます
- はっきり話すと認識しやすくなりますが、完璧な文法や句読点は不要です
- 音声入力が多少言い間違えても、Claude が意図を補ってくれることが多いです
- TayPE 接続済みの Claude チャットを 1 つ開いたままにしておくと安全です。複数開いていると、別の会話に送られる場合があります
- 騒がしいスタジオでは Mac のマイクに近づくか、ヘッドセットマイクを使うと認識が安定します
