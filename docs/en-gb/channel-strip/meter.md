# Meter

Stereo peak meter with a clip indicator at the top. If the clip indicator lights up, your signal is hitting 0 dBFS — back off the fader or trim.

The meter refreshes at 4 updates per second. Each update shows the highest peak seen in the previous quarter-second, so very short transients still show up instead of being missed between redraws.
