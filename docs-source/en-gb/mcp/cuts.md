# Cuts

Cuts are named timeline sections within a reel.

### `get_project`

Return the full project model for the current reel, including the selected cut, tracks, transport state, cuts, and clip arrangement data.

### `list_cuts`

List cuts in the current reel.

### `select_cut`

Select a cut by ID.

### `add_cut`

Create a new cut.

### `duplicate_cut`

Duplicate an existing cut.

### `rename_cut`

Rename a cut.

### `delete_cut`

Delete a cut when the edit is allowed.

## Markers

Markers are cut-local.

### `add_marker`

Add a marker at the current playhead or at a supplied position. This is allowed during playback and recording.

Optional parameters:

| Param | Description |
|---|---|
| `position` | Marker position in seconds |
| `name` | Marker name |
| `color` | Marker colour value |

### `set_marker`

Update a marker's position, name, or colour. This is allowed during playback but not while recording.

Required parameters:

| Param | Description |
|---|---|
| `id` | Marker ID |

Optional parameters:

| Param | Description |
|---|---|
| `position` | New marker position |
| `name` | New marker name |
| `color` | New marker colour value |

### `remove_marker`

Remove a marker from the selected cut. This is allowed during playback but not while recording.

### `goto_previous_marker` / `goto_next_marker`

Seek to the previous or next marker in the selected cut. Marker navigation is blocked while recording.

### `goto_marker`

Seek to a marker by its 1-based marker index.

Required parameters:

| Param | Description |
|---|---|
| `index` | Marker number |
