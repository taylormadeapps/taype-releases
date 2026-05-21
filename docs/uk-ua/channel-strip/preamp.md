# Передсилювач

Передсилювач - це першої етап обробки сигналу на смузі.

## Режими

- **Чистий** - не змінює сигнал
- **ToTape** - симуляція затримки на магнітній стрічці
- **NAM** - використання завантаженого NAM профілю

## NAM профілі

Виберіть профіль передсилювача з локальних файлів або TONE3000 бібліотеки.

## XTALK

XTALK appears in stereo non-clean preamp modes. It blends the left and right channels into each other before the preamp colour stage, so it is different from the mixer Width control. The control uses a power-law taper: low values stay subtle, and at full value both channels receive a unity `(L + R) / 2` blend. It is hidden on mono strips.
