# Frostfall v9.8.0 — Rat Scavenger Ecosystem

## Summary

This update adds a second resource-thief creature: the Rat Scavenger. Unlike the crow, the rat cannot be killed by the player, towers, or hunters. Instead, it creates a small ecosystem moment: once wolves are unlocked, a meat-carrying rat can become prey, and nearby wolves will temporarily stop chasing the player or attacking the camp to hunt it down.

## Included changes

### New enemy / creature

- Added `rat.png` with transparent background.
- Added **Rat Scavenger** as a new special thief creature.
- Rat spawns only after Glacial Forest / wolves are unlocked.
- Max one active rat at a time.
- Rat targets the meat storage and steals 1 meat.
- Rat then attempts to escape with the stolen meat.

### Immunity and targeting

- Rat is immune to player attacks.
- Rat is ignored by towers.
- Rat is ignored by hunters.
- The player cannot directly recover meat from the rat by attacking it.

### Wolf ecosystem behavior

- Wolves and Brute Wolves can detect a rat carrying meat.
- If a meat-carrying rat is nearby, wolves prioritize hunting the rat over normal player/camp behavior.
- When a wolf catches the rat, the rat dies and drops the stolen meat back into the world.
- This creates a small predator/prey event inside the existing wave system.

### Bestiary / documentation

- Rat Scavenger added to the Bestiary.
- Documentation updated to describe crows and rats as resource threats rather than standard combat enemies.
- Changelog and release notes updated through v9.8.0.

## Balance intent

- The crow is an active player-response thief: once it has stolen meat, the player can shoot it down.
- The rat is an ecosystem thief: the player cannot kill it directly, but wolves can interrupt it.
- Because the rat steals only 1 meat and has a maximum active count of one, it is meant to add flavor and map life rather than become a punishing resource drain.

## Save / compatibility

- No save reset required.
- Existing saves continue to work.
- Service-worker cache uses the v9.8.0 lineage.
