# NAM профілі (MCP)

Керування NAM профілями через MCP.

## Команди

- `set_nam_preamp <track> <profile>` - завантажте NAM профіль передсилювача
- `set_nam_summing <profile>` - встановіть NAM профіль суммування
- `list_nam_profiles` - список доступних профілів

### Summing XTALK

`set_mix_summing` accepts `cross_talk` from `0.0` to `1.0`. Missing values default to `0.0`. The value is squared in DSP and blends stereo channels toward unity `(L + R) / 2`. With True Summing off, it blends the post-digital-sum stereo path before the master summing colour stage. With True Summing on, it blends each queued stereo feeder pair before Classic, ToTaype, NAM, or MD510 true-summing processing.
