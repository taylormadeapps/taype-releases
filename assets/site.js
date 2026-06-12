const PUBLIC_SITE_URL = "https://taype.ruminantaudioworks.com";
const DOCS_BASE_URL = "https://ruminant-audio-works.gitbook.io/taype/";
const DOWNLOAD_URL = "https://github.com/taylormadeapps/taype-releases/releases/download/v0.22.0/Taype-0.22.0.pkg";
const BETA_PROGRAMME_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdcIUQBf7p4VecwyEkBmjmVXXXwR09o0xaJLR3r03aqI7KZVg/viewform";

const localeAliasMap = {
    "en": "en-gb",
    "en-gb": "en-gb",
    "en-us": "en-gb",
    "ja": "ja-jp",
    "ja-jp": "ja-jp",
    "fr": "fr-fr",
    "fr-fr": "fr-fr",
    "de": "de-de",
    "de-de": "de-de",
    "es": "es-es",
    "es-es": "es-es",
    "is": "is-is",
    "is-is": "is-is",
    "nl": "nl-nl",
    "nl-nl": "nl-nl",
    "it": "it-it",
    "it-it": "it-it",
    "pl": "pl-pl",
    "pl-pl": "pl-pl",
    "uk": "uk-ua",
    "uk-ua": "uk-ua",
    "el": "el-gr",
    "el-gr": "el-gr"
};

const locales = {
    "en-gb": {
        lang: "en-GB",
        fontMode: "pixel",
        quoteOpen: "\u201c",
        quoteClose: "\u201d",
        title: "TayPE - Craft first. Accessible by design.",
        metaDescription: "TayPE is a multitrack DAW built for musicians who want to finish records, not fight software. WCAG 2.2 AA-target. MCP native - Claude or Codex (incl. voice) is the primary non-visual interface. macOS.",
        ogTitle: "TayPE - Make the Record",
        ogDescription: "Craft first. Accessible by design.",
        text: {
            "lang-switch-label": "Language",
            "nav-features": "Features",
            "nav-pricing": "Pricing",
            "nav-docs": "Docs",
            "nav-community": "Community",
            "nav-download-link": "Get TayPE",
            "hero-descriptor": "Multitrack DAW for macOS",
            "hero-tagline-text": "Craft first. Accessible by design.",
            "hero-cta": "Let's Roll",
            "hero-platform": "macOS Monterey+ \u00b7 Apple Silicon Native + Intel \u00b7 VST3 host",
            "tone-heading": "Tone Architecture",
            "tone-intro-1": "TayPE isn't a flat digital mixer. Every channel can run through a modelled preamp stage - real hardware character captured by Neural Amp Modeler and applied at the source. On the mix bus, a modelled summing engine adds console-style saturation, cohesion, and drive.",
            "tone-intro-2": "No plugins needed. The console emulation runs directly in the audio engine - shared weight tensors, per-channel state, zero added latency. Same philosophy as hardware-accelerated DSP, built into the mixer, not bolted on.",
            "tone-kicker": "Craft first. Tone at the core.",
            "philosophy-heading": "Make the Record",
            "philosophy-copy-1": "Taylor's Performance Environment exists to help you make the record, not drown in endless options. A multitrack DAW with the soul of a tape machine.\nBuilt around the flow and feel of a great mixing console.\nFewer modes, fewer menus, more music.",
            "screenshots-tape-heading": "The Tape",
            "screenshots-heading": "The Mixing Console",
            "screenshots-arranger-heading": "The Arranger",
            "arranger-flow-heading": "Built for finishing records, not just sketching ideas",
            "arranger-flow-copy-1": "TayPE’s arranger is deliberately lean, but it’s not a toy. Edit audio directly on the timeline with the speed and precision demanded by professional recording workflows, without getting buried under windows, dialogs and endless configuration. The focus is on finishing records, not managing software.",
            "arranger-flow-copy-2": "Record software instruments as audio while keeping the original MIDI performance attached underneath. Change notes, timing or instrumentation later if you need to. Commit to sound without committing forever.",
            "arranger-flow-copy-3": "If Melodyne is installed, pitch editing is available wherever you need it. Open any clip and start working - no dedicated tracks, plugin management or setup ritual. TayPE also includes the “Industry Standard” keybinding profile for producers whose wetware is already mapped to Pro Tools, helping experienced hands feel at home from day one.",
            "arranger-flow-kicker": "Capture the sound that inspired the take.",
            "screenshots-laforge-heading": "LaForgé",
            "finish-heading": "Finish Without Leaving the Flow",
            "finish-kicker": "Look. Listen. Adjust. Finish.",
            "finish-copy": "LaForgé is a finishing room and a window onto your mix. The last mile is where many records stall. As loudness comes up and the finish line approaches, stressed mixes begin to reveal themselves. LaForgé helps you reveal what is really there, stay connected to the music, and make the final decisions that turn a mix into a record.",
            "a11y-heading": "Built for Everyone",
            "pricing-heading": "Pricing",
            "price-personal-try-first": "Be sure to download and try before you buy.",
            "price-commercial-try-first": "Be sure to download and try before you buy.",
            "demo-heading": "Here's the deal.",
            "demo-trust-framing": "TayPE runs on two-way trust.",
            "demo-what-that-means": "What that means:",
            "demo-trust-1": "No subscriptions",
            "demo-trust-2": "No DRM",
            "demo-trust-3": "No feature limits",
            "demo-trust-4": "No phone home",
            "demo-connector": "If it's working out for you, please purchase a perpetual licence. That keeps TayPE breaking new ground, and bugs squashed.",
            "price-personal-title": "Personal",
            "price-personal-note": "one-time purchase",
            "price-personal-feature-1": "Full application, all features",
            "price-personal-feature-2": "2 major versions (Eras) of included updates",
            "price-personal-cta": "Buy Now",
            "price-commercial-title": "Commercial",
            "price-commercial-note": "one-time purchase",
            "price-commercial-feature-1": "Full application, all features",
            "price-commercial-feature-2": "2 major versions (Eras) of included updates",
            "price-commercial-cta": "Buy Now",
            "education-heading": "Education",
            "education-copy": "Free for students. DM us for a discount code.",
            "education-instagram": "Instagram \u2192",
            "education-reddit": "Reddit \u2192",
            "accessibility-note": "Students free. Accessibility concessions. Just ask.",
            "pricing-cadence-note": "Major versions (Eras) are typically released at a yearly cadence.\n\nThe latest Era receives new features. The previous Era stays in Long Term Support (LTS), with maintenance and bug-fix releases.\n\nYour licence includes the current Era and the next, usually giving you 2 years of feature updates and 3 years of maintenance coverage.\n\nOn renewal, existing users receive a significant discount when moving from any previous version.",
            "download-heading": "Let's Roll",
            "download-copy": "Fully Functional Trustware. No demo limitations, No expiry, No noise.",
            "download-apply": "Download now",
            "community-heading": "Community & Support",
            "community-card-1-title": "Knowledge Base",
            "community-card-1-body": "User guide and reference documentation. Everything you need to get started and go deep.",
            "community-card-1-link": "Read the Fine Manual \u2192",
            "community-card-2-title": "Beta Programme",
            "community-card-2-body": "Get early builds and release candidates before the public download moves.",
            "community-card-2-link": "Join the beta programme \u2192",
            "community-card-3-title": "Get in Touch",
            "community-card-3-body": "Bug to report, question, or just want to say hi? Drop us a line \u2014 anonymous is fine, but leave your email if you'd like a reply.",
            "community-card-3-link": "Get in touch \u2192",
            "community-card-4-title": "Follow Along",
            "community-card-4-body": "Development updates, studio sessions, and behind-the-scenes from Ruminant Audio Works.",
            "community-card-4-instagram": "Instagram \u2192",
            "community-card-4-youtube": "YouTube \u2192",
            "community-card-4-reddit": "Reddit \u2192",
            "footer-features": "Features",
            "footer-pricing": "Pricing",
            "footer-download": "Let's Roll",
            "footer-docs": "Docs",
            "footer-community": "Community",
            "footer-bug": "Get in Touch",
            "footer-copy": "\u00a9 2026 Ruminant Audio Works. TayPE is a product of Ruminant Audio Works Ltd. Company No. 16978494. Registered in England and Wales."
        },
        html: {
            "a11y-copy": "<strong>Craft requires access.</strong> <strong>Accessibility is not a feature. It's a foundation.</strong> Because the interface must meet musicians where they are. TayPE targets WCAG 2.2 AA throughout. High-contrast mode with 15:1+ text ratios. Every state is conveyed with shape and icon, never colour alone. Keyboard shortcuts for every action. For non-visual workflows, MCP through Claude or Codex is the primary interface - voice control included. Native screen-reader support coming in Q3 2026."
        },
        attrs: {
            "nav-logo": { alt: "TayPE logo" },
            "hero-logo": { alt: "TayPE tape-reel logo" },
            "screenshot-tape": { alt: "TayPE tape machine - reel-to-reel tape transport above multitrack mixer channels" },
            "screenshot-1": { alt: "TayPE mixer - multi-track channel strips with modelled preamps, EQ, compressor, inserts, and faders" },
            "screenshot-2": { alt: "TayPE arranger - clips arranged across tracks with track headers and transport controls" },
            "screenshot-laforge": { alt: "TayPE LaForgé mastering view - limiter, loudness statistics, loudness graph, stereo tools, mixer channels, and master bus" },
            "footer-logo": { alt: "Ruminant Audio Works" }
        },
        gregisms: [
            "You will own everything and be happy",
            "Commit to the take",
            "Stop tweaking. Start finishing",
            "The red light is your friend",
            "If it sounds good, it could be good. Go have a cup of tea and circle back",
            "Print it. Move on",
            "Feel is not a plugin parameter",
            "The best compressor is commitment",
            "The song doesn't care about your signal chain",
            "Stop soloing. Start listening",
            "don't listen with your eyes",
            "A great song recorded badly beats a bad song recorded perfectly",
            "The mute button is the most powerful tool in your rack",
            "Bounce it. Name it. Forget about it",
            "If you can't hear it in mono, it doesn't exist",
            "Nobody ever danced to a phase correlation meter",
            "Presence over polish",
            "The record button is not a suggestion",
            "You're not mixing. You're avoiding finishing",
            "Ship the rough mix",
            "Three mics and a good room beat thirty-two plugins",
            "Archive is not procrastination. It's a decision",
            "The best EQ is arrangement",
            "Your reference track is lying to you. Trust your ears",
            "Less tracks, more truth",
            "The click track doesn't make the groove. The drummer does",
            "If it needs more than three plugins, the source is wrong",
            "Make the record",
            "ease off that trigger finger tiger and go make the gorram record",
            "Does it make the record?",
            "It's the knobs you don't twist",
            "Mono is the new Stereo",
            "Snakeoil?",
            "Keep Pushing!",
            "Let's get into it",
            "Let's get started",
            "Now with added screws and rust",
            "Doing Marvellously Well",
            "where you going with that stem splitter? that's my kick drum",
            "just one more wafer thin plugin",
            "the absolute gamechanging cheat code that pros don't want you to know",
            "premium plan now includes legit organic mojo from a dubious provenance",
            "4 plugins max or the source is wrong",
            "exposure is what finished Captain Oates",
            "now with 260% more cowbell",
            "this goes to eleven",
            "have a good time all the time",
            "the review said this mix was a triumph of mediocrity",
            "at a quantum level analog is just digital",
            "now with added Love Supreme",
            "John Coltrane",
            "always 24 hours from tulsa",
            "160% more justified and ancient",
            "90% less conversation, 95% more action",
            "the dawless DAW",
            "momma said there would be days like these",
            "your fader is the best plugin",
            "somewhere in this code is a tiny henge",
            "jog on!",
            "RRP Six Quintillion Dollars",
            "Students go free, that's infinite ROI",
            "Pairs well with tea and biscuits",
            "Fame is just a ton of people knowing you exist, now make that record",
            "Releasing the Pressure since '95",
            "honestly, I'd tell you if this was a paid promo",
            "E.T might phone home - TayPE won't",
            "A change is gonna come",
            "Flooping the pig since '76",
            "now loading your unfinished biz",
            "Plugmaxxing is so taxing",
            "Host of the Low Stakes Studio Olympics 5 years running",
            "Find out who you are and do it on purpose",
            "It costs a lot of CPU to sound this cheap",
            "Three mics and the truth",
            "Takes are cheap, like tears in rain",
            "Straight outta Plumpton",
            "get out of your own way and make the thing"
        ]
    },
    "ja-jp": {
        lang: "ja-JP",
        fontMode: "cjk",
        quoteOpen: "\u300c",
        quoteClose: "\u300d",
        title: "TayPE - クラフト優先。設計段階からアクセシブル。",
        metaDescription: "TayPEは、ソフトと戦うのではなくレコードを完成させたいミュージシャンのためのマルチトラックDAW。WCAG 2.2 AA目標。MCPネイティブ - Claude または Codex（音声含む）が主要な非視覚インターフェース。macOS対応。",
        ogTitle: "TayPE - レコードを作れ",
        ogDescription: "クラフト優先。設計段階からアクセシブル。",
        text: {
            "lang-switch-label": "言語",
            "nav-features": "機能",
            "nav-pricing": "価格",
            "nav-docs": "ドキュメント",
            "nav-community": "コミュニティ",
            "nav-download-link": "TayPEを入手",
            "hero-descriptor": "macOS 向けマルチトラック DAW",
            "hero-tagline-text": "クラフト優先。設計段階からアクセシブル。",
            "hero-cta": "さあ始めよう",
            "hero-platform": "macOS Monterey+ \u00b7 Apple Silicon ネイティブ + Intel \u00b7 VST3 ホスト",
            "tone-heading": "トーンアーキテクチャ",
            "tone-intro-1": "TayPEはのっぺりしたデジタルミキサーではない。各チャンネルはモデル化されたプリアンプ段を通せる - Neural Amp Modelerで捉えた本物のハードウェアの個性をソースに適用。ミックスバスでは、モデル化されたサミングエンジンがコンソール風のサチュレーション、まとまり、ドライブを加える。",
            "tone-intro-2": "プラグイン不要。コンソールエミュレーションはオーディオエンジン内で直接動作 - 共有重みテンソル、チャンネルごとの状態、追加レイテンシーゼロ。ハードウェアアクセラレーションDSPと同じ思想を、ミキサーに後付けではなく組み込んでいる。",
            "tone-kicker": "クラフト優先。音色は中核に。",
            "philosophy-heading": "レコードを作れ",
            "philosophy-copy-1": "Taylor's Performance Environment は、無限の選択肢に溺れるためではなく、レコードを作るためにあります。テープマシンの魂を持ったマルチトラック DAW。\n優れたミキシングコンソールの流れと感触を中心に設計されています。\n少ないモード、少ないメニュー、もっと音楽を。",
            "screenshots-tape-heading": "The Tape",
            "screenshots-heading": "ミキシングコンソール",
            "screenshots-arranger-heading": "The Arranger",
            "arranger-flow-heading": "アイデアのスケッチだけでなく、レコードを仕上げるために",
            "arranger-flow-copy-1": "TayPEのアレンジャーは意図的にリーンですが、おもちゃではありません。プロフェッショナルな録音ワークフローが求める速度と精度で、タイムライン上のオーディオを直接編集でき、ウィンドウやダイアログ、終わりのない設定に埋もれません。焦点はソフトウェアの管理ではなく、レコードを仕上げることです。",
            "arranger-flow-copy-2": "ソフトウェア音源をオーディオとして録音しながら、元のMIDI演奏を下に付けたままにできます。必要ならあとからノート、タイミング、音源を変えられます。音にはコミットする。でも永遠に縛られない。",
            "arranger-flow-copy-3": "Melodyneがインストールされていれば、必要な場所でピッチ編集が使えます。任意のクリップを開いて作業開始 - 専用トラックも、プラグイン管理も、準備儀式も不要。TayPEには、Pro Toolsに手癖がすでに結び付いているプロデューサー向けの「Industry Standard」キー割り当てプロファイルも含まれ、経験豊かな手が初日からなじみやすくなります。",
            "arranger-flow-kicker": "そのテイクを生んだ音を捕まえる。",
            "screenshots-laforge-heading": "LaForgé",
            "finish-heading": "流れを止めずに仕上げる",
            "finish-kicker": "見る。聴く。整える。仕上げる。",
            "finish-copy": "LaForgé は、仕上げの部屋であり、ミックスを見通す窓です。最後の一歩で、多くのレコードは止まってしまいます。ラウドネスが上がり、ゴールが近づくにつれて、ストレスを受けたミックスは本当の姿を見せ始めます。LaForgé は、そこに本当にあるものを明らかにし、音楽とのつながりを保ち、ミックスをレコードに変える最後の判断を下す助けになります。",
            "a11y-heading": "すべての人のために",
            "pricing-heading": "価格",
            "price-personal-try-first": "購入前にTayPEをダウンロードして試す。",
            "price-commercial-try-first": "購入前にTayPEをダウンロードして試す。",
            "demo-heading": "話はこうだ。",
            "demo-trust-framing": "TayPEは双方向の信頼で動く。",
            "demo-what-that-means": "つまり：",
            "demo-trust-1": "サブスクなし",
            "demo-trust-2": "DRMなし",
            "demo-trust-3": "機能制限なし",
            "demo-trust-4": "外部送信なし",
            "demo-connector": "気に入ったら、永続ライセンスを購入してほしい。それでTayPEは進み続けられるし、バグも潰せる。",
            "price-personal-title": "個人",
            "price-personal-note": "買い切り",
            "price-personal-feature-1": "フルアプリケーション、全機能込み",
            "price-personal-feature-2": "2 つのメジャーバージョン（Eras）のアップデート込み",
            "price-personal-cta": "今すぐ購入",
            "price-commercial-title": "商用",
            "price-commercial-note": "買い切り",
            "price-commercial-feature-1": "フルアプリケーション、全機能込み",
            "price-commercial-feature-2": "2 つのメジャーバージョン（Eras）のアップデート込み",
            "price-commercial-cta": "今すぐ購入",
            "education-heading": "教育",
            "education-copy": "学生と教育機関は無償です。割引コードが必要なら DM をください。",
            "education-instagram": "Instagram \u2192",
            "education-reddit": "Reddit \u2192",
            "accessibility-note": "学生は無料。アクセシビリティ割引あり。気軽に聞いて。",
            "pricing-cadence-note": "メジャーバージョン（Eras）は通常、年1回のペースでリリースされます。\n\n最新の Era には新機能が追加されます。ひとつ前の Era は Long Term Support (LTS) として、メンテナンスとバグ修正リリースを継続します。\n\nライセンスには現在の Era と次の Era が含まれ、通常は2年分の機能アップデートと3年分のメンテナンス範囲になります。\n\n更新時には、既存ユーザーはどの旧バージョンからでも大幅な割引で移行できます。",
            "download-heading": "さあ始めよう",
            "download-copy": "フル機能のTrustware。デモの制限なし、期限切れなし、ノイズなし。",
            "download-apply": "今すぐダウンロード",
            "community-heading": "コミュニティとサポート",
            "community-card-1-title": "ナレッジベース",
            "community-card-1-body": "ユーザーガイドとリファレンス。始めるときにも、深掘りするときにも必要なものを揃えています。",
            "community-card-1-link": "ドキュメントを読む \u2192",
            "community-card-2-title": "ベータプログラム",
            "community-card-2-body": "公開ダウンロードに出る前の早期ビルドとリリース候補を入手できます。",
            "community-card-2-link": "ベータプログラムに参加 \u2192",
            "community-card-3-title": "お問い合わせ",
            "community-card-3-body": "バグ、質問、ただの挨拶でも気軽にどうぞ - 匿名でも大丈夫、返信が欲しければメールアドレスを残して。",
            "community-card-3-link": "お問い合わせ \u2192",
            "community-card-4-title": "進捗を追う",
            "community-card-4-body": "開発アップデート、スタジオセッション、Ruminant Audio Works の舞台裏を載せています。",
            "community-card-4-instagram": "Instagram \u2192",
            "community-card-4-youtube": "YouTube \u2192",
            "community-card-4-reddit": "Reddit \u2192",
            "footer-features": "機能",
            "footer-pricing": "価格",
            "footer-download": "さあ始めよう",
            "footer-docs": "ドキュメント",
            "footer-community": "コミュニティ",
            "footer-bug": "お問い合わせ",
            "footer-copy": "\u00a9 2026 Ruminant Audio Works. TayPE は Ruminant Audio Works Ltd. のプロダクトです。 Company No. 16978494. Registered in England and Wales."
        },
        html: {
            "a11y-copy": "<strong>クラフトにはアクセスが要る。</strong> <strong>アクセシビリティは機能ではない。土台だ。</strong>インターフェースはミュージシャンの居場所まで届かなければならないから。TayPEは全体でWCAG 2.2 AAを目指す。コントラスト比15:1+のハイコントラストモード。すべての状態は形とアイコンで伝え、色だけに頼らない。すべての操作にキーボードショートカット。視覚に頼らないワークフローでは、ClaudeまたはCodex経由のMCPが主要インターフェース - 音声コントロール対応。ネイティブのスクリーンリーダー対応は2026年第3四半期に登場予定。"
        },
        attrs: {
            "nav-logo": { alt: "TayPE ロゴ" },
            "hero-logo": { alt: "TayPE テープリールロゴ" },
            "screenshot-tape": { alt: "TayPE tape machine - reel-to-reel tape transport above multitrack mixer channels" },
            "screenshot-1": { alt: "TayPE mixer - multi-track channel strips with modelled preamps, EQ, compressor, inserts, and faders" },
            "screenshot-2": { alt: "TayPE arranger - clips arranged across tracks with track headers and transport controls" },
            "screenshot-laforge": { alt: "TayPE LaForgé mastering view - limiter, loudness statistics, loudness graph, stereo tools, mixer channels, and master bus" },
            "footer-logo": { alt: "Ruminant Audio Works" }
        },
        gregisms: [
            "すべてを所有し 幸せになろう",
            "そのテイクに腹をくくれ",
            "いじるのはやめろ。終わらせろ",
            "赤いランプは味方だ",
            "良く聴こえるなら たぶん良い。お茶でも飲んで戻ってこい",
            "プリントしろ。次へ進め",
            "ノリはプラグインのパラメータじゃない",
            "最高のコンプレッサーは腹をくくること",
            "曲はお前のシグナルチェーンなんて気にしていない",
            "ソロをやめろ。聴け",
            "目で聴くな",
            "ひどく録った名曲は 完璧に録った駄曲に勝つ",
            "ミュートボタンはラック最強の道具だ",
            "バウンスしろ。名前を付けろ。忘れろ",
            "モノで聴こえないなら 存在していない",
            "位相相関メーターで踊ったやつはいない",
            "磨きより存在感",
            "録音ボタンは提案じゃない",
            "お前はミックスしてるんじゃない。終わらせるのを避けてるだけだ",
            "ラフミックスを出せ",
            "マイク3本と良い部屋は プラグイン32個に勝つ",
            "アーカイブは先延ばしじゃない。決断だ",
            "最高のEQはアレンジだ",
            "リファレンストラックはお前に嘘をつく。耳を信じろ",
            "トラックは少なく 真実は多く",
            "クリックはグルーヴを作らない。ドラマーが作る",
            "プラグインが3つ以上必要なら ソースが間違っている",
            "レコードを作れ",
            "ブラウザを閉じろ、その機材を買うな、レコードを仕上げろ",
            "それでレコードになるか？",
            "回さないノブこそ大事だ",
            "モノは新しいステレオだ",
            "まやかし？",
            "押し続けろ！",
            "さあやろう",
            "さあ始めよう",
            "さらにネジとサビを増量",
            "実にすばらしくやれている",
            "そのステムスプリッターでどこ行くんだ？ それは俺のキックだ",
            "もうひとつだけ極薄プラグインを足せば完璧になる",
            "プロが知られたくない究極のゲームチェンジャー・チートコード",
            "プレミアムプランに怪しい出所からのガチのオーガニックmojoが含まれるようになりました",
            "プラグインは4つまで。それ以上ならソースが悪い",
            "キャプテン・オーツを終わらせたのは露出だ",
            "さらに260%多いカウベル",
            "こいつは11まである",
            "いつでも最高に楽しめ",
            "レビューには このミックスは凡庸さの勝利だと書かれていた",
            "量子レベルではアナログもただのデジタルだ",
            "さらにLove Supremeを増量",
            "John Coltrane",
            "いつだってタルサまで24時間",
            "160%増しのJustified and Ancient",
            "会話90%減、アクション95%増",
            "DAWレスなDAW",
            "ママはこういう日もあるって言ってた",
            "フェーダーが最高のプラグインだ",
            "このコードのどこかに小さなヘンジがある",
            "あっち行け！",
            "希望小売価格 6,000,000,000,000,000,000ドル",
            "教師と学生は無料、つまりROIは無限大",
            "お茶とビスケットとの相性抜群",
            "名声とはただ大勢の人がお前の存在を知ること、さあレコードを作れ",
            "ドロップを感じろ",
            "プレッシャーを解き放て",
            "正直に言うよ、これがステマだったら教えるって",
            "E.T might phone home - TayPE won't",
            "変化はやってくる",
            "Flooping the pig since '76",
            "now loading your unfinished biz",
            "プラグマキシングは疲れる",
            "自分が何者かを見つけて、それを意図してやれ",
            "こんなに安っぽく鳴らすのにCPUを食いすぎだ",
            "マイク3本と真実",
            "テイクは安い、まるで雨の中の涙みたいに",
            "Plumpton直送",
            "自分で自分の邪魔をするな、作れ"
        ]
    },
    "fr-fr": {
        lang: "fr-FR",
        fontMode: "sans",
        quoteOpen: "\u00ab\u00a0",
        quoteClose: "\u00a0\u00bb",
        title: "TayPE - Le geste d'abord. Accessible dès la conception.",
        metaDescription: "TayPE est une DAW multipiste pour musiciens qui veulent finir des disques, pas se battre avec le logiciel. Objectif WCAG 2.2 AA. MCP natif - Claude ou Codex (avec voix) est l’interface non visuelle principale. macOS.",
        ogTitle: "TayPE - Fais le disque",
        ogDescription: "Le geste d'abord. Accessible dès la conception.",
        text: {
            "lang-switch-label": "Langue",
            "nav-features": "Fonctions",
            "nav-pricing": "Tarifs",
            "nav-docs": "Docs",
            "nav-community": "Communauté",
            "nav-download-link": "Obtenir TayPE",
            "hero-descriptor": "DAW multipiste pour macOS",
            "hero-tagline-text": "Le geste d'abord. Accessible dès la conception.",
            "hero-cta": "C'est parti",
            "hero-platform": "macOS Monterey+ \u00b7 Natif Apple Silicon + Intel \u00b7 Hôte VST3",
            "tone-heading": "Architecture du son",
            "tone-intro-1": "TayPE n’est pas une console numérique plate. Chaque canal peut passer par un étage de préampli modélisé - du caractère matériel réel capturé par Neural Amp Modeler et appliqué à la source. Sur le bus de mix, un moteur de sommation modélisé ajoute saturation, cohésion et drive à la console.",
            "tone-intro-2": "Aucun plugin nécessaire. L’émulation de console tourne directement dans le moteur audio - tenseurs de poids partagés, état par canal, zéro latence ajoutée. Même philosophie que le DSP accéléré matériellement, intégré à la console, pas posé dessus.",
            "tone-kicker": "Le geste d'abord. Le son au centre.",
            "philosophy-heading": "Fais le disque",
            "philosophy-copy-1": "Taylor's Performance Environment existe pour vous aider à faire le disque, pas à vous noyer dans des options sans fin. Une DAW multipiste avec l'âme d'un magnétophone.\nConçue autour du flux et de la sensation d'une grande console de mixage.\nMoins de modes, moins de menus, plus de musique.",
            "screenshots-tape-heading": "The Tape",
            "screenshots-heading": "La console de mixage",
            "screenshots-arranger-heading": "The Arranger",
            "arranger-flow-heading": "Conçu pour finir des disques, pas seulement esquisser des idées",
            "arranger-flow-copy-1": "L’arrangeur de TayPE est volontairement épuré, mais ce n’est pas un jouet. Éditez l’audio directement sur la timeline avec la vitesse et la précision exigées par les workflows d’enregistrement professionnels, sans vous retrouver enseveli sous des fenêtres, des dialogues et une configuration sans fin. L’objectif est de finir des disques, pas de gérer du logiciel.",
            "arranger-flow-copy-2": "Enregistrez les instruments logiciels en audio tout en gardant la performance MIDI d’origine attachée en dessous. Changez les notes, le timing ou l’instrumentation plus tard si nécessaire. Engagez-vous sur le son sans vous enfermer pour toujours.",
            "arranger-flow-copy-3": "Si Melodyne est installé, l’édition de hauteur est disponible partout où vous en avez besoin. Ouvrez n’importe quel clip et commencez à travailler - pas de pistes dédiées, de gestion de plugins ou de rituel de configuration. TayPE inclut aussi le profil de raccourcis « Industry Standard » pour les producteurs dont le wetware est déjà mappé sur Pro Tools, aidant les mains expérimentées à se sentir chez elles dès le premier jour.",
            "arranger-flow-kicker": "Capturez le son qui a inspiré la prise.",
            "screenshots-laforge-heading": "LaForgé",
            "finish-heading": "Finir sans quitter le flux",
            "finish-kicker": "Regarder. Écouter. Ajuster. Finir.",
            "finish-copy": "LaForgé est une salle de finition et une fenêtre ouverte sur votre mix. Le dernier kilomètre est l’endroit où beaucoup de disques s’arrêtent. Quand le niveau monte et que la ligne d’arrivée approche, les mixes sous tension commencent à se révéler. LaForgé vous aide à révéler ce qui est vraiment là, à rester connecté à la musique et à prendre les décisions finales qui transforment un mix en disque.",
            "a11y-heading": "Conçu pour tout le monde",
            "pricing-heading": "Tarifs",
            "price-personal-try-first": "Téléchargez TayPE et essayez-le avant d’acheter.",
            "price-commercial-try-first": "Téléchargez TayPE et essayez-le avant d’acheter.",
            "demo-heading": "Voilà le deal.",
            "demo-trust-framing": "TayPE fonctionne sur la confiance mutuelle.",
            "demo-what-that-means": "Ce que ça veut dire :",
            "demo-trust-1": "Pas d’abonnement",
            "demo-trust-2": "Pas de DRM",
            "demo-trust-3": "Pas de limite de fonctionnalités",
            "demo-trust-4": "Pas de télémétrie",
            "demo-connector": "Si ça vous va, achetez une licence perpétuelle. C’est ce qui permet à TayPE d’avancer et aux bugs de tomber.",
            "price-personal-title": "Personnel",
            "price-personal-note": "achat unique",
            "price-personal-feature-1": "Application complète, toutes les fonctions",
            "price-personal-feature-2": "2 versions majeures (Eras) de mises à jour incluses",
            "price-personal-cta": "Acheter maintenant",
            "price-commercial-title": "Commercial",
            "price-commercial-note": "achat unique",
            "price-commercial-feature-1": "Application complète, toutes les fonctions",
            "price-commercial-feature-2": "2 versions majeures (Eras) de mises à jour incluses",
            "price-commercial-cta": "Acheter maintenant",
            "education-heading": "\u00c9ducation",
            "education-copy": "Gratuit pour les étudiant·es et les enseignant·es. Envoyez-nous un message pour un code de réduction.",
            "education-instagram": "Instagram \u2192",
            "education-reddit": "Reddit \u2192",
            "accessibility-note": "Gratuit pour les étudiants. Tarifs préférentiels accessibilité. Demandez, simplement.",
            "pricing-cadence-note": "Les versions majeures (Eras) sont généralement publiées à cadence annuelle.\n\nLa dernière Era reçoit de nouvelles fonctionnalités. L’Era précédente reste en Long Term Support (LTS), avec des versions de maintenance et de correction de bugs.\n\nVotre licence inclut l’Era actuelle et la suivante, ce qui donne généralement 2 ans de mises à jour de fonctionnalités et 3 ans de couverture de maintenance.\n\nAu renouvellement, les utilisateurs existants bénéficient d’une remise importante pour passer depuis n’importe quelle version précédente.",
            "download-heading": "C'est parti",
            "download-copy": "Trustware entièrement fonctionnel. Pas de limitations de démo, pas d'expiration, pas de bruit.",
            "download-apply": "Télécharger maintenant",
            "community-heading": "Communauté et support",
            "community-card-1-title": "Base de connaissances",
            "community-card-1-body": "Guide utilisateur et documentation de référence. Tout ce qu'il faut pour démarrer et aller plus loin.",
            "community-card-1-link": "Lire le vrai manuel \u2192",
            "community-card-2-title": "Programme bêta",
            "community-card-2-body": "Accès aux builds précoces et release candidates avant le téléchargement public.",
            "community-card-2-link": "Rejoindre le programme bêta \u2192",
            "community-card-3-title": "Nous contacter",
            "community-card-3-body": "Un bug, une question, ou juste envie de dire bonjour ? Écrivez-nous - anonyme c'est très bien, mais laissez votre e-mail si vous voulez une réponse.",
            "community-card-3-link": "Nous contacter \u2192",
            "community-card-4-title": "Suivre le projet",
            "community-card-4-body": "Mises à jour du développement, sessions studio et coulisses de Ruminant Audio Works.",
            "community-card-4-instagram": "Instagram \u2192",
            "community-card-4-youtube": "YouTube \u2192",
            "community-card-4-reddit": "Reddit \u2192",
            "footer-features": "Fonctions",
            "footer-pricing": "Tarifs",
            "footer-download": "C'est parti",
            "footer-docs": "Docs",
            "footer-community": "Communauté",
            "footer-bug": "Contact",
            "footer-copy": "\u00a9 2026 Ruminant Audio Works. TayPE est un produit de Ruminant Audio Works Ltd. Company No. 16978494. Registered in England and Wales."
        },
        html: {
            "a11y-copy": "<strong>L’artisanat demande l’accès.</strong> <strong>L’accessibilité n’est pas une fonctionnalité. C’est une fondation.</strong> Parce que l’interface doit rejoindre les musiciens là où ils sont. TayPE vise WCAG 2.2 AA partout. Mode haut contraste avec ratios texte 15:1+. Chaque état est transmis par forme et icône, jamais par la couleur seule. Raccourcis clavier pour chaque action. Pour les flux non visuels, MCP via Claude ou Codex est l’interface principale - contrôle vocal inclus. Le support natif des lecteurs d’écran arrive au T3 2026."
        },
        attrs: {
            "nav-logo": { alt: "Logo TayPE" },
            "hero-logo": { alt: "Logo bobine TayPE" },
            "screenshot-tape": { alt: "TayPE tape machine - reel-to-reel tape transport above multitrack mixer channels" },
            "screenshot-1": { alt: "TayPE mixer - multi-track channel strips with modelled preamps, EQ, compressor, inserts, and faders" },
            "screenshot-2": { alt: "TayPE arranger - clips arranged across tracks with track headers and transport controls" },
            "screenshot-laforge": { alt: "TayPE LaForgé mastering view - limiter, loudness statistics, loudness graph, stereo tools, mixer channels, and master bus" },
            "footer-logo": { alt: "Ruminant Audio Works" }
        },
        gregisms: [
            "Vous posséderez tout et vous serez heureux",
            "Engage-toi dans la prise",
            "Arrête de trifouiller. Commence à finir",
            "Le voyant rouge est ton ami",
            "Si ça sonne bien, c'est peut-être bien. Va te faire une tasse de thé et reviens-y",
            "Imprime-le. Passe à la suite",
            "Le feeling n'est pas un paramètre de plugin",
            "Le meilleur compresseur, c'est l'engagement",
            "La chanson se fout de ta chaîne du signal",
            "Arrête d'écouter en solo. Commence à écouter",
            "n'écoute pas avec tes yeux",
            "Une grande chanson mal enregistrée bat une mauvaise chanson enregistrée parfaitement",
            "Le bouton mute est l'outil le plus puissant de ton rack",
            "Exporte-la. Nomme-la. Oublie-la",
            "Si tu ne l'entends pas en mono, ça n'existe pas",
            "Personne n'a jamais dansé sur un corrélateur de phase",
            "La présence avant le vernis",
            "Le bouton d'enregistrement n'est pas une suggestion",
            "Tu ne mixes pas. Tu évites de finir",
            "Sors le rough mix",
            "Trois micros et une bonne pièce valent mieux que trente-deux plugins",
            "Archiver, ce n'est pas procrastiner. C'est décider",
            "Le meilleur EQ, c'est l'arrangement",
            "Ta piste de référence te ment. Fais confiance à tes oreilles",
            "Moins de pistes, plus de vérité",
            "Le clic ne fait pas le groove. Le batteur, si",
            "S'il faut plus de trois plugins, la source est mauvaise",
            "Fais le disque",
            "ferme le navigateur, ne 'passe pas à l'achat' de ce matos et finis le disque",
            "Est-ce que ça fait le disque ?",
            "Ce sont les boutons que tu ne tournes pas",
            "Le mono, c'est la nouvelle stéréo",
            "Huile de serpent ?",
            "Continue d'avancer !",
            "On s'y met",
            "On commence",
            "Maintenant avec plus de vis et de rouille",
            "On s'en sort merveilleusement bien",
            "Où tu vas avec ce séparateur de stems ? C'est ma grosse caisse",
            "Juste encore un plugin tout petit et après j'arrête",
            "le code triche ultime que les pros ne veulent pas que tu connaisses",
            "le plan premium inclut désormais du mojo bio certifié issu d'une provenance douteuse",
            "4 plugins max ou la source est mauvaise",
            "L'exposition, c'est ce qui a eu raison du capitaine Oates",
            "maintenant avec 260 % de cowbell en plus",
            "celui-là va jusqu'à onze",
            "Amuse-toi tout le temps",
            "La critique disait que ce mix était un triomphe de médiocrité",
            "Au niveau quantique, l'analogique n'est que du numérique",
            "Maintenant avec plus de Love Supreme",
            "John Coltrane",
            "Toujours à 24 heures de Tulsa",
            "160 % de plus, plus Justified and Ancient",
            "90 % moins de conversation, 95 % plus d'action",
            "La DAW sans DAW",
            "maman disait qu'il y aurait des jours comme ça",
            "ton fader est le meilleur plugin",
            "quelque part dans ce code se cache un petit henge",
            "dégage !",
            "Prix public Six Quintillions de Dollars",
            "Enseignants et étudiants gratuits, c'est un ROI infini",
            "Se marie bien avec du thé et des biscuits",
            "La célébrité c'est juste beaucoup, beaucoup de gens qui savent que tu existes, maintenant fais ce disque",
            "sens le drop",
            "relâche la pression",
            "honnêtement, je te le dirais si c'était une promo payée",
            "E.T might phone home - TayPE won't",
            "Un changement va venir",
            "Flooping the pig since '76",
            "now loading your unfinished biz",
            "Le plugmaxxing, c’est exténuant",
            "Découvre qui tu es et fais-le délibérément",
            "Ça coûte beaucoup de CPU de sonner aussi cheap",
            "Trois micros et la vérité",
            "Les prises ne coûtent pas cher, comme des larmes dans la pluie",
            "Tout droit sorti de Plumpton",
            "Arrête de te barrer la route et fais la chose"
        ]
    },
    "de-de": {
        lang: "de-DE",
        fontMode: "sans",
        quoteOpen: "\u201e",
        quoteClose: "\u201c",
        title: "TayPE - Handwerk zuerst. Barrierefrei von Anfang an.",
        metaDescription: "TayPE ist eine Multitrack-DAW für Musiker, die Platten fertig machen wollen, nicht gegen Software kämpfen. Ziel: WCAG 2.2 AA. MCP-nativ - Claude oder Codex (mit Sprachsteuerung) ist das primäre nicht-visuelle Interface. macOS.",
        ogTitle: "TayPE - Mach die Platte",
        ogDescription: "Handwerk zuerst. Barrierefrei von Anfang an.",
        text: {
            "lang-switch-label": "Sprache",
            "nav-features": "Funktionen",
            "nav-pricing": "Preise",
            "nav-docs": "Docs",
            "nav-community": "Community",
            "nav-download-link": "TayPE holen",
            "hero-descriptor": "Multitrack-DAW für macOS",
            "hero-tagline-text": "Handwerk zuerst. Barrierefrei von Anfang an.",
            "hero-cta": "Los geht's",
            "hero-platform": "macOS Monterey+ \u00b7 Nativ für Apple Silicon + Intel \u00b7 VST3-Host",
            "tone-heading": "Klangarchitektur",
            "tone-intro-1": "TayPE ist kein flacher Digitalmixer. Jeder Kanal kann durch eine modellierte Preamp-Stufe laufen - echter Hardware-Charakter, mit dem Neural Amp Modeler erfasst und direkt an der Quelle angewendet. Auf dem Mix-Bus liefert eine modellierte Summing-Engine konsolentypische Sättigung, Zusammenhalt und Druck.",
            "tone-intro-2": "Keine Plugins nötig. Die Konsolen-Emulation läuft direkt in der Audio-Engine - gemeinsame Gewichts-Tensoren, Zustand pro Kanal, keine zusätzliche Latenz. Gleiche Philosophie wie hardware-beschleunigte DSP, in den Mixer eingebaut, nicht aufgesetzt.",
            "tone-kicker": "Handwerk zuerst. Klang im Kern.",
            "philosophy-heading": "Mach die Platte",
            "philosophy-copy-1": "Taylor's Performance Environment ist dafür da, dir beim Machen der Platte zu helfen, nicht beim Ertrinken in endlosen Optionen. Eine Multitrack-DAW mit der Seele einer Bandmaschine.\nGebaut um den Ablauf und das Gefühl eines großartigen Mischpults.\nWeniger Modi, weniger Menüs, mehr Musik.",
            "screenshots-tape-heading": "The Tape",
            "screenshots-heading": "Die Mischkonsole",
            "screenshots-arranger-heading": "The Arranger",
            "arranger-flow-heading": "Gebaut, um Platten fertigzustellen, nicht nur Ideen zu skizzieren",
            "arranger-flow-copy-1": "Der Arranger von TayPE ist bewusst schlank, aber kein Spielzeug. Bearbeite Audio direkt auf der Timeline mit der Geschwindigkeit und Präzision, die professionelle Aufnahme-Workflows verlangen, ohne unter Fenstern, Dialogen und endloser Konfiguration begraben zu werden. Der Fokus liegt darauf, Platten fertigzustellen, nicht Software zu verwalten.",
            "arranger-flow-copy-2": "Nimm Software-Instrumente als Audio auf und behalte die ursprüngliche MIDI-Performance darunter angeheftet. Ändere Noten, Timing oder Instrumentierung später, wenn du es brauchst. Leg dich auf den Sound fest, ohne dich für immer festzulegen.",
            "arranger-flow-copy-3": "Wenn Melodyne installiert ist, ist Pitch-Editing verfügbar, wo du es brauchst. Öffne einen Clip und fang an zu arbeiten - keine dedizierten Spuren, kein Plugin-Management, kein Einrichtungsritual. TayPE enthält außerdem das Tastaturprofil „Industry Standard“ für Produzenten, deren Wetware bereits auf Pro Tools gemappt ist, damit erfahrene Hände sich vom ersten Tag an zuhause fühlen.",
            "arranger-flow-kicker": "Fange den Sound ein, der den Take inspiriert hat.",
            "screenshots-laforge-heading": "LaForgé",
            "finish-heading": "Fertig werden, ohne den Flow zu verlassen",
            "finish-kicker": "Schauen. Hören. Anpassen. Fertigstellen.",
            "finish-copy": "LaForgé ist ein Finishing-Raum und ein Fenster auf deinen Mix. Auf der letzten Meile bleiben viele Platten stecken. Wenn die Lautheit steigt und die Ziellinie näher rückt, zeigen belastete Mixe, was wirklich in ihnen steckt. LaForgé hilft dir, sichtbar zu machen, was wirklich da ist, mit der Musik verbunden zu bleiben und die letzten Entscheidungen zu treffen, die aus einem Mix eine Platte machen.",
            "a11y-heading": "Für alle gebaut",
            "pricing-heading": "Preise",
            "price-personal-try-first": "TayPE herunterladen und vor dem Kauf testen.",
            "price-commercial-try-first": "TayPE herunterladen und vor dem Kauf testen.",
            "demo-heading": "So läuft’s.",
            "demo-trust-framing": "TayPE basiert auf gegenseitigem Vertrauen.",
            "demo-what-that-means": "Was das heißt:",
            "demo-trust-1": "Keine Abos",
            "demo-trust-2": "Kein DRM",
            "demo-trust-3": "Keine Feature-Limits",
            "demo-trust-4": "Kein Nachhausetelefonieren",
            "demo-connector": "Wenn es für dich funktioniert, kauf bitte eine unbefristete Lizenz. Damit bricht TayPE neue Bahnen und werden Bugs erschlagen.",
            "price-personal-title": "Privat",
            "price-personal-note": "Einmalkauf",
            "price-personal-feature-1": "Vollständige Anwendung, alle Funktionen",
            "price-personal-feature-2": "2 Hauptversionen (Eras) mit enthaltenen Updates",
            "price-personal-cta": "Jetzt kaufen",
            "price-commercial-title": "Gewerblich",
            "price-commercial-note": "Einmalkauf",
            "price-commercial-feature-1": "Vollständige Anwendung, alle Funktionen",
            "price-commercial-feature-2": "2 Hauptversionen (Eras) mit enthaltenen Updates",
            "price-commercial-cta": "Jetzt kaufen",
            "education-heading": "Bildung",
            "education-copy": "Kostenlos für Studierende und Lehrende. Schreib uns für einen Rabattcode.",
            "education-instagram": "Instagram \u2192",
            "education-reddit": "Reddit \u2192",
            "accessibility-note": "Studierende kostenlos. Barrierefreiheits-Vergünstigungen. Frag einfach.",
            "pricing-cadence-note": "Major-Versionen (Eras) erscheinen typischerweise in einem jährlichen Rhythmus.\n\nDie neueste Era erhält neue Funktionen. Die vorherige Era bleibt im Long Term Support (LTS), mit Wartungs- und Fehlerbehebungs-Releases.\n\nDeine Lizenz umfasst die aktuelle Era und die nächste, normalerweise also 2 Jahre Funktionsupdates und 3 Jahre Wartungsabdeckung.\n\nBei der Verlängerung erhalten bestehende Nutzer einen deutlichen Rabatt beim Wechsel von jeder früheren Version.",
            "download-heading": "Los geht's",
            "download-copy": "Voll funktionsfähige Trustware. Keine Demo-Einschränkungen, kein Ablaufdatum, kein Rauschen.",
            "download-apply": "Jetzt herunterladen",
            "community-heading": "Community & Support",
            "community-card-1-title": "Wissensbasis",
            "community-card-1-body": "Benutzerhandbuch und Referenzdokumentation. Alles, was du zum Einstieg und für den Tiefgang brauchst.",
            "community-card-1-link": "Das Handbuch lesen \u2192",
            "community-card-2-title": "Beta-Programm",
            "community-card-2-body": "Frühe Builds und Release Candidates, bevor der öffentliche Download wechselt.",
            "community-card-2-link": "Am Beta-Programm teilnehmen \u2192",
            "community-card-3-title": "Kontakt aufnehmen",
            "community-card-3-body": "Bug, Frage, oder einfach Hallo sagen? Schreib uns - anonym ist okay, aber lass deine E-Mail da, wenn du eine Antwort möchtest.",
            "community-card-3-link": "Kontakt aufnehmen \u2192",
            "community-card-4-title": "Mitverfolgen",
            "community-card-4-body": "Entwicklungs-Updates, Studiosessions und Blicke hinter die Kulissen bei Ruminant Audio Works.",
            "community-card-4-instagram": "Instagram \u2192",
            "community-card-4-youtube": "YouTube \u2192",
            "community-card-4-reddit": "Reddit \u2192",
            "footer-features": "Funktionen",
            "footer-pricing": "Preise",
            "footer-download": "Los geht's",
            "footer-docs": "Docs",
            "footer-community": "Community",
            "footer-bug": "Kontakt",
            "footer-copy": "\u00a9 2026 Ruminant Audio Works. TayPE ist ein Produkt von Ruminant Audio Works Ltd. Company No. 16978494. Registered in England and Wales."
        },
        html: {
            "a11y-copy": "<strong>Handwerk braucht Zugang.</strong> <strong>Barrierefreiheit ist kein Feature. Sie ist ein Fundament.</strong> Denn die Oberfläche muss Musikerinnen und Musiker dort abholen, wo sie sind. TayPE strebt durchgängig WCAG 2.2 AA an. Hochkontrast-Modus mit 15:1+ Textverhältnis. Jeder Zustand wird über Form und Icon vermittelt, nie nur über Farbe. Tastenkürzel für jede Aktion. Für nicht-visuelle Workflows ist MCP über Claude oder Codex das primäre Interface - Sprachsteuerung inklusive. Native Screenreader-Unterstützung kommt in Q3 2026."
        },
        attrs: {
            "nav-logo": { alt: "TayPE-Logo" },
            "hero-logo": { alt: "TayPE-Spulenlogo" },
            "screenshot-tape": { alt: "TayPE tape machine - reel-to-reel tape transport above multitrack mixer channels" },
            "screenshot-1": { alt: "TayPE mixer - multi-track channel strips with modelled preamps, EQ, compressor, inserts, and faders" },
            "screenshot-2": { alt: "TayPE arranger - clips arranged across tracks with track headers and transport controls" },
            "screenshot-laforge": { alt: "TayPE LaForgé mastering view - limiter, loudness statistics, loudness graph, stereo tools, mixer channels, and master bus" },
            "footer-logo": { alt: "Ruminant Audio Works" }
        },
        gregisms: [
            "Du wirst alles besitzen und glücklich sein",
            "Leg dich auf den Take fest",
            "Hör auf zu schrauben. Fang an fertig zu werden",
            "Das rote Licht ist dein Freund",
            "Wenn es gut klingt, könnte es gut sein. Mach dir einen Tee und komm noch mal darauf zurück",
            "Druck es raus. Weitergehen",
            "Gefühl ist kein Plugin-Parameter",
            "Der beste Kompressor ist Commitment",
            "Dem Song ist deine Signalkette egal",
            "Hör auf mit Solo. Fang an zuzuhören",
            "hör nicht mit den Augen",
            "Ein großartiger Song, schlecht aufgenommen, schlägt einen schlechten Song, perfekt aufgenommen",
            "Der Mute-Schalter ist das mächtigste Werkzeug in deinem Rack",
            "Bounce es. Benenn es. Vergiss es",
            "Wenn du es in Mono nicht hörst, existiert es nicht",
            "Zu einem Phasenkorrelationsmesser hat noch nie jemand getanzt",
            "Präsenz vor Politur",
            "Die Aufnahmetaste ist kein Vorschlag",
            "Du mischst nicht. Du weichst dem Fertigwerden aus",
            "Schick den Rough Mix raus",
            "Drei Mikros und ein guter Raum schlagen zweiunddreißig Plugins",
            "Archivieren ist keine Prokrastination. Es ist eine Entscheidung",
            "Das beste EQ ist das Arrangement",
            "Dein Referenztrack belügt dich. Vertraue deinen Ohren",
            "Weniger Spuren, mehr Wahrheit",
            "Der Klick macht nicht den Groove. Das macht der Drummer",
            "Wenn es mehr als drei Plugins braucht, ist die Quelle falsch",
            "Mach die Platte",
            "Mach den Browser zu, kauf den Kram nicht und mach die Platte fertig",
            "Macht es die Platte?",
            "Es sind die Regler, die du nicht drehst",
            "Mono ist das neue Stereo",
            "Schlangenöl?",
            "Weiterdrücken!",
            "Lass uns loslegen",
            "Lass uns anfangen",
            "Jetzt mit extra Schrauben und Rost",
            "Läuft ganz wunderbar",
            "Wo willst du mit dem Stem-Splitter hin? Das ist meine Kickdrum",
            "Nur noch ein hauchdünnes Plugin, dann bin ich gut",
            "der absolute Gamechanger-Cheatcode, von dem die Profis nicht wollen, dass du ihn kennst",
            "Premium-Abo enthält jetzt legit Bio-Mojo aus zweifelhafter Herkunft",
            "4 Plugins max, sonst stimmt die Quelle nicht",
            "Die Witterung hat Captain Oates erledigt",
            "jetzt mit 260 % mehr Cowbell",
            "der geht bis elf",
            "Hab die ganze Zeit eine gute Zeit",
            "Die Kritik sagte, dieser Mix sei ein Triumph der Mittelmäßigkeit",
            "Auf Quantenebene ist analog einfach digital",
            "Jetzt mit extra Love Supreme",
            "John Coltrane",
            "Immer 24 Stunden von Tulsa entfernt",
            "160 % mehr Justified and Ancient",
            "90 % weniger Gerede, 95 % mehr Action",
            "Die DAWlose DAW",
            "Mama hat gesagt, es würde solche Tage geben",
            "dein Fader ist das beste Plugin",
            "irgendwo in diesem Code steckt ein kleiner Steinkreis",
            "hau ab!",
            "UVP Sechs Trillionen Dollar",
            "Lehrer und Studenten kostenlos, das ist unendlicher ROI",
            "Passt gut zu Tee und Keksen",
            "Ruhm bedeutet einfach, dass viele, viele Leute wissen, dass es dich gibt, jetzt mach die Platte",
            "spür den Drop",
            "lass den Druck los",
            "ehrlich, ich würde es dir sagen, wenn das bezahlte Werbung wäre",
            "E.T might phone home - TayPE won't",
            "Eine Veränderung wird kommen",
            "Flooping the pig since '76",
            "now loading your unfinished biz",
            "Plugmaxxing ist so anstrengend",
            "Finde heraus, wer du bist, und mach es mit Absicht",
            "Es kostet verdammt viel CPU, so billig zu klingen",
            "Drei Mikrofone und die Wahrheit",
            "Takes sind billig, wie Tränen im Regen",
            "Direkt aus Plumpton",
            "Steh dir nicht selbst im Weg und mach das Ding"
        ]
    },
    "es-es": {
        lang: "es-ES",
        fontMode: "sans",
        quoteOpen: "\u00ab",
        quoteClose: "\u00bb",
        title: "TayPE - Primero el oficio. Accesible desde el diseño.",
        metaDescription: "TayPE es una DAW multipista para músicos que quieren terminar discos, no pelear con el software. Objetivo: WCAG 2.2 AA. Nativo MCP - Claude o Codex (con voz) es la interfaz no visual principal. macOS.",
        ogTitle: "TayPE - Haz el disco",
        ogDescription: "Primero el oficio. Accesible desde el diseño.",
        text: {
            "lang-switch-label": "Idioma",
            "nav-features": "Funciones",
            "nav-pricing": "Precios",
            "nav-docs": "Docs",
            "nav-community": "Comunidad",
            "nav-download-link": "Obtener TayPE",
            "hero-descriptor": "DAW multipista para macOS",
            "hero-tagline-text": "Primero el oficio. Accesible desde el diseño.",
            "hero-cta": "A grabar",
            "hero-platform": "macOS Monterey+ \u00b7 Nativo en Apple Silicon + Intel \u00b7 Host VST3",
            "tone-heading": "Arquitectura de tono",
            "tone-intro-1": "TayPE no es un mezclador digital plano. Cada canal puede pasar por una etapa de preamplificador modelada - carácter de hardware real capturado por Neural Amp Modeler y aplicado en la fuente. En el bus de mezcla, un motor de sumas modelado añade saturación, cohesión y empuje al estilo de consola.",
            "tone-intro-2": "Sin plugins. La emulación de consola corre directamente en el motor de audio - tensores de pesos compartidos, estado por canal, latencia adicional cero. Misma filosofía que el DSP acelerado por hardware, integrado en el mezclador, no añadido por encima.",
            "tone-kicker": "Primero el oficio. El tono en el centro.",
            "philosophy-heading": "Haz el disco",
            "philosophy-copy-1": "Taylor's Performance Environment existe para ayudarte a hacer el disco, no a ahogarte en opciones infinitas. Una DAW multipista con alma de grabadora de cinta.\nConstruida alrededor del flujo y la sensación de una gran consola de mezclas.\nMenos modos, menos menús, más música.",
            "screenshots-tape-heading": "The Tape",
            "screenshots-heading": "La consola de mezclas",
            "screenshots-arranger-heading": "The Arranger",
            "arranger-flow-heading": "Hecho para terminar discos, no solo bosquejar ideas",
            "arranger-flow-copy-1": "El arranger de TayPE es deliberadamente ligero, pero no es un juguete. Edita audio directamente en la línea de tiempo con la velocidad y precisión que exigen los flujos de grabación profesionales, sin quedar enterrado bajo ventanas, diálogos y configuración interminable. El foco está en terminar discos, no en administrar software.",
            "arranger-flow-copy-2": "Graba instrumentos software como audio manteniendo la interpretación MIDI original adjunta debajo. Cambia notas, timing o instrumentación más tarde si lo necesitas. Comprométete con el sonido sin comprometerte para siempre.",
            "arranger-flow-copy-3": "Si Melodyne está instalado, la edición de afinación está disponible donde la necesites. Abre cualquier clip y empieza a trabajar - sin pistas dedicadas, gestión de plugins ni ritual de configuración. TayPE también incluye el perfil de atajos «Industry Standard» para productores cuyo wetware ya está mapeado a Pro Tools, ayudando a que las manos expertas se sientan en casa desde el primer día.",
            "arranger-flow-kicker": "Captura el sonido que inspiró la toma.",
            "screenshots-laforge-heading": "LaForgé",
            "finish-heading": "Termina sin salir del flujo",
            "finish-kicker": "Mira. Escucha. Ajusta. Termina.",
            "finish-copy": "LaForgé es una sala de acabado y una ventana a tu mezcla. La última milla es donde muchos discos se atascan. A medida que sube la sonoridad y se acerca la meta, las mezclas sometidas a presión empiezan a revelar lo que realmente hay. LaForgé te ayuda a descubrir lo que está ahí de verdad, seguir conectado con la música y tomar las decisiones finales que convierten una mezcla en un disco.",
            "a11y-heading": "Hecho para todo el mundo",
            "pricing-heading": "Precios",
            "price-personal-try-first": "Descarga TayPE y pruébalo antes de comprar.",
            "price-commercial-try-first": "Descarga TayPE y pruébalo antes de comprar.",
            "demo-heading": "El trato es así.",
            "demo-trust-framing": "TayPE funciona con confianza mutua.",
            "demo-what-that-means": "Lo que significa:",
            "demo-trust-1": "Sin suscripciones",
            "demo-trust-2": "Sin DRM",
            "demo-trust-3": "Sin límites de funciones",
            "demo-trust-4": "Sin telemetría",
            "demo-connector": "Si te funciona, por favor compra una licencia perpetua. Así TayPE sigue rompiendo terreno y aplastando bugs.",
            "price-personal-title": "Personal",
            "price-personal-note": "pago único",
            "price-personal-feature-1": "Aplicación completa, todas las funciones",
            "price-personal-feature-2": "2 versiones mayores (Eras) de actualizaciones incluidas",
            "price-personal-cta": "Comprar ahora",
            "price-commercial-title": "Comercial",
            "price-commercial-note": "pago único",
            "price-commercial-feature-1": "Aplicación completa, todas las funciones",
            "price-commercial-feature-2": "2 versiones mayores (Eras) de actualizaciones incluidas",
            "price-commercial-cta": "Comprar ahora",
            "education-heading": "Educación",
            "education-copy": "Gratis para estudiantes y docentes. Escríbenos para conseguir un código de descuento.",
            "education-instagram": "Instagram \u2192",
            "education-reddit": "Reddit \u2192",
            "accessibility-note": "Estudiantes gratis. Concesiones de accesibilidad. Sólo pregunta.",
            "pricing-cadence-note": "Las versiones mayores (Eras) se publican normalmente con cadencia anual.\n\nLa Era más reciente recibe funciones nuevas. La Era anterior permanece en Long Term Support (LTS), con versiones de mantenimiento y corrección de bugs.\n\nTu licencia incluye la Era actual y la siguiente, normalmente 2 años de actualizaciones de funciones y 3 años de cobertura de mantenimiento.\n\nAl renovar, los usuarios existentes reciben un descuento significativo al pasar desde cualquier versión anterior.",
            "download-heading": "A grabar",
            "download-copy": "Trustware totalmente funcional. Sin limitaciones de demo, sin caducidad, sin ruido.",
            "download-apply": "Descargar ahora",
            "community-heading": "Comunidad y soporte",
            "community-card-1-title": "Base de conocimiento",
            "community-card-1-body": "Guía de usuario y documentación de referencia. Todo lo que necesitas para empezar y profundizar.",
            "community-card-1-link": "Leer el manual de verdad \u2192",
            "community-card-2-title": "Programa beta",
            "community-card-2-body": "Builds tempranas y release candidates antes de que cambie la descarga pública.",
            "community-card-2-link": "Unirse al programa beta \u2192",
            "community-card-3-title": "Contacta con nosotros",
            "community-card-3-body": "¿Un bug, una pregunta, o solo quieres saludar? Escríbenos - anónimo está bien, pero deja tu correo si quieres respuesta.",
            "community-card-3-link": "Contactar \u2192",
            "community-card-4-title": "Seguir el proyecto",
            "community-card-4-body": "Actualizaciones de desarrollo, sesiones de estudio y detrás de cámaras de Ruminant Audio Works.",
            "community-card-4-instagram": "Instagram \u2192",
            "community-card-4-youtube": "YouTube \u2192",
            "community-card-4-reddit": "Reddit \u2192",
            "footer-features": "Funciones",
            "footer-pricing": "Precios",
            "footer-download": "A grabar",
            "footer-docs": "Docs",
            "footer-community": "Comunidad",
            "footer-bug": "Contacto",
            "footer-copy": "\u00a9 2026 Ruminant Audio Works. TayPE es un producto de Ruminant Audio Works Ltd. Company No. 16978494. Registered in England and Wales."
        },
        html: {
            "a11y-copy": "<strong>El oficio requiere acceso.</strong> <strong>La accesibilidad no es una función. Es un cimiento.</strong> Porque la interfaz debe encontrarse con los músicos donde están. TayPE apunta a WCAG 2.2 AA en todo. Modo de alto contraste con ratios de texto 15:1+. Cada estado se transmite con forma e icono, nunca solo con color. Atajos de teclado para cada acción. Para flujos no visuales, MCP a través de Claude o Codex es la interfaz principal - control por voz incluido. El soporte nativo de lector de pantalla llega en T3 2026."
        },
        attrs: {
            "nav-logo": { alt: "Logo de TayPE" },
            "hero-logo": { alt: "Logo de carrete de TayPE" },
            "screenshot-tape": { alt: "TayPE tape machine - reel-to-reel tape transport above multitrack mixer channels" },
            "screenshot-1": { alt: "TayPE mixer - multi-track channel strips with modelled preamps, EQ, compressor, inserts, and faders" },
            "screenshot-2": { alt: "TayPE arranger - clips arranged across tracks with track headers and transport controls" },
            "screenshot-laforge": { alt: "TayPE LaForgé mastering view - limiter, loudness statistics, loudness graph, stereo tools, mixer channels, and master bus" },
            "footer-logo": { alt: "Ruminant Audio Works" }
        },
        gregisms: [
            "Lo tendrás todo y serás feliz",
            "Comprométete con la toma",
            "Deja de retocar. Empieza a terminar",
            "La luz roja es tu amiga",
            "Si suena bien, puede que esté bien. Ve a tomarte un té y vuelve luego",
            "Imprímelo. Sigue adelante",
            "El feeling no es un parámetro de plugin",
            "El mejor compresor es el compromiso",
            "A la canción le da igual tu cadena de señal",
            "Deja de poner solo. Empieza a escuchar",
            "no escuches con los ojos",
            "Una gran canción mal grabada le gana a una mala canción grabada perfectamente",
            "El botón de mute es la herramienta más potente de tu rack",
            "Rebótalo. Nómbralo. Olvídalo",
            "Si no lo oyes en mono, no existe",
            "Nadie ha bailado jamás con un medidor de correlación de fase",
            "Presencia antes que pulido",
            "El botón de grabar no es una sugerencia",
            "No estás mezclando. Estás evitando terminar",
            "Saca la mezcla preliminar",
            "Tres micros y una buena sala valen más que treinta y dos plugins",
            "Archivar no es procrastinar. Es decidir",
            "El mejor EQ es el arreglo",
            "Tu pista de referencia te está mintiendo. Confía en tus oídos",
            "Menos pistas, más verdad",
            "El clic no hace el groove. Lo hace el batería",
            "Si necesita más de tres plugins, la fuente está mal",
            "Haz el disco",
            "cierra el navegador, no 'le des al gatillo' con ese equipo y termina el disco",
            "¿Hace el disco?",
            "Son los mandos que no tocas",
            "El mono es el nuevo estéreo",
            "¿Aceite de serpiente?",
            "¡Sigue empujando!",
            "Vamos a ello",
            "Vamos a empezar",
            "Ahora con más tornillos y óxido",
            "Va de maravilla",
            "¿Adónde vas con ese separador de stems? Ese es mi bombo",
            "Solo un plugin más, finito como una oblea, y ya estaré bien",
            "el truco definitivo que los pros no quieren que conozcas",
            "el plan premium ahora incluye mojo orgánico legítimo de una procedencia dudosa",
            "4 plugins máximo o la fuente está mal",
            "La exposición fue lo que acabó con el capitán Oates",
            "ahora con 260% más cowbell",
            "este llega hasta once",
            "Pásalo bien todo el tiempo",
            "La reseña dijo que esta mezcla era un triunfo de la mediocridad",
            "A nivel cuántico lo analógico no es más que digital",
            "Ahora con más Love Supreme",
            "John Coltrane",
            "Siempre a 24 horas de Tulsa",
            "160 % más justificado y antiguo",
            "90 % menos conversación, 95 % más acción",
            "La DAW sin DAW",
            "mamá dijo que habría días así",
            "tu fader es el mejor plugin",
            "en algún lugar de este código hay un pequeño henge",
            "¡largo de aquí!",
            "PVP Seis Trillones de Dólares",
            "Profesores y estudiantes gratis, eso es un ROI infinito",
            "Marida bien con tés y galletas",
            "La fama es simplemente que mucha, mucha gente sepa que existes, ahora haz ese disco",
            "siente el drop",
            "libera la presión",
            "en serio, te lo diría si esto fuera una promo pagada",
            "E.T might phone home - TayPE won't",
            "Un cambio va a llegar",
            "Flooping the pig since '76",
            "now loading your unfinished biz",
            "El plugmaxxing agota tanto",
            "Averigua quién eres y hazlo a propósito",
            "Cuesta mucha CPU sonar así de barato",
            "Tres micros y la verdad",
            "Las tomas son baratas, como lágrimas en la lluvia",
            "Directo desde Plumpton",
            "Quítate de tu propio camino y haz la cosa"
        ]
    },
    "is-is": {
        lang: "is-IS",
        fontMode: "sans",
        quoteOpen: "\u201e",
        quoteClose: "\u201c",
        title: "TayPE - Handverkið fyrst. Aðgengilegt frá upphafi.",
        metaDescription: "TayPE er fjölrásar DAW fyrir tónlistarmenn sem vilja klára plötur, ekki berjast við hugbúnað. Markmið WCAG 2.2 AA. MCP-innfæddur - Claude eða Codex (með röddu) er aðalviðmót án sjónar. macOS.",
        ogTitle: "TayPE - Gerðu plötuna",
        ogDescription: "Handverkið fyrst. Aðgengilegt frá upphafi.",
        text: {
            "lang-switch-label": "Tungumál",
            "nav-features": "Eiginleikar",
            "nav-pricing": "Verð",
            "nav-docs": "Skjöl",
            "nav-community": "Samfélag",
            "nav-download-link": "Sækja TayPE",
            "hero-descriptor": "Fjölrása DAW fyrir macOS",
            "hero-tagline-text": "Handverkið fyrst. Aðgengilegt frá upphafi.",
            "hero-cta": "Til verks",
            "hero-platform": "macOS Monterey+ \u00b7 Innbyggt fyrir Apple Silicon + Intel \u00b7 VST3 hýsing",
            "tone-heading": "Hljóðarkitektúr",
            "tone-intro-1": "TayPE er ekki flatur stafrænn hljóðblandari. Hver rás getur farið í gegnum líkanaðan formagnara-stig - raunverulegur vélbúnaðarkarakter, fanginn af Neural Amp Modeler og lagður á við upptökurás. Á blöndunarbusinum bætir líkönuð summuvél við konsólkaraktermettun, samheldni og drifkraft.",
            "tone-intro-2": "Engin viðbót þörf. Konsólhermunin keyrir beint inni í hljóðvélinni - sameiginlegir vægitenoraf, ástand á rás, núllminni töf. Sama hugmynd og vélbúnaðarhraðað DSP, byggt inn í blandarann, ekki sett ofan á.",
            "tone-kicker": "Handverkið fyrst. Hljóðið í kjarnanum.",
            "philosophy-heading": "Gerðu plötuna",
            "philosophy-copy-1": "Taylor's Performance Environment er til að hjálpa þér að gera plötuna, ekki sökkva í endalausa valkosti. Fjölrása DAW með sál segulbandstækis.\nByggð í kringum flæði og tilfinningu frábærs hljóðblöndunarborðs.\nFærri hamir, færri valmyndir, meiri tónlist.",
            "screenshots-tape-heading": "The Tape",
            "screenshots-heading": "Mixunarborðið",
            "screenshots-arranger-heading": "The Arranger",
            "arranger-flow-heading": "Byggt til að klára plötur, ekki bara skissa hugmyndir",
            "arranger-flow-copy-1": "Arranger TayPE er meðvitað einfaldur, en hann er ekki leikfang. Breyttu hljóði beint á tímalínunni með þeim hraða og nákvæmni sem fagleg upptökuvinnuflæði krefjast, án þess að týnast í gluggum, samtölum og endalausum stillingum. Áherslan er á að klára plötur, ekki stjórna hugbúnaði.",
            "arranger-flow-copy-2": "Taktu hugbúnaðarhljóðfæri upp sem hljóð og haltu upprunalega MIDI-flutningnum tengdum undir. Breyttu nótum, tímasetningu eða hljóðfærum síðar ef þú þarft. Skuldbittu þig við hljóðið án þess að skuldbinda þig að eilífu.",
            "arranger-flow-copy-3": "Ef Melodyne er uppsett er tónhæðarvinnsla tiltæk hvar sem þú þarft á henni að halda. Opnaðu hvaða klippu sem er og byrjaðu að vinna - engar sérstakar rásir, engin viðbótastjórnun eða uppsetningarathöfn. TayPE inniheldur líka „Industry Standard“ flýtilyklasniðið fyrir pródúsenta sem hafa þegar kortlagt wetware sitt yfir á Pro Tools, sem hjálpar vönum höndum að líða heima frá fyrsta degi.",
            "arranger-flow-kicker": "Fangaðu hljóðið sem kveikti tökuna.",
            "screenshots-laforge-heading": "LaForgé",
            "finish-heading": "Klára án þess að rjúfa flæðið",
            "finish-kicker": "Sjáðu. Hlustaðu. Stilltu. Kláraðu.",
            "finish-copy": "LaForgé er lokavinnsluherbergi og gluggi inn í mixið þitt. Síðasti spölurinn er þar sem margar plötur stöðvast. Þegar hljóðstyrkurinn hækkar og marklínan nálgast fara mix undir álagi að sýna hvað er raunverulega þar. LaForgé hjálpar þér að afhjúpa það sem er raunverulega til staðar, halda tengingu við tónlistina og taka síðustu ákvarðanirnar sem breyta mixi í plötu.",
            "a11y-heading": "Byggt fyrir alla",
            "pricing-heading": "Verð",
            "price-personal-try-first": "Sæktu TayPE og prófaðu áður en þú kaupir.",
            "price-commercial-try-first": "Sæktu TayPE og prófaðu áður en þú kaupir.",
            "demo-heading": "Hér er samningurinn.",
            "demo-trust-framing": "TayPE byggir á gagnkvæmu trausti.",
            "demo-what-that-means": "Hvað það þýðir:",
            "demo-trust-1": "Engar áskriftir",
            "demo-trust-2": "Ekkert DRM",
            "demo-trust-3": "Engin takmörk á eiginleikum",
            "demo-trust-4": "Ekkert kallað heim",
            "demo-connector": "Ef það virkar fyrir þig, vinsamlegast keyptu varanlegt leyfi. Það er það sem heldur TayPE að ryðja brautir og kremja villur.",
            "price-personal-title": "Einstaklingar",
            "price-personal-note": "eitt skipti",
            "price-personal-feature-1": "Fullt forrit, allir eiginleikar",
            "price-personal-feature-2": "2 aðalútgáfur (Eras) með inniföldum uppfærslum",
            "price-personal-cta": "Kaupa núna",
            "price-commercial-title": "Atvinnuleyfi",
            "price-commercial-note": "eitt skipti",
            "price-commercial-feature-1": "Fullt forrit, allir eiginleikar",
            "price-commercial-feature-2": "2 aðalútgáfur (Eras) með inniföldum uppfærslum",
            "price-commercial-cta": "Kaupa núna",
            "education-heading": "Menntun",
            "education-copy": "Ókeypis fyrir nemendur og kennara. Sendu okkur skilaboð fyrir afsláttarkóða.",
            "education-instagram": "Instagram \u2192",
            "education-reddit": "Reddit \u2192",
            "accessibility-note": "Nemendur frítt. Aðgengisívilnun. Bara spyrja.",
            "pricing-cadence-note": "Stórar útgáfur (Eras) koma venjulega út með árlegri tíðni.\n\nNýjasta Era fær nýja eiginleika. Fyrri Era helst í Long Term Support (LTS), með viðhalds- og villuleiðréttingum.\n\nLeyfið þitt innifelur núverandi Era og þá næstu, yfirleitt 2 ár af eiginleikauppfærslum og 3 ár af viðhaldsumfjöllun.\n\nVið endurnýjun fá núverandi notendur verulegan afslátt þegar þeir færa sig frá hvaða fyrri útgáfu sem er.",
            "download-heading": "Til verks",
            "download-copy": "Fullvirkt Trustware. Engar demo-takmarkanir, engin fyrning, ekkert suð.",
            "download-apply": "Sækja núna",
            "community-heading": "Samfélag og stuðningur",
            "community-card-1-title": "Þekkingargrunnur",
            "community-card-1-body": "Notendahandbók og tilvísunarskjöl. Allt sem þú þarft til að byrja og kafa dýpra.",
            "community-card-1-link": "Lesa handbókina \u2192",
            "community-card-2-title": "Betaforrit",
            "community-card-2-body": "Fáðu snemmútgáfur og útgáfukandidata áður en opinbera niðurhalið færist.",
            "community-card-2-link": "Taka þátt í betaforritinu \u2192",
            "community-card-3-title": "Hafðu samband",
            "community-card-3-body": "Villa, spurning, eða bara til að heilsa? Sendu okkur línu - nafnlaust er fínt, en skildu eftir netfangið þitt ef þú vilt svar.",
            "community-card-3-link": "Haf\u00f0u samband \u2192",
            "community-card-4-title": "Fylgjast með",
            "community-card-4-body": "Þróunaruppfærslur, stúdíólotur og bak við tjöldin hjá Ruminant Audio Works.",
            "community-card-4-instagram": "Instagram \u2192",
            "community-card-4-youtube": "YouTube \u2192",
            "community-card-4-reddit": "Reddit \u2192",
            "footer-features": "Eiginleikar",
            "footer-pricing": "Verð",
            "footer-download": "Til verks",
            "footer-docs": "Skjöl",
            "footer-community": "Samfélag",
            "footer-bug": "Hafðu samband",
            "footer-copy": "\u00a9 2026 Ruminant Audio Works. TayPE er vara frá Ruminant Audio Works Ltd. Company No. 16978494. Registered in England and Wales."
        },
        html: {
            "a11y-copy": "<strong>Iðn krefst aðgengis.</strong> <strong>Aðgengi er ekki eiginleiki. Það er grunnur.</strong>Því viðmótið verður að mæta tónlistarmönnum þar sem þeir eru. TayPE stefnir á WCAG 2.2 AA út um allt. Háskerpustilling með textahlutföll 15:1+. Hvert ástand er flutt með lögun og táknum, aldrei aðeins með lit. Lyklaborðstýra fyrir hverja aðgerð. Fyrir vinnuflæði án sjónar er MCP í gegnum Claude eða Codex aðalviðmótið - raddstýring innifalin. Innfæddur stuðningur við skjálesara kemur á 3. ársfjórðungi 2026."
        },
        attrs: {
            "nav-logo": { alt: "TayPE merki" },
            "hero-logo": { alt: "TayPE spólu-merki" },
            "screenshot-tape": { alt: "TayPE tape machine - reel-to-reel tape transport above multitrack mixer channels" },
            "screenshot-1": { alt: "TayPE mixer - multi-track channel strips with modelled preamps, EQ, compressor, inserts, and faders" },
            "screenshot-2": { alt: "TayPE arranger - clips arranged across tracks with track headers and transport controls" },
            "screenshot-laforge": { alt: "TayPE LaForgé mastering view - limiter, loudness statistics, loudness graph, stereo tools, mixer channels, and master bus" },
            "footer-logo": { alt: "Ruminant Audio Works" }
        },
        gregisms: [
            "Þú munt eiga allt og vera sáttur",
            "Leggðu þig við tökuna",
            "Hættu að fikta. Byrjaðu að klára",
            "Rauða ljósið er vinur þinn",
            "Ef það hljómar vel gæti það verið gott. Fáðu þér tebolla og komdu svo aftur að þessu",
            "Prentaðu það. Haltu áfram",
            "Tilfinning er ekki plugin-breyta",
            "Besti compressorinn er skuldbinding",
            "Laginu er alveg sama um signal chain-ið þitt",
            "Hættu að solo-a. Byrjaðu að hlusta",
            "ekki hlusta með augunum",
            "Frábært lag tekið illa vinnur slakt lag tekið fullkomlega",
            "Mute-hnappurinn er öflugasta tólið í rekkanum þínum",
            "Bounce-aðu það. Nefndu það. Gleymdu því",
            "Ef þú heyrir það ekki í mono, þá er það ekki til",
            "Enginn hefur nokkru sinni dansað við phase correlation meter",
            "Nærvera fram yfir gljáa",
            "Record-hnappurinn er ekki tillaga",
            "Þú ert ekki að mixa. Þú ert að forðast að klára",
            "Sendu út rough mixið",
            "Þrír míkar og gott herbergi vinna þrjátíu og tvö plugin",
            "Archive er ekki frestun. Það er ákvörðun",
            "Besta EQ-ið er útsetningin",
            "Reference trackið þitt lýgur að þér. Treystu eyrunum þínum",
            "Færri spor, meiri sannleikur",
            "Klikkið býr ekki til groove-ið. Trommarinn gerir það",
            "Ef það þarf meira en þrjú plugin er upptakan röng",
            "Gerðu plötuna",
            "lokaðu vafranum, 'sláðu ekki til' með þessum gír og kláraðu plötuna",
            "Gerir þetta plötuna?",
            "Það eru hnapparnir sem þú snýrð ekki",
            "Mono er hið nýja stereo",
            "Snákaolía?",
            "Haltu áfram að ýta!",
            "Byrjum á þessu",
            "Byrjum",
            "Nú með fleiri skrúfum og ryði",
            "Gengur alveg prýðilega",
            "Hvert ertu að fara með þennan stem splitter? Þetta er bassatromman mín",
            "Bara eitt örþunnt plugin enn og þá verð ég góður",
            "algjör leikbreytandi svindlkóðinn sem proffarnir vilja ekki að þú vitir af",
            "premium áskriftin inniheldur nú legit lífrænt mojo frá vafasömum uppruna",
            "4 plugin í hámarki eða uppruninn er rangur",
            "Veðráttan var það sem endaði Captain Oates",
            "nú með 260% meiri kúabjöllu",
            "þessi fer upp í ellefu",
            "Skemmtu þér vel allan tímann",
            "Gagnrýnin sagði að þetta mix væri sigurför miðlungsmennskunnar",
            "Á skammtastigi er analog bara digital",
            "Nú með meira Love Supreme",
            "John Coltrane",
            "Alltaf 24 klukkustundum frá Tulsa",
            "160% meira réttlætt og fornt",
            "90% minna spjall, 95% meiri hasar",
            "Dawlausa DAW-in",
            "mamma sagði að það yrðu svona dagar",
            "faderinn þinn er besta pluginið",
            "einhvers staðar í þessum kóða er lítil henge",
            "stökk af!",
            "Leiðbeinandi verð Sex Kvintillión Dollara",
            "Kennarar og nemendur ókeypis, það er óendanleg arðsemi",
            "Fer vel með te og smákökur",
            "Frægð er bara margir, margir sem vita að þú ert til, gerðu nú plötuna",
            "finndu droppið",
            "slepptu þrýstingnum",
            "í alvöru, ég myndi segja þér ef þetta væri greidd auglýsing",
            "E.T might phone home - TayPE won't",
            "Breyting er á leiðinni",
            "Flooping the pig since '76",
            "now loading your unfinished biz",
            "Plugmaxxing er svo þreytandi",
            "Finndu út hver þú ert og gerðu það af ásetningi",
            "Það kostar fullt af CPU að hljóma svona ódýrt",
            "Þrír míkar og sannleikurinn",
            "Tökur eru ódýrar, eins og tár í rigningunni",
            "Beint frá Plumpton",
            "Farðu úr eigin leið og kláraðu hlutinn"
        ]
    },
    "nl-nl": {
        lang: "nl-NL",
        fontMode: "pixel",
        quoteOpen: "\u201c",
        quoteClose: "\u201d",
        title: "TayPE - Ambacht eerst. Toegankelijk door ontwerp.",
        metaDescription: "TayPE is een multitrack-DAW voor muzikanten die platen willen afmaken, niet vechten met software. Mikken op WCAG 2.2 AA. MCP-native - Claude of Codex (met spraak) is de primaire niet-visuele interface. macOS.",
        ogTitle: "TayPE - Maak het record",
        ogDescription: "Ambacht eerst. Toegankelijk door ontwerp.",
        text: {
            "lang-switch-label": "Taal",
            "nav-features": "Functies",
            "nav-pricing": "Prijzen",
            "nav-docs": "Docs",
            "nav-community": "Gemeenschap",
            "nav-download-link": "Download TayPE",
            "hero-descriptor": "Multitrack DAW voor macOS",
            "hero-tagline-text": "Ambacht eerst. Toegankelijk door ontwerp.",
            "hero-cta": "Laten we beginnen",
            "hero-platform": "macOS Monterey+ \u00b7 Native voor Apple Silicon + Intel \u00b7 VST3-host",
            "tone-heading": "Toonarchitectuur",
            "tone-intro-1": "TayPE is geen platte digitale mixer. Elk kanaal kan door een gemodelleerde preamp-trap lopen - echt hardware-karakter, gevangen door Neural Amp Modeler en toegepast bij de bron. Op de mix-bus voegt een gemodelleerde sumengine consoletypische saturatie, samenhang en drive toe.",
            "tone-intro-2": "Geen plugins nodig. De console-emulatie draait rechtstreeks in de audio-engine - gedeelde gewicht-tensors, status per kanaal, geen extra latency. Zelfde filosofie als hardwareversnelde DSP, ingebouwd in de mixer, niet erop geplakt.",
            "tone-kicker": "Ambacht eerst. Toon in het hart.",
            "philosophy-heading": "Maak het record",
            "philosophy-copy-1": "Taylor's Performance Environment helpt je de plaat te maken, niet te verdrinken in eindeloze opties. Een multitrack DAW met het hart van een bandapparaat.\nGebouwd rond de flow en het gevoel van een geweldige mengtafel.\nMinder modi, minder menu's, meer muziek.",
            "screenshots-tape-heading": "The Tape",
            "screenshots-heading": "De mengconsole",
            "screenshots-arranger-heading": "The Arranger",
            "arranger-flow-heading": "Gebouwd om platen af te maken, niet alleen ideeën te schetsen",
            "arranger-flow-copy-1": "De arranger van TayPE is bewust lean, maar het is geen speelgoed. Bewerk audio direct op de tijdlijn met de snelheid en precisie die professionele opnameworkflows vragen, zonder begraven te raken onder vensters, dialogen en eindeloze configuratie. De focus ligt op platen afmaken, niet op software beheren.",
            "arranger-flow-copy-2": "Neem software-instrumenten op als audio terwijl de originele MIDI-performance eronder gekoppeld blijft. Verander later noten, timing of instrumentatie als dat nodig is. Commit aan het geluid zonder je voor altijd vast te leggen.",
            "arranger-flow-copy-3": "Als Melodyne is geïnstalleerd, is pitchbewerking beschikbaar waar je die nodig hebt. Open elke clip en begin te werken - geen speciale tracks, pluginbeheer of setup-ritueel. TayPE bevat ook het toetsprofiel “Industry Standard” voor producers wier wetware al aan Pro Tools is gekoppeld, waardoor ervaren handen zich vanaf dag één thuis voelen.",
            "arranger-flow-kicker": "Leg het geluid vast dat de take inspireerde.",
            "screenshots-laforge-heading": "LaForgé",
            "finish-heading": "Afronden zonder uit de flow te stappen",
            "finish-kicker": "Kijk. Luister. Stel bij. Maak af.",
            "finish-copy": "LaForgé is een afwerkingsruimte en een venster op je mix. De laatste meters zijn waar veel platen vastlopen. Terwijl de loudness omhoog komt en de finish nadert, beginnen gespannen mixen zichzelf te verraden. LaForgé helpt je te onthullen wat er echt zit, verbonden te blijven met de muziek en de laatste beslissingen te nemen die een mix in een plaat veranderen.",
            "a11y-heading": "Gemaakt voor iedereen",
            "pricing-heading": "Prijzen",
            "price-personal-try-first": "Download TayPE en probeer het voordat je koopt.",
            "price-commercial-try-first": "Download TayPE en probeer het voordat je koopt.",
            "demo-heading": "Zo zit het.",
            "demo-trust-framing": "TayPE draait op wederzijds vertrouwen.",
            "demo-what-that-means": "Wat dat betekent:",
            "demo-trust-1": "Geen abonnementen",
            "demo-trust-2": "Geen DRM",
            "demo-trust-3": "Geen functielimieten",
            "demo-trust-4": "Geen telemetrie",
            "demo-connector": "Als het voor jou werkt, koop dan alsjeblieft een eeuwigdurende licentie. Dat is wat TayPE vooruit blijft drijven en bugs platlegt.",
            "price-personal-title": "Persoonlijk",
            "price-personal-note": "eenmalige aankoop",
            "price-personal-feature-1": "Volledige toepassing, alle functies",
            "price-personal-feature-2": "2 grote versies (Era's) met inbegrepen updates",
            "price-personal-cta": "Nu kopen",
            "price-commercial-title": "Commercieel",
            "price-commercial-note": "eenmalige aankoop",
            "price-commercial-feature-1": "Volledige toepassing, alle functies",
            "price-commercial-feature-2": "2 grote versies (Era's) met inbegrepen updates",
            "price-commercial-cta": "Nu kopen",
            "education-heading": "Onderwijs",
            "education-copy": "Gratis voor studenten. Stuur ons een DM voor een kortingscode.",
            "education-instagram": "Instagram \u2192",
            "education-reddit": "Reddit \u2192",
            "accessibility-note": "Gratis voor studenten. Toegankelijkheidskortingen. Vraag het gewoon.",
            "pricing-cadence-note": "Major-versies (Era's) komen doorgaans uit in een jaarlijks ritme.\n\nDe nieuwste Era krijgt nieuwe functies. De vorige Era blijft in Long Term Support (LTS), met onderhouds- en bugfix-releases.\n\nJe licentie bevat de huidige Era en de volgende, meestal goed voor 2 jaar functie-updates en 3 jaar onderhoudsdekking.\n\nBij verlenging krijgen bestaande gebruikers een flinke korting bij overstap vanaf elke eerdere versie.",
            "download-heading": "Laten we beginnen",
            "download-copy": "Volledig functionele Trustware. Geen demo-beperkingen, geen vervaldatum, geen ruis.",
            "download-apply": "Nu downloaden",
            "community-heading": "Gemeenschap en ondersteuning",
            "community-card-1-title": "Kennisbank",
            "community-card-1-body": "Gebruikershandleiding en referentiedocumentatie. Alles wat je nodig hebt om aan de slag te gaan en diep in te duiken.",
            "community-card-1-link": "Lees de handleiding \u2192",
            "community-card-2-title": "Betaprogramma",
            "community-card-2-body": "Krijg vroege builds en release candidates voordat de publieke download wisselt.",
            "community-card-2-link": "Doe mee aan het betaprogramma \u2192",
            "community-card-3-title": "Neem contact op",
            "community-card-3-body": "Bug, vraag, of gewoon even hallo zeggen? Stuur ons een berichtje - anoniem is prima, maar laat je e-mail achter als je een reactie wilt.",
            "community-card-3-link": "Neem contact op \u2192",
            "community-card-4-title": "Volgen",
            "community-card-4-body": "Ontwikkelingsupdates, studiosessies en achter de schermen van Ruminant Audio Works.",
            "community-card-4-instagram": "Instagram \u2192",
            "community-card-4-youtube": "YouTube \u2192",
            "community-card-4-reddit": "Reddit \u2192",
            "footer-features": "Functies",
            "footer-pricing": "Prijzen",
            "footer-download": "Laten we beginnen",
            "footer-docs": "Docs",
            "footer-community": "Gemeenschap",
            "footer-bug": "Contact",
            "footer-copy": "\u00a9 2026 Ruminant Audio Works. TayPE is een product van Ruminant Audio Works Ltd. Company No. 16978494. Registered in England and Wales."
        },
        html: {
            "a11y-copy": "<strong>Vakmanschap vraagt toegang.</strong> <strong>Toegankelijkheid is geen feature. Het is een fundament.</strong> Want de interface moet muzikanten ontmoeten waar ze zijn. TayPE mikt overal op WCAG 2.2 AA. Hoogcontrastmodus met tekstratio’s van 15:1+. Elke status wordt overgebracht met vorm en icoon, nooit alleen met kleur. Toetsenbordkortere voor elke handeling. Voor niet-visuele workflows is MCP via Claude of Codex de primaire interface - spraakbediening inbegrepen. Native screenreader-ondersteuning komt in Q3 2026."
        },
        attrs: {
            "nav-logo": { alt: "TayPE-logo" },
            "hero-logo": { alt: "TayPE spoelenlogo" },
            "screenshot-tape": { alt: "TayPE tape machine - reel-to-reel tape transport above multitrack mixer channels" },
            "screenshot-1": { alt: "TayPE mixer - multi-track channel strips with modelled preamps, EQ, compressor, inserts, and faders" },
            "screenshot-2": { alt: "TayPE arranger - clips arranged across tracks with track headers and transport controls" },
            "screenshot-laforge": { alt: "TayPE LaForgé mastering view - limiter, loudness statistics, loudness graph, stereo tools, mixer channels, and master bus" },
            "footer-logo": { alt: "Ruminant Audio Works" }
        },
        gregisms: [
            "Je zult alles bezitten en gelukkig zijn",
            "Commit je aan de take",
            "Stop met knobben draaien. Begin met afmaken",
            "Het rode lampje is je vriend",
            "Klinkt het goed, dan kan het goed zijn. Even thee en dan teruglezen",
            "Mixdown maken. Doorgaan",
            "Feel is geen plugin parameter",
            "De beste compressor is vastberadenheid",
            "Het nummer zit niet op je signaalpad",
            "Stop met soloen. Begin met luisteren",
            "Niet met je ogen luisteren",
            "Een goed nummer slecht opgenomen slaat een slecht nummer perfect opgenomen",
            "De mute knop is het machtigste gereedschap in je rack",
            "Bounce het. Noem het. Vergeet het",
            "Kun je het in mono niet horen, bestaat het niet",
            "Niemand danst op een phase correlation meter",
            "Presence boven glans",
            "De record knop is geen suggestie",
            "Je bent niet aan het mixen. Je bent aan het vermijden om af te maken",
            "Stuur het grove mixdown",
            "Drie mics en een goede ruimte slaat tweeëndertig plugins",
            "Archiveren is geen uitstel. Het is een besluit",
            "De beste EQ is arrangementen",
            "Je referentie-track liegt tegen je. Vertrouw je oren",
            "Minder tracks, meer waarheid",
            "De metronoom maakt de groove niet. De drummer doet het",
            "Nodig je meer dan drie plugins, dan klopt de bron niet",
            "Maak het nummer",
            "Stop met dat jeukende vingertje en maak verdomme het nummer",
            "Helpt het het nummer maken?",
            "Het zijn de knobs die je níet draait",
            "Mono is de nieuwe Stereo",
            "Slangengif?",
            "Doorgaan!",
            "Laten we erin duiken",
            "Laten we beginnen",
            "Nu met extra schroeven en roest",
            "Gaat voorspoedig",
            "Waar ga je heen met die stem splitter? Dat is mijn kickdrum",
            "Nog maar één minuscuul plugintje",
            "De absolute game-changing hack die pro's niet willen dat je weet",
            "Premium plan bevat nu echte organische mojo van dubieuze herkomst",
            "Maximaal 4 plugins, anders klopt de bron niet",
            "Exposure is wat Captain Oates opbrak",
            "Nu met 260% meer cowbell",
            "Dit gaat tot elf",
            "Veel plezier, altijd",
            "De review zei dat deze mix een triomf van middelmatigheid was",
            "Op kwantumniveau is analoog gewoon digitaal",
            "Nu met extra Love Supreme",
            "John Coltrane",
            "Altijd 24 uur uit Tulsa",
            "160% meer justified and ancient",
            "90% minder geklets, 95% meer actie",
            "De pluginloze DAW",
            "Mama zei dat er dagen zoals deze zouden komen",
            "Je fader is de beste plugin",
            "Ergens in deze code zit een klein stonehenge",
            "Rot op!",
            "UVP Zes Miljoen Miljard Dollar",
            "Studenten gratis, dat is oneindig rendement",
            "Gaat prima met thee en koekjes",
            "Roem is gewoon veel mensen die weten dat je bestaat, nu het nummer maken",
            "Druk aflaten sinds '95",
            "Eerlijk, ik zou het je zeggen als dit betaalde promotie was",
            "E.T. belt misschien naar huis - TayPE doet het niet",
            "Een verandering komt eraan",
            "Sinds '76 varkens aan het flouwen",
            "Nu je onafgemaakte werk inladen",
            "Plugmaxxing is zo vermoeiend",
            "Gastheer van de Low Stakes Studio Olympics al 5 jaar op rij",
            "Ontdek wie je bent en doe het met opzet",
            "Het kost veel CPU om zo goedkoop te klinken",
            "Drie mics en de waarheid",
            "Takes zijn goedkoop, als tranen in de regen",
            "Straight outta Plumpton",
            "Kom uit je eigen weg en maak het ding"
        ]
    },
    "it-it": {
        lang: "it-IT",
        fontMode: "pixel",
        quoteOpen: "\u00ab",
        quoteClose: "\u00bb",
        title: "TayPE - Mestiere prima. Accessibile fin dalla progettazione.",
        metaDescription: "TayPE è una DAW multitraccia per musicisti che vogliono finire dischi, non combattere il software. Obiettivo WCAG 2.2 AA. Nativo MCP - Claude o Codex (con voce) è l’interfaccia non visiva principale. macOS.",
        ogTitle: "TayPE - Fai il disco",
        ogDescription: "Mestiere prima. Accessibile fin dalla progettazione.",
        text: {
            "lang-switch-label": "Lingua",
            "nav-features": "Funzioni",
            "nav-pricing": "Prezzi",
            "nav-docs": "Docs",
            "nav-community": "Comunità",
            "nav-download-link": "Ottieni TayPE",
            "hero-descriptor": "DAW multitraccia per macOS",
            "hero-tagline-text": "Mestiere prima. Accessibile fin dalla progettazione.",
            "hero-cta": "Si parte",
            "hero-platform": "macOS Monterey+ \u00b7 Apple Silicon nativo + Intel \u00b7 Host VST3",
            "tone-heading": "Architettura del tono",
            "tone-intro-1": "TayPE non è un mixer digitale piatto. Ogni canale può passare attraverso uno stadio preamp modellato - carattere hardware reale catturato da Neural Amp Modeler e applicato alla sorgente. Sul mix bus, un motore di somma modellato aggiunge saturazione, coesione e spinta da console.",
            "tone-intro-2": "Niente plugin. L’emulazione della console gira direttamente nel motore audio - tensori dei pesi condivisi, stato per canale, zero latenza aggiunta. Stessa filosofia del DSP accelerato in hardware, integrato nel mixer, non posato sopra.",
            "tone-kicker": "Mestiere prima. Tono al centro.",
            "philosophy-heading": "Fai il disco",
            "philosophy-copy-1": "Taylor's Performance Environment esiste per aiutarti a fare il disco, non per annegare in opzioni infinite. Una DAW multitraccia con l'anima di un registratore.\nCostruita attorno al flusso e alla sensazione di una grande console di mixaggio.\nMeno modalità, meno menu, più musica.",
            "screenshots-tape-heading": "The Tape",
            "screenshots-heading": "La console di missaggio",
            "screenshots-arranger-heading": "The Arranger",
            "arranger-flow-heading": "Costruito per finire dischi, non solo abbozzare idee",
            "arranger-flow-copy-1": "L’arranger di TayPE è volutamente snello, ma non è un giocattolo. Modifica l’audio direttamente sulla timeline con la velocità e la precisione richieste dai workflow di registrazione professionali, senza finire sepolto sotto finestre, dialoghi e configurazioni infinite. Il focus è finire dischi, non gestire software.",
            "arranger-flow-copy-2": "Registra gli strumenti software come audio mantenendo la performance MIDI originale collegata sotto. Cambia note, timing o strumentazione più tardi se serve. Impegnati sul suono senza impegnarti per sempre.",
            "arranger-flow-copy-3": "Se Melodyne è installato, l’editing dell’intonazione è disponibile ovunque serva. Apri qualunque clip e inizia a lavorare - niente tracce dedicate, gestione plugin o rituale di setup. TayPE include anche il profilo di scorciatoie “Industry Standard” per producer il cui wetware è già mappato su Pro Tools, aiutando mani esperte a sentirsi a casa fin dal primo giorno.",
            "arranger-flow-kicker": "Cattura il suono che ha ispirato la take.",
            "screenshots-laforge-heading": "LaForgé",
            "finish-heading": "Finisci senza uscire dal flusso",
            "finish-kicker": "Guarda. Ascolta. Regola. Finisci.",
            "finish-copy": "LaForgé è una stanza di finitura e una finestra sul tuo mix. L’ultimo tratto è dove molti dischi si fermano. Quando la loudness sale e il traguardo si avvicina, i mix sotto stress iniziano a rivelarsi. LaForgé ti aiuta a mostrare ciò che c’è davvero, restare connesso alla musica e prendere le decisioni finali che trasformano un mix in un disco.",
            "a11y-heading": "Costruito per tutti",
            "pricing-heading": "Prezzi",
            "price-personal-try-first": "Scarica TayPE e provalo prima di acquistare.",
            "price-commercial-try-first": "Scarica TayPE e provalo prima di acquistare.",
            "demo-heading": "Ecco il patto.",
            "demo-trust-framing": "TayPE si basa sulla fiducia reciproca.",
            "demo-what-that-means": "Cosa significa:",
            "demo-trust-1": "Niente abbonamenti",
            "demo-trust-2": "Niente DRM",
            "demo-trust-3": "Niente limiti alle funzionalità",
            "demo-trust-4": "Niente telemetria",
            "demo-connector": "Se ti funziona, per favore acquista una licenza perpetua. È quello che fa avanzare TayPE e schiaccia i bug.",
            "price-personal-title": "Personale",
            "price-personal-note": "acquisto una tantum",
            "price-personal-feature-1": "Applicazione completa, tutte le funzioni",
            "price-personal-feature-2": "2 versioni principali (Eras) di aggiornamenti inclusi",
            "price-personal-cta": "Acquista ora",
            "price-commercial-title": "Commerciale",
            "price-commercial-note": "acquisto una tantum",
            "price-commercial-feature-1": "Applicazione completa, tutte le funzioni",
            "price-commercial-feature-2": "2 versioni principali (Eras) di aggiornamenti inclusi",
            "price-commercial-cta": "Acquista ora",
            "education-heading": "Istruzione",
            "education-copy": "Gratuito per studenti. Inviaci un DM per un codice sconto.",
            "education-instagram": "Instagram \u2192",
            "education-reddit": "Reddit \u2192",
            "accessibility-note": "Studenti gratis. Agevolazioni accessibilità. Basta chiedere.",
            "pricing-cadence-note": "Le versioni principali (Eras) escono tipicamente con cadenza annuale.\n\nL’Era più recente riceve nuove funzionalità. L’Era precedente resta in Long Term Support (LTS), con rilasci di manutenzione e correzione bug.\n\nLa licenza include l’Era corrente e quella successiva, di solito 2 anni di aggiornamenti funzionali e 3 anni di copertura di manutenzione.\n\nAl rinnovo, gli utenti esistenti ricevono uno sconto significativo passando da qualsiasi versione precedente.",
            "download-heading": "Si parte",
            "download-copy": "Trustware pienamente funzionante. Nessuna limitazione demo, nessuna scadenza, nessun rumore.",
            "download-apply": "Scarica ora",
            "community-heading": "Comunità e supporto",
            "community-card-1-title": "Base di conoscenza",
            "community-card-1-body": "Guida utente e documentazione di riferimento. Tutto ciò di cui hai bisogno per iniziare e approfondire.",
            "community-card-1-link": "Leggi il manuale \u2192",
            "community-card-2-title": "Programma beta",
            "community-card-2-body": "Build anticipate e release candidate prima che cambi il download pubblico.",
            "community-card-2-link": "Partecipa al programma beta \u2192",
            "community-card-3-title": "Contattaci",
            "community-card-3-body": "Un bug, una domanda, o solo per salutare? Scrivici - anonimo va benissimo, ma lascia la tua email se vuoi una risposta.",
            "community-card-3-link": "Contattaci \u2192",
            "community-card-4-title": "Segui",
            "community-card-4-body": "Aggiornamenti di sviluppo, sessioni di studio e dietro le quinte di Ruminant Audio Works.",
            "community-card-4-instagram": "Instagram \u2192",
            "community-card-4-youtube": "YouTube \u2192",
            "community-card-4-reddit": "Reddit \u2192",
            "footer-features": "Funzioni",
            "footer-pricing": "Prezzi",
            "footer-download": "Si parte",
            "footer-docs": "Docs",
            "footer-community": "Comunità",
            "footer-bug": "Contatti",
            "footer-copy": "\u00a9 2026 Ruminant Audio Works. TayPE è un prodotto di Ruminant Audio Works Ltd. Company No. 16978494. Registered in England and Wales."
        },
        html: {
            "a11y-copy": "<strong>L’artigianato richiede accesso.</strong> <strong>L’accessibilità non è una funzionalità. È una fondazione.</strong> Perché l’interfaccia deve andare incontro ai musicisti dove sono. TayPE punta a WCAG 2.2 AA ovunque. Modalità alto contrasto con rapporti testo 15:1+. Ogni stato è espresso con forma e icona, mai solo con il colore. Scorciatoie da tastiera per ogni azione. Per i flussi non visivi, MCP tramite Claude o Codex è l’interfaccia principale - controllo vocale incluso. Il supporto nativo per screen reader arriva nel Q3 2026."
        },
        attrs: {
            "nav-logo": { alt: "Logo TayPE" },
            "hero-logo": { alt: "Logo bobina TayPE" },
            "screenshot-tape": { alt: "TayPE tape machine - reel-to-reel tape transport above multitrack mixer channels" },
            "screenshot-1": { alt: "TayPE mixer - multi-track channel strips with modelled preamps, EQ, compressor, inserts, and faders" },
            "screenshot-2": { alt: "TayPE arranger - clips arranged across tracks with track headers and transport controls" },
            "screenshot-laforge": { alt: "TayPE LaForgé mastering view - limiter, loudness statistics, loudness graph, stereo tools, mixer channels, and master bus" },
            "footer-logo": { alt: "Ruminant Audio Works" }
        },
        gregisms: [
            "Possiederai tutto e sarai felice",
            "Compromettiti con la take",
            "Smetti di girare manopole. Inizia a finire",
            "La spia rossa è tua amica",
            "Se suona bene, potrebbe essere buono. Vai a prenderti un caffè e riconsideralo",
            "Renderizzalo. Vai avanti",
            "Il feel non è un parametro plugin",
            "Il miglior compressore è la determinazione",
            "La canzone non sa del tuo signal chain",
            "Smetti di soloare. Inizia ad ascoltare",
            "Non ascoltare con gli occhi",
            "Una grande canzone registrata male batte una brutta canzone registrata perfetta",
            "Il mute è lo strumento più potente del tuo rack",
            "Rimanda. Nominalo. Dimenticalo",
            "Se non lo senti in mono, non esiste",
            "Nessuno ha mai ballato su un metro di correlazione di fase",
            "Presenza sulla perfezione",
            "Il pulsante record non è una suggerimento",
            "Non stai mixando. Stai evitando di finire",
            "Spedisci il rough mix",
            "Tre microfoni e una buona stanza battono trentadue plugin",
            "L'archivio non è procrastinazione. È una decisione",
            "Il miglior EQ è l'arrangiamento",
            "La tua traccia di riferimento ti sta mentendo. Fidati delle tue orecchie",
            "Meno tracce, più verità",
            "Il metronomo non crea il groove. Lo fa il batterista",
            "Se ti servono più di tre plugin, la sorgente è sbagliata",
            "Registra il brano",
            "Togli quel dito nervoso dal trigger e registra il benedetto brano",
            "Registra il brano?",
            "Sono le manopole che non giri",
            "Mono è il nuovo Stereo",
            "Olio di serpente?",
            "Continua a spingere!",
            "Entriamo in tema",
            "Iniziamo",
            "Ora con viti e ruggine extra",
            "Procede meravigliosamente",
            "Dove stai andando con quello stem splitter? È il mio kick drum",
            "Ancora un piccolissimo plugin",
            "L'assoluto cambio di gioco che i pro non vogliono che tu sappia",
            "Il piano premium include ora autentica mojo organica da fonte dubbia",
            "Massimo 4 plugin o la sorgente è sbagliata",
            "L'esposizione ha finito il Capitano Oates",
            "Ora con il 260% di cowbell in più",
            "Questo sale a undici",
            "Divertiti tutto il tempo",
            "La recensione ha detto che questo mix era un trionfo della mediocrità",
            "A livello quantico l'analogico è solo digitale",
            "Ora con Love Supreme in più",
            "John Coltrane",
            "Sempre a 24 ore da Tulsa",
            "160% più justified and ancient",
            "90% meno conversazione, 95% più azione",
            "La DAW senza plugin",
            "Mamma ha detto che ci sarebbero stati giorni così",
            "Il tuo fader è il miglior plugin",
            "Da qualche parte in questo codice c'è un piccolo henge",
            "Vattene!",
            "PVP Sei Quintilioni di Dollari",
            "Gli studenti entrano gratis, infinito ROI",
            "Si abbina bene a tè e biscotti",
            "La fama è solo un mucchio di gente che sa che esisti, ora registra il brano",
            "Rilasciando la pressione dal '95",
            "Onestamente, te lo direi se fosse una promo pagata",
            "E.T. potrebbe chiamare casa - TayPE no",
            "Un cambiamento arriverà",
            "Maialini floppati dal '76",
            "Ora caricamento dei tuoi affari non finiti",
            "Plugmaxxing è così stressante",
            "Ospite delle Low Stakes Studio Olympics per 5 anni consecutivi",
            "Scopri chi sei e fallo di proposito",
            "Costa molto CPU per suonare così economico",
            "Tre microfoni e la verità",
            "Le take sono economiche, come lacrime nella pioggia",
            "Straight outta Plumpton",
            "Esci da te stesso e registra il coso"
        ]
    },
    "pl-pl": {
        lang: "pl-PL",
        fontMode: "pixel",
        quoteOpen: "\u201e",
        quoteClose: "\u201d",
        title: "TayPE - Rzemiosło przed wszystkim. Dostępne od projektowania.",
        metaDescription: "TayPE to wielośladowa DAW dla muzyków, którzy chcą kończyć płyty, a nie walczyć z oprogramowaniem. Cel: WCAG 2.2 AA. Natywne MCP - Claude lub Codex (z głosem) to główny niewizualny interfejs. macOS.",
        ogTitle: "TayPE - Stwórz rekord",
        ogDescription: "Rzemiosło przed wszystkim. Dostępne od projektowania.",
        text: {
            "lang-switch-label": "Język",
            "nav-features": "Funkcje",
            "nav-pricing": "Ceny",
            "nav-docs": "Docs",
            "nav-community": "Społeczność",
            "nav-download-link": "Pobierz TayPE",
            "hero-descriptor": "Wielościeżkowy DAW dla macOS",
            "hero-tagline-text": "Rzemiosło przed wszystkim. Dostępne od projektowania.",
            "hero-cta": "Zaczynamy",
            "hero-platform": "macOS Monterey+ \u00b7 Apple Silicon Native + Intel \u00b7 Host VST3",
            "tone-heading": "Architektura dźwięku",
            "tone-intro-1": "TayPE to nie płaski cyfrowy mikser. Każdy kanał może przejść przez modelowany stopień przedwzmacniacza - prawdziwy charakter sprzętu uchwycony przez Neural Amp Modeler i nałożony u źródła. Na szynie miksu modelowany silnik sumowania dodaje konsolowe nasycenie, spójność i napęd.",
            "tone-intro-2": "Bez wtyczek. Emulacja konsoli działa bezpośrednio w silniku audio - współdzielone tensory wag, stan na kanał, zero dodanego opóźnienia. Ta sama filozofia, co DSP przyspieszane sprzętowo, wbudowana w mikser, a nie doklejona.",
            "tone-kicker": "Rzemiosło przed wszystkim. Dźwięk w centrum.",
            "philosophy-heading": "Stwórz rekord",
            "philosophy-copy-1": "Taylor's Performance Environment istnieje, aby pomóc ci zrobić płytę, a nie tonąć w nieskończonych opcjach. Wielościeżkowy DAW z duszą magnetofonu.\nZbudowany wokół płynności i odczuć świetnej konsoli mikserskiej.\nMniej trybów, mniej menu, więcej muzyki.",
            "screenshots-tape-heading": "The Tape",
            "screenshots-heading": "Konsoleta mikserska",
            "screenshots-arranger-heading": "The Arranger",
            "arranger-flow-heading": "Zbudowany do kończenia płyt, nie tylko szkicowania pomysłów",
            "arranger-flow-copy-1": "Aranżer TayPE jest celowo prosty, ale to nie zabawka. Edytuj audio bezpośrednio na osi czasu z szybkością i precyzją wymaganą przez profesjonalne workflow nagraniowe, bez zasypywania oknami, dialogami i niekończącą się konfiguracją. Chodzi o kończenie płyt, nie zarządzanie softwarem.",
            "arranger-flow-copy-2": "Nagrywaj instrumenty programowe jako audio, zachowując oryginalne wykonanie MIDI pod spodem. W razie potrzeby później zmień nuty, timing lub instrumentację. Zobowiąż się do brzmienia, nie zobowiązując się na zawsze.",
            "arranger-flow-copy-3": "Jeśli Melodyne jest zainstalowany, edycja wysokości dźwięku jest dostępna tam, gdzie jej potrzebujesz. Otwórz dowolny klip i zacznij pracować - bez dedykowanych ścieżek, zarządzania pluginami czy rytuału konfiguracji. TayPE zawiera też profil skrótów „Industry Standard” dla producentów, których wetware jest już zmapowane na Pro Tools, pomagając doświadczonym dłoniom poczuć się jak u siebie od pierwszego dnia.",
            "arranger-flow-kicker": "Uchwyć brzmienie, które zainspirowało take.",
            "screenshots-laforge-heading": "LaForgé",
            "finish-heading": "Dokończ bez wychodzenia z flow",
            "finish-kicker": "Patrz. Słuchaj. Popraw. Dokończ.",
            "finish-copy": "LaForgé to pokój wykończeniowy i okno na twój miks. Ostatni odcinek to miejsce, w którym wiele płyt grzęźnie. Gdy głośność rośnie, a meta się zbliża, przeciążone miksy zaczynają ujawniać, co naprawdę w nich jest. LaForgé pomaga odsłonić to, co naprawdę tam jest, pozostać połączonym z muzyką i podjąć ostatnie decyzje, które zamieniają miks w płytę.",
            "a11y-heading": "Zbudowane dla wszystkich",
            "pricing-heading": "Ceny",
            "price-personal-try-first": "Pobierz TayPE i wypróbuj go przed zakupem.",
            "price-commercial-try-first": "Pobierz TayPE i wypróbuj go przed zakupem.",
            "demo-heading": "Sprawa wygląda tak.",
            "demo-trust-framing": "TayPE działa na obopólnym zaufaniu.",
            "demo-what-that-means": "Co to znaczy:",
            "demo-trust-1": "Brak subskrypcji",
            "demo-trust-2": "Brak DRM",
            "demo-trust-3": "Brak limitów funkcji",
            "demo-trust-4": "Brak telemetrii",
            "demo-connector": "Jeśli ci pasuje, kup proszę licencję wieczystą. To pozwala TayPE iść naprzód, a bugi iść spać.",
            "price-personal-title": "Osobisty",
            "price-personal-note": "jednorazowy zakup",
            "price-personal-feature-1": "Pełna aplikacja, wszystkie funkcje",
            "price-personal-feature-2": "2 główne wersje (Eras) z aktualizacjami w cenie",
            "price-personal-cta": "Kup teraz",
            "price-commercial-title": "Komercyjny",
            "price-commercial-note": "jednorazowy zakup",
            "price-commercial-feature-1": "Pełna aplikacja, wszystkie funkcje",
            "price-commercial-feature-2": "2 główne wersje (Eras) z aktualizacjami w cenie",
            "price-commercial-cta": "Kup teraz",
            "education-heading": "Edukacja",
            "education-copy": "Bezpłatnie dla studentów. Wyślij nam DM, aby uzyskać kod rabatowy.",
            "education-instagram": "Instagram \u2192",
            "education-reddit": "Reddit \u2192",
            "accessibility-note": "Studenci za darmo. Ulgi dostępnościowe. Po prostu zapytaj.",
            "pricing-cadence-note": "Wersje główne (Eras) ukazują się zwykle w rocznej kadencji.\n\nNajnowsza Era otrzymuje nowe funkcje. Poprzednia Era pozostaje w Long Term Support (LTS), z wydaniami konserwacyjnymi i poprawkami błędów.\n\nLicencja obejmuje bieżącą Erę i następną, zwykle dając 2 lata aktualizacji funkcji i 3 lata utrzymania.\n\nPrzy odnowieniu obecni użytkownicy otrzymują znaczącą zniżkę przy przejściu z dowolnej wcześniejszej wersji.",
            "download-heading": "Zaczynamy",
            "download-copy": "W pełni funkcjonalne Trustware. Bez ograniczeń demo, bez wygaśnięcia, bez szumów.",
            "download-apply": "Pobierz teraz",
            "community-heading": "Społeczność i wsparcie",
            "community-card-1-title": "Baza wiedzy",
            "community-card-1-body": "Przewodnik użytkownika i dokumentacja referencyjna. Wszystko, czego potrzebujesz, aby zacząć i zagłębiać się.",
            "community-card-1-link": "Przeczytaj instrukcję \u2192",
            "community-card-2-title": "Program beta",
            "community-card-2-body": "Wczesne buildy i release candidates zanim zmieni się publiczny download.",
            "community-card-2-link": "Dołącz do programu beta \u2192",
            "community-card-3-title": "Skontaktuj się",
            "community-card-3-body": "Błąd, pytanie, czy po prostu chcesz się przywitać? Napisz do nas - anonimowo też jest ok, ale zostaw e-mail, jeśli chcesz odpowiedź.",
            "community-card-3-link": "Skontaktuj się \u2192",
            "community-card-4-title": "Śledzenie postępu",
            "community-card-4-body": "Aktualizacje programistyczne, sesje studyjne i kulisy Ruminant Audio Works.",
            "community-card-4-instagram": "Instagram \u2192",
            "community-card-4-youtube": "YouTube \u2192",
            "community-card-4-reddit": "Reddit \u2192",
            "footer-features": "Funkcje",
            "footer-pricing": "Ceny",
            "footer-download": "Zaczynamy",
            "footer-docs": "Docs",
            "footer-community": "Społeczność",
            "footer-bug": "Kontakt",
            "footer-copy": "\u00a9 2026 Ruminant Audio Works. TayPE jest produktem Ruminant Audio Works Ltd. Company No. 16978494. Registered in England and Wales."
        },
        html: {
            "a11y-copy": "<strong>Rzemiosło wymaga dostępu.</strong> <strong>Dostępność nie jest funkcją. Jest fundamentem.</strong>Bo interfejs musi spotkać muzyków tam, gdzie są. TayPE celuje w WCAG 2.2 AA wszędzie. Tryb wysokiego kontrastu z proporcjami tekstu 15:1+. Każdy stan jest przekazywany kształtem i ikoną, nigdy samym kolorem. Skróty klawiszowe dla każdej akcji. Dla przepływów niewizualnych, MCP przez Claude lub Codex jest głównym interfejsem - sterowanie głosem włącznie. Natywna obsługa czytników ekranu w III kwartale 2026."
        },
        attrs: {
            "nav-logo": { alt: "Logo TayPE" },
            "hero-logo": { alt: "Logo szpuli TayPE" },
            "screenshot-tape": { alt: "TayPE tape machine - reel-to-reel tape transport above multitrack mixer channels" },
            "screenshot-1": { alt: "TayPE mixer - multi-track channel strips with modelled preamps, EQ, compressor, inserts, and faders" },
            "screenshot-2": { alt: "TayPE arranger - clips arranged across tracks with track headers and transport controls" },
            "screenshot-laforge": { alt: "TayPE LaForgé mastering view - limiter, loudness statistics, loudness graph, stereo tools, mixer channels, and master bus" },
            "footer-logo": { alt: "Ruminant Audio Works" }
        },
        gregisms: [
            "Będziesz posiadać wszystko i być szczęśliwy",
            "Oddaj się nagrywanemu take'owi",
            "Przestań manipulować. Zacznij kończyć",
            "Czerwona lampka to twój przyjaciel",
            "Jeśli brzmi dobrze, może być dobre. Pójść na herbatę i powrócić do tego",
            "Wyeksportuj. Idź dalej",
            "Feel to nie parametr plugina",
            "Najlepszy kompresor to determinacja",
            "Piosenka nie wie nic o twojej ścieżce sygnału",
            "Przestań solować. Zacznij słuchać",
            "Nie słuchaj uszami",
            "Świetna piosenka źle nagrana bije złą piosenkę doskonale nagrana",
            "Przycisk mute to najpotężniejsze narzędzie w twojej półce",
            "Eksportuj. Nazwij. Zapomnij",
            "Jeśli nie słyszysz tego w mono, nie istnieje",
            "Nikt nigdy nie tańczył na metrze korelacji fazy",
            "Obecność ponad perfekcję",
            "Przycisk nagrywania to nie sugestia",
            "Nie mixujesz. Unikasz skończenia",
            "Wyślij rough mix",
            "Trzy mikrofony i dobry pokój bija trzydzieści dwa pluginy",
            "Archiwum to nie procrastynacja. To decyzja",
            "Najlepszy EQ to aranżacja",
            "Twój referencyjny utwór cię kłamie. Ufaj swoim uszom",
            "Mniej ścieżek, więcej prawdy",
            "Metronom nie tworzy groove'u. Robi to perkusjonista",
            "Jeśli potrzebujesz więcej niż trzy pluginy, źródło jest złe",
            "Nagraj utwór",
            "Zdejmij ten drżący palec ze spustu i nagraj ten skład",
            "Nagraj utwór?",
            "To są pokrętła, które nie kręcisz",
            "Mono to nowe Stereo",
            "Tran węża?",
            "Ciągnij dalej!",
            "Zagazujmy się",
            "Zacznijmy",
            "Teraz z dodatkowymi śrubami i rdzą",
            "Idzie zadziwiająco dobrze",
            "Gdzie jedziesz z tym stem splitterem? To mój kick drum",
            "Jeszcze jeden mikroskopijny plugin",
            "Absolutny game-changer, którego pro nie chcą żebyś wiedział",
            "Plan premium zawiera teraz autentyczną organiczną mojo z wątpliwego źródła",
            "Maksymalnie 4 pluginy lub źródło jest złe",
            "Ekspozycja dobrze się skończyła dla Kapitana Oatesa",
            "Teraz z 260% więcej cowbelliem",
            "To idzie do jedenastu",
            "Dobrze się baw cały czas",
            "Recenzja powiedziała że ten mix to triumf przeciętności",
            "Na poziomie kwantowym analog to po prostu cyfra",
            "Teraz z dodatkowo Love Supreme",
            "John Coltrane",
            "Zawsze 24 godziny od Tulsy",
            "160% bardziej justified and ancient",
            "90% mniej rozmów, 95% więcej akcji",
            "DAW bez pluginów",
            "Mama mówiła że będą takie dni",
            "Twój fader to najlepszy plugin",
            "Gdzieś w tym kodzie jest mały henge",
            "Spadaj!",
            "Cena detaliczna Sześć Biliardów Dolarów",
            "Studenci wstęp wolny, nieskończony zwrot",
            "Idealnie do herbaty i ciasteczek",
            "Sława to po prostu mnóstwo ludzi wiedzących że istniejesz, teraz nagraj utwór",
            "Wypuszczając napięcie od '95",
            "Szczerze, powiedziałbym ci gdyby to była płatna promo",
            "E.T. może dzwonić do domu - TayPE nie",
            "Zmiana przyjdzie",
            "Flipując świnki od '76",
            "Ładowanie niedokończonych spraw",
            "Plugmaxxing jest takie wyczerpujące",
            "Gospodarz Low Stakes Studio Olympics przez 5 lat z rzędu",
            "Odkryj kim jesteś i rób to celowo",
            "To kosztuje sporo CPU aby brzmieć tak tanio",
            "Trzy mikrofony i prawda",
            "Take'i są tanie, jak łzy w deszczu",
            "Straight outta Plumpton",
            "Wyjdź z siebie i nagraj tę rzecz"
        ]
    },
    "uk-ua": {
        lang: "uk-UA",
        fontMode: "pixel",
        quoteOpen: "\u00ab",
        quoteClose: "\u00bb",
        title: "TayPE - Ремесло спочатку. Доступний за дизайном.",
        metaDescription: "TayPE - це багатодоріжкова DAW для музикантів, які хочуть закінчувати платівки, а не воювати з програмою. Ціль WCAG 2.2 AA. MCP-нативно - Claude або Codex (з голосом) є основним невізуальним інтерфейсом. macOS.",
        ogTitle: "TayPE - Зробити запис",
        ogDescription: "Ремесло спочатку. Доступний за дизайном.",
        text: {
            "lang-switch-label": "Мова",
            "nav-features": "Функції",
            "nav-pricing": "Ціни",
            "nav-docs": "Docs",
            "nav-community": "Спільнота",
            "nav-download-link": "Отримати TayPE",
            "hero-descriptor": "Багатодоріжковий DAW для macOS",
            "hero-tagline-text": "Ремесло спочатку. Доступний за дизайном.",
            "hero-cta": "Поїхали",
            "hero-platform": "macOS Monterey+ \u00b7 Apple Silicon Native + Intel \u00b7 VST3 хост",
            "tone-heading": "Архітектура тону",
            "tone-intro-1": "TayPE - це не плаский цифровий мікшер. Кожен канал може пройти через змодельований передпідсилювач - справжній характер обладнання, схоплений Neural Amp Modeler і застосований на джерелі. На мікс-шині змодельований двигун сумування додає консольну сатурацію, цілісність і драйв.",
            "tone-intro-2": "Без плагінів. Емуляція консолі працює просто всередині аудіодвигуна - спільні тензори ваг, стан на канал, нуль доданої затримки. Та сама філософія, що й апаратно-прискорений DSP, вбудована в мікшер, не приклеєна зверху.",
            "tone-kicker": "Ремесло спочатку. Тон у центрі.",
            "philosophy-heading": "Зробити запис",
            "philosophy-copy-1": "Taylor's Performance Environment існує, щоб допомогти вам зробити запис, а не потонути в безкінечних опціях. Багатодоріжковий DAW з душею магнітофона.\nПобудований навколо потоку й відчуття чудової мікшерної консолі.\nМенше режимів, менше меню, більше музики.",
            "screenshots-tape-heading": "The Tape",
            "screenshots-heading": "Мікшерна консоль",
            "screenshots-arranger-heading": "The Arranger",
            "arranger-flow-heading": "Створено для завершення записів, а не лише для ескізів ідей",
            "arranger-flow-copy-1": "Аранжувальник TayPE навмисно лаконічний, але це не іграшка. Редагуйте аудіо прямо на таймлайні зі швидкістю та точністю, яких вимагають професійні recording workflow, без занурення у вікна, діалоги й нескінченні налаштування. Фокус - завершувати записи, а не керувати софтом.",
            "arranger-flow-copy-2": "Записуйте програмні інструменти як аудіо, зберігаючи оригінальне MIDI-виконання прикріпленим під ним. За потреби змініть ноти, таймінг або інструментування пізніше. Фіксуйте звук, не фіксуючи себе назавжди.",
            "arranger-flow-copy-3": "Якщо Melodyne встановлено, редагування висоти тону доступне там, де потрібне. Відкрийте будь-який кліп і починайте працювати - без спеціальних доріжок, керування плагінами чи ритуалу налаштування. TayPE також містить профіль гарячих клавіш «Industry Standard» для продюсерів, чий wetware вже зіставлений із Pro Tools, допомагаючи досвідченим рукам почуватися як удома з першого дня.",
            "arranger-flow-kicker": "Захопіть звук, який надихнув тейк.",
            "screenshots-laforge-heading": "LaForgé",
            "finish-heading": "Завершуйте, не виходячи з потоку",
            "finish-kicker": "Дивіться. Слухайте. Налаштовуйте. Завершуйте.",
            "finish-copy": "LaForgé - це кімната фінального доведення і вікно у ваш мікс. Саме на останньому відрізку багато записів зупиняються. Коли гучність зростає, а фініш наближається, напружені мікси починають показувати, що в них справді є. LaForgé допомагає відкрити те, що справді там є, залишатися пов’язаними з музикою і прийняти фінальні рішення, які перетворюють мікс на запис.",
            "a11y-heading": "Побудовано для всіх",
            "pricing-heading": "Ціни",
            "price-personal-try-first": "Завантажте TayPE і спробуйте перед купівлею.",
            "price-commercial-try-first": "Завантажте TayPE і спробуйте перед купівлею.",
            "demo-heading": "Угода така.",
            "demo-trust-framing": "TayPE працює на взаємній довірі.",
            "demo-what-that-means": "Що це означає:",
            "demo-trust-1": "Без підписок",
            "demo-trust-2": "Без DRM",
            "demo-trust-3": "Без обмежень функцій",
            "demo-trust-4": "Без телеметрії",
            "demo-connector": "Якщо тобі підходить - будь ласка, купи безстрокову ліцензію. Саме це тримає TayPE у русі вперед і чавить баги.",
            "price-personal-title": "Особистий",
            "price-personal-note": "одноразова покупка",
            "price-personal-feature-1": "Повна програма, всі функції",
            "price-personal-feature-2": "2 основні версії (Eras) з включеними оновленнями",
            "price-personal-cta": "Купити зараз",
            "price-commercial-title": "Комерційний",
            "price-commercial-note": "одноразова покупка",
            "price-commercial-feature-1": "Повна програма, всі функції",
            "price-commercial-feature-2": "2 основні версії (Eras) з включеними оновленнями",
            "price-commercial-cta": "Купити зараз",
            "education-heading": "Освіта",
            "education-copy": "Безпечно для студентів. Надішліть нам DM для кодексу дисконту.",
            "education-instagram": "Instagram \u2192",
            "education-reddit": "Reddit \u2192",
            "accessibility-note": "Студенти безкоштовно. Знижки за доступністю. Просто спитай.",
            "pricing-cadence-note": "Основні версії (Eras) зазвичай виходять із річною періодичністю.\n\nНайновіша Era отримує нові функції. Попередня Era залишається в Long Term Support (LTS), з релізами обслуговування та виправлення помилок.\n\nЛіцензія включає поточну Era і наступну, зазвичай даючи 2 роки функціональних оновлень і 3 роки обслуговування.\n\nПід час поновлення чинні користувачі отримують значну знижку при переході з будь-якої попередньої версії.",
            "download-heading": "Поїхали",
            "download-copy": "Повністю функціональна Trustware. Без демо-обмежень, без завершення терміну дії, без шумів.",
            "download-apply": "Завантажити зараз",
            "community-heading": "Спільнота та підтримка",
            "community-card-1-title": "База знань",
            "community-card-1-body": "Посібник користувача та довідкова документація. Все, що вам потрібно, щоб почати та поглибити.",
            "community-card-1-link": "Прочитайте посібник \u2192",
            "community-card-2-title": "Бета-програма",
            "community-card-2-body": "Ранні збірки та release candidates до зміни публічного завантаження.",
            "community-card-2-link": "Приєднатися до бета-програми \u2192",
            "community-card-3-title": "Зв'язатися",
            "community-card-3-body": "Помилка, питання чи просто хочеш привітатися? Напиши нам - анонімно теж нормально, але залиш свою електронну пошту, якщо хочеш відповідь.",
            "community-card-3-link": "Зв'язатися \u2192",
            "community-card-4-title": "Стежити",
            "community-card-4-body": "Оновлення розробки, студійні сеанси та закулісся Ruminant Audio Works.",
            "community-card-4-instagram": "Instagram \u2192",
            "community-card-4-youtube": "YouTube \u2192",
            "community-card-4-reddit": "Reddit \u2192",
            "footer-features": "Функції",
            "footer-pricing": "Ціни",
            "footer-download": "Поїхали",
            "footer-docs": "Docs",
            "footer-community": "Спільнота",
            "footer-bug": "Контакти",
            "footer-copy": "\u00a9 2026 Ruminant Audio Works. TayPE - це продукт Ruminant Audio Works Ltd. Company No. 16978494. Registered in England and Wales."
        },
        html: {
            "a11y-copy": "<strong>Ремесло потребує доступу.</strong> <strong>Доступність - не функція. Це фундамент.</strong>Бо інтерфейс має зустрічати музикантів там, де вони є. TayPE цілиться в WCAG 2.2 AA усюди. Режим високого контрасту з співвідношенням тексту 15:1+. Кожен стан передається формою та іконкою, ніколи лише кольором. Гарячі клавіші для кожної дії. Для невізуальних робочих процесів MCP через Claude чи Codex є основним інтерфейсом - голосове керування включено. Нативна підтримка скрінрідерів у III кварталі 2026."
        },
        attrs: {
            "nav-logo": { alt: "Логотип TayPE" },
            "hero-logo": { alt: "Логотип котушки TayPE" },
            "screenshot-tape": { alt: "TayPE tape machine - reel-to-reel tape transport above multitrack mixer channels" },
            "screenshot-1": { alt: "TayPE mixer - multi-track channel strips with modelled preamps, EQ, compressor, inserts, and faders" },
            "screenshot-2": { alt: "TayPE arranger - clips arranged across tracks with track headers and transport controls" },
            "screenshot-laforge": { alt: "TayPE LaForgé mastering view - limiter, loudness statistics, loudness graph, stereo tools, mixer channels, and master bus" },
            "footer-logo": { alt: "Ruminant Audio Works" }
        },
        gregisms: [
            "Ти матимеш все й будеш щасливим",
            "Віддайся тейку",
            "Припини крутити ручки. Почни завершувати",
            "Червоне світло - твій друг",
            "Якщо звучить добре, то може бути добрим. Пов чай та повернись до цього",
            "Експортуй. Іди далі",
            "Feel - це не параметр плагіна",
            "Найкращий компресор - це рішучість",
            "Пісня нічого не знає про твій сигнальний ланцюг",
            "Припини соло. Почни слухати",
            "Не слухай очима",
            "Чудова пісня, погано записана, краща за погану пісню ідеально записану",
            "Кнопка mute - найпотужніший інструмент у твойому рекові",
            "Експортуй. Назви. Забудь",
            "Якщо не чуєш монозвуку, то це не існує",
            "Ніхто ніколи не танцював під метром кореляції фази",
            "Присутність над лиском",
            "Кнопка запису - це не пропозиція",
            "Ти не мікшуєш. Ти уникаєш завершення",
            "Випусти грубий мікс",
            "Три мікрофони та гарна кімната краще за тридцять два плагіни",
            "Архів - це не прокрастинація. Це рішення",
            "Найкращий EQ - це аранжування",
            "Твоя референтна композиція тебе обманює. Вір своїм вухам",
            "Менше доріжок, більше правди",
            "Метроном не робить groove. Робить це барабанщик",
            "Якщо потрібно більше ніж три плагіни, то джерело неправильне",
            "Запиши композицію",
            "Припини тремтіти і запиши проклятущу композицію",
            "Запиши композицію?",
            "Це ручки, які ти не крутиш",
            "Моно - це новий Стерео",
            "Змійиний жир?",
            "Продовжуй давати газ!",
            "Давай розберемось",
            "Почнемо",
            "Тепер з додатковими гвинтами й іржею",
            "Йде чудово",
            "Куди ти йдеш зі своїм stem splitterом? Це мій kick drum",
            "Ще один крихітний плагін",
            "Абсолютний лайфхак, який профі не хочуть щоб ти знав",
            "Преміум-план тепер включає справжній органічний mojo сумнівного походження",
            "Максимум 4 плагіни, інакше джерело неправильне",
            "Експозиція вийшла боком капітану Оатсу",
            "Тепер з 260% більшим cowbell-ом",
            "Це йде до одинадцяти",
            "Веселись весь час",
            "Рецензія сказала, що цей мікс - тріумф посередності",
            "На квантовому рівні аналог - це просто цифра",
            "Тепер з додатковою Love Supreme",
            "John Coltrane",
            "Завжди за 24 години від Tulsa",
            "160% більше justified and ancient",
            "На 90% менше розговорів, на 95% більше дій",
            "DAW без плагінів",
            "Мама казала що будуть такі дні",
            "Твій fader - найкращий плагін",
            "Десь у цьому коді сховано маленьке henге",
            "Іди звідси!",
            "РРЦ Шість Квінтильйонів Доларів",
            "Студенти вільний вхід, нескінченний ROI",
            "Гарно поєднується з чаєм та печивом",
            "Слава - це просто купа людей що знають про твоє існування, тепер запиши композицію",
            "Скидаючи напругу з '95-го",
            "Щиро, я б тобі сказав якби це була платна реклама",
            "E.T. може телефонувати додому - TayPE ні",
            "Зміна прийде",
            "Флопаємо поросят з '76-го",
            "Завантажується твоя незавершена робота",
            "Plugmaxxing так виснажує",
            "Хост Low Stakes Studio Olympics уже 5 років поспіль",
            "Дізнайся хто ти й робиш це навмисне",
            "Багато CPU щоб звучати так дешево",
            "Три мікрофони і правда",
            "Тейки дешеві, як сльози в дощі",
            "Straight outta Plumpton",
            "Вийди зі своєї дороги й запиши цю річ"
        ]
    },
    "el-gr": {
        lang: "el-GR",
        fontMode: "pixel",
        quoteOpen: "\u00ab",
        quoteClose: "\u00bb",
        title: "TayPE - Τέχνη πρώτα. Προσβάσιμο από το σχεδιασμό.",
        metaDescription: "Το TayPE είναι ένα multitrack DAW για μουσικούς που θέλουν να ολοκληρώσουν δίσκους, όχι να παλεύουν με λογισμικό. Στόχος WCAG 2.2 AA. MCP-native - Claude ή Codex (με φωνή) είναι το κύριο μη-οπτικό περιβάλλον. macOS.",
        ogTitle: "TayPE - Κάντε το δίσκο",
        ogDescription: "Τέχνη πρώτα. Προσβάσιμο από το σχεδιασμό.",
        text: {
            "lang-switch-label": "Γλώσσα",
            "nav-features": "Χαρακτηριστικά",
            "nav-pricing": "Τιμολόγηση",
            "nav-docs": "Docs",
            "nav-community": "Κοινότητα",
            "nav-download-link": "Απόκτησε το TayPE",
            "hero-descriptor": "Πολυτροχικό DAW για macOS",
            "hero-tagline-text": "Τέχνη πρώτα. Προσβάσιμο από το σχεδιασμό.",
            "hero-cta": "Ξεκινάμε",
            "hero-platform": "macOS Monterey+ \u00b7 Apple Silicon Native + Intel \u00b7 VST3 host",
            "tone-heading": "Αρχιτεκτονική τόνου",
            "tone-intro-1": "Το TayPE δεν είναι ένας επίπεδος ψηφιακός μίκτης. Κάθε κανάλι μπορεί να περάσει από μοντελοποιημένο στάδιο preamp - πραγματικός χαρακτήρας hardware που καταγράφηκε με τον Neural Amp Modeler και εφαρμόζεται στην πηγή. Στο mix bus, μια μοντελοποιημένη μηχανή summing προσθέτει κορεσμό, συνοχή και ώθηση τύπου κονσόλας.",
            "tone-intro-2": "Δεν χρειάζονται plugins. Η εξομοίωση της κονσόλας τρέχει απευθείας μέσα στη μηχανή ήχου - κοινοί τανυστές βαρών, κατάσταση ανά κανάλι, μηδενική επιπλέον καθυστέρηση. Ίδια φιλοσοφία με το hardware-accelerated DSP, χτισμένη μέσα στον μίκτη, όχι κολλημένη πάνω.",
            "tone-kicker": "Τέχνη πρώτα. Τόνος στο κέντρο.",
            "philosophy-heading": "Κάντε το δίσκο",
            "philosophy-copy-1": "Το Taylor's Performance Environment υπάρχει για να σας βοηθήσει να φτιάξετε τον δίσκο, όχι να πνιγείτε σε ατελείωτες επιλογές. Ένα πολυτροχικό DAW με την ψυχή μιας ταινιογραφικής μηχανής.\nΧτισμένο γύρω από τη ροή και την αίσθηση μιας σπουδαίας κονσόλας μίξης.\nΛιγότερες λειτουργίες, λιγότερα μενού, περισσότερη μουσική.",
            "screenshots-tape-heading": "The Tape",
            "screenshots-heading": "Η κονσόλα μίξης",
            "screenshots-arranger-heading": "The Arranger",
            "arranger-flow-heading": "Φτιαγμένο για να τελειώνεις δίσκους, όχι απλώς να σκιαγραφείς ιδέες",
            "arranger-flow-copy-1": "Ο arranger του TayPE είναι σκόπιμα λιτός, αλλά δεν είναι παιχνίδι. Επεξεργαστείτε audio απευθείας στο timeline με την ταχύτητα και ακρίβεια που απαιτούν τα επαγγελματικά recording workflows, χωρίς να θαφτείτε κάτω από παράθυρα, διαλόγους και ατελείωτες ρυθμίσεις. Η εστίαση είναι να τελειώνεις δίσκους, όχι να διαχειρίζεσαι software.",
            "arranger-flow-copy-2": "Ηχογραφήστε software instruments ως audio κρατώντας την αρχική MIDI εκτέλεση συνδεδεμένη από κάτω. Αλλάξτε νότες, timing ή instrumentation αργότερα αν χρειάζεται. Δεσμευτείτε στον ήχο χωρίς να δεσμευτείτε για πάντα.",
            "arranger-flow-copy-3": "Αν το Melodyne είναι εγκατεστημένο, η επεξεργασία pitch είναι διαθέσιμη όπου τη χρειάζεστε. Ανοίξτε οποιοδήποτε clip και αρχίστε να δουλεύετε - χωρίς dedicated tracks, διαχείριση plugin ή τελετουργία setup. Το TayPE περιλαμβάνει επίσης το προφίλ συντομεύσεων «Industry Standard» για παραγωγούς των οποίων το wetware είναι ήδη χαρτογραφημένο στο Pro Tools, βοηθώντας τα έμπειρα χέρια να νιώσουν σαν στο σπίτι τους από την πρώτη μέρα.",
            "arranger-flow-kicker": "Πιάσε τον ήχο που ενέπνευσε το take.",
            "screenshots-laforge-heading": "LaForgé",
            "finish-heading": "Τελείωσε χωρίς να βγεις από τη ροή",
            "finish-kicker": "Κοίτα. Άκου. Ρύθμισε. Τελείωσε.",
            "finish-copy": "Το LaForgé είναι ένας χώρος τελειώματος και ένα παράθυρο στο mix σου. Το τελευταίο χιλιόμετρο είναι εκεί όπου πολλοί δίσκοι κολλάνε. Καθώς η ένταση ανεβαίνει και η γραμμή τερματισμού πλησιάζει, τα πιεσμένα mix αρχίζουν να αποκαλύπτουν τι υπάρχει πραγματικά. Το LaForgé σε βοηθά να φανερώσεις αυτό που είναι πραγματικά εκεί, να μείνεις συνδεδεμένος με τη μουσική και να πάρεις τις τελικές αποφάσεις που μετατρέπουν ένα mix σε δίσκο.",
            "a11y-heading": "Κατασκευασμένο για όλους",
            "pricing-heading": "Τιμολόγηση",
            "price-personal-try-first": "Κατέβασε το TayPE και δοκίμασέ το πριν αγοράσεις.",
            "price-commercial-try-first": "Κατέβασε το TayPE και δοκίμασέ το πριν αγοράσεις.",
            "demo-heading": "Αυτή είναι η συμφωνία.",
            "demo-trust-framing": "Το TayPE λειτουργεί με αμοιβαία εμπιστοσύνη.",
            "demo-what-that-means": "Τι σημαίνει αυτό:",
            "demo-trust-1": "Χωρίς συνδρομές",
            "demo-trust-2": "Χωρίς DRM",
            "demo-trust-3": "Χωρίς όρια λειτουργιών",
            "demo-trust-4": "Χωρίς phone-home",
            "demo-connector": "Αν σου ταιριάζει, παρακαλώ αγόρασε μια διηνεκή άδεια. Αυτό κρατάει το TayPE να ανοίγει νέους δρόμους και τα bugs να σπάνε.",
            "price-personal-title": "Προσωπικό",
            "price-personal-note": "αγορά μιας φοράς",
            "price-personal-feature-1": "Πλήρη εφαρμογή, όλα τα χαρακτηριστικά",
            "price-personal-feature-2": "2 κύριες εκδόσεις (Eras) με συμπεριλαμβανόμενες ενημερώσεις",
            "price-personal-cta": "Αγορά τώρα",
            "price-commercial-title": "Εμπορική",
            "price-commercial-note": "αγορά μιας φοράς",
            "price-commercial-feature-1": "Πλήρη εφαρμογή, όλα τα χαρακτηριστικά",
            "price-commercial-feature-2": "2 κύριες εκδόσεις (Eras) με συμπεριλαμβανόμενες ενημερώσεις",
            "price-commercial-cta": "Αγορά τώρα",
            "education-heading": "Εκπαίδευση",
            "education-copy": "Δωρεάν για φοιτητές. Στείλτε μας ένα DM για κωδικό έκπτωσης.",
            "education-instagram": "Instagram \u2192",
            "education-reddit": "Reddit \u2192",
            "accessibility-note": "Δωρεάν για φοιτητές. Παραχωρήσεις προσβασιμότητας. Απλώς ρώτα.",
            "pricing-cadence-note": "Οι κύριες εκδόσεις (Eras) κυκλοφορούν συνήθως με ετήσια συχνότητα.\n\nΗ νεότερη Era λαμβάνει νέες λειτουργίες. Η προηγούμενη Era παραμένει σε Long Term Support (LTS), με εκδόσεις συντήρησης και διορθώσεων σφαλμάτων.\n\nΗ άδειά σας περιλαμβάνει την τρέχουσα Era και την επόμενη, συνήθως δίνοντας 2 χρόνια ενημερώσεων λειτουργιών και 3 χρόνια κάλυψης συντήρησης.\n\nΚατά την ανανέωση, οι υπάρχοντες χρήστες λαμβάνουν σημαντική έκπτωση όταν μετακινούνται από οποιαδήποτε προηγούμενη έκδοση.",
            "download-heading": "Ξεκινάμε",
            "download-copy": "Πλήρως λειτουργικό Trustware. Χωρίς περιορισμούς demo, χωρίς λήξη, χωρίς θόρυβο.",
            "download-apply": "Λήψη τώρα",
            "community-heading": "Κοινότητα & Υποστήριξη",
            "community-card-1-title": "Βάση γνώσης",
            "community-card-1-body": "Εγχειρίδιο χρήστη και τεκμηρίωση αναφοράς. Όλα όσα χρειάζεστε για να ξεκινήσετε και να εμβαθύνετε.",
            "community-card-1-link": "Διαβάστε το εγχειρίδιο \u2192",
            "community-card-2-title": "Πρόγραμμα beta",
            "community-card-2-body": "Πρώιμα builds και release candidates πριν αλλάξει το δημόσιο download.",
            "community-card-2-link": "Μπείτε στο πρόγραμμα beta \u2192",
            "community-card-3-title": "Επικοινωνία",
            "community-card-3-body": "Σφάλμα, ερώτηση, ή απλώς θες να πεις γεια; Γράψε μας - ανώνυμα μια χαρά, αλλά άφησε το email σου αν θες απάντηση.",
            "community-card-3-link": "Επικοινωνία \u2192",
            "community-card-4-title": "Ακολουθήστε μας",
            "community-card-4-body": "Ενημερώσεις ανάπτυξης, συνεδρίες στούντιο και κάτω από τα παρασκήνια του Ruminant Audio Works.",
            "community-card-4-instagram": "Instagram \u2192",
            "community-card-4-youtube": "YouTube \u2192",
            "community-card-4-reddit": "Reddit \u2192",
            "footer-features": "Χαρακτηριστικά",
            "footer-pricing": "Τιμολόγηση",
            "footer-download": "Ξεκινάμε",
            "footer-docs": "Docs",
            "footer-community": "Κοινότητα",
            "footer-bug": "Επικοινωνία",
            "footer-copy": "\u00a9 2026 Ruminant Audio Works. Το TayPE είναι προϊόν του Ruminant Audio Works Ltd. Company No. 16978494. Registered in England and Wales."
        },
        html: {
            "a11y-copy": "<strong>Η τέχνη απαιτεί πρόσβαση.</strong> <strong>Η προσβασιμότητα δεν είναι λειτουργία. Είναι θεμέλιο.</strong>Γιατί το περιβάλλον πρέπει να συναντά τους μουσικούς εκεί που είναι. Το TayPE στοχεύει WCAG 2.2 AA σε όλα. Λειτουργία υψηλής αντίθεσης με αναλογίες κειμένου 15:1+. Κάθε κατάσταση μεταδίδεται με σχήμα και εικονίδιο, ποτέ μόνο με χρώμα. Συντομεύσεις πληκτρολογίου για κάθε ενέργεια. Για μη-οπτικές ροές εργασίας, το MCP μέσω Claude ή Codex είναι το κύριο περιβάλλον - με έλεγχο φωνής. Η υποστήριξη native screen reader έρχεται το Q3 2026."
        },
        attrs: {
            "nav-logo": { alt: "Λογότυπο TayPE" },
            "hero-logo": { alt: "Λογότυπο κηنούλα TayPE" },
            "screenshot-tape": { alt: "TayPE tape machine - reel-to-reel tape transport above multitrack mixer channels" },
            "screenshot-1": { alt: "TayPE mixer - multi-track channel strips with modelled preamps, EQ, compressor, inserts, and faders" },
            "screenshot-2": { alt: "TayPE arranger - clips arranged across tracks with track headers and transport controls" },
            "screenshot-laforge": { alt: "TayPE LaForgé mastering view - limiter, loudness statistics, loudness graph, stereo tools, mixer channels, and master bus" },
            "footer-logo": { alt: "Ruminant Audio Works" }
        },
        gregisms: [
            "Θα κατέχεις τα πάντα και θα είσαι ευτυχής",
            "Δεσμέψου στο take",
            "Σταμάτησε να στρίβεις κουμπιά. Ξεκίνησε να τελειώνεις",
            "Το κόκκινο φως είναι ο φίλος σου",
            "Αν ακούγεται καλά, μπορεί να είναι καλό. Πάρε ένα καφέ και γύρνα",
            "Εξαγωγή. Συνέχισε",
            "Το feel δεν είναι παράμετρος plugin",
            "Ο καλύτερος compressor είναι η απόφαση",
            "Το κομμάτι δεν νοιάζεται για το signal chain σου",
            "Σταμάτησε το solo. Ξεκίνησε να ακούς",
            "Μην ακούς με τα μάτια",
            "Ένα υπέροχο κομμάτι κακώς ηχογραφημένο νικά ένα κακό κομμάτι τέλεια ηχογραφημένο",
            "Το κουμπί mute είναι το πιο ισχυρό εργαλείο στο ράφι σου",
            "Εξαγωγή. Ονόμασε. Ξέχασε",
            "Αν δεν το ακούς σε mono, δεν υπάρχει",
            "Κανείς ποτέ δεν χόρεψε σε ένα μέτρο phase correlation",
            "Παρουσία πάνω από γυαλάδα",
            "Το κουμπί record δεν είναι υπόδειξη",
            "Δεν κάνεις mix. Αποφεύγεις να τελειώσεις",
            "Στείλε το rough mix",
            "Τρία μικρόφωνα και ένα καλό δωμάτιο καλύτερα από τριάντα δύο plugins",
            "Το αρχείο δεν είναι αναβολή. Είναι απόφαση",
            "Το καλύτερο EQ είναι η διευθέτηση",
            "Το reference track σου σε ψεύδεται. Δες τα αυτιά σου",
            "Λιγότερες διαδρομές, περισσότερη αλήθεια",
            "Το click δεν δημιουργεί το groove. Το κάνει ο τυμπανιστής",
            "Αν χρειάζεσαι περισσότερα από τρία plugins, η πηγή είναι λάθος",
            "Γράψε το κομμάτι",
            "Σταμάτησε το τρέμουλο και γράψε το μαλακό κομμάτι",
            "Γράψε το κομμάτι;",
            "Είναι τα κουμπιά που δεν στρίβεις",
            "Mono είναι το νέο Stereo",
            "Φίδι λάδι;",
            "Δώσε γάζι!",
            "Ας το δούμε",
            "Ας ξεκινήσουμε",
            "Τώρα με επιπλέον βίδες και σκουριά",
            "Πάει υπέροχα",
            "Που πηγαίνεις με αυτό το stem splitter; Αυτό είναι ο kick drum μου",
            "Ακόμα ένα ασχήμαστο plugin",
            "Το απόλυτο life hack που οι pros δεν θέλουν να ξέρεις",
            "Το premium plan τώρα περιλαμβάνει αυθεντικό organic mojo από αμφίβολη προέλευση",
            "Μέγιστο 4 plugins ή η πηγή είναι λάθος",
            "Η έκθεση είναι αυτό που κατέστρεψε τον Captain Oates",
            "Τώρα με 260% περισσότερο cowbell",
            "Αυτό πάει ως το ένδεκα",
            "Διασκέδασε όλη την ώρα",
            "Η κριτική είπε ότι αυτό το mix ήταν ένας θρίαμβος της μετριότητας",
            "Σε κβαντικό επίπεδο το αναλογικό είναι απλώς ψηφιακό",
            "Τώρα με επιπλέον Love Supreme",
            "John Coltrane",
            "Πάντα 24 ώρες από Tulsa",
            "160% περισσότερο justified and ancient",
            "90% λιγότερη κουβέντα, 95% περισσότερη δράση",
            "Η DAW χωρίς plugins",
            "Μαμά είπε ότι θα υπήρχαν τέτοιες μέρες",
            "Ο fader σου είναι το καλύτερο plugin",
            "Κάπου σε αυτόν τον κώδικα υπάρχει ένα μικρό henge",
            "Χάσου!",
            "ΣΕΤ Έξι Χιλιάδες Δισεκατομμύρια Δολάρια",
            "Φοιτητές ελεύθερη είσοδος, άπειρη απόδοση",
            "Ταιριάζει καλά με τσάι και μπισκότα",
            "Η φήμη είναι απλώς ένα σωρό άνθρωποι που γνωρίζουν ότι υπάρχεις, τώρα γράψε το κομμάτι",
            "Απελευθερώνοντας την πίεση από το '95",
            "Ειλικρινά, θα σου το έλεγα αν ήταν πληρωμένη διαφήμιση",
            "Το E.T. ίσως να τηλεφωνήσει στο σπίτι - το TayPE δεν θα",
            "Μια αλλαγή θα έρθει",
            "Flop pigs από το '76",
            "Φορτώνονται τα ανολοκλήρωτα πράγματα σου",
            "Το Plugmaxxing είναι τόσο κουραστικό",
            "Ο αρχηγός των Low Stakes Studio Olympics 5 χρόνια στη σειρά",
            "Ανακάλυψε ποιος είσαι και κάντο σκόπιμα",
            "Κοστίζει πολλή CPU για να ακούγεται τόσο φτηνό",
            "Τρία μικρόφωνα και η αλήθεια",
            "Τα takes είναι φτηνά, σαν δάκρυα στη βροχή",
            "Straight outta Plumpton",
            "Βγες από τον δρόμο σου και γράψε το πράγμα"
        ]
    }
};

const gregismEl = document.getElementById("gregism");
const langSelect = document.getElementById("lang-select");
const canonicalLink = document.getElementById("canonical-link");
const metaDescription = document.getElementById("meta-description");
const metaOgTitle = document.getElementById("meta-og-title");
const metaOgDescription = document.getElementById("meta-og-description");
const metaOgUrl = document.getElementById("meta-og-url");
const docEl = document.documentElement;
const navEl = document.querySelector("nav");
const anchorSettleDelays = [0, 120, 360, 900, 1600];

let currentLocale = "en-gb";
let currentLocaleData = locales["en-gb"];
let currentGregisms = currentLocaleData.gregisms;
let gregismIndex = 0;
let activeAnchorHash = null;
let activeAnchorUntil = 0;

function pickRandomGregismIndex(previousIndex = -1) {
    const count = currentGregisms.length;
    if (count <= 1) return 0;

    let nextIndex = Math.floor(Math.random() * count);
    if (nextIndex === previousIndex) {
        nextIndex = (nextIndex + 1 + Math.floor(Math.random() * (count - 1))) % count;
    }

    return nextIndex;
}

function normalizeLocale(value) {
    if (!value) return null;
    const normalised = String(value).trim().toLowerCase().replace(/_/g, "-");
    if (localeAliasMap[normalised]) return localeAliasMap[normalised];

    const base = normalised.split("-")[0];
    return localeAliasMap[base] || null;
}

function detectBrowserLocale() {
    const candidates = Array.isArray(window.navigator.languages) && window.navigator.languages.length
        ? window.navigator.languages
        : [window.navigator.language];

    for (const candidate of candidates) {
        const locale = normalizeLocale(candidate);
        if (locale) return locale;
    }

    return null;
}

function readLocalePreference() {
    try {
        return normalizeLocale(window.localStorage.getItem("taype-site-lang"));
    } catch (error) {
        return null;
    }
}

function writeLocalePreference(locale) {
    try {
        window.localStorage.setItem("taype-site-lang", locale);
    } catch (error) {
        // Ignore storage failures in restrictive browsing modes.
    }
}

function isRootPath(pathname) {
    return pathname === "/" || pathname === "/index.html" || pathname === "";
}

function getPathLocale(pathname) {
    const segments = pathname.split("/").filter(Boolean);
    if (!segments.length) return null;
    return normalizeLocale(segments[0]);
}

function getSitePath(locale) {
    return locale === "en-gb" ? "/" : `/${locale}/`;
}

function getSiteUrl(locale) {
    return `${PUBLIC_SITE_URL}${getSitePath(locale)}`;
}

function getDocsUrl(locale) {
    return `${DOCS_BASE_URL}${locale}/`;
}

function updateAnchorOffset() {
    const navHeight = navEl ? navEl.getBoundingClientRect().height : 56;
    const offset = Math.ceil(navHeight + 24);
    docEl.style.setProperty("--nav-anchor-offset", `${offset}px`);
    return offset;
}

function getHashTarget(hash) {
    if (!hash || hash === "#") return null;

    const rawId = hash.slice(1);
    if (!rawId) return null;

    try {
        return document.getElementById(decodeURIComponent(rawId));
    } catch (error) {
        return document.getElementById(rawId);
    }
}

function scrollInstantlyTo(top) {
    const previousScrollBehavior = docEl.style.scrollBehavior;
    docEl.style.scrollBehavior = "auto";
    window.scrollTo({ top, behavior: "auto" });
    docEl.style.scrollBehavior = previousScrollBehavior;
}

function scrollToHashTarget(hash, behavior = "auto") {
    const target = getHashTarget(hash);
    if (!target) return false;

    const top = Math.max(0, target.getBoundingClientRect().top + window.scrollY - updateAnchorOffset());
    if (behavior === "auto") scrollInstantlyTo(top);
    else window.scrollTo({ top, behavior });

    return true;
}

function settleHashScroll(hash, behavior = "auto") {
    if (!getHashTarget(hash)) return;

    activeAnchorHash = hash;
    activeAnchorUntil = window.performance.now() + 2500;

    anchorSettleDelays.forEach((delay, index) => {
        window.setTimeout(() => {
            if (activeAnchorHash !== hash || window.performance.now() > activeAnchorUntil) return;
            scrollToHashTarget(hash, index === 0 ? behavior : "auto");
        }, delay);
    });
}

function settleActiveHashScroll() {
    if (!activeAnchorHash || window.performance.now() > activeAnchorUntil) return;
    scrollToHashTarget(activeAnchorHash, "auto");
}

function handleHashAnchorClick(event) {
    const target = event.target instanceof Element ? event.target : null;
    const link = target ? target.closest('a[href^="#"]') : null;
    if (!link) return;

    const hash = link.getAttribute("href");
    if (!getHashTarget(hash)) return;

    event.preventDefault();

    if (window.location.hash !== hash) {
        window.history.pushState({}, "", `${window.location.pathname}${window.location.search}${hash}`);
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    settleHashScroll(hash, prefersReducedMotion ? "auto" : "smooth");
}

function navigateToLocale(locale, options = {}) {
    const target = `${getSitePath(locale)}${window.location.hash || ""}`;
    if (options.replace) window.location.replace(target);
    else window.location.assign(target);
}

function updateDocsLinks(locale) {
    const docsUrl = getDocsUrl(locale);
    document.querySelectorAll("[data-docs-link]").forEach((node) => {
        node.setAttribute("href", docsUrl);
    });
}

function showGregism() {
    if (!gregismEl || !currentGregisms.length) return;
    gregismEl.textContent = `${currentLocaleData.quoteOpen}${currentGregisms[gregismIndex]}${currentLocaleData.quoteClose}`;
}

function applyPricingEraLinks() {
    ["price-personal-feature-2", "price-commercial-feature-2"].forEach((id) => {
        const node = document.getElementById(id);
        const text = currentLocaleData.text[id];
        if (!node || !text) return;

        const match = text.match(/(\(Eras\)|（Eras）|\(Era's\))/);
        if (!match || match.index === undefined) return;

        const before = text.slice(0, match.index);
        const after = text.slice(match.index + match[0].length);
        const link = document.createElement("a");
        link.href = "#pricing-cadence-note";
        link.className = "era-link";
        link.textContent = match[0];

        node.textContent = "";
        node.append(document.createTextNode(before), link, document.createTextNode(after));
    });
}

function applyLocale(localeKey) {
    currentLocale = locales[localeKey] ? localeKey : "en-gb";
    currentLocaleData = locales[currentLocale];
    currentGregisms = currentLocaleData.gregisms;
    gregismIndex = pickRandomGregismIndex(gregismIndex);

    docEl.lang = currentLocaleData.lang;
    docEl.dataset.fontMode = currentLocaleData.fontMode;
    docEl.dataset.siteLocale = currentLocale;
    document.title = currentLocaleData.title;

    if (metaDescription) metaDescription.setAttribute("content", currentLocaleData.metaDescription);
    if (metaOgTitle) metaOgTitle.setAttribute("content", currentLocaleData.ogTitle);
    if (metaOgDescription) metaOgDescription.setAttribute("content", currentLocaleData.ogDescription);
    if (metaOgUrl) metaOgUrl.setAttribute("content", getSiteUrl(currentLocale));
    if (canonicalLink) canonicalLink.setAttribute("href", getSiteUrl(currentLocale));

    Object.entries(currentLocaleData.text).forEach(([id, value]) => {
        const node = document.getElementById(id);
        if (node) node.textContent = value;
    });

    applyPricingEraLinks();

    Object.entries(currentLocaleData.html || {}).forEach(([id, value]) => {
        const node = document.getElementById(id);
        if (node) node.innerHTML = value;
    });

    Object.entries(currentLocaleData.attrs || {}).forEach(([id, values]) => {
        const node = document.getElementById(id);
        if (!node) return;
        Object.entries(values).forEach(([attr, value]) => {
            node.setAttribute(attr, value);
        });
    });

    if (langSelect) {
        langSelect.value = currentLocale;
        langSelect.setAttribute("aria-label", currentLocaleData.text["lang-switch-label"] || "Language");
    }

    const navHome = document.getElementById("nav-home");
    if (navHome) navHome.setAttribute("href", getSitePath(currentLocale));

    const downloadApply = document.getElementById("download-apply");
    if (downloadApply) downloadApply.setAttribute("href", DOWNLOAD_URL);

    const betaProgrammeLink = document.getElementById("community-card-2-link");
    if (betaProgrammeLink) betaProgrammeLink.setAttribute("href", BETA_PROGRAMME_URL);

    updateDocsLinks(currentLocale);
    showGregism();
    window.requestAnimationFrame(updateAnchorOffset);
}

function initSite() {
    const url = new URL(window.location.href);
    const pathLocale = getPathLocale(url.pathname);
    const requestedLocale = pathLocale ? null : normalizeLocale(url.searchParams.get("lang"));
    const storedLocale = readLocalePreference();
    const browserLocale = detectBrowserLocale();

    if (pathLocale) {
        applyLocale(pathLocale);
        return;
    }

    if (requestedLocale) {
        writeLocalePreference(requestedLocale);
        if (requestedLocale === "en-gb" && isRootPath(url.pathname)) {
            applyLocale("en-gb");
            if (window.location.search) {
                window.history.replaceState({}, "", `${getSitePath("en-gb")}${window.location.hash || ""}`);
            }
            return;
        }

        navigateToLocale(requestedLocale, { replace: true });
        return;
    }

    if (isRootPath(url.pathname)) {
        const preferredLocale = storedLocale || browserLocale || "en-gb";
        if (preferredLocale !== "en-gb") {
            navigateToLocale(preferredLocale, { replace: true });
            return;
        }
        applyLocale("en-gb");
        return;
    }

    applyLocale(storedLocale || browserLocale || "en-gb");
}

initSite();

updateAnchorOffset();

if (window.location.hash) {
    window.requestAnimationFrame(() => settleHashScroll(window.location.hash, "auto"));
}

document.addEventListener("click", handleHashAnchorClick);

window.addEventListener("resize", () => {
    updateAnchorOffset();
    settleActiveHashScroll();
});

window.addEventListener("hashchange", () => {
    if (window.location.hash) settleHashScroll(window.location.hash, "auto");
});

window.addEventListener("popstate", () => {
    if (window.location.hash) settleHashScroll(window.location.hash, "auto");
});

window.addEventListener("load", () => {
    updateAnchorOffset();
    if (window.location.hash) settleHashScroll(window.location.hash, "auto");
});

document.querySelectorAll("img").forEach((img) => {
    if (img.complete) return;
    img.addEventListener("load", settleActiveHashScroll, { once: true });
    img.addEventListener("error", settleActiveHashScroll, { once: true });
});

if (langSelect) {
    langSelect.addEventListener("change", (event) => {
        const selectedLocale = normalizeLocale(event.target.value) || "en-gb";
        writeLocalePreference(selectedLocale);
        if (selectedLocale === currentLocale) return;
        navigateToLocale(selectedLocale);
    });
}

if (gregismEl) {
    window.setInterval(() => {
        gregismEl.style.opacity = "0";
        window.setTimeout(() => {
            gregismIndex = pickRandomGregismIndex(gregismIndex);
            showGregism();
            gregismEl.style.opacity = "1";
        }, 500);
    }, 6000);
}


/* === screenshot lightbox === */
(function () {
    const dialog = document.getElementById('screenshot-zoom');
    if (!dialog) return;
    const dlgSource = dialog.querySelector('source');
    const dlgImg = dialog.querySelector('img');
    if (!dlgImg) return;
    document.querySelectorAll('.screenshot-row img').forEach(function (img) {
        img.addEventListener('click', function () {
            if (dlgSource && img.dataset.zoomWebp) {
                dlgSource.srcset = img.dataset.zoomWebp;
            }
            dlgImg.src = img.dataset.zoomFallback || img.currentSrc || img.src;
            dlgImg.alt = img.alt;
            dialog.showModal();
        });
    });
    dialog.addEventListener('click', function () { dialog.close(); });
})();
