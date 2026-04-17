# Working with Clips

## Selecting

Click a clip to select it. The clip highlights and its track becomes selected too. **Cmd+click** adds or removes clips from the current selection, dragging in empty timeline space marquee-selects clips, and **Cmd+A** selects every clip in the current loop region when loop playback is active. Press **Escape** to deselect everything.
**Option-drag** on a clip body duplicates it at the drop point instead of
moving the original.
Hold **Shift** while dragging, or **Option+Shift** while drag-copying, to butt
the clip against neighbouring clip edges instead of overlapping and creating a
crossfade.
Press **Backspace** to disable the selected clips without removing them. Disabled
clips stay on the timeline, dim visually, and do not sound. Press
**Delete** when you really want to delete the selected clips.
**Option-click** on a clip body does the same soft toggle directly on the clip
you hit, or on the whole current multi-selection if that clip is already part
of it. **Option-drag** still makes a copy instead of toggling anything.

Double-click a clip to open **Taype — Clip Properties**. That's where you rename or
recolour or disable the clip, inspect its source paths, reveal those files in
Finder from the little open icons, and, for MIDI-origin clips, use **Edit MIDI** to open
TayPE's **Taype — MIDI Clip Editor** or **Re-render from MIDI** to print a fresh render
through the track's current instrument. The same dialog now shows the clip's
current source window, stretch ratio, and offline pitch in **semitones** plus
**cents**, with an **Apply** button beside those pitch fields. If the clip you
double-click is part of the current multi-selection, **Taype — Clip Properties**
flips into a batch mode: clip colour and the disable toggle still edit the
whole selection, the pitch fields stay live as **deltas** added onto each
selected clip, and the per-clip name, source, and MIDI actions are greyed out.
Clip Properties now opens without dropping the typing caret straight into the
name field, so transport and marker shortcuts keep working until you click
into a text box.
While a clip render is pending, global undo/redo waits for that render to
settle so it never restores a half-rendered clip state.
If that fresh print rings longer than the previous one, TayPE lets the clip
grow to keep the new tail instead of chopping it back to the old right edge.
The dialog now groups file references into a collapsible **Media Paths**
section that starts closed so the main clip controls stay up top. `Clip Audio
Actual` and `Clip MIDI Actual` show the current live truth as absolute paths,
`Reel Store Audio` and `Reel Store MIDI` stay relative to the reel bundle so
you see paths like `media/imports-midi/...`, and `Import Source` stays
absolute when the clip came from outside the reel. When the section is closed,
the file rows stay hidden instead of sitting there half-open. Missing rows
read `n/a` instead of disappearing.
For recorded takes, **Source start** and **Source end** reflect your actual
trim into the take, not TayPE's hidden record-alignment offset, so a fresh
untouched recording still reads from zero.
MIDI-backed clips also show a small joined-quaver glyph in the clip-name pill
so you can spot them at a glance. Double-click that
glyph to open the MIDI editor directly. When a clip-name pill is clipped, hovering it still reveals
the full clip name even if popup help is turned off.
Pitch-shifted clips show a small `#` marker in that same pill so you can see
at a glance that the clip's rendered audio is no longer at source pitch.
When you drag or trim previously crossfaded clips apart, TayPE clears the old
crossfade fade handles so the separated clips do not stay accidentally faded.

During playback, TayPE keeps the core clip workflow live: you can rename,
recolour, disable, trim, move, split, delete, duplicate, copy, paste, and
adjust clip gain or fade shape without stopping first. Recording is still
stricter, so those edits wait until the take stops. Edits that have to print
new audio or replace committed media still ask you to stop first through the
same transport warning banner used elsewhere in the timeline.

**Option+double-click** on an audio clip opens Melodyne for that clip. If
playback is already running, TayPE only does that live on clips that already
have committed derived audio to reopen from; otherwise it keeps the usual
**Stop playback first** warning. While Melodyne is open, TayPE lets you hear
the live edit through the main transport.
If you select a different clip, TayPE auto-commits the current Melodyne work,
closes that session, and reopens Melodyne on the newly selected clip. Ordinary
focus changes do not close Melodyne, but Melodyne and the **Taype — MIDI Clip Editor** are
globally mutually exclusive, so if one is open the other will not launch until
it closes. Clips with committed Melodyne work also
show a small tuning-fork glyph in the clip pill; double-click that glyph to
open Melodyne directly. If a reel arrives from another system with committed
Melodyne audio but Melodyne is not installed here, TayPE still shows the glyph
so the clip's state is honest, hides **Edit in Melodyne**, and keeps **Revert
Melodyne** available in **Taype — Clip Properties**.

## Taype — MIDI Clip Editor

**Cmd+double-click** a MIDI-origin clip to open the floating **Taype — MIDI
Clip Editor**. Double-clicking the note glyph does the same thing, and that
launch stays live during playback. A regular double-click on the clip body
still opens **Taype — Clip Properties**.

This phase is melodic-first. The editor opens around the clip's used note
range, gives you a proper piano keyboard down the left edge, and leaves
dedicated drum editing for later.

If the sidecar has no note events yet, TayPE still opens the editor on a blank
middle-register view so you can add notes instead of getting a fake error.

Single-clicking empty grid now seeks the transport to the clicked snapped
time. Double-clicking empty grid adds a note at velocity `90`, and its default
length follows the current quantise note interval. **Cmd-drag** on empty grid
paints notes at that interval; if you start the paint stroke from an existing
note, the notes you paint after that inherit that note's velocity and channel.
Drag an empty part of the grid without **Cmd** to marquee-select notes, and
press **Cmd/Ctrl+A** to select the lot even while the transport is running.
Drag a note to move it in time and pitch, and drag its right-edge handle to
resize it. When more than one note is selected, those move and resize gestures
apply to the whole selection by the same amount. With absolute snap on, note
drags keep the arranger's sticky snap feel: free away from the rail, magnetic
near it, nearest-grid on release. **Up** / **Down** move the selected notes by an
octave, while **Cmd/Ctrl+Up** and **Cmd/Ctrl+Down** nudge them by a semitone.
**Left** / **Right** move the selected notes by one current quantise interval.

The left keyboard rail is playable for audition, stays pinned to the editor's
left edge while the roll scrolls behind it, and scroll-wheel movement there
moves through the visible pitch range. Popup-dragging there changes the
editor's vertical pitch zoom. **Cmd/Ctrl-scroll** on that rail changes the
shared horizontal zoom, while **Option-scroll** changes vertical pitch zoom.
Popup-dragging there now tracks your pointer cleanly instead of slipping
around as the editor recentres the note view during zoom, and horizontal zoom
now prefers the visible transport playhead as its anchor before falling back
to the pointer position.
**Cmd/Ctrl-scroll** on the piano-roll grid does the same shared horizontal
zoom, and **Option-scroll** there changes vertical pitch zoom. The pitch-order
overlay flips
whether higher notes sit at the top or bottom of the grid, and it now sits
flush over the keyboard corner instead of floating out in the chrome. A
sticky timeline header also stays on-screen above the roll, so you can
left-click there to set the transport and popup-drag there for horizontal
zoom with that same visible-playhead-first anchor rule. Pinching anywhere
inside the MIDI editor now changes shared horizontal zoom too, using that
same anchor rule. The MIDI editor transport marker now uses the same yellow
arranger-style head and top cap instead of a separate white editor line.
When you first open the editor, TayPE now inherits the arranger's current
horizontal zoom instead of snapping to its own separate default span.
Popup help now covers that floating window properly too, including the pinned
keyboard rail, sticky ruler, piano-roll surface, `CTRL` lane, overlay buttons,
and footer quantise controls.

Velocity now lives right in the note body. TayPE colours notes from cool to
hot across the `0..127` range, keeps pitch names inside the notes by default,
and only flips those labels to numeric velocity while you are actively
popup-dragging a velocity edit. **Option-click** or plain **double-click**
removes one note, and **Delete** / **Backspace** removes the full selection.

A floating MIDI editor window already carries the clip name in its title, so
the editor body does not waste space repeating it in a top bar.

A left-aligned footer **Quantise** strip carries **Quantise**, note-length,
strength, and capture controls. TayPE defaults that strip to
`1/16`, `100%` strength, and `100%` capture on first open, then keeps those
settings globally across MIDI editor windows. If you already have notes
selected, Quantise only moves those notes; if nothing is selected, it works on
the whole clip. This pass only moves note starts. If the ruler is in beats and
your chosen quantise note value is finer than the main beat grid, TayPE
overlays that quantise rail on top and snaps notes and header seeks to that
finer visible rail until the main beat grid catches up.

When you open a MIDI clip, TayPE now fits the editor vertically to the
highest and lowest used notes in that clip instead of leaving the whole pitch
range zoomed out and hoping you squint.

To resize a MIDI note, hover its right edge until the cursor changes, then
drag. TayPE no longer burns note-body space on a permanent chunky resize
handle, and even very short notes keep enough body area to move or repitch
cleanly without the resize grab swallowing the whole thing.

The bottom-left **CTRL** overlay sits over the pinned keyboard rail and opens a
lower control lane inside the same window. That lane shares the piano roll's
time axis, snap, playhead, and horizontal zoom, and this pass opens it
straight into **Pitch Bend** without a separate type selector. Click empty
space to set a point, drag a point to move it, double-click a point to delete
it, and hold **Cmd** while dragging to brush values across time. Clicking a
point without dragging leaves it alone. Other controller data still stays
intact in the MIDI sidecar unless you deliberately edit that lane in a future
pass.

If that MIDI-backed clip also has committed Melodyne audio on top, opening the
MIDI editor still stays safe. TayPE warns only when **Commit** or
**Re-render from MIDI** is about to replace the current audio, so you can back
out before the destructive step.

As you add or move notes, TayPE auditions them through the track's current
instrument. While the editor stays open, TayPE mutes that clip's baked audio
and plays the current note layout through the instrument instead, so transport
playback gives you a live preview rather than the stale printed render.
The grid shades the area outside the clip's audible window so you can see the
real boundary at a glance. Notes may extend visually past that line, but live
preview and re-render hard-stop them at the clip end instead of letting tail
spill past the visible edge. **Commit** writes the updated MIDI sidecar, folds
the clip's current trim and stretch into that new MIDI truth, and re-renders
the clip without silently growing the visible clip to preserve hidden tail.
**Cancel** closes the window without changing the clip. The editor only opens
while the transport is stopped. The editor also follows the reel timeline, so
it uses the same ruler mode, Cut zero, snap rails, and main playhead as the
arranger. Note-only edits preserve the clip's other MIDI events too, so
sustain, pitch bend, program change, aftertouch, and unrelated CC data survive
unless you deliberately edit that lane. If you try to open a different MIDI
clip while the current editor still has pending changes, TayPE shows the same
warning first instead of quietly discarding the dirty editor.

## Moving

Drag a clip horizontally to reposition it in time. Drag vertically to move it to a different track.

If that clip is part of the current multi-selection, TayPE moves the whole
selected set together. It keeps the spacing between clips and the vertical
track offsets intact.

There's a slight resistance threshold to prevent accidental cross-track moves.

Snap stays soft while you drag, so the clip only grabs a rail when you get near it. When you let go, TayPE still drops the clip onto the nearest visible grid point instead of leaving it hanging between snap zones. External audio and MIDI file drops keep that same feel too: the hover guide snaps onto the visible rail while you drag, and the committed import lands on the nearest visible snap point when snap is on.

## Copying

Hold **Option** while dragging a clip to copy it. If that clip is part of the
current multi-selection, TayPE copies the whole selected set as one group and
keeps the spacing and track offsets intact. The original and the copy keep
sharing the canonical source media. If the clip already has clip-local
generated audio from stretch or Melodyne, TayPE duplicates that generated
layer for the new clip so later edits can diverge cleanly.

## Loop Braces

The timeline ruler always shows loop braces. Drag the handles to set the loop
start and end, or drag the top ruler space between them to move the whole
range without changing its width. The untouched default span is 16 bars. The
brace handles sit in the top marker lane as little muted-orange **L** and **R** tabs by the
brace lines, so
the lower ruler zoom band stays clear. When loop playback is on, the brace
lines extend through the arranger; when loop playback is off, they stay up in
the ruler. Press **[** to set the left brace at the tape head, **]** to set
the right brace, **L** to frame the selection into the loop range, and **Cmd+L** to toggle loop playback
current selection into the loop range and turn loop playback on. Those
loop-brace edits stay live during playback,
but recording still blocks them. Looping is playback-only; when you record with
braces active, TayPE uses the same range as a linear punch window instead of
cycling the take. If a marker lands on the left brace time, TayPE
flips the brace tab to the other side of the line so both stay readable. The
marker/brace lane only uses the little tab strip at the top of the ruler, and
the right-click scroll/zoom band starts down at the major ruler ticks. If you
use **[** or **]** in a way that would cross the braces, TayPE carries the
opposite brace along to preserve the current width, only shortening the range
when timeline `0` blocks the full window from fitting. If you
drag one brace past the other, TayPE keeps the committed loop braces in order.
While you drag, the grabbed brace stays under the pointer and the far brace
waits where it was; when you let go TayPE carries the opposite brace with it
to preserve the current width, only shortening the range when the timeline
start at `0` gets in the way. Marker tabs and rods
still win pointer hits over the loop drag strip, so marker drag and marker
menus keep working inside the loop range. Playback-safe clip tweaks such as
disable, rename, recolour, gain, fades, straightforward trims, body drags,
copy/paste, duplicate, split, and delete stay live during playback. Stretch,
pitch, bounce, join, and other render-backed clip edits still flash the
transport warning banner until you stop. Recording still blocks all of those
clip edits.

## Splitting

| Shortcut | What it does |
|----------|---------------|
| **\\** | Split the selected clips at the tape head |
| **Cmd+\\** | Split the selected clips at both current loop braces |
| **Option+\\** | Split every clip that crosses the tape head, across all tracks |
| **Cmd+Option+\\** | Split every clip that crosses either current loop brace, across all tracks |

Plain **\\** splits every selected clip that spans the tape head into two.
Both halves keep pointing at the same source audio, and TayPE selects the new
right-hand pieces when the split is done. The loop-brace variants use the
latest committed loop brace positions, even if you just moved the ruler tabs.

The brace versions make both cuts in one go. TayPE only cuts clips that
actually cross a brace, skips clips that already line up with the brace, and
still wraps the whole move as one undo step.

## Trimming

Hover near the lower half of the left or right edge of a clip until the cursor changes to a resize arrow. Drag to trim.

This is non-destructive — you're just changing which portion of the audio file is visible.
If the clip you grabbed is part of the current selection, TayPE trims the whole
selected set with the same edge delta. Left trims move each clip's start and
clip-start offset together, right trims resize the whole set together, and if
any selected clip hits a trim limit the whole gesture stops there.

The upper edge zone is used for stretch. As you drag it, the waveform preview
stretches with the clip instead of looking like a plain trim.

When you let go, TayPE renders the clip's current audible slice into the new
stretched file, so playback restarts from the top of that stretched audio
rather than carrying an old trim offset across.
If the clip you grabbed is part of the current selection, TayPE applies that
same stretch-edge move to the whole selected set and each clip prints its own
stretched render.

## Gain and Fades

Drag the clip gain line up or down to change that clip's level. The waveform redraws with it, so lower gain pulls the waveform inward and unity still leaves a touch of headroom instead of pinning the clip edges. If the grabbed clip is part of the current selection, TayPE applies the same gain change to the whole selected set and keeps the relative gain offsets between clips intact.

Fade handles sit just inside the top corners of the clip, and their hit area
stays inset too, so the edge itself remains available for stretch and trim
gestures.

Fade-ins and fade-outs reshape the waveform too. As you edit a fade, the waveform tapers to match the level envelope instead of staying full-height under a tint, and the guide curve stays clean instead of flooding the quiet part of the clip. On a multi-selection, fade-length and fade-curve drags use the same shared delta across the selected set, so existing offsets stay intact.

## Crossfades

When two clips overlap, the overlap area shows a crossfade overlay. Overlap length sets crossfade duration.

Both clips stay audible through that overlap: the outgoing one fades down while the incoming one fades up, so the seam holds steady instead of dipping.

Drag vertically anywhere in the overlap region to shape the curve. Both sides move together to stay symmetric. Double-click the overlap to reset to a linear curve.

## Clipboard

- **Cmd+X** — cut the selected clip set
- **Cmd+C** — copy the selected clip set
- **Cmd+V** — paste the copied clip set at the tape head
- **D** — duplicate the selected clip set back-to-back

When more than one clip is in the clipboard or duplicate set, TayPE preserves
the spacing between them. Paste uses the selected track as the anchor for the
copied track layout; if no track is selected, each clip goes back to the track
it was copied from.

## Bounce to Stem

Press **B** or choose **Edit -> Bounce Clips to Stem** to print the selected
clips to one new stereo stem track in real time. TayPE plays the selected
range, records the summed channel output to the new stem, then disables the
source clips when the pass is done. Before the pass starts, TayPE asks you to
confirm that those selected clips will be disabled and reminds you that bounce
consolidates audio only — no MIDI stem is created.

Press **Cmd+B** or choose **Tracks -> Bounce Tracks to Stem** to print the
selected tracks to one new stereo stem track in real time. When the pass
completes, TayPE archives those source tracks. That confirm also spells out
that bounce consolidates audio only — no MIDI stem is created.

If the selection spans more than one track, TayPE still makes one stem track
containing the full summed result. One **Cmd+Z** removes the stem and puts
the source clips back exactly as they were. Regular track bounces do not
drag along downstream send or bus chains unless you selected those buses as
part of the bounce too, and the live bounce pass now auditions that same
reduced path instead of letting unrelated bus work leak through.

## Importing Files

Use **File -> Import Audio...** to place an audio file on the selected track at
the tape head.

Use **File -> Import MIDI to Audio...** to render a MIDI file through an
instrument track. TayPE opens a modal track chooser first, then asks for the
MIDI file.

Dropping a MIDI file straight onto the timeline also works. If the target
track has no instrument loaded, TayPE flashes a warning banner instead of
importing the clip.

If that MIDI file has no embedded tempo map, TayPE interprets its PPQN timing
against the current reel tempo instead of silently assuming a fixed 120 BPM.

Imported MIDI clips and recorded instrument takes keep a paired MIDI sidecar
inside the reel. If you edit that MIDI file outside TayPE, go back to **Clip
Properties** and use **Re-render from MIDI** to commit a fresh audio render.
If the clip has Melodyne-style rendered-audio edits on top, TayPE warns before
that rerender clears them. Stretch is committed into the new MIDI sidecar, and
any old clip pitch shift is cleared back to zero because the fresh render
follows the MIDI plus current instrument truth rather than the previous
audio-only repitch. While the new audio is printing, the clip stays in place
with a small centred spinner and the not-yet-rendered tail is shaded on the
clip itself, so you can see the rerender progress without hearing anything
from the offline print, even if that instrument track is still monitor-armed,
and the rerender always prints the current MIDI sidecar instead of silently
reusing stale note data. When the instrument supports offline processing,
TayPE asks it to use that mode for the hidden rerender and runs that pass in
the background instead of pacing it off the visible transport UI. If the
current clip window has no MIDI
notes at all, TayPE still runs the instrument over the full clip duration with
an empty MIDI feed instead of blocking the rerender, which keeps transport-
driven drum machines and sequencers printable from a plain clip. Host-synced
instruments also see the clip's real timeline position and musical transport
context during that hidden render instead of a fake playhead starting from
bar one.
While that rerender is pending, TayPE keeps transport start and record actions
blocked until the new print lands, so the hidden offline pass cannot get mixed
up with a live play or record start.
Recorded instrument takes store speaker-time as their MIDI truth too, so a
later rerender lands where you originally heard the performance rather than
quietly moving the furniture. That MIDI truth carries the same post-tap
monitor-alignment shove as the committed audio instead of snapping back to the
raw incoming queue time, and front-edge junk in the old print does not get to
drag the rerender earlier than the committed MIDI note start.
