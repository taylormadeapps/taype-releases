# Commande vocale

TayPE peut être piloté entièrement à la voix lorsqu'il est connecté à une
session Claude via MCP. Vous dites des commandes naturelles comme « solo piste
un », « baisse un peu les guitares », « ajoute une piste », et TayPE exécute.

Pas de syntaxe spéciale. Pas de détour par les menus. Dites simplement ce que
vous voulez faire.

Le système repose sur un raccourci macOS qui capture la voix, l'envoie à
Claude, puis Claude dialogue avec TayPE. Tout tourne localement sur votre Mac :
votre voix ne quitte pas la machine.

## Deux modes

La commande vocale propose deux modes, chacun avec son propre raccourci :

**Studio mode** : pour les ordres rapides pendant que vous travaillez dans
TayPE. Vous déclenchez le raccourci, vous parlez, puis le focus revient à
TayPE. Idéal pour « play », « stop », « solo piste deux », « undo ».

**Brain mode** : pour parler avec Claude. Vous utilisez un autre raccourci,
vous parlez, et le focus reste sur le chat Claude afin de lire la réponse.
Parfait pour « comment router ces stems ? » ou « quel compresseur pour un room mic ? ».

La touche choisie détermine le mode. Aucun réglage supplémentaire.

## Ce qu'il vous faut

- macOS Ventura (13.0) ou plus récent
- Claude Desktop avec une session MCP TayPE active
- Quelques minutes pour configurer deux raccourcis macOS

## Configurer Studio mode

1. Ouvrez l'app **Shortcuts**
2. Créez un nouveau raccourci nommé **Tape Talkback**
3. Ajoutez l'action **Dictate Text**
   - Réglez « Stop listening » sur **After Pause**
4. Ajoutez **Run AppleScript** et collez le script Studio ci-dessous
5. Sauvegardez
6. Cliquez sur le bouton d'information du raccourci
7. Cliquez sur **Add Keyboard Shortcut** et affectez **⌘⌥↩**

## Configurer Brain mode

1. Créez un second raccourci nommé **Tape Brain**
2. Ajoutez **Dictate Text**
   - Réglez « Stop listening » sur **After Pause**
3. Ajoutez **Run AppleScript** et collez le script Brain ci-dessous
4. Sauvegardez
5. Ouvrez les informations du raccourci
6. Choisissez un raccourci adapté, par exemple **⌃⌥Space**

## Permissions

Les deux raccourcis ont besoin des permissions d'accessibilité pour envoyer du
texte à Claude Desktop.

1. Ouvrez **System Settings → Privacy & Security → Accessibility**
2. Vérifiez que **Shortcuts** est présent et activé
3. Vérifiez que **System Events** est présent et activé

Si l'un manque, utilisez le bouton **+** pour l'ajouter.

## Les scripts

### Script Studio mode

Collez ceci dans l'action AppleScript de **Tape Talkback** :

```applescript
on run {input, parameters}
    set spokenText to (input as text)
    if spokenText is "" then return

    tell application "System Events"
        set frontApp to name of first application process whose frontmost is true
    end tell

    set fullCommand to "tape " & spokenText

    tell application "Claude" to activate
    delay 0.3

    tell application "System Events"
        tell process "Claude"
            keystroke fullCommand
            delay 0.1
            keystroke return
        end tell
    end tell

    if frontApp is "Taype" then
        delay 0.3
        tell application "Taype" to activate
    end if

    return input
end run
```

### Script Brain mode

Collez ceci dans l'action AppleScript de **Tape Brain** :

```applescript
on run {input, parameters}
    set spokenText to (input as text)
    if spokenText is "" then return

    set fullCommand to "tape " & spokenText

    tell application "Claude" to activate
    delay 0.3

    tell application "System Events"
        tell process "Claude"
            keystroke fullCommand
            delay 0.1
            keystroke return
        end tell
    end tell

    return input
end run
```

## Test

**Studio mode** : mettez TayPE au premier plan, déclenchez le raccourci Studio
et dites « combien de pistes j'ai ? ». Le focus doit revenir à TayPE pendant
que Claude traite la commande en arrière-plan.

**Brain mode** : mettez Claude au premier plan, déclenchez le raccourci Brain
et dites « quelle approche d'EQ pour un room mic ? ». Le focus reste sur Claude.

## Exemples de commandes

- « play »
- « stop »
- « rewind »
- « solo piste un »
- « mute les batteries »
- « baisse un peu la piste trois »
- « enlève un peu d'aigus aux guitares »
- « ajoute une piste »
- « annule ça »
- « quelles pistes j'ai ? »
- « lance l'enregistrement sur la piste deux à la mesure cinq »
- « mets le tempo à 95 »

Vous n'avez pas besoin de connaître le nom exact des paramètres : décrivez ce
que vous voulez, Claude fait le reste.

## Contrôleurs matériels

Vous pouvez mapper ces raccourcis sur des boutons physiques pour un vrai
fonctionnement mains libres :

- **Stream Deck**
- **Pédale au pied**
- **N'importe quel macro pad USB**

## Mains libres complets

Si vous ne pouvez pas utiliser de clavier, macOS fournit déjà des fonctions
d'accessibilité capables de déclencher ces raccourcis à la voix.

1. Activez **Voice Control** dans les réglages d'accessibilité
2. Créez une commande vocale personnalisée, par exemple « talkback »
3. Dire « talkback » lance alors la dictée, et vos mots suivants deviennent la commande

macOS prend aussi en charge le head tracking et le switch control, qui peuvent
eux aussi déclencher des raccourcis via des dispositifs adaptés.

## Conseils

- Pas besoin de dire « tape » : le raccourci l'ajoute
- Parlez clairement ; la ponctuation parfaite n'est pas nécessaire
- Si la dictée se trompe sur un mot, Claude comprend souvent l'intention
- Gardez un seul chat Claude ouvert avec TayPE connecté
- Dans un studio bruyant, rapprochez-vous du micro ou utilisez un casque micro
