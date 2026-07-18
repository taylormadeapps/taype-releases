# Recording

## Arming Tracks

Choose an input, enable monitoring if needed, then arm the track. Armed tracks record when you start a pass.

## Ghost Clip

While recording, TayPE shows a live recording clip so you can see the pass forming. The final clip is committed when recording stops.

## Audio vs Instrument Passes

Audio tracks record audio input. Instrument tracks can record MIDI and render through the instrument path depending on the track setup. Comp buses can capture shared instrument output into child takes where that workflow is active.

## Timing

Count-in, pre-roll, punch, loop, and record mode settings decide how the transport enters and exits a take. TayPE protects active takes by blocking timeline edits that would rewrite the structure mid-pass.

Live monitoring stays active before transport starts and throughout count-in and pre-roll. TayPE does not write a parked count-in block into the take, even if its hidden lead-in reaches the punch point. The next block begins exactly at punch so beat one is preserved. During ordinary moving pre-roll, if a block crosses punch, only the part from the exact recording boundary onwards is kept.

Instrument takes keep a 250 ms MIDI pickup window before the recording boundary. If you play a note fractionally early and it is still sounding when the take starts, the paired MIDI clip carries that note from its beginning. Notes that finish before the boundary are not included.

Play / Pause is blocked while a recording pass is active; finish the take with **Record** or **Stop**.

When you finish a pass, TayPE closes the take to new input, lets any audio block already in progress complete, then commits the media. This keeps the end of the captured audio and MIDI together without admitting anything from a later transport state.

In Loop Record comp history, TayPE activates the last complete lap from the recording session. If you stop part-way through the next lap, that partial take is kept but disabled. When the session never completes a full lap, the partial take remains active.

Only a real wrap from the right loop brace to the left starts a new recorded lap. Count-in, pre-roll, an audition pass, or a deliberate transport move cannot create a false lap.

The recording file always follows real elapsed capture time, while punch points, loop ownership, and recorded MIDI follow the reel timeline. TayPE freezes varispeed when the pass starts and uses that same relationship for every recorded source.

Loop Record (Dub) sizes its fixed live loop buffers from the loop length and the varispeed captured at the start of the pass. The 512 MiB session limit still applies; recording more laps increases take history on disk, not the live buffer allocation. Later comp edits keep Dub takes layered: promoting, moving, copying, dropping, importing, or resizing another take does not automatically mute or split a Dub take. Mute a Dub take explicitly when you no longer want to hear it.

Loop Record and Loop Record (Dub) keep recorded instrument MIDI on the same lap as its audio, including when recording starts from another transport position or follows a count-in.

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
