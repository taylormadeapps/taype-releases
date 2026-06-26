# NAM Summing (bus master)

La tranche master possède une section Summing. Chargez un profil NAM d'un vrai
amplificateur de sommation de console et la somme numérique traverse ce
caractère capturé.

## Contrôles

- **SUM**
- **TRUE**
- **Browse**
- **Drive**
- **Output gain**

## Stockage des profils

Les profils sont des fichiers `.nam` stockés dans
`[TayPE user root]/NAM/Summing/`.

## XTALK

XTALK appears on the stereo master summing strip when a non-clean summing flavour is active. With True Summing off, it blends the post-digital-sum stereo path before the master summing colour stage. With True Summing on, it blends each stereo feeder pair before Classic, ToTaype, NAM, or MD510 true-summing processing. It uses the same power-law taper as the track preamp and is hidden on mono strips.
