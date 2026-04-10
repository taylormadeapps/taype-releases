# Fader and Pan

- **Fader** — 0 to +12 dB range. Drag vertically.
- **Pan** — full left to full right. Equal-power panning law so the centre doesn't sound louder than the sides.
- **Width** — shown on stereo strips only. Mono strips hide it because there is no stereo image to widen before pan.
- **ST / MONO** — switch a regular track's strip between stereo and mono processing.
- **INV** — flip polarity on the strip output.

The fader moves continuously through unity (0 dB). There is no sticky catch on
the centre line, so short automation rides and hand moves keep tracking exactly
with the pointer.

The printed ruler beside the fader is grouped for readability rather than
trying to show every quiet-tail step. At the normal dock height it shows
`+12`, `+9`, `+6`, `+3`, `0`, `-3`, `-6`, `-9`, `-12`, `-18`, `-24`, `-36`,
`-48`, and `-60`, then a separate `-inf` mute mark below the throw. If you
shrink the fader dock far enough, TayPE drops the `-60` label before the tail
ticks start bunching up.

That `-60` mark sits one full ladder step above the mute stop. Dragging to the
very bottom still gives `-inf`.

While you drag, the fader thumb keeps moving live with your hand. TayPE does
not wait for playback or another screen refresh before showing the new
position.

The fader cap keeps the track colour so you can read the strip at a glance.

Mono strip mode sums stereo sources before the strip, runs the strip in mono, then turns the result back into dual-mono before pan. That means pan still behaves normally. Bus and master strips always stay stereo, so they do not show the `ST / MONO` switch.
