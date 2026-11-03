# Vintage Vocoder 1.6.0

Sonicism Vintage Vocoder, restored for modern Macs, Windows and Linux. A free standalone download
from Ruminant Audio Works. Free for personal and commercial use, with no
TayPE purchase or licence required. The installer includes the standalone
Vintage Vocoder licence terms.

The About panel includes the Ruminant Audio Works logo, company name and a
clickable www.ruminantaudioworks.com link. The original faceplate is retained.

- Eight internal oscillators with sine, saw, square and triangle waveforms.
- MIDI carrier control with velocity, sustain and pitch bend.
- Up to 64 analysis bands, a resonant filter and dry/wet mix.
- Six operating modes, including an external sidechain carrier.
- Thirty factory presets and named user presets.

The universal macOS installer offers independently selectable AAX Native
(Pro Tools), AU Music Effect, VST2 and VST3 formats for Apple Silicon and Intel.
Requires macOS 12 or later and a compatible host; your Pro Tools version may
require a newer macOS. The AAX is PACE-signed and passed the developer's audio
and MIDI smoke test in official Pro Tools Intro 2026.4.1 on Apple Silicon.
Intel Pro Tools operation has not been separately tested.

AAX installs in `/Library/Application Support/Avid/Audio/Plug-Ins/`. No
additional Vintage Vocoder licence or iLok activation is required.

Quit your DAW before installing. Reopen it afterwards and rescan plug-ins if
needed. Insert **Vintage Vocoder FX** on an audio track and start in **NORM**
mode. For MIDI mode, route MIDI to the effect while the audio track plays.
In Pro Tools, create a MIDI track, set its output to the Vintage Vocoder FX
instance on channel 1, enable Options > MIDI Thru and record-arm the MIDI track
for live keyboard input. MIDI mode needs both modulator audio and notes.

Installation and mode guide:
[Vintage Vocoder](https://taype.ruminantaudioworks.com/vintage-vocoder/#setup).

## Installer

`Vintage-Vocoder-1.6.0-universal-20261103T130901Z.pkg` (34,997,688 bytes).

Developer ID signed, Apple notarized and stapled. SHA-256:

```text
ec7895497da761f1196ef2b4aeac66aad50ef24941bc14bbda7a8600709e83e4
```

## Windows VST3 download

[Windows x86-64 installer](https://github.com/taylormadeapps/taype-releases/releases/download/vintage-vocoder-v1.6.0/Vintage-Vocoder-1.6.0-windows-x86_64-beta-20261030T210749Z.exe)
requires 64-bit Windows and a compatible 64-bit VST3 host. Quit your DAW, run
the installer with administrator approval, then reopen and rescan plug-ins. It
installs the complete bundle in `C:\Program Files\Common Files\VST3\` and
provides an uninstaller that leaves user presets intact.

The installer is not Authenticode-signed; Windows may show an unknown-publisher
warning. It has a detached Sonicism OpenPGP signature and SHA-256 checksum.
After importing the public key and independently checking its fingerprint below,
verify the installer with:

```sh
gpg --verify Vintage-Vocoder-1.6.0-windows-x86_64-beta-20261030T210749Z.exe.asc Vintage-Vocoder-1.6.0-windows-x86_64-beta-20261030T210749Z.exe
```

Windows installer SHA-256:

```text
b4edfd836b1690040524884cbf2068e856c6f5a231f8c418c6dfbe92b2b6e525  Vintage-Vocoder-1.6.0-windows-x86_64-beta-20261030T210749Z.exe
```

The previous Windows and Linux builds were smoke-tested by the developer.
For this About-only refresh, the Windows build passed DSP/MIDI, default preset
save/recall and exact installer-payload checks. Windows retains its beta label:
processor/editor and native Windows GUI/DAW checks remain unverified because
the Wine GUI checks did not complete in the emulated build environment.

## Linux VST3 downloads

Choose the archive matching your Linux system and your 64-bit VST3 host:

- [Linux ARM64](https://github.com/taylormadeapps/taype-releases/releases/download/vintage-vocoder-v1.6.0/Vintage-Vocoder-1.6.0-linux-arm64.tar.gz)
- [Linux x86-64](https://github.com/taylormadeapps/taype-releases/releases/download/vintage-vocoder-v1.6.0/Vintage-Vocoder-1.6.0-linux-x86_64.tar.gz)

Built on Ubuntu 22.04.5 with a glibc 2.35 minimum and GCC 11 libstdc++ baseline.
The archives contain the complete VST3 bundle, free standalone EULA, installation
instructions and file checksums. Quit your DAW, extract the archive and copy
`Vintage Vocoder FX.vst3` into `~/.vst3/`, then reopen the DAW and rescan VST3s.
The host must include that folder in its plug-in scan paths.

Both builds passed DSP/MIDI, processor/state/routing/editor checks, 180 factory
audio renders with zero issues, and loading, rendering, recalling and opening
the exact VST3 bundles. Minimum-size editor and About renders were inspected.
The x86-64 build and tests ran under Docker emulation on Apple Silicon.
Third-party Linux DAW integration and physical audio-device operation have not
been verified by these checks.

The archives and `Vintage-Vocoder-1.6.0-linux-SHA256SUMS.txt` have detached
OpenPGP signatures (`.asc`). The supplied Sonicism public key fingerprint is:

```text
1C54 4D34 0DEC DAD2 7C4E 7720 016D C855 9671 770C
```

Import `Sonicism-016DC8559671770C-public-key.asc`, confirm that fingerprint,
then verify the checksums and your selected archive signature, for example:

```sh
gpg --import Sonicism-016DC8559671770C-public-key.asc
gpg --fingerprint 1C544D340DECDAD27C4E7720016DC8559671770C
gpg --verify Vintage-Vocoder-1.6.0-linux-SHA256SUMS.txt.asc Vintage-Vocoder-1.6.0-linux-SHA256SUMS.txt
gpg --verify Vintage-Vocoder-1.6.0-linux-arm64.tar.gz.asc Vintage-Vocoder-1.6.0-linux-arm64.tar.gz
```

Linux archive SHA-256 values:

```text
c8f23e90d61d2fa55136e0fd031d6d8afc24d40bf3ec973ec9bee1d6b4bdc33d  Vintage-Vocoder-1.6.0-linux-arm64.tar.gz
bd6027a33e9e1bd05ce19326e4de25d8c18ec05fb10196d7b9b5e537fb05f264  Vintage-Vocoder-1.6.0-linux-x86_64.tar.gz
```
