# EQ — 3-Band Parametric

A 3-band Neve-family parametric EQ. Low and High each have:

- **Frequency** — where the band is centred
- **Gain** — boost or cut, from -18 dB to +18 dB
- **Shelf/Bell toggle** — switches between a shelf curve and a bell (peaking) curve
- **Wide/Narrow toggle** — wider or tighter bandwidth

Mid keeps the same frequency, gain, and `HI-Q` contour control, but it stays a
bell in the supported UI path.

| Band | Default Frequency | Range |
|------|------------------|-------|
| Low | 220 Hz | 60 – 800 Hz |
| Mid | 1,200 Hz | 300 – 8,000 Hz |
| High | 3,200 Hz | 1,500 – 16,000 Hz |

Low and High default to shelf mode. Mid defaults to bell and stays that way.

Bell bands still use proportional Q, but the broad setting now starts a lot
wider and more flattering than the old pointy pass. Bigger moves still focus
up, cuts still run a touch tighter than boosts, and `HI-Q` gives you the
more pinched contour when you actually want it.

Shelf mode is no longer a dead generic ramp either. The `HI-Q` toggle and
gain amount now push the shelf contour harder, and that musical turnover
"nose" now starts showing from around `+6 dB` and leaning in more clearly
through the mid-gain range instead of only waking up near full boost.

The separate HP/LP filters are still 12 dB/oct curves, but the high-pass now
keeps a slightly more open shoulder without the old pinched turn-in, while the
low-pass stays gentler and more damped.

The EQ header's small spectrum button opens the shared floating **EQ
Visualiser** window for the current track. It has small `IN` and `OUT`
spectrum toggles overlaid in the graph's top-right corner, a little square
`+` / `-` zoom column tucked into the top-left dB gutter beside the scale
labels, plus a left `FILTER`
panel and right `EQ` panel underneath. Those panels use the same
section-header bypass switches and EQ glyph buttons as the channel strip,
with the live EQ response curve overlaid on top. The window title carries the
track name, so the graph itself stays uncluttered. Once that shared window is
open, it follows whichever track is currently selected, and clicking the same
lit EQ header button again closes it. The popup now
defaults to its tightest useful graph view with `+18 dB` pinned at the top
and `-18 dB` at the floor, and those zoom buttons move the floor in `3 dB`
steps while still letting you zoom all the way back out to `-72 dB`. The `FILTER` side now stacks `LO`
over `HI` in one centred column so those knobs line up with the EQ rows, and
the right-hand `EQ` panel now gives `IN` / `OUT` metering its own dedicated
inset well on the far right, using the same segmented K-scale / clip ladder
look as the main meters while showing signal into the EQ after the preamp and
out of the EQ before the compressor. Its parameter labels now take the
stronger panel-label treatment while the live values stay lighter.
Those popup gain knobs now keep the same sticky `0 dB` centre detent as the
strip, and double-clicking any of the three resets it straight back to zero.
The graph grid is also a touch stronger now, so the popup reads faster without
turning into graph paper.
In K-system views, that popup ladder keeps both the red `FS` ceiling tick and
the highlighted `0` reference line, and the graph's left dB scale now marks
that same `0 VU` reference so the popup grid tells the same truth as the
meter lane.
The `HI` filter knob's radial lamp now runs in reverse, so a lower low-pass
cutoff shows a fuller lit arc.
The analyser itself now reads more like a proper RTA too: it compensates the
window loss and draws log-band energy instead of skinny raw FFT bins, so
broadband material no longer hugs the graph floor for no good reason, and the
low end now blends across neighbouring bins instead of stepping like a crude
FFT readout. The popup now also smooths that trace in power rather than dB and
uses the higher-resolution FFT lane, so broadband material reads less blocky
and the graph stays truer as you zoom the floor out.
Popup help now covers the floating visualiser too, including the graph body,
`IN` / `OUT` toggles, zoom buttons, and the mirrored filter / EQ controls.
Right-click-dragging a bell handle in that popup solos the swept band while you
move it, and releasing keeps the newly swept centre frequency instead of
dropping the handle back on stale pre-solo coordinates.

Those popup `FILTER` and `EQ` headers also keep the same preset badge
language as the strip. Right-click either one to load or save a filter or
EQ preset without dropping back to the docked strip.
