# Aan de slag

TayPE is gebouwd rond een eenvoudige lus: opnemen, luisteren, vastleggen. Geen eindeloze
menu's, geen verborgen functies. Hier ziet u hoe de basisworkflow op elkaar aansluit.

## De twee weergaven

TayPE heeft twee hoofdweergaven. Druk op **M** om tussen hen te schakelen.

**Tijdlijn** - waar u uw sporen, clips en de tapeheader ziet bewegen in de tijd. Dit is waar u opneemt, schikt en bewerkt.

**Mixer** - waar u het geluid vormt. Faders, EQ, compressie, plugin inserts. Één channel strip per spoor, van links naar rechts.

## Reels openen en maken

TayPE opent in de **Reel Browser**. Dit is de plaats om een bestaande reel te openen, in een recente in te springen of een nieuwe aan te maken.

If your startup path includes the welcome card, the green **Let's Roll**
button waits a second for the card to settle, then flashes three times at
3 Hz so the main path into the reel is obvious without turning startup into
a wizard. Under the performance advisor note, a left-aligned brass
**Full Plugin Automation in development** line sits between the same goat glyphs used by
the Founder badge.

If you open the **Reel Browser** straight from that welcome card, the fresh
startup reel stays loaded and shows as the current session while you decide
what to do next. If you branch into a different reel without touching it,
TayPE still moves that blank startup reel into **Scrap Pile** instead of
clogging the library with dead air.

The paired welcome logos sit in matched square tiles, and the tape mark now
gets its own square badge with extra background instead of being stretched to
fake the RAW block.

Gebruik **Openen uit bestand...** in de Reel Browser wanneer de reel of pack die u wilt buiten uw normale bibliotheek staat.

Klik met de rechtermuisknop op een reel in de browser om deze te **Hernoemen** of **Verwijderen**. TayPE vraagt om bevestiging voordat deze actie wordt uitgevoerd. Als die reel degene is waaraan u momenteel werkt, houdt hernoemen de sessie open onder de nieuwe bundelnaam en verwijdert deze de sessie voordat de bundel in `Scrap Pile` wordt verplaatst in uw Reels-map. Na verwijdering bevestigt TayPE de verplaatsing en biedt u **Weergeven in Finder** aan zodat u de verplaatste reel met die bundel geselecteerd kunt weergeven.

Wanneer een reel al open is, begint de browseractierij met **Media**, waarmee de `media/`-map van die reel in Finder wordt geopend zonder de browser te sluiten.

Tijdelijke bundels die uit systeemtempmappe worden geopend, worden niet in Recent bewaard, dus test- of uitpakwerk vervuilt uw normale reellijst niet.

Wanneer u een reel aanmaakt, opent TayPE een native opslaan dialoog in `[TAPE_HOME]/Reels` en stelt een bundelnaam voor zoals `Untitled Reel.taype`. U kunt in één stap zowel de locatie als de reelnaam wijzigen.

De werkingstatus wordt automatisch opgeslagen wanneer het transport is gestopt. Er is geen apart opslaancommando om te beheren. Druk op **Cmd+S** als u een benoemd checkpoint wilt maken: een bewuste lijn die u later kunt herstellen.

Wanneer u een frisse start wilt zonder de oude geschiedenis mee te slepen, gebruikt u **Thin Reel...** in de Reel Browser. TayPE vraagt waar u de verslonkerde bundel wilt plaatsen, voegt standaard `Thinned` toe aan de huidge naam en laat de bronreel ongewijzigd. Als u weinig opslag heeft, verwijdert u de oude reel in Finder nadat u de verslonkerde hebt gecontroleerd.

In de Reel Browser-geschiedenis is de standaard gefilterde weergave tag-gestuurd: huidge status, benoemde checkpoints en branch-origin-tags. Als u van een autosave vertakt, tagt TayPE die broncommit zodat deze zichtbaar blijft als branch-knooppunt. Eenvoudige autosave-headers blijven verborgen tot u **Show Autosaves** inschakelt voor het volledige save-for-save-spoor. De geschiedeniweergave is een doorlopende verticale git-stijl grafiek: vroegste aan de bovenkant, nieuwste onderaan, huidge branch als de hoofdspine en zijbranches naar rechts verschoven. Autosaves op dezelfde branch blijven in één rijstrook in plaats van met elke commit dieper te cascaderen. Gebruik **Focus** in de geschiedeniheader om de browser terug te zetten naar de huidge status na het verkennen van oudere commits en zijbranches.

## Opnemen

1. Selecteer een spoor door op de header in de tijdlijn te klikken.
2. Stel de ingang van het spoor in door op het ingangslabel te klikken (bijvoorbeeld "1-2" voor een stereopaar van uw audio-interface).
3. Prepareer het spoor voor opname door op de knop **R** te klikken of op de knop R in de spoorheader te drukken.
4. Druk op **Return** om op te nemen te starten. Druk opnieuw op **Return** om te stoppen.

Tijdens de opname ziet u een rode ghostclip die op het spoor groeit en aangeeft waar audio wordt vastgelegd. Wanneer u stopt, verschijnt de uiteindelijke clip met de golfvorm.

## Afspelen

- **P** - play / pause
- **Space** - afspelen / stoppen
- **Z** - stoppen en naar het begin terugkeren

Klik ergens in de tijdlijn (of op de liniaal bovenaan) om de tapeheader naar die positie te verplaatsen. Houd vast en sleep om te schrubben.

## Audio sample rate en resampling

Open **Voorkeuren** (**Cmd+,**) en ga naar het tabblad **Audio**.

- TayPE draait intern op **48 kHz**.
- Het tabblad Audio houdt de hardwareselectorrijen bovenaan via **Audio buffer grootte**. De apparaatstatus, resampling, NAM en besturingselementen voor **Audiowijzigingen toepassen** staan eronder.
- Gebruik **Audiowijzigingen toepassen** als u een expliciete commit wilt na het bewerken van audio-instellingen.
- Als **Resampling** **uit** staat, is het veld Sample rate alleen-lezen en toont het huidge tarief van uw interface.
- Met Resampling uit, probeert TayPE uw interface automatisch naar **48 kHz** om te schakelen.
- Als uw interface niet op 48 kHz staat terwijl Resampling uit is, vlaggen TayPE dit in het rood en vertelt u Resampling in te schakelen.
- Als **Resampling** **aan** staat, kunt u het sample rate van de interface wijzigen in de Audio-instellingen terwijl TayPE intern blijft verwerken op 48 kHz.
- **NAM AMX-versnelling** schakelt TayPE's shared-state NAM-versnellingspad in op Apple Silicon. Uit betekent dat A2-, WaveNet- en LSTM-modellen als onafhankelijke NAM-modellen per lane draaien.
- **True Summing** woont nu op het paneel **NAM Summing** van de masterstrip. Het blijft beschikbaar ongeacht **NAM AMX-versnelling**: met **SUM** aan gaan sporen die de master voeren door de gekozen summing-lane vóór de uiteindelijke stereosom.

## Bewerken

Bewerking gebeurt alleen wanneer het transport is gestopt. Dit is opzettelijk - TayPE houdt afspelen schoon en gescheiden van structurele wijzigingen.

- **Klik op een clip** om deze te selecteren
- **Sleep een clip** om deze te verplaatsen (horizontaal voor tijd, verticaal om sporen te veranderen)
- **Cmd+sleep** een clip om deze naar een nieuwe positie te kopiëren
- **S** - splits de geselecteerde clip op de tapeheader
- **Cmd+D** - dupliceer een clip achter elkaar
- **Cmd+X / Cmd+C / Cmd+V** - knippen, kopiëren, plakken

Sleep de randen van een clip om deze in te korten. Dit is niet-destructief - uw originele audio wordt nooit gewijzigd.

## Ongedaan maken en Opnieuw

- **Cmd+Z** - ongedaan maken
- **Cmd+Shift+Z** - opnieuw

Elke actie kan ongedaan worden gemaakt. Faderbewegingen, clip-bewerkingen, sporenwijd wijzigingen - alles.

## Licenties

Gebruik het menu **TayPE** applicatie om licentieverlening te openen:

- **Licentie nu** (wanneer niet geregistreerd)
- **Licentie** (wanneer geregistreerd)

## Over TayPE

Gebruik **TayPE > Over TayPE** om de exacte app-versie/build en de verzonden afhankelijkheidsversies en licenties te bekijken (JUCE, Signalsmith Stretch, NeuralAmpModelerCore en de systeem Git-runtime die voor reel-geschiedenis wordt gebruikt).

## Pop-up Help

Gebruik **Help -> Pop-up Help** of de schakelaar **?** uiterst rechts op de transportbalk om hover help in te schakelen over het transport, de tijdlijn, mixer en channel strip. Wanneer pop-up help is ingeschakeld, wordt de knop **?** groen verlicht. Nadat u de aanwijzer ongeveer **0,7 seconden** op een besturingselement rust, legt TayPE uit wat dat besturingselement doet.

## RTFM en Docs-zoeking

Gebruik **Help -> Read the Fine Manual** om de bijbehorende TayPE GitBook-taal in uw browser te openen als die vertaling bestaat. Als uw huidge app-locale nog geen gepubliceerde docsectie heeft, valt TayPE terug op Engels.

Gebruik op macOS het zoekveld bovenaan het menu **Help** om de documenten door te zoeken. Druk op Return daar, of klik op de zoekknop, opent die zoeking in de bijbehorende docs-taal in uw browser in plaats van Apple Help-zoeking aan te roepen. Als die locale geen GitBook-sectie heeft, valt de zoeking terug op Engels.

**Help -> TayPE Docs zoeken...** blijft op elk platform beschikbaar als de expliciete fallback voor doczeking.

## App-taal

Gebruik **Help -> Taal** om de app-taal te kiezen die TayPE bij de volgende lancering moet gebruiken. TayPE schrijft de selectie onmiddellijk naar uw gebruikersinstellingen, geeft een bevestigingsmodaal in de nieuw geselecteerde taal en vraagt u opnieuw op te starten zodat de hele interface het netjes oppikt.

Het menu toont alleen taalbestanden die daadwerkelijk aanwezig en geldig zijn in uw TayPE-taalmap, zodat aangepaste of lopende taalpakketten kunnen worden getest zonder de app-build te veranderen.

De huidge alpha-bundel wordt geleverd met **English (UK)** plus concept **America English**, **Français**, **Deutsch**, **Español**, **Íslenska**, **Esperanto** en **日本語** app packs. Als u geldige taal-CSV-bestanden in uw TayPE-taalmap toevoegt of verwijdert, wordt dat menu bijgewerkt zodat het overeenkomt met wat daadwerkelijk is geïnstalleerd.

## Guild Picks

Gebruik **Tools -> Guild Picks** voor een kleine curated lijst met plug-ins die we beoordelen voor het maken van records.

Guild Picks bevat deze disclaimer:

**Geen vervangingen. Geen terugbetaling. Gewoon plug-ins die we echt waarderen voor het maken van records.**

De lijst is ingedeeld in **Gratis**, **Ereware**, **Betaalde Sleepers** en **Betaalde Premium**, en elk item opent de officiële verkopersmapagina in uw browser.

## Spoorstatussen

TayPE heeft drie manieren om over sporen na te denken:

**Hudig** - de standaard. Dit zijn uw actieve, levende sporen. Wat u hoort tijdens afspelen.

**Focus** - druk op **F** om de tijdlijn te filteren tot alleen de sporen die audio hebben op de huidge tapeheader-positie. Met lus uit volgt Focus handmatige afspeelkopbewegingen plus transport afspelen/opnemen in realtime. Record-armed en gemonitorde sporen blijven zichtbaar, maar het selecteren van een spoor buiten het clip-venster houdt het niet in Focus.

**Archief** - druk op **X** om de archief-weergave in/uit te schakelen. Gearchiveerde sporen zijn volledig stil - geen afspelen, geen verwerking, geen CPU. Archief is niet "dempen" of "verbergen" - het is een spoor in de kast opbergen. U kunt het eruit halen wanneer u het nodig hebt.

**Automatisering** - druk op **A** om de automatiseringweergave in/uit te schakelen. Dit schakelt de tijdlijn over naar het bewerken van breekpunten voor de geselecteerde automatiseringsparameter terwijl de clips zichtbaar blijven eronder.

## Stems en Buses

Sporen kunnen als buses worden aangewezen met behulp van de knop **B** in de spoorheader. Een bus-spoor sommeert audio van alle sporen die erin zijn gerouteerd, zodat u submixen kunt maken (drums bus, vocal bus, enz.).

Route een spoor naar een bus door op het label van de uitgang te klikken en de bus uit de lijst te selecteren.

Druk op **G** (Spill) om alleen de geselecteerde bus en alle sporen die ernaar zijn gerouteerd te zien - handig voor het concentreren op een submix.

## Volgende stap

- Leer de [Tijdlijn](timeline/README.md) in detail
- Verken de [Mixer](mixer.md) en [Channel Strip](channel-strip/README.md)
- Zie alle [Sneltoetsen](keyboard-shortcuts.md)
