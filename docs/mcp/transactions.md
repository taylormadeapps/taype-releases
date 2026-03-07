# Transactions

Tools for grouping multiple changes into a single undo step.

---

### `tx_begin`

Begin an explicit transaction. Groups multiple changes into a single
undo step. Requires transport stopped.

While active, the UI locks structural edits. Mute, solo, and transport
remain available to the user. If the connection drops, the transaction
is automatically aborted and rolled back. The user can also release the lock
from Edit > **Release MCP Lock...** or by right-clicking the red **MCP**
indicator beside the transport DSP meter.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `label` | string | yes | Undo label for this transaction |

**Returns:** `{ "tx_id": "uuid-...", "label": "Batch edit" }`

### `tx_commit`

Commit the transaction. Pushes the undo snapshot.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `tx_id` | string | yes | Transaction ID from `tx_begin` |

### `tx_abort`

Abort the transaction. Rolls back to pre-transaction state.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `tx_id` | string | yes | Transaction ID from `tx_begin` |
