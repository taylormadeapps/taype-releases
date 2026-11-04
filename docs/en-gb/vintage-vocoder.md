# Vintage Vocoder

Sonicism Vintage Vocoder is a restored audio effect for macOS, Windows and Linux. Its
free standalone macOS installer includes AAX Native, AU Music Effect, VST2 and VST3 for
Apple Silicon and Intel Macs running macOS 12 or later. Linux ARM64 and x86-64
VST3 archives target Ubuntu 22.04/glibc 2.35 or later and a matching 64-bit host.
The Windows x86-64 installer provides AAX Native, VST2 and VST3 for compatible
64-bit Windows hosts.

Vintage Vocoder is free for personal and commercial use. It does not require a
TayPE purchase or licence and has no trial expiry.

Visit the [Vintage Vocoder product page](https://taype.ruminantaudioworks.com/vintage-vocoder/)
for the download, compatibility details and installation guide.
You can also reach it from the Vintage Vocoder button beside Explore TayPE on
the [Ruminant Audio Works company page](https://taype.ruminantaudioworks.com/ruminant-audio-works/).

Use **Take a listen** below the interface screenshot to play the 45-second audio
demo, which fades out over its final second.
Credit: © [FAAFOE](https://faafoe.bandcamp.com/track/shanti) and [Picky the Producer](https://www.instagram.com/pickyproducer/), Brighton UK 2026.

The introduction video sits near the bottom of the product page, above
**Community & Support**. Choose **Load introduction** to load YouTube’s player,
then press Play. **Watch on YouTube** opens the video directly.

The **Community & Support** section on the product and company pages links to
the newsletter, Instagram, YouTube and Reddit. Use **Get in Touch** for bugs,
questions or suggestions. Choose **Vintage Vocoder** in the required **Product**
dropdown; website links start at **N/A**. Email is optional, but leave it if you
would like a reply.

## Format choices

The macOS installer offers **VST2**, **VST3**, **Audio Unit (AU)** and
**AAX (Pro Tools)**. All four start selected; untick any you do not need.
Unticking a format during an upgrade leaves an existing installation of that
format in place. AAX installs in
`/Library/Application Support/Avid/Audio/Plug-Ins/`.

AAX Native is PACE-signed and passed audio and MIDI smoke tests in official
Pro Tools Intro 2026.4.1 on Apple Silicon. Intel Pro Tools operation has not been
separately tested. Your Pro Tools version may require a newer macOS than the
plug-in's macOS 12 minimum. Vintage Vocoder needs no separate iLok licence.

The Windows installer offers **AAX (Pro Tools)**, **VST2** and **VST3**,
independently selectable and initially all selected. Existing installations of
unselected formats are retained. The Windows AAX is PACE-signed and passed the
developer's Pro Tools smoke test on a Windows laptop. It requires no separate
Vintage Vocoder licence or iLok activation.

Windows destinations:

- AAX: `C:\Program Files\Common Files\Avid\Audio\Plug-Ins\`
- VST2: `C:\Program Files\Common Files\VST2\` — add this to your host's scan paths.
- VST3: `C:\Program Files\Common Files\VST3\`

The published Linux downloads remain VST3. Forthcoming Linux packages add
VST2; those candidates are not the current public downloads. The TayPE
installer continues to include VST3 and AU. Desktop Linux downloads are not
MPC plug-ins.

## Get a sound

1. Quit your DAW. On macOS or Windows, run the installer. The Windows installer
   requires administrator approval; select the formats you need from its
   Components page. It installs to the system-wide folders listed above.
   On Linux, extract the archive
   matching your system and copy the complete **Vintage Vocoder FX.vst3** bundle
   into `~/.vst3/`. Reopen your DAW and rescan plug-ins if needed; the Linux host
   must include that folder in its VST3 scan paths.
2. Insert **Vintage Vocoder FX** on an audio track containing a voice or another
   sound. Start with **NORM** mode and the **MIX** towards wet.
3. Play the audio. It shapes the sound of the internal oscillators.
4. To play the carrier, select **MIDI** and route a MIDI track or keyboard to the
   effect. Keep the audio playing while you play notes. MIDI routing to audio
   effects depends on your DAW.

The incoming audio is the **modulator**: it supplies the changing sound shape.
The **carrier** is the sound being shaped. In NORM it comes from the fixed
internal oscillators; in MIDI you play those oscillators with notes.

## MIDI in Pro Tools

1. Insert **Vintage Vocoder FX** on the audio track carrying your vocal and set
   **MODE** to **MIDI**.
2. Create a separate **MIDI track**. Set its input to your keyboard (or **All**)
   and its MIDI output to that **Vintage Vocoder FX instance**, **channel 1**.
3. Enable **Options > MIDI Thru** and record-arm the MIDI track for live notes.
4. Play the vocal while playing notes or chords. For a live microphone, enable
   monitoring on the vocal track too. Recorded or drawn MIDI notes can also
   drive the effect during playback.

The vocal supplies the articulation; MIDI supplies the pitch. Both must reach
the plug-in together. MIDI mode does not use the sidechain.

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

Click the title or Sonicism badge to open **About**. It includes the original
story and credits, the Ruminant Audio Works
logo and company name, and a **www.ruminantaudioworks.com** link to the company
homepage for TayPE and Vintage Vocoder.

## Linux download verification

The [GitHub release](https://github.com/taylormadeapps/taype-releases/releases/tag/vintage-vocoder-v1.6.0#linux-vst3-downloads)
provides both Linux archives, SHA-256 checksums, detached OpenPGP signatures and
the Sonicism public key. Follow its verification instructions before installing.
The extracted archive includes file checksums and installation instructions.

Both Linux builds passed the standalone DSP/MIDI and processor checks, including
180 factory renders each and loading/rendering/recalling the real VST3 bundles.
The x86-64 checks ran under Docker emulation; third-party Linux DAW integration
and physical audio-device operation were not verified by those checks.

## Windows download verification

The [GitHub release](https://github.com/taylormadeapps/taype-releases/releases/tag/vintage-vocoder-v1.6.0#windows-download)
provides the Windows installer, its SHA-256 checksum, detached OpenPGP signature
and Sonicism public key. The installer is not Authenticode-signed, so Windows
may display an unknown-publisher warning. The installer requires administrator
approval and its uninstaller leaves user presets intact.
