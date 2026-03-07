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
The strip's bus button now lives in the left side of the coloured title bar as
a larger 20x20 control inset 8px from the top, left, and bottom edges, so it
stays available without taking up space in the tool row below.
That bus toggle now uses the same rounded alpha-backed control family as the
title pill, with a white outlined bus glyph and a green active fill instead of
the old yellow/brass state.
The tool row itself is now `Mute`, `Solo`, `Tag`, `Archive`, `MON`, `Record`,
so track tagging stays one click away without putting the bus toggle back in that lane.
Double-click the centred track-name pill to rename the track inline; once that
editor opens, typing stays in the name field until you commit or cancel it.
Double-click the centred title pill to rename the track. Double-click the
coloured title background beside it to open the track colour picker.
The title pill stays centred on the full coloured header band even with the
bus button living in that lane; long names keep that visual centre and truncate
at the right edge of the strip instead of shifting left.
Input and output routing now share one top strip row instead of living at
opposite ends of the panel, which frees vertical space without changing how
either selector works.
With **Help -> Popup Help** enabled, the strip shows hover help after about
**0.7 seconds** for knobs, routing selectors, section headers, insert slots,
meters, and toggle buttons. Hovering the track title also shows the full track
name in the popup before the rename hint.
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
those neutral points, but with a slightly lighter snap than drag so they do
not feel overly sticky. Double-click zero-style gain and balance knobs to
reset them to `0`, and double-click the fader to return it to unity.
In the compressor section, the short knob labels switch to the live value of
the control while the mouse is over that knob, so you can read settings
without adding a separate value row.
In the insert section, the top comparison meter now carries a `PK` / `RMS`
mode button and the bottom comparison meter keeps the `AUTO` button, so you
can stage plugin-chain input and output in either peak or RMS terms before
asking the strip to auto-match the result.

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
- If TONE3000 leaves architecture blank in its API response, TayPE resolves
  it from the model header so the browser rows still show a real `arch:` value.
- The TONE3000 search tab includes an **AMX Compatible** filter for LSTM captures that
  qualify for TayPE's accelerated AMX path, and it searches forward through
  the library until it finds matching AMX-compatible rows instead of stopping
  at the first unfiltered page.
- In TONE3000 search/favourites tabs, clicking a model thumbnail opens its
  tone page on tone3000.com in your default browser.
- Remote TONE3000 lookups now show a spinner in the browser while search,
  favourites refresh, or download metadata is in flight.
- If TONE3000 favourite sync is temporarily unavailable, star toggles are
  still saved locally so your favourites persist on this machine, and the
  Favourites tab rebuilds those saved entries automatically.
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
- That thumbnail cache is written by both browser downloads and
  `download_tone3000`. TayPE reuses remembered TONE3000 search metadata if the
  direct detail lookup comes back thin, and older local sidecars backfill
  their thumb file the next time the Local tab scans your NAM folder.
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
| Attack | 10 ms | 0.1 to 100 ms |
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
release. The gain-reduction display is a vertical top-down bar with a short
tick scale beside it: no fill means `0 dB` GR, and a full bar means `48 dB`
GR. The tick scale sits above the sidechain button stack so the markings stay
clear of the controls. The GR meter follows the live compressor reduction value
directly, so it lights as soon as the compressor starts clamping the signal.
The attack knob now starts at **0.1 ms**. The fast end of the dial covers
**0.1–1.0 ms** in **0.1 ms** steps, then the rest of the dial covers
**1–100 ms** in **1 ms** steps.
The lower PAN/FADER block now follows the same centring rule: the pan knob
sits on the middle of its panel slot, and the fader lane keeps equal top and
bottom padding.

## Insert Slots

If the insert rack is empty, the header power icon stays in its normal armed
state instead of reading as bypassed. The header bypass only reflects loaded
insert slots.

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
The insert panel also shows two thin comparison meters for gain staging:
the bar above the slots is the level **into** the plugin chain, and the bar
below the slots is the level **coming out** of it.
That lower lane also carries a small **AUTO** button. On audio-FX chains,
clicking it listens for about 3 seconds and writes a hidden post-insert trim
so the rack output matches the level going in. Instrument insert chains leave
that button dim because there is no meaningful pre-rack audio reference to
match against.

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
Hosted instruments also receive TayPE's transport timing, so tempo-synced
plugins can lock to the DAW's BPM, playhead position, and time signature.

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

- Click the **SUM** button to enable or disable NAM summing. Requires transport
  to be stopped.
- Click the inline **TRUE** toggle to choose TayPE's True Summing path. This
  only becomes active when **NAM AMX Acceleration** is enabled.
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
