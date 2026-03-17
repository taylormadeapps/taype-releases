# Clips

## Sélection

Cliquez sur un clip pour le sélectionner. Le clip se surligne et sa piste est
sélectionnée en même temps. **Escape** désélectionne tout.
Les clips adossés au MIDI affichent aussi un petit glyphe de croches liées
dans la pastille du nom pour être repérés d'un coup d'oeil.

Un double-clic normal ouvre **Clip Properties**. Vous pouvez y renommer ou
recolorer le clip, vérifier ses chemins source, révéler ces fichiers dans le
Finder avec les petites icônes d'ouverture et, pour les clips d'origine MIDI,
utiliser **Edit MIDI** pour ouvrir l'éditeur MIDI de TayPE ou **Re-render from
MIDI** pour lancer un nouveau rendu avec l'instrument actuel.

## Éditeur MIDI du clip

**Cmd+double-clic** sur un clip d'origine MIDI ouvre l'éditeur flottant du
clip MIDI. Un double-clic normal ouvre toujours **Clip Properties**.

Cliquez dans la grille pour ajouter une note. Faites glisser une note pour la
déplacer dans le temps et en hauteur. Un clic droit sur une note la supprime.
Le bouton **Piano/Drum** bascule entre la vue piano roll et la vue batterie.
Le bouton **Aigu en haut/Grave en haut** inverse si les notes aigues ou graves
se retrouvent en haut de la grille.
Faites glisser dans une zone vide de la grille pour tracer une sélection au
lasso rectangulaire, et **Cmd/Ctrl+A** sélectionne toutes les notes. Quand
plusieurs notes sont sélectionnées, faire glisser une note déplace tout le
groupe et tirer la poignée de redimensionnement à droite applique la même
variation de durée à toute la sélection.

Quand vous ajoutez ou déplacez des notes, TayPE les préécoute via
l'instrument actuel de la piste. **Commit** enregistre le fichier MIDI
compagnon mis à jour puis re-rend le clip. **Cancel** ferme la fenêtre sans
changement. L'editeur suit aussi la timeline du reel et reprend le meme mode
de regle, le meme zero de cut, la meme grille d'aimantation et la meme tete
de lecture principale que l'arrangeur.
rien changer. L'éditeur ne s'ouvre que lorsque le transport est arrêté.

## Déplacement

Faites glisser un clip horizontalement pour le déplacer dans le temps et
verticalement pour le changer de piste.

## Copie

Maintenez **Cmd** pendant le glisser pour créer une copie. L'original reste en
place et le doublon apparaît au point de dépôt.

## Découpe

Sélectionnez un clip, placez la tête de bande, puis appuyez sur **S**. Le clip
est coupé en deux sans détruire l'audio source.

## Trim

Survolez le bord gauche ou droit d'un clip puis faites glisser pour rogner.
C'est non destructif.

## Gain et fades

Faites glisser la ligne de gain du clip vers le haut ou le bas pour régler son
niveau. La forme d'onde se redessine en conséquence.

Les fade-in et fade-out redessinent aussi la forme d'onde pour suivre
l'enveloppe de niveau.

## Crossfades

Quand deux clips se chevauchent, la zone de recouvrement affiche un crossfade.
La longueur du recouvrement détermine la durée du crossfade.

## Presse-papiers

- **Cmd+X**
- **Cmd+C**
- **Cmd+V**
- **Cmd+D**
