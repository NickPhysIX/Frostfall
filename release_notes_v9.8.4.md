# Frostfall v9.8.4 — Brute Wolf Audio Differentiation

## Summary

This audio-polish update makes brute variants sound heavier without adding new audio assets. Brute Wolves reuse the wolf howl at a lower playback rate, and bear-brutes reuse the bear growl at a lower playback rate.

## Changes

- Brute Wolf wave cues now play the wolf howl at `playbackRate 0.78`.
- Bear-brute wave cues now play the bear growl at `playbackRate 0.82`.
- Normal wolf, bear, and Yeti waves remain unchanged.
- Alpha finale bosses remain at normal pitch; their announcement text is the differentiator.
- `playSampleSfx`, `playSound`, and `playEventSfx` now support an optional `pitchBase` parameter.
- Pitch jitter is multiplied by the base pitch, preserving small variation.
- Music ducking duration scales with lower playback rates so music does not return too early.
- No save impact and no new audio assets.
