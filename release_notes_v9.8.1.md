# Frostfall v9.8.1 — Wolf Hunt-Rat Cap

## Summary

This balance patch refines the rat/wolf ecosystem introduced in v9.8.0. In v9.8.0, every wolf or Brute Wolf within range could peel off and chase the same meat-carrying rat. That was funny and emergent, but could make one tiny rat pull an entire wolf wave away from the player and camp.

In v9.8.1, only the two nearest wolves are allowed to hunt a given rat at the same time. Other wolves continue their normal attack behavior.

## Changes

- Added `WOLF_HUNT_RAT_CAP = 2`.
- Added `WOLF_HUNT_RAT_RANGE = 450`, replacing the previous magic number.
- Added a pre-pass in the beast update loop that assigns wolf hunters per rat.
- For each rat carrying meat, only the nearest eligible wolves/Brute Wolves within range are assigned.
- Other wolves ignore the rat and continue toward player/structures.
- Logic is written per rat, so future multi-rat support would still enforce the cap per rat.

## Gameplay impact

- Rats still create ecosystem moments.
- Wolves still sometimes chase stolen meat.
- A single rat should no longer trivialize or redirect an entire wolf-heavy wave.
- Player, tower, hunter and rat immunity behavior are unchanged.

## Compatibility

- No save reset required.
- `SAVE_KEY` unchanged.
- Service-worker cache bumped to `frostfall-v9-8-1`.
