# Getting Started

TayPE is built around a simple loop: record, listen, commit. No endless
menus, no buried features. Here's how the core workflow fits together.

## The Two Views

TayPE has two main views. Press **M** to toggle between them.

**Timeline** - where you see your tracks, clips, and the tape head moving
across time. This is where you record, arrange, and edit.

**Mixer** - where you shape the sound. Faders, EQ, compression, plugin
inserts. One channel strip per track, laid out left to right.

## Opening and Creating Reels

TayPE opens into the **Reel Browser**. That is the place to open an existing
reel, jump into a recent one, or create a new one.

If your startup path includes the welcome card, the green **Let's Roll**
button waits a second for the card to settle, then flashes three times at
3 Hz so the main path into the reel is obvious without turning startup into
a wizard. Under the performance advisor note, a left-aligned brass
**Full Plugin Automation in development** line sits between the same goat glyphs used by
the Founder badge.

If you open the **Reel Browser** straight from that welcome card, the fresh
startup reel stays loaded and shows as the current session while you decide
what to do next. If you branch into a different reel without touching it,
TayPE just deletes that blank startup reel outright instead of clogging the
library with dead air, and it stays out of **Recents** until you actually do
some real work in it.

The paired welcome logos sit in matched square tiles, and the tape mark now
gets its own square badge with extra background instead of being stretched to
fake the RAW block.

The welcome card also has **Check for Updates** in its bottom-right utility
area. It checks the public release feed when you press it, and downloads an
installer only after you choose where to save it. You can also enable
**Preferences > General > Check for updates on startup** if you want TayPE to
run the same check once after the first reel has loaded.

Use **Open From File...** in the Reel Browser when the reel or pack you want
is outside your normal library.

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

Temporary bundles opened from system temp folders are not kept in Recents, so
test or unpack scratch work does not pollute your normal reel list.

When you create a reel, TayPE opens a native save dialog rooted at
`~/Documents/Taype/Reels` and suggests a bundle name like
`Untitled Reel.taype`. You can change both the location and the reel name in
that one step.

Working state is saved automatically while the transport is stopped. There is
no separate Save command to manage. Press **Cmd+S** when you want to create a
named checkpoint: a deliberate line in the sand you can come back to later.

When you want a fresh start without dragging the old history behind you, use
**Thin Reel...** in the Reel Browser. TayPE asks where to put the thinned
bundle, appends `Thinned` to the current name by default, and leaves the
source reel untouched. If you are short on storage, delete the old reel in
Finder after you have checked the thinned one.

In the Reel Browser history, the default filtered view is tag-driven: current
state, named checkpoints, and branch-origin tags. If you branch from an
autosave, TayPE tags that source commit so it stays visible as the branch node.
Plain autosave heads stay hidden until you turn on **Show Autosaves** for the
full save-by-save trail. The history view is a continuous vertical git-style
graph: earliest at the top, newest at the bottom, current branch as the main
spine, and side branches offset to the right. Autosaves on the same branch
stay in one lane instead of cascading deeper with every commit. Use **Focus**
in the history header to snap the browser back to the current state after
exploring older commits and side branches.

## Recording

1. Select a track by clicking its header in the timeline.
2. Set the track's input by clicking the input label (e.g. "1-2" for a
   stereo pair from your audio interface).
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
  buffer size**. The device status, resampling, NAM, and **Apply Audio
  Changes** controls sit underneath.
- Use **Apply Audio Changes** if you want an explicit commit after editing
  audio settings.
- If **Resampling** is **off**, the Sample rate field is read-only and shows
  your interface's current rate.
- With Resampling off, TayPE will try to switch your interface to **48 kHz**
  automatically.
- If your interface is not at 48 kHz while Resampling is off, TayPE flags this
  in red and tells you to engage Resampling.
- If **Resampling** is **on**, you can change the interface sample rate in the
  Audio settings while TayPE continues processing internally at 48 kHz.
- If your preferred device is missing, TayPE keeps that missing choice staged
  in Audio settings instead of silently forgetting it. If there is no live
  fallback device, the selector now shows `{device_name} (missing)`, and
  explicitly choosing the live fallback device enables **Apply Audio Changes**
  even when the live hardware does not change.
- On the first playback attempt in that state, TayPE asks whether to use the
  live fallback for this app session or stay on **No Audio** until you choose
  hardware manually.
- **NAM AMX Acceleration** enables TayPE's Accelerate-backed LSTM path on
  Apple Silicon, including mono/stereo LSTM instances and larger shared
  batches.
- **True Summing** now lives on the master strip's **NAM Summing** panel.
  It only becomes active when **NAM AMX Acceleration** is on: enabled means
  tracks feeding the master pass through NAM before the sum; disabled means
  audio sums first and then runs through the stereo NAM bus.

## Editing

Editing follows the playback-safe policy. Core clip actions, channel-strip
changes, routing, and prepared graph swaps stay live during playback. Actions
that need to print or replace media stop playback first, then continue.
Recording still blocks edit actions until the take is finished.

- **Click a clip** to select it
- **Drag a clip** to move it (horizontally for time, vertically to change
  tracks)
- **Cmd+drag** a clip to copy it to a new position
- **S** - split the selected clip at the tape head
- **Cmd+D** - duplicate a clip back-to-back
- **Cmd+X / Cmd+C / Cmd+V** - cut, copy, paste

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
The About box also includes **Check for Updates**. If a newer public release is
available, TayPE offers to download the `.pkg` installer to a location you
choose, then can open the installer with macOS and close itself cleanly.
Installing a new TayPE build does not overwrite your settings or reels.
The optional startup update check lives in **Preferences > General** and is off
by default.

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

**Help -> Search TayPE Docs...** remains available on every platform as the
explicit docs-search fallback.

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
that have audio at the current tape head position. With loop off, Focus
follows manual playhead moves plus transport playback/record in real time.
Record-armed and monitored tracks stay visible, but selecting a track outside
the clip window does not keep it in Focus.

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
