# NAM サミング (マスターバス)

マスターバスチャンネルストリップにはサミングセクションがあります。実際のコンソールのサミングアンプ (SSL 4000G、Neve 8816 など) の NAM プロファイルをロードすると、デジタル和はキャプチャされたハードウェアの特性を通過します。

マスター ストリップでは、このセクションはプリアンプ スロットを占有するため、セクションの行はミキサー全体で垂直に整列したままになります。

## コントロール

- **SUM** - NAM の合計を有効または無効にします (トランスポートの停止が必要です)
- **SUM** - TayPE の True Summing パスを選択します。NAM AMX アクセラレーションの状態に関係なく使用でき、トランスポート停止が必要です
- **参照** - 合計プロファイルにフィルタリングされたプロファイル ブラウザを開きます
- **ドライブ** - 合計されたオーディオがモデルにどれだけ強く押し込まれるか
- **出力ゲイン** - レベル変化を補償します

## プロファイルストレージ

プロファイルは `~/Documents/TayPE/NAM/Summing/` に保存される `.nam` ファイルです。メタデータが利用可能な場合、ダウンロードされたプロファイルにはモデル タイトルが表示されます。

加算が無効になっている場合、マスター バスは CPU オーバーヘッドなしで標準のデジタル加算を使用します。

## XTALK

XTALK appears on the stereo master summing strip when a non-clean summing flavour is active. With True Summing off, it blends the post-digital-sum stereo path before the master summing colour stage. With True Summing on, it blends each stereo feeder pair before Classic, ToTaype, NAM, or MD510 true-summing processing. It uses the same power-law taper as the track preamp and is hidden on mono strips.
