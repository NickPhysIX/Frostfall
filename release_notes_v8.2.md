# Frostfall v8.2 — Audio Polish

This release replaces the generated chop/hit SFX with the supplied MP3 axe samples and turns the audio toggle into a true master mute.

## New / changed

- Added `sfx_chop.mp3` from the supplied axe-on-wood sound.
- Added `sfx_axe_hit.mp3` from the supplied axe-on-flesh sound.
- The samples were shortened, faded, converted to mono, and compressed for repeated in-game use.
- `playSound('chop')` and `playSound('hit')` now load the MP3 samples via Web Audio.
- The **🔊 GELUID / 🔇 GELUID** button now mutes both music and sound effects.
- Synth fallback still exists for missing/unloaded SFX samples.
- Service worker cache bumped to `frostfall-v8-2`.
- Save key bumped to `frostfall-save-v8-2-audio-polish`, with v8.1 saves preserved through legacy migration.
