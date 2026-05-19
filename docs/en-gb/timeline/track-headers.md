# Track Headers

Each track header shows the following controls. At very small track heights, some labels are hidden until you zoom in.

Track selection lives on the header. Clicking clips or automation points in
the arranger does not change which track is selected. **Cmd-click** toggles
headers into or out of the track selection, including deselecting the last
selected track. **Shift-click** extends the selection as a visible range.

![Track headers](../../../assets/img/docs/track-headers.png)

## Controls

- **Colour strip** — click to change the track colour from 24 swatches
- **Track name** — double-click to rename (only when stopped). Press Return to commit, or Escape / click away to cancel. With popup help enabled, hovering shows the full title. If popup help is off, TayPE still reveals the full name when the title pill is actually clipped.
- **Tags** — opens the tag cloud popup for this track
- **R** — record arm (red circle when armed). The channel strip shows the same armed state for the selected track. The Tracks menu has **Record Follows Select** on by default, so a non-empty track selection arms the selected recordable tracks and disarms tracks outside that selection.
- **MON** — software monitoring (hear input through the track channel strip). In the arranger header this now uses the same button shell as mute/solo, but keeps the speaker glyph instead of a letter. **Auto Monitor** in the Tracks menu is off by default; when you turn it on, record-arm changes on regular audio and instrument tracks mirror into MON. Buses, the master, and comp-child tracks are excluded, and MON can still be toggled independently, including during playback.
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
- **S** — solo. `Cmd-click` clears other explicit solos first, then solos this
  track while preserving the normal route-aware solo path through downstream
  buses.
- **Cancel Solo** — on the master header, the normal per-track **S** button is
  replaced by a yellow `S`-with-`X` button that clears every current solo in
  the session.
- **Tag pills** — at larger track heights, assigned tags appear as pills below the button row
- **I/O labels** — input source and output destination (click to change).
  Header routing changes are live during playback, with the same brief graph
  fade/skip policy as the channel strip. Recording still blocks routing
  changes.
- **Mini meter** — single post-fader meter. The body uses the summed RMS of
  the track, follows the same green / yellow / red meter-scale zones as the
  strip mini meters, and the separate peak tick follows the hotter channel
  while staying neutral until clip. Record-armed audio tracks still show live
  input here with **MON** off, matching the channel strip, so you can check
  incoming level without adding it to the cue mix.

At medium and tall heights, the full button row stays pinned directly under the title.

## Tag Cloud

Click **Tags** on a track header to open the tag cloud.

- **All / Global / Reel** filters the cloud scope
- Search field live-filters tag names
- Click a tag to toggle it on/off for that track
- Right-click a tag to edit its name and optional colour, or clear the colour
- Assigning a coloured tag sets the track colour to that tag colour
- **New Tag** opens inline creation with scope choice:
  - **Global** tags are shared across reels on this machine
  - **Reel** tags are saved in the reel and travel with it, including any
    reel-local colour unless a global colour exists for the same tag

The popup stays open while you assign multiple tags. Click outside or press **Done** to close.
