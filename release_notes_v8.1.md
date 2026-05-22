# Frostfall v8.1 — Sound Effects Update

This release adds dedicated sound effect assets for the two effects that were most noticeable during normal play: chopping trees and axe attacks.

## Added

- `sfx_chop.wav` — short woody chop/thud sound for tree chopping.
- `sfx_axe_hit.wav` — short blade impact/swing-hit sound for axe attacks.

## Changed

- `playSound('chop')` and `playSound('hit')` now use decoded Web Audio samples when available.
- The old oscillator-based sounds remain as a fallback if files are missing or still loading.
- Added a small pitch variation and minimum repeat interval so high attack-speed builds do not become too harsh.
- Service worker cache bumped to `frostfall-v8-1`.
- Save key bumped to `frostfall-save-v8-1-sfx`, with v8.0 and older saves still migrated.

## Notes

The existing music system from v8.0 is unchanged. The music mute button still controls background music; the new SFX are independent for now.
