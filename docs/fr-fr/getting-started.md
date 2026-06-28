# Prise en main

TayPE repose sur une boucle simple : enregistrer, écouter, valider. Pas de
menus sans fin, pas de fonctions enfouies. Voici comment le flux principal
s'articule.

## Les deux vues

TayPE a deux vues principales. Appuyez sur **M** pour passer de l'une à l'autre.

**Timeline** : c'est là que vous voyez les pistes, les clips et la tête de
bande avancer dans le temps. C'est l'espace pour enregistrer, arranger et éditer.

**Mixeur** : c'est là que vous façonnez le son. Faders, EQ, compression,
inserts plugin. Une tranche par piste, disposée de gauche à droite.

## Ouvrir et créer des reels

TayPE s'ouvre sur le **Reel Browser**. C'est l'endroit pour ouvrir un reel,
revenir sur un reel récent, ou en créer un nouveau.

Utilisez **Open From File...** dans le Reel Browser lorsque le reel ou le pack
à ouvrir se trouve hors de votre bibliothèque habituelle.

Les bundles temporaires ouverts depuis les dossiers système temporaires ne sont
pas conservés dans Recents, pour éviter de polluer votre liste normale avec des
tests ou des déballages.

Quand vous créez un reel, TayPE ouvre une boîte de dialogue de sauvegarde
native ancrée sur `[TAPE_HOME]/Reels` et propose un nom comme
`Untitled Reel.taype`. Vous pouvez changer le nom et l'emplacement à cette
même étape.

L'état de travail est sauvegardé automatiquement quand le transport est arrêté.
Il n'y a pas de commande Save séparée à gérer. Appuyez sur **Cmd+S** lorsque
vous voulez créer un checkpoint nommé : une décision nette à laquelle revenir.

Si vous voulez repartir proprement sans traîner l'ancien historique, utilisez
**Thin Reel...** dans le Reel Browser. TayPE demande où écrire le bundle aminci,
ajoute `Thinned` au nom courant par défaut, et laisse le reel source intact.
Si vous manquez d'espace, supprimez l'ancien reel dans Finder après avoir
vérifié la nouvelle version.

Dans l'historique du Reel Browser, la vue filtrée par défaut est pilotée par
les tags : état courant, checkpoints nommés, et tags d'origine de branche.
Si vous créez une branche à partir d'un autosave, TayPE tague ce commit source
pour qu'il reste visible comme nœud de branche. Les têtes d'autosave simples
restent masquées jusqu'à ce que vous activiez **Show Autosaves**. La vue
d'historique prend la forme d'un graphe vertical de type git : le plus ancien
en haut, le plus récent en bas, la branche courante comme axe principal, les
branches latérales décalées vers la droite. Les autosaves d'une même branche
restent sur une seule voie. Utilisez **Focus** dans l'en-tête de l'historique
pour revenir d'un coup à l'état courant après avoir exploré l'ancien historique.

## Enregistrement

1. Sélectionnez une piste en cliquant sur son en-tête dans la timeline.
2. Réglez l'entrée de la piste en cliquant sur le libellé d'entrée
   (par exemple `1-2` pour une paire stéréo de votre interface audio).
3. Armez la piste pour l'enregistrement avec le bouton **R**.
4. Appuyez sur **Return** pour lancer l'enregistrement. Appuyez à nouveau
   sur **Return** pour l'arrêter.

Pendant l'enregistrement, un clip fantôme rouge grandit sur la piste pour
indiquer où l'audio est capturé. Quand vous arrêtez, le clip final apparaît
avec sa forme d'onde.

## Lecture

- **P** : lecture / pause
- **Space** : lecture / arrêt
- **Z** : arrêt et retour au début

Cliquez n'importe où dans la timeline, ou sur la règle en haut, pour déplacer
la tête de bande. Maintenez puis faites glisser pour scrubber.

## Fréquence d'échantillonnage et resampling

Ouvrez **Preferences** (**Cmd+,**) puis l'onglet **Audio**.

- TayPE travaille en interne à **48 kHz**.
- L'onglet Audio garde les sélecteurs matériels en haut jusqu'à **Audio
  buffer size**. L'état du périphérique, le resampling, NAM et **Apply Audio
  Changes** se trouvent dessous.
- Utilisez **Apply Audio Changes** si vous voulez valider explicitement une
  modification des réglages audio.
- Si **Resampling** est **off**, le champ Sample rate est en lecture seule et
  affiche la fréquence actuelle de votre interface.
- Avec le resampling désactivé, TayPE essaie de basculer l'interface en
  **48 kHz** automatiquement.
- Si l'interface n'est pas à 48 kHz alors que Resampling est désactivé,
  TayPE le signale en rouge et vous demande d'activer le resampling.
- Si **Resampling** est **on**, vous pouvez changer la fréquence de l'interface
  dans les réglages audio pendant que TayPE continue de traiter en interne à 48 kHz.
- **NAM AMX Acceleration** active le chemin NAM accéléré à état partagé sur
  Apple Silicon. Désactivé, les modèles A2, WaveNet et LSTM tournent comme des
  modèles NAM indépendants par lane.
- **True Summing** se trouve désormais dans le panneau **NAM Summing** de la
  tranche master. Il reste disponible quel que soit l'état de
  **NAM AMX Acceleration** : avec **SUM** activé, les pistes qui alimentent le
  master passent par la lane de sommation choisie avant la somme stéréo finale.

## Édition

L'édition ne se fait que lorsque le transport est arrêté. C'est volontaire :
TayPE garde la lecture propre et séparée des changements structurels.

- **Cliquez sur un clip** pour le sélectionner
- **Faites glisser un clip** pour le déplacer
- **Cmd+glisser** un clip pour le copier ailleurs
- **S** : couper le clip sélectionné à la tête de bande
- **Cmd+D** : dupliquer un clip à la suite
- **Cmd+X / Cmd+C / Cmd+V** : couper, copier, coller

Faites glisser les bords d'un clip pour le rogner. L'opération est non
destructive : l'audio original n'est jamais modifié.

## Annuler et rétablir

- **Cmd+Z** : annuler
- **Cmd+Shift+Z** : rétablir

Chaque action est annulable : faders, éditions de clip, changements de piste,
tout.

## Licence

Utilisez le menu **TayPE** de l'application pour ouvrir la licence :

- **License Now** (si l'app n'est pas enregistrée)
- **License** (si elle l'est)

## À propos de TayPE

Utilisez **TayPE > About TayPE** pour voir la version exacte, le build, et les
versions/licences des dépendances livrées (JUCE, Signalsmith Stretch,
NeuralAmpModelerCore, et le runtime Git système utilisé pour l'historique des reels).

## Aide contextuelle

Utilisez **Help -> Popup Help** ou le bouton **?** tout à droite de la barre de
transport pour activer l'aide au survol sur le transport, la timeline, le
mixeur et la tranche de console. Quand cette aide est active, le bouton **?**
s'allume en vert. Après environ **0.7 seconde** d'immobilité du pointeur sur un
contrôle, TayPE explique ce qu'il fait.

## Manuel et recherche dans la documentation

Utilisez **Help -> Read the Fine Manual** pour ouvrir dans votre navigateur la
langue GitBook TayPE correspondante quand cette traduction existe. Si la
langue actuelle de l'application n'a pas encore de section de documentation
publiée, TayPE retombe sur l'anglais.

Sur macOS, le champ de recherche en haut du menu **Help** permet aussi de
chercher dans la documentation. En appuyant sur Return, ou en cliquant sur le
bouton de recherche, la recherche s'ouvre dans la langue de docs
correspondante dans le navigateur au lieu d'Apple Help. S'il n'existe pas de
section GitBook pour cette langue, la recherche retombe sur l'anglais.

**Help -> Search TayPE Docs...** reste disponible sur toutes les plateformes
comme solution explicite de secours.

## Langue de l'application

Utilisez **Help -> Language** pour choisir la langue que TayPE utilisera au
prochain lancement. TayPE écrit immédiatement le choix dans vos réglages,
affiche une confirmation dans la nouvelle langue, puis demande un redémarrage
pour que toute l'interface l'adopte proprement.

Le menu n'affiche que les fichiers de langue réellement présents et valides
dans votre dossier de langues TayPE, ce qui permet de tester des packs en
cours sans modifier le build de l'application.

Le bundle alpha actuel contient **English (UK)** ainsi que des packs brouillon
**Français**, **Deutsch**, **Español**, **Íslenska**, et **日本語**. Si vous
ajoutez ou retirez des CSV valides dans le dossier de langue TayPE, ce menu se
met à jour pour refléter ce qui est vraiment installé.

## Guild Picks

Utilisez **Tools -> Guild Picks** pour accéder à une petite sélection de plugins
que nous jugeons vraiment utiles pour faire des disques.

Guild Picks affiche cet avertissement :

**No affiliations. No kickbacks. Just plugins we genuinely rate for making records.**

La liste est regroupée en **Free**, **Honourware**, **Paid Sleepers**, et
**Paid Premium**. Chaque entrée ouvre la page officielle du fabricant.

## États de piste

TayPE propose trois façons de penser les pistes :

**Current** : l'état par défaut. Ce sont vos pistes actives, vivantes. Ce que
vous entendez pendant la lecture.

**Focus** : appuyez sur **F** pour filtrer la timeline et ne voir que les
pistes qui ont de l'audio à la position actuelle de la tête. Focus se
recalcule quand vous appuyez sur le bouton : il ne bouge pas pendant le travail.
Les pistes armées et la piste sélectionnée restent toujours visibles.

**Archive** : appuyez sur **A** pour basculer la vue archive. Les pistes
archivées sont totalement silencieuses : pas de lecture, pas de traitement,
pas de CPU. Archive n'est ni "mute" ni "hide" : c'est ranger une piste pour plus tard.

## Stems et bus

Les pistes peuvent devenir des bus via le bouton **B** de l'en-tête de piste.
Un bus somme l'audio de toutes les pistes qui y sont routées, ce qui permet de
créer des sous-mix.

Pour router une piste vers un bus, cliquez sur son libellé de sortie et
sélectionnez le bus dans la liste.

Appuyez sur **G** (Spill) pour n'afficher que le bus sélectionné et les pistes
qui y sont routées : pratique pour se concentrer sur un sous-mix.

## Et ensuite

- Explorer en détail la [timeline](timeline/README.md)
- Découvrir le [mixeur](mixer.md) et la [tranche de console](channel-strip/README.md)
- Voir tous les [raccourcis clavier](keyboard-shortcuts.md)
