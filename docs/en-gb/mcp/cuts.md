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

Update a marker's position, name, colour, or Main Cut Cut assignment. This is allowed during playback but not while recording.

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
| `cut_region` | `disable`, `no_cut`, or `cut` |
| `assigned_cut_id` | Non-Main Cut ID for a Cut assignment |
| `range_end_seconds` | Explicit ranged-marker end in seconds |

### `set_marker_cut_assignment`

Set a Main Cut marker to `disable`, `no_cut`, or an assigned non-Main Cut. Assigning a Cut renames the marker to the Cut name, adding a number when needed to avoid duplicating an existing marker name. `range_end_seconds` can resize the explicit range; it clamps at the next ranged marker but may pass ordinary point markers.

### `populate_marker_from_cut`

Copy the assigned Cut into the marker range, overwriting clips in that range and changing the marker to No Cut.

### `delete_marker_time` / `insert_marker_time`

Delete or insert time over the marker range. Delete removes the start marker and shifts later material back; insert keeps the start marker fixed and shifts later material forward.

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
