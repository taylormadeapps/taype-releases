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
- **Control buttons** - regular tracks show M (mute), S (solo), Tag,
  A (archive), MON (software monitoring), and R (record arm). The master
  strip keeps only M.
- **Output selector** - where the track sends its audio
- **Preamp section** - MODE/AG/SAFE controls with always-visible Trim and
  mode-dependent Drive or NAM Output Gain. On the master strip, this slot is
  replaced by **NAM Summing** in the same vertical position.
- **Filter section** - high-pass and low-pass filters
- **EQ section** - 3-band parametric equaliser
- **Compressor section** - dynamics processing
- **Insert slots** - 4 slots for VST3 plugins
- **Pan row** - gain readout on the left, mono/stereo and phase icons beside
  it, pan knob in the middle
- **Fader** - volume, with dB readout
- **Peak meter** - stereo level meter with clip indicator
  (display updates at 4 Hz and keeps transient peaks per update window)

Each processing section can be expanded or collapsed with its header
toggle. See the [Channel Strip](channel-strip/README.md) page for details on
every section.

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
stopped).

## Track Order

Tracks appear in the same order as the timeline. The master bus is always
the rightmost strip.

Bus strips get a little extra breathing room in the rack so submix runs read
as grouped blocks. Adjacent buses share the middle edge, and the master always
keeps its own outer gutter.

Mixer visibility follows timeline view filters:

- **Archive View (A)** - shows active or archived tracks to match timeline mode
- **Focus (F)** - shows tracks with clips at the tape head position
- **Spill (G)** - shows the selected bus and tracks routed to it
