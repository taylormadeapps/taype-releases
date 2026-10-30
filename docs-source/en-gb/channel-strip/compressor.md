# Compressor

The compressor controls dynamics after EQ and before inserts.

## Controls

Use Threshold and Ratio for the amount of compression, Attack and Release for movement, and Makeup for level matching. The compact mixer strip shows the essential controls; the wider strip shows more detail.

In the wide strip, **AG** listens for 3 seconds and adjusts Makeup so the
compressor output matches its input. Use the neighbouring **PK/RMS** button to
choose peak or RMS measurement. The compressor does not add a separate Trim
control because Makeup is already its output gain control. These buttons stay
out of the compact strip.

Attack gives the fast 0.1–1 ms range a dedicated third of the knob travel, in
0.1 ms steps. The remaining travel covers 1–100 ms in whole-millisecond steps.
Small drag movements accumulate between steps, including when moving away from
the minimum, and the strip and compressor popup use the same response.

## Sidechain

**SIDE-CHAIN** sits immediately left of compressor power in the popup and in
Taype Comp. It opens a panel; it does not bypass the detector. The button is
yellow while an external source is selected.

The panel shows the detector after Low Cut, Tilt, High Cut and Gain, with the
current Threshold drawn across it. **Bass Relief** in the strip, popup and
Taype Comp body remains the Low Cut on/off control. The panel sets cutoff
frequency (20 Hz–10 kHz, stored default 80 Hz). High Cut reaches 30 Hz for
sub-only keying and is a hard bypass at 20 kHz. Tilt is ±3 dB/octave around
600 Hz: turning it up lowers the threshold line at the high end, so highs
trigger earlier. Gain is ±24 dB on the detector only.

On the stock compressor, choose **Internal** (this track after EQ) or another
regular track. Buses and master are not sources. The selected track is keyed
from its raw input, before trim, EQ, compressor, inserts and fader. Routing
belongs to the reel, not to compressor presets.

Archived tracks are never offered as a source. If the selected source is
archived later, it stays selected and reads, for example, **Kick (archived)**,
but it keys nothing: the compressor sees silence and does no gain reduction
until you unarchive the source. A track routed into an archived bus is still
live and still keys.

In Taype Comp, the panel chooses **Internal** (the signal it is
compressing) or **External** (its sidechain input), in TayPE and in other
DAWs. Route the external signal with TayPE's plugin chrome, or with the
host's own sidechain controls outside TayPE. A new Taype Comp starts on
Internal; one saved before this choice existed opens on External, as it
worked then. The button is yellow while External is selected and the host
feeds the sidechain input.

## Soft Clipping

Use **CLIP**, the bottom switch in the popup's button stack under Release Mode,
to catch short attack peaks after compression and before Makeup. It shows
**OFF** or **ON**, and turns green when on. The wide strip has the same switch
as a small curve glyph below the GR meter, green when on.

**HEADROOM** (Clip Headroom), the last knob in the row beside clip, gives the clip
more room: it raises the ceiling by up to 24 dB, never past 0 dBFS. At 0 dB
clipping sounds exactly as before. As the ceiling nears 0 dBFS the bend gets
firmer, and once it reaches 0 dBFS the readout says **max** and clip simply stops
peaks at full scale. The knob works while clip is on; with clip off it dims and
keeps its setting. Reels, compressor presets, automation and Taype Comp remember
it.

Above 1:1, the clip curve follows a 1:1 tangent from Threshold into one smooth
knee. Low ratios give broad rounding; as ratio rises, the knee becomes sharper
and arrives earlier on the input axis, then holds flat.
The hard output ceiling starts from the nominal compression line at 0 dBFS
input, before Makeup, then adds up to 6 dB of headroom. That extra headroom
depends only on Ratio: from none at 1:1 to 6 dB at 20:1, with no Threshold
weighting. The resulting ceiling is capped at 0 dBFS. At 2:1, the lift is
just over 3 dB wherever that cap permits it. For example, at -60 dB and 20:1,
the original -57 dB ceiling becomes -51 dB; at -30 dB and 20:1, -28.5 dB
becomes -22.5 dB. Clip Headroom then adds its own dB on top. The curve
reaches its ceiling by full-scale input.
At 1:1, or whenever the ceiling reaches 0 dBFS, the clip stage passes audio
unchanged up to 0 dBFS and hard clips there. Compressor Knee is kept separate,
preserving the extra room of a soft compression knee. When clip is on, a faint
grey dotted line overlays the clip curve from Threshold upwards, above the
nominal compression line and ending above its full-scale endpoint by that
ratio-dependent headroom, limited by the 0 dBFS cap. The dots begin at Threshold, including where they overlap the solid
line. The solid line still shows compression alone; the OUT history and
meters show the processed audio. While Clip is actually rounding or stopping
peaks, the dotted line lights up brighter and thicker, then fades about half a
second after the clipping stops.

The curve graph has two peak markers on its diagonal 1:1 line. The green hollow
**PRE** ring shows the highest compressor-input sample peak from the preceding
0.5 seconds. The red filled **POST** diamond shows the peak immediately after
gain reduction, before Clip, Makeup and WET. Their separation is the peak level
removed by compression. The labelled ring and diamond keep the markers clear
without relying on colour, and the diamond remains visible inside the ring when
they coincide. Both markers stay visible with Clip on or off and freeze with the
captured history when audio stops.

The yellow dot remains on the compression curve and follows the compressor's
detector. The title key groups the two level markers under **PEAK** as **PRE**
and **POST**, and labels the yellow detector dot **DETECT**.

Clip uses 4× oversampling while on, with its delay included in automatic PDC.
Turning clip off removes that extra delay. Compressor bypass and fully dry mix
stay aligned while clip is selected. Makeup can raise the clipped output level,
and mixing dry signal back in can restore peaks.

Clip defaults off on new tracks and when opening reels without a saved clip
setting. Reels and compressor section presets remember it. Taype Comp VST3
has the same Clip button, curve and oversampling, with automatic host latency
reporting. Clip also defaults off in new plug-in instances and older presets.
The plug-in also has its own **WET** knob under the meters, beside AG/PK. Turn it down to blend
in the original signal after Makeup; double-click resets it to 100% wet.
The dry signal stays aligned when Clip is on. New instances and older presets
start fully wet, and plug-in presets and automation remember the mix.
OUT shows the signal after this internal blend. Any host insert mix is separate.

## Gate

The compressor section has a gate in front of the compressor, for cutting
spill and noise between notes. Open it from the **GATE** row under the
compressor controls in the visualiser, or in Taype Comp. Click the title to
show or hide the controls; that only changes the view, and the gate keeps
working either way. TayPE remembers whether the controls are shown.

The gate's power button sits at the right of its row, so you can see whether it
is on with the controls hidden. The controls sit at the right of their panel:
**EXPANDER** and **FAST ATTACK** line up with the compressor's buttons, with
the knobs beside them. Each of those two buttons shows **OFF** or **ON**. It is separate from the compressor's power: the
gate also works with the compressor off.

- **Threshold** (-80 to 0 dBFS): the gate opens when the signal reaches this
  level and closes the Hysteresis amount below it, staying open for at least
  20 ms.
- **Hysteresis** (0 to 12 dB, default 4): how far below the threshold the
  signal must fall before the gate closes, so a level hovering near the
  threshold does not make it chatter. The expander does not use it, so the
  knob dims while EXPANDER is on.
- **Range** (0 to 40 dB): how far the gate turns the signal down when it
  is closed. Turn it down to reduce spill without silencing it.
- **Release** (100 ms to 4 s): how quickly the gate closes after the signal
  falls below the threshold.
- **EXPANDER**: a gentler 2:1 downward expander instead of the gate. Each
  dB below the threshold is turned down one more dB, until Range is reached.
- **FAST ATTACK**: the gate opens in 0.1 ms instead of 1.5 ms, to keep
  sharp attacks.

The gate listens to its own input, the signal after EQ. The compressor IN
meters read before the gate, so you can set the threshold against what the
gate hears. The compressor, its detector and the WET dry signal all come after
the gate, so turning WET down never lets spill back in. After you stop or
jump on a track that is not being monitored, the gate starts closed, so spill
does not leak into the next play.

The curve graph draws the gate's shape below its threshold in green: a straight
drop for the gate, or a steeper slope for EXP, then a line running parallel to
the diagonal. A small square marks the gate threshold, and a green vertical
line marks where the gate opens; for the gate (not EXP) a shaded band below it
shows the Hysteresis it stays open for before closing. The legend's green **GATE**
key names it all. Where the shape goes
below the bottom of the graph, a small arrow shows that it continues. The
**GATE** meter next to GR reads like an SSL's: it is full and green while the
gate is open and drains from the top as the gate turns the signal down, empty
at 40 dB. A dim outline means the gate is off. The wide mixer strip shows the
same green gate bar next to its yellow GR bar. While the gate is on, the signal
history shows its threshold as a green horizontal line with the same shaded
band. The gate's curve, lines and GATE GR trace show only while the gate is
on.

Reels, compressor presets and automation (lanes **Gate · Threshold** and so on)
remember the gate. Older reels and presets open with the gate off, so they
sound as before. Taype Comp has the same gate, with host automation; older
plug-in presets load with it off.

## Visualiser and Meter

Open the compressor visualiser from the compressor section header. Its signal
history compares filled input and output envelopes on a shared dB scale.
Use the five ticked switches beneath the graph to choose what is visible:

- **IN:** input before compression, shown as a white fill when viewed alone.
- **OUT:** blue output with a thin blue line along its top edge, measured after
  Makeup and the wet/dry blend. With IN visible, only output above input is
  translucent; overlapping output is denser blue. Input above output stays grey.
- **DETECTOR:** green level driving compression after Bass Relief. It follows
  the selected mode: FET peak, VCA RMS, or OPTO's slower, quantised RMS.
- **GR:** red gain reduction actually applied by the compressor, read against
  the scale on the right.
- **GATE GR:** a dashed green line showing how far the gate is turning the
  signal down, on its own 0 to 40 dB scale beside the GR scale.

With IN and OUT both on, grey input is drawn first and blue output is drawn
over it. Transparency applies only to output above input; output overlapping
input is denser blue, and input above output stays grey. There is no separate
difference shading. The thin blue output line stays visible over the fills.
IN alone shows the complete neutral input fill; OUT alone shows
the complete blue output fill. Detector and GR remain visible over the fills.

A shaded horizontal band
shows the soft-knee range around the threshold, matching the curve graph's knee
highlight. It follows the Threshold and Knee controls and disappears at zero knee.
The graph scrolls with the display
refresh and preserves captured peaks. DETECTOR adds no separate peak decay;
it shows the selected compressor's detector behaviour. Showing or hiding a
trace does not change the sound.
The open visualiser continues receiving signal history when preamp modes or
other settings rebuild the audio graph; it does not need reopening.

Visibility choices apply across tracks and are remembered in TayPE's global
settings, independently of the reel. All five traces start visible. The
Taype Comp VST3 has the same five traces and its own global visibility settings,
shared across its instances and independent of reels and plug-in presets.
Comp's OUT level is measured after Makeup and its WET blend, before the host insert mix.
Its switches stay synchronised between open editors even before audio plays.
If Comp cannot read its graph settings, it warns you and shows every trace with
the switches disabled, preserving the settings file. Repair the file named in
the warning, then close and reopen all Comp editors. A save failure also produces
a warning: your current choices still apply, but may be lost when the editors close.

## Log Release

Log-style release movement keeps compression recovery more musical at heavy settings. It is especially useful on buses and material with changing density.

## Default State

The master bus compressor starts enabled in a new default reel. Regular track compressors start bypassed until you choose to use them.
