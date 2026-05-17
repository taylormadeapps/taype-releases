# Nagrywanie

## Ghost Clip

While recording, a translucent red "ghost clip" grows on the armed track showing where audio is being captured. The waveform updates roughly once per second so you can see the signal coming in.

When you stop, the ghost clip is replaced by the real clip with its final waveform.

## Audio vs Automatyka Passes

The ruler header has an **A** automation button. With **A** off, **Nagrywaj**
captures audio or instrument takes as normal. With **A** on, **Nagrywaj**
captures automation for the parameter currently shown in the ruler header.
Right-click the ruler **A** button to choose **Głośność**, **Panorama**, or
**Szerokość**.

## Timing

Recorded clips stay anchored to the position where you punched in. Opóźnienie compensation is applied internally so back-to-back takes keep the timing you performed.

Gdy nagrane ujęcie zachodzi na początek lub koniec istniejącego klipu, TayPE
przycina starszy klip do granicy nowego ujęcia i dodaje tylko bardzo krótki
fade przeciw kliknięciu. Nie tworzy długiego automatycznego crossfade'u. Jeśli
nagrywasz w środku istniejącego klipu, starszy klip zostaje podzielony wokół
nowego ujęcia.

If you press **Zatrzymaj** while recording, the head parks at the end of the committed take so what you just captured is immediately visible.
Odtwórz / pauza jest zablokowane podczas aktywnego nagrywania; zakończ ujęcie
przez **Record** albo **Zatrzymaj**.

## Wejście and Wyjście Routing

**Wejście** — click the input label in the track header.

- Audio tracks (no instrument insert): audio inputs only (Domyślne, Brak, mono channels, stereo pairs).
- Instrument tracks (instrument insert present): MIDI inputs only (Wszystkie MIDI, Virtual Keyboard, hardware MIDI devices, Brak).
- Szyna tracks: the label reads **Sender** for orientation, but there is no input menu or device-input choice there.

When a track switches into instrument mode, input routes automatically change to **Wszystkie MIDI**. When it switches back, MIDI routes reset to default audio input.

**MON** — click the MON button to hear live input through the full track channel strip and inserts. When transport is stopped, MON passes live input only; timeline clips stay silent until you press play.

**Wyjście** — click the output label to choose where the track sends its audio: "Master" or any bus track you've created.

If you turn off bus mode on a track, any tracks routed to that bus are disconnected automatically. If your audio interface changes and a track references a missing channel, the input label appears greyed out — the setting is preserved until you plug it back in.
