# Insert Slots

The insert rack can host eight serial VST3 slots. By default TayPE shows slots
1-4; click **MORE** in the rack footer to reveal slots 5-8. Click an empty
slot to load a plugin from the scanner. Right-click a loaded slot for bypass,
remove, or to open the plugin editor. Hosted plug-in editor windows use
`Track Name - Plug-in Name` in the native title bar so you can tell which
track each editor belongs to.

When you choose a plugin from the insert menu, TayPE loads that choice after
the popup closes so nested submenu picks stay dependable.

When you load or re-enable a plugin, the target slot shows a small spinner
until TayPE finishes bringing that insert online.

Each loaded row now carries its own small power button on the right. Click it
to bypass just that slot, or **Option-click** to disable / re-enable the
plug-in through the normal stopped-transport path. Plain clicks on a disabled
row stay inert; use that power button or the row context menu to bring the
plug-in back online. Disabled slots stay loaded for state/editor recall, but
they leave the audio graph, contribute no latency, and receive no sandbox
processing until re-enabled.

Bypass keeps audio-FX slots in the timing path. TayPE continues processing the
plug-in in the sandbox and ramps that slot to a latency-aligned dry lane, so
lookahead and linear-phase processors do not shift the track when you bypass
them during playback.

The master bus follows the same rule: four slots visible by default, with the
same **MORE** toggle to reveal the full eight-slot rack.

On mono track strips, TayPE prefers a true mono main bus for inserts that
support it. If a plug-in only exposes stereo, TayPE widens to dual-mono for
that slot and collapses back to mono afterwards, so the strip still reaches
pan as mono. Bus and master strips always stay stereo.

The INSERTS power button works even before you load anything. If you switch the
rack off first, the next plugin you load comes in bypassed until you turn the
section back on.

## Plugin Manager

Open **Tools -> Plugin Manager** to organise the scanner catalogue before you
pick plugins from the channel strip.

- The **Enabled** checkbox controls whether a validated plugin appears in the insert menu.
- **Status** shows whether a plugin is **Validated**, **Disabled**, **Failed**, or queued for **Rescan** on the next launch.
- **Type** separates instruments from effects.
- **Manufacturer** helps sort and filter larger collections.
- **Menu Path** lets you build your own nested insert menus. Type a path like
  `Dynamics/Compressors/Classics` and TayPE will create those child menus under
  **Effects** or **Instruments**. Slashes are the separator; backslashes are
  converted automatically when you commit the field.

If **Menu Path** is blank, the plugin sits directly inside the top-level
**Effects** or **Instruments** menu.

Melodyne does not appear in the insert picker. Open it from an audio clip
instead: **Option+double-click** the clip, double-click its Melodyne glyph, or
use **Taype - Clip Properties**. TayPE keeps Melodyne out of insert slots so
the clip-wide ARA workflow stays consistent.

Its bundled Factory IR bank is normalised automatically to TayPE's house
format on bootstrap, so the shipped rooms actually appear in the selector
instead of getting dropped for being out of spec.
Fresh Tape Rooms instances default to the factory room shown as
**Dieppe Cathedral**, so the plug-in starts from the same known room even
after you add other IR libraries.

Inside **Tape Rooms**, the IR section now includes **Get Bricasti M7 IRs**.
That flow asks you to accept Samplicity's terms, gives the first alert a
real **View Samplicity T&Cs** button, then has TayPE download and install
the official archive automatically into `[TAPE_HOME]/IRs/Bricasti M7`,
organised by register. That preflight still appears before install or
reinstall, even after TayPE has remembered acceptance. If TayPE already has
that managed Bricasti folder, it asks before replacing it. It also warns that
the automatic transfer is a large download before it starts and then treats
the download as most of the install progress. No folder picking or manual zip
import is part of the user flow. Internal support folders such as the wizard's
`_download` stash do not appear in the IR selector.
When Samplicity ships both 48 kHz and 44.1 kHz copies, TayPE bins the 44.1 kHz
lane before import and keeps the 48 kHz set for normalisation.
The IR selector itself uses a nested category popup rather than one long flat list.
Its native editor also uses the same strip-hardware language as TayPE's
channel strip, with a more obvious baby-blue panel wash instead of a generic
plug-in skin.
The layout stays compact rather than wasting height, but keeps the larger
strip-style knobs intact.
Its `IR` and `CONTROLS` headers are just section labels, not collapsible panes.
Each large knob now carries its value in a readout between the hardware and the control label. That readout sits between the hardware and the control label
instead of being buried in a separate text box.
Its control section labels those tone-shaping controls as **Low Cut** and
**High Cut**, adds a **Duck** knob that self-ducks the wet return from the
incoming signal with a fixed medium attack and slow release, adds a **Mix**
knob for insert use, labels the IR topology picker
as **Channels**, and gives the send behaviour its own **Mode** toggle with
**Send / Insert** choices. **Send** is the default and forces a
100% wet return; flip to **Insert** to wake the Mix control up. Ducking always
happens on the wet path before Mix combines wet and dry. The Duck knob's gold arc shows live ducking activity rather than just mirroring the set depth.

The same **Stock** lane now ships **Ache-Delay** as TayPE's house delay.
It follows the same native editor language as Tape Rooms, but with a warmer
copper wash and a delay-first layout: **Free / Sync** timing, note divisions,
**Mono / Dual Stereo / Ping-Pong / Ping-Pong (Even)** routing, and the same
wet-path **Duck** behaviour keyed from the incoming signal. **Send** is the
default output mode and forces a 100% wet return. Flip to **Insert** to bring
the stored **Mix** value back into play without rewriting it.

**Hardware Insert** is TayPE's outboard loop insert. It uses the audio I/O
mapping aliases from Preferences, not TayPE buses: choose a physical mono or
stereo output endpoint for the send, a physical mono or stereo input endpoint
for the return, and extra latency compensation. The sample field is the stored
non-negative delay value; the millisecond field is calculated from the current
processing sample rate and writes back to samples when edited. Negative values
clamp to zero because TayPE can add delay, not send audio to future hardware.
Click the same Hardware Insert row
again to close that track/slot window. The native insert window also lets
you rename the slot, bypass or disable it from the top bar, open its preset
menu, pick a slot colour under the name field, set input and output trim plus
wet/dry along the bottom of the left plate, and watch the send/return mini
meters in the right plate with auto-gain and Peak/RMS directly under the
meters on the left. Reels with no stored name
or no newer Hardware Insert fields still use the default **Hardware Insert**
label, 0 dB trims, Peak auto-gain, and the track colour. Wet/dry blends use a
latency-aligned dry path, so partial blends stay aligned with the returned
hardware signal. Any route overlapping the current master output pair cannot be
used as the send. TayPE fans mono strips out to stereo hardware, averages
stereo strips into mono sends, fans mono returns into stereo strips, and
averages stereo returns into mono strips.

Use the row-level **Rescan** button to queue just one plugin for revalidation
next time TayPE launches. Use **Invalidate Cache** to queue a full catalogue
rescan; the current list stays visible and every row is marked for rescan.

## Comparison Meters And Block Trim

The insert panel shows two thin comparison meters for gain staging. The bar above the slots shows the level **into** the plugin chain. The bar below shows the level after the whole insert block, including its output trim.

In wide channel-strip mode, the block controls sit to the right of those meters. **PK** / **RMS** chooses the measurement basis, **AG** listens to the whole insert block and writes a matching trim, and **OUT** is the manual output trim for the complete rack. These controls are per insert block, not per insert slot.

Narrow strips keep the meters visible but hide the block controls.

## Plugin Sandboxing

Plugins run in a sandboxed process. If a plugin crashes, TayPE keeps running - the slot shows an error state and you can reload or remove it.

The crash alert names the culprit plugin when possible. If TayPE can't attribute it, it says the culprit is unknown and keeps audio running dry.

Loading a saved plug-in preset happens with transport stopped. TayPE fully
reloads that insert from the saved preset chunk so processors that ignore hot
state swaps still come back in the recalled state instead of slipping back to
the default patch.

Hardware Insert presets live in `[TAPE_HOME]/Presets/Hardware Inserts`.
They save the open slot only: routes, latency, trims, wet/dry, filters, colour,
enable/bypass state, and recall photos. Recall photos are copied into the
preset's own asset folder on save. Loading a preset copies those photos back
into the current reel and stores reel-relative paths on the insert. Send and
return routes restore as a pair: if either side is missing, unavailable, or
already in use, TayPE keeps the current hardware routes and latency offset,
warns you, and still loads the rest of the preset.

## Tail Handling

During playback, time-based effects (delay, reverb) keep processing across silent gaps between clips, so tails carry naturally. Pressing **Stop** clears insert tails for a clean restart.

## Input Routing

Input selection is mode-aware:

- Bus tracks keep the **Sender** label for orientation only. That row does not open an input menu or expose device-input choices.
- With an instrument insert loaded, the input menu shows MIDI sources only (All MIDI, Virtual Keyboard, hardware MIDI devices, or None).
- Without an instrument insert, the input menu shows audio sources only (Default, None, mono channels, stereo pairs).

Choosing a mono audio source from the input menu switches a regular audio track to mono strip mode. Choosing a stereo source switches it back to stereo. This is just a convenience from the UI menu; direct routing commands can still keep a mono input on a stereo strip when you need that.

When you load an instrument insert on an audio-routed track, TayPE automatically switches input to **All MIDI**. When the last instrument insert is removed, MIDI routes reset to default audio input.

Hosted instruments receive TayPE's transport timing, so tempo-synced plugins lock to the DAW's BPM, playhead position, and time signature.

If a project references an unavailable MIDI device, the strip shows **MIDI Device (offline)**. You can keep the stored route or switch to another input from the same menu.
