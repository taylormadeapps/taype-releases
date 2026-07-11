# Preamp

The Preamp section adds input character before the main tone-shaping stages.

The mode button cycles **Clean → Modern → ToTaype → NAM → MD510 → Clean**.

## Clean Gain

Clean mode is the default gain stage. It is useful for level matching without added colour.

## Modern

Modern adds driven console-style colour. Use Drive for weight and Output to level-match the result.

## MD510

MD510 is a more characterful mode with stronger attitude. Use it when a source needs bite, density, or a less polite edge.

## NAM Profile

NAM mode loads amp, pedal, or preamp captures from the profile browser. Local profiles and downloaded TONE3000 packages appear in the browser.

Changing the selected NAM profile keeps the current NAM Drive and Output settings, so you can compare models without losing your gain staging.

### Model Quality

Preferences > NAM provides three global preamp quality choices: **Efficient**, **Balanced**, and **Quality**. Balanced is the default.

Scalable models choose the tier that best matches that request. Because each package can define different internal breakpoints, the exact tier is model-specific. Models that do not provide scalable tiers always run at their native quality. The setting applies to track and bus NAM preamps; Taype Drive has its own independent model handling.

Stop playback, recording, and printing before changing quality. TayPE prepares a complete replacement NAM graph and only saves the new preference when every active model is ready. If loading fails, the previous quality remains active.

**Use Quality for Offline Print** is on by default. Offline master, loop, stem, and named-marker prints temporarily use **Quality** for both preamp and summing NAM, then restore your exact realtime choices. This does not affect live or hardware printing. If the Quality graph cannot be prepared or the realtime graph cannot be restored, the offline print fails instead of silently using another quality.

## Gain Staging

The preamp shows input/output metering so you can add tone without accidentally fooling yourself with loudness. Level-match before judging the colour.
