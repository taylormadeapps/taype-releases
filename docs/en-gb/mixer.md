# The Mixer

Press **M** to switch between the timeline and mixer views.

The mixer shows one channel strip per track, laid out horizontally left
to right. The master bus is always on the far right. Scroll horizontally
with the mouse wheel or trackpad to navigate across your channels.

![Mixer overview](../../assets/img/docs/mixer-overview.png)

## Channel Strip Layout

Each strip shows (top to bottom):

- **Track name** - double-click to rename
- **Input selector** - which audio interface input the track records from
- **Control buttons** - M (mute), S (solo), R (record arm), MON (software
  monitoring), A (archive), B (bus)
- **Output selector** - where the track sends its audio
- **Preamp section** - MODE/AG/SAFE controls with always-visible Trim and
  mode-dependent Drive or NAM Output Gain
- **Filter section** - high-pass and low-pass filters
- **EQ section** - 3-band parametric equaliser
- **Compressor section** - dynamics processing
- **Insert slots** - 4 slots for VST3 plugins
- **Pan knob** - stereo position
- **Fader** - volume, with dB readout
- **Peak meter** - stereo level meter with clip indicator
  (display updates at 4 Hz and keeps transient peaks per update window)

Each processing section can be expanded or collapsed with its header
toggle. See the [Channel Strip](channel-strip/README.md) page for details on
every section.

Right-click any section header to load a preset for just that section or use
**Save Preset As...** at the top of the menu to save into that section's
folder under `Documents/Taype/Section Presets`. If the strip section already
came from a preset, TayPE pre-fills that preset name in the save dialog so you
can rename or overwrite it without typing from scratch. If the preset name
contains `/`, TayPE stores it in nested folders under that section's preset
root, and the popup menu mirrors that folder tree as nested submenus. Section
headers show a preset-name pill only when that section still
matches the active strip preset's `CSP/...` path, or when no strip preset is
active at all.

Right-click the strip title bar to load or save a full channel strip preset.
Those live under `Documents/Taype/Channel Strip Presets`. Each strip preset
stores the fader panel state directly and recalls the rest of the strip through
section presets under `Documents/Taype/Section Presets/<Section Name>/CSP/<Preset Name>`.
If the strip preset name contains `/`, TayPE mirrors that path in both places,
and the popup menu mirrors that folder tree as nested submenus too.

The `PREAMP` header now stays a clean section label. Its mode/profile line sits
inside the section body above the preamp mini meters, with the NAM browse
button living on that row instead of in the header.

Section presets only recall what belongs to that section. Fader presets bring
back volume, pan, strip mode, and polarity, but they do not change the track's
hardware input or output routing. Send presets try to reconnect by bus ID or
bus name; if a target bus is missing in the current reel, TayPE skips that send
and tells you.

## Using the Controls

**Faders and knobs** - click and drag vertically. Each drag is a single
undoable action.

**Buttons** (mute, solo, etc.) - single click to toggle.

Turning **B** on makes the track a bus and switches its input to no device
input. Turning **B** off disconnects any tracks routed to that bus so your
routing stays valid.

**Insert slots** - click to load a plugin, right-click for a context menu
with options like bypass and remove.

**Track name** - double-click to edit inline (only when transport is
stopped). Return commits; Escape or clicking away cancels.

## Track Order

Tracks appear in the same order as the timeline. The master bus is always
the rightmost strip.

Mixer visibility follows timeline view filters:

- **Archive View (A)** - shows active or archived tracks to match timeline mode
- **Focus (F)** - shows tracks with clips at the tape head position
- **Spill (G)** - shows the selected bus and tracks routed to it
