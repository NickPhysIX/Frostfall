# Frostfall v9.3 — Reinforced Repairs

This build makes camp defenses more forgiving and gives villagers a defensive support role.

## Changed

- Structures have more HP.
- Existing saves migrate existing structures to the new stronger HP values while preserving current damage percentage.
- Villagers now repair badly damaged structures.

## Villager repair behavior

- If a structure drops below 50% HP, villagers prioritize repair.
- If no structure is below 50% HP, villagers keep prioritizing resource gathering.
- Repairs cost wood: 1 wood per repair tick, restoring 22 HP.

## Technical

- `SAVE_KEY`: `frostfall-save-v9-3-reinforced-repairs`
- Service worker cache: `frostfall-v9-3`
