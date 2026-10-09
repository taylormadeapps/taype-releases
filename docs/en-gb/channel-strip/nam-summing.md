# NAM Summing

NAM Summing applies a Neural Amp Modeler profile to the master bus for console or tape-style glue.

## Controls

Choose a summing profile, enable it on the master bus, and level-match the result. Treat it like a mix-bus colour stage: subtle settings usually travel better.

## Wet/Dry Mix Split

Right-click the Wet/Dry knob to open **MIX SPLIT**. **ABOVE** applies summing
colour only above the crossover; **BELOW** applies it only below. The other
band stays dry even at 100% Wet. **OFF** restores normal full-band blending,
and a small coloured dot shows when the split is active.

The split follows the **SUM** control: with SUM off it works on the stereo mix;
with SUM on it works on each source as it enters true summing.

## Model Quality

Preferences > NAM provides **Efficient**, **Balanced**, and **Quality** choices for summing models. Balanced is the default. Scalable packages resolve the choice against their own model tiers; non-scalable models remain at native quality.

Quality changes require stopped playback, recording, and printing. TayPE only saves the new setting after the replacement summing model and the rest of the active NAM graph are ready. A failed change restores the previous quality.

**Use Quality for Offline Print** is on by default. Offline master, loop, stem, and named-marker prints temporarily use **Quality** for both summing and preamp NAM, then restore your exact realtime choices. Live and hardware prints are unchanged. If a NAM model cannot be loaded at Quality, the offline print carries on at your realtime quality and its Print Report says so; a bounce stops instead. If your realtime choices cannot be restored afterwards, TayPE tells you why, and offline prints and bounces are refused until they are back.
If restoration fails after an Offline print's WAV files are finished, TayPE
keeps them, converts them to any copies you asked for and stops the remaining
passes; the Print Report names what could not be put back.

## Profile Storage

Summing profiles use the same TayPE profile library as NAM preamp profiles. Keep your library organised by package and source so sessions reopen with the expected tone.
