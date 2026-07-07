# Insert Slots

Insert slots host VST3 effects, instruments, hardware inserts, MIDI Out, and TayPE stock processors.

## Plugin Picker

Use the insert picker to choose scanned VST3 plugins, bundled TayPE stock plugins, hardware insert, or MIDI Out. The picker has its own close button, search/filter behaviour, and clear slot actions.

TayPE stock entries include **Taype Rooms**, **Ache-Delay**, **T-Clipper**, **Taype Drive**, **Taype EQ**, and **Taype Comp**. These are bundled for TayPE workflows and remain safe if opened outside their intended host path.

## Bypass vs Disable

Bypass keeps the insert in the chain and returns latency-aligned dry audio. Disable unloads the insert from the processing graph while keeping the assignment and saved state in the reel.

## Instruments and MIDI Out

Instrument inserts and MIDI Out live in the first slot. MIDI Out can send to a Core MIDI destination, keep or force a MIDI channel, and compensate timing with an early-send amount.

## Hardware Inserts

Hardware Insert sends audio out to external gear and returns it to the strip. Choose output and input routes, add trim, optional filtering, recall images, and latency offset. TayPE rejects routes that would overlap the master output.

## Sidechains

Plugins with sidechain inputs can receive an eligible source tap. Sidechain assignments are part of the insert state and follow the reel.

## Listen Bus

The master strip has an ear button for the global Listen Bus. It is a monitor-only insert rack after the master fader and LaForgé processing, with the same insert mini meters, wet/dry controls, output trim, and gain compensation controls as a channel insert section.

By default the Listen Bus processes the main master monitor path. If you choose a spare stereo hardware output, TayPE taps the master output into the Listen Bus and sends the processed monitor chain to that output while keeping the normal master output time-aligned.

Listen Bus settings are saved globally in TayPE, not in the reel, and are not included in normal exports or prints.

## Sandboxing

Third-party plugins run in a sandbox helper so a plugin fault is less likely to take the whole app down. If a plugin becomes stuck, restart its sandbox from the insert tools.
