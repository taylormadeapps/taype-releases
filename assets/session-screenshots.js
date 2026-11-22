(() => {
    const shots = {
        mixer: ['mixer-narrow', 'mixer-inserts', 'mixer-eq', 'mixer-compressor', 'mixer-listen', 'mixer-hardware-insert', 'mixer-external-midi', 'mixer-tone3000'],
        arranger: ['arranger-wide', 'arranger-narrow', 'arranger-e-zoom', 'arranger-insert', 'arranger-midi', 'arranger-melodyne']
    };

    const labels = {
        'en-gb': [
            'Previous screenshot', 'Next screenshot',
            'Narrow strips fit the tracks, buses and FX returns together.',
            'Up to 8 plug-ins in the expanded rack, plus 8 direct sends per track.',
            'Pop-up EQ on every channel, with a live response graph.',
            'Pop-up compressor on every channel, with live gain reduction metering.',
            'The Listen Bus keeps monitoring inserts separate from the mix.',
            'Set send and return routes for outboard gear with a Hardware Insert.',
            'Choose a MIDI destination, channel and audio return with External MIDI Out.',
            'Browse TONE3000 captures from the mixer’s built-in Neural Amp Modeler.',
            'Song markers, a wide channel strip and two takes in the vocal comp.',
            'Zoom in on the verse crossfades and clip gain with the narrow strip.',
            'Fit the whole clip with E-Zoom. Tab to Transient jumps to the next hit.',
            'Edit a bass insert with the arrangement still visible.',
            'Edit the MIDI notes and re-render the Wurli audio clip.',
            'Open the vocal in Melodyne and keep the arrangement in view.'
        ],
        'ar': [
            'لقطة الشاشة السابقة', 'لقطة الشاشة التالية',
            'الشرائط الضيقة تجمع المسارات والحافلات وعوائد المؤثرات.',
            'حتى 8 إضافات في الرف الموسّع، مع 8 مسارات إرسال مباشرة لكل مسار.',
            'معادل منبثق في كل قناة، مع منحنى استجابة مباشر.',
            'ضاغط منبثق في كل قناة، مع قياس مباشر لخفض الكسب.',
            'تفصل حافلة الاستماع إضافات المراقبة عن المزيج.',
            'اضبط مساري الإرسال والعودة للأجهزة الخارجية باستخدام إدراج العتاد.',
            'اختر وجهة MIDI والقناة وعودة الصوت باستخدام External MIDI Out.',
            'تصفّح نماذج TONE3000 من خلال Neural Amp Modeler المدمج في كونسول المزج.',
            'علامات الأغنية وشريط عريض وتسجيلان لتجميع الصوت البشري.',
            'كبّر تداخلات المقطع وكسبه باستخدام الشريط الضيق.',
            'اعرض المقطع كاملاً باستخدام E-Zoom. اضغط Tab للانتقال إلى الضربة التالية.',
            'عدّل إضافة الباس بينما يظل التوزيع أمامك.',
            'عدّل نغمات MIDI وأعد تصيير مقطع Wurli الصوتي.',
            'افتح الصوت البشري في Melodyne مع إبقاء التوزيع ظاهراً.'
        ],
        'de-de': [
            'Vorheriges Bildschirmfoto', 'Nächstes Bildschirmfoto',
            'Schmale Kanalzüge zeigen Spuren, Busse und Effekt-Returns gemeinsam.',
            'Bis zu 8 Plug-ins im ausgeklappten Rack plus 8 direkte Sends pro Spur.',
            'Pop-up-EQ auf jedem Kanal mit Frequenzgang in Echtzeit.',
            'Pop-up-Kompressor auf jedem Kanal mit Echtzeitanzeige der Pegelreduktion.',
            'Der Listen Bus trennt Monitoring-Inserts vom Mix.',
            'Lege Send- und Return-Wege zu externem Equipment mit einem Hardware Insert fest.',
            'Wähle MIDI-Ziel, Kanal und Audiorückweg mit External MIDI Out.',
            'Durchstöbere TONE3000-Profile direkt im integrierten Neural Amp Modeler des Mixers.',
            'Songmarker, breiter Kanalzug und zwei Gesangs-Takes im Comp.',
            'Überblendungen und Clip-Gain im Vers mit schmalem Kanalzug.',
            'Zeige mit E-Zoom den ganzen Clip. Mit Tab springst du zum nächsten Anschlag.',
            'Bearbeite ein Bass-Insert bei sichtbarem Arrangement.',
            'Bearbeite die MIDI-Noten und rendere den Wurli-Audioclip neu.',
            'Öffne die Stimme in Melodyne und behalte das Arrangement im Blick.'
        ],
        'el-gr': [
            'Προηγούμενο στιγμιότυπο', 'Επόμενο στιγμιότυπο',
            'Στενές λωρίδες για κανάλια, διαύλους και επιστροφές εφέ στην ίδια προβολή.',
            'Έως 8 plug-in στο ανεπτυγμένο rack, συν 8 άμεσες αποστολές ανά κανάλι.',
            'Αναδυόμενο EQ σε κάθε κανάλι, με καμπύλη απόκρισης σε πραγματικό χρόνο.',
            'Αναδυόμενος συμπιεστής σε κάθε κανάλι, με ένδειξη μείωσης κέρδους σε πραγματικό χρόνο.',
            'Το Listen Bus κρατά τα ένθετα ακρόασης χωριστά από τη μίξη.',
            'Ρύθμισε την αποστολή και την επιστροφή προς εξωτερικό εξοπλισμό με ένα Hardware Insert.',
            'Επίλεξε προορισμό MIDI, κανάλι και επιστροφή ήχου με το External MIDI Out.',
            'Περιηγήσου στα μοντέλα του TONE3000 μέσα από το ενσωματωμένο Neural Amp Modeler της κονσόλας.',
            'Δείκτες τραγουδιού, φαρδιά λωρίδα και δύο λήψεις φωνής στο comp.',
            'Μεγέθυνε τις διασταυρούμενες εξασθενήσεις και το κέρδος κλιπ με τη στενή λωρίδα.',
            'Δες ολόκληρο το κλιπ με το E-Zoom. Με το Tab πηγαίνεις στην επόμενη ατάκα.',
            'Επεξεργάσου ένα ένθετο μπάσου με ορατή τη διασκευή.',
            'Επεξεργάσου τις νότες MIDI και απόδωσε ξανά το κλιπ ήχου του Wurli.',
            'Άνοιξε τη φωνή στο Melodyne με ορατή τη διασκευή.'
        ],
        'es-es': [
            'Captura anterior', 'Captura siguiente',
            'Las tiras estrechas reúnen pistas, buses y retornos de efectos.',
            'Hasta 8 plug-ins en el rack desplegado, más 8 envíos directos por pista.',
            'EQ en ventana emergente en cada canal, con curva de respuesta en tiempo real.',
            'Compresor en ventana emergente en cada canal, con medición de reducción de ganancia en tiempo real.',
            'El Listen Bus separa los insertos de escucha de la mezcla.',
            'Configura el envío y el retorno a equipos externos con un Hardware Insert.',
            'Elige el destino MIDI, el canal y el retorno de audio con External MIDI Out.',
            'Explora las capturas de TONE3000 desde el Neural Amp Modeler integrado en el mezclador.',
            'Marcadores, tira ancha y dos tomas en la compilación vocal.',
            'Acércate a los fundidos cruzados y la ganancia de clip con la tira estrecha.',
            'Ajusta la vista al clip completo con E-Zoom. Pulsa Tab para saltar al siguiente ataque.',
            'Edita un inserto de bajo sin perder de vista el arreglo.',
            'Edita las notas MIDI y vuelve a renderizar el clip de audio de Wurli.',
            'Abre la voz en Melodyne y mantén el arreglo a la vista.'
        ],
        'fr-fr': [
            'Capture précédente', 'Capture suivante',
            'Les tranches étroites réunissent pistes, bus et retours d’effets.',
            'Jusqu’à 8 plug-ins dans le rack déployé, plus 8 départs directs par piste.',
            'Une fenêtre d’EQ sur chaque voie, avec courbe de réponse en temps réel.',
            'Une fenêtre de compresseur sur chaque voie, avec mesure de la réduction de gain en temps réel.',
            'Le Listen Bus isole les inserts d’écoute du mixage.',
            'Règle l’envoi et le retour de ton matériel externe avec un Hardware Insert.',
            'Choisis la destination MIDI, le canal et le retour audio avec External MIDI Out.',
            'Parcours les captures TONE3000 depuis le Neural Amp Modeler intégré à la console.',
            'Marqueurs, tranche large et deux prises dans le comp vocal.',
            'Zoome sur les fondus enchaînés et le gain de clip avec la tranche étroite.',
            'Affiche le clip entier avec E-Zoom. La touche Tab saute à l’attaque suivante.',
            'Modifie un insert de basse en gardant l’arrangement visible.',
            'Édite les notes MIDI et recalcule le rendu du clip audio du Wurli.',
            'Ouvre la voix dans Melodyne tout en gardant l’arrangement visible.'
        ],
        'is-is': [
            'Fyrri skjámynd', 'Næsta skjámynd',
            'Mjóar rásir sýna spor, hóprásir og effektaskil saman.',
            'Allt að 8 viðbætur í útvíkkuðum rekka og 8 beinar sendingar á hvert spor.',
            'Sprettigluggi fyrir tónjafnara á hverri rás, með svörunarferli í rauntíma.',
            'Sprettigluggi fyrir þjöppu á hverri rás, með mælingu á mögnunarskerðingu í rauntíma.',
            'Listen Bus heldur hlustunarviðbótum aðskildum frá blöndunni.',
            'Stilltu sendi- og skilaleiðir fyrir ytri búnað með Hardware Insert.',
            'Veldu MIDI-viðtæki, rás og hljóðskil með External MIDI Out.',
            'Skoðaðu TONE3000-prófíla í Neural Amp Modeler sem er innbyggður í hljóðblandarann.',
            'Lagamerki, breið rás og tvær söngtökur í samsetningu.',
            'Skoðaðu víxlblöndun og styrk búta með mjórri rás.',
            'Sjáðu allan bútinn með E-Zoom. Ýttu á Tab til að stökkva á næsta högg.',
            'Breyttu bassaviðbót með útsetninguna enn á skjánum.',
            'Breyttu MIDI-nótunum og endurgerðu Wurli-hljóðbútinn.',
            'Opnaðu sönginn í Melodyne og hafðu útsetninguna sýnilega.'
        ],
        'it-it': [
            'Schermata precedente', 'Schermata successiva',
            'Le strip strette mostrano insieme tracce, bus e ritorni effetti.',
            'Fino a 8 plug-in nel rack espanso, più 8 mandate dirette per traccia.',
            'EQ a comparsa su ogni canale, con curva di risposta in tempo reale.',
            'Compressore a comparsa su ogni canale, con misurazione della riduzione di guadagno in tempo reale.',
            'Il Listen Bus separa gli insert di ascolto dal mix.',
            'Imposta mandata e ritorno per le apparecchiature esterne con un Hardware Insert.',
            'Scegli destinazione MIDI, canale e ritorno audio con External MIDI Out.',
            'Esplora le catture di TONE3000 dal Neural Amp Modeler integrato nel mixer.',
            'Marcatori, strip larga e due take nel comp vocale.',
            'Ingrandisci dissolvenze incrociate e guadagno delle clip con la strip stretta.',
            'Inquadra tutta la clip con E-Zoom. Premi Tab per passare al transiente successivo.',
            'Modifica un insert del basso con l’arrangiamento visibile.',
            'Modifica le note MIDI e renderizza di nuovo la clip audio del Wurli.',
            'Apri la voce in Melodyne mantenendo visibile l’arrangiamento.'
        ],
        'ja-jp': [
            '前のスクリーンショット', '次のスクリーンショット',
            '細いストリップでトラック、バス、FXリターンを一望。',
            '展開したラックに最大8つのプラグイン。各トラックに8系統のダイレクトセンド。',
            'すべてのチャンネルにポップアップEQとリアルタイムの周波数特性グラフ。',
            'すべてのチャンネルにポップアップコンプレッサーとリアルタイムのゲインリダクションメーター。',
            'Listen Busでモニター用インサートをミックスから分離。',
            'Hardware Insertでアウトボード機器へのセンドとリターンを設定。',
            'External MIDI OutでMIDIの送信先、チャンネル、オーディオリターンを選択。',
            'ミキサー内蔵の Neural Amp Modeler から TONE3000 のキャプチャーを検索。',
            '曲のマーカー、ワイドストリップ、ボーカルコンプの2テイク。',
            '細いストリップでクロスフェードとクリップゲインを拡大表示。',
            'E-Zoomでクリップ全体を表示。Tabキーで次のトランジェントに移動。',
            'アレンジを表示したままベースのインサートを編集。',
            'MIDIノートを編集して、Wurliのオーディオクリップを再レンダリング。',
            'アレンジを表示したままMelodyneでボーカルを開く。'
        ],
        'ko-kr': [
            '이전 스크린샷', '다음 스크린샷',
            '좁은 스트립으로 트랙, 버스, 이펙트 리턴을 한눈에.',
            '확장한 랙에 플러그인을 최대 8개까지, 트랙마다 다이렉트 센드 8개.',
            '모든 채널의 팝업 EQ에서 응답 그래프를 실시간으로 확인하세요.',
            '모든 채널의 팝업 컴프레서에서 게인 리덕션을 실시간으로 확인하세요.',
            'Listen Bus는 모니터링 인서트를 믹스와 분리합니다.',
            'Hardware Insert로 외장 장비의 센드와 리턴 경로를 설정하세요.',
            'External MIDI Out에서 MIDI 대상, 채널, 오디오 리턴을 선택하세요.',
            '믹서에 내장된 Neural Amp Modeler에서 TONE3000 캡처를 둘러보세요.',
            '곡 마커, 와이드 채널 스트립, 보컬 컴프의 두 테이크.',
            '좁은 스트립에서 크로스페이드와 클립 게인을 확대합니다.',
            'E-Zoom으로 클립 전체를 화면에 맞추고 Tab을 눌러 다음 트랜지언트로 이동하세요.',
            '편곡을 보면서 베이스 인서트를 편집하세요.',
            'MIDI 음표를 편집하고 Wurli 오디오 클립을 다시 렌더링하세요.',
            '편곡을 보면서 Melodyne에서 보컬을 여세요.'
        ],
        'nl-nl': [
            'Vorige schermafbeelding', 'Volgende schermafbeelding',
            'Smalle strips tonen sporen, bussen en effectreturns samen.',
            'Tot 8 plug-ins in het uitgeklapte rack, plus 8 directe sends per spoor.',
            'Pop-up-EQ op elk kanaal, met een live responscurve.',
            'Pop-upcompressor op elk kanaal, met live meting van gainreductie.',
            'De Listen Bus houdt afluister-inserts buiten de mix.',
            'Stel de send- en returnroutes voor externe apparatuur in met een Hardware Insert.',
            'Kies een MIDI-bestemming, kanaal en audioretour met External MIDI Out.',
            'Blader door TONE3000-captures via de ingebouwde Neural Amp Modeler van de mixer.',
            'Songmarkers, een brede strip en twee takes in de vocalcomp.',
            'Zoom in op crossfades en clipgain met de smalle strip.',
            'Breng de hele clip in beeld met E-Zoom. Druk op Tab om naar de volgende aanslag te springen.',
            'Bewerk een bas-insert terwijl het arrangement zichtbaar blijft.',
            'Bewerk de MIDI-noten en render de Wurli-audioclip opnieuw.',
            'Open de zang in Melodyne en houd het arrangement in beeld.'
        ],
        'pl-pl': [
            'Poprzedni zrzut ekranu', 'Następny zrzut ekranu',
            'Wąskie paski mieszczą ścieżki, szyny i powroty efektów.',
            'Do 8 wtyczek w rozwiniętym racku oraz 8 bezpośrednich wysyłek na ścieżkę.',
            'Korektor w wyskakującym oknie na każdym kanale, z krzywą odpowiedzi w czasie rzeczywistym.',
            'Kompresor w wyskakującym oknie na każdym kanale, z pomiarem redukcji wzmocnienia w czasie rzeczywistym.',
            'Listen Bus oddziela wtyczki odsłuchowe od miksu.',
            'Ustaw wysyłkę i powrót do sprzętu zewnętrznego za pomocą Hardware Insert.',
            'Wybierz cel MIDI, kanał i powrót audio za pomocą External MIDI Out.',
            'Przeglądaj profile TONE3000 we wbudowanym w mikser Neural Amp Modelerze.',
            'Znaczniki, szeroki pasek kanału i dwa ujęcia w kompozycji wokalu.',
            'Zbliżenie przenikań i wzmocnienia klipów przy wąskim pasku.',
            'Dopasuj cały klip do widoku za pomocą E-Zoom. Naciśnij Tab, aby przejść do następnego transjentu.',
            'Edytuj wtyczkę basu z aranżacją nadal na ekranie.',
            'Edytuj nuty MIDI i ponownie wyrenderuj klip audio Wurli.',
            'Otwórz wokal w Melodyne i zachowaj widok aranżacji.'
        ],
        'uk-ua': [
            'Попередній знімок', 'Наступний знімок',
            'Вузькі смуги вміщують доріжки, шини й повернення ефектів.',
            'До 8 плагінів у розгорнутій стійці та 8 прямих посилів на доріжку.',
            'Спливний еквалайзер на кожному каналі з кривою відгуку в реальному часі.',
            'Спливний компресор на кожному каналі з вимірюванням зниження підсилення в реальному часі.',
            'Listen Bus відокремлює плагіни моніторингу від міксу.',
            'Налаштуйте маршрути посилу й повернення для зовнішнього обладнання через Hardware Insert.',
            'Виберіть призначення MIDI, канал і повернення аудіо в External MIDI Out.',
            'Переглядайте профілі TONE3000 у Neural Amp Modeler, вбудованому в мікшер.',
            'Маркери пісні, широка смуга й два дублі у вокальному компі.',
            'Роздивіться перехресні затухання й підсилення кліпів із вузькою смугою.',
            'Покажіть увесь кліп за допомогою E-Zoom. Натисніть Tab, щоб перейти до наступного транзієнта.',
            'Редагуйте вставку баса, залишаючи аранжування на екрані.',
            'Відредагуйте ноти MIDI та повторно відрендерте аудіокліп Wurli.',
            'Відкрийте вокал у Melodyne та залиште аранжування видимим.'
        ],
        'zh-cn': [
            '上一张截图', '下一张截图',
            '窄通道条让轨道、总线和效果返回一目了然。',
            '展开插入机架后，每条轨道最多可用 8 个插件，另有 8 路直送。',
            '每个通道都有弹出式均衡器，可实时查看响应曲线。',
            '每个通道都有弹出式压缩器，可实时监测增益衰减。',
            '监听总线将监听插件与混音分开。',
            '使用 Hardware Insert 设置外置设备的发送和返回路径。',
            '使用 External MIDI Out 选择 MIDI 目的地、通道和音频返回。',
            '通过混音器内置的 Neural Amp Modeler 浏览 TONE3000 的采集模型。',
            '歌曲标记、宽通道条及人声合成轨中的两条录音。',
            '使用窄通道条，放大查看交叉淡化和片段增益。',
            '使用 E-Zoom 显示整个片段，按 Tab 跳到下一处瞬态。',
            '保留编排视图的同时编辑贝斯插入插件。',
            '编辑 MIDI 音符，然后重新渲染 Wurli 音频片段。',
            '在 Melodyne 中打开人声，同时保留编排视图。'
        ]
    };

    const locale = document.documentElement.dataset.siteLocale;
    const [previousLabel, nextLabel, ...captions] = labels[locale] || labels['en-gb'];
    const rtl = document.documentElement.dir === 'rtl';
    const lightbox = document.getElementById('screenshot-zoom');
    const zoomImage = lightbox?.querySelector('img');
    const zoomSource = lightbox?.querySelector('source');
    const root = '/assets/img/session-shots/';
    const sizes = '(max-width: 720px) calc(100vw - 4rem), 1000px';
    const widths = [640, 1000, 1280];

    document.querySelectorAll('[data-shot-carousel]').forEach(gallery => {
        const name = gallery.dataset.shotCarousel;
        const slides = shots[name];
        const slideCaptions = name === 'mixer' ? captions.slice(0, shots.mixer.length) : captions.slice(shots.mixer.length);
        const link = gallery.querySelector('[data-shot-open]');
        const caption = gallery.querySelector('[data-shot-caption]');
        const position = gallery.querySelector('[data-shot-position]');
        const controls = gallery.querySelector('[data-shot-controls]');
        const previous = controls.querySelector('[data-shot-step="-1"]');
        const next = controls.querySelector('[data-shot-step="1"]');
        let index = 0;

        previous.setAttribute('aria-label', previousLabel);
        next.setAttribute('aria-label', nextLabel);
        if (rtl) {
            previous.firstElementChild.textContent = '→';
            next.firstElementChild.textContent = '←';
        }

        function describe() {
            const description = slideCaptions[index];
            caption.textContent = description;
            position.textContent = `${index + 1} / ${slides.length}`;
            link.querySelector('img').alt = description;
        }

        function step(direction) {
            index = (index + direction + slides.length) % slides.length;
            const base = root + slides[index];
            const img = new Image(1600, 901);
            img.dataset.shotImage = '';
            img.decoding = 'async';
            img.sizes = sizes;
            img.srcset = widths.map(width => `${base}-${width}.webp ${width}w`).join(', ');
            img.src = base + '-1000.webp';
            link.href = base + '-1600.webp';
            link.replaceChildren(img);
            describe();
        }

        previous.addEventListener('click', () => step(-1));
        next.addEventListener('click', () => step(1));
        controls.addEventListener('keydown', event => {
            if (event.altKey || event.ctrlKey || event.metaKey) return;
            if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
            event.preventDefault();
            step((event.key === 'ArrowRight') !== rtl ? 1 : -1);
        });
        link.addEventListener('click', event => {
            if (!zoomImage || !lightbox.showModal || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
            event.preventDefault();
            zoomSource?.removeAttribute('srcset');
            zoomImage.alt = slideCaptions[index];
            zoomImage.src = link.href;
            lightbox.showModal();
        });

        describe();
        controls.hidden = false;
    });
})();
