# NAM Console Engine

### `get_nam_amx` / `set_nam_amx`

Read or change NAM AMX acceleration. Changing AMX state requires stopped transport because TayPE rebuilds the current engine graph.

### `get_true_summing` / `set_true_summing`

Read or change the global True Summing preference for the master summing path. Changing this setting requires stopped transport.

### `set_preamp_nam`

Load a NAM profile into a track preamp. If you do not pass a new output gain, TayPE keeps the track's current NAM Drive and Output settings.

### `clear_preamp_nam`

Clear the selected NAM preamp profile.

### `list_nam_profiles`

List local profile packages and models.

### `set_mix_summing` / `get_mix_summing` / `clear_mix_summing`

Manage NAM summing on the master bus. `mix_band_mode` (`off`, `high`, or `low`)
and `mix_split_hz` control the Wet/Dry spectral split.

### `search_tone3000`

Search TONE3000 packages.

### `download_tone3000`

Download a TONE3000 package into the local profile library.

### `list_local_profiles`

List local profiles after package discovery and downloads.
