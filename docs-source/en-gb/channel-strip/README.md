# Channel Strip

Every track in TayPE has a built-in channel strip. The signal flows through each stage in order:

**Input → Trim → Preamp → Filters → EQ → Compressor → Inserts → Fader → Pan → Output**

Each section can be enabled or bypassed independently. The on/off state does not control whether the body is open: if you leave a section expanded, it stays expanded and simply renders dimmed while bypassed.

![Channel strip overview](../../assets/img/docs/timeline-with-strip.png)

## Strip Controls

All knobs work the same way: drag vertically, or hover and scroll the mouse wheel. Knobs with a neutral point (like 0 dB) have a detent that holds before crossing through.

Double-click any gain or balance knob to reset it to zero. Double-click the fader to return it to unity.

In the compressor section, knob labels switch to the live value while your mouse is over that knob.

Knobs and the fader now cast a darker bottom-left contact shadow, so the controls read as seated hardware instead of floating on the panel. On the knobs, that contact spot now stays only a few pixels tighter than the real knob body diameter rather than shrinking down to a tiny blot, and it pushes far enough into the 225-degree lower-left seat to read past the radial light. The fader cap itself is now a slightly taller silver-based metal handle, but it still scales back with shorter dock throws so the strip keeps its proportion instead of going weird.

Preamp, filter, EQ, and compressor controls now sit inside a shared centred control band with matched top and bottom breathing room, instead of pinning the knobs to the panel edge.

On track strips, the pan row puts the mono/stereo and phase stack to the left of the dB readout, with the pan knob centred beside them.

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
is a simple RMS hint of what is feeding that send.

In the K-system scales, the printed ladder keeps the red `FS` tick at the true ceiling, adds `+3 dB` marks above the highlighted `0 VU` reference up toward full scale, then steps down in `-3 dB` marks to `-21` and `6 dB` marks below.

## Strip Header

The coloured title bar shows the track name as a centred pill. In the mixer,
single-clicking that title panel selects the track and lights a white footer
outline. Double-click the pill to rename the track. `Cmd`-click toggles extra
visible strips into the mixer selection, `Shift`-click extends that selection
as a visible range, and `Cmd+A` selects every visible strip. Arranger track
headers share that same multiselect behaviour, except arranger `Cmd+A` still
belongs to clip selection. When more than one track is selected, the docked
arranger strip stays pinned to the first selected track. Grouped fader, pan,
width, section power, and insert-slot power edits apply only to the visible
selected strips, and grouped fader / pan / width drags preserve each strip's
relative offset instead of flattening them to one value. If a linked control
hits its min/max rail, it stays pinned there until the drag comes back far
enough for the original offset to fit again. Double-click the coloured
background beside it to open the colour picker.

The bus toggle sits in the left side of the title bar — a white bus glyph that fills green when active.

Below the title bar, the tool row shows: **Mute**, **Solo**, **Tag**, **Archive**, **MON**, **Record**. Input and output routing share one row at the top of the strip.

## Popup Help

With **Help → Popup Help** enabled, the strip shows hover help after about **0.7 seconds** for knobs, routing selectors, section headers, insert slots, meters, and toggle buttons.
