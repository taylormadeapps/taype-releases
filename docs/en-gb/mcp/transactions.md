# Transactions

Transactions group several tool calls into one undoable change.

### `tx_begin`

Start a transaction. Give it a short human-readable label.

### `tx_commit`

Commit the transaction.

### `tx_abort`

Abort the transaction and discard its pending edits.

Use transactions for multi-step operations such as creating tracks, routing them, loading inserts, and setting initial levels as one user-facing action.
