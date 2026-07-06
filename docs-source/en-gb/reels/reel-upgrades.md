# Reel Upgrades

TayPE can upgrade older reels when the saved schema changes.

## Before Upgrade

TayPE creates a safety checkpoint before migrating a reel. If the migration fails, TayPE rolls back rather than leaving the reel half-converted.

## Opening Newer Reels

Older TayPE builds refuse reels that require a newer app version. The message tells you the minimum version needed instead of silently stripping data.

## After Upgrade

Once a reel has been upgraded, keep using a TayPE version that understands that reel. If you need to share with someone on an older version, pack a copy before upgrading.
