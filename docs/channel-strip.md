# Channel Strip

Every track in TayPE has a built-in channel strip with processing that
runs before any plugin inserts hit the fader. The signal flows through
each stage in order:

**Input - Trim - Preamp - Filters - EQ - Compressor - Inserts - Fader - Pan - Output**

Each section can be enabled or bypassed independently.

The strip panels keep their controls centred inside each section, so knob
rows line up cleanly, labels and values stay on shared lines, and the top
and bottom spacing stays balanced as sections open and close.
The compact FILTER, EQ, COMP, and INSERTS panels now share one body inset
rule, so they stop feeling like separate widgets with unrelated top and
bottom padding.
Input and output routing now share one top strip row instead of living at
opposite ends of the panel, which frees vertical space without changing how
either selector works.
The preamp body uses the same compact centred spacing rule, so it does not
leave extra dead air under the trim/drive readouts.
Its side labels (`TRIM`, `DRIVE`, `OUT`) stay level with the knob body
centres rather than sagging toward the value readout line.
Panel text uses one shared strip-label style across the sections; colour still
does the work of separating labels, values, and state.
Strip knobs respond the same way across the panel: drag vertically, or hover
and use the mouse wheel. Knobs with a true neutral point add a detent at
centre or `0 dB` that holds a little more firmly before crossing through, and
the fader now does the same at unity (`0 dB`). Mouse-wheel edits still snap to
those neutral points, but the next wheel tick continues through instead of
sticking there.
In the compressor section, the short knob labels switch to the live value of
the control while the mouse is over that knob, so you can read settings
without adding a separate value row.

## Trim

Clean gain control, from -36 dB to +12 dB. Always active. Use this to
get your input level right before any processing. The trim knob shows a
small 0 dB reference tick so you can quickly spot unity.

## Preamp

The preamp operates in one of three modes. Use the **MODE** button in the
left side of the preamp section to cycle:

**Clean -> Classic -> NAM -> Clean**

The preamp header shows the current mode with a `PRE:` prefix. In NAM mode, the header also
shows the loaded profile name (or `NAM (no profile)` when none is loaded).
The browse button in the header opens the Profile Browser.

### Clean Gain (default)

The preamp is off. Your trim setting passes through cleanly with no
colour or saturation. This is how every new track starts.

### Classic

A soft-clipping drive stage for adding warmth and saturation.

- **Drive** - how hard you push the signal into the clipper. Higher values
  mean more saturation and harmonic content.
- **Safe mode** - engages oversampling for cleaner saturation at the
  expense of a bit more CPU. Use it on tracks where the drive is working
  hard and you want to keep things smooth.
- **Auto-gain (AG)** - compensates for loudness changes from drive so you
  can compare tone instead of volume.

### NAM Profile

Load a Neural Amp Modeler profile of a real preamp (Neve 1073, API 512,
SSL E, Trident, and thousands more). The profile replaces the built-in
saturator entirely - your channel now sounds like the captured hardware.

- Click the **browse** button to open the Profile Browser where you can
  search TONE3000's online library or pick from locally saved profiles.
- TONE3000 rows show model thumbnail, type, creator, an `arch:` field, and
  an `AMX` badge when the capture is LSTM/AMX-compatible.
- The TONE3000 search tab includes an **AMX** filter for LSTM captures that
  qualify for TayPE's accelerated AMX path, and it searches forward through
  the library until it finds matching AMX-compatible rows instead of stopping
  at the first unfiltered page.
- In TONE3000 search/favourites tabs, clicking a model thumbnail opens its
  tone page on tone3000.com in your default browser.
- If TONE3000 favourite sync is temporarily unavailable, star toggles are
  still saved locally so your favourites persist on this machine.
- **Trim** is always visible and always pre-NAM, so higher trim drives the
  NAM model harder, like pushing a real preamp.
- Trim always lives in the left slot of the preamp body.
- **Output Gain** is a user level control after the model.
- **Auto-gain (AG)** in NAM mode measures pre/post NAM level and applies
  smooth compensation to keep perceived loudness stable between settings
  and profiles.
- **SAFE** is not shown in NAM mode.
- Profiles are `.nam` files stored in `~/Documents/TayPE/NAM/Preamps/`.
  Downloaded profiles work offline from that point.
- Downloaded profiles keep their model title metadata, so the strip and
  browser show the profile title instead of hashed download filenames.
- Downloaded profile thumbnails are cached locally, so local browsing still
  shows artwork on airgapped/offline machines.
- TONE3000 artwork is read from both legacy thumbnail fields and the current
  `images` metadata, so thumbnails render in search/favourites again.
- You can switch a strip to NAM mode before choosing a profile; TayPE shows
  a warning and stays clean until a NAM model is selected/loaded.

When **FILTER**, **EQ**, or **COMP** are bypassed, their section body hides
to reduce clutter. The section header remains visible so you can re-enable it,
and your previous collapsed/expanded state is restored when it comes back.

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
| Makeup Gain | 0 dB | 0 to 24 dB |
| Attack | 10 ms | 0.02 to 100 ms |
| Release | 100 ms | 10 to 2,000 ms |
| Knee | 6 dB | 0 to 12 dB |
| Sidechain low-cut | Off | fixed 80 Hz |

### Log Release

Enabled by default. When the compressor is working harder (deeper gain
reduction), the release time stretches automatically. This gives a more
musical, breathing feel - the compressor recovers faster on gentle
compression and slower on heavy hits, which prevents pumping on big
transients. Turn it off if you want strict, clinical compression.

The strip lays the controls out as **Threshold, Ratio, Makeup** on the top row
and **Knee, Attack, Release** on the second row. Between the lower-row knobs
and the gain-reduction meter there is a vertical button stack: the upper button
enables a fixed **80 Hz** sidechain low-cut, and the lower button is **LOG**
release. The gain-reduction display is a vertical top-down bar: no fill means
`0 dB` GR, and a full bar means `48 dB` GR. The GR meter follows the live
compressor reduction value directly, so it lights as soon as the compressor
starts clamping the signal.
The lower PAN/FADER block now follows the same centring rule: the pan knob
sits on the middle of its panel slot, and the fader lane keeps equal top and
bottom padding.

## Insert Slots

Four serial plugin slots for VST3 plugins. Click an empty slot to load
a plugin from the scanner. Right-click a loaded slot for bypass, remove,
or to open the plugin editor window.
The master bus has the same four insert slots, so you can run processing
directly on the master strip.
The slot rows are compact and use the same panel text style as the rest of
the strip, so the insert rack stays readable without overpowering the EQ,
compressor, or fader sections.
Their slot stack is vertically centred in the panel body, so the rack no
longer looks more top-padded than the surrounding sections.

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
On the master strip, this summing section occupies the preamp slot so
section rows stay vertically aligned across the mixer.

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

The fader cap keeps the track colour so you can read the strip quickly, but it
is painted like the rest of the console hardware: a matte machined cap with a
recessed grip groove and the same upper-left lighting used by the knobs.

## Meter

Stereo peak meter with a clip indicator at the top. If the clip indicator
lights up, your signal is hitting 0 dBFS. Back off the fader or trim.

The meter display refreshes at 4 updates per second for readability. Each
update shows the highest peak seen in the previous quarter-second, so very
short transients still show up instead of being missed between redraws.
