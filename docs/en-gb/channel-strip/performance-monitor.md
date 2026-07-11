# Performance Monitor

The Performance Monitor shows where processing time is being spent.

## Routing Tree

Use it to see track, bus, insert, and sandbox processing in context. It helps distinguish a heavy plugin from a routing or monitoring problem.

## Colour Coding

Rows use colour to separate healthy, busy, and risky processing areas. Treat it as a guide for troubleshooting, not a musical judgement.

## Session Summary

The summary view helps identify whether a reel is light enough for live work or should be printed, archived, or simplified before a serious take.

## Preamp / SUM Grouping

Open **Preamp / SUM Grouping** to inspect the worker groups used by track preamps, bus preamps, and master summing. For a grouped NAM track preamp, **Mode** identifies the runtime, such as A2Fast or LSTM, while **Process** shows the kernel used for the latest active block: Direct, Small, Turbo, or Dense. An A2Fast group therefore changes from Direct to Turbo in the existing Process column when it reaches the turbo lane threshold.
