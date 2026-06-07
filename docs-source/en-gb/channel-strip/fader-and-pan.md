# Fader and Pan

- **Fader** - 0 to +12 dB range. Drag vertically.
- **Pan** - full left to full right. Equal-power panning law so the centre doesn't sound louder than the sides.
- **Width** - shown on stereo strips only. Mono strips hide it because there is no stereo image to widen before pan.
- **ST / MONO** - switch a regular track's strip between stereo and mono processing.
- **INV** - flip polarity on the strip output.

The fader moves continuously through unity (0 dB). There is no sticky catch on
the centre line, so short automation rides and hand moves keep tracking exactly
with the pointer.

Hold **Shift** while dragging the fader, pan, or width control for a finer
4x trim pass.

Right-click the width knob or its readout to open the width split controls.
**OFF** keeps the width knob working across the full stereo image. **ABOVE**
applies the width move above the split frequency, and **BELOW** applies it
below the split frequency. The split frequency defaults to **150 Hz**. These
split controls are direct channel settings, not automation lanes.

The fader cap keeps the track colour so you can read the strip at a glance.

Mono strip mode sums stereo sources before the strip, runs the strip in mono, then turns the result back into dual-mono before pan. That means pan still behaves normally. Bus and master strips always stay stereo, so they do not show the `ST / MONO` switch.
