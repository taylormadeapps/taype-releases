# Raccourcis clavier

Les raccourcis clavier de TayPE fonctionnent par profils. Choisissez un profil
dans **Préférences > Raccourcis clavier** ; les profils personnalisés sont des
fichiers JSON et s'ouvrent depuis cet onglet avec **Modifier JSON** dans
l'éditeur système.

## Profils de raccourcis

```
~/Documents/Taype/keybindings/
```

TayPE actualise les profils intégrés depuis le bundle de l'app au démarrage :
`Default.json` (la disposition TayPE) et `Industry Standard Bruh.json` (mémoire
de montage façon Pro Tools pour les actions TayPE équivalentes). Les profils
intégrés sont en lecture seule et appartiennent au bundle ; les modifications
directes de ces fichiers sont écrasées. Dupliquez-en un pour le modifier ;
**Recharger** applique les changements après l'enregistrement dans l'éditeur externe.

Les anciens fichiers `~/Documents/Taype/keybindings.json` sont importés une fois
dans le dossier des profils, puis archivés sous `legacy-keybindings*.bak`.

## Raccourcis par défaut

### Transport

| Raccourci | Action |
|----------|--------|
| Space | Lecture / arrêt |
| P | Lecture / pause (bloqué pendant l'enregistrement) |
| Z | Arrêt (retour au début ; en enregistrement, se gare à la fin de la prise) |
| Return | Démarrer / arrêter l'enregistrement |
| / | Ajouter un marqueur à la tête |
| , | Aller au marqueur précédent |
| . | Aller au marqueur suivant |
| Non assigné | Set 0 at Playhead for the selected Cut |

### Marqueurs

| Raccourci | Action |
|----------|--------|
| 1 à 9 | Aller aux marqueurs 1 à 9 |
| 0 | Aller au marqueur 10 |
| Cmd+1 à Cmd+9 | Aller aux marqueurs 11 à 19 |
| Cmd+0 | Aller au marqueur 20 |
| Cmd+Shift+1 à Cmd+9 | Aller aux marqueurs 21 à 29 |
| Cmd+Shift+0 | Aller au marqueur 30 |

### Édition

| Raccourci | Action |
|----------|--------|
| S | Couper le clip sélectionné à la tête |
| D | Dupliquer le clip sélectionné à la suite |
| Cmd+D | Dupliquer la piste sélectionnée sans clips |
| Cmd+Option+D | Dupliquer la piste sélectionnée avec clips |
| Cmd+X | Couper le clip sélectionné |
| Cmd+C | Copier le clip sélectionné |
| Cmd+V | Coller le clip à la position de la tête |
| Backspace | Supprimer le clip sélectionné |
| Delete | Supprimer la piste non-master sélectionnée |
| Cmd+Z | Annuler |
| Cmd+Shift+Z | Rétablir |
| Escape | Désélectionner clip et piste |

### Reel

| Raccourci | Action |
|----------|--------|
| Cmd+S | Créer un checkpoint |
| Cmd+R | Ouvrir le Reel Browser |

TayPE sauvegarde automatiquement l'état de travail tant que le transport est
arrêté, donc il n'existe pas de commande Save séparée pour l'utilisateur.

### Affichage

| Raccourci | Action |
|----------|--------|
| M | Basculer entre timeline et mixeur |
| I | Afficher / masquer le panneau Channel Strip |
| F | Focus : n'afficher que les pistes avec des clips à la tête |
| A | Basculer la vue archive |
| G | Spill : afficher le bus sélectionné et les pistes qui y sont routées |
| E | E-Zoom : zoomer sur le clip sélectionné |
| T | Basculer la règle entre temps et mesures |
| K | Basculer le thème à contraste élevé |
| Cmd+K | Ouvrir le clavier virtuel |

### Zoom

| Raccourci | Action |
|----------|--------|
| Cmd + molette | Zoom horizontal |
| Option + molette | Zoom vertical |
| = | Agrandir les pistes |
| - | Réduire les pistes |
| Shift+- | Réinitialiser la hauteur de piste |
| Shift+= | Passer la hauteur de piste au maximum |

### Souris

| Entrée | Contexte | Action |
|-------|---------|--------|
| Option+clic | Timeline | Déplacer la tête, même au-dessus d'un clip |
| Clic droit glissé gauche/droite | Timeline | Défiler dans le temps |
| Clic droit glissé haut/bas | Timeline | Zoom horizontal |
| Cmd+glisser | Clip | Copier le clip vers une nouvelle position |
| Glisser le bord du clip | Clip | Rogner le clip |

## Personnaliser les raccourcis

Dans **Préférences > Raccourcis clavier**, dupliquez un profil intégré ou
sélectionnez un profil personnalisé, puis cliquez sur **Modifier JSON**.
Enregistrez dans l'éditeur et cliquez sur **Recharger**. Le format est simple :

```json
{
  "play_pause": "space",
  "pause": "p",
  "stop": "z",
  "record": "return",
  "add_marker_here": "/",
  "previous_marker": ",",
  "next_marker": ".",
  "go_to_marker_1": "1",
  "split_clip": "s",
  "duplicate_clip": "d",
  "duplicate_track_without_content": "cmd+d",
  "duplicate_track": "cmd+alt+d",
  "toggle_focus": "f"
}
```

Chaque entrée associe un nom d'action à une combinaison de touches.

Pour binder **Set 0 at Playhead**, ajoutez une entrée `set_zero_here`. Par
exemple, `"set_zero_here": "0"` l'assignerait à la touche `0`.

### Format des combinaisons de touches

Combinez les modificateurs avec `+` :

- **cmd** : touche Command
- **ctrl** : touche Control
- **shift** : touche Shift
- **alt** ou **option** : touche Alt / Option

Exemples : `"cmd+s"`, `"ctrl+shift+z"`, `"alt+3"`

### Noms de touches disponibles

- Lettres : `a` à `z`
- Chiffres : `0` à `9`
- Spéciales : `space`, `return`, `tab`, `escape`, `delete`, `backspace`
- Flèches : `up`, `down`, `left`, `right`
- Navigation : `home`, `end`, `pageup`, `pagedown`
- Touches de fonction : `f1` à `f12`

### Raccourcis de plateforme

Ces raccourcis standard sont toujours actifs et ne peuvent pas être réassignés :

| Raccourci | Action |
|----------|--------|
| Cmd+Z | Annuler |
| Cmd+Shift+Z | Rétablir |
| Cmd+X | Couper |
| Cmd+C | Copier |
| Cmd+V | Coller |
| Backspace | Supprimer le clip sélectionné |
| Delete | Supprimer la piste non-master sélectionnée |
| Cmd+, | Ouvrir Preferences |

## Mode clavier virtuel

Quand le clavier virtuel est ouvert (`Cmd+K`), TayPE route toutes les frappes
vers la fenêtre du clavier et suspend les raccourcis principaux de la timeline
et du transport. Appuyez sur `Escape` pour refermer la fenêtre et revenir au
contrôle normal.

Sur macOS, TayPE affiche aussi ces raccourcis à côté des éléments de menu
correspondants dans la barre de menus native.
