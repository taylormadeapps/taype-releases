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

On a normal launch, TayPE opens a fresh reel behind the welcome card. If you
are unlicensed, the license screen chains in as soon as you leave that welcome
step. If you open a `.taype` bundle or `.tpak` pack from Finder, TayPE skips
the welcome card, opens that session first, and then chains straight into the
license screen.

The welcome card points you at the green **Let's Roll** button first, waits a
second for the card to settle, and then flashes it three times at 3 Hz so the
main path into the reel is obvious without turning startup into a wizard.

The paired welcome logos sit in matched square tiles, and the tape mark now
gets its own square badge with extra background instead of being stretched to
fake the RAW block.

The **Reel Browser** is where you open an existing reel, jump into a recent
one, or create a new one.

Right-click any reel in the browser to **Rename** or **Delete** it. TayPE asks
for confirmation before it commits either action. If that reel is the one you
are currently working in, rename keeps the session open under the new bundle
name and delete closes the session before removing the bundle.

When a reel is already open, the browser action row includes **Media**, which
opens that reel's `media/` folder in Finder without closing the browser.

Use **Open From File...** in the Reel Browser when the reel or pack you want
is outside your normal library.

Temporary bundles opened from system temp folders are not kept in Recents, so
test or unpack scratch work does not pollute your normal reel list.

When you create a reel, TayPE opens a native save dialog rooted at
`~/Documents/Taype/Reels` and suggests a bundle name like
`Untitled Reel.taype`. You can change both the location and the reel name in
that one step.

Fresh reels open with one armed audio track and the transport set to **90 BPM**.

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
- **NAM AMX Acceleration** enables TayPE's Accelerate-backed LSTM path on
  Apple Silicon, including mono/stereo LSTM instances and larger shared
  batches. New installs and fresh preferences leave this on by default.
- **True Summing** now lives on the master strip's **NAM Summing** panel.
  It only becomes active when **NAM AMX Acceleration** is on: enabled means
  tracks feeding the master pass through NAM before the sum; disabled means
  audio sums first and then runs through the stereo NAM bus.

## Editing

Editing only happens when the transport is stopped. This is by design -
TayPE keeps playback clean and separate from structural changes.

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

**Help -> Search TayPE Docs...** stays available on every platform. On macOS it
now jumps straight to the docs in your browser without opening a separate modal
first.

## App Language

Use **Help -> Language** to pick the app language TayPE should use on the
next launch. TayPE writes the selection to your user settings immediately,
shows a confirmation modal in the newly selected language, and asks you to
restart so the whole interface picks it up cleanly.

The menu only shows language files that are actually present and valid in
your TayPE language folder, so custom or in-progress language packs can be
tested without changing the app build.

The current alpha bundle ships with **English (UK)** plus draft
**America English**, **Français**, **Deutsch**, **Español**, **Íslenska**,
**Esperanto**, and **日本語** app packs. If you add or remove valid language
CSV files in your TayPE language folder, that menu updates to match what is
actually installed.

The startup splash and plugin-scan splash follow that same selected app
language for their rotating gregisms, but those lines stay bundled inside
the app rather than coming from the editable CSV language packs.

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
that have audio at the current tape head position. Focus recomputes when
you press the button - it doesn't jitter around while you work. Record-armed
and selected tracks are always visible.

**Archive** - press **A** to toggle archive view. Archived tracks are
completely silent - no playback, no processing, no CPU. Archive is not
"mute" or "hide" - it's putting a track away in the cupboard. You can
pull it back out when you need it.

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
