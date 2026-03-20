# EQ — 3-Band Parametric

A Neve-inspired 3-band parametric EQ. Each band has:

- **Frequency** — where the band is centred
- **Gain** — boost or cut, from -18 dB to +18 dB
- **Shelf/Bell toggle** — switches between a shelf curve and a bell (peaking) curve
- **Wide/Narrow toggle** — wider or tighter bandwidth

| Band | Default Frequency | Range |
|------|------------------|-------|
| Low | 220 Hz | 60 – 800 Hz |
| Mid | 1,200 Hz | 300 – 8,000 Hz |
| High | 3,200 Hz | 1,500 – 16,000 Hz |

Low and High default to shelf mode. Mid defaults to bell. Toggle to switch.

Bell bands now use proportional Q, so bigger boosts and cuts tighten up.

The EQ header's small spectrum button opens the shared floating **EQ
Visualiser** window for the current track with the live response curve,
small `IN` / `OUT` spectrum toggles in the graph's top-right corner, and
split `FILTER` / `EQ` control panels that mirror the strip's header power
toggles and EQ glyph buttons. The window title carries the track name, so the
graph itself stays uncluttered. Once open, that shared window follows
whichever track is currently selected.
