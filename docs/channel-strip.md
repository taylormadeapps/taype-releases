# Channel Strip

Every track in TayPE has a built-in channel strip with processing that
runs before any plugin inserts hit the fader. The signal flows through
each stage in order:

**Input - Trim - Preamp - Filters - EQ - Compressor - Inserts - Fader - Pan - Output**

Each section can be enabled or bypassed independently.

## Trim

Clean gain control, from -36 dB to +12 dB. Always active. Use this to
get your input level right before any processing.

## Preamp

The preamp operates in one of three modes. Right-click the preamp section
header (or long-press) to switch between them.

### Clean Gain (default)

The preamp is off. Your trim setting passes through cleanly with no
colour or saturation. This is how every new track starts.

### Built-in Saturator

A soft-clipping drive stage for adding warmth and saturation.

- **Drive** - how hard you push the signal into the clipper. Higher values
  mean more saturation and harmonic content.
- **Safe mode** - engages oversampling for cleaner saturation at the
  expense of a bit more CPU. Use it on tracks where the drive is working
  hard and you want to keep things smooth.
- **Auto-gain** - compensates for volume changes from the drive so you
  can compare the tone without being fooled by loudness differences.

### NAM Profile

Load a Neural Amp Modeler profile of a real preamp (Neve 1073, API 512,
SSL E, Trident, and thousands more). The profile replaces the built-in
saturator entirely - your channel now sounds like the captured hardware.

- Click the **browse** button to open the Profile Browser where you can
  search TONE3000's online library or pick from locally saved profiles.
- TONE3000 rows show model thumbnail, type, and creator.
- In TONE3000 search/favourites tabs, clicking a model name opens its
  tone page on tone3000.com in your default browser.
- If TONE3000 favourite sync is temporarily unavailable, star toggles are
  still saved locally so your favourites persist on this machine.
- Your trim knob drives the NAM model harder at higher settings, just
  like pushing a real preamp.
- **Output gain** compensates for level changes after the model.
- Profiles are `.nam` files stored in `~/Documents/TayPE/NAM/Preamps/`.
  Downloaded profiles work offline from that point.
- Downloaded profiles keep their model title metadata, so the strip and
  browser show the profile title instead of hashed download filenames.
- Downloaded profile thumbnails are cached locally, so local browsing still
  shows artwork on airgapped/offline machines.
- You can switch a strip to NAM mode before choosing a profile; TayPE shows
  a warning and stays clean until a NAM model is selected/loaded.

The Performance Monitor shows per-track DSP breakdown with separate
**Preamp/Summing** and **Plugin** CPU columns. On the master track, the
Preamp/Summing column reflects NAM summing CPU. This makes it easy to see
whether load is coming from console tone stages or plugin inserts.
Rows are shown as a routing tree under the master bus, so bus chains are
nested visually instead of appearing as a flat list.
The **Lvl** column shows routing depth from master (`L0` master, deeper levels
further upstream), and the session summary includes a **Critical path (est)**
line to show the longest active dependency chain in the current block.
The session summary also includes a **Scheduler** line (levels, max width,
workers used, utilization, and compute/wait/merge timing) so you can see
whether bottlenecks are in bus-level work, barrier wait, or merge stages.
Each stage now shows `% | ms` per track, and the table includes per-track
enabled plugin count to spot heavy chains quickly.
Stage colour bands are per-node hints (`<12%` green, `12-25%` amber, `>25%`
red) rather than a global overload alarm; use the top DSP gauge for that.
Those per-track CPU values are smoothed for readability (quick rise, slower
fall), so the numbers stay trackable while still showing spikes.
The monitor also shows **Host CPU** as total TayPE process usage across all
logical cores (0-100%), so you can gauge whole-machine load separately from
audio-block deadline load.
It stays on top of the main window until you close it, so you can keep it
visible while adjusting your mix. By default it refreshes 10 times per
second, so changes are easier to see while you tweak settings.

## Filters (HP/LP)

High-pass and low-pass filters for cleaning up the extremes. These have
their own bypass toggle, separate from the EQ.

| Filter | Default | Range |
|--------|---------|-------|
| High-pass | 30 Hz | 20 - 1,000 Hz |
| Low-pass | 18,000 Hz | 2,000 - 20,000 Hz |

The high-pass is your rumble killer. The low-pass tames harshness up top.
Both are smooth second-order curves.

## EQ - 3-Band Parametric

A Neve-inspired 3-band parametric EQ. Each band has:

- **Frequency** - where the band is centred
- **Gain** - boost or cut, from -18 dB to +18 dB
- **Shelf/Bell toggle** - switches between a shelf curve and a bell
  (peaking) curve
- **Wide/Narrow toggle** - wider or tighter bandwidth

| Band | Default Frequency | Range |
|------|------------------|-------|
| Low | 220 Hz | 60 - 800 Hz |
| Mid | 1,200 Hz | 300 - 8,000 Hz |
| High | 3,200 Hz | 1,500 - 16,000 Hz |

Low and High default to shelf mode. Mid defaults to bell. Toggle to
switch.

## Compressor

A dynamics processor for controlling level and adding punch.

| Parameter | Default | Range |
|-----------|---------|-------|
| Threshold | -20 dB | -60 to 0 dB |
| Ratio | 4:1 | 1:1 to 20:1 |
| Attack | 10 ms | 0.02 to 100 ms |
| Release | 100 ms | 10 to 2,000 ms |
| Knee | 6 dB | 0 to 12 dB |
| Makeup Gain | 0 dB | 0 to 24 dB |

### Log Release

Enabled by default. When the compressor is working harder (deeper gain
reduction), the release time stretches automatically. This gives a more
musical, breathing feel - the compressor recovers faster on gentle
compression and slower on heavy hits, which prevents pumping on big
transients. Turn it off if you want strict, clinical compression.

## Insert Slots

Four serial plugin slots for VST3 plugins. Click an empty slot to load
a plugin from the scanner. Right-click a loaded slot for bypass, remove,
or to open the plugin editor window.
The master bus has the same four insert slots, so you can run processing
directly on the master strip.

Plugins run in a sandboxed process - if a plugin crashes, TayPE keeps
running. The slot shows an error state and you can reload or remove it.
The crash alert may name the culprit plugin. If TayPE cannot attribute the
exact plugin (for example, crash between processing blocks), it will say the
culprit is unknown and still keep audio running dry.

During playback, time-based insert effects (like delay and reverb) keep
processing across silent gaps between clips, so tails carry naturally instead
of stopping at clip boundaries.
Pressing **Stop** clears insert tails, so playback restarts cleanly from
silence.

Input selection is mode-aware:
- With an instrument insert loaded, the input menu shows MIDI sources only
  (All MIDI, Virtual Keyboard, hardware MIDI devices, or None).
- Without an instrument insert, the input menu shows audio sources only
  (Default, None, mono channels, stereo pairs).

When you load an instrument insert on an audio-routed track, TayPE
automatically switches input to **All MIDI**. When the last instrument insert
is removed, MIDI routes are reset to default audio input.

If a project references a MIDI device that is not currently available,
the strip shows **MIDI Device (offline)** for that route. You can keep the
stored route, or switch to **All MIDI**, **Virtual Keyboard**, or another
available MIDI input from the same menu.

## NAM Summing (Master Bus Only)

The master bus channel strip has a Summing section. Load a NAM profile of
a real console's summing amplifier (SSL 4000G, Neve 8816, etc.) and the
digital sum passes through the captured hardware's character - saturation,
harmonic interaction, and compression behaviour.

- Click the **Summing** button to enable or disable. Requires transport
  to be stopped.
- Click **browse** to open the Profile Browser (filtered to summing profiles).
- **Drive** controls how hard the summed audio pushes into the model.
- **Output gain** compensates for level changes.
- Profiles are `.nam` files stored in `~/Documents/TayPE/NAM/Summing/`.
- Downloaded profiles show their model title in the strip/browser when
  metadata is available.

When summing is disabled, the master bus uses standard digital summing
with zero CPU overhead.

## Fader and Pan

- **Fader** - 0 to +12 dB range. Drag vertically.
- **Pan** - full left to full right. Equal-power panning law so the
  centre doesn't sound louder than the sides.

## Meter

Stereo peak meter with a clip indicator at the top. If the clip indicator
lights up, your signal is hitting 0 dBFS. Back off the fader or trim.

The meter display refreshes at 4 updates per second for readability. Each
update shows the highest peak seen in the previous quarter-second, so very
short transients still show up instead of being missed between redraws.
