# Reels

A reel is TayPE's session bundle: timeline, tracks, clips, routing, plugin state, checkpoints, and the media references needed to reopen the work.

## Autosave

TayPE saves the working reel continuously. **Save** creates a checkpoint you can return to later.

If a media file has been moved or deleted outside TayPE, saving still preserves the reel and its media reference. Restore the file to its original location to make the clip available again.

When you quit while playback is running or paused, TayPE stops transport before it creates the session-end checkpoint.
If TayPE reports that a reel save needs attention, it remains open with the current session available. Open **Tools > Session Log** for the exact cause; do not assume the reel has been lost.

## Checkpoints

Create checkpoints before risky edits, big sound-design moves, or cleanup passes. Use the history view to inspect and restore a checkpoint.

## Pack and Unpack

Packing gathers the reel for transfer or archive. Unpacking restores a packed reel for work on another machine.

## Thin Reel

Thin removes unused media from a reel package after previewing what would go. Use it for cleanup once you are sure old takes and scraps are no longer needed.

## Reel Browser

The reel browser lists recent and known reels, shows status, and gives access to open, duplicate, rename, reveal, and history operations.
