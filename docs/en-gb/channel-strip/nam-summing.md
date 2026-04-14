# Summing (Master Bus)

The master bus channel strip has a Summing section. Load a NAM profile of a real console's summing amplifier — SSL 4000G, Neve 8816, and more — and the digital sum passes through the captured hardware's character.

On the master strip, this section occupies the preamp slot so section rows stay vertically aligned across the mixer.

## Controls

- **SUM** — the small header button just left of the section power button. It enables or disables the global summing path, replaces the old `TRUE` label, and requires transport stopped. In `Clean`, it stays visible but disabled because there is no analogue summing stage to switch in. In `ToTaype`, it now switches the grouped per-feeder tape summing path the same way it does for the other non-clean summing flavours.
- **Power** — bypass or re-enable the selected master summing flavour without changing mode.
- **Trim** — in `Clean`, the master summing lane keeps the same trim control position as the channel preamp instead of leaving the body empty.
- **P/R** — switches the master summing auto-gain detector between Peak and RMS.
- **AG** — runs a 3-second one-shot calibration and writes the compensation into the master summing output gain.
- **Tape speed** — in ToTaype mode, cycles `7.5`, `15`, and `30` ips. The pill uses the same colour convention as the compressor detector: red `7.5`, green `15`, blue `30`. `30` is the brightest lane, `15` stays broadly full-range, and `7.5` is where the slower top-end softening really starts to show.
- **HF contour** — fixed internally in ToTaype mode. There is no separate Dubly switch on the master strip now.
- **Browse** — open the Profile Browser, filtered to summing packages. Download packages from TONE3000, then pick the exact local model if the package contains multiple variants.
- In the TONE3000 tab, download happens from each package row's own button; the footer does not repeat that action.
- **Drive** — how hard the summed audio pushes into the model
- **Output gain** — compensates for level changes
- **Mini meters** — with `SUM` out, the master strip shows both `IN:` and `OUT:` mini meters around the selected flavour just like the track preamp. With `SUM` in, it drops to post-sum `OUT:` only because the true-summing path has no single stereo input comparison worth faking.

The body deliberately mirrors the track preamp layout so the mixer keeps one muscle memory: mode row at the top, meter cluster beneath, utility stack on the left, trim-or-drive on the left knob lane, and the right knob lane used only when a non-clean summing flavour needs output gain.

With `SUM` on, TayPE keeps stereo feeders as independent left/right summing
lanes before the final stereo mix. It does not collapse a stereo feeder to
mono first.

## Profile Storage

Profiles are `.nam` files stored in `~/Documents/TayPE/NAM/Summing/`. Downloaded TONE3000 packages are kept in their own folders under that directory, with the package metadata, model files, and cached artwork together in one place. Multi-model downloads expand inline in the Local tab so you can pick the right summing variant. If the current local list contains favourites, TayPE splits it into **Favourites** and **All**; if not, it stays as one flat list.

If the bus already uses a model from a downloaded package, opening **Browse** expands that local package and selects the active model straight away. The browser search bar also keeps an `x` button beside it so you can clear the current search and refresh the list without closing the picker.

When summing is disabled, the master bus uses standard digital summing with zero CPU overhead.
