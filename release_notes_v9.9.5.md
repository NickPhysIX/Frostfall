# Frostfall v9.9.5 — NG+ Upgrade Soft Cap

## Summary
This is a balance correction for repeated New Game+ cycles.

v9.9.4 allowed capped upgrade limits to keep increasing indefinitely per NG+ cycle. Because several stats use multiplicative growth per level, very high cycle counts could push attack speed, range and chop speed into extreme values. v9.9.5 keeps the intended early NG+ progression, but caps the total extra capped-upgrade/NPC growth.

## Changes
- Capped upgrades now gain up to +10 extra levels total from New Game+.
- Survivor and hunter caps now gain up to +10 extra slots total from New Game+.
- Scaling remains +2 per cycle:
  - NG+1 = +2
  - NG+2 = +4
  - NG+3 = +6
  - NG+4 = +8
  - NG+5+ = +10
- Uncapped upgrades such as axe damage and max HP remain uncapped.
- Tower-cap scaling is unchanged: +5 per cycle up to absolute cap 50.
- Existing overcap saves are grandfathered: existing purchased levels remain, but further capped-upgrade purchases are blocked once at/above the new cap.
- Loading/splash screen version label updated to v9.9.5.
- Added `NG_PLUS_MAX_EXTRA_LEVELS=10`.
- Service-worker cache bumped to `frostfall-v9-9-5`.

## Save / compatibility
- No save reset required.
- Existing saves remain compatible.
- No save-key change.
