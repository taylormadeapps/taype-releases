# Channel Strip

Every track in TayPE has a built-in channel strip. The signal flows through each stage in order:

**Input → Trim → Preamp → Filters → EQ → Compressor → Inserts → Fader → Pan → Output**

Each section can be enabled or bypassed independently. The on/off state does not control whether the body is open: if you leave a section expanded, it stays expanded and simply renders dimmed while bypassed.

![Channel strip overview](../../../assets/img/docs/timeline-with-strip.png)

## Strip Controls

All knobs work the same way: drag vertically, or hover and scroll the mouse wheel. Knobs with a neutral point (like 0 dB) have a detent that holds before crossing through. Drag now follows pointer movement through that centre hold instead of springing off the original click point, and when you leave the centre it uses only the extra travel beyond that hold, so zero crossings feel deliberate without getting sticky. The fader's unity catch is narrower now, so it settles on 0 dB when you actually reach the centre band and takes only a short extra drag to move off again. At the hard top and bottom limits, the drag also remembers any overshoot off the rail, so a quick reversal does not make the control jump away from the stop before your hand has really come back.

Double-click any gain or balance knob to reset it to zero. Double-click the fader to return it to unity.

In the compressor section, knob labels switch to the live value while your mouse is over that knob.

Knobs and the fader now cast a darker bottom-left contact shadow, so the controls read as seated hardware instead of floating on the panel. The fader cap itself is now a silver-based metal handle with a clearer powder-coat tint from the track colour, plus a recessed centre slot instead of a raw swatch block.

Preamp, filter, and EQ controls now sit a touch lower inside their panels so the bottom edge reads as evenly as the top, instead of leaving a fat dead strip under the lower controls. The compressor already used the right anchor and stays put.

The post-fader meter now keeps a little breathing room from the strip wall instead of sitting hard against the right edge.

On track strips, the pan row puts the mono/stereo and phase stack to the left of the dB readout, with the pan knob centred beside them.

The docked arranger strip and the mixer both carry a stronger blend of the
track colour through the background, so the selected channel reads by family at
a glance. The mixer pushes that wash a little harder in the normal theme, while
high-contrast mode keeps the plain accessibility surface. In the mixer,
ordinary strips also sit flush together, only bus and master strips open the
shared 8px separator, the coloured title band runs the full strip width as a
footer below the fader, and there is no extra top rail, boxed strip gutter, or
outer window scrollbar stealing space from the desk.
`SENDS` now sits directly below `INSERTS` in the upper strip stack on both the
docked strip and the mixer, so routing stays grouped with the insert rack.

Mixer strips now use a narrow half-width desk mode. The top stack stays two
knobs wide with simpler control groups: preamp keeps drive/output (or trim in
clean mode), EQ becomes three gain/frequency rows ordered high, mid, then low
from top to bottom, compressor keeps its new grouped `IN:` / `OUT:` mini meters
at the top while slimming the controls down to threshold, ratio, makeup, and
release only, inserts keep their thin pre/post meter lanes
while dropping the old PK/RMS and AUTO buttons, and the fader lane drops
non-essential value text. Narrow mixer strips also show the full eight-slot
insert rack with no MORE/LESS control. The transport
bar's Mixer Width icon flips the whole visible mixer rack between that narrow
desk and the full-width strip view.
The preamp's tiny gain-staging meters now live together as a labelled `IN:` /
`OUT:` pair above the controls instead of being split apart, so input and
output gain are easier to compare at a glance.
The compressor now follows that same pattern with its own `IN:` / `OUT:` pair
above the control rows, so you can see what the EQ is feeding into the comp and
what comes out before the insert rack.
Its GR scale now labels the major `12 dB` ticks where there is room above the
button stack, while the major guide marks still continue down to the bottom of
the meter beside the controls, with the whole GR lane now scaled for a `24 dB`
full reduction range instead of stretching out to `48 dB`.
The insert rack now does the same trick: `IN:` / `OUT:` mini meters are
grouped together at the top, and the docked strip's `MORE` / `LESS` control
gets its own footer row at the bottom instead of sharing the lower meter lane.
Whichever meter scale you pick, the fader lane still keeps a separate `0 dBFS`
full-scale mark so the digital ceiling stays visible in `K12`, `K14`, and
`K20`.

The strip now works in two zones. The upper stack of sections scrolls vertically
when it runs out of room, and a slim scrollbar appears at the right edge for
precise scrolling without the mouse wheel. The fader section stays docked to
the bottom of the strip, can be collapsed, and can be resized by dragging its
top edge. In the mixer, the visible strips now share that upper scroll position
as well as the dock height, so the desk stays lined up while you move through
the stack.

Mouse wheel over the actual knob body still adjusts that knob. Labels, value
readouts, and the padded space around the control do not count. Mouse wheel
anywhere else in the strip's upper lane scrolls the section stack instead.

The master strip's `NAM SUMMING` block lives in the same vertical lane as the ordinary `PREAMP` block. In the mixer, collapsing either one now collapses that whole shared lane across every visible strip, so the desk stays aligned.
The mixer master strip also carries a blank spacer below `INSERTS`, sized so
its upper scroll travel matches the ordinary strips even though it has no send
controls of its own there.
Send targets are downstream buses only; the master bus is not offered in the
send picker.

## Strip Header

The coloured title bar shows the track name as a centred pill. In the arranger strip it lives at the top; in the mixer it sits below the fader as the strip footer. Double-click the pill to rename the track. Double-click the coloured background beside it to open the colour picker, and double-click it again while the picker is up to close it. Inside the picker, a single swatch click previews the colour; double-click a swatch to commit it and close the picker.

The bus toggle sits in the left side of the title bar — a white bus glyph that fills green when active. Bus mode forces MON on immediately, drops live input to `none`, and temporarily disables any enabled instrument inserts on that track. Switching back out of bus mode restores the old input, restores those instrument inserts, and forces MON back off.

The tool row shows: **Mute**, **Solo**, **Tag**, **Archive**, **MON**, **Record**. On instrument tracks, Record still mirrors MON on and off for quick arm/disarm, but MON stays independently clickable so you can audition or mute the live instrument feed without changing record arm. Input and output routing share one row at the top of the strip.

## Popup Help

With **Help → Popup Help** enabled, the strip shows hover help after about **0.7 seconds** for knobs, routing selectors, section headers, insert slots, meters, and toggle buttons.
