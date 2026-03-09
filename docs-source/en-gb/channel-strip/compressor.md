# Compressor

A dynamics processor for controlling level and adding punch.

| Parameter | Default | Range |
|-----------|---------|-------|
| Threshold | -20 dB | -60 to 0 dB |
| Ratio | 4:1 | 1:1 to 20:1 |
| Makeup Gain | 0 dB | 0 to 24 dB |
| Attack | 10 ms | 0.1 to 100 ms |
| Release | 100 ms | 10 to 2,000 ms |
| Knee | 6 dB | 0 to 12 dB |
| Sidechain low-cut | Off | fixed 80 Hz |

## Layout

The top row shows **Threshold**, **Ratio**, and **Makeup**. The second row shows **Knee**, **Attack**, and **Release**.

Between the lower-row knobs and the gain-reduction meter sits a vertical button stack: the upper button enables a fixed **80 Hz** sidechain low-cut, and the lower button is **LOG** release.

The attack knob starts at **0.1 ms**. The fast end of the dial covers **0.1–1.0 ms** in 0.1 ms steps, then **1–100 ms** in 1 ms steps.

## Gain Reduction Meter

The GR display is a vertical top-down bar with a tick scale beside it. No fill means 0 dB GR; a full bar means 48 dB GR. The meter follows the live compressor reduction value directly.

## Log Release

Enabled by default. When the compressor is working harder, the release time stretches automatically.

This gives a more musical, breathing feel — the compressor recovers faster on gentle compression and slower on heavy hits, which prevents pumping on big transients. Turn it off for strict, clinical compression.
