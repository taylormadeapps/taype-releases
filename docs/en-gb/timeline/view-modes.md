# View Modes

Four view filters help you focus on what matters. All are toggles:

| Shortcut | Mode | What It Does |
|----------|------|-------------|
| F | Focus | Show only tracks with clips at the tape head while it moves, or inside the active loop range |
| A | Archive View | Toggle between active tracks and archived tracks |
| G | Spill | Show the selected bus (or master) and all tracks routed directly to it |
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
