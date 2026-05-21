# Moteur NAM Console

Outils pour gérer les profils de préampli NAM, la sommation master et la
bibliothèque TONE3000.

### `set_preamp_nam`

Charge un profil NAM sur le préampli d'une piste.

### `clear_preamp_nam`

Revient au mode clean.

### `list_nam_profiles`

Liste les profils disponibles.

### `set_mix_summing`

Charge un profil de sommation NAM sur le master bus.

### `get_mix_summing`

Retourne l'état actuel de la sommation.

### `clear_mix_summing`

Désactive la sommation NAM.

### `search_tone3000`

Recherche des profils NAM dans TONE3000.

### `download_tone3000`

Télécharge un profil depuis TONE3000.

### Summing XTALK

`set_mix_summing` accepts `cross_talk` from `0.0` to `1.0`. Missing values default to `0.0`. The value is squared in DSP and blends stereo channels toward unity `(L + R) / 2`. With True Summing off, it blends the post-digital-sum stereo path before the master summing colour stage. With True Summing on, it blends each queued stereo feeder pair before Classic, ToTaype, NAM, or MD510 true-summing processing.
