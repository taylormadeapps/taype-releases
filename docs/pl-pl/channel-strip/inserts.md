# Wstawka Slots

The insert rack can host eight serial VST3 slots. By default TayPE shows slots
1-4; click **MORE** in the rack footer to reveal slots 5-8. Click an empty
slot to load a plugin from the scanner. Right-click a loaded slot for bypass,
remove, or to open the plugin editor.

When you choose a plugin from the insert menu, TayPE loads that choice after
the popup closes so nested submenu picks stay dependable.

When you load or re-enable a plugin, the target slot shows a small spinner
until TayPE finishes bringing that insert online.

The master bus follows the same rule: four slots visible by default, with the
same **MORE** toggle to reveal the full eight-slot rack.

The INSERTS power button works even before you load anything. If you switch the
rack off first, the next plugin you load comes in bypassed until you turn the
section back on.

## Wtyczka Manager

Otwórz **Narzędzia -> Wtyczka Manager** to organise the scanner catalogue before you
pick plugins from the channel strip.

- The **Enabled** checkbox controls whether a validated plugin appears in the insert menu.
- **Status** shows whether a plugin is **Validated**, **Disabled**, **Niepowodzenie**, or queued for **Rescan** on the next launch.
- **Type** separates instruments from effects.
- **Manufacturer** helps sort and filter larger collections.
- **Menu Path** lets you build your own nested insert menus. Type a path like
  `Dynamics/Compressors/Classics` and TayPE will create those child menus under
  **Effects** or **Instruments**. Slashes are the separator; backslashes are
  converted automatically when you commit the field.

If **Menu Path** is blank, the plugin sits directly inside the top-level
**Effects** or **Instruments** menu.

Its bundled Factory IR bank is normalised automatically to TayPE's house
format on bootstrap, so the shipped rooms actually appear in the selector
instead of getting dropped for being out of spec.
Fresh Tape Rooms instances default to the factory room shown as
**Dieppe Cathedral**, so the plug-in starts from the same known room even
after you add other IR libraries.

Inside **Tape Rooms**, the IR section now includes **Get Bricasti M7 IRs**.
That flow asks you to accept Samplicity's terms, gives the first alert a
real **Widok Samplicity T&Cs** button, then has TayPE download and install
the official archive automatically into `Documents/Taype/IRs/Bricasti M7`,
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
Its control section labels those tone-shaping controls as **Low Wytnij** and
**High Wytnij**, adds a **Duck** knob that self-ducks the wet return from the
incoming signal with a fixed medium attack and slow release, adds a **Mix**
knob for insert use, labels the IR topology picker
as **Channels**, and gives the send behaviour its own **Mode** toggle with
**Wysyłanie / Wstawka** choices. **Wysyłanie** is the default and forces a
100% wet return; flip to **Wstawka** to wake the Mix control up. Ducking always
happens on the wet path before Mix combines wet and dry. The Duck knob's gold arc shows live ducking activity rather than just mirroring the set depth.

The same **Stock** lane now ships **Ache-Delay** as TayPE's house delay.
It follows the same native editor language as Tape Rooms, but with a warmer
copper wash and a delay-first layout: **Free / Sync** timing, note divisions,
**Mono / Dual Stereo / Ping-Pong / Ping-Pong (Even)** routing, and the same
wet-path **Duck** behaviour keyed from the incoming signal. **Wysyłanie** is the
default output mode and forces a 100% wet return. Flip to **Wstawka** to bring
the stored **Mix** value back into play without rewriting it.

Use the row-level **Rescan** button to queue just one plugin for revalidation
next time TayPE launches. Use **Invalidate Cache** to queue a full catalogue
rescan; the current list stays visible and every row is marked for rescan.

## Comparison Meters

The insert panel shows two thin comparison meters for gain staging. The bar above the slots shows the level **into** the plugin chain. The bar below shows the level **coming out**.

The top meter carries a **PK** / **RMS** mode button. The bottom meter has an **AUTO** button — click it and TayPE listens for about 3 seconds, then writes a hidden post-insert trim so the output matches the input level.

The AUTO button stays dim on instrument insert chains, since there's no meaningful pre-rack audio reference to match against.

## Wtyczka Sandboxing

Wtyczki run in a sandboxed process. If a plugin crashes, TayPE keeps running — the slot shows an error state and you can reload or remove it.

The crash alert names the culprit plugin when possible. If TayPE can't attribute it, it says the culprit is unknown and keeps audio running dry.

Loading a saved plug-in preset happens with transport stopped. TayPE fully
reloads that insert from the saved preset chunk so processors that ignore hot
state swaps still come back in the recalled state instead of slipping back to
the default patch.

## Tail Handling

During playback, time-based effects (delay, reverb) keep processing across silent gaps between clips, so tails carry naturally. Pressing **Zatrzymaj** clears insert tails for a clean restart.

## Wejście Routing

Wejście selection is mode-aware:

- Szyna tracks keep the **Sender** label for orientation only. That row does not open an input menu or expose device-input choices.
- With an instrument insert loaded, the input menu shows MIDI sources only (Wszystkie MIDI, Virtual Keyboard, hardware MIDI devices, or Brak).
- Without an instrument insert, the input menu shows audio sources only (Domyślne, Brak, mono channels, stereo pairs).

When you load an instrument insert on an audio-routed track, TayPE automatically switches input to **Wszystkie MIDI**. When the last instrument insert is removed, MIDI routes reset to default audio input.

Hosted instruments receive TayPE's transport timing, so tempo-synced plugins lock to the DAW's BPM, playhead position, and time signature.

If a project references an unavailable MIDI device, the strip shows **MIDI Device (offline)**. You can keep the stored route or switch to another input from the same menu.
