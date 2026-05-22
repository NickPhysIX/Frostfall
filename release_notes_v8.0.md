# Frostfall v8.0 — Music Update

This release adds full background music support to Frostfall.

## New

- `main_loop.mp3` plays during normal gameplay.
- `boss_loop.mp3` plays during boss-heavy moments, Yeti waves and the Winter's End finale.
- `victory_cue.mp3` plays on the victory screen.
- A new **MUSIC** button lets players toggle the soundtrack on or off.

## Technical notes

- Audio starts only after a user interaction, matching iOS/Safari autoplay requirements.
- Music preference is persisted in localStorage.
- Service worker cache bumped to `frostfall-v8-0`.
- MP3 files are included in the PWA pre-cache.
