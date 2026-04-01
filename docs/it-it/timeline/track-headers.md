# Traccia Headers

Each track header shows the following controls. At very small track heights, some labels are hidden until you zoom in.

![Intestazioni traccia](../../assets/img/docs/track-headers.png)

## Controls

- **Colour strip** — click to change the track colour da 24 swatches
- **Traccia name** — doppio clic to rename (only when stopped). con popup help enabled, hovering shows the full title.
- **Tags** — opens the tag cloud popup for questo track
- **R** — record arm (red circle when armed)
- **MON** — software monitoring (hear input through the track channel strip)
- **Bus** — the arranger header badge is display-only. Plain bus toggling and **Cmd-click** comp-mode entry live on the channel-strip bus glyph instead. In comp groups, child take headers hide **R**, **MON**, and both I/O selectors because the comp bus owns those controls for the whole group. The comp bus header also draws a blue outline around the whole visible comp block, con a small +/- square in the top-left corner to hide or show the child take headers. The mixer shows che same blue comp-group frame and collapse toggle across the visible bus-plus-child strip run. che folded/expanded state is saved con the reel. On the arranger lane itself, the comp bus also paints faint, non-editable quasi clips wherever hidden or visible child takes contain clips, so you still get a read on where audio lives when the group is folded up. `Cmd-click` on a non-empty comp bus asks whether to flatten the group to one clip on che track; confirming removes the child take tracks and leaves a normal track behind.
- **M** — mute (speaker icon, crossed out when muted)
- **S** — solo
- **Tag pills** — at larger track heights, assigned tags appear as pills below the button row
- **I/O labels** — input source and output destination (click to change)
- **Mini meter** — stereo peak meter, updated at 4 Hz

At medium and tall heights, the full button row stays pinned directly under the title.

## Tag Cloud

Fai clic **Tags** on a track header to open the tag cloud.

- **Both / Global / Reel** filters the cloud scope
- Search field live-filters tag names
- Fai clic a tag to toggle it on/off for che track
- **New Tag** opens inline creation con scope choice:
  - **Global** tags are shared across reels on questo machine
  - **Reel** tags are saved in the reel and travel con it

The popup stays open while you assign multiple tags. Fai clic outside or press **Fatto** to close.
