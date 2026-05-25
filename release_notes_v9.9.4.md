# Frostfall v9.9.4 — Consecutive NG+ Scaling

## Summary
This update makes repeated New Game+ cycles meaningful instead of binary. NG+1 behaves the same as v9.9.3, but NG+2 and later now keep opening additional progression space.

## Changes
- Capped upgrades gain +2 extra levels per New Game+ run.
- Survivors and hunters gain +2 extra cap per New Game+ run.
- Regular tower and ice-tower caps grow by +5 per New Game+ run.
- Tower caps have an absolute maximum of 50.
- Base game remains unchanged at 25 towers and 25 ice towers.
- NG+1 remains unchanged at 30 towers and 30 ice towers.
- NG+2 and higher now scale progressively: 35, 40, 45, 50.
- Upgrade card `Lv.x/y` readouts use the scaled cap.
- Build button tower-cap readouts use the scaled cap.
- Loading/splash screen version label updated to v9.9.4.
- `TOWER_CAP_NG_PLUS` replaced by `TOWER_CAP_PER_NG_PLUS` and `TOWER_CAP_MAX_ABSOLUTE`.
- Service-worker cache bumped to `frostfall-v9-9-4`.

## Save / compatibility
- No save reset required.
- Existing saves remain compatible.
- Existing `newGamePlusRuns` values automatically determine the new scaling.
