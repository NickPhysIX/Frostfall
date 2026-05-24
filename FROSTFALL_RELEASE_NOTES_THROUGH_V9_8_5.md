# Frostfall — Release Notes Through v9.8.5

## Current release: v9.8.5 — Sequential Mixed-Wave Audio Cues

Frostfall has evolved from a simple fake-ad-inspired browser prototype into a full HTML/Canvas/PWA wave-defense game with resource gathering, base building, towers, survivors, hunters, audio, endgame, resource exchange, and a small ecosystem of special resource thieves.

The latest release improves wave audio readability: brute variants sound heavier using pitch-shifted shared samples, and mixed waves can now play sequential, deduplicated animal cues as new enemy types appear.

---

## v9.8.5 — Sequential Mixed-Wave Audio Cues

- Waves can now play one cue for every unique enemy-cue result that appears, not only the first enemy.
- Cues are spaced through a queue system to avoid overlapping howls/growls.
- Wave-start opener remains accurate because the first enemy kind is still preselected.
- Deduplication uses `sfx + pitch`, so normal wolf and Brute Wolf cues can both be heard if both appear.
- Muted/background state clears pending wave cues silently, avoiding delayed cue bursts.
- Includes v9.8.4 brute audio differentiation.
- No save-impact; service-worker cache bumped to `frostfall-v9-8-5`.

---

## v9.8.4 — Brute Wolf Audio Differentiation

- Brute Wolf cues use the existing wolf howl at a deeper/slower `playbackRate 0.78`.
- Bear-brute cues use the existing bear growl at a deeper/slower `playbackRate 0.82`.
- Normal waves and Alpha finale bosses keep their original pitch.
- SFX playback now accepts an optional pitch base while remaining backward-compatible.
- No save-impact and no extra audio assets.

---

## v9.8.3 — Animal Audio Cues

- Added wolf, bear, Yeti, rat, and player-death SFX assets.
- Wave starts now play one matching animal cue.
- Normal waves preselect their first enemy type so the cue matches the first spawned enemy.
- Yeti waves and Alpha finale bosses use fitting growl/howl cues.
- Rats squeak 1–2 times while escaping with meat.
- Player death triggers the female scream SFX.
- Music is briefly ducked around important cues.
- No save-impact; service-worker cache bumped to `frostfall-v9-8-3`.

---

## v9.8.2 — Crow Caw Audibility

- Crow-caw SFX gain increased from 0.58 to 0.95.
- SFX buffers preload on `DOMContentLoaded`, while playback remains gated behind user interaction.
- Temporary music ducking added during crow-caw bursts.
- Ducking is skipped during fade transitions, mute, and background/suspended state.
- No save-impact; service-worker cache bumped to `frostfall-v9-8-2`.

---

## v9.8.1 — Wolf Hunt-Rat Cap

- Max 2 wolves / Brute Wolves can chase the same rat carrying meat.
- When more than 2 wolves are in range, the 2 closest wolves are selected.
- Remaining wolves keep their normal player/structure behavior.
- Hunting cap is implemented per rat and exposed as a tunable constant.
- No save-impact; service-worker cache bumped to `frostfall-v9-8-1`.

---

## v9.8.0 — Rat Scavenger Ecosystem

### New creature: Rat Scavenger

- Added `rat.png` with transparent background.
- Rat spawns only once wolves / Glacial Forest are unlocked.
- Max one rat can be active at a time.
- Rat steals 1 meat from the meat storage.
- Rat tries to escape after stealing.

### Ecosystem behavior

- Rat is immune to the player, towers, and hunters.
- Wolves and Brute Wolves can detect a rat carrying meat.
- Nearby wolves temporarily prioritize hunting the rat over attacking the player or camp.
- If a wolf catches the rat, the rat dies and drops the stolen meat.

### Documentation

- Rat added to the Bestiary.
- Changelog and release notes updated through v9.8.0.

---

## v9.7.x — Crow Thief line

### v9.7 — Crow Thief

- Added `crow.png` with transparent background.
- Crow can spawn when the player has enough meat.
- Crow flies to the meat storage, steals 1 meat, and tries to escape.
- If killed after stealing, the crow drops the stolen meat.
- Crow uses `meat.png` in its beak while carrying meat.

### v9.7.1 — Crow Bestiary Fix

- Crow added to the Bestiary.
- Bestiary text expanded to include special resource threats.

### v9.7.2 — Crow Heist Tuning

- Crow spawn timing made more readable.
- Only one crow can be active at a time.
- Crow is protected during approach and becomes vulnerable only after stealing.

### v9.7.3 — Crow Escape Balance

- Crow no longer vanishes immediately after stealing.
- Crow gets higher HP and a short escape grace period.
- Crow visibly flies away with meat.
- Added `crow_caw.mp3`, played 2–3 times during the theft event.

---

## v9.6 — Arrow Towers & Full Compass

- Regular towers now fire arrow projectiles instead of orange orb shots.
- Ice towers keep their blue slow projectiles.
- Enemy compass arrows are no longer capped to a tiny subset.
- Off-screen enemy arrows scale and fade by distance.
- Boss/alpha markers remain more prominent.

---

## v9.5 — Palisade Snow Polish

- Procedural palisade snow refined around corners and T-junctions.
- Horizontal beams and snow strips stop more cleanly at post centers.
- No sprite tile system added; wall snow remains procedural.

---

## v9.4 — Balanced Villager Repairs

- Villagers remain primarily wood gatherers.
- Auto-repair only diverts a limited number of villagers.
- Emergency repair: structures below 25% HP, max 2 villagers total.
- Maintenance repair: structures between 25–50% HP, max 1 villager total.
- Villagers preserve a 25 wood reserve.
- Auto-repair stops around 70% HP; full repair remains player-controlled and costs money.

---

## v9.3 — Reinforced Repairs

- Structures strengthened.
- Wall/tower HP base increased.
- Existing structures migrate to the new HP balance while preserving relative damage.
- Villagers gain basic auto-repair behavior using wood.

---

## v9.0–v9.2 — Meat stockpiles and wall snow

- Meat storage now uses four visual levels:
  - single meat piece
  - small stack
  - crate of meat
  - large multi-crate/meat stockpile
- Wall snow caps refined through procedural rendering tweaks.

---

## v8.7–v8.9 — Hunters, Compass, Palisades

- Added edge-of-screen compass indicators.
- Added Hunters as permanent combat-support NPCs.
- Hunters are capped separately from survivors.
- Hunters patrol, fire ranged projectiles, and use melee spinning-axe attacks.
- Walls render as connected palisades with procedural posts, beams, and snow.

---

## v8.4–v8.6 — Brute Beasts and Exchange

- Added Brute Wolf and Brute Yeti variants.
- Added Exchange tab to convert resources with loss.
- Added “Ruil alles” / “Exchange all” option.
- Exchange does not count as newly collected lifetime resources.

---

## v8.0–v8.3 — Music, SFX, and audio lifecycle

- Added background music.
- Added music/sound toggle.
- Added sample-based SFX for chopping and axe attacks.
- Music/SFX stop when browser tab or iOS/iPadOS web-app goes to the background.

---

## v7.x — Endgame and victory loop

- Added Alpha Boss Rush endgame.
- Added victory modal / spring ending screen.
- Added lifetime-style stats tracking for end screen use.
- Added PWA and app-icon support.

---

## Design status

Frostfall is still a compact single-page browser/PWA game, but the current loop now includes:

- active movement/combat;
- resource gathering;
- survivors/villagers;
- hunters;
- building and repairs;
- towers and ice towers;
- wave progression;
- zone unlocks;
- bestiary progression;
- special resource thieves;
- endgame boss rush;
- victory screen;
- music and SFX;
- mobile-first controls.

The current codebase is still intentionally prototype-friendly, but the feature set is now large enough that future work may benefit from modularization.

---

## Credits / Asset Notes

- Sound effects were sourced by Niels from Pixabay.
- Music loops were created by Niels with Gemini.
- Pixel-art assets were made with help from Gemini and ChatGPT.
- Color variations were adjusted by Niels in Apple Photos.
- Fuller attribution/asset note added in `CREDITS.md`.

