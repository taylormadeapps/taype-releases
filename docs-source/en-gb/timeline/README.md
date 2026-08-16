# The Timeline

The timeline is where you record, edit, navigate, and arrange the reel.

![Timeline overview](../../../assets/img/docs/timeline-overview.png)

## Layout

The top ruler shows time or bars/beats. The tape head marks the current play position. Tracks run vertically down the left, with clips arranged on lanes to the right.

The arranger and transport have no right endpoint. You can seek, scroll, edit, record, or keep playing beyond the last clip; playback continues through silence until you press Stop or Pause. The horizontal scrollbar expands its working canvas as you move further right and is not an end-of-reel marker. The Tape Length selected for Tape Mode clamps only the reel and ribbon graphic, not the timeline or playback.

The transport position follows that ruler format. Its larger lower line shows the current time or bar and beat. Click the readout to toggle between the single display and a two-line display with the alternate value above it; TayPE remembers that choice globally. Double-click the larger value to type a new position in the format shown, then press Return to seek there. Escape or clicking away cancels the entry.

The selected track drives the docked channel strip, hardware-control focus, and many keyboard operations. TayPE keeps that selection visible when you change view, scale, or strip width.

## Ruler Header Controls

The ruler header includes controls for follow-playhead behaviour, mixer width, track creation, archive view, and other view tools. Follow keeps the playhead visible during playback without yanking your edit focus while you are making a deliberate selection or drag.

## Track States

A track can be current, focused, muted, soloed, record-armed, monitored, archived, or part of a bus/comp group. TayPE uses these states to keep busy reels readable: focus narrows attention, archive hides finished material, and grouped controls let selected tracks move together without flattening their relative balances.

## Editing Model

Most edits are non-destructive. Moving, splitting, trimming, fading, archiving, and disabling clips change the reel state without rewriting the original media. Splitting clips adds the current default fade at the new cut edges. Use checkpoints when you want a named recovery point before a bigger move.

## Printing wet stems with JD's Law

In the Print Mix, Print Loop, or Print Marker Ranges export window, select
**Stems**, choose the tracks or buses you want, then enable **JD's Law**. TayPE
prints each selected stem through its downstream buses and the master, one at
a time. This includes the downstream mix processing rather than only the
direct post-fader stem.

The export window hides any visible plug-in windows before it opens. When it
closes, TayPE restores those plug-in windows in their previous order. Plug-ins
that were already hidden with Option+P remain hidden.

Muted targets remain muted. If **Master** is also selected, TayPE prints the
ordinary full mix once and then prints the wet stems. Live mode plays every
pass in real time; Offline mode performs the same sequence without sending it
to the speakers. Any solo state that existed before printing is restored when
the operation finishes or is cancelled.

## Related Timeline Workflows

* [Automation](automation.md): show, edit, and capture volume, pan, or width moves.
* [Varispeed](varispeed.md): rehearse or record at a different playback speed while preserving pitch.
* [Video Reference](video-reference.md): keep one picture reference in sync with the reel for scoring work.
