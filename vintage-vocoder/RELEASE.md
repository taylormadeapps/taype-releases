# Vintage Vocoder 1.6.0

Sonicism Vintage Vocoder, restored for modern Macs, Windows and Linux. A free standalone download
from Ruminant Audio Works. Free for personal and commercial use, with no
TayPE purchase or licence required. The installer includes the standalone
Vintage Vocoder licence terms.

- Eight internal oscillators with sine, saw, square and triangle waveforms.
- MIDI carrier control with velocity, sustain and pitch bend.
- Up to 64 analysis bands, a resonant filter and dry/wet mix.
- Six operating modes, including an external sidechain carrier.
- Thirty factory presets and named user presets.

The universal macOS installer includes AU Music Effect and VST3 formats for
Apple Silicon and Intel. Requires macOS 12 or later and a compatible plug-in
host. AAX is not included.

Quit your DAW before installing. Reopen it afterwards and rescan plug-ins if
needed. Insert **Vintage Vocoder FX** on an audio track and start in **NORM**
mode. For MIDI mode, route MIDI to the effect while the audio track plays.

Installation and mode guide:
[Vintage Vocoder](https://taype.ruminantaudioworks.com/vintage-vocoder/#setup).

## Installer

`Vintage-Vocoder-1.6.0-universal-20261030T061108Z.pkg` (17,482,849 bytes).

Developer ID signed, Apple notarized and stapled. SHA-256:

```text
25febd70a5d96cf80e9e5f0644b2cac10f8828a7c5259a1023bdbc37f4f9806b
```

## Windows VST3 download

[Windows x86-64 installer](https://github.com/taylormadeapps/taype-releases/releases/download/vintage-vocoder-v1.6.0/Vintage-Vocoder-1.6.0-windows-x86_64-beta-20261030T115439Z.exe)
requires 64-bit Windows and a compatible 64-bit VST3 host. Quit your DAW, run
the installer with administrator approval, then reopen and rescan plug-ins. It
installs the complete bundle in `C:\Program Files\Common Files\VST3\` and
provides an uninstaller that leaves user presets intact.

The installer is not Authenticode-signed; Windows may show an unknown-publisher
warning. It has a detached Sonicism OpenPGP signature and SHA-256 checksum.
After importing the public key and independently checking its fingerprint below,
verify the installer with:

```sh
gpg --verify Vintage-Vocoder-1.6.0-windows-x86_64-beta-20261030T115439Z.exe.asc Vintage-Vocoder-1.6.0-windows-x86_64-beta-20261030T115439Z.exe
```

Windows installer SHA-256:

```text
d588289150ca2745a241756d9b6ea33624e34c1c7553c7756b275c15cdc799b4  Vintage-Vocoder-1.6.0-windows-x86_64-beta-20261030T115439Z.exe
```

The Windows and Linux builds were smoke-tested by the developer. The Windows
automated DSP/MIDI and factory-preset audio checks passed under Wine; the full
Wine GUI checks did not complete in the emulated build environment.

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
acb848a30c2a54c6cd668b09abe61da96bef8565bb76f9e959c88f348494c5db  Vintage-Vocoder-1.6.0-linux-arm64.tar.gz
d62fdf0da7ae585d25b714d04415bb1fb1373cacac951a5c8b056e5320e0238b  Vintage-Vocoder-1.6.0-linux-x86_64.tar.gz
```
