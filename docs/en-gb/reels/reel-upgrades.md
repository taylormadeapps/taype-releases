# Reel Upgrades

Reels you make in Taype carry a small version number that says which
format they use. As Taype grows, that format sometimes needs to change.
When you open an older reel in a newer Taype, the app handles the
transition for you — safely, and with a checkpoint to fall back to.

This page walks through what you'll see.

---

## Opening an Older Reel

When you open a reel that was made in an older version of Taype, you'll
see a prompt:

> This reel was created with an older version of Taype.  
> Upgrading lets you continue working in this version. A checkpoint will
> be saved first, so you can always return to the original.

You have three choices:

- **Upgrade Reel** — Taype creates a checkpoint of the original reel,
  upgrades it to the current format, and opens it. You can keep working
  as normal. The checkpoint shows up in your history with an "upgrade"
  badge.
- **Open Last Compatible Checkpoint** — Taype branches a new line of
  work from your most recent checkpoint that doesn't need an upgrade.
  Use this if you want to keep collaborating with someone on an older
  Taype version, or you're not ready to commit to the new format.
- **Cancel** — closes the reel without changing anything.

You can change your mind later. The pre-upgrade checkpoint stays in your
history forever.

---

## Opening a Reel That Needs a Newer Taype

If someone hands you a reel that was upgraded in a newer version of Taype
than you have installed, you'll see this:

> This reel was upgraded for a newer version of Taype.  
> You need **Taype X.Y.Z or later** to open the latest state.

The exact version is shown in the dialog so you know what to install.

You have two choices:

- **Open Last Compatible Checkpoint** — branches from the most recent
  checkpoint your version of Taype can read. You can keep working on
  this branch. When you eventually upgrade Taype, both lines of history
  reappear in the reel browser and you can choose which to continue.
- **Cancel** — closes the reel.

The newer-format work in the reel is **not** lost. Taype just won't
touch it until you have a version that understands it.

---

## In the Reel Browser

When you browse a reel's history, every checkpoint shows the format it
was made with. If a checkpoint was made in a newer version of Taype than
you have installed, it shows an **incompatible** badge:

> Created with a newer project format. Requires Taype X.Y.Z or later.

You can see those checkpoints in the list, but you can't open them. Your
last compatible checkpoint is highlighted as a safe place to branch
from.

---

## What Doesn't Get Upgraded

Reel upgrades only touch the project structure — your tracks, clips,
markers, mix settings, and arrangement. **Audio and MIDI files are never
modified by an upgrade.** A take you recorded a year ago is still the
same file on disk after an upgrade.

---

## If Something Goes Wrong

If an upgrade fails for any reason, Taype rolls back automatically and
shows:

> Taype could not upgrade this reel safely. The original state has been
> preserved.

The reel won't open in the new Taype version, but it's untouched. You
can open it in your previous version of Taype, or contact support so we
can take a look.

---

## The Short Version

- Upgrades happen at reel open, not mid-session.
- A checkpoint is always saved first.
- You can always branch from the last compatible point.
- Audio and MIDI files are never touched.
- Failed upgrades roll back automatically.

---

*See also:* [Reel Management](../mcp/reels.md) for the MCP commands that
control reels programmatically.
