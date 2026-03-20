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

Bell bands now use proportional Q. Small boosts and cuts stay broad; bigger
moves tighten up. Cuts also run a touch tighter than boosts at the same
amount.

The EQ header's small spectrum button opens the shared floating **EQ
Visualiser** window for the current track. It has small `IN` and `OUT`
spectrum toggles overlaid in the graph's top-right corner, both on by
default, plus a left `FILTER` panel and right `EQ` panel underneath. Those
panels use the same section-header bypass
switches and EQ glyph buttons as the channel strip, with the live EQ response
curve overlaid on top. The window title carries the track name, so the graph
itself stays uncluttered. Once that shared window is open, it follows
whichever track is currently selected.
