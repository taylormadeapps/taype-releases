# Sterowanie głosem

TayPE can be controlled entirely by voice when connected to a Claude
session via MCP. You speak natural commands - "solo track one", "turn
down the guitars", "add a new track" - and they're interpreted and
executed on TayPE automatically.

No special syntax. No menu diving. Just say what you want done.

This works through a macOS Shortcut that captures your speech, sends it
to Claude, and Claude talks to TayPE. Everything runs locally on your
Mac - your voice never leaves your machine.

## Two Modes

Voice control has two modes, each with its own keyboard shortcut:

**Studio mode** - for quick commands while you're working in TayPE.
You press the shortcut, speak, and focus snaps back to TayPE. You never
leave your session. Best for things like "play", "stop", "solo track
two", "undo that".

**Brain mode** - for when you want to have a conversation with Claude.
You press a different shortcut, speak, and focus stays on the Claude
chat so you can read the response. Best for questions like "how should
I route these stems?" or "what's a good compressor setting for a
room mic?"

The key you press decides the mode. No settings to change, no toggles.

## What You Need

- macOS Ventura (13.0) or later
- Claude Desktop with an active TayPE MCP session
- A few minutes to set up two macOS Skróty

## Setting Up Studio Mode

This shortcut sends voice commands to Claude and returns focus to TayPE.

1. Otwórz the **Skróty** app on your Mac
2. Utwórz a new shortcut and name it **Tape Talkback**
3. Dodaj a **Dictate Text** action
   - Set "Zatrzymaj listening" to **After Pauza**
4. Dodaj a **Run AppleScript** action and paste the studio mode script
   (see "The Scripts" below)
5. Zapisz the shortcut
6. Click the **info button** at the top right of the shortcut editor
7. Click **Dodaj Keyboard Shortcut** and press **⌘⌥↩**
   (Cmd + Option + Powrót)

## Setting Up Brain Mode

This shortcut sends voice commands to Claude and keeps focus there.

1. Utwórz another shortcut and name it **Tape Brain**
2. Dodaj a **Dictate Text** action
   - Set "Zatrzymaj listening" to **After Pauza**
3. Dodaj a **Run AppleScript** action and paste the brain mode script
   (see "The Scripts" below)
4. Zapisz the shortcut
5. Click the **info button** and click **Dodaj Keyboard Shortcut**
6. Choose a key combo that works for you (e.g. **⌃⌥Space**)

## Permissions

Both shortcuts need accessibility permissions to send text to Claude
Desktop.

1. Otwórz **System Ustawienia → Prywatność & Security → Accessibility**
2. Make sure **Skróty** is in the list and turned on
3. Make sure **System Events** is in the list and turned on

If either is missing, click the **+** button and add it.

## The Scripts

### Studio Mode Script

Wklej this into the Run AppleScript action of your **Tape Talkback**
shortcut:

```
on run {input, parameters}
    set spokenText to (input as text)
    if spokenText is "" then return

    tell application "System Events"
        set frontApp to name of first application process whose frontmost is true
    end tell

    set fullCommand to "tape " & spokenText

    tell application "Claude" to activate
    delay 0.3

    tell application "System Events"
        tell process "Claude"
            keystroke fullCommand
            delay 0.1
            keystroke return
        end tell
    end tell

    if frontApp is "Taype" then
        delay 0.3
        tell application "Taype" to activate
    end if

    return input
end run
```

### Brain Mode Script

Wklej this into the Run AppleScript action of your **Tape Brain**
shortcut:

```
on run {input, parameters}
    set spokenText to (input as text)
    if spokenText is "" then return

    set fullCommand to "tape " & spokenText

    tell application "Claude" to activate
    delay 0.3

    tell application "System Events"
        tell process "Claude"
            keystroke fullCommand
            delay 0.1
            keystroke return
        end tell
    end tell

    return input
end run
```

## Testing It

**Studio mode:** Click on TayPE so it's in front. Press your studio
shortcut. Speak: "how many tracks do I have". After a short pause,
focus should jump back to TayPE while Claude processes your command in
the background.

**Brain mode:** Click on Claude so it's in front. Press your brain
shortcut. Speak: "what's a good Korektor approach for a room mic". Fokus
stays on Claude and you can read the response.

## Przykład Commands

You can say anything in natural language. Here are some examples:

- "play" / "stop" / "rewind"
- "solo track one"
- "mute the drums"
- "turn down track three a bit"
- "take some top end off the guitars"
- "add a new track"
- "undo that"
- "what tracks do I have"
- "start recording on track two at bar five"
- "set the tempo to 95"

You don't need to know the exact parameter names or values - just
describe what you want and Claude figures out the rest.

## Hardware Controllers

You can map the keyboard shortcuts to physical buttons for a true
hands-free setup:

- **Stream Deck** - assign a button to each shortcut
- **Foot pedal** - keeps both hands on your instrument
- **Any USB macro pad** - if it can send a key combo, it works

## Full Hands-Free (No Keyboard)

If you can't use a keyboard at all, macOS has built-in accessibility
features that can trigger these shortcuts by voice alone:

1. Turn on **Sterowanie głosem** in System Ustawienia → Accessibility
2. Utwórz a custom voice command (e.g. say "talkback") that runs
   the Tape Talkback shortcut
3. Now saying "talkback" triggers dictation, and your next words
   become the command

macOS also supports head tracking and switch control for users with
motor limitations - both can trigger keyboard shortcuts through
adaptive input devices.

## Tips

- You don't need to say "tape" - the shortcut adds it automatically
- Speak clearly, but don't worry about perfect grammar or punctuation
- If dictation gets a word wrong, Claude is usually smart enough to
  figure out what you meant
- Keep one Claude chat session open with TayPE connected - if multiple
  chats are open, the command might land in the wrong one
- In a noisy studio, speak closer to your Mac's microphone or use a
  headset mic for better recognition
