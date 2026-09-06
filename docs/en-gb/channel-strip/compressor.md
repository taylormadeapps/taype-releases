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

## Visualiser and Meter

Open the compressor visualiser from the compressor section header. Its signal
history compares filled input and output envelopes on a shared dB scale.
Use the four ticked switches beneath the graph to choose what is visible:

- **IN:** input before compression, shown as a white fill when viewed alone.
- **OUT:** blue shading where output is higher than input, salmon pink where output
  is lower, measured after Makeup and the wet/dry blend.
- **DETECTOR:** green level driving compression after Bass Relief. It follows
  the selected mode: FET peak, VCA RMS, or OPTO's slower, quantised RMS.
- **GR:** red gain reduction actually applied by the compressor, read against
  the scale on the right.

With IN and OUT both on, the white input colour fills the area below both levels.
The coloured band between them shows the difference. The white/salmon boundary shows reduced
output; the top of the blue band shows increased output. Equal levels have no
difference band. IN alone shows the complete white input fill; OUT alone shows
the complete blue output fill. Detector and GR remain visible over the fills.

A shaded horizontal band
shows the soft-knee range around the threshold, matching the curve graph's knee
highlight. It follows the Threshold and Knee controls and disappears at zero knee.
The graph scrolls with the display
refresh and preserves captured peaks. DETECTOR adds no separate peak decay;
it shows the selected compressor's detector behaviour. Showing or hiding a
trace does not change the sound.

Visibility choices apply across tracks and are remembered in TayPE's global
settings, independently of the reel. All four traces start visible. The
Taype Comp VST3 has the same display and its own global visibility settings,
shared across its instances and independent of reels and plug-in presets.
Comp's OUT level is measured after Makeup, before the host's wet/dry blend.
Its switches stay synchronised between open editors even before audio plays.
If Comp cannot read its graph settings, it warns you and shows every trace with
the switches disabled, preserving the settings file. Repair the file named in
the warning, then close and reopen all Comp editors. A save failure also produces
a warning: your current choices still apply, but may be lost when the editors close.

## Log Release

Log-style release movement keeps compression recovery more musical at heavy settings. It is especially useful on buses and material with changing density.

## Default State

The master bus compressor starts enabled in a new default reel. Regular track compressors start bypassed until you choose to use them.
