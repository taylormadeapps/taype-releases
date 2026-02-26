# Roadmap

TayPE is built in the open. Here's where we are, where we're headed, and
what's already in the box. No dates - it ships when it's ready.

The roadmap is organised into lifecycle stages. Each stage builds on the
last - we don't move on until the current stage is solid. Features within
a stage ship together as a release.

---

## What's In The Box

Features that are built, tested, and working in the current version.

- **Multitrack recording and playback** - the core loop
- **Neve-style mixer** - channel strip with EQ, compressor, preamp, and inserts
- **VST3 effects hosting** - your plugins, sandboxed so a bad one can't take down the session
- **Clip editing** - split, duplicate, cut, copy, paste, clip gain, fades, crossfades
- **Tab to transient** - jump between hits in your audio
- **Metering** - peak, RMS, LUFS, and K-System
- **Stems** - real summing buses, not cosmetic folders
- **Focus mode** - strip the timeline down to what matters right now
- **Archive** - dead tracks that use zero CPU, not just hidden ones
- **Customisable key bindings** - make it yours
- **High contrast mode** - full WCAG accessibility support
- **SSL 360° integration** - track names, colours, and layout pushed to 360° automatically. UF8 fader/pan moves control TayPE tracks in real time via PSL. Full motorised fader feedback coming with MCU support
- **Licensing and registration** - founder and standard tiers

---

## Foundation (next up)

The essentials that close the creative loop. Once this stage ships, you can
record a hardware synth through a VST instrument, mix with proper plugin
delay compensation, and bounce a finished file. This is the minimum viable
instrument.

*Close the core loop. Record with hardware synths, mix with working PDC,
export a stereo file.*

- **Mix FX — Softube Tape** - dedicated tape saturation slot on the mix bus, powered by Softube Multitrack Tape
- **Export and print** - bounce the master bus or individual tracks to file
- **Audio import** - drag and drop audio files onto the timeline
- **Plugin delay compensation** - keep everything sample-aligned when plugins add latency
- **MIDI input for VST3 instruments** - play your hardware synths through software instruments
- **VST3 stability pass** - iron out the remaining plugin hosting glitches
- **Bug fixes and stability** - threading, edge cases, the unsexy but essential stuff
- **UX refinement** - making everything feel tighter

---

## Flow

The workflow features that turn TayPE from a capable recorder into a daily
driver. Looping, punch recording, multi-clip editing, hardware sync - the
things you reach for when you're deep in a session and don't want to fight
the machine.

*Loop, punch, MIDI clock, multi-clip editing. The daily driver stage.*

- **Loop region and playback looping** - set a region, loop it, work the part
- **Pre-roll, post-roll, and autopunch** - hands-free drop-in recording
- **Multi-clip selection** - grab and move multiple clips at once
- **Bounce in place** - render a track's processing into a new audio clip
- **MIDI clock output** - sync your hardware to TayPE's transport
- **UX refinement** - continued polish

---

## Stage

The public beta. This is where TayPE leaves the inner circle and gets
hammered by people we've never met. Templates, presets, a proper installer,
performance diagnostics - everything needed for someone to pick it up cold
and have a good experience.

*Strangers beat on it. Not going public until it's tight.*

- **Metronome options** - count-in, click patterns, custom sounds
- **Reel templates** - start new sessions from pre-built setups
- **Channel presets** - save and recall strip settings across sessions
- **Performance monitor** - see what's eating your CPU in real time
- **Installer and setup** - proper macOS installer with plain-language license
- **Update checker** - know when a new version is available
- **UX refinement** - the final tightening

---

## Beyond 1.0

Features we're committed to building after the initial release. These are
real plans, not wishful thinking - they just haven't been scheduled yet.

- **Track tags** - tag-based filtering as an alternative to stems
- **Automation** - parameter automation lanes on the timeline
- **The Convolver** - built-in convolution reverb
- **Controller surfaces** - Mackie Control protocol for generic hardware fader units. Also completes SSL 360° DAW→surface motorised fader sync
- **Waveform energy hue** - colour-coded waveforms by frequency content

---

## How We Work

TayPE is built by a small team with strong opinions. We don't chase feature
lists. Every release has to be solid before it ships - presence over polish,
commitment over endless tweaking.

If you want to influence what comes next, the best way is to use it and
tell us what's missing. File an issue, post on
[r/taype](https://www.reddit.com/r/taype/), or DM us on
[Instagram](https://instagram.com/ruminantrecords).
