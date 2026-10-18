# Control Surfaces

TayPE supports Mackie MCU-style control surfaces and CM Labs MotorMix in Pro Tools/HUI mode for hands-on transport, banking, selection, and focused strip control.

## Mackie MCU Profiles

Control-surface profiles describe how a device maps its buttons, faders, encoders, and transport controls to TayPE. TayPE ships built-in Mackie MCU profiles, including X-Touch One support.

## CM Labs MotorMix

Choose **CM Labs MotorMix (Pro Tools/HUI Mode)** in Control Surface Preferences when the unit is left in its Pro Tools/HUI personality. MotorMix support is built in; it does not use the Mackie MCU JSON profile folder.

TayPE works with the MotorMix in its Pro Tools mode. If the display reads **Pro Tools mode - OFF -**, press **PLAY** and **ESCAPE** together on the unit. TayPE also warns you if it sees the MotorMix in its other mode.

MotorMix support covers the eight faders, select, mute, solo, record-arm, rotary pan and send levels, transport, return-to-zero, loop, channel navigation, bank navigation, motor-fader feedback, LEDs, and scribble-strip labels. The UNDO button follows TayPE's available history: it undoes while undo is available and redoes when only redo is available.

MotorMix buttons for plugin pages, automation modes, and other Pro Tools-specific workflows remain inactive where TayPE has no equivalent operation.

Touching a MotorMix fader does nothing on its own. TayPE responds when you move it.

Turn the selector to choose what the eight rotaries control: **P** for pan, or **SA** to **SE** for Send A to Send E. Send A to E are each track's first to fifth sends, in the order the mixer shows them. Each detent moves the send level a little, and a move stops at 0 dB when it crosses it. Sends six to eight can't be reached from the MotorMix, and removing a send moves the later sends up a letter. The lower row of the display shows each strip's pan position or chosen send level, and stays blank for a strip with no send there. Pushing the selector keeps the rotaries on pan; right-channel pan (**Pr**), FLIP, send mute and pre/post switching are not supported.

## Grouping Surfaces

By default, every configured surface is standalone. To make two or more MCU surfaces bank together, give them the same Group value in Control Surface Preferences and set their Slot order.

Grouped surfaces share one bank position. Slot 1 controls the first strip slice, Slot 2 controls the next slice, and so on. Bank controls move the whole group as one wider surface, while each profile keeps its own button behaviour.

## X-Touch One

The X-Touch One profile is built around a selected-track workflow. The hardware strip follows the current TayPE track, and the Select control is used to keep hardware focus and software focus in agreement.

Use the device's banking controls to move through tracks. TayPE keeps mixer and track-header selection in sync so the hardware does not drift away from the visible selected strip.

The hardware Master path is separate from the virtual track bank. When Master is selected on the unit, TayPE focuses the master strip and the motor fader controls TayPE's master fader instead of the currently selected virtual strip.

## IO Station Mothership

Choose **IO Station Mothership** for a PreSonus ioStation 24c used as a master
fader and bank navigator alongside your other controllers.

1. Keep the ioStation in the **MCU mode** already used with TayPE.
2. In TayPE's Control Surfaces preferences, choose **Mackie MCU** as the protocol
   and **IO Station Mothership** as the dialect. Select the ioStation's MIDI
   input and output ports.
3. Give the ioStation and both X-Touch Expanders the same **Group** value.
   Set the Expanders to **Slot 1** and **Slot 2**, and the ioStation to **Slot 3**.
   Keep the Expanders on their existing eight-strip profiles.

The ioStation fader is assigned to TayPE's master, with motor feedback from the
master. That strip stays on master in every Session Navigator mode. Physical
Prev/Next on the ioStation page both Expanders together in 16-strip banks.
On Logic or Live MCU, press **Master** or **Channel**, then Prev/Next. On
Cubase/Nuendo MCU, press **Channel**, then Prev/Next — Cubase **Master** mode
switches surround pan axes, which TayPE does not use. The ioStation does not
occupy any of those track strips. Dedicated Rewind/Fast Forward still move the
playhead. Give every grouped surface the same Group name; if the ioStation Group
field is blank after closing Preferences, banking from that unit will do
nothing.

Its strip stays assigned to master even when you select another track or move
the Expander bank. Pan adjusts master pan; Mute toggles master mute; Solo clears
all active solos; Select focuses master. The Solo light shows when any solo is
active. Record Arm is inactive because master is not a recording track.

The ioStation can occupy any group slot without taking a track away from the
Expanders. It also works as a standalone master controller. The profile awaits
physical hardware verification of fader control, motor feedback and grouped banking.

## Transport and Monitoring

Transport buttons control TayPE playback and recording. Monitor/select behaviour is designed so the current track can be checked quickly without having to reach back to the mouse for every pass.

## MIDI Monitor

If a control surface does not behave as expected, open the MIDI Monitor and move the hardware control. The monitor shows the incoming messages so you can confirm the device is connected, sending on the expected port, and using the right profile.
