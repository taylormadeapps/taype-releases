# Getting Started

TayPE opens into a working reel with a timeline, a transport, a selected track, and a channel strip. The aim is simple: get audio or MIDI onto tracks, shape it, and keep committing useful takes.

## The Two Views

TayPE has two main work views:

- **Timeline**: record, edit, arrange, name tracks, work with clips, markers, and track states.
- **Mixer**: work across channel strips, inserts, faders, routing, sidechains, sends, and buses.

Use the View controls or shortcuts to move between them. The transport and focused track stay connected as you switch views.

## Reels

A reel is TayPE's session format. Use **File > New Reel**, **Open Reel**, or the reel browser to start work. TayPE autosaves; **Save** creates an intentional checkpoint rather than being the only thing standing between you and disaster.

Use [Reels](reels/README.md) for checkpoints, history, pack/unpack, thin reels, and upgrades.

## Recording

Choose an input on the track header or channel strip, arm the track, then press **Record**. Audio tracks record audio. Instrument tracks can host a VSTi on the first insert slot and record MIDI or rendered instrument output depending on the workflow.

Right-click **Stop** to choose **Record Stop Mode**, which decides what pressing
Record again or Stop does during a take:

- **Return** commits the pass and returns to the pass start.
- **Punch** commits the pass and parks at the take end.
- **Do-Over** commits only long enough to remove the just-recorded pass, then restarts from the pass start.

`Z` is always the escape hatch. It stops transport and gets you out of the current pass safely.

Right-click **Record** to choose **Record Mode**:

- **Auto Punch** records a normal linear take and uses the braces as one punch
  window when Loop is enabled.
- **Comp** creates comp history with wrapped laps when Loop is enabled or one
  linear child take when it is not.
- **Dub** does the same with layered **Don't Comp** takes and adds live lap
  feedback when Loop is enabled.
- **Sooper-Looper** keeps the loop-required armed-track workflow.

## Playback

Use **Space** for Play/Stop and **P** for Play/Pause. Playback-safe edits can happen while the transport is rolling; edits that would risk the take are blocked until you stop. Recording is stricter: TayPE protects the active pass and asks you to finish it before changing the timeline structure.

The ruler can show bars/beats or time. Marker shortcuts jump directly to numbered marker slots, and the marker buttons also move to loop braces where that makes musical sense.

## Importing Audio

Drag audio onto the timeline or use **File > Import Audio**. Multiple files can be placed together, one per track, and TayPE keeps references inside the reel so the session can reopen cleanly later.

If imported media needs resampling, TayPE handles it during import or playback so the reel runs at the active sample rate.

## Editing

Select clips, split at the playhead, trim edges, drag clips between compatible tracks, adjust clip gain, and add fades. Crossfades are created by overlapping clip edges where the clips can share the same lane.

MIDI clips open in the MIDI editor. Melodyne opens from a clip, not as a normal insert.

## The Channel Strip

Every track has a built-in strip: Trim, Preamp, Filters, EQ, Compressor, Inserts, Fader, Pan, Meter, and Output. The docked strip follows the selected track. The mixer shows many strips at once and has its own width mode.

Use **W** to toggle the focused width context. In the timeline it controls the docked strip. In the mixer or detached mixer it controls the mixer rack. TayPE remembers those width choices separately.

## App Scale

Use **View > UI Scale** or **Cmd+Option+- / Cmd+Option+=** to change the global app scale. This is separate from the strip width modes: scale changes the physical size of the interface; width mode changes how much of each strip is shown.

## Popup Help

Use **Help > Popup Help** or the help button in the transport bar to toggle hover help. When enabled, TayPE explains controls after a short hover. Routing selectors still reveal the full route on hover even when popup help is disabled.

## App Language

TayPE ships with translated app language packs. Use the Help menu language selector or the welcome card language picker. Changing language takes effect after restart, and the restart notice appears in the newly selected language.

The public GitBook manual is maintained for every shipped GitBook language. Use **Help > Read the Fine Manual** to open the matching docs language, or the Help menu search field on macOS to search the manual in your browser.

## MIDI Monitor

Use the MIDI Monitor when you need to see what TayPE is receiving from controllers, keyboards, or virtual MIDI devices. It is useful for Mackie MCU setup, virtual instrument troubleshooting, and checking whether a device is sending the expected messages.

## Control Surfaces

TayPE supports Mackie MCU-style control surfaces, including focused support for X-Touch One workflows. See [Control Surfaces](control-surfaces.md) for banking, selected-track control, and monitor/select behaviour.

The built-in **Korg nanoKONTROL Studio** profile keeps the familiar MCU transport layout while its SEL buttons toggle monitoring. The **Behringer X-Touch One** profile is built for a selected-track workflow: its single motor fader follows the focused virtual strip, and the channel buttons select the previous or next virtual strip. **Clear Solo** clears all solo states.

To create a custom MCU profile, copy the **Default Transport Template** from TayPE's Control Surfaces folder, rename the copy to end in `.json`, then edit the JSON mapping.

## Stem Splitter

Stem Splitter uses bundled model support to split a source into musical stems when the feature is available on your Mac. See [Stem Splitter](stem-splitter.md) for model setup, render flow, and failure cases.

## TONE3000

The NAM profile browser can work with local profiles and TONE3000 search/download flows. See [TONE3000 and NAM Profiles](tone3000.md) for profile storage, sign-in, package downloads, and loading profiles into the preamp.

## Licensing

TayPE uses a trustware licence model. The app remains usable while reminding you to support the work if you are able. See [Licensing](licensing.md).
