# Roadmap

TayPE is built in the open. Here's where we are, where we're headed, and
what's already in the box. No dates — it ships when it's ready.

The roadmap is organised into lifecycle stages. Each stage builds on the
last — we don't move on until the current stage is solid. Features within
a stage ship together as a release.

Current version: **v0.5.2 (Private Alpha)**

---

## What's In The Box

Features that are built, tested, and working in the current version.

- **Multitrack recording and playback** — the core loop
- **Neve-style mixer** — channel strip with EQ, compressor, preamp, and inserts
- **VST3 effects hosting** — your plugins, sandboxed so a bad one can't take down the session
- **VST3 instruments** — play hardware synths through software instruments with MIDI input
- **Clip editing** — split, duplicate, cut, copy, paste, clip gain, fades, crossfades
- **Tab to transient** — jump between hits in your audio
- **Metering** — peak, RMS, LUFS, and K-System
- **Stems** — real summing buses with parallel DAG rendering, not cosmetic folders
- **Send routing** — aux sends with per-send level control for effects fan-out
- **Focus mode** — strip the timeline down to what matters right now
- **Track tags** — tag-based filtering with multi-tag focus (ANY/ALL modes)
- **Archive** — dead tracks that use zero CPU, not just hidden ones
- **Software monitoring** — hear your input through the full plugin chain for sound check and rehearsal
- **Tape-style clip behaviour** — recording replaces what's underneath, no stacked layers
- **NAM Console Engine** — load Neural Amp Modeler profiles on channel preamps and mix bus for real console character, with auto-gain compensation and three preamp modes
- **TONE3000 integration** — search, preview, and download community NAM profiles directly in the app
- **ARA2 / Melodyne** — transfer clips to Melodyne for pitch and time editing, commit or revert at will
- **Export and print** — bounce the master bus or individual tracks to file
- **Audio import** — drag and drop audio files onto the timeline
- **Plugin delay compensation** — keep everything sample-aligned when plugins add latency
- **True Summing** — NAM-powered analogue summing on the master bus, capturing the character of real console mix amplifiers (SSL 4000G, Neve 8816, and more)
- **SSL 360° integration** — track names, colours, and layout pushed to 360° automatically. UF8 fader/pan moves control TayPE tracks in real time via PSL. Full motorised fader feedback coming with MCU support
- **MIDI clock output** — sync your hardware to TayPE's transport
- **Customisable key bindings** — make it yours
- **High contrast mode** — full WCAG accessibility support
- **Licensing and registration** — founder and standard tiers

---

## Polish (next up)

Refined by real-world use. The things that matter once you're actually
making records with it — discoverability, workflow friction, timeline
confidence.

*Sharpen the instrument. Then hand it to mates.*

- **Cuts** — flippable timeline sections, same tracks, different clips. Not loops — cuts. Flip between verse, chorus, bridge like splicing tape. Duplicate a cut to try something new without touching the original
- **Help menu and Guild Picks** — curated plugin and protocol recommendations right in the app, split by Open Source and HonourWare
- **Timeline markers** — drop named markers on the timeline, design TBD
- **Set Zero** — move the timeline origin to wherever you're standing, because the grid is a tape measure not law
- **Mixer channel strip UX pass** — refinement of strip controls and interaction
- **Sends in channel strip** — send routing visible and controllable from the strip
- **Reel file manager** — browse, open, save, and create reels from a proper file manager panel instead of bare dialogs
- **Auto-save** — automatic background saves so you never lose work
- **Reel versioning** — discover and navigate version history within a reel
- **Thin Reel** — remove WAV files no longer referenced by any clip, reclaiming disk space
- **Archive Reel** — zip up a reel and save the archive to a location of your choosing
- **Plugin management** — enable/disable plugins from the scanner, organise with custom menu paths so the insert menu shows in folders (similar to Cubase/Logic plugin organisation)
- **General polish and stabilisation** — the unsexy work that makes everything feel solid

---

## Flow

The workflow features that come after the instrument feels right.
Looping, punch recording, multi-clip editing — the things you reach for
when you're deep in a session.

*Loop, punch, multi-clip editing. The daily driver stage.*

- **Loop region and playback looping** — set a region, loop it, work the part
- **Pre-roll, post-roll, and autopunch** — hands-free drop-in recording
- **Multi-clip selection** — grab and move multiple clips at once
- **Bounce in place** — render a track's processing into a new audio clip
- **Ableton Link** — tempo sync with other apps and devices on your local network

---

## Gate

The private beta checkpoint. Everything here ships before we open the
door to people outside the inner circle.

*Lock the front of house. Then open the doors.*

- **Website refinement** — ruminantaudioworks.com gets a proper polish
- **Private beta sign-up** — request a free beta licence key from the site, valid through to 1.0

---

## Stage

The public beta. This is where TayPE leaves the inner circle and gets
hammered by people we've never met. Templates, presets, a proper installer,
performance diagnostics — everything needed for someone to pick it up cold
and have a good experience.

*Strangers beat on it. Not going public until it's tight.*

- **Metronome options** — count-in, click patterns, custom sounds
- **Reel templates** — start new sessions from pre-built setups
- **Channel presets** — save and recall strip settings across sessions
- **Offline rendering** — faster-than-real-time export for quicker bounces
- **Installer and setup** — proper macOS installer with plain-language licence
- **Update checker** — know when a new version is available
- **UX refinement** — the final tightening

---

## Beyond 1.0

Features we're committed to building after the initial release. These are
real plans, not wishful thinking — they just haven't been scheduled yet.

- **Automation** — parameter automation lanes on the timeline
- **The Convolver** — built-in convolution reverb
- **Controller surfaces** — Mackie Control protocol for generic hardware fader units. Also completes SSL 360° DAW→surface motorised fader sync
- **Waveform energy hue** — colour-coded waveforms by frequency content

---

## Pricing

- **Free** for students and teachers
- **33% discount** for accessibility needs — no proof required, we trust you
- Standard and Founder tiers for everyone else

---

## How We Work

TayPE is built by a small team with strong opinions. We don't chase feature
lists. Every release has to be solid before it ships — presence over polish,
commitment over endless tweaking.

If you want to influence what comes next, the best way is to use it and
tell us what's missing. File an issue, post on
[r/taype](https://www.reddit.com/r/taype/), or DM us on
[Instagram](https://instagram.com/ruminantrecords).
