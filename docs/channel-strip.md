# Channel Strip

Every track in TayPE has a built-in channel strip with processing that
runs before any plugin inserts hit the fader. The signal flows through
each stage in order:

**Input - Trim - Preamp - Inserts - Filters - EQ - Compressor - Fader - Pan - Output**

Each section can be enabled or bypassed independently.

## Trim

Clean gain control, from -36 dB to +12 dB. Always active. Use this to
get your input level right before any processing.

## Preamp

A soft-clipping drive stage for adding warmth and saturation. Disabled
by default.

- **Drive** - how hard you push the signal into the clipper. Higher values
  mean more saturation and harmonic content.
- **Safe mode** - engages oversampling for cleaner saturation at the
  expense of a bit more CPU. Use it on tracks where the drive is working
  hard and you want to keep things smooth.
- **Auto-gain** - compensates for volume changes from the drive so you
  can compare the tone without being fooled by loudness differences.

## Filters (HP/LP)

High-pass and low-pass filters for cleaning up the extremes. These have
their own bypass toggle, separate from the EQ.

| Filter | Default | Range |
|--------|---------|-------|
| High-pass | 30 Hz | 20 - 1,000 Hz |
| Low-pass | 18,000 Hz | 2,000 - 20,000 Hz |

The high-pass is your rumble killer. The low-pass tames harshness up top.
Both are smooth second-order curves.

## EQ - 3-Band Parametric

A Neve-inspired 3-band parametric EQ. Each band has:

- **Frequency** - where the band is centred
- **Gain** - boost or cut, from -18 dB to +18 dB
- **Shelf/Bell toggle** - switches between a shelf curve and a bell
  (peaking) curve
- **Wide/Narrow toggle** - wider or tighter bandwidth

| Band | Default Frequency | Range |
|------|------------------|-------|
| Low | 220 Hz | 60 - 800 Hz |
| Mid | 1,200 Hz | 300 - 8,000 Hz |
| High | 3,200 Hz | 1,500 - 16,000 Hz |

Low and High default to shelf mode. Mid defaults to bell. Toggle to
switch.

## Compressor

A dynamics processor for controlling level and adding punch.

| Parameter | Default | Range |
|-----------|---------|-------|
| Threshold | -20 dB | -60 to 0 dB |
| Ratio | 4:1 | 1:1 to 20:1 |
| Attack | 10 ms | 0.02 to 100 ms |
| Release | 100 ms | 10 to 2,000 ms |
| Knee | 6 dB | 0 to 12 dB |
| Makeup Gain | 0 dB | 0 to 24 dB |

### Log Release

Enabled by default. When the compressor is working harder (deeper gain
reduction), the release time stretches automatically. This gives a more
musical, breathing feel - the compressor recovers faster on gentle
compression and slower on heavy hits, which prevents pumping on big
transients. Turn it off if you want strict, clinical compression.

## Insert Slots

Four serial plugin slots for VST3 plugins. Click an empty slot to load
a plugin from the scanner. Right-click a loaded slot for bypass, remove,
or to open the plugin editor window.

Plugins run in a sandboxed process - if a plugin crashes, TayPE keeps
running. The slot shows an error state and you can reload or remove it.

## Tape Summing (Master Bus Only)

The master bus channel strip has a Tape section above the insert slots.
When enabled, Softube Multitrack Tape replaces the digital master bus sum —
each track feeds a dedicated tape channel, and the plugin performs per-channel
saturation, inter-channel crosstalk, and head bump before outputting a stereo
mix into the master strip.

- Click the Tape button to enable or disable. Requires transport to be stopped.
- Right-click opens the Softube Tape plugin editor window.
- If Softube Multitrack Tape is not installed, the button shows "Not installed".
- Non-master tracks show a small "+" indicator next to their name when tape
  summing is active, confirming they are being routed through tape.

When tape is disabled, the master bus uses standard digital summing with zero
CPU overhead.

## Fader and Pan

- **Fader** - 0 to +12 dB range. Drag vertically.
- **Pan** - full left to full right. Equal-power panning law so the
  centre doesn't sound louder than the sides.

## Meter

Stereo peak meter with a clip indicator at the top. If the clip indicator
lights up, your signal is hitting 0 dBFS. Back off the fader or trim.
