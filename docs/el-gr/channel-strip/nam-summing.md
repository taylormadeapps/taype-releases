# NAM Summing (Master Bus)

The master bus channel strip has a Summing section. Load a NAM profile of a real console's summing amplifier — SSL 4000G, Neve 8816, and more — and the digital sum passes through the captured hardware's character.

On the master strip, this section occupies the preamp slot so section rows stay vertically aligned across the mixer.

## Controls

- **SUM** — enable or disable NAM summing (requires transport stopped)
- **SUM** — choose TayPE's True Summing path; it stays available regardless of NAM AMX Acceleration and requires transport stopped
- **Browse** — open the Profile Browser, filtered to summing profiles
- **Drive** — how hard the summed audio pushes into the model
- **Output gain** — compensates for level changes

## Profile Storage

Profiles are `.nam` files stored in `~/Documents/TayPE/NAM/Summing/`. Downloaded profiles show their model title when metadata is available.

When summing is disabled, the master bus uses standard digital summing with zero CPU overhead.

## XTALK

XTALK appears on the stereo master summing strip when a non-clean summing flavour is active. With True Summing off, it blends the post-digital-sum stereo path before the master summing colour stage. With True Summing on, it blends each stereo feeder pair before Classic, ToTaype, NAM, or MD510 true-summing processing. It uses the same power-law taper as the track preamp and is hidden on mono strips.
