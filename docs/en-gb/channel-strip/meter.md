# Meter

Stereo post-fader meter with an RMS body, a fast peak tick, a held peak trace,
and a clip indicator at the top. The scale can be shown as dBFS, K-12, K-14,
or K-20. If the clip indicator lights up, your signal is hitting 0 dBFS
somewhere on that track. If you have not picked a meter scale yet, TayPE
starts in `K-14`.

Bus strips use the same meter ballistics as ordinary tracks, so routed or
send-fed signal should move continuously instead of flashing down between
audio blocks.

In full-width `dBFS` view, the fader meter uses a console-style ladder:
`0`, `-3`, `-6`, `-9`, `-12`, `-15`, `-18`, `-21`, then `-36`, `-46`, and
`-60`. That keeps the working range open and compresses the dead tail below it.

The held-peak box now lives in the pan row, directly under the pan readout. It
shows the held post-fader peak in dB. If the clip latch trips, the box
switches to `CLIP` and stays there until you clear the meter lane or start a
fresh transport pass.

When the main post-fader peak clips, the live peak tick goes red only for a
short hold window, then drops back to its normal blue. The clip lamp and the
`CLIP` box stay latched until you clear the meter lane or kick off a fresh
playback/record pass.

The grouped `IN:` / `OUT:` mini meters in the preamp, compressor, and insert
sections now carry the same held peak line as the main post-fader meter. The
live peak tick falls with ballistics; the held line stays latched until a
higher hit replaces it or you clear the meter lane. Those little bars also run
wider now, with only a slim gutter to the panel edges instead of a fat dead
margin.
If one of those little meters clips, its live peak tick borrows the same short
red hold and then cools back out, while the underlying clip state still stays
latched until you clear the main meter lane or start a fresh transport pass.
The yellow zone now sits closer to the same bright brass family as the radial
knob lights, so it keeps its glow without drifting off into a dull mustard.
If the compressor or insert section is disabled or bypassed, the mini meters
stay there as dim wells so the layout does not jump about, but the live fill
and peak indicators go inactive until that section is back in circuit. The
preamp `IN:` / `OUT:` pair stays live in Clean mode, because it is still
showing the gain staging around the trim/preamp slot.

K-system scales keep the red `FS` ceiling marker, label the highlighted K
reference as `0`, add `+3 dB` marks above that `0 VU` line up toward
`0 dBFS`, keep those positive `+3 dB` steps spaced the same as the `0` to
`-21 dB` working ladder, then switch to `6 dB` marks below, with the ladder
spaced from the K reference instead of bunching the upper span. The moving
LED ladder and peak/hold ticks now snap to that same geometry too, so the
meter body matches the printed ruler.

Silent meters stay visually silent. The old floor tick that made a dead lane
look like it still had signal is gone.

Clicking the main meter clears the held peaks and the clip latch for every
meter tap on that track, not just the main post-fader display.

On the master strip, the La Forge button opens the master loudness view above
the faders. The LaForgé Limiter section has three top-row toggles: power,
LOW LATENCY/HIGH QUALITY, and SAFE PEAK/HOT PEAK. SAFE PEAK keeps the current
-1.0 dBTP true-peak guard. HOT PEAK uses a -0.5 dB digital peak guard while
still reporting true-peak stats honestly.
