# Frostfall v8.3 — Audio Lifecycle Fix

This patch fixes audio continuing after Safari/iOS/PWA backgrounding or closing behavior.

## Changed

- Added `visibilitychange`, `pagehide`, `freeze`, and `pageshow` handlers.
- Pauses all music tracks when the page is hidden or the web app leaves the foreground.
- Stops active Web Audio one-shot sound effects when backgrounding.
- Suspends the Web Audio context while backgrounded.
- Resumes music only when returning if it was already playing before the app was hidden.
- Respects the master mute state; muted audio stays muted after returning.
- Bumped service-worker cache to `frostfall-v8-3`.

## Files touched

- `index.html`
- `sw.js`
- `changelog.md`
- `v8.3_changes.txt`
