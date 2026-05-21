# Slots d'insert

Quatre slots série pour plugins VST3. Cliquez sur un slot vide pour charger un
plugin. Faites un clic droit sur un slot occupé pour bypass, remove, ou ouvrir
l'éditeur du plugin.

Sur les pistes archivées, les inserts actifs ou bypassés apparaissent en rouge
hors ligne dans la vue Archive. TayPE garde l'état du plugin pour le
désarchivage, mais décharge le plugin hébergé et bloque l'édition tant que la
piste est archivée. Vous pouvez encore supprimer un slot ou désactiver un
insert actif ; charger, changer, ouvrir, bypasser, réactiver, déplacer, router,
modifier le wet/dry ou charger un preset demande de désarchiver d'abord.

Le bus master dispose des mêmes quatre slots.

## Plugin Manager

Ouvrez **Tools -> Plugin Manager** pour organiser le catalogue du scanner.

- **Enabled** détermine si un plugin validé apparaît dans le menu d'insert
- **Status** indique **Validated**, **Disabled**, **Failed** ou **Rescan**
- **Type** sépare instruments et effets
- **Manufacturer** aide au tri
- **Menu Path** permet de construire vos propres sous-menus

## Meters de comparaison

Le panneau d'insert montre deux petits meters : un pour le niveau en entrée de
chaîne et un pour le niveau en sortie.

## Sandboxing

Les plugins tournent dans un processus sandboxé. Si un plugin plante, TayPE
continue de tourner et le slot passe en erreur.

## Tail handling

Pendant la lecture, les effets temporels gardent leurs tails à travers les
silences. Appuyer sur **Stop** efface ces tails.

## Routage d'entrée

- Avec un instrument insert, le menu d'entrée montre uniquement des sources MIDI
- Sans instrument insert, il montre uniquement des sources audio

## Taype Drive XTALK

Taype Drive mirrors the channel-strip preamp XTALK control. In stereo non-clean modes, XTALK blends left and right into each other before the drive/preamp stage, using the same power-law taper and defaulting to `0.0`.
