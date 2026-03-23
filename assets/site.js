const PUBLIC_SITE_URL = "https://taype.ruminantaudioworks.com";
const DOCS_BASE_URL = "https://ruminant-audio-works.gitbook.io/taype/";

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
    "is-is": "is-is"
};

const locales = {
    "en-gb": {
        lang: "en-GB",
        fontMode: "pixel",
        quoteOpen: "\u201c",
        quoteClose: "\u201d",
        title: "TayPE - Craft first. Accessible by design. Robots welcome too.",
        metaDescription: "TayPE is a multitrack DAW built for musicians who want to finish records, not fight software. WCAG 2.2 accessible. MCP native. macOS.",
        ogTitle: "TayPE - Make the Record",
        ogDescription: "Craft first. Accessible by design. Robots welcome too.",
        text: {
            "lang-switch-label": "Language",
            "nav-features": "Features",
            "nav-pricing": "Pricing",
            "nav-docs": "Docs",
            "nav-community": "Community",
            "nav-download-link": "Coming Soon",
            "hero-descriptor": "Multitrack DAW for macOS",
            "hero-tagline-text": "Craft first. Accessible by design. Robots welcome too.",
            "hero-cta": "Coming Soon",
            "hero-docs": "Read the Fine Manual",
            "hero-platform": "Multitrack DAW \u00b7 macOS 12+ \u00b7 Apple Silicon native \u00b7 VST3 host",
            "tone-heading": "Tone Architecture",
            "tone-intro-1": "TayPE isn't a flat digital mixer. Every channel runs through a modelled preamp stage \u2014 real hardware character captured by Neural Amp Modeler and applied at the source. On the mix bus, a modelled summing engine adds console-style saturation, cohesion, and drive.",
            "tone-intro-2": "No plugin instances. No sandboxed processes. The console emulation runs directly in the audio engine \u2014 shared weight tensors, per-channel state, zero added latency. Same philosophy as hardware-accelerated DSP, built into the mixer, not bolted on.",
            "tone-kicker": "Craft first. Tone at the core.",
            "tone-card-1-title": "Modelled Preamps",
            "tone-card-1-body": "Per-channel hardware character from captured NAM profiles \u2014 Neve, API, SSL, and more via the TONE3000 community library. Shape tone at the source and commit with intention. Three modes: clean gain, built-in saturator, or full neural amp model.",
            "tone-card-2-title": "Modelled Console Summing",
            "tone-card-2-body": "A NAM-powered summing engine on the master bus. Load a captured console profile and every signal hits the bus with real nonlinear character \u2014 saturation, harmonic colour, and subtle compression that responds to dynamics. What you hear is what sums.",
            "tone-card-3-title": "True Summing",
            "tone-card-3-body": "Coming soon: per-channel NAM processing before the sum \u2014 every track through its own console channel, just like pushing 24 signals through a real analogue desk. Shared weights, batched matrix inference on Apple Silicon. Full console emulation at a fraction of the CPU cost.",
            "philosophy-heading": "Make the Record",
            "philosophy-copy-1": "TayPE exists to help you finish real takes, not drown in endless options. A multitrack DAW with the soul of a tape machine. Fewer modes, fewer knobs, more truth.",
            "philosophy-copy-2": "Built from the ground up with accessibility at its core. WCAG 2.2 AA compliant. High-contrast mode. Keyboard navigable. Because musicians are not all sighted, all hearing, or all able-bodied.",
            "feature-a11y-title": "Accessible by Design",
            "feature-a11y-body": "WCAG 2.2 AA. High-contrast theme. Full keyboard navigation. Screen-reader compatible labels. Designed for every musician, not just the ones who can see 12px text on a dark background.",
            "feature-mcp-title": "MCP Integration",
            "feature-mcp-body": "Optional machine assistance for batch edits and session management. Automate the admin, not the art. TayPE remains deterministic and transactional at its core \u2014 MCP enhances workflow without replacing craft.",
            "feature-focus-title": "Focus Over Clutter",
            "feature-focus-body": "Focus mode shows only what matters at the playhead. Archive mode silences dead tracks completely \u2014 no CPU, no noise. Commit over endless looping.",
            "feature-strip-title": "Native Console Channel Strip",
            "feature-strip-body": "Neve-style 3-band EQ, HP/LP filters, compressor with log release, and 4 VST3 insert slots per track. Everything you need, nothing you don't.",
            "feature-truth-title": "Multitrack Truth",
            "feature-truth-body": "Record, arrange, and mix with a clean signal path. Real-time safe audio engine. No hidden latency, no surprises. What you hear is what you get.",
            "feature-ssl-title": "SSL 360\u00b0 Integration",
            "feature-ssl-body": "Full SSL 360\u00b0 support with bidirectional fader and pan control via UF8/UC1. Track names, colours, and layout push to your surface automatically. No mapping, no config \u2014 just plug in and mix.",
            "feature-mixfx-title": "Mix FX - Softube Tape",
            "feature-mixfx-body": "Dedicated tape saturation slot on the mix bus, powered by Softube Multitrack Tape. One knob away from analogue warmth on your stereo bus. No insert-chain fiddling \u2014 just enable and print.",
            "feature-stems-title": "Stems, Not Folders",
            "feature-stems-body": "Stems are real summing buses. One layer deep. No nested folder hell. Your console layout stays stable and predictable.",
            "screenshots-heading": "The Console",
            "a11y-heading": "Built for Everyone",
            "pricing-heading": "Pricing",
            "demo-heading": "Try Before You Buy",
            "demo-copy": "TayPE is fully functional demoware. Download it, use it, make records with it. When you're ready, buy a licence. No time limits, no feature locks, no nag screens beyond a gentle reminder at launch.",
            "price-personal-title": "Personal / Small Business",
            "price-personal-note": "one-time purchase",
            "price-personal-feature-1": "Full application, all features",
            "price-personal-feature-2": "2 major versions of free updates",
            "price-personal-cta": "Coming Soon",
            "price-commercial-title": "Commercial",
            "price-commercial-note": "one-time purchase",
            "price-commercial-feature-1": "Full application, all features",
            "price-commercial-feature-2": "2 major versions of free updates",
            "price-commercial-cta": "Coming Soon",
            "education-heading": "Education",
            "education-copy": "Free for students. DM us for a discount code.",
            "education-instagram": "Instagram \u2192",
            "education-reddit": "Reddit \u2192",
            "accessibility-heading": "Accessibility",
            "accessibility-copy": "33% off if you have accessibility requirements. DM us for a discount code.",
            "accessibility-instagram": "Instagram \u2192",
            "accessibility-reddit": "Reddit \u2192",
            "download-heading": "Coming Soon",
            "download-copy": "TayPE is in active development. Follow us for release announcements and early access.",
            "download-instagram": "Follow on Instagram",
            "download-reddit": "Follow on Reddit",
            "community-heading": "Community & Support",
            "community-card-1-title": "Knowledge Base",
            "community-card-1-body": "User guide, tutorials, and reference documentation. Everything you need to get started and go deep.",
            "community-card-1-link": "Read the docs \u2192",
            "community-card-2-title": "Community",
            "community-card-2-body": "Questions, tips, feature requests, show-and-tell. The community hub for TayPE users.",
            "community-card-2-link": "Join r/taype \u2192",
            "community-card-3-title": "Bug Reports",
            "community-card-3-body": "Found something broken? File a GitHub issue. We read every one and fix what matters.",
            "community-card-3-link": "Report a bug \u2192",
            "community-card-4-title": "Follow Along",
            "community-card-4-body": "Development updates, studio sessions, and behind-the-scenes from Ruminant Audio Works.",
            "community-card-4-instagram": "Instagram \u2192",
            "community-card-4-reddit": "Reddit \u2192",
            "footer-features": "Features",
            "footer-pricing": "Pricing",
            "footer-download": "Coming Soon",
            "footer-docs": "Docs",
            "footer-community": "Community",
            "footer-bug": "Bug Report",
            "footer-copy": "\u00a9 2026 Ruminant Audio Works. TayPE is a product of Ruminant Audio Works Ltd."
        },
        html: {
            "a11y-copy": "<strong>Craft requires access.</strong> <strong>Accessibility is not a feature. It's a foundation.</strong> TayPE targets WCAG 2.2 AA throughout. High-contrast mode with 15:1+ text ratios. Every state is conveyed with shape and icon, never colour alone. Keyboard shortcuts for every action. Because the interface must meet musicians where they are."
        },
        attrs: {
            "nav-logo": { alt: "TayPE logo" },
            "hero-logo": { alt: "TayPE tape-reel logo" },
            "hero-mcp-logo": { alt: "MCP Native" },
            "feature-mcp-logo": { alt: "MCP logo" },
            "screenshot-1": { alt: "TayPE mixer with EQ, compressor, and meter on the channel strip" },
            "screenshot-2": { alt: "TayPE mixer with the EQ and filters expanded" },
            "footer-logo": { alt: "Ruminant Audio Works" }
        },
        gregisms: [
            "Presence over polish",
            "Commit to the take",
            "Stop tweaking. Start finishing",
            "Print it. Move on",
            "Feel is not a plugin parameter",
            "The best compressor is commitment",
            "The mute button is the most powerful tool in your rack",
            "A great song recorded badly beats a bad song recorded perfectly",
            "Less tracks, more truth",
            "Make the record",
            "Three mics and a good room beat thirty-two plugins",
            "The best EQ is arrangement",
            "These go to eleven",
            "Stereo is the new mono",
            "Now with more cowbells",
            "Archive is not procrastination. It's a decision"
        ]
    },
    "ja-jp": {
        lang: "ja-JP",
        fontMode: "cjk",
        quoteOpen: "\u300c",
        quoteClose: "\u300d",
        title: "TayPE - クラフト優先。設計段階からアクセシブル。ロボットも歓迎。",
        metaDescription: "TayPE は、ソフトと格闘するのではなく、ちゃんと曲を仕上げたいミュージシャンのためのマルチトラック DAW です。WCAG 2.2 対応。MCP ネイティブ。macOS 向け。",
        ogTitle: "TayPE - レコードを作れ",
        ogDescription: "クラフト優先。設計段階からアクセシブル。ロボットも歓迎。",
        text: {
            "lang-switch-label": "言語",
            "nav-features": "機能",
            "nav-pricing": "価格",
            "nav-docs": "ドキュメント",
            "nav-community": "コミュニティ",
            "nav-download-link": "近日公開",
            "hero-descriptor": "macOS 向けマルチトラック DAW",
            "hero-tagline-text": "クラフト優先。設計段階からアクセシブル。ロボットも歓迎。",
            "hero-cta": "近日公開",
            "hero-docs": "ドキュメントを読む",
            "hero-platform": "マルチトラック DAW \u00b7 macOS 12+ \u00b7 Apple Silicon ネイティブ \u00b7 VST3 ホスト",
            "tone-heading": "トーンアーキテクチャ",
            "tone-intro-1": "TayPE は平板なデジタルミキサーではありません。すべてのチャンネルが、Neural Amp Modeler で捉えた実機のキャラクターを持つモデリング済みプリアンプ段を通ります。さらにミックスバスでは、モデリング済みのサミングエンジンがコンソールらしいサチュレーション、まとまり、ドライブを加えます。",
            "tone-intro-2": "プラグインインスタンスは不要。サンドボックス化した別プロセスも不要。コンソールエミュレーションは、共有ウェイトテンソル、チャンネルごとの状態、追加レイテンシなしで、オーディオエンジンの中を直接走ります。ハードウェア支援 DSP と同じ思想を、後付けではなくミキサーの中核に据えています。",
            "tone-kicker": "クラフト優先。音色は中核に。",
            "tone-card-1-title": "モデリング済みプリアンプ",
            "tone-card-1-body": "Neve、API、SSL など、TONE3000 コミュニティライブラリ由来の NAM プロファイルで、チャンネルごとにハードウェアの個性を与えられます。音色を入口で決め、意図を持ってコミットできます。モードは 3 つ: クリーンゲイン、内蔵サチュレーター、フルのニューラルアンプモデル。",
            "tone-card-2-title": "モデリング済みコンソールサミング",
            "tone-card-2-body": "マスターバス上の NAM 駆動サミングエンジンです。キャプチャしたコンソールプロファイルを読み込めば、すべての信号が本物の非線形キャラクターを持ってバスへ入ります。サチュレーション、倍音の色、ダイナミクスに反応するわずかなコンプレッション。鳴っているものが、そのまま合算されます。",
            "tone-card-3-title": "True Summing",
            "tone-card-3-body": "近日公開: サムの前段で、各チャンネルごとに NAM 処理を走らせます。24 本の信号を本物のアナログ卓へ押し込むように、各トラックが自分専用のコンソールチャンネルを通ります。共有ウェイトと Apple Silicon 上のバッチ行列推論で、CPU を抑えつつフルコンソールエミュレーションを実現します。",
            "philosophy-heading": "レコードを作れ",
            "philosophy-copy-1": "TayPE は、無限の選択肢に溺れるためではなく、実際のテイクを仕上げるためにあります。テープマシンの魂を持ったマルチトラック DAW。モードは少なく、ノブも少なく、真実は多く。",
            "philosophy-copy-2": "アクセシビリティを中心に据えてゼロから組み上げました。WCAG 2.2 AA 準拠。高コントラストモード。キーボード操作対応。ミュージシャンは、全員が見えるわけでも、聞こえるわけでも、身体条件が同じでもありません。",
            "feature-a11y-title": "設計段階からアクセシブル",
            "feature-a11y-body": "WCAG 2.2 AA。高コントラストテーマ。完全なキーボードナビゲーション。スクリーンリーダー互換ラベル。暗い背景に 12px の文字が見える人だけのためではなく、すべてのミュージシャンのために設計しています。",
            "feature-mcp-title": "MCP 連携",
            "feature-mcp-body": "バッチ編集やセッション管理に、必要なら機械の助けを借りられます。自動化するのは事務作業であって、創作ではありません。TayPE の核はあくまで決定論的でトランザクショナルです。MCP はクラフトを置き換えず、流れを助けます。",
            "feature-focus-title": "散らかりよりフォーカス",
            "feature-focus-body": "Focus モードは、いまテープヘッド位置で意味のあるトラックだけを見せます。Archive モードは死んだトラックを完全に沈黙させます。CPU も、ノイズも、残しません。延々ループするより、決めて前に進むための設計です。",
            "feature-strip-title": "ネイティブなコンソールチャンネルストリップ",
            "feature-strip-body": "Neve 風 3 バンド EQ、HP/LP フィルター、log release 付きコンプレッサー、そして各トラック 4 スロットの VST3 インサート。必要なものは揃い、余計なものはありません。",
            "feature-truth-title": "マルチトラックの真実",
            "feature-truth-body": "クリーンな信号経路で録り、並べ、混ぜる。リアルタイム安全なオーディオエンジン。隠れたレイテンシも、予想外もありません。聞こえるものが、そのまま結果です。",
            "feature-ssl-title": "SSL 360\u00b0 連携",
            "feature-ssl-body": "UF8 / UC1 を使った双方向フェーダー / パン制御を含む、完全な SSL 360\u00b0 対応。トラック名、色、レイアウトは自動でサーフェスへ送られます。マッピング不要、設定不要。挿せばすぐミックスに入れます。",
            "feature-mixfx-title": "Mix FX - Softube Tape",
            "feature-mixfx-body": "ミックスバス専用のテープサチュレーションスロットを、Softube Multitrack Tape で実現。ステレオバスにアナログの温度を 1 ノブで与えられます。インサートチェーンをいじり回す必要はありません。オンにしてプリントするだけです。",
            "feature-stems-title": "フォルダーではなくステム",
            "feature-stems-body": "ステムは本物のサミングバスです。深さは 1 層だけ。ネストしたフォルダー地獄はありません。コンソールの見た目と流れを、安定して予測可能なまま保てます。",
            "screenshots-heading": "コンソール",
            "a11y-heading": "すべての人のために",
            "pricing-heading": "価格",
            "demo-heading": "買う前に試す",
            "demo-copy": "TayPE は機能制限のないデモウェアです。ダウンロードして、使って、レコードを作ってください。気に入ったらライセンスを買えばいい。時間制限なし、機能ロックなし、起動時の穏やかなリマインダー以外の nag もありません。",
            "price-personal-title": "個人 / 小規模事業者",
            "price-personal-note": "買い切り",
            "price-personal-feature-1": "フルアプリケーション、全機能込み",
            "price-personal-feature-2": "2 メジャーバージョン分の無償アップデート",
            "price-personal-cta": "近日公開",
            "price-commercial-title": "商用",
            "price-commercial-note": "買い切り",
            "price-commercial-feature-1": "フルアプリケーション、全機能込み",
            "price-commercial-feature-2": "2 メジャーバージョン分の無償アップデート",
            "price-commercial-cta": "近日公開",
            "education-heading": "教育",
            "education-copy": "学生と教育機関は無償です。割引コードが必要なら DM をください。",
            "education-instagram": "Instagram \u2192",
            "education-reddit": "Reddit \u2192",
            "accessibility-heading": "アクセシビリティ",
            "accessibility-copy": "アクセシビリティ要件がある方は 33% オフです。割引コードが必要なら DM をください。",
            "accessibility-instagram": "Instagram \u2192",
            "accessibility-reddit": "Reddit \u2192",
            "download-heading": "近日公開",
            "download-copy": "TayPE は現在も開発中です。リリース告知と早期アクセス情報は、各チャンネルで追ってください。",
            "download-instagram": "Instagram でフォロー",
            "download-reddit": "Reddit でフォロー",
            "community-heading": "コミュニティとサポート",
            "community-card-1-title": "ナレッジベース",
            "community-card-1-body": "ユーザーガイド、チュートリアル、リファレンス。始めるときにも、深掘りするときにも必要なものを揃えています。",
            "community-card-1-link": "ドキュメントを読む \u2192",
            "community-card-2-title": "コミュニティ",
            "community-card-2-body": "質問、ヒント、機能要望、作品紹介。TayPE ユーザーのための拠点です。",
            "community-card-2-link": "r/taype に参加 \u2192",
            "community-card-3-title": "バグ報告",
            "community-card-3-body": "壊れているものを見つけたら GitHub Issue を立ててください。全部読み、本当に重要なものを直します。",
            "community-card-3-link": "バグを報告 \u2192",
            "community-card-4-title": "進捗を追う",
            "community-card-4-body": "開発アップデート、スタジオセッション、Ruminant Audio Works の舞台裏を載せています。",
            "community-card-4-instagram": "Instagram \u2192",
            "community-card-4-reddit": "Reddit \u2192",
            "footer-features": "機能",
            "footer-pricing": "価格",
            "footer-download": "近日公開",
            "footer-docs": "ドキュメント",
            "footer-community": "コミュニティ",
            "footer-bug": "バグ報告",
            "footer-copy": "\u00a9 2026 Ruminant Audio Works. TayPE は Ruminant Audio Works Ltd. のプロダクトです。"
        },
        html: {
            "a11y-copy": "<strong>良い制作にはアクセスが要る。</strong> <strong>アクセシビリティは機能ではなく土台です。</strong> TayPE は全体で WCAG 2.2 AA を目標にしています。高コントラストモードではテキスト比 15:1 以上。すべての状態は色だけでなく、形とアイコンでも伝えます。あらゆる操作にキーボードショートカットがあります。インターフェイスは、ミュージシャンがいる場所に届かなければいけません。"
        },
        attrs: {
            "nav-logo": { alt: "TayPE ロゴ" },
            "hero-logo": { alt: "TayPE テープリールロゴ" },
            "hero-mcp-logo": { alt: "MCP ネイティブ" },
            "feature-mcp-logo": { alt: "MCP ロゴ" },
            "screenshot-1": { alt: "TayPE ミキサー。EQ、コンプレッサー、メーターを表示したチャンネルストリップ" },
            "screenshot-2": { alt: "TayPE ミキサー。EQ とフィルターを展開した表示" },
            "footer-logo": { alt: "Ruminant Audio Works" }
        },
        gregisms: [
            "磨くより、まず存在感",
            "テイクを決めろ",
            "いじるのをやめて、仕上げろ",
            "書き出して次へ",
            "フィールはプラグインのパラメータじゃない",
            "最高のコンプは腹をくくること",
            "ラックで最強の道具はミュートボタン",
            "完璧に録った悪い曲より、雑でもいい曲",
            "トラックは少なく、真実は多く",
            "レコードを作れ",
            "マイク 3 本といい部屋は、プラグイン 32 個に勝る",
            "最高の EQ はアレンジ",
            "これは 11 まである",
            "ステレオが新しいモノ",
            "カウベル多めで",
            "アーカイブは先延ばしじゃない。決断だ"
        ]
    },
    "fr-fr": {
        lang: "fr-FR",
        fontMode: "sans",
        quoteOpen: "\u00ab\u00a0",
        quoteClose: "\u00a0\u00bb",
        title: "TayPE - Le geste d'abord. Accessible dès la conception. Les robots aussi sont les bienvenus.",
        metaDescription: "TayPE est une DAW multipiste pour les musicien·nes qui veulent finir des disques, pas se battre avec le logiciel. Conforme WCAG 2.2. MCP natif. macOS.",
        ogTitle: "TayPE - Fais le disque",
        ogDescription: "Le geste d'abord. Accessible dès la conception. Les robots aussi sont les bienvenus.",
        text: {
            "lang-switch-label": "Langue",
            "nav-features": "Fonctions",
            "nav-pricing": "Tarifs",
            "nav-docs": "Docs",
            "nav-community": "Communauté",
            "nav-download-link": "Bientôt disponible",
            "hero-descriptor": "DAW multipiste pour macOS",
            "hero-tagline-text": "Le geste d'abord. Accessible dès la conception. Les robots aussi sont les bienvenus.",
            "hero-cta": "Bientôt disponible",
            "hero-docs": "Lire le vrai manuel",
            "hero-platform": "DAW multipiste \u00b7 macOS 12+ \u00b7 Natif Apple Silicon \u00b7 Hôte VST3",
            "tone-heading": "Architecture du son",
            "tone-intro-1": "TayPE n'est pas un simple mixeur numérique. Chaque canal passe par un étage de préampli modélisé : du vrai caractère matériel capturé avec Neural Amp Modeler et appliqué à la source. Sur le bus de mix, un moteur de sommation modélisé apporte saturation, cohésion et drive de console.",
            "tone-intro-2": "Pas d'instances de plugin. Pas de processus sandboxés. L'émulation de console tourne directement dans le moteur audio : poids partagés, état par canal, zéro latence ajoutée. La même logique qu'un DSP accéléré par le matériel, intégré au mixeur au lieu d'être greffé dessus.",
            "tone-kicker": "Le geste d'abord. Le son au centre.",
            "tone-card-1-title": "Préamplis modélisés",
            "tone-card-1-body": "Caractère matériel par canal à partir de profils NAM capturés : Neve, API, SSL, et plus encore via la bibliothèque communautaire TONE3000. Façonnez le son à la source et engagez-vous. Trois modes : gain propre, saturateur intégré, ou modèle d'ampli neuronal complet.",
            "tone-card-2-title": "Sommation de console modélisée",
            "tone-card-2-body": "Un moteur de sommation à base de NAM sur le bus master. Chargez un profil de console capturé et chaque signal frappe le bus avec un vrai comportement non linéaire : saturation, couleur harmonique et légère compression qui réagit à la dynamique. Ce que vous entendez est ce qui se somme.",
            "tone-card-3-title": "Vraie sommation",
            "tone-card-3-body": "Bientôt : traitement NAM par canal avant la somme. Chaque piste passera par son propre canal de console, comme 24 signaux poussés dans une vraie desk analogique. Poids partagés, inférence matricielle batchée sur Apple Silicon. Une émulation de console complète pour une fraction du CPU.",
            "philosophy-heading": "Fais le disque",
            "philosophy-copy-1": "TayPE existe pour vous aider à finir de vraies prises, pas à vous noyer dans des options sans fin. Une DAW multipiste avec l'âme d'un magnétophone. Moins de modes, moins de boutons, plus de vérité.",
            "philosophy-copy-2": "Construit dès le départ autour de l'accessibilité. Conforme WCAG 2.2 AA. Mode à fort contraste. Navigation complète au clavier. Parce que les musicien·nes ne sont pas tous voyants, tous entendants, ni tous valides.",
            "feature-a11y-title": "Accessible dès la conception",
            "feature-a11y-body": "WCAG 2.2 AA. Thème à fort contraste. Navigation clavier complète. Libellés compatibles avec les lecteurs d'écran. Pensé pour chaque musicien, pas seulement pour ceux qui voient du texte en 12 px sur fond sombre.",
            "feature-mcp-title": "Intégration MCP",
            "feature-mcp-body": "Assistance machine en option pour les éditions par lots et la gestion de session. Automatisez l'administratif, pas l'art. TayPE reste déterministe et transactionnel au cœur ; MCP accélère le flux sans remplacer le craft.",
            "feature-focus-title": "Le focus avant le bazar",
            "feature-focus-body": "Le mode Focus ne montre que ce qui compte à la tête de lecture. Le mode Archive coupe complètement les pistes mortes : pas de CPU, pas de bruit. Décider plutôt que boucler sans fin.",
            "feature-strip-title": "Tranche de console native",
            "feature-strip-body": "EQ 3 bandes façon Neve, filtres HP/LP, compresseur avec relâchement logarithmique, et 4 inserts VST3 par piste. Tout ce qu'il faut, rien de plus.",
            "feature-truth-title": "La vérité multipiste",
            "feature-truth-body": "Enregistrez, arrangez et mixez avec un chemin de signal propre. Moteur audio sûr en temps réel. Pas de latence cachée, pas de mauvaise surprise. Ce que vous entendez est ce que vous obtenez.",
            "feature-ssl-title": "Intégration SSL 360\u00b0",
            "feature-ssl-body": "Support complet de SSL 360\u00b0 avec contrôle bidirectionnel du fader et du panoramique via UF8/UC1. Les noms de piste, les couleurs et le layout sont poussés automatiquement vers votre surface. Aucun mapping, aucune config : branchez et mixez.",
            "feature-mixfx-title": "Mix FX - Softube Tape",
            "feature-mixfx-body": "Slot de saturation bande dédié sur le bus de mix, propulsé par Softube Multitrack Tape. La chaleur analogique de votre bus stéréo à un seul bouton. Pas de chaîne d'inserts à bricoler : activez et imprimez.",
            "feature-stems-title": "Des stems, pas des dossiers",
            "feature-stems-body": "Les stems sont de vrais bus de sommation. Un seul niveau. Pas d'enfer de dossiers imbriqués. Votre console reste stable et prévisible.",
            "screenshots-heading": "La console",
            "a11y-heading": "Conçu pour tout le monde",
            "pricing-heading": "Tarifs",
            "demo-heading": "Essayez avant d'acheter",
            "demo-copy": "TayPE est un demoware entièrement fonctionnel. Téléchargez-le, utilisez-le, faites des disques avec. Quand vous êtes prêt, achetez une licence. Pas de limite de temps, pas de fonctions bloquées, pas de nag screen au-delà d'un rappel discret au lancement.",
            "price-personal-title": "Personnel / Petite entreprise",
            "price-personal-note": "achat unique",
            "price-personal-feature-1": "Application complète, toutes les fonctions",
            "price-personal-feature-2": "2 versions majeures de mises à jour gratuites",
            "price-personal-cta": "Bientôt disponible",
            "price-commercial-title": "Commercial",
            "price-commercial-note": "achat unique",
            "price-commercial-feature-1": "Application complète, toutes les fonctions",
            "price-commercial-feature-2": "2 versions majeures de mises à jour gratuites",
            "price-commercial-cta": "Bientôt disponible",
            "education-heading": "\u00c9ducation",
            "education-copy": "Gratuit pour les étudiant·es et les enseignant·es. Envoyez-nous un message pour un code de réduction.",
            "education-instagram": "Instagram \u2192",
            "education-reddit": "Reddit \u2192",
            "accessibility-heading": "Accessibilité",
            "accessibility-copy": "33 % de réduction si vous avez des besoins d'accessibilité. Envoyez-nous un message pour un code de réduction.",
            "accessibility-instagram": "Instagram \u2192",
            "accessibility-reddit": "Reddit \u2192",
            "download-heading": "Bientôt disponible",
            "download-copy": "TayPE est en développement actif. Suivez-nous pour les annonces de sortie et l'accès anticipé.",
            "download-instagram": "Suivre sur Instagram",
            "download-reddit": "Suivre sur Reddit",
            "community-heading": "Communauté et support",
            "community-card-1-title": "Base de connaissances",
            "community-card-1-body": "Guide utilisateur, tutoriels et documentation de référence. Tout ce qu'il faut pour démarrer et aller plus loin.",
            "community-card-1-link": "Lire la doc \u2192",
            "community-card-2-title": "Communauté",
            "community-card-2-body": "Questions, astuces, demandes de fonctions, show-and-tell. Le point de ralliement des utilisateurs TayPE.",
            "community-card-2-link": "Rejoindre r/taype \u2192",
            "community-card-3-title": "Signalements de bugs",
            "community-card-3-body": "Quelque chose est cassé ? Ouvrez une issue GitHub. On les lit toutes et on corrige ce qui compte.",
            "community-card-3-link": "Signaler un bug \u2192",
            "community-card-4-title": "Suivre le projet",
            "community-card-4-body": "Mises à jour du développement, sessions studio et coulisses de Ruminant Audio Works.",
            "community-card-4-instagram": "Instagram \u2192",
            "community-card-4-reddit": "Reddit \u2192",
            "footer-features": "Fonctions",
            "footer-pricing": "Tarifs",
            "footer-download": "Bientôt disponible",
            "footer-docs": "Docs",
            "footer-community": "Communauté",
            "footer-bug": "Bug",
            "footer-copy": "\u00a9 2026 Ruminant Audio Works. TayPE est un produit de Ruminant Audio Works Ltd."
        },
        html: {
            "a11y-copy": "<strong>Le craft demande l'accès.</strong> <strong>L'accessibilité n'est pas une option. C'est la base.</strong> TayPE vise le niveau WCAG 2.2 AA partout. Mode à fort contraste avec des ratios de texte de 15:1 et plus. Chaque état est signalé par la forme et l'icône, jamais par la couleur seule. Des raccourcis clavier pour chaque action. L'interface doit rejoindre les musicien·nes là où ils sont."
        },
        attrs: {
            "nav-logo": { alt: "Logo TayPE" },
            "hero-logo": { alt: "Logo bobine TayPE" },
            "hero-mcp-logo": { alt: "MCP natif" },
            "feature-mcp-logo": { alt: "Logo MCP" },
            "screenshot-1": { alt: "Mixeur TayPE avec tranche de console, EQ, compresseur et mètre" },
            "screenshot-2": { alt: "Mixeur TayPE avec l'EQ et les filtres déployés" },
            "footer-logo": { alt: "Ruminant Audio Works" }
        },
        gregisms: [
            "La présence avant le polissage",
            "Engage la prise",
            "Arrête de peaufiner. Termine",
            "Imprime. Passe à la suite",
            "Le feel n'est pas un paramètre de plugin",
            "Le meilleur compresseur, c'est la décision",
            "Le bouton mute est l'outil le plus puissant du rack",
            "Une grande chanson mal enregistrée bat une mauvaise chanson parfaite",
            "Moins de pistes, plus de vérité",
            "Fais le disque",
            "Trois micros et une bonne pièce battent trente-deux plugins",
            "Le meilleur EQ, c'est l'arrangement",
            "Ça va jusqu'à onze",
            "La stéréo est le nouveau mono",
            "Maintenant avec encore plus de cloches",
            "Archiver n'est pas procrastiner. C'est décider"
        ]
    },
    "de-de": {
        lang: "de-DE",
        fontMode: "sans",
        quoteOpen: "\u201e",
        quoteClose: "\u201c",
        title: "TayPE - Handwerk zuerst. Barrierefrei von Anfang an. Roboter sind auch willkommen.",
        metaDescription: "TayPE ist eine Multitrack-DAW für Musikerinnen und Musiker, die Platten fertig machen wollen statt mit Software zu kämpfen. WCAG-2.2-barrierefrei. MCP nativ. macOS.",
        ogTitle: "TayPE - Mach die Platte",
        ogDescription: "Handwerk zuerst. Barrierefrei von Anfang an. Roboter sind auch willkommen.",
        text: {
            "lang-switch-label": "Sprache",
            "nav-features": "Funktionen",
            "nav-pricing": "Preise",
            "nav-docs": "Docs",
            "nav-community": "Community",
            "nav-download-link": "Bald verfügbar",
            "hero-descriptor": "Multitrack-DAW für macOS",
            "hero-tagline-text": "Handwerk zuerst. Barrierefrei von Anfang an. Roboter sind auch willkommen.",
            "hero-cta": "Bald verfügbar",
            "hero-docs": "Das Handbuch lesen",
            "hero-platform": "Multitrack-DAW \u00b7 macOS 12+ \u00b7 Nativ für Apple Silicon \u00b7 VST3-Host",
            "tone-heading": "Klangarchitektur",
            "tone-intro-1": "TayPE ist kein flacher Digitalmixer. Jeder Kanal läuft durch eine modellierte Preamp-Stufe \u2014 echter Hardware-Charakter, mit Neural Amp Modeler eingefangen und direkt an der Quelle angewendet. Auf dem Mixbus bringt eine modellierte Summing-Engine Konsolen-Sättigung, Zusammenhalt und Drive.",
            "tone-intro-2": "Keine Plugin-Instanzen. Keine Sandbox-Prozesse. Die Konsolenemulation läuft direkt in der Audio-Engine \u2014 gemeinsame Gewichtstensoren, Zustand pro Kanal, null zusätzliche Latenz. Dieselbe Philosophie wie hardwarebeschleunigtes DSP, in den Mixer eingebaut statt nachträglich angeflanscht.",
            "tone-kicker": "Handwerk zuerst. Klang im Kern.",
            "tone-card-1-title": "Modellierte Preamps",
            "tone-card-1-body": "Hardware-Charakter pro Kanal aus aufgenommenen NAM-Profilen \u2014 Neve, API, SSL und mehr aus der TONE3000-Community-Bibliothek. Forme den Klang an der Quelle und entscheide dich bewusst. Drei Modi: sauberes Gain, integrierter Saturator oder volles Neural-Amp-Modell.",
            "tone-card-2-title": "Modelliertes Console Summing",
            "tone-card-2-body": "Eine NAM-basierte Summing-Engine auf dem Masterbus. Lade ein aufgenommenes Konsolenprofil und jedes Signal trifft den Bus mit echtem nichtlinearem Charakter \u2014 Sättigung, harmonischer Farbe und subtiler Kompression, die auf Dynamik reagiert. Was du hörst, ist das, was summiert wird.",
            "tone-card-3-title": "Echtes Summing",
            "tone-card-3-body": "Demnächst: NAM-Verarbeitung pro Kanal vor der Summe \u2014 jede Spur durch ihren eigenen Konsolenkanal, als würdest du 24 Signale durch ein echtes Analogpult schicken. Gemeinsame Gewichte, gebatchte Matrix-Inferenz auf Apple Silicon. Volle Konsolenemulation zu einem Bruchteil der CPU-Kosten.",
            "philosophy-heading": "Mach die Platte",
            "philosophy-copy-1": "TayPE ist dafür da, dir beim Fertigmachen echter Takes zu helfen, nicht beim Ertrinken in endlosen Optionen. Eine Multitrack-DAW mit der Seele einer Bandmaschine. Weniger Modi, weniger Knöpfe, mehr Wahrheit.",
            "philosophy-copy-2": "Von Grund auf mit Accessibility im Kern gebaut. WCAG 2.2 AA-konform. High-Contrast-Modus. Voll per Tastatur bedienbar. Denn Musikerinnen und Musiker sind nicht alle sehend, hörend oder körperlich gleich.",
            "feature-a11y-title": "Barrierefrei im Design",
            "feature-a11y-body": "WCAG 2.2 AA. High-Contrast-Theme. Vollständige Tastaturnavigation. Screenreader-kompatible Beschriftungen. Entwickelt für alle Musikerinnen und Musiker, nicht nur für Menschen, die 12-Pixel-Text auf dunklem Hintergrund lesen können.",
            "feature-mcp-title": "MCP-Integration",
            "feature-mcp-body": "Optionale Maschinenhilfe für Batch-Edits und Session-Management. Automatisiere die Verwaltung, nicht die Kunst. TayPE bleibt im Kern deterministisch und transaktional \u2014 MCP verbessert den Workflow, ohne das Handwerk zu ersetzen.",
            "feature-focus-title": "Fokus statt Ballast",
            "feature-focus-body": "Der Focus-Modus zeigt nur, was am Playhead zählt. Der Archive-Modus schaltet tote Spuren komplett stumm \u2014 keine CPU, kein Lärm. Entscheiden statt endlos loopen.",
            "feature-strip-title": "Nativer Channel Strip",
            "feature-strip-body": "Neve-artiger 3-Band-EQ, HP/LP-Filter, Kompressor mit logarithmischem Release und 4 VST3-Inserts pro Spur. Alles, was du brauchst. Nichts, was du nicht brauchst.",
            "feature-truth-title": "Multitrack-Wahrheit",
            "feature-truth-body": "Aufnehmen, arrangieren und mischen mit einem sauberen Signalpfad. Echtzeitsichere Audio-Engine. Keine versteckte Latenz, keine Überraschungen. Was du hörst, ist das Ergebnis.",
            "feature-ssl-title": "SSL 360\u00b0 Integration",
            "feature-ssl-body": "Volle SSL-360\u00b0-Unterstützung mit bidirektionaler Fader- und Pan-Steuerung über UF8/UC1. Spurnamen, Farben und Layout gehen automatisch auf deine Oberfläche. Kein Mapping, keine Konfiguration \u2014 einfach einstecken und mischen.",
            "feature-mixfx-title": "Mix FX - Softube Tape",
            "feature-mixfx-body": "Dedizierter Tape-Sättigungs-Slot auf dem Mixbus, angetrieben von Softube Multitrack Tape. Analoge Wärme auf deinem Stereobus mit einem Regler. Kein Gefummel mit Insert-Ketten \u2014 einfach einschalten und drucken.",
            "feature-stems-title": "Stems statt Ordner",
            "feature-stems-body": "Stems sind echte Summing-Busse. Eine Ebene tief. Kein verschachteltes Ordnerchaos. Dein Konsolenlayout bleibt stabil und berechenbar.",
            "screenshots-heading": "Die Konsole",
            "a11y-heading": "Für alle gebaut",
            "pricing-heading": "Preise",
            "demo-heading": "Erst testen, dann kaufen",
            "demo-copy": "TayPE ist voll funktionsfähige Demoware. Lade es herunter, nutze es, mache damit Platten. Wenn du bereit bist, kauf eine Lizenz. Keine Zeitlimits, keine Funktionssperren, keine Nag-Screens außer einer sanften Erinnerung beim Start.",
            "price-personal-title": "Privat / Kleinunternehmen",
            "price-personal-note": "Einmalkauf",
            "price-personal-feature-1": "Vollständige Anwendung, alle Funktionen",
            "price-personal-feature-2": "2 Hauptversionen kostenloser Updates",
            "price-personal-cta": "Bald verfügbar",
            "price-commercial-title": "Gewerblich",
            "price-commercial-note": "Einmalkauf",
            "price-commercial-feature-1": "Vollständige Anwendung, alle Funktionen",
            "price-commercial-feature-2": "2 Hauptversionen kostenloser Updates",
            "price-commercial-cta": "Bald verfügbar",
            "education-heading": "Bildung",
            "education-copy": "Kostenlos für Studierende und Lehrende. Schreib uns für einen Rabattcode.",
            "education-instagram": "Instagram \u2192",
            "education-reddit": "Reddit \u2192",
            "accessibility-heading": "Barrierefreiheit",
            "accessibility-copy": "33 % Rabatt, wenn du Accessibility-Anforderungen hast. Schreib uns für einen Rabattcode.",
            "accessibility-instagram": "Instagram \u2192",
            "accessibility-reddit": "Reddit \u2192",
            "download-heading": "Bald verfügbar",
            "download-copy": "TayPE befindet sich in aktiver Entwicklung. Folge uns für Release-Ankündigungen und Early Access.",
            "download-instagram": "Auf Instagram folgen",
            "download-reddit": "Auf Reddit folgen",
            "community-heading": "Community & Support",
            "community-card-1-title": "Wissensbasis",
            "community-card-1-body": "Benutzerhandbuch, Tutorials und Referenzdokumentation. Alles, was du zum Einstieg und für den Tiefgang brauchst.",
            "community-card-1-link": "Docs lesen \u2192",
            "community-card-2-title": "Community",
            "community-card-2-body": "Fragen, Tipps, Feature-Wünsche, Show-and-Tell. Der Treffpunkt für TayPE-Nutzerinnen und Nutzer.",
            "community-card-2-link": "r/taype beitreten \u2192",
            "community-card-3-title": "Bugmeldungen",
            "community-card-3-body": "Etwas kaputt? Eröffne ein GitHub-Issue. Wir lesen jedes einzelne und beheben, was zählt.",
            "community-card-3-link": "Bug melden \u2192",
            "community-card-4-title": "Mitverfolgen",
            "community-card-4-body": "Entwicklungs-Updates, Studiosessions und Blicke hinter die Kulissen bei Ruminant Audio Works.",
            "community-card-4-instagram": "Instagram \u2192",
            "community-card-4-reddit": "Reddit \u2192",
            "footer-features": "Funktionen",
            "footer-pricing": "Preise",
            "footer-download": "Bald verfügbar",
            "footer-docs": "Docs",
            "footer-community": "Community",
            "footer-bug": "Bug melden",
            "footer-copy": "\u00a9 2026 Ruminant Audio Works. TayPE ist ein Produkt von Ruminant Audio Works Ltd."
        },
        html: {
            "a11y-copy": "<strong>Handwerk braucht Zugang.</strong> <strong>Barrierefreiheit ist kein Feature. Sie ist das Fundament.</strong> TayPE zielt durchgängig auf WCAG 2.2 AA. High-Contrast-Modus mit Textkontrasten von 15:1 und mehr. Jeder Zustand wird über Form und Symbol vermittelt, nie nur über Farbe. Tastaturkürzel für jede Aktion. Die Oberfläche muss Musikerinnen und Musiker dort abholen, wo sie stehen."
        },
        attrs: {
            "nav-logo": { alt: "TayPE-Logo" },
            "hero-logo": { alt: "TayPE-Spulenlogo" },
            "hero-mcp-logo": { alt: "MCP nativ" },
            "feature-mcp-logo": { alt: "MCP-Logo" },
            "screenshot-1": { alt: "TayPE-Mixer mit Channel Strip, EQ, Kompressor und Meter" },
            "screenshot-2": { alt: "TayPE-Mixer mit erweitertem EQ und Filtern" },
            "footer-logo": { alt: "Ruminant Audio Works" }
        },
        gregisms: [
            "Präsenz vor Politur",
            "Leg dich auf den Take fest",
            "Hör auf zu tweaken. Fang an fertig zu machen",
            "Druck es. Weiter",
            "Feel ist kein Plugin-Parameter",
            "Der beste Kompressor ist Entschlossenheit",
            "Der Mute-Button ist das mächtigste Werkzeug im Rack",
            "Ein großartiger Song, schlecht aufgenommen, schlägt einen schlechten perfekt aufgenommenen Song",
            "Weniger Spuren, mehr Wahrheit",
            "Mach die Platte",
            "Drei Mikrofone und ein guter Raum schlagen zweiunddreißig Plugins",
            "Der beste EQ ist das Arrangement",
            "Die gehen bis elf",
            "Stereo ist das neue Mono",
            "Jetzt mit mehr Cowbell",
            "Archivieren ist keine Prokrastination. Es ist eine Entscheidung"
        ]
    },
    "es-es": {
        lang: "es-ES",
        fontMode: "sans",
        quoteOpen: "\u00ab",
        quoteClose: "\u00bb",
        title: "TayPE - Primero el oficio. Accesible desde el diseño. Los robots también son bienvenidos.",
        metaDescription: "TayPE es una DAW multipista para músicos que quieren terminar discos, no pelearse con el software. Accesible según WCAG 2.2. MCP nativo. macOS.",
        ogTitle: "TayPE - Haz el disco",
        ogDescription: "Primero el oficio. Accesible desde el diseño. Los robots también son bienvenidos.",
        text: {
            "lang-switch-label": "Idioma",
            "nav-features": "Funciones",
            "nav-pricing": "Precios",
            "nav-docs": "Docs",
            "nav-community": "Comunidad",
            "nav-download-link": "Próximamente",
            "hero-descriptor": "DAW multipista para macOS",
            "hero-tagline-text": "Primero el oficio. Accesible desde el diseño. Los robots también son bienvenidos.",
            "hero-cta": "Próximamente",
            "hero-docs": "Leer el manual de verdad",
            "hero-platform": "DAW multipista \u00b7 macOS 12+ \u00b7 Nativo en Apple Silicon \u00b7 Host VST3",
            "tone-heading": "Arquitectura de tono",
            "tone-intro-1": "TayPE no es un mezclador digital plano. Cada canal pasa por una etapa de previo modelada: carácter de hardware real capturado con Neural Amp Modeler y aplicado en la fuente. En el bus de mezcla, un motor de suma modelado añade saturación, cohesión y empuje de consola.",
            "tone-intro-2": "Sin instancias de plugin. Sin procesos en sandbox. La emulación de consola corre directamente dentro del motor de audio: pesos compartidos, estado por canal y cero latencia añadida. La misma filosofía que un DSP acelerado por hardware, integrado en el mezclador y no atornillado encima.",
            "tone-kicker": "Primero el oficio. El tono en el centro.",
            "tone-card-1-title": "Preamplificadores modelados",
            "tone-card-1-body": "Carácter de hardware por canal a partir de perfiles NAM capturados: Neve, API, SSL y más desde la biblioteca comunitaria TONE3000. Moldea el tono en la fuente y comprométete. Tres modos: ganancia limpia, saturador integrado o modelo neuronal completo.",
            "tone-card-2-title": "Suma de consola modelada",
            "tone-card-2-body": "Un motor de suma basado en NAM en el bus master. Carga un perfil de consola capturado y cada señal golpea el bus con carácter no lineal real: saturación, color armónico y compresión sutil que responde a la dinámica. Lo que oyes es lo que suma.",
            "tone-card-3-title": "Suma real",
            "tone-card-3-body": "Próximamente: procesamiento NAM por canal antes de la suma. Cada pista pasará por su propio canal de consola, como empujar 24 señales por una mesa analógica real. Pesos compartidos e inferencia matricial por lotes en Apple Silicon. Emulación de consola completa por una fracción del coste de CPU.",
            "philosophy-heading": "Haz el disco",
            "philosophy-copy-1": "TayPE existe para ayudarte a terminar tomas reales, no a ahogarte en opciones infinitas. Una DAW multipista con alma de grabadora de cinta. Menos modos, menos perillas, más verdad.",
            "philosophy-copy-2": "Construido desde cero con la accesibilidad en el centro. Cumple WCAG 2.2 AA. Modo de alto contraste. Navegable por teclado. Porque los músicos no son todos videntes, oyentes ni capacitados de la misma manera.",
            "feature-a11y-title": "Accesible desde el diseño",
            "feature-a11y-body": "WCAG 2.2 AA. Tema de alto contraste. Navegación completa por teclado. Etiquetas compatibles con lectores de pantalla. Diseñado para cada músico, no solo para quien puede leer texto de 12 px sobre fondo oscuro.",
            "feature-mcp-title": "Integración MCP",
            "feature-mcp-body": "Asistencia de máquina opcional para ediciones por lotes y gestión de sesiones. Automatiza la administración, no el arte. TayPE sigue siendo determinista y transaccional en su núcleo: MCP mejora el flujo sin sustituir el oficio.",
            "feature-focus-title": "Enfoque antes que ruido",
            "feature-focus-body": "El modo Focus muestra solo lo que importa en el cabezal de reproducción. El modo Archivo silencia por completo las pistas muertas: sin CPU, sin ruido. Decidir en vez de repetir en bucle para siempre.",
            "feature-strip-title": "Channel strip nativo",
            "feature-strip-body": "EQ de 3 bandas estilo Neve, filtros HP/LP, compresor con liberación logarítmica y 4 inserts VST3 por pista. Todo lo que necesitas, nada de sobra.",
            "feature-truth-title": "Verdad multipista",
            "feature-truth-body": "Graba, ordena y mezcla con una ruta de señal limpia. Motor de audio seguro en tiempo real. Sin latencia oculta, sin sorpresas. Lo que oyes es lo que obtienes.",
            "feature-ssl-title": "Integración SSL 360\u00b0",
            "feature-ssl-body": "Compatibilidad total con SSL 360\u00b0 y control bidireccional de fader y paneo mediante UF8/UC1. Los nombres de pista, colores y layout se envían automáticamente a tu superficie. Sin mapeo, sin configuración: enchufa y mezcla.",
            "feature-mixfx-title": "Mix FX - Softube Tape",
            "feature-mixfx-body": "Ranura dedicada de saturación de cinta en el bus de mezcla, impulsada por Softube Multitrack Tape. Calidez analógica en tu bus estéreo con un solo mando. Sin cadenas de inserts que ajustar: activar y renderizar.",
            "feature-stems-title": "Stems, no carpetas",
            "feature-stems-body": "Los stems son buses de suma reales. Una sola capa. Nada de infierno de carpetas anidadas. El diseño de tu consola se mantiene estable y predecible.",
            "screenshots-heading": "La consola",
            "a11y-heading": "Hecho para todo el mundo",
            "pricing-heading": "Precios",
            "demo-heading": "Pruébalo antes de comprar",
            "demo-copy": "TayPE es demoware totalmente funcional. Descárgalo, úsalo y haz discos con él. Cuando estés listo, compra una licencia. Sin límite de tiempo, sin funciones bloqueadas, sin pantallas molestas más allá de un recordatorio suave al arrancar.",
            "price-personal-title": "Personal / Pequeña empresa",
            "price-personal-note": "pago único",
            "price-personal-feature-1": "Aplicación completa, todas las funciones",
            "price-personal-feature-2": "2 versiones mayores de actualizaciones gratuitas",
            "price-personal-cta": "Próximamente",
            "price-commercial-title": "Comercial",
            "price-commercial-note": "pago único",
            "price-commercial-feature-1": "Aplicación completa, todas las funciones",
            "price-commercial-feature-2": "2 versiones mayores de actualizaciones gratuitas",
            "price-commercial-cta": "Próximamente",
            "education-heading": "Educación",
            "education-copy": "Gratis para estudiantes y docentes. Escríbenos para conseguir un código de descuento.",
            "education-instagram": "Instagram \u2192",
            "education-reddit": "Reddit \u2192",
            "accessibility-heading": "Accesibilidad",
            "accessibility-copy": "33 % de descuento si tienes requisitos de accesibilidad. Escríbenos para conseguir un código de descuento.",
            "accessibility-instagram": "Instagram \u2192",
            "accessibility-reddit": "Reddit \u2192",
            "download-heading": "Próximamente",
            "download-copy": "TayPE está en desarrollo activo. Síguenos para conocer anuncios de lanzamiento y acceso anticipado.",
            "download-instagram": "Seguir en Instagram",
            "download-reddit": "Seguir en Reddit",
            "community-heading": "Comunidad y soporte",
            "community-card-1-title": "Base de conocimiento",
            "community-card-1-body": "Guía de usuario, tutoriales y documentación de referencia. Todo lo que necesitas para empezar y profundizar.",
            "community-card-1-link": "Leer la doc \u2192",
            "community-card-2-title": "Comunidad",
            "community-card-2-body": "Preguntas, trucos, peticiones de funciones y show-and-tell. El punto de encuentro para usuarios de TayPE.",
            "community-card-2-link": "Unirse a r/taype \u2192",
            "community-card-3-title": "Errores y bugs",
            "community-card-3-body": "¿Encontraste algo roto? Abre una incidencia en GitHub. Las leemos todas y arreglamos lo que importa.",
            "community-card-3-link": "Reportar un bug \u2192",
            "community-card-4-title": "Seguir el proyecto",
            "community-card-4-body": "Actualizaciones de desarrollo, sesiones de estudio y detrás de cámaras de Ruminant Audio Works.",
            "community-card-4-instagram": "Instagram \u2192",
            "community-card-4-reddit": "Reddit \u2192",
            "footer-features": "Funciones",
            "footer-pricing": "Precios",
            "footer-download": "Próximamente",
            "footer-docs": "Docs",
            "footer-community": "Comunidad",
            "footer-bug": "Reportar bug",
            "footer-copy": "\u00a9 2026 Ruminant Audio Works. TayPE es un producto de Ruminant Audio Works Ltd."
        },
        html: {
            "a11y-copy": "<strong>El oficio exige acceso.</strong> <strong>La accesibilidad no es una función. Es la base.</strong> TayPE apunta a WCAG 2.2 AA en todo el producto. Modo de alto contraste con relaciones de texto de 15:1 o más. Cada estado se comunica con forma e icono, nunca solo con color. Atajos de teclado para cada acción. La interfaz tiene que encontrarse con los músicos donde están."
        },
        attrs: {
            "nav-logo": { alt: "Logo de TayPE" },
            "hero-logo": { alt: "Logo de carrete de TayPE" },
            "hero-mcp-logo": { alt: "MCP nativo" },
            "feature-mcp-logo": { alt: "Logo de MCP" },
            "screenshot-1": { alt: "Mezclador de TayPE con channel strip, ecualizador, compresor y medidor" },
            "screenshot-2": { alt: "Mezclador de TayPE con ecualizador y filtros ampliados" },
            "footer-logo": { alt: "Ruminant Audio Works" }
        },
        gregisms: [
            "Presencia antes que pulido",
            "Comprométete con la toma",
            "Deja de retocar. Termina",
            "Imprímelo y sigue",
            "El feel no es un parámetro de plugin",
            "El mejor compresor es la decisión",
            "El botón de mute es la herramienta más poderosa del rack",
            "Una gran canción mal grabada supera a una mala canción perfecta",
            "Menos pistas, más verdad",
            "Haz el disco",
            "Tres micros y una buena sala vencen a treinta y dos plugins",
            "El mejor EQ es el arreglo",
            "Esto llega hasta once",
            "El estéreo es el nuevo mono",
            "Ahora con más cowbell",
            "Archivar no es procrastinar. Es decidir"
        ]
    },
    "is-is": {
        lang: "is-IS",
        fontMode: "sans",
        quoteOpen: "\u201e",
        quoteClose: "\u201c",
        title: "TayPE - Handverkið fyrst. Aðgengilegt frá upphafi. Vélmennum er líka vel tekið.",
        metaDescription: "TayPE er fjölrása DAW fyrir tónlistarfólk sem vill klára plötur í stað þess að berjast við hugbúnað. WCAG 2.2 aðgengi. Innbyggt MCP. macOS.",
        ogTitle: "TayPE - Gerðu plötuna",
        ogDescription: "Handverkið fyrst. Aðgengilegt frá upphafi. Vélmennum er líka vel tekið.",
        text: {
            "lang-switch-label": "Tungumál",
            "nav-features": "Eiginleikar",
            "nav-pricing": "Verð",
            "nav-docs": "Skjöl",
            "nav-community": "Samfélag",
            "nav-download-link": "Væntanlegt",
            "hero-descriptor": "Fjölrása DAW fyrir macOS",
            "hero-tagline-text": "Handverkið fyrst. Aðgengilegt frá upphafi. Vélmennum er líka vel tekið.",
            "hero-cta": "Væntanlegt",
            "hero-docs": "Lesa handbókina",
            "hero-platform": "Fjölrása DAW \u00b7 macOS 12+ \u00b7 Innbyggt fyrir Apple Silicon \u00b7 VST3 hýsing",
            "tone-heading": "Hljóðarkitektúr",
            "tone-intro-1": "TayPE er ekki flatur stafrænn mixer. Hver rás fer í gegnum mótað preamp-stig \u2014 raunverulegt karakter frá búnaði sem er fangaður með Neural Amp Modeler og notaður við upptökugjafann. Á mixbus bætir mótaður summing-vél við mettun, samheldni og drifi í anda console-borðs.",
            "tone-intro-2": "Engin plugin-instans. Engin sandbox-ferli. Console-hermunin keyrir beint inni í hljóðvélinni \u2014 sameiginleg þyngdargögn, staða á hverri rás og engin viðbótarlatens. Sama hugsun og vélbúnaðarhraðað DSP, byggt inn í mixerinn en ekki skrúfað utan á hann.",
            "tone-kicker": "Handverkið fyrst. Hljóðið í kjarnanum.",
            "tone-card-1-title": "Mótuð preamp-stig",
            "tone-card-1-body": "Vélbúnaðarlitur á hverri rás úr NAM-prófílum \u2014 Neve, API, SSL og fleira úr TONE3000 samfélagssafninu. Mótaðu tóninn við upptökuna og taktu ákvörðun. Þrír hamir: hreinn gain, innbyggð mettun eða fullt neural amp líkan.",
            "tone-card-2-title": "Mótuð console-summun",
            "tone-card-2-body": "NAM-knúin summing-vél á master bus. Hlaðið inn prófíl af console-borði og hvert merki lendir á busnum með raunverulegum ólínulegum karakter \u2014 mettun, yfirtónalit og létt compression sem svarar dýnamík. Það sem þú heyrir er það sem leggst saman.",
            "tone-card-3-title": "Sönn summun",
            "tone-card-3-body": "Væntanlegt: NAM-vinnsla á hverri rás áður en summan er reiknuð. Hvert lag fer í gegnum sína eigin console-rás, eins og að ýta 24 merkjum í gegnum raunverulegt analog-borð. Sameiginleg þyngd og batchuð fylkjainferensa á Apple Silicon. Full console-hermun fyrir brot af CPU-kostnaði.",
            "philosophy-heading": "Gerðu plötuna",
            "philosophy-copy-1": "TayPE er til til að hjálpa þér að klára alvöru tökur, ekki sökkva í endalausa valkosti. Fjölrása DAW með sál segulbandstækis. Færri hamir, færri hnappar, meiri sannleikur.",
            "philosophy-copy-2": "Byggt frá grunni með aðgengi í miðjunni. WCAG 2.2 AA samræmi. Há-contrast hamur. Full lyklaborðsstýring. Því tónlistarfólk sér ekki allt, heyrir ekki allt og býr ekki allt við sömu líkamsgetu.",
            "feature-a11y-title": "Aðgengilegt frá hönnun",
            "feature-a11y-body": "WCAG 2.2 AA. Há-contrast þema. Full lyklaborðsstýring. Merkingar sem virka með skjálesurum. Hannað fyrir allt tónlistarfólk, ekki bara þau sem sjá 12 px texta á dökkum bakgrunni.",
            "feature-mcp-title": "MCP samþætting",
            "feature-mcp-body": "Valfrjáls vélræn aðstoð fyrir lotubreytingar og utanumhald sessions. Sjálfvirknivæddu umsýsluna, ekki listina. TayPE er enn determinískt og transactional í kjarnanum \u2014 MCP bætir vinnuflæði án þess að koma í stað handverksins.",
            "feature-focus-title": "Fókus fram yfir drasl",
            "feature-focus-body": "Focus hamur sýnir aðeins það sem skiptir máli við playhead. Archive hamur þaggar alveg niður dauðum rásum \u2014 ekkert CPU, enginn hávaði. Taktu ákvörðun í stað þess að lúppa endalaust.",
            "feature-strip-title": "Innbyggð rásarræma",
            "feature-strip-body": "3-banda EQ í anda Neve, HP/LP síur, compressor með logarithmic release og 4 VST3 insert slot á hverri rás. Allt sem þú þarft, ekkert sem þú þarft ekki.",
            "feature-truth-title": "Sannleikur fjölrása",
            "feature-truth-body": "Taktu upp, raðaðu og mixaðu með hreinum merkjaleiðum. Hljóðvél sem er örugg í rauntíma. Engin falin latens, engin óvart. Það sem þú heyrir er það sem þú færð.",
            "feature-ssl-title": "SSL 360\u00b0 samþætting",
            "feature-ssl-body": "Fullur stuðningur við SSL 360\u00b0 með tvíátta fader- og pönnunarstýringu í gegnum UF8/UC1. Rásanöfn, litir og layout fara sjálfkrafa yfir á stjórnflötinn. Engin mapping, engin stilling \u2014 tengdu og mixaðu.",
            "feature-mixfx-title": "Mix FX - Softube Tape",
            "feature-mixfx-body": "Sérstakt tape saturation slot á mixbus, knúið af Softube Multitrack Tape. Analog hlýja á stereobus með einum takka. Engin insert-keðja til að fikta í \u2014 kveiktu og prentaðu.",
            "feature-stems-title": "Stemmur, ekki möppur",
            "feature-stems-body": "Stemmur eru raunverulegir summing-busar. Eitt lag af dýpt. Ekkert möppuvíti innan í möppum. Console-layoutið helst stöðugt og fyrirsjáanlegt.",
            "screenshots-heading": "Console-borðið",
            "a11y-heading": "Byggt fyrir alla",
            "pricing-heading": "Verð",
            "demo-heading": "Prófaðu áður en þú kaupir",
            "demo-copy": "TayPE er fullvirkt demoware. Sæktu það, notaðu það og gerðu plötur með því. Þegar þú ert tilbúin(n), keyptu leyfi. Engin tímamörk, engar læstar aðgerðir, engir áleitnir skjáir nema mild áminning við ræsingu.",
            "price-personal-title": "Einstaklingar / lítil fyrirtæki",
            "price-personal-note": "eitt skipti",
            "price-personal-feature-1": "Fullt forrit, allir eiginleikar",
            "price-personal-feature-2": "2 aðalútgáfur af ókeypis uppfærslum",
            "price-personal-cta": "Væntanlegt",
            "price-commercial-title": "Atvinnuleyfi",
            "price-commercial-note": "eitt skipti",
            "price-commercial-feature-1": "Fullt forrit, allir eiginleikar",
            "price-commercial-feature-2": "2 aðalútgáfur af ókeypis uppfærslum",
            "price-commercial-cta": "Væntanlegt",
            "education-heading": "Menntun",
            "education-copy": "Ókeypis fyrir nemendur og kennara. Sendu okkur skilaboð fyrir afsláttarkóða.",
            "education-instagram": "Instagram \u2192",
            "education-reddit": "Reddit \u2192",
            "accessibility-heading": "Aðgengi",
            "accessibility-copy": "33% afsláttur ef þú hefur aðgengisþarfir. Sendu okkur skilaboð fyrir afsláttarkóða.",
            "accessibility-instagram": "Instagram \u2192",
            "accessibility-reddit": "Reddit \u2192",
            "download-heading": "Væntanlegt",
            "download-copy": "TayPE er í virkri þróun. Fylgstu með fyrir útgáfutilkynningar og snemmbúinn aðgang.",
            "download-instagram": "Fylgja á Instagram",
            "download-reddit": "Fylgja á Reddit",
            "community-heading": "Samfélag og stuðningur",
            "community-card-1-title": "Þekkingargrunnur",
            "community-card-1-body": "Notendahandbók, leiðbeiningar og tilvísunarskjöl. Allt sem þú þarft til að byrja og kafa dýpra.",
            "community-card-1-link": "Lesa skjölin \u2192",
            "community-card-2-title": "Samfélag",
            "community-card-2-body": "Spurningar, ráð, hugmyndir að eiginleikum og sýningar. Samkomustaður TayPE notenda.",
            "community-card-2-link": "Ganga í r/taype \u2192",
            "community-card-3-title": "Villuskráningar",
            "community-card-3-body": "Fannstu eitthvað bilað? Skráðu GitHub issue. Við lesum allt og löguðum það sem skiptir máli.",
            "community-card-3-link": "Tilkynna villu \u2192",
            "community-card-4-title": "Fylgjast með",
            "community-card-4-body": "Þróunaruppfærslur, stúdíólotur og bak við tjöldin hjá Ruminant Audio Works.",
            "community-card-4-instagram": "Instagram \u2192",
            "community-card-4-reddit": "Reddit \u2192",
            "footer-features": "Eiginleikar",
            "footer-pricing": "Verð",
            "footer-download": "Væntanlegt",
            "footer-docs": "Skjöl",
            "footer-community": "Samfélag",
            "footer-bug": "Tilkynna villu",
            "footer-copy": "\u00a9 2026 Ruminant Audio Works. TayPE er vara frá Ruminant Audio Works Ltd."
        },
        html: {
            "a11y-copy": "<strong>Handverk krefst aðgangs.</strong> <strong>Aðgengi er ekki aukaatriði. Það er grunnurinn.</strong> TayPE stefnir á WCAG 2.2 AA alls staðar. Há-contrast hamur með 15:1 eða meiri textahlutföllum. Hvert ástand er sýnt með lögun og tákni, aldrei aðeins með lit. Flýtilyklar fyrir hverja aðgerð. Viðmótið verður að mæta tónlistarfólki þar sem það er statt."
        },
        attrs: {
            "nav-logo": { alt: "TayPE merki" },
            "hero-logo": { alt: "TayPE spólu-merki" },
            "hero-mcp-logo": { alt: "Innbyggt MCP" },
            "feature-mcp-logo": { alt: "MCP merki" },
            "screenshot-1": { alt: "TayPE mixer með rásarræmu, EQ, compressor og mæli" },
            "screenshot-2": { alt: "TayPE mixer með opnu EQ og síum" },
            "footer-logo": { alt: "Ruminant Audio Works" }
        },
        gregisms: [
            "Nærvera fram yfir pússun",
            "Láttu slag standa með tökunni",
            "Hættu að fikta. Kláraðu",
            "Prentaðu þetta og haltu áfram",
            "Fílingur er ekki plugin-breyta",
            "Besti compressorinn er ákvörðun",
            "Mute-hnappurinn er öflugasta tólið í rekkanum",
            "Frábært lag illa tekið upp vinnur lélegt lag fullkomlega tekið upp",
            "Færri rásir, meiri sannleikur",
            "Gerðu plötuna",
            "Þrír míkar og gott herbergi slá út þrjátíu og tvö plugin",
            "Besti EQ-inn er útsetningin",
            "Þetta nær upp í ellefu",
            "Stereo er nýja mono",
            "Núna með meiri kúabjöllu",
            "Að setja í skjalasafn er ekki frestun. Það er ákvörðun"
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

let currentLocale = "en-gb";
let currentLocaleData = locales["en-gb"];
let currentGregisms = currentLocaleData.gregisms;
let gregismIndex = 0;

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

function applyLocale(localeKey) {
    currentLocale = locales[localeKey] ? localeKey : "en-gb";
    currentLocaleData = locales[currentLocale];
    currentGregisms = currentLocaleData.gregisms;
    gregismIndex = Math.floor(Math.random() * currentGregisms.length);

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

    updateDocsLinks(currentLocale);
    showGregism();
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
            gregismIndex = (gregismIndex + 1) % currentGregisms.length;
            showGregism();
            gregismEl.style.opacity = "1";
        }, 500);
    }, 6000);
}
