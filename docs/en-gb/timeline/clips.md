# Working with Clips

Clips are the audio or MIDI regions on the timeline.

## Selecting

Click a clip to select it. Use multi-select gestures for grouped edits. Clip selection and track selection are related but not identical: a selected clip can live on a selected track, while track commands still target the current track set.

Cmd-click toggles clips into or out of the clip selection on mouse-up. Cmd-drag starts a timeline range split instead: drag across one or more tracks, release, and TayPE cuts clips that cross the range boundaries while selecting the pieces inside the dragged range. When Cmd-drag starts in empty space, stays within one track, and the whole range is empty, it creates a silent clip for that exact snapped range. VSTi tracks create a MIDI-backed silent clip; other tracks create a plain silent-audio clip. Occupied ranges and drags across multiple tracks keep the range-split behaviour. When snap is enabled, the range edges magnetise to nearby clip edges and markers before falling back to the current grid; the live preview sticks to those snapped edges once they form a span, and falls back to raw drag feedback only while both edges are on the same snap point.

Cmd+Option-drag on a clip body slips the waveform inside the fixed clip. Drag right to move the waveform right; drag left to move it left. If you slip beyond the source edges, TayPE pads the clip with silence instead of moving or resizing the clip.

On comp take tracks, Cmd-drag uses the horizontal range to split every take lane in the comp bus. The vertical lanes you drag across are promoted for that time range, and sibling take lanes are muted. Clips captured with Dub Record Mode are the exception: automatic comp edits leave them layered, unsplit, and in their current mute state. The lighter strip along the bottom of a comp take clip is the same range gesture without holding Cmd; clicking the strip mutes or promotes the clicked take range. Muting leaves sibling states untouched; promoting a muted take mutes siblings in that range. Option-click does the same from the clip body; Shift+Option-click keeps the plain disable toggle for that take, including a Dub take you want to mute explicitly.

An ordinary comp take has a filled bottom strip with a highlighted upper edge.
A **Don't Comp** take shows a dark, diagonally hatched strip. Its clip and
waveform stay at normal weight because the take is layered and audible, not
disabled. The hit target is unchanged.
Comp take tracks omit clip-name labels so the waveform and comp strip stay
clear. Ordinary tracks and the parent comp bus keep their normal clip labels.

The comp bus lane shows faint, square-ended waveform bands for the enabled child takes you will hear. These are non-interactive overview cues, not clips on the bus; edit the corresponding clips on the child take tracks. When the group has no child clips, the comp bus lane shows no overview cue.

## Moving

Drag clips along the timeline or between compatible tracks. TayPE keeps clips aligned to the current snap and grid rules unless you deliberately bypass them. On comp take tracks, muted takes cannot initiate a move; they can still be selected and promoted from the bottom strip or with Option-click.

**Edit > Automation Follows Clips** defaults on. A same-track move carries all
automation points inside the moved clips; Option-drag and `D` copy those points
with the clips. The carried points overwrite existing automation across their
destination range, and one Undo restores the complete clip-and-automation
edit. Cross-track moves and clipboard paste do not carry automation. Comp-bus
automation stays fixed to the timeline. Turn the menu item off for the original
clip-only behaviour.

With playback stopped, moving a clip, trimming an edge, or adjusting a fade keeps the current timeline page in place even when the playhead is elsewhere. Follow Playhead controls playback paging; it does not recenter stopped edits.

## Creating Blank Clips

Cmd-drag across empty space on one track to create a silent clip for the dragged duration. On a VSTi track the clip includes an empty MIDI sidecar, ready for the MIDI editor. On other tracks it is a plain silent-audio clip. Double-clicking empty space on a VSTi track still creates a one-bar MIDI clip, or fills the empty gap around the click when the loop is enabled.

## Splitting

Split selected clips at the playhead with `\`. If no clips are selected, `\` instead splits the clip directly under the mouse pointer at the pointer position and leaves both resulting clips unselected. Use `Shift+\` to split the selection at every major and minor grid tick shown at the current zoom; that grid density applies across the complete selected clips, including off-screen portions. The split commands also live in the Edit menu, including split-at-loop-braces and split-all variants.

## Channel Conversion

Use **Edit > Conversion** to convert selected clips between mono and stereo. Use **Tracks > Conversion** to apply the same conversion to every clip on the selected tracks.

Conversion replaces the clip's stored audio with a new reel-owned WAV. If the clip already has committed derived audio from stretch, pitch, reverse, or ARA2 work, TayPE converts that current audio rather than reverting to the original source. Converting a clip that is already in the requested channel format is a valid no-op.

## Trimming

Drag clip edges to trim. The original media stays intact; the clip simply plays a different range. On comp take tracks, edge-resizing starts above the bottom comp strip, and muted takes cannot initiate an edge resize. Muted sibling takes do not block an active take's resize; right-trimming an enabled split take can extend that segment's source-out up to the real media end. Resizing an enabled clip into a sibling take cuts the sibling at the new boundary and mutes only the covered section.

When you zoom far out and a clip becomes very narrow, its edge grab areas shrink so the middle remains available for moving the clip. At the most extreme zoom, grab just outside the clip edge when you need to trim or stretch it.

## Slipping

Hold Cmd+Option and drag the clip body to move the audio inside the clip without changing the clip's timeline position or length. Fade, gain, trim, and stretch handles keep priority when you grab their hit zones. Slip editing is blocked while recording or while the clip is actively open in an ARA2 editor.

When the slipped audio moves beyond either source edge, that part of the clip remains visibly blank and plays silence at every UI scale.

## Clip Properties

Double-click a MIDI-backed clip to open its MIDI editor. Double-click any other
clip, or Cmd+double-click any clip, to open Clip Properties for exact clip
details and clip actions. The inspector reads top to bottom: Identity; a compact
properties grid with Appearance above Behaviour on the left and Timing/Pitch on
the right; contextual MIDI, Audio or Selection actions; Media Paths; then
**Done**. Media Paths starts collapsed and grows the window only while open.
**Done** applies a valid pending name, while Escape or closing the window
discards an unapplied name.

**Reverse** renders a reversed copy through the model transaction system, so
the reel owns the derived audio and undo/redo treats the change like any other
clip edit. In multi-selection the processing actions are explicitly named
**Reverse Selection**, **Split Selected Stems**, and **Join**.

After a material MIDI edit, **Restore OG MIDI** returns the clip to its
immutable recorded, imported, joined, or first-authored MIDI performance. TayPE
renders that performance through the track's current instrument; it does not
restore an old plug-in preset. Timeline position, audible window, duration,
fades, stretch and clip pitch remain intact. The operation is undoable, and
TayPE asks first if restoring would remove ARA2-derived edits.

The Behaviour panel contains **Disabled**. For clips on comp take tracks it also
shows **Don't Comp**. Turn it on to keep that take layered and untouched
when another take is promoted or an overlapping comp edit is made. The clip can
still be muted explicitly. When every clip in a multi-selection belongs to a
comp take track, the same control applies to the whole selection; selections
that include an ordinary-track clip do not show it.

On macOS, the MIDI editor's green window button enters and exits full-screen
mode. Selecting another MIDI clip while the editor remains open keeps that
full-screen window posture. Closing and reopening the editor restores its last
normal window size and position independently of full-screen state.
The piano-roll rows and time grid always fill the visible editor width when the
window is resized, including the area beyond a short clip.

The top-left keyboard corner is one four-part control group. **Flip** reverses
the visible pitch order. **Zoom Link** defaults on, sharing horizontal zoom with
the arranger; turn it off to keep and remember an independent MIDI zoom.
**Follow Link** defaults on, using the arranger's Follow setting; detached means
the MIDI editor stays still while arranger Follow continues normally.
**Quantise Grid** defaults on; turn it off when ordinary note editing should use
the arranger's exact current grid instead. These are view preferences and do
not make the MIDI draft dirty.

While the MIDI editor is open, playback follows the notes currently shown in
the piano roll. Starting or seeking into the middle of a held note sounds it
immediately for its remaining length. At a loop or clip boundary, TayPE ends
only the notes and sustain that cross that boundary, then starts the next lap's
notes cleanly; it does not reset the whole instrument and lose the first note.
Closing the MIDI editor ends its currently sounding audition and playback
notes before returning to the rendered clip preview.

In the MIDI editor, click an existing note to select it, or click empty
piano-roll space to clear any existing note selection and add an unselected
note at the active editing rail at or immediately before the pointer in the
same gesture; it never jumps to the following rail. That rail comes from the
selected straight, triplet, or hardware Quantise grid by default, or from the
arranger grid when Quantise Grid is off. Dragging empty space still marquee-selects.
Double-clicking empty space leaves that single new note in place and consumes
the second click without moving the playhead, while double-clicking an existing
note deletes it. Right-clicking empty space moves the playhead without changing
note selection; right-dragging a note still edits velocity.
Backspace follows the arranger's mute behaviour for selected notes: if the
selection contains any audible note, it mutes the whole selection; if every
selected note is already muted, it unmutes them all. Muted notes stay visible,
selectable, and editable with a dimmed treatment, but do not audition, play, or
render. The forward Delete key permanently removes selected notes. Mute state
survives Commit and reopening the editor, and is preserved by copy, paste, and
duplicate.
When notes are selected, Escape clears the selection on its first press and
keeps the editor open; a second press with no selected notes requests close.
Return commits the MIDI editor instead of triggering the arranger's record
shortcut. If playback is running, Commit stops it before rendering the edited
MIDI through the instrument; quantising and other note edits remain available
while playback runs. Recording and Print Mix must be stopped before Commit.
Cancel, the selection-free Escape close, and the native window close button all
warn before abandoning uncommitted changes.
Use the **CTRL** button at the lower left to show the MIDI control editor.
The left-aligned selector puts Pitch Bend, Mod Wheel, CC11 Expression, and CC64
Sustain first, followed by the remaining CC numbers. The **With data** checkbox
beside it hides targets that have no events in the open clip while keeping that
composer-first order. Controllers that already have events stay yellow in both
the full list and the filtered list. If no controller data exists, the selector is disabled
until **With data** is turned off. This filter only changes the editor view and
is not saved with the reel.
Click a controller point to select it, click empty lane space to add a point,
drag empty lane space to marquee-select points by time, and drag any selected
point to move the whole selected set.
Cmd+A selects all points in the current controller, Delete or Backspace removes
the selection, and Escape clears it. Double-click a point to delete it.
Cmd-drag draws controller values as a
freehand pencil stroke, following each change in pointer direction. With
arranger Snap on, drawn times land on the editing grid; with Snap off they
follow the pointer freely and keep a best-fit shape instead of a fixed-time
staircase. Continuous controllers and pitch bend interpolate between sparse
points on playback, rerender, and MIDI out; stepped controllers such as
sustain stay stepped. The
underlying MIDI points appear when hovered or selected rather than covering the
stroke with dots. Holding Cmd over the controller plot changes the mouse
pointer to a pencil and keeps it visible for the stroke.
Cmd-drag draws notes following the pointer pitch at each active editing-grid onset,
including smooth diagonal strokes between mouse events; add Shift to lock the
whole stroke to its starting pitch. With Quantise Grid on, each drawn note
fills one selected Quantise-grid cell, from one grid line to the next,
regardless of the remembered note length. With arranger-grid editing selected,
drawn starts use arranger rails and notes use the ordinary remembered entry
length. A stroke started from an existing note begins on the first active
editing-grid line at or after that seed note ends, then follows consecutive
rails even when the pitch changes. Hardware-groove strokes follow the actual
groove lines. A newly drawn note deletes any whole existing note it overlaps on the
same pitch and MIDI channel; notes on different pitches and channels remain
untouched. Holding Cmd over the note grid changes the mouse pointer to a pencil
and keeps it visible for the stroke. Option-drag from a note copies and moves
the selected notes, while
Option-click without a drag leaves note content unchanged. Cmd+Option-click or
drag runs the free eraser across time and pitch, whether it begins on a note or
in empty space.
Cmd+Option+Shift-click or drag locks the eraser to the pitch row where the
mouse went down, deleting every crossed note on that row without touching
neighbouring rows. Double-clicking a note remains the fastest single-note
delete gesture. Cmd+C,
Cmd+X, and Cmd+V copy, cut, and paste note selections, with paste anchoring the
earliest note at the shared playhead and preserving the phrase relationships.
The configured clip-duplicate shortcut (`D` in the default profile) duplicates
the selected notes at the first active editing-grid boundary at or after the selection end
where the complete group fits without a same-pitch/channel collision. Occupied
destinations are skipped, phrase timing and note properties are preserved, and
the copies become the new selection.
New notes initially use velocity 90 and the current quantise length. Selecting
one note makes its length and velocity the defaults for later note entry;
resizing it or changing its velocity updates those defaults. Changing quantise
always sets the entry length while retaining velocity, even when notes are
selected; the selected notes themselves are unchanged. Reselecting the active
quantise menu item performs the same entry-length reset. This does not change
the selected Quantise value. With Snap enabled, the grid selected by Quantise
Grid controls note entry, movement, resizing, nudging, hovered-note splitting,
duplicate placement, and editor seeks. Turning Quantise Grid off does not change
the grid used by the explicit Quantise action.
The crotchet button immediately before the quantise menu switches new-note
length from that remembered default to the quantise cell beneath the pointer.
It starts off and remembers its state while TayPE remains open, even if you
close and reopen the MIDI editor. With the crotchet on and Snap enabled, a new
note fills the cell from the preceding quantise line to the following line,
including uneven hardware-groove cells. With Snap off, the note starts exactly
where you click and uses the selected straight note value. Changing the
quantise menu still updates the remembered default length whether the crotchet
is on or off. While arranger-grid editing is selected the crotchet is disabled
and has no effect, but its requested state is retained and returns when
Quantise Grid is switched on again.
Relative snap preserves a moved or resized note edge's original offset from that
grid; absolute snap places the edge directly on the grid.
Dragging a note's right edge can shorten it to a fixed 1 ms minimum. This
safety floor does not change with the quantise value, remembered entry length,
or Snap setting.
The footer presents the crotchet, division, Strength, and Capture settings
before the Quantise action. Capture follows the midpoint between adjacent
timing lines, so 100% reaches every note even across irregular hardware-groove
spacing. The wider division menu also offers straight triplets and captured
hardware grooves. Divisions with available grooves open a single submenu
containing Straight and the machine-labelled patterns. The larger 1/16 list
groups its hardware patterns into one further submenu per machine; other
groove divisions stay flat, and divisions without grooves remain direct menu
choices. A selected groove repeats from Cut zero across four bars.
While the MIDI editor is active, Q applies the current Quantise settings.
Ctrl+Q moves to the next top-level division and Ctrl+Shift+Q moves to the
previous one, wrapping in either direction and remembering the last Straight
or groove option used in each division. Option+Q moves to the next option in
the current division and Option+Shift+Q moves to the previous one, including
all hardware grooves and wrapping without changing division. On macOS, Cmd+Q
begins TayPE's normal safe quit process directly.
Its timing points are drawn through the note lanes while Quantise Grid is on.
When Quantise Grid is off, the body uses the arranger's exact current Auto or
fixed rails and Cut-zero phase. The pinned ruler always follows that arranger
timeline division.
When adjacent same-pitch notes overlap after quantising, both timing positions
stay on their chosen rails and the earlier note shortens to the later onset. If
several notes land on the same rail, TayPE keeps the longest, or the loudest
when their lengths tie.
Moving or trimming the clip does not automatically re-quantise it: press
Quantise again when you want the notes moved to the newly positioned groove.
TayPE refreshes its factory patterns in the Grooves folder inside TAPE_HOME at
startup. You can add your own four-bar JSON groove files there; TayPE loads them
the next time it starts and leaves them untouched.
Each newly created note auditions briefly through the editor instrument.
With Snap enabled, its start follows the active editing grid regardless of zoom
or remembered note length. Snap-off uses the exact pointer time.
When moved notes overlap unselected notes on the same pitch and MIDI channel,
the moved notes win: covered notes are removed, edge overlaps are trimmed, and
a longer underlying note is split around the dropped note.
The MIDI editor never leaves two notes overlapping on the same pitch and MIDI
channel. Quantising or otherwise moving notes trims the earlier note to the
later start; exact-start collisions keep the note that was later before the
edit. Chords and notes on different MIDI channels are unaffected.
During playback, linked MIDI Follow uses the arranger's Follow setting with the
same paged behaviour, including when the transport begins before the open clip.
Turn Follow Link off to stop automatic MIDI paging without changing arranger
Follow.
Home and End seek to the open MIDI clip boundaries and horizontally page the
piano roll to reveal the destination even when it was previously off-screen.
While the MIDI editor is active, Shift+Plus and Shift+Minus zoom the piano roll
vertically around the centre of its visible pitch range.
The configured split shortcut cuts selected notes crossing the shared
playhead. When nothing is selected, it instead cuts only the note beneath the
mouse: at the nearest active editing-grid line with Snap enabled, or at the
exact pointer position with Snap off. If the mouse is not
over a note, nothing is cut. The shortcut never splits the arranger clip behind
the editor.
With no note selection, plain Left and Right move the shared playhead by the
arranger's visible ruler tick instead of scrolling the piano roll. When notes
are selected, Left and Right nudge those notes by one active editing-grid
interval.
Up and Down move selected notes by one semitone; Cmd+Up and Cmd+Down move them
by one octave.

Pitch-shifted clips show their combined semitone-and-cent shift beside the
sharp glyph, rounded to the nearest whole semitone. With clips selected, use
Option+Up/Down to shift them by one semitone or Option+Shift+Up/Down to shift
them by one octave. Multi-selection shifts are relative, clamp at two octaves,
preserve cents, and form one undo step.

### Media Paths

Clip Properties shows reel-owned media paths relative to the reel where
possible. **Clip Audio Actual** is the file currently heard; **Reel Store
Audio** is the committed Layer 1 audio. **Clip MIDI Actual** is the current
editable MIDI revision; **Reel Store MIDI** is the immutable original used by
Restore OG MIDI. **Import Source** is external provenance when TayPE knows it
and is not used for restoration. Equal actual/store paths remain visible;
`n/a` means that value is genuinely unavailable.

## Gain, Fades, and Crossfades

Clip gain adjusts the clip before the channel strip. With clips selected, **Fade** toggles their edges at the default fade length, which starts at 2 ms and can be changed in **Preferences > General**. With no clip selection, point at the first half of a clip and press the Fade shortcut to set its fade-in from the clip start to the exact pointer position; point at the second half to set its fade-out from the pointer to the clip end. The other edge stays unchanged, and existing crossfade-bound edges are protected. Overlapping compatible clips can create crossfades where their edges meet. Hold **Shift** while moving or edge-resizing a clip, or **Option+Shift** while drag-copying, to magnetically attract it to neighbouring clip edges for a clean butt. For resize, the left trim edge sticks to the previous clip end and the right trim edge to the next clip start. Continue past the magnetic point to place through the edge without creating an automatic crossfade. Ordinary tracks use hard-cut placement. Comp take tracks do not auto-crossfade; they retain their default-length splice-edge fades and sibling-take resolution instead. Moving, copying, dropping, importing, or edge-resizing an enabled comp take into a sibling take cuts the sibling at the edited clip boundary and mutes only the newly covered segment; sibling material that was already muted remains muted and does not block the edit. Dub takes are excluded from this automatic comp muting and remain structurally untouched until you mute or edit them explicitly. Dropping a clip wholly inside another clip cuts/splits the existing clip without creating a crossfade, even when one boundary lines up; a dropped clip that fully covers another replaces it.

## Clipboard

Copy and paste clips between compatible tracks. TayPE preserves timing and clip data where the destination supports it.

## ARA2

Choose an editor from the top-level **ARA2** menu, then open it from a clip.
Melodyne is the default when you have not selected another available ARA2
plug-in. ARA2 editing is clip-scoped, not a normal insert slot.

Use Option-double-click on a single selected clip, the ARA2 glyph on a prepared
clip, or Clip Properties. Clip Properties names the selected provider in its
**Transfer to** and **Edit in** buttons. A clip being edited is protected from
destructive clip edits until the editor closes. The provider window opens as
soon as the clip session is ready; TayPE does not hold it behind an analysis
screen, so provider analysis remains visible or retriggerable in the plug-in.
The editor uses a normal macOS window. Keys the plug-in does not use pass
through to TayPE, so transport and session shortcuts remain available without
moving focus back to the main window.
Each ARA2 plug-in also remembers its last-used controls globally, across clips,
reels, and TayPE launches. This is a provider default, not hidden per-clip edit
history: committed ARA work remains derived audio. Choosing a provider from the
ARA2 menu loads it ready for editing. Each clip gets a fresh ARA2 session, while
the selected provider's ordinary controls carry across globally to the next
clip. When switching clips, TayPE finishes the current render before closing
its editor and opens a fresh editor on the new clip. A failed render returns to
the same editor and keeps the uncommitted work available. Provider transport
controls can play, pause, seek, and set a cycle in TayPE; their clip-local
positions are mapped onto the clip's place in the main timeline.
TayPE's main transport auditions edits live while the window is open. Each
later ARA2 pass works from
the clip's current derived audio, so you can commit work in one provider and
then process that result in another. **Restore OG Audio** removes the ARA2
derived work while preserving the clip's existing stretch or pitch settings.
