# Cuty

Narzędzia for managing alternate timeline pages inside a reel.

Each reel always has a **Main Wytnij**. Cuty share the same track list, routing,
channel-strip state, and inserts. Clipy, tempo, and time signature are
Wytnij-local.

---

### `list_cuts`

List all Cuty and report which one is selected.

**Returns:**
```json
{
  "cuts": ["Main Wytnij", "Verse", "Chorus"],
  "selected": "Verse"
}
```

### `select_cut`

Switch to another Wytnij by name.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | yes | Wytnij name |

**Returns:** `{ "selected": "Verse" }`

Requires transport stopped.

### `add_cut`

Utwórz a new empty Wytnij. The new Wytnij inherits the current Wytnij tempo and time
signature, starts with no clips, is auto-named (`Wytnij N`), and becomes selected.

**Returns:** `{ "name": "Wytnij 2", "selected": "Wytnij 2" }`

### `duplicate_cut`

Duplikuj the currently selected Wytnij. Clipy are copied with fresh clip IDs,
Wytnij-local transport state is copied, and the duplicate becomes selected.

**Returns:** `{ "name": "Verse copy", "selected": "Verse copy" }`

### `rename_cut`

Zmień nazwę a Wytnij by name.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | yes | Existing Wytnij name |
| `new_name` | string | yes | Nowy Wytnij name |

**Returns:** `{ "name": "Verse" }`

`Main Wytnij` cannot be renamed, and the new name must be unique within the reel.
Requires transport stopped.

### `delete_cut`

Usuń a Wytnij by name.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | yes | Wytnij name |

**Returns:** `{ "deleted": "Verse", "selected": "Main Wytnij" }`

`Main Wytnij` cannot be deleted. After deletion, selection falls back to `Main Wytnij`.
Requires transport stopped and an active MCP transaction.
