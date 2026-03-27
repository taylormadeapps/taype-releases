# Fader and Pan

- **Fader** — 0 to +12 dB range. Drag vertically.
- **Pan** — full left to full right. Equal-power panning law so the centre doesn't sound louder than the sides.
- **ST / MONO** — switch a regular track's strip between stereo and mono processing.
- **INV** — flip polarity on the strip output.

The fader has a detent at unity (0 dB) that snaps forgivingly. Drag to just above or below the line and TayPE drops it onto exact unity, then lets go again as soon as you keep moving.

While you drag, the fader thumb keeps moving live with your hand. TayPE does
not wait for playback or another screen refresh before showing the new
position.

The fader cap keeps the track colour so you can read the strip at a glance.

Mono strip mode sums stereo sources before the strip, runs the strip in mono, then turns the result back into stereo before pan. That means pan still behaves normally. Bus and master strips always stay stereo, so they do not show the `ST / MONO` switch.
