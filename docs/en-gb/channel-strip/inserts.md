# Insert Slots

The insert rack can host eight serial VST3 slots. In the full-width docked
strip TayPE shows slots 1-4 by default; click **MORE** in the rack footer to
reveal slots 5-8. Narrow mixer strips show all eight slots all the time and
drop the MORE/LESS control. Click an empty slot to load a plugin from the
insert picker. Right-click a loaded slot for bypass, remove, or to open the
plugin editor.

When you choose something from the insert menu, TayPE loads that choice after
the popup closes so nested submenu picks stay dependable, then opens that
plug-in window straight away when the load succeeds.

When you load or re-enable a plugin, the target slot shows a small spinner
until TayPE finishes bringing that insert online.

The master bus follows the same rule in the full-width strip: four slots
visible by default, with the same **MORE** toggle to reveal the full eight-slot rack.

The INSERTS power button works even before you load anything. If you switch the
rack off first, the next plugin you load comes in bypassed until you turn the
section back on.

The **INSERTS** header always lets you collapse or reopen the rack, even when no plugins are loaded.

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

The insert picker is split into **Extensions**, **Effects**, and
**Instruments**. **Extensions** holds TayPE-shipped inserts such as
**The Convolver** and the built-in **External MIDI Out**.

Only insert **1** can host an instrument or **External MIDI Out**.
Slots **2-8** stay audio-effects only, but audio-FX extensions like
**The Convolver** can load in any slot.

## Plug-in Window

Click a loaded slot to open that plug-in's window. TayPE adds a slim toolbar
across the top with **Bypass**, **Disable**, a `Preset:` label, and a preset
menu on the left, plus a `Sidechain:` label and selector on the right.
That **Disable** toggle uses the same stop-to-edit enable/disable path as the
insert slot itself and keeps the plug-in window open instead of unloading the
plug-in out from under it.
If no plug-in preset is currently active, that selector reads `None`.
The window now follows the plug-in's own resize rules, so it can't be dragged
smaller than the plug-in's minimum size, larger than its maximum, or into a
cropped shape that breaks the editor's aspect.

Plug-in presets live in `Documents/Taype/Presets/FX` for effects and
`Documents/Taype/Presets/Instruments` for instruments. TayPE keeps each
plug-in's own library in a clean plug-in-name subfolder there. Older preset
folders saved with the previous UID suffix still load. If the preset name contains `/`,
TayPE mirrors that path as nested folders on disk and nested submenus in the
preset popup. The menu only shows presets that belong to the current plug-in.
Saving an `INSERTS` section preset from the channel strip also writes companion
plug-in presets into that plug-in's own `CSB/<Section Preset Path>` folder.
When you load that insert-section preset later, TayPE restores matching
plug-ins from those `CSB/...` presets too.

Loading a plug-in preset follows the same stopped-transport rule as other
insert edits. TayPE now fully reloads that insert from the saved preset chunk,
so processors that ignore hot state swaps still come back in the recalled
state instead of quietly snapping to the default patch.

Bypass can still toggle while the transport is running. **Disable** cannot:
if you try it from the plug-in window while playback is rolling, TayPE warns
you to stop transport first.

The sidechain selector is a placeholder for now. It only shows `Coming Soon`
and does not change routing yet.

Open **MIDI Out** to choose the Core MIDI destination, pick `Any` or a fixed
channel, and set a timing advance. TayPE starts new MIDI Out inserts at the
current corrected interface round-trip from Audio prefs so the external synth
return can record back in time on the track's audio input.

Use the row-level **Rescan** button to queue just one plugin for revalidation
next time TayPE launches. Use **Invalidate Cache** to queue a full catalogue
rescan; the current list stays visible and every row is marked for rescan.

## Comparison Meters

The insert panel shows two thin gain-staging meters. The bar above the slots
shows the level **into** the plugin chain. The bar below shows the level
**coming out**.

These meters now use the same RMS-body + peak-tick treatment as the preamp
meters, and they follow the global meter scale setting. The old **PK/RMS**
mode button and insert **AUTO** gain-match button are gone.

## Plugin Sandboxing

Plugins run in a sandboxed process. If a plugin crashes, TayPE keeps running — the slot shows an error state and you can reload or remove it.

The crash alert names the culprit plugin when possible. If TayPE can't attribute it, it says the culprit is unknown and keeps audio running dry.

## Tail Handling

During playback, time-based effects (delay, reverb) keep processing across silent gaps between clips, so tails carry naturally. Pressing **Stop** clears insert tails for a clean restart.

If a plug-in adds heavy latency, TayPE recalculates playback timing before the
next pass so clips stay locked through that insert path. If you are starting
right on a big downbeat into a very latent chain, give yourself a touch of
lead-in for the cleanest first transient.

## Input Routing

Input selection is mode-aware:

- With an instrument insert loaded, the input menu shows MIDI sources only (All MIDI, Virtual Keyboard, hardware MIDI devices, or None).
- Without an instrument insert, the input menu shows audio sources only (Default, None, mono channels, stereo pairs).

When you load an instrument insert on an audio-routed track, TayPE automatically switches input to **All MIDI**. When the last instrument insert is removed, MIDI routes reset to default audio input.

Hosted instruments receive TayPE's transport timing, so tempo-synced plugins lock to the DAW's BPM, playhead position, and time signature.

If a project references an unavailable MIDI device, the strip shows **MIDI Device (offline)**. You can keep the stored route or switch to another input from the same menu.
