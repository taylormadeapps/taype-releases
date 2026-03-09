# Le mixeur

Appuyez sur **M** pour passer de la timeline au mixeur.

Le mixeur affiche une tranche de console par piste, disposée horizontalement
de gauche à droite. Le bus master reste toujours tout à droite. Faites défiler
horizontalement avec la molette ou le trackpad pour parcourir vos canaux.

![Vue d'ensemble du mixeur](../../assets/img/docs/mixer-overview.png)

## Disposition de la tranche

Chaque tranche affiche, de haut en bas :

- **Nom de piste** : double-cliquez pour renommer
- **Sélecteur d'entrée** : l'entrée de l'interface audio utilisée pour enregistrer
- **Boutons de contrôle** : M, S, R, MON, A, B
- **Sélecteur de sortie** : où la piste envoie son audio
- **Section préampli** : MODE / AG / SAFE avec Trim toujours visible
- **Section filtres** : passe-haut et passe-bas
- **Section EQ** : égaliseur paramétrique 3 bandes
- **Section compresseur** : traitement dynamique
- **Slots d'insert** : 4 emplacements VST3
- **Pan** : position stéréo
- **Fader** : volume, avec lecture en dB
- **Mètre de crête** : mètre stéréo avec indicateur de clip

Chaque section de traitement peut être dépliée ou repliée via son en-tête.
Consultez la page [Channel Strip](channel-strip/README.md) pour le détail.

## Utiliser les contrôles

**Faders et potards** : cliquez et glissez verticalement. Chaque glisser est
une seule action annulable.

**Boutons** : un clic pour basculer.

Activer **B** transforme la piste en bus et bascule son entrée sur aucune
entrée de périphérique. Désactiver **B** déconnecte automatiquement les pistes
qui étaient routées vers ce bus.

**Slots d'insert** : cliquez pour charger un plugin, clic droit pour ouvrir le
menu contextuel avec bypass, remove, etc.

**Nom de piste** : double-cliquez pour l'éditer sur place, transport arrêté.

## Ordre des pistes

Les pistes apparaissent dans le même ordre que dans la timeline. Le master bus
est toujours la dernière tranche à droite.

La visibilité du mixeur suit les filtres de vue de la timeline :

- **Archive View (A)** : affiche les pistes courantes ou archivées
- **Focus (F)** : affiche les pistes qui ont des clips à la position de la tête
- **Spill (G)** : affiche le bus sélectionné et les pistes qui lui sont routées
