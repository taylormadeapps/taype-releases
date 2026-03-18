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
The right-hand action stack keeps **Open Reel Browser** as the standout branch,
with **Audio Preferences** and **Plugin Manager** sitting underneath it as
matched secondary buttons. The supporting copy on the left starts level with
those buttons, so the card scans as three aligned action rows.

If you open the **Reel Browser** straight from that welcome card, the fresh
startup reel stays loaded and shows as the current session while you decide
what to do next. If you branch into a different reel without touching it,
TayPE still throws that blank startup reel away instead of clogging the
library with dead air.

The paired welcome logos sit in matched square tiles, and the left TayPE mark
now fills its tile directly instead of sitting inside a second inner badge.
The supporting copy on the left also stays level with the top edge of its
matching action button row.
The welcome card itself stays deliberately compact instead of stretching across
the whole window, so the footer line and action rows feel like one focused
panel rather than a billboard.

The **Reel Browser** is where you open an existing reel, jump into a recent
one, or create a new one.

Right-click any reel in the browser to **Rename** or **Delete** it. TayPE asks
for confirmation before it commits either action. If that reel is the one you
are currently working in, rename keeps the session open under the new bundle
name and delete closes the session before removing the bundle. If the name you
ask for is already taken in that folder, TayPE adds ` 2`, ` 3`, and so on
instead of overwriting the existing reel.

When the current reel is already open, **File -> Rename Reel...** runs the
same rename prompt and confirmation flow without making you hop back into the
browser first.

When a reel is already open, the browser action row starts with **Media**,
which opens that reel's `media/` folder in Finder without closing the browser.

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
  status, resampling, NAM, and **Apply Audio Changes** controls sit
  underneath.
- Every control on this tab is staged. TayPE does not reopen the live audio
  device when you change a field; it waits for **Apply Audio Changes**.
- Use **Apply Audio Changes** to commit output device, input device, master
  output pair, default stereo input, default mono input, sample rate, buffer
  size, hardware error compensation, Resampling, and NAM changes together.
- The **Master output pair** list only offers normal stereo hardware pairs
  such as `1-2`, `3-4`, `5-6`, and so on.
- TayPE remembers the last input and output device you applied here, so the
  same hardware routing comes back on relaunch.
- Tracks whose input selector is **Default** follow the mono/stereo default
  input you pick here as soon as you apply the change. TayPE also restores the
  matching input channels on relaunch, so an aggregate-device default keeps
  pointing at the same hardware tail. Either default input can be **None**.
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
- **NAM AMX Acceleration** enables TayPE's Accelerate-backed LSTM path on
  Apple Silicon, including mono/stereo LSTM instances and larger shared
  batches.
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
- **Option+drag** a clip to copy it to a new position
- **\\** - split the selected clip, or every selected clip that crosses the tape head
- **D** - duplicate the selected clip or clip set back-to-back
- **Cmd+X / Cmd+C / Cmd+V** - cut, copy, paste the selected clip or clip set

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
that have audio at the current tape head position. If loop playback is on,
Focus widens to the whole loop-brace range instead. Focus recomputes when
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
