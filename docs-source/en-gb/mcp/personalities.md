# Personalities

Personalities change how an AI assistant talks and frames suggestions while using TayPE. They do not change the audio engine, routing, saving, or session safety.

## Built-In Personalities

TayPE ships a roster of studio-tech personalities with different working styles: cohesive bus-first mixing, bold live-room energy, polished depth, intimate texture, cinematic space, modern precision, gritty character, minimal documentation, loud competitive finishing, late-night warmth, and a direct mentor voice.

The names shown in the app are the source of truth. The public docs describe the working style rather than borrowing real-world producer names.

## Switching Personalities

Use the personality picker or MCP personality tools. The active personality persists as an app preference, not as hidden audio state inside the reel.

### `list_personalities`

List available studio-tech personalities.

### `set_personality`

Set the active personality by name.

Required parameters:

| Param | Description |
|---|---|
| `name` | Personality name |

### `get_personality`

Return the currently active personality.

## Custom Personalities

Advanced users can add custom personality JSON files to the TayPE personality folder. Keep prompts focused on communication style and workflow help, not engine rules.

## What They Can And Cannot Do

Personalities can influence tone, defaults, and suggestions. They cannot change the sound by themselves, bypass safety rules, corrupt routing, or rewrite how TayPE saves the reel.
