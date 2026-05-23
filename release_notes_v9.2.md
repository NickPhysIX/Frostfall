# Frostfall v9.2 — Quiet Row Caps

Kleine, gefocuste render-release die voortbouwt op v9.1's snow-cap rework.

## Wat verandert

- Op een doorlopende horizontale muurrij krijgen de **middencellen** geen losse snow caps meer op hun paaltjes — alleen de doorlopende sneeuwstrook op de rail blijft over.
- **Uiteinden** van een rij, **hoeken**, **T-stuk-cellen** en **solo/verticale paaltjes** krijgen wel gewoon hun cap.

## Waarom

In v9.1 stonden de continue rail-strook en de per-post caps gelijktijdig aan op horizontale rijen. Dat gaf een rijke maar enigszins drukke "dubbele sneeuw"-uitstraling: een platte strook met daarboven bobbeltjes. Voor middencellen — waar de strook al doorloopt — voegen die bobbeltjes weinig toe en zorgen ze voor visuele ruis. Eindpunten en verticale takken zijn anders: daar is geen strook, dus daar is de individuele cap juist nodig om de palissade-vorm te markeren.

## Implementatie

Eén regel logica in `drawWallPalisade`:

```js
const skipCaps=(nE&&nW);
if(!skipCaps) for(let i=0;i<posts.length;i++){ ... }
```

Geen save-impact, geen nieuwe assets.

## Versioning

- SAVE_KEY: `frostfall-save-v9-meat-stockpiles` (ongewijzigd).
- Service-worker cache: `frostfall-v9-2`.
