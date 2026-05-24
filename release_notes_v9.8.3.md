# Frostfall v9.8.3 — Animal Audio Cues

## Summary

This update adds one-shot animal and player-death audio cues to make waves and special resource events feel more alive without turning the game into constant noise.

## Changes

- Added `wolf_howl.mp3`, `bear_growl.mp3`, `yeti_growl.mp3`, `rat_squeak.mp3`, and `female_scream.mp3`.
- Wave starts now play one matching animal cue.
  - Wolves and Brute Wolves use the wolf howl.
  - Bears, Brutes, and boss bears use the bear growl.
  - Yetis and Brute Yetis use the Yeti growl.
- Normal waves preselect their first enemy type, so the wave-start sound matches the first enemy that actually appears.
- Yeti waves use the Yeti growl instead of the older synth game-over cue.
- Finale Alpha Bosses use their matching animal cues.
- Rats squeak 1–2 times when they steal meat and run away.
- Player death now triggers the female scream SFX.
- Music is briefly ducked during major animal/player cues so the sounds remain audible over the soundtrack.
- All new SFX respect the existing master mute and background audio pause behavior.

## Compatibility

No save reset required. Existing v9.8.x saves continue to work. Service-worker cache bumped to `frostfall-v9-8-3`.
