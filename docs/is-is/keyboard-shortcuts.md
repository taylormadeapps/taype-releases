# Flýtilyklar

Flýtilyklar TayPE eru sniðabundnir. Veldu snið í **Stillingar > Flýtilyklar**;
sérsniðin snið eru JSON-skrár og má opna þau þaðan með **Breyta JSON** í
kerfisritlinum.

## Flýtilyklasnið

```
~/Documents/Taype/keybindings/
```

TayPE endurnýjar innbyggð snið úr app-búntinum við ræsingu: `Default.json`
(TayPE-uppsetningin) og `Industry Standard Bruh.json` (Pro Tools-lík
vöðvaminning fyrir sambærilegar TayPE-klippiaðgerðir). Innbyggð snið eru
skrifvarin og tilheyra búntinum; beinar breytingar á þeim skrám eru
yfirskrifaðar. Afritaðu eitt til að breyta því; **Endurhlaða** tekur breytingar
eftir að ytri ritillinn hefur vistað.

`Industry Standard Bruh` heldur lykkjusvigunum á `[` / `]` og setur að búa til
lykkju úr vali á `Cmd+Shift+L`, svo hreinu örvatakkarnir haldist
TayPE-leiðsögn.

Eldri `~/Documents/Taype/keybindings.json` skrár eru fluttar einu sinni inn í
sniðamöppuna og vistaðar sem `legacy-keybindings*.bak`.

## Sjálfgefnir flýtilyklar

### Transport

| Flýtilykill | Aðgerð |
|----------|--------|
| Space | Play / stop |
| P | Play / pause (lokað meðan upptaka er í gangi) |
| Z | Stop |
| Return | Hefja / stöðva upptöku |
| / | Bæta við marker við tape head |
| , | Fyrri marker |
| . | Næsti marker |
| Óbundið | Set 0 at Playhead for the selected Cut |

### Breytingar

| Flýtilykill | Aðgerð |
|----------|--------|
| S | Skipta völdu clipi við tape head |
| D | Tvöfalda valið clip |
| Cmd+D | Tvöfalda valið lag án clipa |
| Cmd+Option+D | Tvöfalda valið lag með clipum |
| Cmd+X | Klippa valið clip |
| Cmd+C | Afrita valið clip |
| Cmd+V | Líma clip við tape head |
| Backspace | Eyða völdu clipi |
| Delete | Eyða völdu non-master lagi |
| Cmd+Z | Undo |
| Cmd+Shift+Z | Redo |
| Escape | Afvelja clip og lag |

### Sýn

| Flýtilykill | Aðgerð |
|----------|--------|
| M | Skipta milli timeline og mixer |
| I | Sýna / fela channel strip panel |
| F | Focus |
| A | Archive view |
| G | Spill |
| E | E-Zoom |
| T | Skipta reglustiku milli tíma og takta |
| Cmd+K | High contrast þema |
| K | Opna sýndarlyklaborð |
