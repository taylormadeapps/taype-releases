# Personalità

Personalità are studio tech characters che shape how an AI assistant
interacts con you through MCP. Each personality has a distinct approach
to mixing, production philosophy, and communication style.

Think of them as different engineers sitting at the desk. The tools and
the engine are the same - the advice and the vibe change.

## Built-In Personalità

TayPE ships con eleven built-in studio tech characters:

| Name | Vibe |
|------|------|
| **Glue & Weight** | Bus-first thinking, compression, cohesion. The default. |
| **Arena Push** | Bold, assertive, stadium-sized mixes |
| **Polished Depth** | Dimensional, elegant, radio-ready polish |
| **Intimate Front** | Chiudi, textured, honest - lo-fi meets intention |
| **Cinematic Air** | Spatial design, reverb as architecture |
| **Tight & Modern** | Precision transients, streaming-ready |
| **Dirty Authority** | Saturazione, grit, character - tape and tubes |
| **Minimal Truth** | Minimal processing, document the performance as-is |
| **Loud & Proud** | Impact, loudness as skill, competitive |
| **Late-Night Glow** | Warmth, harmonic richness, vibe |
| **Greg Zenner** | No-bs mentor. Feel over fidelity. |

## Switching Personalità

Use the `set_personality` tool to switch, or ask your AI assistant to
change character. The personality persists per reel - different sessions
can avere different engineers.

## Custom Personalità

Rilascia a JSON file in `[TAPE_HOME]/Personalità/`:

```json
{
  "name": "My Custom Tech",
  "prompt": "You are a laid-back studio tech who speaks like a surfer..."
}
```

Any `.json` file in questo folder is picked up automatically and appears
after the built-in personalities in the picker.

## What Personalità Can and Cannot Do

Personalità shape tone, suggestions, and workflow defaults. They never
affect the engine, the audio, or how your session is saved. A personality
cannot break your mix or corrupt your data - it just changes who is
sitting at the desk.
