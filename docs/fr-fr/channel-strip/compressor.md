# Compresseur

Un processeur de dynamique pour contrôler le niveau et ajouter de l'impact.

| Paramètre | Défaut | Plage |
|-----------|---------|-------|
| Threshold | -12 dB | -60 à 0 dB |
| Ratio | 2:1 | 1:1 à 20:1 |
| Makeup Gain | 0 dB | 0 à 24 dB |
| Attack | 30 ms | 0.1 à 100 ms |
| Release | 100 ms | 10 à 2 000 ms |
| Knee | 6 dB | 0 à 12 dB |
| Sidechain low-cut | On | 80 Hz fixe |

## Disposition

La rangée du haut affiche **Threshold**, **Ratio**, **Makeup**. La seconde
rangée affiche **Knee**, **Attack**, **Release**.

Entre les potards du bas et le meter de réduction de gain se trouve une colonne
de boutons : en haut le low-cut sidechain fixe **80 Hz**, en bas le mode de release **OFF** / **LAZY** / **KEEN**, avec cycle au clic gauche et sélection directe au clic droit.

## Meter de réduction

L'affichage GR est une barre verticale. Vide = 0 dB de réduction ; pleine = 48 dB.

## Log Release

Activé par défaut. Plus le compresseur travaille, plus le release s'allonge
automatiquement pour un comportement plus musical.
