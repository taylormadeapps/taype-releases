# NAM Summing (Master Bus)

The master bus channel strip has a Summing section. Load a NAM profile of a real console's summing amplifier — SSL 4000G, Neve 8816, and more — and the digital sum passes through the captured hardware's character.

On the master strip, this section occupies the preamp slot so section rows stay vertically aligned across the mixer.

## Controls

- **SUM** — enable or disable NAM summing (requires transport stopped)
- **TRUE** — choose TayPE's True Summing path (only active when NAM AMX Acceleration is enabled)
- **Browse** — open the Profile Browser, filtered to summing packages. Download packages from TONE3000, then pick the exact local model if the package contains multiple variants.
- In the TONE3000 tab, download happens from each package row's own button; the footer does not repeat that action.
- **Drive** — how hard the summed audio pushes into the model
- **Output gain** — compensates for level changes

## Profile Storage

Profiles are `.nam` files stored in `~/Documents/TayPE/NAM/Summing/`. Downloaded TONE3000 packages are kept in their own folders under that directory, with the package metadata, model files, and cached artwork together in one place. Multi-model downloads expand inline in the Local tab so you can pick the right summing variant. If the current local list contains favourites, TayPE splits it into **Favourites** and **All**; if not, it stays as one flat list.

If the bus already uses a model from a downloaded package, opening **Browse** expands that local package and selects the active model straight away. The browser search bar also keeps an `x` button beside it so you can clear the current search and refresh the list without closing the picker.

When summing is disabled, the master bus uses standard digital summing with zero CPU overhead.
