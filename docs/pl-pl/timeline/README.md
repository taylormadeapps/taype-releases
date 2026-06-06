# The Oś czasu

The timeline is where you see your session laid out in time. Ścieżki run top to bottom, time runs left to right. The tape head - a vertical line - shows the current playback position.

![Oś czasu overview](../../assets/img/docs/timeline-overview.png)

## Layout

The left column shows **track headers** with controls. The main area shows **clips** - rectangles filled with waveforms representing your audio.

When you select a track, TayPE keeps the row highlight restrained: a faint fill
with soft guide lines at the top and bottom of the selected lane.
In the normal theme, track headers use a subtle track-colour gradient with
small lower-right button shadows. Only the selected header deepens into a
slightly darker version of that colour, so the active row reads clearly without
making every header a solid block. Uncovered header-column space uses the same
soft arrange-bed gradient as the timeline body. High contrast keeps solid
header fills.

The **ruler** along the top shows time. Press **T** to toggle between minutes:seconds and bars|beats. Each Wytnij can define its own zero point, so the ruler and transport counter can read from a section start instead of absolute timeline start. In bars|beats mode, that zero point becomes bar `1.1`, and bars to the left read as negative.

The **transport bar** runs along the bottom. It has playback controls, BPM, and position readout in the middle, then a Wytnij actions menu for **Nowy / Duplikuj / Zmień nazwę / Usuń** and a Wytnij selector showing the active Wytnij name at the start of the right-hand utility cluster. The Wytnij actions menu sits immediately to the left of the selector. The left-side view buttons are: **Show Mixer**, **Fokus**, **Tags**, **Rozlanie**, **Archiwum**. The **?** popup-help toggle lives at the far right of the transport bar.

The ruler header also carries the global **A** automation toggle. Left-click
it to switch the whole timeline between clip editing and automation view.
Right-click it to choose **Głośność**, **Panorama**, or **Szerokość**.

Dalej to the DSP meter there's a small **MCP** lock indicator. It lights red while an MCP transaction is active - right-click it to abort the lock.

With **Pomoc → Popup Pomoc** enabled, hover help appears after about **0.7 seconds** on ruler buttons, track-header controls, clips, fades, gain lines, and crossfade regions.

### Ruler Header Controls

The left side of the ruler has quick controls:

- **Pasek kanału** - show/hide the channel strip side panel; track selection updates it only when the panel is already open
- **+** - add a new track
- **A** - toggle automation view; right-click chooses **Głośność**, **Panorama**, or **Szerokość**
- **Metronome** - toggle click on/off
- **Przyciąganie** - toggle grid snap
- **Ruler Mode** - switch between time and bars|beats

Right-click in the upper ruler area to open the zero-point menu:

- **Set 0 at Playhead** - make the current tape-head position the selected Wytnij's new `0:00`
- **Resetuj 0 to Start** - restore that Wytnij's zero point to the beginning

The lower ruler tick band keeps the existing right-drag pan/zoom gesture.
