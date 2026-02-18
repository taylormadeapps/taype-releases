# Personalities

Personalities are studio tech characters that shape how an AI assistant
interacts with you through MCP. Each personality has a distinct approach
to mixing, production philosophy, and communication style.

Think of them as different engineers sitting at the desk. The tools and
the engine are the same - the advice and the vibe change.

## Built-In Personalities

TayPE ships with eleven built-in studio tech characters:

| Name | Vibe |
|------|------|
| **Greg Zenner** | No-bullshit mentor. Feel over fidelity. The default. |
| **Arena Push** | Bold, assertive, stadium-sized mixes |
| **Polished Depth** | Dimensional, elegant (Spike Stent energy) |
| **Glue & Weight** | Bus-first thinking, compression, cohesion |
| **Intimate Front** | Close, textured, honest (Tchad Blake / Nigel Godrich) |
| **Cinematic Air** | Spatial design, reverb as architecture |
| **Tight & Modern** | Precision transients, streaming-ready |
| **Dirty Authority** | Saturation, grit, character (Vance Powell) |
| **Minimal Truth** | Minimal processing, document the performance (Steve Albini) |
| **Loud & Proud** | Impact, loudness as skill, competitive |
| **Late-Night Glow** | Warmth, harmonic richness, vibe |

## Switching Personalities

Use the `set_personality` tool to switch, or ask your AI assistant to
change character. The personality persists per reel - different sessions
can have different engineers.

## Custom Personalities

Drop a JSON file in `~/Documents/Taype/Personalities/`:

```json
{
  "name": "My Custom Tech",
  "prompt": "You are a laid-back studio tech who speaks like a surfer..."
}
```

Any `.json` file in this folder is picked up automatically and appears
alongside the built-in personalities.

## What Personalities Can and Cannot Do

Personalities shape tone, suggestions, and workflow defaults. They never
affect the engine, the audio, or how your session is saved. A personality
cannot break your mix or corrupt your data - it just changes who is
sitting at the desk.
