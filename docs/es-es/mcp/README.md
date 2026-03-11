# Integración MCP

TayPE expone su motor mediante Model Context Protocol (MCP), un estándar
abierto para conectar asistentes de IA, herramientas y aplicaciones.

### Claude Desktop

En TayPE usa **Tools > Install Claude Connector**.

### Codex

En TayPE usa **Tools > Install Codex Connector**.

### Configuracion manual

Para Claude Desktop:

```json
{
  "mcpServers": {
    "taype": {
      "command": "/Applications/Taype.app/Contents/MacOS/taype-mcp"
    }
  }
}
```

Para Codex:

```toml
[mcp_servers.taype]
command = "/Applications/Taype.app/Contents/MacOS/taype-mcp"
```
