# Recording

## Arming Tracks

Choose an input, enable monitoring if needed, then arm the track. Armed tracks record when you start a pass.

## Ghost Clip

While recording, TayPE shows a live recording clip so you can see the pass forming. The final clip is committed when recording stops.

## Audio vs Instrument Passes

Audio tracks record audio input. Instrument tracks can record MIDI and render through the instrument path depending on the track setup. Comp buses can capture shared instrument output into child takes where that workflow is active.

New comp child tracks use the comp bus name followed by an incremental number, such as `Lead Vocal - 1`, `Lead Vocal - 2`, and `Lead Vocal - 3`.

## Timing

Count-in, pre-roll, punch, loop, and record mode settings decide how the transport enters and exits a take. TayPE protects active takes by blocking timeline edits that would rewrite the structure mid-pass.

The metronome can be toggled on or off from the transport. Its click volume is set in **Audio Preferences** as a global dB level from **-60 dB** to **0 dB**; turn the metronome off when you want it fully muted.

Play / Pause is blocked while a recording pass is active; finish the take with **Record** or **Stop**.

In Loop Record comp history, TayPE activates the last complete lap from the recording session. If you stop part-way through the next lap, that partial take is kept but disabled. When the session never completes a full lap, the partial take remains active.

For instrument tracks, each Loop Record take keeps only the MIDI played during that lap. Count-in does not shift the first lap, and editing one take does not expose or change MIDI from another take.

In Sooper Looper, the audition lap between instrument passes does not become part of the next recorded take. MIDI recorded on each pass remains aligned to that pass's loop braces.

Live instrument monitoring keeps note, controller, expression, and release messages even if a plug-in is briefly late. A late message may sound at the next available moment, but TayPE keeps the musical order instead of silently dropping a note or leaving its release behind.

When a recorded take overlaps the head or tail of an existing clip, TayPE trims the older clip to the new take boundary with only a tiny anti-click fade instead of creating a long automatic crossfade. Recording inside an existing clip still splits the older clip around the new take.

## External Sync Recording

When TayPE is slaved to MTC/MMC, MMC Locate followed by advancing timecode can start playback or recording from the mapped position. MMC Pause stops while TayPE is rolling and resumes from the last synced timecode position when the matching pause command arrives again. Slave stop parks the head at the synced stop position.

External sync recording uses the tracks you already armed in TayPE. It does not change which tracks are armed, and it bypasses the local Return, Punch, and Do-Over record modes.

Set **SMPTE Zero** in Sync preferences when an external rig uses a different timecode origin. A short pre-roll before the selected timecode still maps correctly to the reel instead of wrapping to the wrong day.

During external sync, incoming positions are allowed to run past the current reel extent. Slave playback can roll on blank tape until the external transport stops or relocates.

TayPE chases MTC while rolling so material drift snaps back to the mapped timecode position.

## Input and Output Routing

Inputs and outputs can be selected from track headers or strips. Mono and stereo choices are remembered separately so changing channel mode does not force the wrong route shape into place.

For bus tracks, the label reads **Sender** for orientation only; bus routing is managed from sends and outputs.

## Record Follows Select and Auto Monitor

Record Follows Select arms the selected track as you move around the reel. Auto Monitor keeps eligible armed tracks monitored so live input and instrument auditioning stay ready without extra clicks.

These are session workflow controls. They do not change the recorded media until you actually start a take.
