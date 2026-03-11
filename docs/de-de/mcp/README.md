# MCP-Integration

TayPE stellt seine Engine über das Model Context Protocol (MCP) bereit, einen
offenen Standard zur Verbindung von KI-Assistenten, Tools und Anwendungen.

## Verbindung

### Claude Desktop

In TayPE: **Tools > Install Claude Connector**.

### Codex

In TayPE: **Tools > Install Codex Connector**.

### Manuelle Konfiguration

Für Claude Desktop:

```json
{
  "mcpServers": {
    "taype": {
      "command": "/Applications/Taype.app/Contents/MacOS/taype-mcp"
    }
  }
}
```

Für Codex:

```toml
[mcp_servers.taype]
command = "/Applications/Taype.app/Contents/MacOS/taype-mcp"
```
