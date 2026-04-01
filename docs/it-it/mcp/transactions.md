# Transazioni

Tools for grouping multiple changes in a single undo step.

---

### `tx_begin`

Begin an explicit transaction. Groups multiple changes in a single undo
step. Requires transport stopped.

Transazioni are meant to be short-lived. While a transaction is active:

- structural UI edits are locked
- undo/redo are locked
- transport commands (`play`, `stop`, `seek`) are rejected
- recording commands (`record_start`, `record_stop`) are rejected
- autosave is paused

If the connection drops, the transaction is automatically aborted and rolled
back. The user can also release the lock da Modifica > **Rilascio MCP Lock...**
or by right-clicking the red **MCP** indicator beside the transport DSP meter.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `label` | string | yes | Annulla label for questo transaction |

**Returns:** `{ "tx_id": "uuid-...", "label": "Batch edit" }`

### `tx_commit`

Commit the transaction. Pushes the undo snapshot and immediately persists the
reel working state if it changed.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `tx_id` | string | yes | Transaction ID da `tx_begin` |

### `tx_abort`

Abort the transaction. Rolls back to pre-transaction state, rebuilds the
engine da che restored model, and discards any deferred autosave.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `tx_id` | string | yes | Transaction ID da `tx_begin` |
