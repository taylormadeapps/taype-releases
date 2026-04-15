# Taype — Performance Monitor

The **Taype — Performance Monitor** shows per-track DSP breakdown with separate **Preamp/Summing** and **Plugin** CPU columns. On the master track, the Preamp/Summing column reflects NAM summing CPU.

Open it from **Tools -> DSP Monitor**, press the backtick key, or click the transport DSP gauge.

## Routing Tree

Rows display as a routing tree under the master bus, so bus chains are nested visually instead of appearing as a flat list.

The **Lvl** column shows routing depth from master (L0 = master, deeper levels further upstream). Each stage shows `% | ms` per track, and the table includes per-track enabled plugin count to spot heavy chains quickly.

The timing columns now split playback and monitoring truth explicitly:

- **Chain** — the track's own insert/strip latency
- **Live** — the downstream live-path latency a monitored source would feel to the output
- **PDC** — playback compensation applied to prerecorded material
- **Mon** — software-monitor alignment state for active monitored paths

In the **Mon** column:

- `Ref` means this track is one of the current slowest monitored reference paths
- `+N smp` means TayPE is delaying this track's live monitored contribution by `N` samples so it lands with the reference

## Colour Coding

Stage colour bands are per-node hints:

- Green: < 12%
- Amber: 12–25%
- Red: > 25%

These are per-track hints, not a global overload alarm — use the top DSP gauge for that.

## Session Summary

The summary includes:

- **Critical path (est)** — the longest active dependency chain in the current block
- **Scheduler** — levels, max width, workers used, utilisation, and compute/wait/merge timing
- **Software monitor** — the current monitor reference latency plus how many live monitored paths are active
- **Host CPU** — total TayPE process usage across all logical cores (0–100%)
- **NAM preamp** — a per-group list showing each batch's channel count and whether it is running on the small or turbo path on a worker or inline
- **Master true summing** — grouped Classic/ToTaype true-summing lanes, including channel count and whether each group ran inline or on a worker

Per-track CPU values are smoothed for readability (quick rise, slower fall).

The monitor stays on top of the main window, is resizable, and the track table expands to fill the available width. It refreshes 10 times per second by default.
