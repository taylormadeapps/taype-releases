# EQ

TayPE's channel EQ is a three-band musical EQ with high-pass and low-pass filtering in the same visualiser workflow.

## Bands

- **LOW** controls the low band and can switch shelf/bell shape.
- **MID** controls the mid band and can switch into a tighter `HI-Q` mode.
- **HIGH** controls the high band and can switch shelf/bell shape.

Each band has gain and frequency controls. The strip uses compact controls; the floating EQ Visualiser gives more space and shows the live response curve.

## RTA and Response

The EQ Visualiser can show input and output spectrum traces plus the EQ response. Traces disappear when they fall below the visible graph range; they do not draw a false flat line along the bottom.

The floating EQ Visualiser also carries the dynamic EQ controls. `THR` sets the
base detector threshold at 600 Hz. `TILT` angles that threshold around the same
pivot: positive tilt makes higher bands react sooner and lower bands react
later. The green line on the graph shows the tilted threshold shape, while the
meter threshold line stays at the base `THR` level. If the tilted threshold
goes above or below the visible graph range, the green guide is clipped at the
graph edge instead of drawing a false horizontal floor or ceiling.

## Workflow

Use filters first, broad EQ moves second, and narrow mid moves only when you know what problem you are chasing. Keep the output level honest when judging boosts.
