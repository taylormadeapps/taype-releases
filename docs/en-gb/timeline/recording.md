# Recording

## Ghost Clip

While recording, a translucent red "ghost clip" grows on each track admitted to the record pass, showing where audio is being captured. The waveform updates roughly once per second so you can see the signal coming in.

When you stop, each ghost clip is replaced by its real clip with the final waveform.

## Timing

Recorded clips stay anchored to the position where you punched in. Latency compensation is applied internally so back-to-back takes keep the timing you performed.

If you press **Stop** while recording, the head parks at the end of the committed take so what you just captured is immediately visible.

## Input and Output Routing

**Input** — click the input label in the track header.

- Audio tracks (no instrument insert): audio inputs only (Default, None, mono channels, stereo pairs).
- Instrument tracks (instrument insert present): MIDI inputs only (All MIDI, Virtual Keyboard, hardware MIDI devices, None).

When a track switches into instrument mode, input routes automatically change to **All MIDI**. When it switches back, MIDI routes reset to default audio input.

**MON** — click the MON button to hear live input through the full track channel strip and inserts. When transport is stopped, MON passes live input only; timeline clips stay silent until you press play. Instrument tracks keep MON visible too, even though record arm still mirrors it on and off.

**Output** — click the output label to choose where the track sends its audio: "Master" or any bus track you've created.

If you turn off bus mode on a track, any tracks routed to that bus are disconnected automatically. If your audio interface changes and a track references a missing channel, the input label appears greyed out — the setting is preserved until you plug it back in.
