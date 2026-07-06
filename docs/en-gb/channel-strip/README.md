# Channel Strip

Every track has a built-in channel strip. Signal flows through the strip in this order:

**Input -> Trim -> Preamp -> Filters -> EQ -> Compressor -> Inserts -> Fader -> Pan -> Output**

![Channel strip overview](../../.gitbook/assets/timeline-with-strip.png)

## Strip Controls

Drag knobs vertically, or hover and use the mouse wheel. Knobs with a neutral centre hold at zero so crossing the centre feels deliberate. Faders track continuously through unity for smooth rides.

Double-click gain and balance knobs to reset them to zero. Double-click the fader to return it to unity. Double-click editable readouts such as fader dB or pan where shown to type an exact value.

Section headers collapse or reopen on double-click across the title band. The chevron is a single-click toggle. Section power and section visibility are separate: a bypassed section can remain open and visibly dimmed.

## EQ Visualiser

The EQ header has a spectrum button. It opens one shared floating **EQ Visualiser** for the current track. The window follows track selection, shows input/output spectrum toggles, the live EQ response, filter controls, EQ controls, and an input/output meter lane.

The RTA graph draws only what is visible. If the analyser falls below the visible range, the line drops out instead of flatlining along the bottom edge.

## Sends

The Sends section sits with Inserts because both are routing decisions. The track-level **POST / PRE** button moves sends between post-fader and pre-fader taps. Send prep can add low cut, high cut, and predelay before a send reaches its target bus.

## Strip Header

The coloured title bar selects, renames, and identifies the track. Mixer title clicks select strips; Cmd-click and Shift-click build visible track selections. Grouped edits apply to visible selected strips while preserving relative offsets where possible.

## Popup Help

With **Help > Popup Help** enabled, controls show hover explanations. Routing selectors always reveal the full selected route on hover.
