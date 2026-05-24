# Frostfall v9.8.2 — Crow Caw Audibility

## Summary

This is an audio/UX patch for the Crow Thief. The crow-caw event introduced earlier could be easy to miss, especially when the first crow arrived before the sample buffer had finished loading or while the main music was masking the event.

## Changes

- Crow-caw SFX gain increased from `0.58` to `0.95`.
- SFX buffers now preload on `DOMContentLoaded`, while keeping playback behind the first user gesture.
- AudioContext is created early in a suspended state where supported, respecting browser autoplay policies.
- Crow-caw bursts temporarily duck the music, then restore it smoothly.
- Music ducking is skipped during music fade transitions, background/suspended state, and mute.
- No gameplay or save-format changes.
- Service-worker cache bumped to `frostfall-v9-8-2`.

## Compatibility

No save reset required. Existing v9.8.x saves continue to work.
