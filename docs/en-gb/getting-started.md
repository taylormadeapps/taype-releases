# Getting Started

TayPE is built around a simple loop: record, listen, commit. No endless
menus, no buried features. Here's how the core workflow fits together.

On macOS, TayPE's own utility dialogs use native window chrome while keeping
TayPE styling inside the content panes, and simple warnings or confirmations
open as native system alerts, so the app feels at home on the desktop without
falling back to generic toolkit-looking shells.

## The Two Views

TayPE has two main views. Press **M** to toggle between them.

**Timeline** - where you see your tracks, clips, and the tape head moving
across time. This is where you record, arrange, and edit.

**Mixer** - where you shape the sound. Faders, EQ, compression, plugin
inserts. One channel strip per track, laid out left to right.

## Opening and Creating Reels

On a normal launch, TayPE opens a fresh reel behind the startup splash and then
brings in the welcome card as soon as that splash dismisses. If you click the
splash away manually after the desk is ready, the welcome card still chains in
straight afterwards instead of appearing underneath it. If you are unlicensed,
the license screen chains in as soon as you leave that welcome step. If you
open a `.taype` bundle or `.tpak` pack from Finder, TayPE skips the welcome
card, opens that session first, and then chains straight into the license
screen.

Fresh launch-created reels come up with Track 1 selected and the docked
channel strip already open, so TayPE lands in a ready-to-record state instead
of making you pick the first working track by hand.
Those launch-created `Untitled Reel` bundles live in
`~/Documents/Taype/Reels/Starters` by default, separate from the ordinary
manual **New Reel** flow.

The welcome card points you at the green **Let's Roll** button first, waits a
second for the card to settle, and then flashes it three times at 3 Hz so the
main path into the reel is obvious without turning startup into a wizard.
The right-hand action stack keeps **Open Reel Browser** as the standout branch,
with **Audio Preferences** and **Plugin Manager** as the supporting secondary
buttons beneath the main reel path. The supporting copy on the left starts
level with the top button in each action lane, so the card still scans as
aligned rows. Under the
performance advisor note, a left-aligned brass **Full Plugin Automation in development**
line now sits between the same goat glyphs used by the Founder badge.

If you open the **Reel Browser** straight from that welcome card, the fresh
startup reel stays loaded and shows as the current session while you decide
what to do next. If you branch into a different reel without touching it,
TayPE just deletes that blank startup reel outright instead of clogging the
library with dead air, and it stays out of **Recents** until you actually do
some real work in it.

The paired welcome logos sit in matched square tiles, and the left TayPE mark
now fills its tile directly instead of sitting inside a second inner badge.
The supporting copy on the left also stays level with the top edge of its
matching action button row.
The welcome card itself stays deliberately compact instead of stretching across
the whole window, so the footer line and action rows feel like one focused
panel rather than a billboard.
Centred directly under that footer reminder, TayPE shows whether a TONE3000
API key is stored locally, so you can see at a glance if online NAM browsing
is wired up. That line is a local presence check only, not a live network
verification.

The **Reel Browser** is where you open an existing reel, jump into a recent
one, or create a new one. At the root of the browser list, TayPE shows
**Recents** first, then **Starter Reels**, then your other folders, and then
any reels that live directly at the top level. When you enter a folder, the
first row becomes **↩ Back** so you can climb back out. Folder rows are
outlined, show a folder glyph before the name, and open on single-click.

Right-click any reel in the browser to **Rename** or **Delete** it. TayPE asks
for confirmation before it commits either action. If that reel is the one you
are currently working in, rename keeps the session open under the new bundle
name and delete closes the session before moving the bundle into `Scrap Pile`
inside your Reels folder. After delete, TayPE confirms the move and offers
**Show in Finder** so you can reveal the moved reel with that bundle selected.
Rename now opens the native save panel with that reel's current bundle path
already filled in, so you can change both the folder and the bundle name in
one pass. TayPE refuses destinations that would overwrite another reel bundle,
and it also refuses duplicate managed-library reel names instead of silently
inventing a suffix.

When the current reel is already open, **File -> Rename Reel...** uses that
same native save panel directly instead of bouncing you back through the
browser first.

When a reel is already open, the browser action row starts with **Media**,
which opens that reel's `media/` folder in Finder without closing the browser.
With popup help enabled, the browser's action buttons and history entries also
answer hover help, so long version rows still tell the truth when the visible
line has to clip.

Use **Open From File...** in the Reel Browser when the reel or pack you want
is outside your normal library.

When TayPE opens a reel, it now brings up a dedicated loading window instead
of leaving you with a beachball and guesswork. That window shows the reel
name, the full path, a real progress bar, and the current restore step. If
the reel opens but some plugins or media files could not be restored, TayPE
follows up with a scrollable issues list so you can see what is missing,
offline, or errored before you start playback. On startup and document-open
loads, TayPE also brings that loading flow to the front instead of quietly
finishing in the background.

Temporary bundles opened from system temp folders are not kept in Recents, so
test or unpack scratch work does not pollute your normal reel list.

When you create a reel manually, TayPE opens a native save dialog rooted at
`~/Documents/Taype/Reels` and suggests a bundle name like
`Untitled Reel.taype`. You can change both the location and the reel name in
that one step.

Fresh reels open with one armed audio track and the transport set to **90 BPM**.

Working state is saved automatically about every 1 minute while the transport
is stopped by default. You can change that interval in **Preferences > General**
to anything from **15 seconds** up to **Hourly**. There is no separate Save
command to manage. Press **Cmd+S** when you want to create a named checkpoint:
a deliberate line in the sand you can come back to later.
Stopping transport out of record mode also forces a snapshot once the
committed take or automation pass lands. Punching out while playback keeps
rolling does not.
When that background snapshot finishes, TayPE briefly says **Reel Snapshot Saved**
so you get reassurance after the write lands rather than a hanging save banner
while the queue is busy.
Switching or opening reels does not flash that banner just because TayPE saved
the reel you were leaving behind.

When you want a fresh start without dragging the old history behind you, use
**Thin Reel...** in the Reel Browser. TayPE asks where to put the thinned
bundle, appends `Thinned` to the current name by default, and leaves the
source reel untouched. If you are short on storage, delete the old reel in
Finder after you have checked the thinned one.

In the Reel Browser history, the default filtered view is tag-driven: current
state, named checkpoints, and branch-origin tags. If the current commit is a
manual checkpoint, the current card carries that checkpoint identity instead of
hiding it behind a generic current-state row. If you branch from an
autosave, TayPE tags that source commit so it stays visible as the branch node.
Plain autosave heads stay hidden until you turn on **Show Autosaves** for the
full save-by-save trail without chopping older commits off long-lived reels, but forced
post-record snapshots stay visible with their own red **RECORD** badge even in the filtered view,
and automatic **Session end** checkpoints ride with that autosave lane instead of cluttering
the default checkpoint anchors. The history view is a continuous vertical git-style
graph: earliest at the top, newest at the bottom, parent branches staying
leftmost when you come back to them, the current state highlighted wherever it
sits, and side
branches offset to the right with their own connector colours, red branch badges, green checkpoint badges,
and blue autosave badges. Autosaves on the same branch
stay in one lane instead of cascading deeper with every commit, and each row
puts its timestamp before the secondary detail text so that context stays in
reading order without the history card clipping long metadata into mush. Use **Focus**
in the history header to snap the browser back to the current state after
exploring older commits and side branches.

## Recording

1. Select a track by clicking its header in the timeline.
2. Set the track's input by clicking the input label (e.g. "1-2" for a
   stereo pair from your audio interface). When TayPE knows the device's own
   channel labels, the strip and timeline echo those names back instead of
   raw `1-2` IDs.
3. Arm the track for recording by clicking the **R** button, or pressing
   the R button in the track header.
4. Press **Return** to start recording. Press **Return** again to stop.

While recording, you'll see a red ghost clip growing on the track showing
where audio is being captured. When you stop, the final clip appears with
its waveform.

## Playback

- **P** - pause
- **Space** - play / stop
- **Z** - stop and return to the start

Click anywhere in the timeline (or the ruler at the top) to move the tape
head to that position. Hold and drag to scrub.

## Audio Sample Rate and Resampling

Open **Preferences** (**Cmd+,**) and go to the **Audio** tab.

- TayPE runs internally at **48 kHz**.
- The Audio tab keeps the hardware selector rows at the top through **Audio
  buffer size**. That top block includes output device, input device, master
  output pair, default stereo input, and default mono input. The device
  status, Audio worker cores, resampling, NAM, and **Apply Audio Changes**
  controls sit underneath.
- Every control on this tab is staged. TayPE does not reopen the live audio
  device when you change a field; it waits for **Apply Audio Changes**.
- Use **Apply Audio Changes** to commit output device, input device, master
  output pair, default stereo input, default mono input, sample rate, buffer
  size, hardware error compensation, Audio worker cores, Resampling, and NAM
  changes together.
- The **Master output pair** and **Default stereo input** lists only offer
  normal stereo hardware pairs such as `1-2`, `3-4`, `5-6`, and so on.
- TayPE remembers the last input and output device you applied here, so the
  same hardware routing comes back on relaunch.
- On a fresh install, or after upgrading from an older build that never saved
  MIDI input choices, TayPE enables the MIDI inputs it can currently see by
  default so live instrument monitoring works straight away. Use Preferences if
  you want to narrow that list later.
- If that preferred input or output device is missing when TayPE launches, the
  app stays up on the live fallback device but keeps the missing choice staged
  as `{device_name} (unplugged - fallback to {fallback_device_name})` in the
  Audio tab. If there is no live fallback device, the Audio tab shows
  `{device_name} (missing)` instead. Other staged changes still apply safely
  against the live fallback, explicitly choosing that live fallback now enables
  **Apply Audio Changes**, and TayPE automatically restores the preferred
  device as soon as the hardware returns.
- On the first playback attempt in that missing-device state, TayPE asks
  whether to use the live fallback for this app session or stay on
  **No Audio** until you choose hardware manually.
- Tracks whose input selector is **Default** follow the mono/stereo default
  input you pick here as soon as you apply the change. TayPE also restores the
  matching input channels on relaunch, so an aggregate-device default keeps
  pointing at the same hardware tail. Either default input can be **None**,
  and when the current mode's default is unset the track simply shows
  **No Input** until you choose a real route.
- If **Resampling** is **off**, the Sample rate field stays read-only once the
  interface is already back at **48 kHz**.
- With Resampling off, TayPE will try to switch your interface to **48 kHz**
  automatically after you apply the staged audio change, and whenever the live
  device changes elsewhere.
- You can park the **Input** or **Output** device on **none** while lining up
  a new combination. TayPE only commits that staged setup when you press
  **Apply Audio Changes**.
- If the driver rejects any staged device combination, TayPE restores the last
  working audio setup and shows the failure instead of snapping the controls
  back behind your back.
- If your interface is not at 48 kHz while Resampling is off, TayPE flags this
  with a persistent red banner at the top of the window and tells you to
  engage Resampling. The Sample rate picker also re-opens in that state and
  always includes **48 kHz** as the native recovery target, so you can drive
  the interface back to TayPE's fixed-rate lane without enabling Resampling
  first. When you pick **48 kHz**, TayPE now makes a real 48 kHz device-open
  attempt instead of silently falling back to the old hardware rate. If that
  input/output combination truly cannot run at 48 kHz, TayPE restores the last
  working setup and shows the failure.
- If **Resampling** is **on**, you can change the interface sample rate in the
  Audio settings while TayPE continues processing internally at 48 kHz.
- **Hardware error compensation (samples)** lets you add or subtract a small
  signed sample trim when the real rig lands consistently late or early versus
  the driver report. Positive values mean "this box is actually later than
  Core Audio says." TayPE folds that trim into recording compensation and the
  default MIDI Out timing estimate.
- **Audio worker cores** defaults to **Allow efficiency cores**. On
  heterogeneous Apple Silicon systems, that lets TayPE use a `total_cores - 1`
  worker pool while still reserving the `performance_cores - 1` heavy lanes
  for the most expensive plugin tracks. Switch to **Performance cores only**
  if you want the worker pools constrained entirely to the performance-core
  budget. Applying that change refreshes the in-process worker pool and
  restarts the plugin sandbox.
- **NAM AMX Acceleration** enables TayPE's Accelerate-backed LSTM path on
  Apple Silicon, including mono/stereo LSTM instances and larger shared
  batches. New installs and fresh preferences leave this on by default.
- **True Summing** now lives on the master strip's **NAM Summing** panel.
  It only becomes active when **NAM AMX Acceleration** is on: enabled means
  tracks feeding the master pass through NAM before the sum; disabled means
  audio sums first and then runs through the stereo NAM bus.

## Editing

Editing follows the playback-safe policy. Core clip actions stay live during
playback, while structural and render-backed edits still stop first.

- **Click a clip** to select it
- **Drag a clip** to move it (horizontally for time, vertically to change
  tracks)
- **Option+drag** a clip to copy it to a new position
- **\\** - split the selected clip, or every selected clip that crosses the tape head
- **D** - duplicate the selected clip or clip set back-to-back
- **B** - bounce the selected clips to one new stem track
- **Cmd+B** - bounce the selected tracks to one new stem track and archive the sources
- **Cmd+X / Cmd+C / Cmd+V** - cut, copy, paste the selected clip or clip set

The **Edit** menu carries all split variants, including loop-brace splits,
"split all" actions, and **Bounce Clips to Stem**. The **Tracks** menu carries
track duplication/deletion plus **Bounce Tracks to Stem**, and the
**Transport** menu now carries **Loop Selected**, a ticked **Metronome**
toggle, the **Count-In** submenu, and the **Record Stop Mode** submenu.

Drag the edges of a clip to trim it. This is non-destructive - your
original audio is never modified.

## Undo and Redo

- **Cmd+Z** - undo
- **Cmd+Shift+Z** - redo

Every action is undoable. Fader moves, clip edits, track changes - all of it.

## Licensing

Use the **TayPE** application menu to open licensing:

- **License Now** (when unregistered)
- **License** (when registered)

## About TayPE

Use **TayPE > About TayPE** to view the exact app version/build and the
shipped dependency versions and licences (JUCE, Signalsmith Stretch,
NeuralAmpModelerCore, and the system Git runtime used for reel history).

## Popup Help

Use **Help -> Popup Help** or the transport bar's far-right **?** toggle to
turn on hover help across the transport, timeline, mixer, and channel strip.
When popup help is enabled, the **?** button lights green. After you rest the
pointer on a control for about **0.7 seconds**, TayPE explains what that
control does.

## RTFM and Docs Search

Use **Help -> Read the Fine Manual** to open the matching TayPE GitBook
language in your browser when that translation exists. If your current app
locale does not have a published docs section yet, TayPE falls back to English.

On macOS, use the search field at the top of the **Help** menu to search the
docs. Pressing Return there, or clicking the search button, opens that search
in the matching docs language in your browser instead of invoking Apple Help
search. If that locale has no GitBook section, the search falls back to English.

On non-macOS platforms, **Help -> Search TayPE Docs...** stays available as the
explicit browser-search fallback.

## App Language

Use **Help -> Language** to pick the app language TayPE should use on the
next launch. TayPE writes the selection to your user settings immediately,
shows a confirmation modal in the newly selected language, and asks you to
restart so the whole interface picks it up cleanly.

The menu only shows language files that are actually present and valid in
your TayPE language folder, so custom or in-progress language packs can be
tested without changing the app build.

Shipped app language packs are seeded into that folder automatically, and app
updates can add newly bundled CSV packs there on next launch without any extra
registration step. If you add or remove valid language CSV files in your TayPE
language folder yourself, that menu updates to match what is actually
installed.

The startup splash and plugin-scan splash follow that same selected app
language for their rotating gregisms, but those lines stay bundled inside
the app rather than coming from the editable CSV language packs. When the
normal startup splash is still on its timer, you can click it away once the
main desk is ready behind it, and the welcome card then appears on that same
handoff instead of peeking out underneath.

## Guild Picks

Use **Tools -> Guild Picks** for a small curated list of plugins we rate for
actually making records.

Guild Picks carries this disclaimer:

**No affiliations. No kickbacks. Just plugins we genuinely rate for making records.**

The list is grouped into **Free**, **Honourware**, **Paid Sleepers**, and
**Paid Premium**, and each item opens the official vendor page in your browser.

## Track States

TayPE has three ways to think about tracks:

**Current** - the default. These are your active, living tracks. What you
hear during playback.

**Focus** - press **F** to filter the timeline down to only the tracks
that have audio at the current tape head position. If loop playback is on,
Focus widens to the whole loop-brace range instead. With loop off, Focus
follows manual playhead moves plus transport playback/record in real time.
Record-armed and monitored tracks stay visible, but selecting a track outside
the clip/loop window does not keep it in Focus.

**Archive** - press **X** to toggle archive view. Archived tracks are
completely silent - no playback, no processing, no CPU. Archive is not
"mute" or "hide" - it's putting a track away in the cupboard. You can
pull it back out when you need it.

**Automation** - press **A** to toggle automation view. That switches the
timeline into breakpoint editing for the selected automation parameter while
leaving the clips visible underneath.

## Stems and Buses

Tracks can be designated as buses using the **B** button in the track
header. A bus track sums audio from all tracks routed to it, letting you
create submixes (drums bus, vocal bus, etc.).

Route a track to a bus by clicking its output label and selecting the bus
from the list.

Press **G** (Spill) to see only the selected bus and all tracks routed to
it - useful for focusing on a submix.

## What Next

- Learn the [Timeline](timeline/README.md) in detail
- Explore the [Mixer](mixer.md) and [Channel Strip](channel-strip/README.md)
- See all [Keyboard Shortcuts](keyboard-shortcuts.md)
