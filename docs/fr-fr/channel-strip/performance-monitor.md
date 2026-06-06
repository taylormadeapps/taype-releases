# Moniteur de performances

Le Performance Monitor montre le détail DSP par piste avec des colonnes CPU
séparées pour **Preamp/Summing** et **Plugin**.

## Arbre de routage

Les lignes s'affichent comme un arbre sous le master bus, afin que les chaînes
de bus restent lisibles.

## Code couleur

- Vert : < 12 %
- Ambre : 12-25 %
- Rouge : > 25 %

## Résumé de session

Le résumé inclut :

- **Critical path (est)**
- **Scheduler**
- **CPU** - utilisation combinee de l'app TayPE et de `taype-sandbox` sur tous les cœurs logiques (0-100 %), en vert pour l'app et en bleu pour le sandbox
