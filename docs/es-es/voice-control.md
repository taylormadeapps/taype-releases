# Control por voz

TayPE puede controlarse por completo con la voz cuando está conectado a una
sesión de Claude mediante MCP. Puedes decir órdenes naturales como «solo en la
pista uno», «baja un poco las guitarras» o «añade una pista nueva».

Sin sintaxis especial. Sin bucear por menús. Solo di lo que quieres hacer.

Esto funciona mediante un atajo de macOS que captura tu voz, la envía a Claude
y Claude habla con TayPE. Todo corre en local en tu Mac.

## Dos modos

**Studio mode**: para órdenes rápidas mientras trabajas en TayPE.

**Brain mode**: para mantener una conversación con Claude.

La tecla que pulses decide el modo.

## Qué necesitas

- macOS Ventura (13.0) o posterior
- Claude Desktop con una sesión MCP de TayPE activa
- Unos minutos para configurar dos atajos de macOS

## Configurar Studio mode

1. Abre **Shortcuts**
2. Crea un nuevo atajo llamado **Tape Talkback**
3. Añade **Dictate Text**
4. Añade **Run AppleScript** y pega el script de Studio mode
5. Guarda
6. Abre la información del atajo
7. Añade **⌘⌥↩** como teclado rápido

## Configurar Brain mode

1. Crea otro atajo llamado **Tape Brain**
2. Añade **Dictate Text**
3. Añade **Run AppleScript** y pega el script de Brain mode
4. Guarda
5. Elige una combinación como **⌃⌥Space**

## Permisos

Ambos atajos necesitan permisos de accesibilidad para enviar texto a Claude Desktop.

## Los scripts

### Script de Studio mode

```applescript
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

### Script de Brain mode

```applescript
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

## Probarlo

En **Studio mode**, pon TayPE al frente, pulsa el atajo y di «cuántas pistas
tengo». El foco debería volver a TayPE.

En **Brain mode**, pon Claude al frente y pregunta «qué enfoque de EQ usarías
para un room mic».

## Ejemplos de comandos

- «play»
- «stop»
- «rewind»
- «solo pista uno»
- «mutea la batería»
- «baja un poco la pista tres»
- «quita algo de agudos a las guitarras»
- «añade una pista nueva»
- «deshaz eso»
- «qué pistas tengo»
- «empieza a grabar en la pista dos en el compás cinco»
- «pon el tempo en 95»
