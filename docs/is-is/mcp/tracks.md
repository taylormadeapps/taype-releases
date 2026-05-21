# Lög

Tól til að búa til, stilla og fjarlægja lög.

### `get_tracks`
### `add_track`
### `set_track`
### `remove_track`

### Preamp XTALK

`set_track` accepts `preamp_cross_talk` from `0.0` to `1.0`; `preamp_crosstalk` is accepted as a legacy spelling alias. Missing values default to `0.0`. The value is squared in DSP and blends stereo channels toward unity `(L + R) / 2` before the preamp colour stage. Mono strips ignore it.
