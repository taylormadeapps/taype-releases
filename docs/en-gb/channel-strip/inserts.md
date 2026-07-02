# Insert Slots

The insert rack can host eight serial VST3 slots. In the full-width docked
strip TayPE shows slots 1-4 by default; click **MORE** in the rack footer to
reveal slots 5-8. Narrow mixer strips now keep that same **MORE** / **LESS**
footer instead of forcing the full rack open. Click an empty slot to load a
plugin from the insert picker; its top-right close button dismisses the picker
without choosing anything. Right-click a loaded slot for bypass, remove, or
to open the plugin editor. Bypassing one slot only takes that slot dry; later
inserts in the rack still run in order.

Each loaded row now carries its own small power button on the right. Click it
to bypass just that slot, or **Option-click** to disable / re-enable the
plug-in. Playback keeps rolling while TayPE swaps the graph; recording still
blocks it. Plain clicks on a disabled row stay inert; use that power button or
the row context menu to bring the plug-in back online. Disabled slots stay
assigned in the reel with their saved state, but TayPE unloads the sandbox
plugin instance, removes the slot from the audio graph, contributes no latency,
and does no sandbox processing until re-enabled.

On archived tracks, active or bypassed insert rows show as offline red in
Archive View. The stored plugin state is kept for unarchiving, but the hosted
plugin is unloaded and cannot be edited while the track is archived. You can
still remove a slot or disable an active slot; adding, changing, opening,
bypassing, enabling, dragging, routing, wet/dry edits, and preset loads ask you
to unarchive the track first.

In the full channel strip and wide mixer strips, loaded audio-effect rows also
show a compact wet/dry knob immediately to the left of the slot bypass button. Full
counter-clockwise, around 7:30 on the dial, is dry; full clockwise, around
4:30, is 100% wet. The knob is a linear blend, so halfway is equal parts
latency-aligned dry signal and processed plug-in output. Double-click resets
the slot to 100% wet.
Bypassed inserts keep their stored wet/dry value, but TayPE ramps the slot to
the latency-aligned dry path while the bypass is active.

You can also drag a loaded insert to move it. Drag inside one rack to reorder
the chain, or drag between strips in mixer view to move it to another track.
Drop on an existing row to replace that slot. Drop between rows to insert there
and shift later slots down. Hold **Cmd** while you drag to copy instead of
moving; anything pushed past slot 8 is discarded.

When you choose something from the insert menu, TayPE loads that choice after
the popup closes so nested submenu picks stay dependable, then opens that
plug-in window straight away when the load succeeds.

When you load or re-enable a plugin, the target slot shows a small spinner
until TayPE finishes bringing that insert online.

The master bus follows the same rule in the full-width strip: four slots
visible by default, with the same **MORE** toggle to reveal the full eight-slot rack.

On mono track strips, TayPE prefers a true mono main bus for inserts that
support it. If a plug-in only exposes stereo, TayPE widens to dual-mono for
that slot and collapses back to mono afterwards, so the strip still reaches
pan as mono. Bus and master strips always stay stereo.

That **MORE** / **LESS** state is global UI state, not per-track memory. It
defaults to **LESS**, applies across the docked strip and mixer together, and
is remembered between launches.
When nothing is hiding in loaded extra slots, both **MORE** and **LESS** keep
their normal white label styling. The yellow label is reserved for the warning
state on **MORE** only, so **LESS** stays white once the extra slots are
visible.

The INSERTS power button works even before you load anything. If you switch the
rack off first, the next plugin you load comes in bypassed until you turn the
section back on.

The **INSERTS** header always lets you collapse or reopen the rack, even when no plugins are loaded.

## Plugin Manager

Open **Tools -> Plugin Manager** to organise the scanner catalogue before you
pick plugins from the channel strip.

- The **Enabled** checkbox controls whether a validated plugin appears in the insert menu.
- **Status** shows whether a plugin is **Validated**, **Disabled**, **Needs Attention**, **Failed**, or queued for **Rescan** on the next launch.
- **Delete Missing Plugins** removes catalogue rows whose plugin bundle has
  disappeared from disk.
- **Type** separates instruments from effects.
- **Manufacturer** helps sort and filter larger collections.
- **Menu Path** gives larger catalogues a folder taxonomy in the insert picker.
  Type a path like `Dynamics/Compressors/Classics` and TayPE lets you browse
  those folders inside the picker while also indexing the path for search.
  Slashes are the separator; backslashes are converted automatically when you
  commit the field.

If a plug-in lands in **Needs Attention**, TayPE timed out waiting for it
during the background scan but keeps it available so you can try loading it
deliberately from an insert slot once you are ready to deal with any auth or
vendor UI.

The insert picker opens as a searchable chooser with **Stock**, **Effects**,
and **Instruments** exclusive first-branch tabs across the top. The selected tab is
remembered while TayPE is running; the search field starts fresh each time you
open the picker. With an empty search field, the chooser preserves your plug-in
folder hierarchy with a fixed **Back** path strip; as soon as you type, it
switches to a flat search results list.
**Taype Stock** holds TayPE-shipped inserts such as
**Taype Rooms**, **Ache-Delay**, **T-Clipper**, **Taype Drive**, **Taype EQ**,
**Taype Comp**, the built-in **External MIDI Out**, and **Hardware Insert**.
Only insert **1** can host instruments or **External MIDI Out**, so later slots
show audio effects and stock audio utilities only.

Melodyne does not appear in the insert picker. Open it from an audio clip
instead: **Option+double-click** the clip, double-click its Melodyne glyph, or
use **Taype - Clip Properties**. TayPE keeps Melodyne out of insert slots so
the clip-wide ARA workflow stays consistent.

**Hardware Insert** is TayPE's outboard loop insert. It uses the audio I/O
mapping aliases from Preferences, not TayPE buses: choose a physical mono or
stereo output endpoint for the send, a physical mono or stereo input endpoint
for the return, and extra latency compensation. The sample field is the stored
non-negative delay value; the millisecond field is calculated from the current
processing sample rate and writes back to samples when edited. Negative values
clamp to zero because TayPE can add delay, not send audio to future hardware.
Click the same Hardware Insert row
again to close that track/slot window. The native insert window also lets
you rename the slot, bypass or disable it from the top bar, open its preset
menu, pick a slot colour under the name field, set input and output trim plus
wet/dry along the bottom of the left plate, and watch the send/return mini
meters in the right plate with auto-gain and Peak/RMS directly under the
meters on the left. The latency ping drives those mini meters while it sends
the pulse train and listens for the return. Keyboard shortcuts still reach
TayPE while the Hardware Insert window is focused, text entry stays with the
name and latency fields, and `Escape` or `Return` closes the window from
non-text focus. Reels with no stored name
or no newer Hardware Insert fields still use the default **Hardware Insert**
label, 0 dB trims, Peak auto-gain, and the track colour. Wet/dry blends use a
latency-aligned dry path, so partial blends stay aligned with the returned
hardware signal. Any route overlapping the current master output pair cannot be
used as the send, and any route already used as a direct hardware output is
also unavailable for Hardware Insert sends. If the master output is moved onto
an existing Hardware Insert send route, the master output wins until the insert
is rerouted. TayPE fans mono strips out to
stereo hardware, averages stereo strips into mono sends, fans mono returns
into stereo strips, and averages stereo returns into mono strips.
If a route is missing, TayPE fails safe: no send for missing outputs and
silence for missing returns. A missing or unavailable return does not suppress
the physical send. Bypassing a Hardware Insert keeps its latency in the graph
and returns the latency-aligned dry path; disabling it removes the insert and
its latency from the graph. Hardware Inserts are realtime only; offline
faster-than-realtime print warns when enabled Hardware Inserts are present, then
prints them as latency-aligned dry bypass. Use realtime print when you need to
capture the outboard hardware. When a MIDI clip editor is open on a track
feeding that insert path, the live preview follows the same latency compensation
as the printed clip, so edited notes audition in time with the reel.

Those Taype Stock VST3 plug-ins are limited to running inside Taype, apart
from **Taype Drive**, which also works in standalone **Plugin Doctor** for
measurement. Load the others in another host and they open with a warning and
stay dry/pass-through instead of processing audio.

Only insert **1** can host an instrument or **External MIDI Out**.
Slots **2-8** stay audio-effects only, but audio-FX extensions like
**Taype Rooms** can load in any slot.

Its bundled Factory IR bank is normalised automatically to TayPE's house
format on bootstrap, so the shipped rooms actually appear in the selector
instead of getting dropped for being out of spec.
Fresh Taype Rooms instances default to the factory room shown as
**Dieppe Cathedral**, so the plug-in starts from the same known room even
after you add other IR libraries.

Inside **Taype Rooms**, the IR section now includes **Get Bricasti M7 IRs**.
That flow asks you to accept Samplicity's terms, gives the first alert a
real **View Samplicity T&Cs** button, then has TayPE download and install
the official archive automatically into `[TAPE_HOME]/IRs/Bricasti M7`,
organised by register. That preflight still appears before install or
reinstall, even after TayPE has remembered acceptance. If TayPE already has
that managed Bricasti folder, it asks before replacing it. It also warns that
the automatic transfer is a large download before it starts and then treats
the download as most of the install progress. No folder picking or manual zip
import is part of the user flow. Internal support folders such as the wizard's
`_download` stash do not appear in the IR selector.
When Samplicity ships both 48 kHz and 44.1 kHz copies, TayPE bins the 44.1 kHz
lane before import and keeps the 48 kHz set for normalisation.
The IR selector itself uses a nested category popup rather than one long flat list.
Its native editor also uses the same strip-hardware language as TayPE's
channel strip, with a more obvious TayPE-green panel wash instead of a generic
plug-in skin.
The layout stays compact rather than wasting height, but keeps the larger
strip-style knobs intact.
Under the hood, the stereo and Dual Stereo lanes use the same long-IR-tuned
non-uniform engine and only process the active live block, so big room pairs
do not waste CPU on dead scratch-buffer space.
Taype Rooms trims leading and trailing silence from IR files when it loads
them, keeping the useful room response while avoiding avoidable convolution
work on dead ends.
Taype Rooms defaults to **HQ Off**, which uses an internally latent wet engine
with its impulse tail truncated at -70 dB for lower CPU while keeping the dry
path immediate and reporting no host PDC.
Switch **HQ On** when you want the zero-latency non-uniform convolution path
used by earlier Taype Rooms builds.
The sandbox return path also waits to the actual render-block deadline before
it gives up, so a heavy room should not spit dry fallback glitches just
because the old proxy wait budget guessed low.
Its `IR` and `CONTROLS` headers are just section labels, not collapsible panes.
Each large knob now carries its value in a readout between the hardware and the control label. That readout sits between the hardware and the control label
instead of being buried in a separate text box.
Its control section labels those tone-shaping controls as **Low Cut** and
**High Cut**, adds a **Duck** knob that self-ducks the wet return from the
incoming signal with a fixed medium attack and slow release, adds a **Mix**
knob for insert use, labels the IR topology picker
as **Channels**, and gives the send behaviour its own **Mode** toggle with
**Send / Insert** choices. **Send** is the default and forces a
100% wet return; flip to **Insert** to wake the Mix control up. Ducking always
happens on the wet path before Mix combines wet and dry, and that insert blend
uses an equal-power dry/wet law so the source hangs on longer through the
middle of the knob instead of fading too fast. The Duck knob's gold arc shows live ducking activity rather than just mirroring the set depth.

The same **Taype Stock** lane now ships **Ache-Delay** as TayPE's house delay.
It follows the same native editor language as Taype Rooms, but with a primary
yellow wash and a delay-first layout: **Free / Sync** timing, note divisions,
**Mono / Dual Stereo / Ping-Pong / Ping-Pong (Even)** routing, and the same
wet-path **Duck** behaviour keyed from the incoming signal. **Send** is the
default output mode and forces a 100% wet return. Flip to **Insert** to bring
the stored **Mix** value back into play without rewriting it, using the same
equal-power insert blend as Taype Rooms so the dry side does not vanish too
early. The input now starts with a full **ToTape** lane instead of a fake
"tape vibe" toggle: a cycling **Tape Mode** pill for `7.5 / 15 / 30` ips,
plus **Tape Drive** and **Tape Trim**, with a **Link** toggle to keep them
inverse-tracked when you want the extra tape push without a dumb level jump.
**Tape Trim** is attenuation only here, so the top of that knob is a clean
`0 dB`, not makeup gain.
That is the same oversampled ToTaype circuit used in the strip preamp, and in
Ache-Delay it is always in circuit, so the repeats pick up that house tape
colour before they ever hit the delay line. Inside the feedback loop the grime
is split into **Diffusion** and **Loss**. **Diffusion** handles the serial
allpass smear. **Loss** handles the repeat melt and the floor. That means you
can keep the echoes discrete and only chew them up, or wash them out without
dragging loads of noise with them. The hiss is envelope-followed now, so it
breathes with the repeats instead of sitting there as a flat constant bed, and
it gets band-shaped before the mix with a one-pole `1 kHz` low-pass and
`300 Hz` high-pass so it reads like medium noise instead of white fizz. The
loss stage now leans more on sag and blur than hard flattening, so the tail
should ache and give way instead of sounding crushed. Push **Loss** higher and
Ache-Delay now darkens the whole feedback tail after that hiss blend, so the
noise stays tucked into the repeats instead of fizzing on top of them.

**T-Clipper** lives in that same **Taype Stock** lane as TayPE's house clipper.
It is always an inline insert: no wet/dry, no send mode, just drive into
the ceiling and listen. Its editor carries the stock family's primary red
wash, then keeps two displays front and centre:
a scrolling waveform view that paints clipped peaks in red against the
current threshold, and a transfer curve that shows how **Knee** and
**Tubeyness** are bending the clip shape. **Tubeyness** now runs from clean
symmetry at `0%` up to full tube lean at `100%`, while the ceiling stays
put, and **Knee** now
reaches far enough past a plain clipper to do genuinely soft saturation.
**Low Cut** and **High Cut**
leave the lows or highs out of the clipping path so you can clip the
mid-band harder without flattening the whole picture. **Auto-Gain** trims
the output back by the same amount of drive after the full signal is
recombined, so you can judge tone instead of loudness.

**Taype Drive** brings the strip preamp out as a standalone insert. It keeps
the same five modes: **Clean**, **Builtin**, **Tape**, **NAM**, and **MD510**. The editor
stays compact and fixed-size: mode and measurement at the top, shared NAM
profile browsing in the middle, then **Drive**, **Output**, **Tape Speed**,
and **Measure**. **Measure** runs the same output-match idea as the
strip preamp, so the plug-in can listen to the before/after swing and write a
matching output trim back into the insert.
In **Tape** mode, `30` stays the brightest lane, `15` is the middle tape
setting, and `7.5` is the obviously slower one. The write-side HF contour is
now fixed internally for that ToTaype lane rather than exposed as a separate
Dubly switch. For inspection work, the plug-in also has a tape-only **HQ**
toggle that routes the full tape core through the legacy 4x oversampled lane
so you can compare that supplied-rate behaviour directly in **Plugin Doctor**.
It stays off by default.

Drive's **NAM** browser points at the same preamp profile folder and the same
TONE3000 settings file as the channel strip. If you already configured
TONE3000 in TayPE, the plug-in picks that up immediately. Downloads land in
the same shared NAM library, so the strip and the plug-in are always looking
at the same model pool.

For measurement work, **Taype Drive** also runs in standalone
**Plugin Doctor**, so you can inspect the transfer without hosting it inside
the DAW.

**Taype EQ** is the strip EQ window as a standalone insert, then adds a
dynamic row for the three musical bands. The response display still shows the
static EQ curve, but a green line marks the shared threshold and the dynamic
overlay shows those same three EQ bands being pushed or pulled around their
current gain settings rather than inventing a separate fourth curve. Drag that
line in the graph or set the threshold directly. Each band then gets its own
**Range** and **FET / VCA / Opto** detector mode. Negative range pushes peaks
down above threshold. Positive range lifts detail back up when that band drops
under threshold. Range still works when the static EQ band is at `0 dB`, so
the dynamic section can impose its own band-shaped push or pull from flat. The
live orange overlay clears back to the static view when playback stops instead
of holding the last active reduction shape. Its
window is now fixed-aspect resizable, scaling the existing
EQ popup up or down without changing the layout, including down below the
default stock size.

**Taype Comp** is the strip compressor as its own insert. The editor keeps the
live waveform history, the transfer curve, and the same core controls:
**Threshold**, **Ratio**, **Attack**, **Release**, **Knee**, **Makeup**,
detector mode, release mode, and **Sidechain HP**. The release-mode button
cycles **OFF**, **LAZY**, and **KEEN** with left-click, and opens a direct
picker with right-click. Readouts on the right
show current detector level and gain reduction so you can see what the
compressor is actually hearing and taking off, with 3 dB tick spacing on the
gain-reduction scales for finer readout. Its window is now fixed-aspect
resizable, scaling the existing compressor popup up or down without changing
the layout, including down below the default stock size.

## Plug-in Window

Click a loaded slot to open that plug-in's window. TayPE adds a slim toolbar
across the top with **Bypass**, **Disable**, `One`, a `Preset:` label, and a
preset menu on the left, plus a `Sidechain:` label and selector on the right.
The native window title uses `Track Name - Plug-in Name`, so several open
editors stay tied to their track at a glance.
That **Disable** toggle uses the same playback-live enable/disable path as the
insert slot itself and keeps the plug-in window open instead of unloading the
plug-in out from under it.
When `One` is enabled, opening another plug-in reuses the current plug-in
window so only one hosted editor stays visible at a time.
If no plug-in preset is currently active, that selector reads `None`.
The plug-in window now opens at the editor's preferred size and treats sizing
as a two-way street: if you resize a resizable plug-in window, TayPE resizes
the hosted editor with it, and if the editor asks for a new size, the wrapper
follows. Fixed-size editors stay at their intended size instead of stretching.
Like TayPE's own popup windows, hosted plug-in windows stay above TayPE while
TayPE or the hosted editor is frontmost, but they yield properly when you
switch to another app. `Escape` closes the hosted plug-in window.
The window still follows the plug-in's own resize rules, so it can't be dragged
smaller than the plug-in's minimum size, larger than its maximum, or into a
cropped shape that breaks the editor's aspect. TayPE's own resizable stock
plug-ins can now shrink to roughly two-thirds of their default open size within
those declared limits.

Plug-in presets live in `[TAPE_HOME]/Presets/FX` for effects and
`[TAPE_HOME]/Presets/Instruments` for instruments. TayPE keeps each
plug-in's own library in a clean plug-in-name subfolder there. Older preset
folders saved with the previous UID suffix still load. If the preset name contains `/`,
TayPE mirrors that path as nested folders on disk and nested submenus in the
preset popup. The menu only shows presets that belong to the current plug-in.
Saving an `INSERTS` section preset from the channel strip also writes companion
plug-in presets into that plug-in's own `CSB/<Section Preset Path>` folder.
When you load that insert-section preset later, TayPE restores matching
plug-ins from those `CSB/...` presets too.
Full strip presets also keep the whole insert rack state inline, so a recalled
strip can put the rack back exactly as saved. If a saved plug-in is missing,
TayPE skips that slot and warns you instead of throwing away the rest of the
strip recall.

Loading a plug-in preset is recording-blocked but playback-live. TayPE fully
reloads that insert from the saved preset chunk, so processors that ignore hot
state swaps still come back in the recalled state instead of quietly snapping to
the default patch.

Hardware Insert presets live in `[TAPE_HOME]/Presets/Hardware Inserts`.
They save the open slot only: routes, latency, trims, wet/dry, filters, colour,
enable/bypass state, and recall photos. Recall photos are copied into the
preset's own asset folder on save. Loading a preset copies those photos back
into the current reel and stores reel-relative paths on the insert. Send and
return routes restore as a pair: if either side is missing, unavailable, or
already in use, TayPE keeps the current hardware routes and latency offset,
warns you, and still loads the rest of the preset.

Bypass and **Disable** can both toggle while playback is running. If you try
either one while recording, TayPE asks you to stop recording first.

If the loaded plug-in exposes a sidechain input, the plug-in window shows a
working `Sidechain:` selector. It offers `None`, `Self`, and every non-bus
track in the session. `Self` feeds the receiver's own pre-strip input to the
plug-in's sidechain bus for self-ducking or self-pumping. Choosing another
track feeds that track's raw pre-strip input instead. The selector is hidden
for plug-ins that do not expose a sidechain input bus. Changing the source is
recording-blocked but playback-live.

Open **MIDI Out** to choose the Core MIDI destination, pick `Any` or a fixed
channel, and set a timing advance. TayPE starts new MIDI Out inserts at the
current corrected interface round-trip from Audio prefs so the external synth
return can record back in time on the track's audio input.

Use the row-level **Rescan** button to queue just one plugin for revalidation
next time TayPE launches. Use **Invalidate Cache** to queue a full catalogue
rescan; the current list stays visible and every row is marked for rescan.
Use **Delete Missing Plugins** to remove stale rows for plugin bundles that are
no longer installed.
If TayPE finds a plugin bundle on disk but its catalogue row is missing, the
next startup scan treats it as newly added so it can reappear as **Validated**,
**Failed**, or **Needs Attention** instead of vanishing.

## Comparison Meters And Block Trim

The insert panel shows two thin gain-staging meters. The bar above the slots
shows the level **into** the plugin chain. The bar below shows the level
after the whole insert block, including its output trim.

In wide channel-strip mode, the block controls sit to the right of those
meters. **PK** / **RMS** chooses the measurement basis, **AG** listens to the
whole insert block and writes a matching trim, and **OUT** is the manual output
trim for the complete rack. These controls are per insert block, not per insert
slot.

Narrow strips keep the meters visible but hide the block controls.

## Plugin Sandboxing

Plugins run in a sandboxed process. If a plugin crashes, TayPE keeps running - the slot shows an error state and you can reload or remove it.

The crash alert names the culprit plugin when possible. If TayPE can't attribute it, it says the culprit is unknown and keeps audio running dry.

If a plugin load takes too long, TayPE cancels that load attempt, leaves the
slot unchanged, and lets you try again after the plug-in's own authorisation or
setup window has finished.

## Tail Handling

During playback, time-based effects (delay, reverb) keep processing across silent gaps between clips, so tails carry naturally. Pressing **Stop** clears insert tails for a clean restart and sends an emergency MIDI all-notes-off / all-sound-off burst to instrument inserts and any routed **External MIDI Out** targets. If something still hangs, use **Tools > Kill MIDI** to fire that same panic without changing transport state.

If a plug-in adds heavy latency, TayPE recalculates playback timing before the
next pass so clips stay locked through that insert path. If you are starting
right on a big downbeat into a very latent chain, give yourself a touch of
lead-in for the cleanest first transient.

## Input Routing

Input selection is mode-aware:

- Bus tracks keep the **Sender** label for orientation only. That row does not open an input menu or expose device-input choices.
- With an instrument insert loaded, the input menu shows MIDI sources only (All MIDI, Virtual Keyboard, hardware MIDI devices, or None).
- Without an instrument insert, the input menu shows audio sources only (Default, None, mono channels, stereo pairs).

Choosing a mono audio source from the input menu switches a regular audio track to mono strip mode. Choosing a stereo source switches it back to stereo. This is just a convenience from the UI menu; direct routing commands can still keep a mono input on a stereo strip when you need that.

When you load an instrument insert on an audio-routed track, TayPE automatically switches input to **All MIDI**. When the last instrument insert is removed, MIDI routes reset to default audio input.

Hosted instruments receive TayPE's transport timing, so tempo-synced plugins lock to the DAW's BPM, playhead position, and time signature.

If a project references an unavailable MIDI device, the strip shows **MIDI Device (offline)**. You can keep the stored route or switch to another input from the same menu.

Enabled hardware MIDI devices are re-audited in the background, so if a saved
port appears late or reconnects, TayPE reopens it without needing a full app
restart.

## Taype Drive XTALK

Taype Drive mirrors the channel-strip preamp XTALK control. In stereo non-clean modes, XTALK blends left and right into each other before the drive/preamp stage, using the same power-law taper and defaulting to `0.0`.
