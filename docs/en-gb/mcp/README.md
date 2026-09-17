# MCP Integration

TayPE exposes a Model Context Protocol surface so AI clients and local tools can control a running TayPE session.

## How It Works

The MCP bridge connects your client to the running app. Tool calls can query session state, control transport, create tracks, edit clips, manage inserts, work with reels, and change view state.

## Connecting

Use TayPE's connector installer where available for your MCP client, then restart the client and keep TayPE running while you use the tools.

The desktop connector installers live under **Tools > LLM Integrations**.

Manual client configuration is possible for MCP clients that support stdio bridge commands. Use the connector workflow first unless you know you need manual setup.

`initialize` reports the bridge binary: product version, beta number, protocol 2.0.0 (2026-09-11), catalogue fingerprint, executable path, and `taype_home` (the user's TayPE Home folder, with child folders for Reels, Prints, bounces, NAM, Grooves, IRs, and more). It is not Application Support and not the process working directory. `tools/list` is that bridge's compiled catalogue. It is not proof of the running app. The first app-backed tool call checks that the bridge and app match. A mismatch fails loudly with both identities and paths; restart TayPE and point the client at this build's `taype-mcp`. Personalities are optional mixing/production working styles; call `get_personality` after initialize if you want the active one.

## Concepts

### Stop To Edit

Some edits are safe during playback. Others require transport to stop. Recording is stricter than playback because TayPE protects the active take.

### Transactions

Use transactions when a tool or assistant needs several edits to land as one undoable operation.

### Feedback

MCP includes a feedback tool so an assistant can prepare a user-visible problem report or suggestion without hiding what will be sent.

## Tool Areas

- [Transport](transport.md)
- [Cuts](cuts.md)
- [Reel Management](reels.md)
- [Tracks](tracks.md)
- [Clips](clips.md)
- [Recording](recording.md)
- [Plugins](plugins.md)
- [View & Session](view-and-session.md)
- [NAM Console Engine](nam.md)
- [Transactions](transactions.md)
- [Utilities](utilities.md)
- [Personalities](personalities.md)
