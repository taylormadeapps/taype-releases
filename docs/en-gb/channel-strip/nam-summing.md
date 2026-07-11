# NAM Summing

NAM Summing applies a Neural Amp Modeler profile to the master bus for console or tape-style glue.

## Controls

Choose a summing profile, enable it on the master bus, and level-match the result. Treat it like a mix-bus colour stage: subtle settings usually travel better.

## Model Quality

Preferences > NAM provides **Efficient**, **Balanced**, and **Quality** choices for summing models. Balanced is the default. Scalable packages resolve the choice against their own model tiers; non-scalable models remain at native quality.

Quality changes require stopped playback, recording, and printing. TayPE only saves the new setting after the replacement summing model and the rest of the active NAM graph are ready. A failed change restores the previous quality.

**Use Quality for Offline Print** is on by default. Offline master, loop, stem, and named-marker prints temporarily use **Quality** for both summing and preamp NAM, then restore your exact realtime choices. Live and hardware prints are unchanged, and a failed Quality or restoration graph swap fails the offline print rather than falling back.

## Profile Storage

Summing profiles use the same TayPE profile library as NAM preamp profiles. Keep your library organised by package and source so sessions reopen with the expected tone.
