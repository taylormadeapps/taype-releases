# Preamp

The preamp operates in one of three modes. Use the small yellow mode-value button on the left of the info row to cycle through them:

**Clean → Classic → NAM → Clean**

che button now shows only the current mode text. In NAM mode, the loaded profile name sits in its own dark pill to the right, while the `…` browse button stays on the far right.

## Clean Guadagno (default)

The preamp is off. Your trim setting passes through con no colour or saturation. Every new track starts here.

## Classic

A soft-clipping drive stage for adding warmth and saturation.

- **Drive** — how hard you push the signal in the clipper. Higher values mean more saturation.
- **Safe mode** — engages oversampling for cleaner saturation at the cost of a bit more CPU.
- **Auto-gain (AG)** — compensates for loudness changes da drive so you can compare tone instead of volume.

## NAM Profile

Carica a Neural Amp Modeler profile of a real preamp — Neve 1073, API 512, SSL E, Trident, and thousands more. The profile replaces the built-in saturator entirely.

Fai clic the **browse** button to open the Profile Browser, where you can search TONE3000's online library or pick da locally saved profiles.

### Profile Browser

TONE3000 rows show the model thumbnail, type, creator, architecture, and an AMX badge for LSTM/AMX-compatible captures. Use the **View Profile** link at the bottom right of a row to open its page on tone3000.com.

The **AMX Compatible** filter narrows results to LSTM captures che qualify for TayPE's accelerated path. The browser searches forward through the library until it finds matching rows.

A spinner appears while search, favourites refresh, or download metadata is loading. If TONE3000 favourite sync is temporarily unavailable, starred profiles are still saved locally.

### NAM Controls

- **Trim** is always visible and always pre-NAM — higher trim drives the model harder, like pushing a real preamp.
- **Output Guadagno** is a level control after the model.
- **Auto-gain (AG)** measures pre/post NAM level and applies smooth compensation to keep perceived loudness stable.
- **SAFE** is not shown in NAM mode.

### Profile Storage

Profiles are `.nam` files stored in `~/Documents/TayPE/NAM/Preamps/`. Downloaded profiles work offline da che point.

Downloaded profiles keep their model title metadata, so the strip and browser show the profile title instead of hashed filenames. Thumbnails are cached locally for offline browsing.

You can switch a strip to NAM mode before choosing a profile — TayPE shows a warning and stays clean until a model is loaded.
