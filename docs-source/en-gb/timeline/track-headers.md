# Track Headers

![Track headers](../../../assets/img/docs/track-headers.png)

Track headers hold the controls you need before reaching for the mixer.

## Controls

* **Name**: double-click to rename.
* **Mute / Solo**: silence or isolate tracks.
* **Tag**: apply and filter by track tags.
* **Archive**: move a finished track out of the main working set.
* **MON**: monitor input or instrument output.
* **Record**: arm the track for recording.
* **Input / Output**: choose routing.
* **Bus**: turn a track into a bus or comp group where supported.

The follow-playhead control lives in the timeline header toolbar, not inside each track header. It keeps playback visible while leaving selected-track focus alone.

## Multi-output instruments

When a VSTi exposes enabled auxiliary stereo outputs, ordinary audio tracks
show an **Instrument Outputs** section in the Input menu. Open the source-track
submenu, then choose a pair such as `3/4` to feed that output into the
destination before its trim, preamp, EQ, compressor, inserts, fader, and sends.
Turn on **MON** to hear the route, or arm the destination to record it.

The instrument's first stereo output always remains on its own track. Assigned
auxiliary outputs stop being discarded; unassigned outputs remain silent. If a
saved output is unavailable, TayPE keeps the assignment and reports it instead
of substituting another output.

## Selection

Click a header to select the track. Cmd-click toggles tracks into the visible selection. Shift-click extends a range. The first selected track remains the primary track for the docked strip and focused hardware control.

## Reordering

Drag unused space in a track header vertically to move the track. The insertion
line shows where it will land.

A comp group stays intact while you reorder it. Dragging the comp bus moves the
bus and every child take track together, in their existing order. When the group
is collapsed, its single visible row still represents that complete block.
Individual child tracks can be rearranged inside their own comp group, but
cannot be dragged outside it or through another group's boundary.

When exactly one ordinary or comping bus is selected, **Add Audio Track**
creates the new track inside that bus. Ordinary buses receive it as a routed
input. Comping buses receive a new child take track with the bus input and an
incremental name such as `Lead Vocal - 1`. If a comp child is selected, the
new track becomes its sibling inside the same comp group and is inserted
immediately after it. Multi-selection disables this automatic parenting.

Cmd-click the blue Bus control on a non-empty comping bus when you are ready
to leave comp mode. A required confirmation warns that all Cuts will be
flattened and the shared child take tracks removed. If you continue, TayPE
renders the audible comp offline in every Cut, placing a separate flattened
clip in each Cut that has comp material before turning the former bus into a
normal audio track. Enabled loop braces do not repeat or shorten the flatten.
The whole operation is one undo step; if any Cut cannot be rendered, the comp
group and every Cut remain unchanged.

The flattened audio includes the child tracks' channel-strip settings because
those tracks feed the comp bus. It is captured before the comp bus's own
channel strip. The former bus keeps that strip live, so its trim, processing,
inserts, width, pan, and fader are not baked into the clip or applied twice.

Turn on **Grouped Track Controls** from the Tracks menu, with **Cmd+G**, or
from the **GRP** transport indicator to control a selection together. Clicking
Mute, Solo, MON, or Record on a selected arranger header then applies the
clicked track's new state to every compatible selected track. Turn grouped
controls off to change only the clicked track. Input routing stays
primary-track only.

## Tag Cloud

The Tag popup lets you add labels such as `Vocal`, `Guitar`, `Print`, or your own categories. Tags help with filtering, selection, and keeping large reels sane.

## Archive View

Archived tracks are kept with the reel but hidden from the main working surface until Archive View is enabled. Use archive for printed stems, safety tracks, old takes, and anything you want preserved without cluttering the current pass.
