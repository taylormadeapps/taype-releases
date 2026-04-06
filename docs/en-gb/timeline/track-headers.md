# Track Headers

Each track header shows the following controls. At very small track heights, some labels are hidden until you zoom in.

Track selection lives on the header. Clicking clips or automation points in
the arranger does not change which track is selected.

![Track headers](../../../assets/img/docs/track-headers.png)

## Controls

- **Colour strip** — click to change the track colour from 24 swatches
- **Track name** — double-click to rename (only when stopped). Press Return to commit, or Escape / click away to cancel. With popup help enabled, hovering shows the full title. If popup help is off, TayPE still reveals the full name when the title pill is actually clipped.
- **Tags** — opens the tag cloud popup for this track
- **R** — record arm (red circle when armed). The channel strip shows the same armed state for the selected track.
- **MON** — software monitoring (hear input through the track channel strip). In the arranger header this now uses the same button shell as mute/solo, but keeps the speaker glyph instead of a letter. On instrument tracks, MON stays visible and can be toggled separately from record arm. When record arm mirrors monitoring on or off for an instrument track, the MON lamp follows that change straight away.
- **Bus** — the arranger header badge is display-only. Plain bus toggling and
  **Cmd-click** comp-mode entry live on the channel-strip bus glyph instead.
  In comp groups, child take headers hide **R**, **MON**, and both I/O
  selectors because the comp bus owns those controls for the whole group.
  The comp bus header also draws a blue outline around the whole visible
  comp block, with a small +/- square in the top-left corner to hide or
  show the child take headers. The mixer shows that same blue comp-group
  frame and collapse toggle across the visible bus-plus-child strip run.
  That folded/expanded state is saved with the reel.
  On the arranger lane itself, the comp bus also paints faint,
  non-editable "quasi clips" wherever hidden or visible child takes contain
  clips, so you still get a read on where audio lives when the group is
  folded up. `Cmd-click` on a non-empty comp bus does not silently fail:
  TayPE asks whether to flatten the group to one clip on that track, and
  confirming removes the child take tracks and leaves a normal track behind.
- **M** — mute. When it is on, the button lights in a softer red than the record arm lamp so the two states stay related without reading the same.
- **S** — solo
- **Tag pills** — at larger track heights, assigned tags appear as pills below the button row
- **I/O labels** — input source and output destination (click to change)
- **Mini meter** — single post-fader meter. The body uses the summed RMS of
  the track, follows the same green / yellow / red meter-scale zones as the
  strip mini meters, and the separate peak tick follows the hotter channel
  while staying neutral until clip.

At medium and tall heights, the full button row stays pinned directly under the title.

## Tag Cloud

Click **Tags** on a track header to open the tag cloud.

- **All / Global / Reel** filters the cloud scope
- Search field live-filters tag names
- Click a tag to toggle it on/off for that track
- **New Tag** opens inline creation with scope choice:
  - **Global** tags are shared across reels on this machine
  - **Reel** tags are saved in the reel and travel with it

The popup stays open while you assign multiple tags. Click outside or press **Done** to close.
