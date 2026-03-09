# MCP-Integration

TayPE stellt seine Engine über das Model Context Protocol (MCP) bereit, einen
offenen Standard zur Verbindung von KI-Assistenten, Tools und Anwendungen.

## Verbindung

### Claude Desktop

In TayPE: **Tools > Install Claude Connector**.

### Manuelle Konfiguration

```json
{
  "mcpServers": {
    "taype": {
      "command": "/Applications/Taype.app/Contents/MacOS/taype-mcp"
    }
  }
}
```
