# The Mixer

Press **M** to switch between the timeline and mixer views.

The mixer shows one channel strip per track, laid out horizontally left
to right. The master bus is always on the far right. Scroll horizontally
with the mouse wheel or trackpad to navigate across your channels.

## Channel Strip Layout

Each strip shows (top to bottom):

- **Track name** - double-click to rename
- **Input selector** - which audio interface input the track records from
- **Control buttons** - M (mute), S (solo), R (record arm), MON (software
  monitoring), A (archive), B (bus)
- **Output selector** - where the track sends its audio
- **Preamp section** - drive/trim control with toggles
- **Filter section** - high-pass and low-pass filters
- **EQ section** - 3-band parametric equaliser
- **Compressor section** - dynamics processing
- **Insert slots** - 4 slots for VST3 plugins
- **Pan knob** - stereo position
- **Fader** - volume, with dB readout
- **Peak meter** - stereo level meter with clip indicator
  (display updates at 4 Hz and keeps transient peaks per update window)

Each processing section can be expanded or collapsed with its header
toggle. See the [Channel Strip](channel-strip.md) page for details on
every section.

## Using the Controls

**Faders and knobs** - click and drag vertically. Each drag is a single
undoable action.

**Buttons** (mute, solo, etc.) - single click to toggle.

**Insert slots** - click to load a plugin, right-click for a context menu
with options like bypass and remove.

**Track name** - double-click to edit inline (only when transport is
stopped).

## Track Order

Tracks appear in the same order as the timeline. The master bus is always
the rightmost strip.
