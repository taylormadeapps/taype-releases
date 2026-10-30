# Vintage Vocoder

Sonicism Vintage Vocoder is a restored audio effect for macOS. Its free
standalone installer includes AU Music Effect and VST3 formats for Apple Silicon
and Intel Macs running macOS 12 or later.

Vintage Vocoder is free for personal and commercial use. It does not require a
TayPE purchase or licence and has no trial expiry.

Visit the [Vintage Vocoder product page](https://taype.ruminantaudioworks.com/vintage-vocoder/)
for the download, compatibility details and installation guide.
You can also reach it from the Vintage Vocoder button beside Explore TayPE on
the [Ruminant Audio Works company page](https://taype.ruminantaudioworks.com/ruminant-audio-works/).

## Get a sound

1. Quit your DAW, run the installer, then reopen your DAW. Rescan plug-ins if
   needed.
2. Insert **Vintage Vocoder FX** on an audio track containing a voice or another
   sound. Start with **NORM** mode and the **MIX** towards wet.
3. Play the audio. It shapes the sound of the internal oscillators.
4. To play the carrier, select **MIDI** and route a MIDI track or keyboard to the
   effect. Keep the audio playing while you play notes. MIDI routing to audio
   effects depends on your DAW.

The incoming audio is the **modulator**: it supplies the changing sound shape.
The **carrier** is the sound being shaped. In NORM it comes from the fixed
internal oscillators; in MIDI you play those oscillators with notes.

## Choose a mode

| MODE | What it does |
|------|--------------|
| TEST | Auditions the fixed internal carrier. |
| NORM | Main audio shapes the fixed internal oscillators. |
| MIDI | Main audio shapes the MIDI-played internal carrier. |
| EXT | Main audio is the modulator; sidechain audio is the carrier. Both need audio. |
| MOD L | Left input is the modulator; right input is the carrier. |
| MOD R | Right input is the modulator; left input is the carrier. |

If MIDI mode is silent, check that both audio and MIDI reach the effect. If EXT
is silent, check the sidechain carrier as well as the main audio. There is no
automatic internal carrier fallback in EXT.

The **PRESETS** button offers 30 factory sounds. **SAVE AS** saves your own
named presets. Turn on the **?** button beside the Sonicism badge and hover over
a control for an explanation and mouse actions.
