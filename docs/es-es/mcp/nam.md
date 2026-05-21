# NAM Console Engine

Herramientas para perfiles NAM de previo, suming del bus master y la librería TONE3000.

### `set_preamp_nam`
### `clear_preamp_nam`
### `list_nam_profiles`
### `set_mix_summing`
### `get_mix_summing`
### `clear_mix_summing`
### `search_tone3000`
### `download_tone3000`

### Summing XTALK

`set_mix_summing` accepts `cross_talk` from `0.0` to `1.0`. Missing values default to `0.0`. The value is squared in DSP and blends stereo channels toward unity `(L + R) / 2`. With True Summing off, it blends the post-digital-sum stereo path before the master summing colour stage. With True Summing on, it blends each queued stereo feeder pair before Classic, ToTaype, NAM, or MD510 true-summing processing.
