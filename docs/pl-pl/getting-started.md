# Pierwsze kroki

TayPE is built around a simple loop: record, listen, commit. No endless
menus, no buried features. Here's how the core workflow fits together.

## The Two Views

TayPE has two main views. Press **M** to toggle between them.

**Oś czasu** - where you see your tracks, clips, and the tape head moving
across time. This is where you record, arrange, and edit.

**Mixer** - where you shape the sound. Faders, Korektor, compression, plugin
inserts. One channel strip per track, laid out left to right.

## Opening and Creating Reele

TayPE opens into the **Reel Browser**. That is the place to open an existing
reel, jump into a recent one, or create a new one.

If your startup path includes the welcome card, the green **Let's Roll**
button waits a second for the card to settle, then flashes three times at
3 Hz so the main path into the reel is obvious without turning startup into
a wizard. Under the performance advisor note, a left-aligned brass
**Full Wtyczka Automatyka in development** line sits between the same goat glyphs used by
the Founder badge.

If you open the **Reel Browser** straight from that welcome card, the fresh
startup reel stays loaded and shows as the current session while you decide
what to do next. If you branch into a different reel without touching it,
TayPE still moves that blank startup reel into **Scrap Pile** instead of
clogging the library with dead air.

The paired welcome logos sit in matched square tiles, and the tape mark now
gets its own square badge with extra background instead of being stretched to
fake the RAW block.

Use **Otwórz From Plik...** in the Reel Browser when the reel or pack you want
is outside your normal library.

Right-click any reel in the browser to **Zmień nazwę** or **Usuń** it. TayPE asks
for confirmation before it commits either action. If that reel is the one you
are currently working in, rename keeps the session open under the new bundle
name and delete closes the session before moving the bundle into `Scrap Pile`
inside your Reele folder. After delete, TayPE confirms the move and offers
**Show in Finder** so you can reveal the moved reel with that bundle selected.

When a reel is already open, the browser action row starts with **Media**,
which opens that reel's `media/` folder in Finder without closing the browser.

Temporary bundles opened from system temp folders are not kept in Recents, so
test or unpack scratch work does not pollute your normal reel list.

When you create a reel, TayPE opens a native save dialog rooted at
`[TAPE_HOME]/Reele` and suggests a bundle name like
`Untitled Reel.taype`. You can change both the location and the reel name in
that one step.

Working state is saved automatically while the transport is stopped. There is
no separate Zapisz command to manage. Press **Cmd+S** when you want to create a
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
stay in one lane instead of cascading deeper with every commit. Use **Fokus**
in the history header to snap the browser back to the current state after
exploring older commits and side branches.

## Nagrywanie

1. Wybierz a track by clicking its header in the timeline.
2. Set the track's input by clicking the input label (e.g. "1-2" for a
   stereo pair from your audio interface).
3. Uzbrojenie the track for recording by clicking the **R** button, or pressing
   the R button in the track header.
4. Press **Powrót** to start recording. Press **Powrót** again to stop.

While recording, you'll see a red ghost clip growing on the track showing
where audio is being captured. When you stop, the final clip appears with
its waveform.

## Odtwarzanie

- **P** - play / pause
- **Space** - play / stop
- **Z** - stop and return to the start

Click anywhere in the timeline (or the ruler at the top) to move the tape
head to that position. Hold and drag to scrub.

## Audio Częstotliwość próbkowania and Resampling

Otwórz **Preferencje** (**Cmd+,**) and go to the **Audio** tab.

- TayPE runs internally at **48 kHz**.
- The Audio tab keeps the hardware selector rows at the top through **Audio
  buffer size**. The device status, resampling, NAM, and **Zastosuj Audio
  Changes** controls sit underneath.
- Use **Zastosuj Audio Changes** if you want an explicit commit after editing
  audio settings.
- If **Resampling** is **off**, the Sample rate field is read-only and shows
  your interface's current rate.
- With Resampling off, TayPE will try to switch your interface to **48 kHz**
  automatically.
- If your interface is not at 48 kHz while Resampling is off, TayPE flags this
  in red and tells you to engage Resampling.
- If **Resampling** is **on**, you can change the interface sample rate in the
  Audio settings while TayPE continues processing internally at 48 kHz.
- **NAM AMX Acceleration** enables TayPE's shared-state NAM acceleration path
  on Apple Silicon. With it off, A2, WaveNet, and LSTM models run as
  independent per-lane NAM models.
- **True Summing** now lives on the master strip's **NAM Summing** panel.
  It stays available regardless of **NAM AMX Acceleration**: with **SUM** on,
  tracks feeding the master pass through the selected summing lane before the
  final stereo sum.

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

## Cofnij and Powtórz

- **Cmd+Z** - undo
- **Cmd+Shift+Z** - redo

Every action is undoable. Potencjometr moves, clip edits, track changes - all of it.

## Licensing

Use the **TayPE** application menu to open licensing:

- **Licencja Now** (when unregistered)
- **Licencja** (when registered)

## About TayPE

Use **TayPE > About TayPE** to view the exact app version/build and the
shipped dependency versions and licences (JUCE, Signalsmith Stretch,
NeuralAmpModelerCore, and the system Git runtime used for reel history).

## Popup Pomoc

Use **Pomoc -> Popup Pomoc** or the transport bar's far-right **?** toggle to
turn on hover help across the transport, timeline, mixer, and channel strip.
When popup help is enabled, the **?** button lights green. After you rest the
pointer on a control for about **0.7 seconds**, TayPE explains what that
control does.

## RTFM and Docs Search

Use **Pomoc -> Read the Fine Manual** to open the matching TayPE GitBook
language in your browser when that translation exists. If your current app
locale does not have a published docs section yet, TayPE falls back to English.

On macOS, use the search field at the top of the **Pomoc** menu to search the
docs. Pressing Powrót there, or clicking the search button, opens that search
in the matching docs language in your browser instead of invoking Apple Pomoc
search. If that locale has no GitBook section, the search falls back to English.

**Pomoc -> Search TayPE Docs...** remains available on every platform as the
explicit docs-search fallback.

## App Language

Use **Pomoc -> Language** to pick the app language TayPE should use on the
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

## Guild Picks

Use **Narzędzia -> Guild Picks** for a small curated list of plugins we rate for
actually making records.

Guild Picks carries this disclaimer:

**No affiliations. No kickbacks. Just plugins we genuinely rate for making records.**

The list is grouped into **Free**, **Honourware**, **Paid Sleepers**, and
**Paid Premium**, and each item opens the official vendor page in your browser.

## Ścieżka States

TayPE has three ways to think about tracks:

**Current** - the default. These are your active, living tracks. What you
hear during playback.

**Fokus** - press **F** to filter the timeline down to only the tracks
that have audio at the current tape head position. With loop off, Fokus
follows manual playhead moves plus transport playback/record in real time.
Nagrywaj-armed and monitored tracks stay visible, but selecting a track outside
the clip window does not keep it in Fokus.

**Archiwum** - press **X** to toggle archive view. Archived tracks are
completely silent - no playback, no processing, no CPU. Archiwum is not
"mute" or "hide" - it's putting a track away in the cupboard. You can
pull it back out when you need it.

**Automatyka** - press **A** to toggle automation view. That switches the
timeline into breakpoint editing for the selected automation parameter while
leaving the clips visible underneath.

## Stems and Buses

Ścieżki can be designated as buses using the **B** button in the track
header. A bus track sums audio from all tracks routed to it, letting you
create submixes (drums bus, vocal bus, etc.).

Route a track to a bus by clicking its output label and selecting the bus
from the list.

Press **G** (Rozlanie) to see only the selected bus and all tracks routed to
it - useful for focusing on a submix.

## What Dalej

- Learn the [Oś czasu](timeline/README.md) in detail
- Explore the [Mixer](mixer.md) and [Pasek kanału](channel-strip/README.md)
- See all [Skróty klawiaturowe](keyboard-shortcuts.md)
