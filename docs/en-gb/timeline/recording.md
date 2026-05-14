# Recording

## Ghost Clip

During audio recording, a translucent red "ghost clip" grows on each track admitted to the record pass, showing where audio is being captured. The waveform updates roughly once per second so you can see the signal coming in.

When you stop, each ghost clip is replaced by its real clip with the final waveform. Ordinary recorded clips are named `{Track Name}-takeN`, and `N` increments per track so repeated passes land as `Guitar-take1`, `Guitar-take2`, and so on.

Automation recording does not create ghost clips because TayPE is writing
breakpoints, not capturing new audio.

## Audio vs Automation Passes

The ruler header has an **A** automation button. That button decides what the
transport **Record** button means.

- **A off** — Record captures audio or instrument takes as normal, but only when at least one track is armed. Existing automation still plays, but TayPE does not write new automation.
- **A on** — Record captures automation for the parameter currently shown in the ruler header. Right-click the ruler **A** button to choose **Volume**, **Pan**, or **Width**. The transport **Record** button shows a white **A** badge in this mode. Move the relevant track control during the pass and TayPE writes breakpoint automation instead of creating new clips. Those breakpoint points draw live in the lane while the pass is still running. When the pass finishes, the line stays latched at the last value you wrote until a later breakpoint changes it.

Playback always follows existing automation whenever the transport is running,
including ordinary audio recording. **Return**, **Punch**, and **Do-Over**
still behave the same way; with automation view on, they control an automation
pass instead of an audio pass.

## Record Modes

Right-click the transport record button or open `Transport > Record Stop Mode` to
choose the record macro:

- **Return** — pressing **Return** again commits the pass, stops transport, and returns to the pass start.
- **Punch** — pressing **Return** again commits the pass and keeps playback rolling.
- **Do-Over** — pressing **Return** again commits only the current pass, deletes those just-recorded clips, seeks back to the pass start, and restarts recording through the current pre-roll / count-in path.

## Sync Slave Recording

Use `Preferences > Sync` to choose the MIDI input that carries MTC/MMC from
another DAW and enable slave mode, then use the transport **SYNC** badge to turn
slave mode on or off. `Transport > Sync Control` only shows or hides that toolbar
control; it does not enable the sync engine. The master timeline zero maps to
the selected cut zero point. TayPE infers
standard whole-hour SMPTE start offsets, so a DAW that sends `01:00:00:00` at
its project start, or rolls from short pre-roll before the hour, still maps the
whole-hour programme start to sync zero.

While **SYNC** is on, TayPE follows external locate, play, and stop. Pressing
**Record** does not change which tracks are armed. If transport is stopped, it
queues a synced take on the currently armed tracks and starts recording when the
external DAW sends Play. If transport is already rolling, it starts recording at
the current synced position. Pressing **Record** during the take punches out and
leaves external transport in control.

MTC full-frame messages locate/update the synced position only. Quarter-frame
MTC does not start transport by itself, but an MMC Locate followed by advancing
MTC is treated as the external DAW rolling. MMC Play / Deferred Play and Stop
are accepted; MMC Pause stops while TayPE is rolling and resumes from the latest
located sync position when TayPE is already parked by MMC Pause. MIDI realtime Start,
Continue, and Stop are also accepted on the sync input. Once external sync has started transport, TayPE chases MTC while
rolling so material drift snaps back to the mapped timecode position. If MTC
stops arriving while TayPE is chasing, TayPE stops at the last synced timecode
position using the normal stop fade before parking the head. Rolling locate and
chase uses the normal seek boundary in this first cut; it deliberately avoids
adding a separate splice path to ordinary playback.
Arming **SYNC** does not change ordinary local Play, Stop, Seek, loop playback,
or reel-end clamping. Those switch to slave timing only while external
locate/play/chase messages are actively driving the transport. Turning
**SYNC** off or changing the sync input discards queued external transport
actions before local play/stop takes over again.
The external DAW owns time in slave mode, so incoming positions are allowed to
run past the current reel extent instead of being clamped to the end of the
reel. Slave playback can roll on blank tape or beyond the current reel end
without extending the local reel until you actually record there.

Return, Punch, Do-Over, count-in, and loop-record modes are local recording
helpers and are ignored in sync slave mode. External Stop commits the take and
parks the head at the synced stop position.

## Timing

Recorded clips stay anchored to the position where you punched in. Latency compensation is applied internally so back-to-back takes keep the timing you performed.

If the loop braces are active, right-click the loop button or open
`Transport > Loop Record Mode` to choose what record means:

- **Auto Punch Record** — TayPE treats the left brace as punch-in and the right
  brace as punch-out, with playback staying linear after the punch instead
  of wrapping back around. When automation view is on, the same punch window
  applies to automation capture.
- **Loop Record** — transport wraps like playback while recording. Ordinary tracks
  keep the last full lap, or the first partial lap if you stop before the
  first wrap. Comp passes keep each lap as comp history, with the newest lap
  enabled by default. Automation capture wraps too and commits the latest
  completed touched pass when one exists, otherwise the current touched
  partial.

Latency compensation still keeps committed takes reaching the visible timing
window instead of ending short.

Right-click the metronome button in the ruler or open `Transport > Count-In` to
choose a one-shot pre-roll of **Off**, **1**, **2**, or **4** bars. The
matching click toggle also lives at `Transport > Metronome`. TayPE uses that
lead-in only for recording: with loop recording on, it backs up from the left
brace; with loop recording off, it backs up from the current tape head
position. Playback just starts from the current tape head; with loop playback
on, positions before the left brace run straight into the loop and positions
already past the right brace restart from the left brace, with no count-in
rewind. If the tape head is already on an anchor that cannot rewind any
earlier, TayPE keeps the head there, runs the count-in, and only then starts
capture while still committing the take at that same point. That applies at
the selected Cut's visible timeline zero and at literal timeline `0`, even if
the selected Cut zero has been moved later.
During any pre-roll, TayPE can force the
metronome on only where the lead-in would otherwise be silent.
The metronome enabled state and the chosen pre-roll bars are app-global
preferences, so TayPE brings them back on the next launch.

If you press **Stop** while recording, TayPE always commits the current pass first. In **Return** mode it then lands back at the pass start; in **Punch** and **Do-Over** it parks at the end of the committed take so what you just captured is immediately visible.

## Input and Output Routing

**Input** — click the input label in the track header.

- Audio tracks (no instrument insert): audio inputs only (Default, None, mono channels, stereo pairs).
- Instrument tracks (instrument insert present): MIDI inputs only (All MIDI, Virtual Keyboard, hardware MIDI devices, None).
- Bus tracks: the label reads **Sender** for orientation, but there is no input menu or device-input choice there.
- Comp buses: the visible input chooser is the group's shared comp input. New
  take tracks inherit that choice into their real inputs; child take tracks
  themselves hide input, MON, and record arm in the timeline.

Choosing a mono audio source switches a regular audio track to mono strip mode.
Choosing a stereo source switches it back to stereo. This is only a convenience
from the UI menu, not a hard routing rule.

When a track switches into instrument mode, input routes automatically change
to **All MIDI** and `MON` comes on straight away so the new instrument is live
without another click. When it switches back, MIDI routes reset to default
audio input.

**MON** — click the MON button to hear live input through the full track channel strip and inserts. When transport is stopped, MON passes live input only; timeline clips stay silent until you press play. **Auto Monitor** in the Tracks menu is off by default; when enabled, record-arm changes on regular audio tracks turn MON on and off with record arm. MON remains independently clickable, and buses, the master, comp-child, and instrument tracks are excluded from Auto Monitor. Instrument tracks keep MON visible too, and loading an instrument turns MON on immediately; record-arm on an instrument track only forces MON on when arming, and disarming leaves MON alone for live audition. **Record Follows Select** is on by default: selecting tracks arms the selected recordable tracks and disarms record arms outside that selection, while empty selection leaves the current armed set alone. On a plain bus, record-arm captures the routed sum feeding that bus, including direct output routes and sends; `MON` only decides whether you hear that bus through its strip during the pass. On a comp bus, `MON` now behaves like normal software monitoring for the group's shared comp input. Record-arm on the comp bus creates a new take track. Comp child tracks do not expose their own MON or record-arm controls in the UI while they belong to the group. During a live comp-take pass, the existing comp group stays silent so the new pass is not fighting the old takes in the speakers.
On instrument tracks, live MIDI monitoring now keeps the note's played phase
inside the block but hands it to the next guaranteed sandbox block, so you
get one steady shove of latency instead of random timing wobble that kills
the pocket.
When you record a monitor-armed instrument track, TayPE also stores that take
at the heard speaker-time, not the raw queue-arrival time. The instrument's
own timing is already in the captured source, and TayPE carries forward only
the extra monitor-alignment delay applied after that tap, so the grid and any
later re-render stay where you actually heard the note land.
Armed tracks stay armed while you switch Cuts inside the same reel. Loading a
different reel still clears that arm state.

**Output** — click the output label to choose where the track sends its audio: "Master" or any bus track you've created.

If you turn off bus mode on a track, any tracks routed to that bus are disconnected automatically. If your audio interface changes and a track references a missing channel, the input label appears greyed out — the setting is preserved until you plug it back in.
