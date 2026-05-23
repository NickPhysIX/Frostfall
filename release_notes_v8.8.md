# Frostfall v8.8 — Palisade

This release gives walls a proper fort look without adding any new sprite assets, and removes the "locked in/out by your own walls" frustration.

## Highlights

- Walls now look like a real wooden palisade: pointed posts, horizontal and vertical cross-beams, continuous snow cap.
- Connection logic is neighbor-aware: solo walls, rows, corners, T-junctions and full forts all draw correctly.
- Friendlies (player, survivors, hunters) walk through walls. Enemies do not.
- Towers and ice towers still block all movement.

## How it works

- Each wall checks its four orthogonal neighbors at render time.
- E/W neighbors share a horizontal beam and a continuous snow ridge.
- N/S neighbors share a wider vertical beam that overlaps into both cells.
- Posts are placed differently depending on neighbor pattern (solo center, end-of-row, middle-of-row).
- No sprite tiles. No autotiling bitmask. Pure canvas drawing scaled to GRID.

## Files added

- `v8.8_changes.txt`
- `release_notes_v8.8.md`

## Versioning

- Save key: `frostfall-save-v8-8-palisade` (v8.7 added to legacy migration).
- Service worker cache: `frostfall-v8-8`.
