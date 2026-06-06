# The Timeline

The timeline is where you see your session laid out in time. Tracks run top to bottom, time runs left to right. The tape head - a vertical line - shows the current playback position.

![Timeline overview](../../../assets/img/docs/timeline-overview.png)

## Layout

The left column shows **track headers** with controls. The main area shows **clips** - rectangles filled with waveforms representing your audio. When automation view is on, those same lanes show a breakpoint line over the clips for the chosen parameter.

In the normal theme, the arrange background is a softer charcoal work surface
with a quiet tonal falloff, and clip waveforms take their tone from the clip
colour until selected, when the waveform and clip outline switch to the cream
waveform tone. High contrast keeps the harder dark background while using the
same selected-clip banding language.

Track header colour pickers preview on single swatch click, and a swatch
double-click commits that colour and closes the picker straight away.

When you select a track, TayPE keeps the row highlight restrained: a faint fill
with soft guide lines at the top and bottom of the selected lane.
In the normal theme, track headers use a subtle track-colour gradient with
small lower-right button shadows. Only the selected header deepens into a
slightly darker version of that colour, so the active row reads clearly without
making every header a solid block. Uncovered header-column space uses the same
soft arrange-bed gradient as the timeline body. High contrast keeps solid
header fills.
Bus and master rows now leave a slightly taller shared-panel seam above and
below the coloured header body, so routed groups stand apart without blowing
out the whole arranger spacing. The selected-lane guide lines respect
that seam too, so they sit on the real bus/master row body instead of the gap.

The **ruler** along the top shows time. Press **T** to toggle between minutes:seconds and bars|beats. Each Cut can define its own zero point, so the ruler and transport counter can read from a section start instead of absolute timeline start. In bars|beats mode, that zero point becomes bar `1.1`, and bars to the left read as negative. The tape-head marker stays on the timeline side of that ruler, so it doesn't crash into the left toolbar block. Track headers, selected-lane guides, drag highlights, and reorder indicators stay clipped below the ruler too, so zooming and vertical scroll can't smear lane paint into the toolbar.
When a reel opens, TayPE gives the arranger a musical default view: roughly the
first 8 bars from bar 1 of the current Cut, instead of some arbitrary fixed zoom.

The **transport bar** runs along the bottom. It has playback controls, BPM, and position readout in the middle, then a Cut actions menu for **New / Duplicate / Rename / Delete** and a Cut selector showing the active Cut name at the start of the right-hand utility cluster. The Cut actions menu sits immediately to the left of the selector. The left-side view buttons are: **Show Mixer**, **Mixer Width**, **Focus**, **Tags**, **Spill**, **Archive**. The Mixer Width icon now stays visible in both views. In mixer view it flips the desk between the narrow half-width strips and the full-width strips. In timeline view it flips the docked channel strip between those same widths, and if the strip was hidden it opens it for you. Those two width choices are remembered separately, with missing preferences defaulting the arranger strip to wide and the mixer to skinny. If the mixer is floated, **W** follows the focused window: the detached mixer toggles mixer width, while the focused arranger still controls the docked strip. The separate **View > UI Scale** submenu compacts or enlarges the whole app at 75%, 80%, 90%, 100%, 110%, 125%, or 150%; use **Cmd+Option+-** and **Cmd+Option+=** to step through those presets. That choice is remembered globally. At larger scales on smaller displays, the transport bar drops lower-priority readouts/buttons before letting controls overlap. The slot still stays fixed, so the rest of the transport controls do not jump. Double-click the BPM label to type an exact tempo; Return commits, while Escape or clicking away cancels. Right-click the record button to choose **Return**, **Punch**, or **Do-Over** record mode. The **?** popup-help toggle lives at the far right of the transport bar. When TayPE needs to warn you about a rejected routing move or similar, it flashes a solid yellow bar just above the transport for about three seconds instead of covering the controls. Render-backed clip edits plus header dead-space reorder drags stop playback first and then proceed, while ordinary clip drags, split, duplicate, delete, and copy/paste stay live during playback. Recording still blocks those edit actions.

If the reel has a video reference attached, open its picture window from
**View > Video > Show Video Reference**. The video window uses the normal
macOS window controls, including the green fullscreen button. The master row
shows the reference as a simple timeline block so you can see where picture
starts; use the View menu video commands to set that start point.

Focus only counts enabled clips. Disabled clips do not keep a track visible, whether Focus is following the playhead or the active loop range.

Next to the DSP meter there's a small lock indicator. It reads **MCP** and lights red while an MCP transaction is active, and in that state you can right-click it to abort the lock. During a realtime bounce it temporarily reads **BNC** instead, so it's obvious TayPE's own bounce pass is holding the lock rather than an MCP client.

With **Help → Popup Help** enabled, hover help appears after about **0.7 seconds** on ruler buttons, track-header controls, clips, fades, gain lines, and crossfade regions.

## Printing The Mix

Use **File > Print Mix** or **Cmd+P** to print the full reel from zero through
the normal tail boundary. Use **File > Print Loop** or **Cmd+Option+P** to print
from the left loop brace through the right loop brace, then let tails decay.
Use **File > Print Named Markers** to batch-print the currently selected Cut
from each odd/even named-marker pair: first named marker to second, third to
fourth, and so on. If the final named marker is unpaired, it prints from that
marker to song end. Number-only markers are ignored, so automatic marker numbers
do not split the batch. If there are no printable named-marker ranges, TayPE
shows the normal yellow warning bar instead of opening an export dialog.
In a live named-marker print, Stop or spacebar commits the current range and
ends the rest of the batch.
The export dialog can print WAV, FLAC, AAC `.m4a`, and MP3. MP3 exports are
fixed at 320 kbps constant bit rate stereo.

The export dialog defaults to **Master** and **Offline** rendering. Turn on
**Stems** and click **Choose Stems...** to print selected unarchived tracks and
buses as separate files. The selector can show all eligible stems, only tracks, only buses, or
only tracks currently visible in the Mixer after tags, Focus, and Spill are
applied. The target list scrolls, uses alternating rows, and can select every
currently shown stem in one click. Archived tracks are not eligible. Stem files
are direct post-fader taps: after the selected track or bus strip, fader, and
pan, before it routes onward to another bus, hardware output, or master. TayPE
writes them to a versioned stems folder in the print location and keeps the
files sample-aligned with one another and with the final master-output time.
Stem files use the stem folder name plus the stem name, and leaving **Master**
on with **Stems** adds `{StemFolderName}-Master.wav` to that folder.

Print filenames follow the selected Cut. The main Cut keeps the old names. Any
other Cut adds its name after the reel name, before `Loop`, marker names, or
`Stems`; named-marker prints use only the start marker name in the filename.
Named-marker print filenames also prefix the start marker name with the batch
range number, beginning at `01`, so Finder order follows the marker-pair order.
The print version at the end of single master files and stem folders is written
as `v01`, `v02`, and so on. Single master exports and their matching stem-folder
exports share the same version sequence.

### Ruler Header Controls

The left side of the ruler has quick controls:

- **Channel Strip** - show/hide the channel strip side panel; track selection updates it only when the panel is already open
- **+** - add a new track; if you already have a track selected, the new one drops in immediately after it. If that selected track belongs to a comp group, the new track lands after the whole comp block instead of inside it
- **A** - automation view; left-click toggles automation editing for all visible tracks, right-click chooses whether the overlay shows **Volume**, **Pan**, or **Width**
- **Snap** - toggle grid snap; press **S** to flip it from the keyboard, or **Option+S** to switch snap mode
- **Grid / Ruler Mode** - click to switch between time and bars|beats; right-click to choose **Auto**, a straight note value from semibreve to hemidemisemiquaver, or a triplet grid. **Shift+R** toggles between Auto and the last fixed note grid; **Shift+,** and **Shift+.** step through fixed grids only, switching out of Auto if needed. **Auto** keeps beat and time ticks dense while spacing labels separately; fixed grids show the chosen note value, while the visible grid backs off when the chosen division would be too dense to read

This ruler-header **A** is separate from the transport **Archive** shortcut on **X**.

Right-click in the upper ruler area to open the zero-point menu:

- **Set 0 at Playhead** - make the current tape-head position the selected Cut's new `0:00`
- **Reset 0 to Start** - restore that Cut's zero point to the beginning

The lower ruler tick band keeps the existing right-drag pan/zoom gesture.
