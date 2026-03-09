# Intégration MCP

TayPE expose son moteur via le Model Context Protocol (MCP), un standard ouvert
pour connecter assistants IA, outils et applications. Un client MCP peut se
connecter à une instance TayPE en cours d'exécution et la piloter par programme.

Autrement dit : vous pouvez parler à votre DAW.

## Comment ça marche

TayPE fournit un processus compagnon nommé `taype-mcp`. Il sert de pont entre
le client MCP et l'application.

## Connexion

### Claude Desktop

Dans TayPE, utilisez **Tools > Install Claude Connector**.

### Configuration manuelle

```json
{
  "mcpServers": {
    "taype": {
      "command": "/Applications/Taype.app/Contents/MacOS/taype-mcp"
    }
  }
}
```

## Concepts

### Stop to Edit

Les changements structurels ne peuvent se produire que transport arrêté.

### Transactions

Utilisez `tx_begin` et `tx_commit` pour regrouper plusieurs changements en une
seule étape d'annulation.

## Pages suivantes

- [Transport](transport.md)
- [Cuts](cuts.md)
- [Gestion des reels](reels.md)
- [Pistes](tracks.md)
- [Clips](clips.md)
- [Enregistrement](recording.md)
- [Plugins](plugins.md)
- [Affichage et session](view-and-session.md)
- [Moteur NAM Console](nam.md)
- [Transactions](transactions.md)
- [Utilitaires](utilities.md)
- [Personnalités](personalities.md)
