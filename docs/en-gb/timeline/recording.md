# Recording

## Arming Tracks

Choose an input, enable monitoring if needed, then arm the track. Armed tracks record when you start a pass.

## Ghost Clip

While recording, TayPE shows a live recording clip so you can see the pass forming. The final clip replaces it only after the take has been safely committed.

## Audio vs Instrument Passes

Audio tracks record audio input. Instrument tracks can record MIDI and render through the instrument path depending on the track setup. Comp buses can capture shared instrument output into child takes where that workflow is active.

New comp child tracks use the comp bus name followed by an incremental number, such as `Lead Vocal - 1`, `Lead Vocal - 2`, and `Lead Vocal - 3`.

## Timing

Count-in, pre-roll, punch, loop, and record mode settings decide how the transport enters and exits a take. TayPE protects active takes by blocking timeline edits that would rewrite the structure mid-pass.

When a count-in runs before timeline zero or the selected Cut zero, the tape head stays parked until it finishes. Live monitoring stays active before transport starts and throughout count-in and pre-roll, but TayPE does not write a parked count-in block into the take, even if its hidden lead-in reaches the punch point. The next block begins exactly at punch so beat one is preserved. During ordinary moving pre-roll, if a block crosses punch, only the part from the exact recording boundary onwards is kept.

Instrument takes keep a 250 ms MIDI pickup window before the recording boundary. If you play a note fractionally early and it is still sounding when the take starts, the paired MIDI clip carries that note from its beginning. Notes that finish before the boundary are not included.

The metronome can be toggled on or off from the transport. Its click volume is set in **Audio Preferences** as a global dB level from **-60 dB** to **0 dB**; turn the metronome off when you want it fully muted.

Play / Pause is blocked while a recording pass is active; finish the take with **Record** or **Stop**.

When you finish a pass, TayPE closes the take to new input, lets any audio block already in progress complete, then commits the media. This keeps the end of the captured audio and MIDI together without admitting anything from a later transport state.

Return, Punch, Do-Over, Sooper Looper, and external-sync transport actions wait for terminal `completed` or confirmed `discarded` settlement. TayPE does not seek, delete a Do-Over pass, start its replacement, or move Sooper Looper to the next track while the take is still being finalised. If the take is explicitly discarded, Do-Over stops at the requested position without deleting a clip or starting a replacement pass. Repeated local Record or Stop presses do not change the first requested action. An external transport master remains authoritative, so its latest Play, Stop, or Locate command is applied after that same terminal settlement.

If TayPE cannot safely finalise a take, it shows **Recording Recovery** and keeps the captured media retained. **Retry** continues the same take when a safe retry is available. **Keep Retained** closes the dialog without changing or deleting anything; a persistent warning remains, and pressing Record or Stop opens the choices again. **Discard Take…** is shown only when discard is safe and opens a second confirmation before permanently deleting the retained media.

Until recovery completes or a confirmed discard settles, TayPE does not carry out the queued Return, Punch, Do-Over, Sooper Looper, or external-sync action. It also blocks a new recording and reel close. A confirmed discard is reported separately from a successfully committed take.

Quitting during recording first tries to finish the same take while the recording system is still live. It does not replace the original Record or Stop action. If that cannot be done safely within the quit check, TayPE refuses the quit, reopens Recording Recovery when a decision is needed, and leaves the reel and original queued action intact instead of treating application shutdown as recovery.

Right-click **Stop** to choose **Record Stop Mode**: Return, Punch, or Do-Over. Right-click **Record** to choose **Record Mode**: Auto Punch, Comp, Dub, or Sooper-Looper. Loop remains a separate switch.

**Auto Punch** records linearly. When Loop is enabled, the braces define one punch window.

**Comp** always creates comp history on an eligible ordinary audio or instrument track. With Loop disabled, the linear pass becomes a child take when recording stops. With Loop enabled, each captured lap becomes visible comp history; TayPE activates the last complete lap, keeps a trailing partial disabled, and leaves a partial active when the session never completed a full lap.

Comp promotes the ordinary target from the first committed take. If it already contains material inside the committed range, TayPE cuts at the range boundaries and moves that section to the first child take track. Material outside the range remains on the promoted parent, and the new recording appears on the next child take track. With Loop enabled the range is the braces; without Loop it is the linear take span. The new cuts use TayPE's normal short anti-click fades.

Only a real wrap from the right loop brace to the left starts a new recorded lap. Count-in, pre-roll, an audition pass, or a deliberate transport move cannot create a false lap.

The recording file always follows real elapsed capture time, while punch points, loop ownership, and recorded MIDI follow the reel timeline. TayPE freezes varispeed when the pass starts and uses that same relationship for every recorded source.

Choose **Dub** when you want layered takes. With Loop disabled, the linear pass becomes a child take marked **Don't Comp**. Original material spliced from the parent into the Dub range is marked Don't Comp too; only untouched parent material outside the range remains ordinary. With Loop enabled, each completed lap plays immediately while you record the next. On stop, every new lap remains enabled as a separate Don't Comp take beneath the comp bus; clips that were already enabled or disabled keep their state. Later comp edits keep Dub takes layered: promoting, moving, copying, dropping, importing, or resizing another take does not automatically mute or split a Dub take. Mute a Dub take explicitly when you no longer want to hear it.

Dub reserves one live feedback-delay ring for each armed target before recording starts. Its exact period follows the loop length and the varispeed captured at the start of the pass, including fractional periods. The total is capped at 512 MiB. If the current loop and armed tracks need more, TayPE refuses to start the pass and reports the required memory; shorten the loop or arm fewer tracks. Recording more laps does not consume more buffer memory, although the recording and take history continue to grow on disk.

For instrument tracks, each wrapped Comp or Dub take keeps only the MIDI played during that lap. Both modes keep that MIDI on the same lap as its audio, including when recording starts from another transport position or follows a count-in. Editing one take does not expose or change MIDI from another take.

The initial start of wrapped Comp or Dub uses the normal 250 ms MIDI pickup described above. At later loop splits, a much narrower rule prevents a fractionally early note from leaving carried audio with no editable MIDI: if the note begins less than 50 ms before the wrap and ends after it, the next lap receives that note from its beginning. A note ending on or before the wrap, or beginning 50 ms or more before it, stays only in the earlier lap. The same rule applies to both modes.

In Sooper Looper, the audition lap between instrument passes does not become part of the next recorded take. MIDI recorded on each pass remains aligned to that pass's loop braces. Sooper Looper waits for the current take to commit before it advances, cancels, or begins the next pass.

Live instrument monitoring keeps note, controller, expression, and release messages even if a plug-in is briefly late. A late message may sound at the next available moment, but TayPE keeps the musical order instead of silently dropping a note or leaving its release behind.

When a recorded take overlaps the head or tail of an existing clip, TayPE trims the older clip to the new take boundary with only a tiny anti-click fade instead of creating a long automatic crossfade. Recording inside an existing clip still splits the older clip around the new take.

## External Sync Recording

When TayPE is slaved to MTC/MMC, MMC Locate followed by advancing timecode can start playback or recording from the mapped position. MMC Pause stops while TayPE is rolling and resumes from the last synced timecode position when the matching pause command arrives again. Slave stop parks the head at the synced stop position.

External sync recording uses the tracks you already armed in TayPE. It does not change which tracks are armed, and it bypasses the local Return, Punch, and Do-Over record modes.

If the external master sends another Play, Stop, or Locate while a recorded take is still being finalised, its latest command is remembered and applied after terminal completion or confirmed discard settlement. It does not move the recording boundary that was already captured.

Set **SMPTE Zero** in Sync preferences when an external rig uses a different timecode origin. A short pre-roll before the selected timecode still maps correctly to the reel instead of wrapping to the wrong day.

During external sync, incoming positions are allowed to run past the current reel extent. Slave playback can roll on blank tape until the external transport stops or relocates.

TayPE chases MTC while rolling so material drift snaps back to the mapped timecode position.

## Input and Output Routing

Inputs and outputs can be selected from track headers or strips. Mono and stereo choices are remembered separately so changing channel mode does not force the wrong route shape into place.

For bus tracks, the label reads **Sender** for orientation only; bus routing is managed from sends and outputs.

## Record Follows Select and Auto Monitor

Record Follows Select arms the selected track as you move around the reel. It includes comp buses but excludes ordinary buses. Selecting a comp-child track or one of its clips arms the owning comp bus while leaving the child clip selected for editing. Auto Monitor follows the same scope, keeping armed comp buses monitored as well as regular recording tracks. Arming a comp bus with an instrument always enables monitoring so the instrument is immediately playable, even when both workflow preferences are off.

These are session workflow controls. They do not change the recorded media until you actually start a take.
