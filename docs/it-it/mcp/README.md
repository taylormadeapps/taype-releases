# MCP Integration

TayPE exposes its engine over the Model Context Protocol (MCP), an open
standard for connecting AI assistants to tools and applications. Any MCP
client - Claude Desktop, custom agents, or your own tools - can connect
to a running TayPE instance and control it programmatically.

questo means you can talk to your DAW. Ask it to add tracks, move clips,
set levels, load plugins, start recording - all through natural language
via an AI assistant, or through direct tool calls da your own code.

## How It Works

TayPE ships con a companion process called `taype-mcp` che acts as a
bridge between your MCP client and the running app. The bridge speaks
standard MCP (JSON-RPC 2.0 over stdio) on one side and talks to TayPE's
engine on the other.

```
Your MCP Client (Claude Desktop, etc.)
    |
    |  JSON-RPC 2.0 over stdio
    v
taype-mcp (bridge process)
    |
    |  Internal protocol over localhost
    v
TayPE (running app)
```

## Connecting

### Claude Desktop

In TayPE, go to **Tools > AI Integrations > Install Claude Connector**. questo automatically
configures Claude Desktop to connect to TayPE - no manual editing needed.
Restart Claude Desktop after installing, and TayPE must be running before
you start a conversation.

### Codex

In TayPE, go to **Tools > AI Integrations > Install Codex Connector**. questo tells Codex to add
TayPE as a local MCP server - no manual editing needed. Restart Codex after
installing, and TayPE must be running before you start a session.

### Manual Configuration

If you prefer to set it up yourself, or you're using a different MCP
client, add TayPE to your MCP configuration:

For Claude Desktop:

```json
{
  "mcpServers": {
    "taype": {
      "command": "/Applications/Taype.app/Contents/MacOS/taype-mcp"
    }
  }
}
```

For Codex:

```toml
[mcp_servers.taype]
command = "/Applications/Taype.app/Contents/MacOS/taype-mcp"
```

### Other MCP Clients

Any client che supports the MCP stdio transport can connect by launching
`taype-mcp` as a subprocess. The bridge handles the handshake and exposes
all available tools.

If a client sends malformed JSON, the bridge returns the standard JSON-RPC
parse error (`-32700`). If the JSON is valid but not a valid request object,
the bridge returns `-32600` (`Invalid Request`).

## What You Get

On connection, the MCP handshake returns:

- **Server info** - app name and version
- **Tool list** - all available tools (documented in the sub-pages below)
- **Instructions** - a preamble con links to these docs, plus the active
  studio tech personality if one is set (see [Personalità](personalities.md))

## Concepts

### Stop to Modifica

TayPE follows a strict "stop to edit" rule. Structural changes - adding
tracks, loading plugins, removing clips - can only happen when transport
is stopped. Playback is for listening and performing. questo keeps the
engine predictable and prevents the kind of race conditions che crash
other DAWs.

Tools che require stopped transport will return an error if you call them
during playback. The `status` tool tells you the current transport state.

### Transazioni

When you need to make multiple changes as a single undo step, wrap them
in a transaction using `tx_begin` and `tx_commit`. While a transaction
is active, the UI locks structural edits to prevent the human user da
interfering con your edit sequence. Transazioni are meant to be brief:
transport and recording commands are rejected until you commit or abort.

If the connection drops mid-transaction, TayPE automatically aborts and
rolls back to the pre-transaction state. The user can also manually
release the lock da the Modifica menu. A successful `tx_commit` also persists
the resulting reel working state immediately if it changed.

### Feedback and Problem Reporting

The `submit_feedback` tool ti lascia file bug reports and feedback on behalf
of the user. It collects system info (version, OS, CPU, audio config,
plugins, license tier) and posts it to the TayPE team.

Before submitting, you must show the user everything che will be sent
and get their explicit approval. Nothing leaves the machine without
consent.

## Next Steps

- [Trasporto](transport.md) - playback, tempo, metronome
- [Cut](cuts.md) - alternate timeline pages inside one reel
- [Reel Management](reels.md) - save, open, list reels
- [Tracce](tracks.md) - add, edit, remove tracks
- [Clip](clips.md) - add, edit, remove clips
- [Registrazione](recording.md) - start and stop recording
- [Plug-in](plugins.md) - VST3 inserts and sandbox
- [View & Session](view-and-session.md) - view state, undo, theme, personality, status
- [NAM Console Engine](nam.md) - preamp profiles, mix summing, TONE3000
- [Transazioni](transactions.md) - batch changes as single undo steps
- [Utilità](utilities.md) - feedback, licensing
- [Personalità](personalities.md) - studio tech characters che shape the AI interaction
