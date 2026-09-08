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

## Soft Clipping

Use **clip** beneath the popup meters, between AG/PK and WET, to catch short
attack peaks after compression and before Makeup. The wide strip has the same
switch as a small curve glyph below the GR meter. Green means on.

Above 1:1, the clip curve follows a 1:1 tangent from Threshold into one smooth
knee. Low ratios give broad rounding; as ratio rises, the knee becomes sharper
and arrives earlier on the input axis, then holds flat.
The hard output ceiling starts from the nominal compression line at 0 dBFS
input, before Makeup, then adds up to 6 dB of headroom. That extra headroom
depends only on Ratio: from none at 1:1 to 6 dB at 20:1, with no Threshold
weighting. The resulting ceiling is capped at 0 dBFS. At 2:1, the lift is
just over 3 dB wherever that cap permits it. For example, at -60 dB and 20:1,
the original -57 dB ceiling becomes -51 dB; at -30 dB and 20:1, -28.5 dB
becomes -22.5 dB. The curve reaches its ceiling by full-scale input.
At 1:1, or whenever the ceiling reaches 0 dBFS, the clip stage passes audio
unchanged up to 0 dBFS and hard clips there. Compressor Knee is kept separate,
preserving the extra room of a soft compression knee. When clip is on, a faint
grey dotted line overlays the clip curve from Threshold upwards, above the
nominal compression line and ending above its full-scale endpoint by that
ratio-dependent headroom, limited by the 0 dBFS cap. The dots begin at Threshold, including where they overlap the solid
line. The solid line still shows compression alone; the OUT history and
meters show the processed audio.

With Clip on, a red dot maps the highest compressor input sample peak over
the preceding 0.5 seconds onto the dotted clipping curve. This uses the input
waveform before compression and Bass Relief. Its horizontal position stays
independent of Threshold and Ratio; its height follows the clipping curve.
The yellow dot follows the compressor detector. The red dot is hidden when
Clip is off. Both dots freeze with the captured history when audio stops.

Clip uses 4× oversampling while on, with its delay included in automatic PDC.
Turning clip off removes that extra delay. Compressor bypass and fully dry mix
stay aligned while clip is selected. Makeup can raise the clipped output level,
and mixing dry signal back in can restore peaks.

Clip defaults off on new tracks and when opening reels without a saved clip
setting. Reels and compressor section presets remember it. Taype Comp VST3
has the same Clip button, curve and oversampling, with automatic host latency
reporting. Clip also defaults off in new plug-in instances and older presets.
The plug-in also has its own **WET** knob beside Clip. Turn it down to blend
in the original signal after Makeup; double-click resets it to 100% wet.
The dry signal stays aligned when Clip is on. New instances and older presets
start fully wet, and plug-in presets and automation remember the mix.
OUT shows the signal after this internal blend. Any host insert mix is separate.

## Visualiser and Meter

The compressor section includes gain-reduction feedback so you can see when it is working. Use the meter as a guide, then trust the sound.

## Log Release

Log-style release movement keeps compression recovery more musical at heavy settings. It is especially useful on buses and material with changing density.

## Default State

The master bus compressor starts enabled in a new default reel. Regular track compressors start bypassed until you choose to use them.
