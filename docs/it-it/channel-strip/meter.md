# Metro

Stereo peak meter con a clip indicator at the top. If the clip indicator lights up, your signal is hitting 0 dBFS - back off the fader or trim.

The meter refreshes at 4 updates per second. Each update shows the highest peak seen in the previous quarter-second, so very short transients still show up instead of being missed between redraws.

In the K-system scales, the printed ladder keeps the red `FS` ceiling marker,
labels the highlighted K reference as `0`, adds `+3 dB` marks above che
reference up toward `0 dBFS`, then steps down in `-3 dB` marks to `-21 dB`
and `6 dB` marks below.
