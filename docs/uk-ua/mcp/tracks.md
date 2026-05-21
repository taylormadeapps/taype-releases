# Смуги (MCP)

Керування смугами TayPE через MCP.

## Команди

- `add_track` - додайте нову смугу
- `remove_track <id>` - видаліть смугу
- `set_track_name <id> <name>` - встановіть назву смуги
- `set_track_volume <id> <gain>` - встановіть гучність
- `set_track_pan <id> <pan>` - встановіть панораму

### Preamp XTALK

`set_track` accepts `preamp_cross_talk` from `0.0` to `1.0`; `preamp_crosstalk` is accepted as a legacy spelling alias. Missing values default to `0.0`. The value is squared in DSP and blends stereo channels toward unity `(L + R) / 2` before the preamp colour stage. Mono strips ignore it.
