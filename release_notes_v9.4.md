# Frostfall v9.4 — Balanced Villager Repairs

This patch refines the automatic villager repair system introduced in v9.3.

## What changed

- Structures below 25% HP are treated as emergency repair targets.
- Structures between 25% and 50% HP are treated as maintenance repair targets.
- At most 2 villagers can be on emergency repairs at once.
- At most 1 villager can be on maintenance repairs at once.
- Villagers protect a 25 wood reserve and stop auto-repairing when wood reaches that reserve.
- Auto-repair is now burst-based: 4 ticks maximum, 18 HP per tick, 1 wood per tick.
- Auto-repair stops around 70% HP, leaving full repair as a deliberate player money sink.
- Save key bumped to `frostfall-save-v9-4-balanced-repairs`.
- Service worker cache bumped to `frostfall-v9-4`.

## Design intent

Villagers should help prevent sudden structure collapse, but they should not become full-time repair bots. The player repair button remains the clean full-repair option, paid with money.
