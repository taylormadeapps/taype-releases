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

Click an enabled populated insert row to toggle its plug-in window open or
closed. Command+Option-click deletes that insert. Command-click still toggles
its bypass state, while Option-click disables or re-enables it.

Press **Option+P** to hide every open plug-in window, then press it again to
restore the same windows. This does not close or reload the plug-ins.
Clicking an insert while the windows are hidden restores the window set and
brings the clicked plug-in to the front.

In **Tools -> Plugin Manager**, **Show plugins before folders** is on by default. When it is on, each picker folder level lists direct plug-ins before child folders.

In the Plugin Manager's **Menu Path** column, `*` puts a plug-in at the picker root even when the menu order is Vendor, Category, or Flat. You can combine it with comma-separated paths, for example `*, Dynamics/Compressors`.

TayPE stock entries include **Taype Rooms**, **Ache-Delay**, **T-Clipper**, **Taype Drive**, **Taype EQ**, and **Taype Comp**. These are bundled for TayPE workflows and remain safe if opened outside their intended host path.

In Taype Rooms, the Previous and Next controls step through IRs in natural
filename order within the current browser folder, wrapping at either end. Use
the IR selector when you want to move to a different folder or library.

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

## Bypass vs Disable

Bypass keeps the insert in the chain and returns latency-aligned dry audio. Disable unloads the insert from the processing graph while keeping the assignment and saved state in the reel.

The Inserts section power button bypasses or re-enables the rack without changing each slot's own bypass state. Option-click the same button to toggle a red rack override that forces all insert plug-ins offline without changing each slot's stored enable or bypass state.

In Archive View, active or bypassed insert rows show as offline red and plugin edits stay locked until you unarchive the track.

## Instruments and MIDI Out

Instrument inserts and MIDI Out live in the first slot. They do not appear in
search or browse results for track slots 2-8, ordinary buses, or the Listen
Bus. MIDI Out can send to a Core MIDI destination, keep or force a MIDI
channel, and compensate timing with an early-send amount.

## Hardware Inserts

Hardware Insert sends audio out to external gear and returns it to the strip. Choose output and input routes, add trim, optional filtering, recall images, and latency offset. TayPE rejects routes that would overlap the master output.

Hardware Insert presets live in `[TAPE_HOME]/Presets/Hardware Inserts`.

## Sidechains

Plugins with sidechain inputs can receive an eligible source tap. Sidechain assignments are part of the insert state and follow the reel.

On bus strips, the input row keeps a **Sender** label for orientation only; bus routing lives in sends and outputs rather than an input picker.

## Listen Bus

The master strip has an ear button for the global Listen Bus. It is a monitor-only insert rack after the master fader and LaForgé processing, with the same insert mini meters, wet/dry controls, output trim, and gain compensation controls as a channel insert section.

By default the Listen Bus processes the main master monitor path. If you choose a spare stereo hardware output, TayPE taps the master output into the Listen Bus and sends the processed monitor chain to that output while keeping the normal master output time-aligned.

Listen Bus settings are saved globally in TayPE, not in the reel, and are not included in normal exports or prints.

## Sandboxing

Third-party plugins run in a sandbox helper so a plugin fault is less likely to take the whole app down. If a plugin becomes stuck, restart its sandbox from the insert tools.

When the sandbox crashes on a handled fatal signal, the crash feedback report
includes the sandbox process's best-effort stack trace. Nothing is submitted
until you choose Send, Copy, or Save in the report window.

Plug-in editor windows come to the front without changing the sandbox helper's application role. Switching to another app therefore does not trigger an editor-driven sandbox priority change that can disrupt plug-in DSP.
