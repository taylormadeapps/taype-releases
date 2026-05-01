# Preamp

The preamp operates in four modes. Use the small yellow mode-value button on the left of the info row to cycle through them:

**Clean → Modern → ToTaype → NAM → Clean**

That button now shows only the current mode text. In ToTaype mode, the speed pill sits to its right and follows the same colour language as the compressor detector button: red `7.5`, green `15`, blue `30`. In NAM mode, the loaded profile name sits in its own dark pill to the right; clicking that profile pill opens the browser.

The Wet/Dry blend knob is shown in the full channel strip and wide mixer strips. Narrow mixer strips keep the mode, profile, and meters visible but hide Wet/Dry to preserve spacing.

## Clean Gain (default)

The preamp starts enabled in its neutral clean mode. Your trim setting passes through with no colour or saturation until you switch into a colour stage. Every new track starts here.
The `IN:` / `OUT:` mini meters still stay live in Clean, so you can judge the
level hitting the preamp slot and the level leaving it even when there is no
saturation stage engaged.

## Modern

A soft-sine drive stage for adding warmth and saturation. The onset is meant
to come on gradually, so higher drive blooms into colour before it turns into
real crunch.
Modern drive runs from 0 to +18 dB. The OUT control trims the processed
signal from -18 to +12 dB.
The PREAMP header always carries its own power button. That button bypasses or
re-enables the whole preamp section during playback without changing the
selected mode, so Clean stays Clean and Modern or NAM keep their settings.

- **Drive** — how hard you push the signal into the clipper. Higher values mean more saturation.
- **Oversampling** — always on for the Modern saturator.
- **Auto-gain (AG)** — compensates for loudness changes from drive so you can compare tone instead of volume.

## ToTaype

The tape mode ports the ToTape9-inspired DSP into TayPE's preamp lane. It keeps the same compact control language as Modern, but swaps the voicing over to tape behaviour.

- **Drive** — pushes the input harder into the tape stage.
- **Tape speed** — cycles `7.5`, `15`, and `30` ips. The pill is red at `7.5`, green at `15`, and blue at `30`. `30` stays the brightest and tightest, `15` is the middle tape lane, and `7.5` is where the obvious top-end slowing starts.
- **HF contour** — fixed internally to the ToTaype lane. There is no separate Dubly switch on the strip now.
- **Output gain** — trims the level leaving the tape stage.

## NAM Profile

Load a Neural Amp Modeler profile of a real preamp — Neve 1073, API 512, SSL E, Trident, and thousands more. The profile replaces the built-in saturator entirely.

Click the profile pill to open the Profile Browser, where you can search TONE3000's online library or pick from locally saved profiles.

### Profile Browser

The browser has two tabs:

- **Local** opens first. If the current local list contains favourites, TayPE splits it into **Favourites** and **All** with favourites pinned at the top. If there are no favourites in the current scope, it stays as one flat list. Single-model packages load straight away. Multi-model packages expand inline so you can choose the exact capture variant you want.
- **TONE3000** is the online catalogue. Search results are package rows, not single files. The browser shows the package thumbnail, creator, model count, and the architectures inside it.
- Tone-backed package rows in both tabs show a yellow **More info >>** link that opens that package page on tone3000.com. The artwork and title stay passive, so opening the site is always an explicit action.
- On the **TONE3000** tab, each package row carries its own **Download** button, so the footer only keeps **Cancel** instead of repeating that action.
- If that package is already on disk, the same row button changes to **Downloaded**. Click it to jump straight to that package on the **Local** tab.
- Finishing a TONE3000 download flips the browser back to **Local**, selects the downloaded package, and expands it straight away when that package contains multiple models.

The **Architecture** filter lives on the **Local** tab. That is where TayPE knows the real model files on disk, so filters like **AMX Compatible**, **LSTM**, and **WaveNet** are based on known local model metadata instead of guesswork from the online catalogue.

If the strip already uses a profile from a downloaded TONE3000 package, opening the browser expands that local package and selects the active model straight away, even if an older search would otherwise have hidden it.

The search bar keeps an `x` button beside it, so you can clear the current search and refresh the list without closing the browser.
Popup help now covers the floating browser as well, including the search bar,
filters, tabs, package list, and footer actions.

Downloading from TONE3000 pulls the whole package, not just one file. Once the package is local, the browser lands back on the Local tab with that package selected, and multi-model packages are already expanded so the variants are right there. Starred packages stay starred in both tabs.

### NAM Controls

- **Trim** is always visible and always pre-NAM — higher trim drives the model harder, like pushing a real preamp.
- **Drive** still applies before the NAM model itself, from 0 to +18 dB, even when **NAM AMX Acceleration** is grouping multiple strips behind the scenes, so grouped NAM tracks react to drive the same way as standalone ones.
- **Output Gain** trims the level after the model from -18 to +12 dB.
- **Auto-gain (AG)** measures pre/post NAM level and applies smooth compensation to keep perceived loudness stable.
- **SAFE** is not shown in NAM mode because that control no longer exists on the strip.

### Profile Storage

Profiles are `.nam` files stored in `~/Documents/TayPE/NAM/Preamps/`. Downloaded TONE3000 packages are kept in their own folders under that directory, with the package metadata, model files, and cached artwork together in one place. They work offline from that point.

Downloaded packages keep their package and model metadata, so the strip and browser stay locked to the right variant instead of drifting to the wrong file. Thumbnails are cached locally for offline browsing.

If a reel opens with a missing TONE3000-backed preamp or summing profile, TayPE stops and asks whether to **Download** the missing package or **Skip** it. Skip keeps the clean fallback alive and the profile stays marked offline until the model is restored.

You can switch a strip to NAM mode before choosing a profile — TayPE shows a warning and stays clean until a model is loaded.
