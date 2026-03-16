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

In the K-system scales, the printed ladder keeps the red `FS` tick at the true ceiling, adds `+3 dB` marks above the highlighted `0 VU` reference up toward full scale, then steps down in `-3 dB` marks to `-21` and `6 dB` marks below.

## Strip Header

The coloured title bar shows the track name as a centred pill. Double-click the pill to rename the track. Double-click the coloured background beside it to open the colour picker.

The bus toggle sits in the left side of the title bar — a white bus glyph that fills green when active.

Below the title bar, the tool row shows: **Mute**, **Solo**, **Tag**, **Archive**, **MON**, **Record**. Input and output routing share one row at the top of the strip.

## Popup Help

With **Help → Popup Help** enabled, the strip shows hover help after about **0.7 seconds** for knobs, routing selectors, section headers, insert slots, meters, and toggle buttons.
