# Préampli

Le préampli fonctionne dans trois modes, via le bouton **MODE** :

**Clean → Classic → NAM → Clean**

## Clean Gain

Le préampli est coupé. Le trim passe sans couleur ni saturation.

## Classic

Un étage de drive soft-clipping pour ajouter chaleur et saturation.

- **Drive**
- **Safe mode**
- **Auto-gain (AG)**

## NAM Profile

Chargez un profil Neural Amp Modeler d'un vrai préampli.

Le bouton **browse** ouvre le navigateur de profils, où vous pouvez chercher
dans TONE3000 ou choisir parmi les profils locaux.

### Contrôles NAM

- **Trim**
- **Output Gain**
- **Auto-gain (AG)**
- **SAFE** n'apparaît pas en mode NAM

## XTALK

XTALK appears in stereo non-clean preamp modes. It blends the left and right channels into each other before the preamp colour stage, so it is different from the mixer Width control. The control uses a power-law taper: low values stay subtle, and at full value both channels receive a unity `(L + R) / 2` blend. It is hidden on mono strips.
