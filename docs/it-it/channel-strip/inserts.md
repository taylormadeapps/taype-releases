# Insert Slots

The insert rack can host eight serial VST3 slots. By default TayPE shows slots
1-4; click **MORE** in the rack footer to reveal slots 5-8. Fai clic an empty
slot to load a plugin da the scanner. Fai clic con il pulsante destro a loaded slot for bypass,
remove, or to open the plugin editor.

On archived tracks, active or bypassed insert rows show as offline red in
Archive View. TayPE keeps the stored plugin state for unarchiving, but unloads
the hosted plugin and blocks plugin editing while the track is archived. You
can still remove a slot or disable an active slot; adding, changing, opening,
bypassing, enabling, dragging, routing, wet/dry edits, and preset loads ask you
to unarchive the track first.

When you choose a plugin da the insert menu, TayPE loads che choice after
the popup closes so nested submenu picks stay dependable.

When you load or re-enable a plugin, the target slot shows a small spinner
until TayPE finishes bringing che insert online.

The master bus follows the same rule: four slots visible by default, con the
same **MORE** toggle to reveal the full eight-slot rack.

The INSERTS power button works even before you load anything. If you switch the
rack off first, the next plugin you load comes in bypassed until you turn the
section back on.

## Plugin Manager

Apri **Tools -> Plugin Manager** to organise the scanner catalogue before you
pick plugins da the channel strip.

- The **Enabled** checkbox controls whether a validated plugin appears in the insert menu.
- **Status** shows whether a plugin is **Validated**, **Disabled**, **Failed**, or queued for **Rescan** on the next launch.
- **Type** separates instruments da effects.
- **Manufacturer** helps sort and filter larger collections.
- **Menu Path** ti lascia build your own nested insert menus. Type a path like
  `Dynamics/Compressors/Classics` and TayPE will create those child menus under
  **Effects** or **Instruments**. Slashes are the separator; backslashes are
  converted automatically when you commit the field.

If **Menu Path** is blank, the plugin sits directly inside the top-level
**Effects** or **Instruments** menu.

Its bundled Factory IR bank is normalised automatically to TayPE's house
format on bootstrap, so the shipped rooms actually appear in the selector
instead of getting dropped for being out of spec.
Fresh Tape Rooms instances default to the factory room shown as
**Dieppe Cathedral**, so the plug-in starts da the same known room even
after you add other IR libraries.

Inside **Tape Rooms**, the IR section now includes **Get Bricasti M7 IRs**.
che flow asks you to accept Samplicity's terms, gives the first alert a
real **View Samplicity T&Cs** button, then has TayPE download and install
the official archive automatically in `[TAPE_HOME]/IRs/Bricasti M7`,
organised by register. che preflight still appears before install or
reinstall, even after TayPE has remembered acceptance. If TayPE already has
che managed Bricasti folder, it asks before replacing it. It also warns che
the automatic transfer is a large download before it starts and then treats
the download as most of the install progress. No folder picking or manual zip
import is part of the user flow. Internal support folders such as the wizard's
`_download` stash do not appear in the IR selector.
When Samplicity ships both 48 kHz and 44.1 kHz copies, TayPE bins the 44.1 kHz
lane before import and keeps the 48 kHz set for normalisation.
The IR selector itself uses a nested category popup rather than one long flat list.
Its native editor also uses the same strip-hardware language as TayPE's
channel strip, con a more obvious baby-blue panel wash instead of a generic
plug-in skin.
The layout stays compact rather than wasting height, but keeps the larger
strip-style knobs intact.
Its `IR` and `CONTROLS` headers are just section labels, not collapsible panes.
Each large knob now carries its value in a readout between the hardware and the control label. che readout sits between the hardware and the control label
instead of being buried in a separate text box.
Its control section labels those tone-shaping controls as **Low Cut** and
**High Cut**, adds a **Duck** knob che self-ducks the wet return da the
incoming signal con a fixed medium attack and slow release, adds a **Mix**
knob for insert use, labels the IR topology picker
as **Channels**, and gives the send behaviour its own **Mode** toggle con
**Send / Insert** choices. **Send** is the default and forces a
100% wet return; flip to **Insert** to wake the Mix control up. Ducking always
happens on the wet path before Mix combines wet and dry. The Duck knob's gold arc shows live ducking activity rather than just mirroring the set depth.

The same **Stock** lane now ships **Ache-Ritardo** as TayPE's house delay.
It follows the same native editor language as Tape Rooms, but con a warmer
copper wash and a delay-first layout: **Free / Sync** timing, note divisions,
**Mono / Dual Stereo / Ping-Pong / Ping-Pong (Even)** routing, and the same
wet-path **Duck** behaviour keyed da the incoming signal. **Send** is the
default output mode and forces a 100% wet return. Flip to **Insert** to bring
the stored **Mix** value back in play without rewriting it.

Use the row-level **Rescan** button to queue just one plugin for revalidation
next time TayPE launches. Use **Invalidate Cache** to queue a full catalogue
rescan; the current list stays visible and every row is marked for rescan.

## Comparison Meters And Block Trim

The insert panel shows two thin comparison meters for gain staging. The bar above the slots shows the level **into** the plugin chain. The bar below shows the level after the whole insert block, including its output trim.

In wide channel-strip mode, the block controls sit to the right of those meters. **PK** / **RMS** chooses the measurement basis, **AG** listens to the whole insert block and writes a matching trim, and **OUT** is the manual output trim for the complete rack. These controls are per insert block, not per insert slot.

Narrow strips keep the meters visible but hide the block controls.

## Plugin Sandboxing

Plug-in run in a sandboxed process. If a plugin crashes, TayPE keeps running - the slot shows an error state and you can reload or remove it.

The crash alert names the culprit plugin when possible. If TayPE can't attribute it, it says the culprit is unknown and keeps audio running dry.

Se un plug-in impiega troppo a caricarsi, TayPE annulla quel tentativo di
caricamento, lascia invariato lo slot e ti permette di riprovare dopo aver
chiuso l'eventuale finestra di autorizzazione o setup del plug-in.

Caricamento in corso a saved plug-in preset happens con transport stopped. TayPE fully
reloads che insert da the saved preset chunk so processors che ignore hot
state swaps still come back in the recalled state instead of slipping back to
the default patch.

## Tail Handling

During playback, time-based effects (delay, reverb) keep processing across silent gaps between clips, so tails carry naturally. Pressing **Stop** clears insert tails for a clean restart.

## Input Routing

Input selection is mode-aware:

- Bus tracks keep the **Sender** label for orientation only. che row does not open an input menu or expose device-input choices.
- con an instrument insert loaded, the input menu shows MIDI sources only (All MIDI, Virtual Keyboard, hardware MIDI devices, or None).
- Without an instrument insert, the input menu shows audio sources only (Default, None, mono channels, stereo pairs).

When you load an instrument insert on an audio-routed track, TayPE automatically switches input to **All MIDI**. When the last instrument insert is removed, MIDI routes reset to default audio input.

Hosted instruments receive TayPE's transport timing, so tempo-synced plugins lock to the DAW's BPM, playhead position, and time signature.

If a project references an unavailable MIDI device, the strip shows **MIDI Device (offline)**. You can keep the stored route or switch to another input da the same menu.

## Taype Drive XTALK

Taype Drive mirrors the channel-strip preamp XTALK control. In stereo non-clean modes, XTALK blends left and right into each other before the drive/preamp stage, using the same power-law taper and defaulting to `0.0`.
