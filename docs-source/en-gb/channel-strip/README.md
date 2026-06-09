# Channel Strip

Every track in TayPE has a built-in channel strip. The signal flows through each stage in order:

**Input → Trim → Preamp → Filters → EQ → Compressor → Inserts → Fader → Pan → Output**

Each section can be enabled or bypassed independently. The on/off state does not control whether the body is open: if you leave a section expanded, it stays expanded and simply renders dimmed while bypassed. The default reel starts with the master bus compressor enabled; regular track compressors start bypassed.

![Channel strip overview](../../assets/img/docs/timeline-with-strip.png)

## Strip Controls

All knobs work the same way: drag vertically, or hover and scroll the mouse wheel. Knobs with a neutral point (like 0 dB) have a detent that holds before crossing through.

Double-click any gain or balance knob to reset it to zero. Double-click the fader to return it to unity.

In the compressor section, knob labels switch to the live value while your mouse is over that knob.

Knobs and the fader now cast a darker bottom-left contact shadow, so the controls read as seated hardware instead of floating on the panel. On the knobs, that contact spot now stays only a few pixels tighter than the real knob body diameter rather than shrinking down to a tiny blot, and it pushes far enough into the 225-degree lower-left seat to read past the radial light. Zero-position mini knobs, including the small wet/dry and crosstalk utility controls, keep a neutral rim and unlit arc visible on dark strip surfaces without using the brass active-value colour. The fader cap itself is now a slightly taller silver-based metal handle, but it still scales back with shorter dock throws so the strip keeps its proportion instead of going weird.

Preamp, filter, EQ, and compressor controls now sit inside a shared centred control band with matched top and bottom breathing room, instead of pinning the knobs to the panel edge.

On track strips, the pan row puts the mono/stereo and phase stack to the left of the dB readout, with the pan knob centred beside them. Stereo strips also show the width mini knob on the far right; mono strips leave that lane empty instead of showing a dead width control. VSTi tracks use the same explicit badge: the instrument keeps its MIDI input route, renders into the source lane, and the strip topology then decides whether that lane stays stereo or collapses to mono before the strip.

The post-fader meter now keeps a little breathing room from the strip wall instead of sitting hard against the right edge. Its held-peak text box now sits directly under the pan readout in the pan row, so the meter itself can run the same full height as the fader throw.

The input selector follows mono and stereo mode separately. If you flip the
strip between mono and stereo, TayPE restores the last input you picked for
that mode instead of forcing one route shape into the other. If a mode's
default input is unset in Audio preferences, the selector says `No mono ins`
or `No stereo ins` instead of `Default`.

The EQ header also carries a small spectrum button. Click it to open the one
shared floating **EQ Visualiser** window for the current track, with the live
response curve, small `IN` / `OUT` spectrum toggles in the graph's top-right
corner, and split `FILTER` / `EQ` panels that mirror the strip's header power
toggles and EQ glyph buttons. Once open, that shared window follows whichever
track is currently selected, and it keeps a visible wash of that track colour
through the popup shell and section plates. The `FILTER` panel now stacks `LO`
over `HI` in one centred column so its two knobs line up with the EQ rows, and
the `EQ` panel also puts a small left-hand `IN` / `OUT` meter lane beside the
knobs using the same segmented K-scale / clip ladder language as the main
track meters. On the `HI` filter knob, the radial lamp now fills in reverse,
so lowering the low-pass cutoff lights more of the arc instead of less.

The `SENDS` header carries a `POST` / `PRE` button for the whole track. `PRE`
moves every send to the pre-fader tap, and the thin ring around each send knob
is a simple RMS hint of what is feeding that send. Right-click an assigned send
knob to open its send prep panel, where that source send can apply low and high
cuts plus clean predelay in samples or milliseconds before it reaches the bus.
The prep belongs to the source send edge: several source tracks can feed the
same reverb bus with different filtering and predelay, while a single source
still keeps only one send edge to that target. A lighter send knob means that
edge has non-default filtering or predelay.

Section headers collapse or reopen on **double-click** across the title band,
while the little chevron on the left stays a single-click toggle.

In the K-system scales, the printed ladder keeps the red `FS` tick at the true ceiling, adds `+3 dB` marks above the highlighted `0 VU` reference up toward full scale, then steps down in `-3 dB` marks to `-21` and `6 dB` marks below.

## Strip Header

The coloured title bar shows the track name as a centred pill. In the mixer,
single-clicking that title panel selects the track and lights a white footer
outline. Double-click the pill to rename the track. `Cmd`-click toggles visible
strips into or out of the mixer selection, including deselecting the last
selected strip, `Shift`-click extends that selection as a visible range, and
`Cmd+A` selects every visible strip. Arranger track headers share that same
multiselect behaviour, except arranger `Cmd+A` still belongs to clip selection
and `Cmd+Shift+A` selects every clip on the currently selected tracks. When more
than one track is selected, the docked arranger strip stays pinned to the first
selected track. Grouped fader, pan,
width, section power, and insert-slot power edits apply only to the visible
selected strips, and grouped fader / pan / width drags preserve each strip's
relative offset instead of flattening them to one value. If a linked control
hits its min/max rail, it stays pinned there until the drag comes back far
enough for the original offset to fit again. Double-click the coloured
background beside it to open the colour picker.

When the docked strip is open but no track is selected, its empty state uses the
same soft arrange-bed gradient as the timeline body in the normal theme. High
contrast keeps the solid panel fill.

The bus toggle sits in the left side of the title bar - a white bus glyph that fills green when active. Plain click still toggles ordinary bus mode. Popup help on that glyph now tells you that **Cmd-click** from a normal track enters comp mode too. **Cmd-click** enters comp mode from a normal track; plain buses are not promoted directly, so `Cmd-click` on an existing bus does nothing until you leave ordinary bus mode. A comp bus turns that glyph blue with a white bus icon, and it keeps whatever `MON` state the source track already had instead of forcing monitoring on. Its MON lamp follows the same colour rules as an ordinary track: VSTi-hosting comp buses use the instrument-monitor blue, otherwise they use the normal monitor accent, even though the bus glyph and comp-group frame stay blue. Unlike a plain bus, a comp bus may keep or load an instrument insert, so you can comp a VSTi without turning the synth off, but child take tracks inside that comp group cannot host instrument inserts themselves. That `MON` path now carries the comp bus's shared MIDI input through the live synth too, not just raw audio inputs, and record on the comp bus commits the rendered synth output into the new child take. In the timeline and mixer, the whole visible comp block gets a blue outline with a small +/- square in its top-left corner so you can hide or show the child takes without changing routing. Child take strips hide the bus toggle, both routing selectors, **MON**, and **Record** while they belong to the comp group. `Cmd-click` on a non-empty comp bus asks whether to flatten the group, and confirming prints the comp to one clip on that track, removes the child take tracks, and leaves a normal track behind.

Below the title bar, the tool row shows: **Mute**, **Solo**, **Tag**, **Archive**, **MON**, **Record**. Input and output routing share one row at the top of the strip.

## Popup Help

With **Help → Popup Help** enabled, the strip shows hover help after about **0.7 seconds** for knobs, routing selectors, section headers, insert slots, meters, and toggle buttons.
Routing selectors put the full selected input or output route on the first line of that help bubble. If popup help is off, those same selectors still reveal the full selected route text on hover.
