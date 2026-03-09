# Utilities

Tools for feedback reporting and license management.

---

## Feedback

### `submit_feedback`

Submit a feedback or crash report. Collects live system info (version,
OS, CPU architecture, audio interface, sample rate, buffer size, loaded
plugins, track count, transport state, license tier) and posts to the
TayPE team along with the user's description.

Before calling this tool, you must show the user everything that will
be sent and get their explicit confirmation. Nothing leaves the machine
without approval.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `description` | string | yes | User's description of the issue |
| `type` | string | no | "feedback" (default) or "crash" |

**Returns:** The collected payload (so you can confirm what was sent).

---

## License

### `get_license_status`

Get the current license state.

**Returns:**
```json
{
  "licensed": true,
  "founder": true,
  "licensee": "Tom Taylor",
  "tier": "founder",
  "sequence": 1,
  "valid_from": "2025-01-01",
  "valid_to": "2026-01-01",
  "era": 1
}
```

### `show_license_dialog`

Show the license dialog.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `type` | string | no | "nag", "licensed", or "auto" (default) |
