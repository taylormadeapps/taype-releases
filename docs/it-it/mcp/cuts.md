# Cut

Tools for managing alternate timeline pages inside a reel.

Each reel always has a **Main Cut**. Cut share the same track list, routing,
channel-strip state, and inserts. Clip, tempo, and time signature are
Cut-local.

---

### `list_cuts`

List all Cut and report which one is selected.

**Returns:**
```json
{
  "cuts": ["Main Cut", "Verse", "Chorus"],
  "selected": "Verse"
}
```

### `select_cut`

Switch to another Cut by name.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | yes | Cut name |

**Returns:** `{ "selected": "Verse" }`

Requires transport stopped.

### `add_cut`

Crea a new empty Cut. The new Cut inherits the current Cut tempo and time
signature, starts con no clips, is auto-named (`Cut N`), and becomes selected.

**Returns:** `{ "name": "Cut 2", "selected": "Cut 2" }`

### `duplicate_cut`

Duplicate the currently selected Cut. Clip are copied con fresh clip IDs,
Cut-local transport state is copied, and the duplicate becomes selected.

**Returns:** `{ "name": "Verse copy", "selected": "Verse copy" }`

### `rename_cut`

Rename a Cut by name.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | yes | Existing Cut name |
| `new_name` | string | yes | New Cut name |

**Returns:** `{ "name": "Verse" }`

`Main Cut` cannot be renamed, and the new name must be unique within the reel.
Requires transport stopped.

### `delete_cut`

Elimina a Cut by name.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | yes | Cut name |

**Returns:** `{ "deleted": "Verse", "selected": "Main Cut" }`

`Main Cut` cannot be deleted. After deletion, selection falls back to `Main Cut`.
Requires transport stopped and an active MCP transaction.
