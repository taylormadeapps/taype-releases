# Enregistrement

## Ghost clip

Pendant l'enregistrement, un ghost clip rouge translucide grandit sur la piste
armée pour montrer où le son est capturé. Quand vous arrêtez, il est remplacé
par le clip définitif.

## Timing

Les clips enregistrés restent ancrés à la position de punch-in. La compensation
de latence est appliquée en interne.
Quand une prise enregistrée chevauche le début ou la fin d'un clip existant,
TayPE coupe l'ancien clip à la limite de la nouvelle prise avec seulement un
très court fondu anti-clic. Il ne crée pas de long crossfade automatique. Si la
prise tombe au milieu d'un clip existant, l'ancien clip est séparé autour de la
nouvelle prise.

Lecture / pause est bloqué pendant un enregistrement actif. Terminez la prise
avec **Record** ou **Stop**.

## Routage d'entrée et de sortie

**Input** : cliquez sur le libellé d'entrée du track header.

- Les pistes audio ne proposent que des entrées audio
- Les pistes instrument ne proposent que des entrées MIDI

**MON** : permet d'écouter l'entrée live à travers toute la chaîne du track.

**Output** : choisissez **Master** ou n'importe quel bus disponible.
