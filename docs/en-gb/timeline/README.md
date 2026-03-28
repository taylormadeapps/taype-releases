# The Timeline

The timeline is where you see your session laid out in time. Tracks run top to bottom, time runs left to right. The tape head — a vertical line — shows the current playback position.

![Timeline overview](../../../assets/img/docs/timeline-overview.png)

## Layout

The left column shows **track headers** with controls. The main area shows **clips** — rectangles filled with waveforms representing your audio. When automation view is on, those same lanes show a breakpoint line over the clips for the chosen parameter.

Track header colour pickers preview on single swatch click, and a swatch
double-click commits that colour and closes the picker straight away.

When you select a track, TayPE keeps the row highlight restrained: a faint fill
with crisp white guide lines at the top and bottom of the selected lane.
Idle track headers keep a translucent tint of the track colour. Only the
selected header deepens into a slightly darker version of that colour, so the
active row reads clearly without making every header a solid block.
Bus and master rows now leave a slightly taller shared-panel seam above and
below the coloured header body, so routed groups stand apart without blowing
out the whole arranger spacing. The selected-lane white guide lines respect
that seam too, so they sit on the real bus/master row body instead of the gap.

The **ruler** along the top shows time. Press **T** to toggle between minutes:seconds and bars|beats. Each Cut can define its own zero point, so the ruler and transport counter can read from a section start instead of absolute timeline start. In bars|beats mode, that zero point becomes bar `1.1`, and bars to the left read as negative. The tape-head marker stays on the timeline side of that ruler, so it doesn't crash into the left toolbar block. Track headers, selected-lane guides, drag highlights, and reorder indicators stay clipped below the ruler too, so zooming and vertical scroll can't smear lane paint into the toolbar.
When a reel opens, TayPE gives the arranger a musical default view: roughly the
first 16 bars from bar 1 of the current Cut, instead of some arbitrary fixed zoom.

The **transport bar** runs along the bottom. It has playback controls, BPM, and position readout in the middle, then a Cut actions menu for **New / Duplicate / Rename / Delete** and a Cut selector showing the active Cut name at the start of the right-hand utility cluster. The Cut actions menu sits immediately to the left of the selector. The left-side view buttons are: **Show Mixer**, **Mixer Width**, **Focus**, **Tags**, **Spill**, **Archive**. The Mixer Width icon now stays visible in both views. In mixer view it flips the desk between the narrow half-width strips and the full-width strips. In timeline view it flips the docked channel strip between those same widths, and if the strip was hidden it opens it for you; if the mixer is floated, that same toggle keeps the detached desk in step instead of letting it hijack the arranger control. The slot still stays fixed, so the rest of the transport controls do not jump. Double-click the BPM label to type an exact tempo; Return commits, while Escape or clicking away cancels. Right-click the record button to choose **Return**, **Punch**, or **Do-Over** record mode. The **?** popup-help toggle lives at the far right of the transport bar. When TayPE needs to warn you about a rejected routing move or similar, it flashes a solid yellow bar just above the transport for about three seconds instead of covering the controls.

Next to the DSP meter there's a small **MCP** lock indicator. It lights red while an MCP transaction is active — right-click it to abort the lock.

With **Help → Popup Help** enabled, hover help appears after about **0.7 seconds** on ruler buttons, track-header controls, clips, fades, gain lines, and crossfade regions.

### Ruler Header Controls

The left side of the ruler has quick controls:

- **Channel Strip** — show/hide the channel strip side panel; track selection updates it only when the panel is already open
- **+** — add a new track; if you already have a track selected, the new one drops in immediately after it
- **Snap** — toggle grid snap; press **S** to flip it from the keyboard
- **A** — automation view; left-click toggles automation editing for all visible tracks, right-click chooses whether the overlay shows **Volume**, **Pan**, or **Width**
- **Metronome** — toggle click on/off
- **Ruler Mode** — switch between time and bars|beats

This ruler-header **A** is separate from the transport **Archive** shortcut on **X**.

Right-click in the upper ruler area to open the zero-point menu:

- **Set 0 at Playhead** — make the current tape-head position the selected Cut's new `0:00`
- **Reset 0 to Start** — restore that Cut's zero point to the beginning

The lower ruler tick band keeps the existing right-drag pan/zoom gesture.
