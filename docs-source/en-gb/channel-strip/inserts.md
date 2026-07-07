# Insert Slots

Insert slots host VST3 effects, instruments, hardware inserts, MIDI Out, and TayPE stock processors.

## Plugin Picker

Use the insert picker to choose scanned VST3 plugins, bundled TayPE stock plugins, hardware insert, or MIDI Out. The picker has its own close button, search/filter behaviour, and clear slot actions.

The insert picker is a searchable chooser with `Stock`, `Effects`, and `Instruments` exclusive first-branch tabs. Empty search browses the plug-in folder hierarchy inside the custom picker with a fixed Back/path strip. The selected tab is
remembered while TayPE is running.

TayPE stock entries include **Taype Rooms**, **Ache-Delay**, **T-Clipper**, **Taype Drive**, **Taype EQ**, and **Taype Comp**. These are bundled for TayPE workflows and remain safe if opened outside their intended host path.

## Bypass vs Disable

Bypass keeps the insert in the chain and returns latency-aligned dry audio. Disable unloads the insert from the processing graph while keeping the assignment and saved state in the reel.

The Inserts section power button bypasses or re-enables the rack without changing each slot's own bypass state. Option-click the same button to toggle a red rack override that forces all insert plug-ins offline without changing each slot's stored enable or bypass state.

In Archive View, active or bypassed insert rows show as offline red and plugin edits stay locked until you unarchive the track.

## Instruments and MIDI Out

Instrument inserts and MIDI Out live in the first slot. MIDI Out can send to a Core MIDI destination, keep or force a MIDI channel, and compensate timing with an early-send amount.

## Hardware Inserts

Hardware Insert sends audio out to external gear and returns it to the strip. Choose output and input routes, add trim, optional filtering, recall images, and latency offset. TayPE rejects routes that would overlap the master output.

Hardware Insert presets live in `[TAPE_HOME]/Presets/Hardware Inserts`.

## Sidechains

Plugins with sidechain inputs can receive an eligible source tap. Sidechain assignments are part of the insert state and follow the reel.

On bus strips, the input row keeps a **Sender** label for orientation only; bus routing lives in sends and outputs rather than an input picker.

## Sandboxing

Third-party plugins run in a sandbox helper so a plugin fault is less likely to take the whole app down. If a plugin becomes stuck, restart its sandbox from the insert tools.
