# Channel Strip

Every track in TayPE has a built-in channel strip. The signal flows through each stage in order:

**Input → Trim → Preamp → Filters → EQ → Compressor → Inserts → Fader → Pan → Output**

Each section can be enabled or bypassed independently. When a section is bypassed, its body hides to reduce clutter — the header stays visible so you can re-enable it.

![Channel strip overview](../../../assets/img/docs/timeline-with-strip.png)

## Strip Controls

All knobs work the same way: drag vertically, or hover and scroll the mouse wheel. Knobs with a neutral point (like 0 dB) have a detent that holds before crossing through.

Double-click any gain or balance knob to reset it to zero. Double-click the fader to return it to unity.

In the compressor section, knob labels switch to the live value while your mouse is over that knob.

## Strip Header

The coloured title bar shows the track name as a centred pill. Double-click the pill to rename the track. Double-click the coloured background beside it to open the colour picker.

The bus toggle sits in the left side of the title bar — a white bus glyph that fills green when active.

Below the title bar, the tool row shows: **Mute**, **Solo**, **Tag**, **Archive**, **MON**, **Record**. Input and output routing share one row at the top of the strip.

On the master strip, that tool row keeps only **Mute**. The preamp slot is
replaced by **NAM Summing**, but it stays in the same vertical slot so the
whole mixer still lines up cleanly.

The pan row now keeps the gain readout on the left with mono/stereo and phase
icons stacked beside it, and the pan knob sits in the middle. Buses and the
master stay stereo, so they only show the phase icon there.

## Popup Help

With **Help → Popup Help** enabled, the strip shows hover help after about **0.7 seconds** for knobs, routing selectors, section headers, insert slots, meters, and toggle buttons.
