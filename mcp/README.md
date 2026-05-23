# TayPE MCP Server

TayPE ships with a local Model Context Protocol server for controlling a
running TayPE desktop session from an MCP-capable client. It is designed for
local install and local execution. There is no hosted TayPE MCP endpoint.

The MCP client starts `taype-mcp` as a stdio subprocess. That bridge speaks
standard MCP JSON-RPC on stdin/stdout, then connects to the running TayPE app
on `localhost:18222`. The app opens that loopback listener only after MCP is
enabled in **Preferences > MCP**.

## What It Does

The server exposes TayPE's music-production workflow to MCP clients:

- transport control, state, performance telemetry, and realtime print mix
- reel open/save/history/checkpoint/pack/thin operations
- cuts, markers, tracks, clips, and recording passes
- VST3 insert management, sandbox restart, preset and MIDI output routing
- NAM console engine profile, summing, and TONE3000 profile tools
- view/session state, focus/archive/spill/e-zoom, theme, undo/redo
- short MCP transactions for batching related edits into one undo step
- feedback and licensing utilities, with explicit consent before reports leave the machine

The live `tools/list` response is the source of truth for the exact tools in
the installed build.

## Requirements

- macOS 12 Monterey or later
- TayPE installed from the signed GitHub release installer
- TayPE running locally
- **Preferences > MCP > Enable MCP** switched on in TayPE
- an MCP client that can launch stdio servers

## Local Install

1. Install TayPE from the
   [TayPE GitHub Releases page](https://github.com/taylormadeapps/taype-releases/releases).
2. Open TayPE.
3. Enable **Preferences > MCP > Enable MCP** and accept the confirmation prompt.
4. Configure your MCP client to launch the bundled bridge:

```json
{
  "mcpServers": {
    "taype": {
      "command": "/Applications/Taype.app/Contents/MacOS/taype-mcp",
      "args": []
    }
  }
}
```

For Codex TOML-style configuration:

```toml
[mcp_servers.taype]
command = "/Applications/Taype.app/Contents/MacOS/taype-mcp"
args = []
```

TayPE also provides in-app connector installers:

- **Tools > AI Integrations > Install Claude Connector**
- **Tools > AI Integrations > Install Codex Connector**

Those installers register the same local stdio bridge for the selected client.

## Privacy

Normal MCP operation stays on the local machine. The MCP client talks to the
`taype-mcp` subprocess over stdio, and the subprocess talks to TayPE over
loopback. No public HTTP endpoint is required or exposed.

The connected MCP client can see the tool results you ask it to request, so
review that client's privacy policy. The `submit_feedback` tool is the only
MCP path intended to send diagnostic information to the TayPE team; it must
show the user what will be sent and get explicit approval first.

## Registry Metadata

The official MCP Registry entry is install/run-local metadata. It should point
to these instructions and must not declare a public remote server.

From the TayPE source repository root:

```bash
mcp-publisher validate .mcp/server.json
mcp-publisher login github
mcp-publisher publish .mcp/server.json
```

The current clean distribution route is manual GitHub install via the signed
macOS installer. TayPE is not published as npm, PyPI, Docker, or MCPB today.
If a first-class registry package is needed later, MCPB is the best fit for a
desktop-bundled bridge; Docker is a poor fit because the bridge must connect
to the user's local TayPE app.
