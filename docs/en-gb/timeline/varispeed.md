# Varispeed

Varispeed changes the transport playback speed for rehearsal and capture while preserving pitch.

## Control

The varispeed readout sits next to the tempo display on the transport bar.

- Default: `1.0x`
- Range: `0.5x` to `2.0x`
- Drag vertically to change speed.
- Shift-drag for finer changes.
- Double-click for numeric entry. TayPE accepts values such as `1.5`, `1.5x`, or `150%`.
- Right-click to reset to `1.0x`.

When varispeed is active, the varispeed readout and tempo readout use the active varispeed colour.

## Tempo Display

The tempo display shows the effective tempo you are hearing. At `0.5x`, a 120 BPM reel plays and clicks as 60 BPM. At `2.0x`, it plays and clicks as 240 BPM.

To edit the project tempo itself, reset varispeed to `1.0x` first. TayPE blocks tempo edits while varispeed is engaged so the tempo field does not pretend the project tempo has changed.

## Recording

Recording is allowed under varispeed. TayPE freezes the varispeed value for the duration of the take, then reconciles the recorded material after record-stop.

Live input and live-triggered instruments stay at real-time speed. Existing audio and MIDI clips follow the varispeed playback rate.

Loop boundaries remain timeline boundaries at every varispeed setting. TayPE
accounts for the stretcher's latency separately from instrument and insert
latency, so the repeat head, hosted plug-in transport, and visible playhead stay
on the same musical position.

## What Varispeed Is For

Use varispeed to rehearse hard sections slower, check feel faster, or capture a pass against a slower playback without changing the reel's project tempo.
