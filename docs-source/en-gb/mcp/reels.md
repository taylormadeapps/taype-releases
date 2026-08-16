# Reel Management

### `save_reel`

Create a saved checkpoint of the current reel.

TayPE refuses every form of `save_reel` while audio or automation recording is
active, while recording is stopping or finalising, and while a failed
finalisation remains retained for recovery or discard. Stop or resolve the take
first. Ordinary playback alone does not block an explicit save.

### `open_reel`

Open a reel from the reel browser or a known reel reference.

### `list_reels`

List known and recent reels.

### `get_reel_info`

Read metadata, status, and version information for the current reel.

### `close_reel`

Close the current reel safely.

### `duplicate_reel`

Duplicate a reel.

### `rename_reel`

Rename a reel.

## Checkpoints

### `create_checkpoint`

Create a named checkpoint.

### `list_checkpoints`

List checkpoints for the reel.

### `list_reel_history`

List detailed history entries.

### `revert_to_checkpoint`

Restore a checkpoint.

### `restore_reel_history`

Restore a history entry.

### `delete_checkpoint`

Delete a checkpoint.

## Pack and Thin

### `pack_reel` / `unpack_reel`

Pack a reel for transfer or unpack a packed reel.

### `preview_thin_reel` / `thin_reel`

Preview then remove unused media from a reel.

### `reveal_reel`

Show the reel in Finder.

## Compatibility and Upgrades

### `find_last_compatible_checkpoint`

Find the most recent checkpoint in the current reel that this TayPE build can open safely.

### `branch_from_last_compatible`

Branch the current reel from its last compatible checkpoint. Use this when a reel has moved ahead of the app version in front of you and you need a safe working branch.

Optional parameters:

| Param | Description |
|---|---|
| `branch_name` | Advisory branch name. TayPE derives the final branch name from the checkpoint label. |

### `migrate_reel`

Migrate a reel bundle to the current reel schema. TayPE creates a pre-upgrade checkpoint and upgrades the reel as one history operation.

Required parameters:

| Param | Description |
|---|---|
| `name` | Reel bundle name |
