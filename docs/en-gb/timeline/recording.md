# Recording

## Ghost Clip

While recording, a translucent red "ghost clip" grows on each track admitted to the record pass, showing where audio is being captured. The waveform updates roughly once per second so you can see the signal coming in.

When you stop, each ghost clip is replaced by its real clip with the final waveform.

## Record Modes

Right-click the transport record button to choose the record macro:

- **Return** — pressing **Return** again commits the pass, stops transport, and returns to the pass start.
- **Punch** — pressing **Return** again commits the pass and keeps playback rolling.
- **Do-Over** — pressing **Return** again commits only the current pass, deletes those just-recorded clips, seeks back to the pass start, and restarts recording through the current pre-roll / count-in path.

## Timing

Recorded clips stay anchored to the position where you punched in. Latency compensation is applied internally so back-to-back takes keep the timing you performed.

If the loop braces are active, recording does **not** cycle. TayPE treats the
left brace as punch-in and the right brace as punch-out, with playback staying
linear after the punch instead of wrapping back around. Latency compensation
keeps the committed take reaching the visible right brace instead of ending
short.

Right-click the metronome button in the ruler to choose a one-shot pre-roll of
**Off**, **1**, **2**, or **4** bars. Playback always uses that lead-in: with
loop playback on, TayPE backs up from the left brace; with loop playback off,
it backs up from the current tape head position. During any pre-roll, TayPE
can force the metronome on only where the lead-in would otherwise be silent.

If you press **Stop** while recording, TayPE always commits the current pass first. In **Return** mode it then lands back at the pass start; in **Punch** and **Do-Over** it parks at the end of the committed take so what you just captured is immediately visible.

## Input and Output Routing

**Input** — click the input label in the track header.

- Audio tracks (no instrument insert): audio inputs only (Default, None, mono channels, stereo pairs).
- Instrument tracks (instrument insert present): MIDI inputs only (All MIDI, Virtual Keyboard, hardware MIDI devices, None).
- Bus tracks: the label reads **Sender** for orientation, but there is no input menu or device-input choice there.

When a track switches into instrument mode, input routes automatically change to **All MIDI**. When it switches back, MIDI routes reset to default audio input.

**MON** — click the MON button to hear live input through the full track channel strip and inserts. When transport is stopped, MON passes live input only; timeline clips stay silent until you press play. Instrument tracks keep MON visible too, even though record arm still mirrors it on and off.

**Output** — click the output label to choose where the track sends its audio: "Master" or any bus track you've created.

If you turn off bus mode on a track, any tracks routed to that bus are disconnected automatically. If your audio interface changes and a track references a missing channel, the input label appears greyed out — the setting is preserved until you plug it back in.
