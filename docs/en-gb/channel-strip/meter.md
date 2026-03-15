# Meter

Stereo post-fader meter with an RMS body, a fast peak tick, and a clip
indicator at the top. The scale can be shown as dBFS, K-12, K-14, or K-20.
If the clip indicator lights up, your signal is hitting 0 dBFS somewhere on
that track.

The main peak trace still updates in a held, readable way so short transients
show up instead of disappearing between redraws. Clicking the meter clears the
clip latch for every meter tap on that track, not just the main post-fader
display.
