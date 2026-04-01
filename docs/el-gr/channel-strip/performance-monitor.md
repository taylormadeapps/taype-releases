# Performance Monitor

The Performance Monitor shows per-track DSP breakdown with separate **Preamp/Summing** and **Plugin** CPU columns. On the master track, the Preamp/Summing column reflects NAM summing CPU.

## Routing Tree

Rows display as a routing tree under the master bus, so bus chains are nested visually instead of appearing as a flat list.

The **Lvl** column shows routing depth from master (L0 = master, deeper levels further upstream). Each stage shows `% | ms` per track, and the table includes per-track enabled plugin count to spot heavy chains quickly.

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
- **Host CPU** — total TayPE process usage across all logical cores (0–100%)

Per-track CPU values are smoothed for readability (quick rise, slower fall).

The monitor stays on top of the main window and refreshes 10 times per second by default.
