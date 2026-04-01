# Transactions

Narzędzia for grouping multiple changes into a single undo step.

---

### `tx_begin`

Begin an explicit transaction. Groups multiple changes into a single undo
step. Requires transport stopped.

Transactions are meant to be short-lived. While a transaction is active:

- structural UI edits are locked
- undo/redo are locked
- transport commands (`play`, `stop`, `seek`) are rejected
- recording commands (`record_start`, `record_stop`) are rejected
- autosave is paused

If the connection drops, the transaction is automatically aborted and rolled
back. The user can also release the lock from Edycja > **Zwolnienie MCP Lock...**
or by right-clicking the red **MCP** indicator beside the transport DSP meter.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `label` | string | yes | Cofnij label for this transaction |

**Returns:** `{ "tx_id": "uuid-...", "label": "Batch edit" }`

### `tx_commit`

Commit the transaction. Pushes the undo snapshot and immediately persists the
reel working state if it changed.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `tx_id` | string | yes | Transaction ID from `tx_begin` |

### `tx_abort`

Abort the transaction. Rolls back to pre-transaction state, rebuilds the
engine from that restored model, and discards any deferred autosave.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `tx_id` | string | yes | Transaction ID from `tx_begin` |
