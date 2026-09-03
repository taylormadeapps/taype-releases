# Varispeed

Varispeed changes the transport playback speed for rehearsal and capture while preserving pitch.

## Control

The varispeed readout sits next to the tempo display on the transport bar.

- Default: `1.0x`
- Range: `0.5x` to `2.0x`
- Drag vertically to change speed.
- Shift-drag for finer changes.
- Double-click for numeric entry. TayPE accepts values such as `1.5`, `1.5x`, or `150%`.
- Cmd-click to reset to `1.0x`.
- Right-click for **Commit speed**.

When varispeed is active, the varispeed readout and tempo readout use the active varispeed colour.

## Tempo Display

The tempo display shows the effective tempo you are hearing. At `0.5x`, a 120 BPM reel plays and clicks as 60 BPM. At `2.0x`, it plays and clicks as 240 BPM.

To edit the project tempo itself, reset varispeed to `1.0x` first. TayPE blocks tempo edits while varispeed is engaged so the tempo field does not pretend the project tempo has changed.

## Commit Speed

To keep an auditioned speed, stop playback, right-click the varispeed readout
and choose **Commit speed**. Check the Cut name and new tempo in the confirmation.
Return or Escape cancels; click **Commit speed** to proceed.

TayPE multiplies this Cut's tempo by the playback speed, retimes its clips,
fades, automation, markers and zero point together, then resets varispeed to
`1.0x`. Pitch is preserved. The edit can be undone and redone as one action.
TayPE renders the audio before applying the change, with a progress bar while
the controls and MCP are locked. Original clip audio is untouched. Overlapping
clips and crossfades keep their full lengths and proportions at the new tempo.
Each clip uses the same stretch operation as a manual resize.

Existing rendered audio is stretched directly, preserving reverse and cropped
sections. Returning clip stretch to `1.0` and pitch to `0` retains that rendered
result; it does not replace it with the original audio. Undo restores the earlier
sound and settings.

Commit speed is unavailable during playback or recording.

Main and other Cuts can be committed independently. Referenced Cuts keep their
own committed speed. Committing a source Cut does not move its reference
boundaries in Main: longer content is cropped and shorter content ends early.
The live varispeed control affects the whole playback mix and stays at the same
setting when you switch Cuts.
Main's bar lines and metronome keep Main's tempo and time signature while a
referenced Cut plays.

Each Cut has its own tempo and time signature. An older Cut without either
setting uses Main's corresponding setting.

## Recording

Recording is allowed under varispeed. TayPE freezes the varispeed value for the duration of the take, then reconciles the recorded material after record-stop.

Live input and live-triggered instruments stay at real-time speed. Existing audio and MIDI clips follow the varispeed playback rate.

Loop boundaries remain timeline boundaries at every varispeed setting. TayPE
accounts for the stretcher's latency separately from instrument and insert
latency, so the repeat head, hosted plug-in transport, and visible playhead stay
on the same musical position.

## What Varispeed Is For

Use varispeed to rehearse hard sections slower, check feel faster, or capture a pass against a slower playback without changing the reel's project tempo.

When you manually stretch clips, their existing positions and lengths remain
visible while audio is rendered. The whole stretch is applied together when it
succeeds. If rendering fails, the stretch leaves those clips and their neighbours
unchanged, and TayPE shows a warning. Original audio files remain untouched.

When an MCP clip edit combines stretching with a move, fades or slip, those changes
are also applied together after rendering succeeds.

Later pitch and stretch edits keep the committed clip's trimmed and slipped
window. Splitting an overlap keeps the derived sound and the outer fade on
both remaining pieces. If TayPE cannot read a clip's audio bounds, trim, slip
and marker time edits are refused with a warning; the arrangement stays intact.
