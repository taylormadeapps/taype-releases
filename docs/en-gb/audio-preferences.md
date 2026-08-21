# Audio Preferences and I/O Mapping

Use **Preferences → Audio** to choose the interface and decide which physical
channels TayPE presents for recording, monitoring and external hardware.

## Audio Devices

Choose the output device first. Interfaces with separate input and output
devices also show an **Input device** selector. The sample rate and buffer size
choices come from the selected hardware.

Press **Apply Audio Changes** after changing the device or routing setup. TayPE
keeps the current setup until you apply the staged choices.

## Channel Mapping

A channel mapping gives the interface channels useful names and controls which
ones appear in TayPE's routing selectors.

- Choose an existing mapping from **Channel mapping**.
- Use **Add** to create a separate mapping for another studio or routing setup.
- Use **Edit** to rename channels or make channels available or unavailable.

Channels remain in the exact order reported by the audio device. Renaming a
channel changes its label but never moves it to another position. Stereo pairs
follow the same physical order as their first channel.

The selected mapping supplies the choices for:

- **Master output pair**
- **Metronome output**
- **Default stereo input**
- **Default mono input**

The metronome can follow **Master output** or use a separate mapped output.

## Unavailable Routes

TayPE preserves a saved route when its channel is disabled, disconnected or no
longer present. The selector shows the route as unavailable instead of silently
changing it to another channel. Choose a replacement yourself when that is what
you intend.

This also protects reel routes, Hardware I/O and direct outputs from being
quietly redirected when the interface topology changes.

## When the Preferred Device Is Missing

TayPE may open a fallback audio device so the app remains usable when the
preferred interface is unplugged or unavailable. While fallback is active:

- the mapping and route selectors remain tied to the preferred interface;
- unavailable preferred routes stay visible but disabled;
- fallback-device channel names do not replace the preferred channel labels;
- explicit recording, monitoring, Hardware I/O and direct-output routes are not
  sent to coincident channel numbers on the fallback device; and
- applying preferences cannot save fallback channel routes over the preferred
  setup.

Reconnect the preferred interface to restore its mapping and routes. To replace
it intentionally, select a different available device in Audio Preferences and
apply the change.

## Hardware Error Compensation

Use **Measure Latency** when an external analogue or digital loop needs manual
round-trip correction. Connect the requested output to the requested input,
run the measurement, and keep the resulting compensation only when the test
completes successfully.
