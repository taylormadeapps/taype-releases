# Preamp

The preamp operates in five modes. Use the mode-value button on the left of the info row to cycle through them:

**Clean → Modern → ToTaype → NAM → MD510 → Clean**

That button now shows only the current mode text. Clean is outlined, Modern uses a light chip, ToTaype keeps the warm brass chip, NAM uses green, and MD510 uses baby blue. In ToTaype mode, the speed pill sits to its right and follows the same colour language as the compressor detector button: red `7.5`, green `15`, blue `30`. In NAM mode, the loaded profile name sits in its own dark pill to the right, while the `…` browse button stays on the far right.

## Clean Gain (default)

The preamp starts enabled in its neutral clean mode. Your trim setting passes through with no colour or saturation until you switch into a colour stage. Every new track starts here.

## Modern

A soft-clipping drive stage for adding warmth and saturation.

- **Drive** — how hard you push the signal into the clipper. Higher values mean more saturation.
- **Safe mode** — engages oversampling for cleaner saturation at the cost of a bit more CPU.
- **Auto-gain (AG)** — compensates for loudness changes from drive so you can compare tone instead of volume.

## MD510

MD510 is a MiniDisc-player-inspired colour mode for subtle finish and peak civility. It adds a small low-end support, gently relaxes the top, tightens low stereo width when a stereo lane is available, and rounds the very top of hard pushes with a tiny 0 dB soft clip.

## NAM Profile

Load a Neural Amp Modeler profile of a real preamp — Neve 1073, API 512, SSL E, Trident, and thousands more. The profile replaces the built-in saturator entirely.

Click the **browse** button to open the Profile Browser, where you can search TONE3000's online library or pick from locally saved profiles.

### Profile Browser

TONE3000 rows show the model thumbnail, type, creator, architecture, and an AMX badge for LSTM/AMX-compatible captures. Use the **View Profile** link at the bottom right of a row to open its page on tone3000.com.

The **AMX Compatible** filter narrows results to LSTM captures that qualify for TayPE's accelerated path. The browser searches forward through the library until it finds matching rows.

A spinner appears while search, favourites refresh, or download metadata is loading. If TONE3000 favourite sync is temporarily unavailable, starred profiles are still saved locally.

### NAM Controls

- **Trim** is always visible and always pre-NAM — higher trim drives the model harder, like pushing a real preamp.
- **Output Gain** is a level control after the model.
- **Auto-gain (AG)** measures pre/post NAM level and applies smooth compensation to keep perceived loudness stable.
- **SAFE** is not shown in NAM mode.

### Profile Storage

Profiles are `.nam` files stored in `~/Documents/TayPE/NAM/Preamps/`. Downloaded profiles work offline from that point.

Downloaded profiles keep their model title metadata, so the strip and browser show the profile title instead of hashed filenames. Thumbnails are cached locally for offline browsing.

You can switch a strip to NAM mode before choosing a profile — TayPE shows a warning and stays clean until a model is loaded.
