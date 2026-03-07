# Insert Slots

Four serial plugin slots for VST3 plugins. Click an empty slot to load a plugin from the scanner. Right-click a loaded slot for bypass, remove, or to open the plugin editor.

The master bus has the same four insert slots, so you can run processing directly on the master strip.

## Comparison Meters

The insert panel shows two thin comparison meters for gain staging. The bar above the slots shows the level **into** the plugin chain. The bar below shows the level **coming out**.

The top meter carries a **PK** / **RMS** mode button. The bottom meter has an **AUTO** button — click it and TayPE listens for about 3 seconds, then writes a hidden post-insert trim so the output matches the input level.

The AUTO button stays dim on instrument insert chains, since there's no meaningful pre-rack audio reference to match against.

## Plugin Sandboxing

Plugins run in a sandboxed process. If a plugin crashes, TayPE keeps running — the slot shows an error state and you can reload or remove it.

The crash alert names the culprit plugin when possible. If TayPE can't attribute it, it says the culprit is unknown and keeps audio running dry.

## Tail Handling

During playback, time-based effects (delay, reverb) keep processing across silent gaps between clips, so tails carry naturally. Pressing **Stop** clears insert tails for a clean restart.

## Input Routing

Input selection is mode-aware:

- With an instrument insert loaded, the input menu shows MIDI sources only (All MIDI, Virtual Keyboard, hardware MIDI devices, or None).
- Without an instrument insert, the input menu shows audio sources only (Default, None, mono channels, stereo pairs).

When you load an instrument insert on an audio-routed track, TayPE automatically switches input to **All MIDI**. When the last instrument insert is removed, MIDI routes reset to default audio input.

Hosted instruments receive TayPE's transport timing, so tempo-synced plugins lock to the DAW's BPM, playhead position, and time signature.

If a project references an unavailable MIDI device, the strip shows **MIDI Device (offline)**. You can keep the stored route or switch to another input from the same menu.
