# Varispeed

Varispeed changes the transport playback speed for rehearsal and capture while preserving pitch.

## Control

The On/Off button sits immediately left of the speed readout on the transport bar.

- **On:** plays at the displayed factor, from `0.5x` to `2.0x`.
- **Off:** plays at `1.0x`. The retained factor is grey, struck through and disabled.
  Switch on to restore it and enable editing.
- Drag the enabled readout vertically; Shift-drag makes finer changes.
- Double-click to type `1.5`, `1.5x`, or `150%`.
- Cmd-click to reset the factor to `1.0x`, keeping varispeed on.
- Right-click for **Commit speed**.

Varispeed starts off at `1.0x`. The button has a yellow background when on;
the factor and tempo readouts also use the active colour, including at `1.0x`.
The factor and On/Off state are remembered when you save and reopen the reel.
They stay the same when switching Cuts.

Press Return to apply a typed value. Escape or clicking elsewhere cancels it.
Use a decimal point, for example `0.75`; `75` without `%` means a factor of 75.
Invalid entries leave the current value unchanged and show a warning. Factors
outside `0.5x`–`2.0x` are limited to the nearest endpoint, with a warning showing
the applied value. If another session change cancels an unfinished edit, TayPE
also explains that cancellation. Edit outcomes are available in **Tools → Session Log**.

## Tempo Display

The tempo display shows the effective tempo you hear. With varispeed on, a
120 BPM Cut at `0.5x` plays and clicks at 60 BPM; at `2.0x`, it plays at 240 BPM.

While **on**, dragging, typing or tapping tempo adjusts the factor, even at
`1.0x`. The Cut's stored tempo and clips stay unchanged. For example, base
120 BPM at `0.5x` shows 60; entering 90 sets `0.75x`.

While **off**, tempo edits change the Cut's stored BPM and retain the factor.
Switching on again applies that factor to the new stored tempo. For example,
switching off at `0.75x`, changing the stored tempo to 100, then switching on
plays at 75 BPM.

You can enter tempo with or without `BPM`, for example `120` or `120 BPM`.
With varispeed on, the allowed tempo is half to twice the Cut's stored BPM.
For a Cut at 180 BPM, that is 90–360 BPM; an entry beyond those limits shows
the applied limit and an explanation. With varispeed off, the allowed stored
tempo is 20–999 BPM.

Changing Cut, switching On/Off or changing tempo/speed another way starts a fresh
tap sequence. If recording starts during a tempo or speed drag, TayPE cancels the
unfinished drag and records at the last committed settings. Recording freezes
both the factor and On/Off button. Both can change during ordinary playback.

## Commit Speed

To keep an auditioned speed, stop playback, right-click the varispeed readout
and choose **Commit speed**. Check the Cut name and new tempo in the confirmation.
Return or Escape cancels; click **Commit speed** to proceed.

TayPE multiplies this Cut's tempo by the playback speed, retimes its clips,
fades, automation, markers and zero point together, then resets varispeed to
`1.0x` and switches it off. Subsequent tempo edits change the Cut's stored BPM.
Pitch is preserved. Undo restores the earlier Cut, factor and On/Off state;
redo restores the committed result with varispeed off.
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
