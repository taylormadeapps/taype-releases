# Performance Monitor

The Performance Monitor shows where processing time is being spent.

## Routing Tree

Use it to see track, bus, insert, and sandbox processing in context. It helps distinguish a heavy plugin from a routing or monitoring problem.

When Listen Bus is active, it appears as the terminal `L0` post-master row with
its plug-in count, processing use, drop counters, and chain latency. Master
moves to `L1`, and its existing routing descendants shift by one level; Listen
Bus is never shown as a child feeding Master. Its latency is also
included in every track's effective output-path latency and in the session
total. If Listen Bus uses a separate hardware output, the Master row shows the
matching output delay that keeps the Master and Listen Bus outputs
sample-aligned. These figures describe what reaches hardware; they do not add a
second round of playback compensation to individual tracks.

## ALAP Bus Ordering

**ALAP bus ordering** — as late as possible — is a diagnostic A/B control for
large, deeply routed mixes. Off is the established ASAP (as soon as possible)
schedule: each bus runs in its earliest valid phase. On moves each bus to its
latest dependency-safe phase before Master, which can group stem and effects
buses by their distance from the final mix.

The checkbox applies immediately to the loaded reel and is saved globally. It
does not change routing, plug-in chains, signal processing or the order of
dependent buses; it changes only which independent buses share an existing
parallel phase. TayPE can apply it during playback through the normal live
graph-swap path. Recording and printing must be stopped.

## Colour Coding

Rows use colour to separate healthy, busy, and risky processing areas. Treat it as a guide for troubleshooting, not a musical judgement.

## Drop Counters

Two columns count work that did not arrive in time. Both reset when playback starts and when the audio device is prepared, and both show green at zero and red above it.

`P/I Drops` counts preamp and plugin results that missed their block deadline, shown as `preamp/plugin`.

`MIDI Drops` counts live MIDI notes that arrived too late to be played in the right place. TayPE gives a late note one extra block to make it, then drops it rather than playing it noticeably behind the beat. Note releases are never dropped, so a late note cannot leave a voice hanging. A non-zero count here means the machine could not get live playing to the instrument in time, not that the notes were wrong.

## Session Summary

The summary view helps identify whether a reel is light enough for live work or should be printed, archived, or simplified before a serious take.

## Preamp / SUM Grouping

Open **Preamp / SUM Grouping** to inspect the worker groups used by track preamps, bus preamps, and master summing. For a grouped NAM track preamp, **Mode** identifies the runtime, such as A2Fast or LSTM, while **Process** shows the kernel used for the latest active block: Direct, Small, Turbo, or Dense. An A2Fast group therefore changes from Direct to Turbo in the existing Process column when it reaches the turbo lane threshold.
