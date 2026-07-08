# Control Surfaces

TayPE supports Mackie MCU-style control surfaces for hands-on transport, banking, selection, and focused strip control.

## Mackie MCU Profiles

Control-surface profiles describe how a device maps its buttons, faders, encoders, and transport controls to TayPE. TayPE ships built-in Mackie MCU profiles, including X-Touch One support.

## X-Touch One

The X-Touch One profile is built around a selected-track workflow. The hardware strip follows the current TayPE track, and the Select control is used to keep hardware focus and software focus in agreement.

Use the device's banking controls to move through tracks. TayPE keeps mixer and track-header selection in sync so the hardware does not drift away from the visible selected strip.

The hardware Master path is separate from the virtual track bank. When Master is selected on the unit, TayPE focuses the master strip and the motor fader controls TayPE's master fader instead of the currently selected virtual strip.

## Transport and Monitoring

Transport buttons control TayPE playback and recording. Monitor/select behaviour is designed so the current track can be checked quickly without having to reach back to the mouse for every pass.

## MIDI Monitor

If a control surface does not behave as expected, open the MIDI Monitor and move the hardware control. The monitor shows the incoming messages so you can confirm the device is connected, sending on the expected port, and using the right profile.
