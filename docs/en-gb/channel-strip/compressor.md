# Compressor

A dynamics processor for controlling level and adding punch.

| Parameter | Default | Range |
|-----------|---------|-------|
| Threshold | -20 dB | -60 to 0 dB |
| Ratio | 4:1 | 1:1 to 20:1 |
| Makeup Gain | 0 dB | 0 to 24 dB |
| Attack | 10 ms | 0.1 to 100 ms |
| Release | 100 ms | 10 to 2,000 ms |
| Knee | 6 dB | 0 to 120 dB |
| Sidechain low-cut | Off | fixed 80 Hz |

## Layout

The top row shows **Threshold**, **Ratio**, and **Makeup**. The second row shows **Knee**, **Attack**, and **Release**.

Between the lower-row knobs and the gain-reduction meter sits a vertical button stack: the top row is labelled **DETECTOR**, and its button cycles through **FET**, **VCA**, and **OPTO**. **VCA** is the default. The detector button is colour-coded too: **FET** shows red, **VCA** blue, and **OPTO** green, all with white text. The middle row enables a fixed **80 Hz** sidechain low-cut, and the lower button is **LOG** release.

The attack knob starts at **0.1 ms**. The fast end of the dial covers **0.1–1.0 ms** in 0.1 ms steps, then **1–100 ms** in 1 ms steps.

## Compressor Visualiser

The compressor header now includes the same small spectrum visualiser button used on the filter and EQ headers, tucked immediately to the left of the section power glyph. Click it to open a floating compressor window for the current track, and click the same lit button again to close it.

The window puts the incoming waveform and scrolling gain-reduction trace on the left under a **GAIN REDUCTION** title, the transfer curve in the middle under **CURVE**, and fader-style LED **IN** / **OUT** meters on the right after the curve for gain staging. That same meter lane now carries a slim dedicated **GR** bar beside the ladders, using the same top-down **0-24 dB** reduction scale as the strip. Those meter captions sit across the top of the lane, and the ladders use the same glowing segmented treatment, K-scale marks, and clip behaviour as the strip meter.
That scrolling lane now keeps the same full-history density from the moment audio starts, so it no longer begins stretched out and then compresses as the history buffer fills.
The graph and transfer-curve grids are also a touch stronger now, so the popup
stays readable at a glance without turning into graph paper.
In K-system views, that popup ladder now keeps both the red `FS` ceiling tick
and the highlighted `0` reference line instead of dropping the K reference.

The bottom control area now has its own **COMPRESSOR** section header with the strip-style power glyph on the far right, so enable / disable stays implicit in the same visual language as the channel strip. Under that header, the six knobs now follow the EQ popup's tighter spacing: names above the knobs, live values tucked in close underneath, less dead air above and below the control lane, and a stronger label / lighter value text hierarchy. The far-right stack keeps **DETECTOR**, **BASS RELIEF**, and **LOG RELEASE** beside the exact same small compressor buttons used in the strip, with the detector button text cycling through **FET**, **VCA**, and **OPTO** and carrying the same red / blue / green mode colours.

That popup **COMPRESSOR** header also carries the same preset badge
language as the strip. Right-click it to load or save a compressor preset
directly from the floating window. The popup shell and section plates also
carry a visible wash of the source track colour.

The compressor popup now behaves like the EQ popup: there is one shared floating window, and while it is open it follows the currently selected track. The header button stays lit on whichever track the shared window is currently targeting, and that lit button is also the close toggle for the popup.
Popup help now covers that floating window too, including the visualiser body,
the mirrored knob set, and the detector / sidechain / release switches.

## Gain Reduction Meter

The GR display is a vertical top-down bar with a tick scale beside it. No fill means 0 dB GR; a full bar means 24 dB GR. The strip and compressor popup use the same scale and follow the live compressor reduction value directly.

## Log Release

Enabled by default. When the compressor is working harder, the release time stretches automatically.

This gives a more musical, breathing feel — the compressor recovers faster on gentle compression and slower on heavy hits, which prevents pumping on big transients. Turn it off for strict, clinical compression.
