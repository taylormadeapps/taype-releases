# View Modes

Four transport view filters help you focus on what matters. All are toggles:

| Shortcut | Mode | What It Does |
|----------|------|-------------|
| F | Focus | Show only tracks with clips at the tape head while it moves, or inside the active loop range |
| X | Archive View | Toggle between active tracks and archived tracks |
| G | Spill | Show the selected bus or master, or all selected spill-capable buses/masters, plus tracks routed directly to them |
| E | E-Zoom | Zoom to fit the selected clip |

Record-armed and monitored tracks stay visible in clip-based Focus. Selected
tracks do not punch through Focus on their own. The master track stays visible
through every filter mode.
If archived tracks exist while Archive View is off, the transport Archive
button warns with yellow text and a yellow outline so you know hidden
material is parked there, while the button fill stays neutral. When you newly
archive a track with Archive View still off, that button flashes between its
normal look and that yellow outlined warning four times, then settles there.
If the channel strip was already open, toggling Archive View keeps it open
and retargets it to a visible track in the new view instead of snapping shut.
That same retargeting also happens when you archive the currently selected
track with Archive View off, so the open strip does not disappear on you. If
that leaves the current view completely empty, the strip still stays open on
the last affected track instead of snapping shut.

Focus can also be driven by MCP with a specific tag (Focus-by-Tag). When you pick more than one tag, the transport popup's OR / AND toggle decides whether TayPE shows tracks matching any selected tag or only tracks matching them all. The transport **Tags** popup also includes a **USED / ALL** toggle: **USED** shows only tags currently assigned on tracks in the open reel, while **ALL** restores the full tag cloud. The popup also includes a **Select** button that selects all matching tracks under the current OR / AND tag mode.
Archive View chooses the base track set first. After that, Focus, tag Focus,
and Spill intersect cleanly instead of one filter overriding the others.
Focus, Archive View, Spill, and tag-filter state are transient session view
modes: they are not stored in the reel, and relaunching TayPE clears them.
Ruler mode, automation view, popup help, and the timeline's snap preferences
still persist as app-global settings.

## Automation View

Automation is a separate ruler-header mode, not one of the transport view
filters above. Press **A** or use the ruler's **A** button to toggle it.
Archive View moves to **X**.

Left-click that ruler button, or press **A**, to switch the whole timeline between normal clip
view and automation view. Right-click it to choose whether the automation
overlay shows **Volume**, **Pan**, or **Width**. TayPE starts on **Volume**.

When automation view is on, every visible track shows the chosen parameter as
breakpoint lines over the clips. The clips stay visible as a backdrop, but
clip editing is blocked until you leave automation view.
Volume automation draws in yellow, pan automation draws in orange, and width
automation draws in blue. The ruler **A** follows that same colour so you can
tell at a glance which parameter the lane is showing.
Volume automation is shown on a straight dB ladder from **-60 dB** to
**+12 dB**, with the floor still meaning hard mute.
Clip view and automation view remember separate snap modes. The normal
timeline starts with snap on, while automation view starts with snap off.
Single-click in the lane to select the nearest automation point on that track,
double-click empty lane space to add a new point, double-click an existing
point to delete it, drag selected points to move them, and use **Backspace**
to delete the current selection. Dragging a marquee across the timeline works
by time range on touched tracks: if the box covers any part of a track row,
TayPE selects every automation point on that track whose time falls inside the
box, even if the point itself sits above or below the marquee.

Automation playback still runs whenever the transport runs and the track has
automation data. The automation button changes what you see and what
**Record** writes; it does not turn automation playback on and off.
When automation view is on, the transport **Record** button also carries a
white **A** badge so it reads as automation capture at a glance.
When transport is stopped, moving the playhead through an automation section
updates the live channel-strip preview to the value parked under the head.
