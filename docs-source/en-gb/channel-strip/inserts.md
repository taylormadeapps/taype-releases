# Insert Slots

Insert slots host VST3 effects, instruments, hardware inserts, MIDI Out, and TayPE stock processors.

## Plugin Picker

Use the insert picker to choose scanned VST3 plugins, bundled TayPE stock plugins, hardware insert, or MIDI Out. The picker has its own close button, search/filter behaviour, and clear slot actions.

The insert picker is a searchable chooser with `Stock`, `Effects`, and
`Instruments` type buttons. Empty search browses the plug-in folder hierarchy
inside the custom picker with a fixed Back/path strip. Typing in Search turns
off the active type button and searches every plug-in type allowed in that
slot. Click a type button to narrow the current results; editing the query
returns to the all-types search. The last type button you explicitly selected
is remembered while TayPE is running.

In search results, Shift-click selects a visible range and Command-click toggles separate audio-effect or hardware-insert rows. The picker then shows a footer with selected/addable status text and **Add** so you can load the selected rows in result order from the opened slot onward. Existing inserts in those destination slots are replaced, and TayPE stops when the rack runs out of slots. Instruments and MIDI Out stay single-select because they can only live in slot 1.

Right-click any insert slot to open the slot menu. Loaded slots include per-slot actions, and every slot also shows **Delete All** for clearing every plug-in in the insert block. On an empty insert block, **Delete All** is shown but disabled.

Click any populated insert row to open its plug-in window, including an insert
that was already disabled when the reel opened. Assigned plug-ins on live
tracks remain resident while disabled; archived-track plug-ins are unloaded.
Opening the editor does not re-enable processing.
If the window is already open behind another plug-in, the click brings it to
the front; only a window that is already the frontmost plug-in window is closed.
Command+Option-click deletes that insert. Command-click still toggles its bypass
state, while Option-click disables or re-enables it.

Press **Option+P** to hide every open plug-in window, then press it again to
restore the same windows in the same bottom-to-top order, including the editor
that was previously on top. It works while a TayPE dialog, plug-in picker,
text field, or hosted plug-in editor has focus. This does not close or reload
the plug-ins.
Clicking an insert while the windows are hidden restores the window set and
brings the clicked plug-in to the front.

When TayPE is active, opening or restoring a plug-in window brings that window
in front of both the main window and every other open plug-in window. TayPE
keeps the last window you opened or used at the top when application focus
changes. If the plug-in sandbox has crashed or been fully restarted, its old
windows are discarded and one click reopens the selected editor.

TayPE dialogs, pickers, and other auxiliary windows temporarily sit above the
plug-in stack while you use them. Print Mix, Print Loop, and Print Marker Ranges
hide every visible plug-in window before opening their export window. Closing
the export window restores the same plug-ins in their previous order without
reloading or pulling focus away; plug-ins already hidden with Option+P stay
hidden.

The plug-in toolbar's **One** control keeps a single plug-in window open at a
time. Opening another editor replaces the current one while retaining its
position where possible. Click the previous insert once to bring its editor
back.

In **Tools -> Plugin Manager**, **Show plugins before folders** is on by default. When it is on, each picker folder level lists direct plug-ins before child folders.

In the Plugin Manager's **Menu Path** column, `*` puts a plug-in at the picker root even when the menu order is Vendor, Category, or Flat. You can combine it with comma-separated paths, for example `*, Dynamics/Compressors`.

TayPE stock entries include **Taype Rooms**, **Ache-Delay**, **T-Clipper**, **Taype Drive**, **Taype EQ**, and **Taype Comp**. These are bundled for TayPE workflows and remain safe if opened outside their intended host path.

In Taype Rooms, the Previous and Next controls step through IRs in natural
filename order within the current browser folder, wrapping at either end. Use
the IR selector when you want to move to a different folder or library.
**NOT SUBTLE** raises only the reverb's wet output by 18 dB after IR
normalisation. It is off by default, including when older reels and presets are
loaded, so existing sessions keep their previous balance until you enable it.

In Ache-Delay, **NOT SUBTLE** maps Tape Drive across the full native ToTape input
range and engages the same pinned Dubly contour as Taype Drive and the
channel-strip ToTaype preamp. It is off by default, including when older reels
and presets are loaded, so existing sessions keep the original, subtler Drive
response until you enable it. Tape Drive's displayed range and existing
automation remain unchanged. The Tape Mode selector also includes **OFF**,
which bypasses only the ToTape input stage while leaving the delay and its
feedback path active. Existing sessions keep ToTape enabled at their saved
speed.

Taype Drive accepts mono and stereo insert buses. Its channel selector offers
**Mono**, **Stereo**, and **T-bone**. T-bone uses separate Drive settings for
the left and right channels and is available when the host supplies stereo.
Use **L/R** for independent left and right processing, or **M/S** to process the
centre and sides independently. XTALK is unavailable in M/S because the signal
has already been separated into Mid and Side.

Each T-bone lane has its own **MIX** control. Right-click MIX to open **MIX
SPLIT**. **ABOVE** applies Drive and MIX only above the selected split while
leaving the lows fully dry; **BELOW** applies them only below the split while
leaving the highs fully dry. The unselected band always bypasses Drive, even
with MIX fully up, so the split point defines which part is saturated. This is
useful for keeping bass solid beneath heavy saturation or preserving clean
transients and air above it. **OFF** returns MIX to normal broadband blending.
MIX uses a linear dry/wet law, avoiding a level lift around the midpoint when
the dry and saturated signals remain strongly correlated.
Taype Drive follows the NAM preamp quality selected in Preferences when it next
loads a model.

The Taype Drive window is uniformly resizable. Its NAM profile browser opens in
front of the Drive window and follows it when TayPE moves between the foreground
and background.

If a matching plug-in preset is named `Default`, TayPE loads it automatically when you add that plug-in. The plug-in window preset menu includes **Save as Default** to update that default from the current plug-in state.

When an insert has a non-default TayPE plug-in preset associated with it, the insert row shows only that preset name, for example `Vocal Tame`, while popup help keeps the full plug-in and preset, such as `Pro-Q 3 · Vocal Tame`. The reserved `Default` preset keeps the plug-in name in the insert row. A `*` after a displayed preset name means the plug-in state differs from that preset on disk. The same marker appears in the open plug-in window's preset field and remains correct if you close and reopen that window; loading or saving the preset clears it. Changing presets updates the plug-in in its existing window without closing and reopening that window. Clicking anywhere outside the open preset menu closes the menu, including inside that plug-in's own controls or in another plug-in window. Older reels that do not store a TayPE preset name keep the original plug-in-only label.

## Bypass vs Disable

Bypass keeps the insert in the chain and returns latency-aligned dry audio. Disable unloads the insert from the processing graph while keeping the assignment and saved state in the reel.

TayPE uses each insert's reported latency to align clips, instruments, buses,
the master, loop repeats, automation, and plug-in playheads at the point where
that processing actually runs. Large, legitimate latency is supported; it is
not treated as misbehaviour. On Play or a discontinuous relocation, TayPE
prepares the downstream effect history before transport rolls so delay,
lookahead, and reverb buffers cannot leak from the previous pass.

The Inserts section power button bypasses or re-enables the rack without changing each slot's own bypass state. Option-click the same button to toggle a red rack override that forces all insert plug-ins offline without changing each slot's stored enable or bypass state.

In Archive View, active or bypassed insert rows show as offline red and plugin edits stay locked until you unarchive the track.

## Instruments and MIDI Out

Instrument inserts and MIDI Out live in the first slot. They do not appear in
search or browse results for track slots 2-8, ordinary buses, or the Listen
Bus. MIDI Out can send to a Core MIDI destination, keep or force a MIDI
channel, and compensate timing with an early-send amount.

## Hardware Inserts

Hardware Insert sends audio out to external gear and returns it to the strip. Choose output and input routes, add trim, optional filtering, recall images, and latency offset. TayPE rejects routes that would overlap the master output. The window still opens if the live I/O mapping is missing, including while Audio Preferences is waiting on an unplugged device, and tells you to open Audio Preferences. Ping, enable, and route changes need a live mapping; they do not ask you to set send and return routes for that case.

You can put more than one Hardware Insert on the same track. Each has its own window; the title includes the slot number so you can tell them apart. Clicking a slot behaves like a plug-in editor: if that window is in front, it closes; if another window is covering it, it comes forward. Hardware Insert windows sit with the rest of the plug-in editors: opening one does not hide the others. Option+P hides and shows Hardware Insert windows with the rest of the plug-in editors; they come back in their previous order and do not jump in front of a plug-in editor unless you click that slot. If a send or return is already used by another Hardware Insert, TayPE keeps the previous routing instead of leaving the menu showing a route it refused.

Leave the return route empty and the send still goes out, but nothing comes back: the strip goes quiet at full wet. That is deliberate — passing the dry signal through instead would hide the missing patch, and a take could sound as though it went through gear that was never wired back in. Pull the wet/dry knob back if you want to hear the dry side while you patch.

If you *have* chosen a return route and the interface it points at is missing — unplugged, or the I/O mapping moved — TayPE does the opposite: the strip keeps playing the dry signal so the take stays usable, and records the problem in the session log (**Tools → Session Log**). Check there if a Hardware Insert stops sounding like it is in circuit.

Hardware Insert presets live in `[TAPE_HOME]/Presets/Hardware Inserts`.

## Sidechains

Plugins with sidechain inputs can receive an eligible source tap. Sidechain assignments are part of the insert state and follow the reel.

On bus strips, the input row keeps a **Sender** label for orientation only; bus routing lives in sends and outputs rather than an input picker.

## Listen Bus

The master strip has an ear button for the global Listen Bus. It is a monitor-only insert rack after the master fader and LaForgé processing, with the same insert mini meters, wet/dry controls, output trim, and gain compensation controls as a channel insert section.

By default the Listen Bus processes the main master monitor path. If you choose a spare stereo hardware output, TayPE taps the master output into the Listen Bus and sends the processed monitor chain to that output while keeping the normal master output time-aligned.

Listen Bus settings are saved globally in TayPE, not in the reel, and are not included in normal exports or prints.

The Bypass, Disable, and preset controls in an open Listen Bus plug-in window update that same global rack state, just like the controls in the Listen Bus panel.

## Sandboxing

Third-party plugins run in a sandbox helper so a plugin fault is less likely to take the whole app down. If a plugin becomes stuck, restart its sandbox from the insert tools.

When the sandbox crashes on a handled fatal signal, the crash feedback report
includes the sandbox process's best-effort stack trace. Nothing is submitted
until you choose Send, Copy, or Save in the report window. You can close a
report while Send is still working; TayPE safely discards the late status
update when that report window no longer exists.

Plug-in editor windows come to the front without changing the sandbox helper's application role. Switching to another app therefore does not trigger an editor-driven sandbox priority change that can disrupt plug-in DSP. TayPE only performs that focus handoff while TayPE itself is active, so automation does not pull you out of another application.
