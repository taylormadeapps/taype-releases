# Performance Monitor

The Performance Monitor shows where processing time is being spent.

## Routing Tree

Use it to see track, bus, insert, and sandbox processing in context. It helps distinguish a heavy plugin from a routing or monitoring problem.

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
