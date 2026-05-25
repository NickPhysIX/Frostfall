# Frostfall changelog

## v9.9.5 — NG+ Upgrade Soft Cap

*Voorgesteld door Claude, geïmplementeerd door ChatGPT op verzoek van Niels.*

- NG+-extra upgrade-levels en NPC-caps zijn nu gecapt op **+10 totaal**.
- Schaling per cycle blijft **+2**: NG+1 = +2, NG+5+ = +10.
- Voorkomt exponentieel “god+ tier”-gedrag bij hoge NG+-cycle-aantallen, doordat `statValue()` multiplicatieve groei per level gebruikt.
- Uncapped upgrades zoals Bijl Kracht en Gezondheid blijven uncapped.
- Tower-cap-schaling blijft onaangetast: +5 per cycle tot absolute cap 50.
- Bestaande overcap-saves worden niet teruggedraaid; bestaande levels blijven staan, maar capped upgrades kunnen niet verder worden gekocht zodra ze boven/aan de nieuwe cap zitten.
- Splash screen / loading screen bijgewerkt naar **v9.9.5 · NG+ Upgrade Soft Cap**.
- Nieuwe constante `NG_PLUS_MAX_EXTRA_LEVELS=10`.
- Geen save-impact. Service-worker cache gebumpt naar `frostfall-v9-9-5`.

## v9.9.4 — Consecutive NG+ Scaling

*Voorgesteld door Claude, geïmplementeerd door ChatGPT op verzoek van Niels.*

- Upgrade-extra levels schalen nu lineair met het aantal NG+-runs: **+2 per cycle**, ongelimiteerd.
- NPC-cap extra voor survivors/hunters schaalt nu lineair met het aantal NG+-runs: **+2 per cycle**, ongelimiteerd.
- Tower-cap voor gewone torens en ijstorens schaalt nu met **+5 per NG+-cycle** vanaf base 25, tot een absolute bovengrens van **50**.
- Base-game en NG+1 gedragen zich identiek aan v9.9.3; NG+2 en hoger leveren extra ruimte.
- Wave-counter blijft het NG+-nummer tonen via de bestaande `⭐N`-notatie.
- Splash screen / loading screen bijgewerkt naar **v9.9.4 · Consecutive NG+ Scaling**.
- `TOWER_CAP_NG_PLUS` vervangen door `TOWER_CAP_PER_NG_PLUS` en `TOWER_CAP_MAX_ABSOLUTE`.
- Geen save-impact. Service-worker cache gebumpt naar `frostfall-v9-9-4`.

## v9.9.3 — Tower Caps Balance

*ChatGPT-balans/QoL-update op verzoek van Niels.*

- Gewone torens en ijstorens hebben nu elk een bouwlimiet.
- Base game: maximaal **25 gewone torens** en **25 ijstorens**.
- New Game+: maximaal **30 gewone torens** en **30 ijstorens**.
- Palisades/muren blijven **ongelimiteerd**.
- Bestaande saves worden niet opgeschoond: als een oudere save al boven de cap zit, blijven die torens staan, maar er kunnen geen extra torens van dat type worden gebouwd totdat je onder de cap zit.
- Build-knoppen tonen nu teller/cap, bijvoorbeeld `🏹 Toren · 30🪵 20🥩 · 18/25`.
- Build-preview wordt rood wanneer het maximum voor dat torentype bereikt is.
- Bij bouwen boven de cap verschijnt een floating warning.
- Geen save reset nodig. Service-worker cache gebumpt naar `frostfall-v9-9-3`.

## v9.9.2 — New Game+ Expanded Upgrades

*ChatGPT-balans/QoL-update op verzoek van Niels.*

- New Game+ opent nu extra progressieruimte na het uitspelen van de game.
- In NG+ krijgen capped upgrades **+2 extra levels** bovenop hun normale maximum.
- Survivors/dorpsbewoners krijgen in NG+ **+2 extra slots**: max 4 → max 6.
- Hunters/jagers krijgen in NG+ **+2 extra slots**: max 4 → max 6.
- Upgrade-kaarten tonen nu bij capped upgrades `Lv.x/y`, zodat zichtbaar is hoeveel levels nog beschikbaar zijn.
- Bestaande uncapped upgrades zoals Bijl Kracht en Gezondheid blijven uncapped zoals voorheen.
- Geen save reset nodig. Service-worker cache gebumpt naar `frostfall-v9-9-2`.

## v9.9.1 — New Game+ Progression Polish

*ChatGPT-polishpatch op verzoek van Niels, naar aanleiding van Claude-QA.*

- New Game+ gebruikt nu **Optie A**:
  - upgrades blijven behouden;
  - hunters/survivors blijven behouden via hun upgrade-levels;
  - zones worden opnieuw vrijgespeeld vanaf Siberian Camp.
- New Game+ begint daardoor weer met de vroege-zone progressie in plaats van direct als Forgotten Ice Caves-run.
- Wave-counter toont nu een **⭐** tijdens New Game+ runs.
- Audio/wave-cue state wordt expliciet opgeschoond bij de start van New Game+, zodat er geen oude queued cues kunnen blijven hangen.
- Crow/rat spawn-timers worden bij New Game+ teruggezet naar hun startwaarden.
- Victory button-copy aangepast zodat duidelijk is dat zones opnieuw vrijgespeeld worden.
- Geen save reset nodig. Service-worker cache gebumpt naar `frostfall-v9-9-1`.

## v9.9.0 — New Game Plus & Pass-through Towers

*ChatGPT-gameplay/QoL-update op verzoek van Niels.*

- Victory screen krijgt nu twee keuzes:
  - **NEW GAME +**: start opnieuw bij wave 1 met behoud van alle upgrades, hunters, survivors en zone-unlocks.
  - **HELEMAAL OPNIEUW STARTEN**: wist alles zoals de bestaande volledige reset.
- New Game+ reset de actieve run-state: wave, enemies, drops, projectiles, structures, finale-state, HP en start-resources worden teruggezet naar een frisse run.
- Upgrades en zone-unlocks blijven behouden; Ice Caves/Glacial Forest blijven dus beschikbaar.
- New Game+ wordt als `newGamePlusRuns` in de save bijgehouden.
- Player collision met towers en ice towers verwijderd: de speler kan nu door alle eigen structures heen lopen, zodat je jezelf niet meer per ongeluk klem kunt bouwen.
- Vijanden blijven structures wel aanvallen; dit is alleen een friendly/player pass-through QoL-fix.
- Geen save reset nodig. Service-worker cache gebumpt naar `frostfall-v9-9-0`.

## v9.8.5g — Wolf-only Meat Thief Guard

*ChatGPT-codeclarificatie op verzoek van Niels.*

- Expliciet vastgelegd dat alleen wolves en brute wolves mogen reageren op een rat die vlees draagt.
- Bears, brutes, yeti en brute-yeti pakken geen vlees op en jagen niet op ratten.
- Rat-hunterselectie gebruikt nu de helper `canHuntMeatThief()`, zodat toekomstige uitbreidingen minder makkelijk per ongeluk beren of andere vijanden in deze voedselketen trekken.
- Geen gameplay-wijziging bedoeld ten opzichte van de v9.8.5f-regels; dit is een guard/clarification patch.
- Geen save-impact. Service-worker cache gebumpt naar `frostfall-v9-8-5g`.

## v9.8.5f — Bear Growl Volume Fix

*ChatGPT-audio-tuning op verzoek van Niels.*

- Bear growl-volume verhoogd zodat bear/brute/boss-bear wave-cues beter hoorbaar zijn boven de achtergrondmuziek.
- Muziek-ducking tijdens bear growls iets sterker gemaakt, zodat de growl duidelijker door de mix snijdt zonder nieuwe audio-assets toe te voegen.
- Geen gameplay-, asset- of save-impact. Service-worker cache gebumpt naar `frostfall-v9-8-5f`.

## v9.8.5d — Attribution Clarification

- [ChatGPT] Credits en README verduidelijkt volgens Niels’ gewenste project-attributie.
- Vastgelegd dat Niels in de director’s seat zat: feature-richting, verzoeken, playtesting, assetselectie, SFX-downloads, QA-coördinatie en releasebeslissingen.
- Vastgelegd dat het feitelijke build-/implementatiewerk AI-assisted is uitgevoerd, met ChatGPT als primaire package-builder in deze sessie.
- Claude, Gemini en Grok explicieter beschreven als respectievelijk QA/review-/patchbron, muziek/visuele/code-suggestiebron en aanvullende reviewbron.
- Verduidelijkt dat sommige geïntegreerde code/snippets afkomstig waren uit voorstellen van Gemini, Claude of Grok, terwijl veel implementatie direct door ChatGPT is geschreven.
- Geen code-, gameplay-, asset-, save- of cache-impact.

## v9.8.5c — Release Notes Package Cleanup

- [ChatGPT] Zip-package opgeschoond volgens Niels’ nieuwe packaging-afspraak.
- Release-notesbestanden ouder dan de huidige base major versie verwijderd uit de package.
- Voor de v9.8.5-lijn blijven alleen v9.x release notes en de actuele aggregate release notes aanwezig.
- Geen code-, gameplay-, asset-, save- of cache-impact.


## v9.8.5b — Changelog Attribution Backfill

*ChatGPT-documentatie-update op verzoek van Niels en op voorstel van Claude.*

- Cursieve attributie-regels toegevoegd onder v9.8.1, v9.8.2, v9.8.3, v9.8.4, v9.8.5 en v9.8.5a.
- Footer-tekst en attributie-conventie-bullets bijgewerkt: bullet-prefix-stijl gold tot v9.3, cursieve-regel-stijl vanaf v9.4.
- Zip-package opgeschoond volgens nieuwe package-afspraak: oude v7/v8 `*_changes.txt`-bestanden niet meer meegenomen; v9.x change files blijven aanwezig.
- Geen code-, gameplay-, save- of cache-impact.

## v9.8.5a — Credits / Asset Notes

*ChatGPT-documentatie-update.*

- Documentatie-update toegevoegd met credits en asset-herkomst.
- `CREDITS.md` toegevoegd.
- README aangevuld met: SFX van Pixabay, muziekloops gemaakt met Gemini, pixel-art gemaakt met hulp van Gemini/ChatGPT, kleurvariaties aangepast in Apple Photos.
- Geen gameplay-, code-, save- of cache-impact.

## v9.8.5 — Sequential Mixed-Wave Audio Cues

*Voorgesteld door Claude, geïmplementeerd door ChatGPT.*

- Elke wave speelt nu een cue af voor elk uniek enemy-cue-resultaat dat in de wave verschijnt, niet alleen voor de eerste vijand.
- Cues worden sequentieel afgespeeld met minimaal 1.2s spacing via een queue-mechanisme, zodat howl/growl-cues niet over elkaar heen vallen.
- Wave-start opener blijft op de vooraf gekozen eerste vijand; de eerste daadwerkelijke spawn van hetzelfde type triggert niet dubbel.
- Deduplicatie gebeurt op `sfx + pitch`, zodat een normale wolf-howl en een diepere brute-wolf-howl allebei hoorbaar kunnen zijn.
- `waveAnimalCuePlayed` vervangen door `waveCuePlayedKeys`, `waveCueQueue` en `waveCueQueueTimer`.
- Yeti-finale-opening en alpha-boss-cues blijven hun dramatische losse cues gebruiken, met schone queue-state per finale-boss.
- Bij mute/background-state wordt de cue-queue geleegd zonder playback, zodat er geen achterstallige howl/growl-cues afspelen bij unmute of terugkeer.
- Geen save-impact. Service-worker cache gebumpt naar `frostfall-v9-8-5`.

## v9.8.4 — Brute Wolf Audio Differentiation

*Voorgesteld door Claude, geïmplementeerd door ChatGPT.*

- Brute-wolf-waves spelen de wolf-howl af op `playbackRate 0.78` voor een dieper, langzamer geluid.
- Bear-brute-waves spelen de bear-growl af op `playbackRate 0.82`.
- Normale wolf/bear/yeti-waves en alpha-bosses blijven op normale pitch.
- `playSampleSfx`, `playSound` en `playEventSfx` accepteren nu een optionele `pitchBase`-parameter, backwards-compatible met bestaande calls.
- Pitch-jitter wordt vermenigvuldigd met de pitchBase, zodat variatie behouden blijft bovenop de diepere brute-cue.
- Duck-duur schaalt mee met lagere playback-rate zodat de muziek niet te vroeg terugkomt.
- Geen save-impact en geen extra audio-assets. Service-worker cache gebumpt naar `frostfall-v9-8-4` als tussenstap.

## v9.8.3 — Animal Audio Cues

*ChatGPT-uitbreiding op verzoek van Niels.*

- Nieuwe event-SFX toegevoegd:
  - `wolf_howl.mp3` voor wolf/brute-wolf waves.
  - `bear_growl.mp3` voor bear/brute/boss-bear waves.
  - `yeti_growl.mp3` voor Yeti/Brute Yeti en Alpha Yeti momenten.
  - `rat_squeak.mp3` voor ratten die met vlees wegschieten.
  - `female_scream.mp3` voor player death.
- Bij de start van een wave wordt nu precies één passende dierencue afgespeeld. Voor normale waves wordt de eerste spawn vooraf gekozen zodat de wave-cue overeenkomt met de eerste vijand die daadwerkelijk verschijnt.
- Yeti-waves gebruiken een duidelijke Yeti-growl in plaats van de oude synth-gameover cue.
- Finale Alpha Bosses krijgen ook passende dierencues: Alpha Wolf = howl, Alpha Brute = bear growl, Alpha Yeti = Yeti growl.
- Ratten spelen 1–2 squeaks wanneer ze vlees stelen en ermee wegvluchten.
- Player death gebruikt nu de female scream SFX in plaats van alleen de synth-gameover toon.
- Alle nieuwe SFX vallen onder de bestaande master mute-knop en gebruiken dezelfde audio lifecycle/background-pause regels.
- Muziek wordt kort geduckt tijdens belangrijke dierencues zodat de clips hoorbaar blijven over de soundtrack.
- Geen save-impact. Service-worker cache gebumpt naar `frostfall-v9-8-3`.

## v9.8.2 — Crow Caw Audibility

*Voorgesteld door Claude, geïmplementeerd door ChatGPT.*

- Crow-caw SFX-gain verhoogd van 0.58 naar 0.95.
- Audio-buffers laden nu vroeg, op `DOMContentLoaded`, zodat de eerste crow-event minder snel terugvalt op de synth-fallback.
- `AudioContext` wordt vroeg gecreëerd in `suspended`-state; daadwerkelijke playback blijft achter de eerste user-gesture zitten zodat browser autoplay-policy gerespecteerd blijft.
- Muziek wordt tijdens een crow-caw-burst tijdelijk gedempt en herstelt daarna vloeiend.
- Ducking wordt overgeslagen tijdens muziek-fade-transities, background/suspended state en mute, zodat er geen volume-conflicten ontstaan.
- Geen save-impact. Service-worker cache gebumpt naar `frostfall-v9-8-2`.

## v9.8.1 — Wolf Hunt-Rat Cap

*Voorgesteld door Claude, geïmplementeerd door ChatGPT.*

- Maximaal 2 wolven, inclusief Brute Wolves, jagen tegelijk op dezelfde rat-met-vlees.
- Als meer wolven in range zijn, worden de 2 dichtstbijzijnde wolven toegewezen aan de rat; de rest blijft normaal speler/structures aanvallen.
- Hunting-cap geldt per rat, zodat de code klaar is voor eventuele toekomstige multi-rat situaties.
- Detectierange blijft 450px, maar is nu vastgelegd als `WOLF_HUNT_RAT_RANGE`; de cap is `WOLF_HUNT_RAT_CAP`.
- Geen save-impact: `SAVE_KEY` en save-format blijven ongewijzigd.
- Service-worker cache gebumpt naar `frostfall-v9-8-1`.

## v9.7.3 — Crow Escape Balance

*Crow Thief mechanic bedacht, logica uitgeschreven en pixel-art gegenereerd met Gemini.*

- Crow Thief opnieuw gebalanceerd: na de diefstal krijgt hij meer HP en een korte ontsnappings-grace, zodat hij zichtbaar met vlees wegvliegt voordat hij kwetsbaar wordt.
- Crow blijft tijdens de approach veilig, maar wordt na de diefstal targetbaar zodra de korte grace is verlopen.
- Bij het stelen speelt de nieuwe crow-caw SFX 2–3 keer kort achter elkaar af.
- Crow SFX toegevoegd als asset (`crow_caw.mp3`) en gekoppeld aan de bestaande algemene mute-knop.
- Service-worker cache gebumpt naar `frostfall-v9-7-3`.

## v9.7.1 — Crow Bestiary Fix

- Crow Thief toegevoegd aan de Bestiary-tab.
- Bestiary-tekst aangepast zodat ook bijzondere resource-dreigingen onder het overzicht vallen.
- Crow Thief wordt zichtbaar zodra de speler 25+ vlees heeft of lifetime 25+ vlees heeft verzameld.
- Service-worker cache gebumpt naar `frostfall-v9-7-1`.


## v9.6 — Arrow towers & full compass

*Wiskunde voor kompas-schaling en toren-pijlen opgelost met Gemini.*

- Gewone torens schieten nu visueel pijlen in plaats van oranje bollen, passend bij de hunter-stijl.
- Kompas-limiet voor vijanden buiten beeld verwijderd: toont nu alle threats.
- Rode kompas-pijltjes schalen in grootte en felleheid op basis van de afstand tot de speler om scherm-clutter te voorkomen.

## v9.5 — Palisade Snow Polish

*Wiskundige fix voor de uitlijning van hoekpalen en sneeuwkappen voorgesteld door Gemini.*

- Palisade horizontal cross-beams now stop at the center of an end/corner post instead of overhanging past it.
- Continuous snow strips use the same center-stop logic, removing small floating/overlapping snow fragments at corners and T-junctions.
- Individual post caps remain procedural, so corners and vertical palisades still read as capped wooden posts rather than sprite overlays.
- Visual-only update: gameplay and save key remain unchanged from v9.4.
- Service-worker cache bumped to `frostfall-v9-5`.

## v9.4 — Balanced Villager Repairs

- Auto-repair is now limited so villagers remain primarily resource gatherers.
- Structures below 25% HP count as emergency repair targets; at most 2 villagers can be diverted globally.
- Structures between 25% and 50% HP count as maintenance targets; at most 1 villager can be diverted globally.
- Villagers only start/continue auto-repairs while wood is above a protected 25 wood reserve.
- Villager repair now happens in short bursts: max 4 ticks, 18 HP per tick, 1 wood per tick.
- Auto-repair stops at roughly 70% structure HP; full repair remains a player choice through the money-only repair button.
- Save key and service worker cache bumped to v9.4.


## v9.3 — Reinforced Repairs

### [ChatGPT]

- Structures versterkt: basiswaarde van **Muur/Toren HP** verhoogd van 120 naar 160.
- Toren-HP multipliers aangescherpt: gewone torens gebruiken nu 1.45× wall HP, ijstorens 1.30× wall HP.
- Bestaande saves worden bij eerste start gemigreerd: bestaande structuren krijgen de nieuwe maximale HP met behoud van hun relatieve schadepercentage.
- Villagers/dorpsbewoners kunnen nu beschadigde structuren repareren met hout.
- Reparatie-AI: als een structure onder 50% HP komt, krijgt reparatie prioriteit boven hout verzamelen.
- Is er geen structure onder 50% HP, dan blijft resource gathering prioriteit.
- Villager repair kost 1 hout per reparatie-tick en herstelt 22 HP per tick.
- Villagers tonen een klein 🛠️-icoon wanneer ze onderweg zijn naar een reparatie of aan het repareren zijn.
- `SAVE_KEY` bijgewerkt naar `frostfall-save-v9-3-reinforced-repairs`.
- Service-worker cache bijgewerkt naar `frostfall-v9-3`.

## v9.2 — Quiet Row Caps

- Per-post snow caps worden niet meer getekend op middencellen van horizontale muurrijen (cellen met zowel een E- als W-buur).
- De doorlopende sneeuwstrook op de horizontale rail is daar al de dominante visuele laag; losse caps erbovenop zorgden voor een drukke "dubbele sneeuw"-uitstraling.
- Uiteinden, hoeken, T-stuk-koppen en alle verticale/solo paaltjes behouden hun cap.
- Geen gameplay- of asset-wijzigingen. Pure render-tweak op `drawWallPalisade`.
- Service-worker cache bijgewerkt naar `frostfall-v9-2`. SAVE_KEY ongewijzigd.

## v9.1 — Wall Snow Cap Fix

- Snow-cap rendering op muren herzien: de doorlopende sneeuwstrook wordt nu alleen getekend wanneer er een horizontale rail-verbinding is (E- of W-buur).
- Verticale runs en solo-paaltjes krijgen elk hun eigen, individueel gevormde cap met seeded variatie (capInset, capDrop, capPeak) zodat geen twee caps identiek zijn.
- Service-worker cache bijgewerkt naar `frostfall-v9-1`.

## v9 — Meat Stockpiles

- Vleesopslag vervangen door vier schaalbare sprite-niveaus:
  - `meat_pile_1.png` — één stuk vlees.
  - `meat_pile_2.png` — kleine stapel vlees.
  - `meat_pile_3.png` — houten kist vol vlees.
  - `meat_pile_4.png` — grote voorraad met meerdere kisten en stapels vlees.
- `MEAT_PILE_TIERS` toegevoegd, analoog aan de bestaande hout- en geldstapels.
- Kampdecoratie toont nu automatisch het juiste vleesniveau op basis van `state.meat`.
- Oude `mat_meat.png`-opslagweergave vervangen door tiered meat-pile sprites.
- `SAVE_KEY` bijgewerkt naar `frostfall-save-v9-meat-stockpiles`; v8.9 blijft als legacy key aanwezig.
- Service-worker cache bijgewerkt naar `frostfall-v9` en nieuwe sprites toegevoegd.

## v8.9 — Hunter Combat Polish

- Hunters hebben nu een zichtbare melee-spin met vier axe-sprites wanneer ze vijanden van dichtbij raken.
- Hunter-ranged attacks zijn visueel verbeterd: projectiles worden nu als kleine pijlen/speren getekend in plaats van als eenvoudige dots.
- Hunter-projectiles krijgen een vliegrichting (`angle`) zodat ze visueel naar hun doel wijzen.
- Kleine ranged flash toegevoegd bij hunter-shots voor betere combat feedback.
- v8.8 neighbor-aware palisade wall implementation behouden.
- `SAVE_KEY` bijgewerkt naar `frostfall-save-v8-9-hunter-combat-polish`.
- Service-worker cache bijgewerkt naar `frostfall-v8-9`.


## v8.8 — Palisade

- Walls now render as a connected palisade with pointed posts, horizontal and vertical cross-beams, and continuous snow caps.
- Neighbor-aware rendering: solo walls, rows, L-corners, T-junctions and full forts all draw correctly without sprite tiles.
- Friendlies (player, survivors, hunters) walk through walls; enemies still respect them.
- Towers and ice towers still block all movement.
- Updated save/cache versioning for v8.8.

## v8.7 — Hunters & Compass

- Added subtle edge-of-screen compass arrows: white points back to camp, red points to off-screen enemies.
- Enemy direction arrows are capped to three to avoid clutter; boss/alpha enemies get stronger indicators.
- Added `hunter.png` and a new **Jagers** upgrade.
- Hunters are permanent camp defenders, capped at 4 like survivors.
- Hunters patrol near camp, fire weak ranged projectiles, and use a stronger close-range melee/spinning-axe attack.
- Hunter damage scales from axe power only, without a separate upgrade tree.
- Updated save/cache versioning for v8.7.


Dit changelog is samengesteld op basis van de versies, codefragmenten, assets en parallelle AI-feedback die in deze ontwikkelsessie zichtbaar waren. Het is dus geen volledige Git-geschiedenis, maar een zo eerlijk mogelijke reconstructie van de ontwikkeling. De bullet-prefix-conventie (`[Claude]`, `[Gemini]`) is gebruikt tot en met **v9.3**. Vanaf **v9.4** worden patches per entry geattribueerd met een cursieve attributie-regel direct onder de versie-titel.

Attributie-conventie:

- Items zonder prefix (v9.3 en eerder): ontstaan in deze ChatGPT-sessie of via Niels' eigen werk, keuzes, uploads en sprite generation.
- Items met **[Claude]** (v9.3 en eerder): bijdragen vanuit een parallelle Claude-sessie, met name PoC-architectuur, bugfixes, system design, service-worker/loading-infrastructuur, Bestiary/wolf/yeti logic en reset/pauze-flow.
- Items met **[Gemini]**: stilistische bijdragen en feature-implementaties vanuit de initiële AI-assistent, met name visual upgrades, Web Audio, tactische features, sprite rendering en victory-screen voorstel.
- Vanaf v9.4 wordt elke entry waar dat van toepassing is voorzien van een cursieve attributie-regel. Mogelijke vormen: *Voorgesteld door Claude, geïmplementeerd door ChatGPT*, *ChatGPT-uitbreiding*, *ChatGPT-documentatie-update*, of een andere expliciete formulering.



## v8.6 — Exchange All

- Exchange-tab uitgebreid met een tweede actieknop per ruilregel: **Ruil alles**.
- Naast **Ruil 1×** kan de speler nu automatisch alle mogelijke volledige batches van een resource-omzetting uitvoeren.
- Exchange-regels tonen nu een `max X×` indicatie wanneer een ruil mogelijk is.
- Nieuwe helperlogica toegevoegd:
  - `maxExchangeBatches(recipe)` berekent hoeveel volledige batches de huidige voorraad toestaat.
  - `multiplyResources(obj, batches)` berekent totale kosten/opbrengst voor bulkruil.
- Bulk-exchange beïnvloedt lifetime collection stats niet; het blijft omzetting van bestaande voorraad.
- `SAVE_KEY` bijgewerkt naar `frostfall-save-v8-6-exchange-all`; v8.5 saves migreren automatisch via `LEGACY_KEYS`.
- `sw.js` cache-versie bijgewerkt naar `frostfall-v8-6`.
- `v8.6_changes.txt` en `release_notes_v8.6.md` toegevoegd.


## v8.5 — Exchange & Mobile QoL

- Build- en upgradeknoppen iets verder van de schermrand geplaatst: klein stukje naar rechts en omhoog, zodat ze op mobiel/iPad prettiger te raken zijn.
- Touch joystick iets naar links en omhoog verplaatst, zodat hij minder tegen de browser-/safe-area-rand zit.
- Pauze- en GELUID-knoppen opnieuw gepositioneerd: ze staan nu onder elkaar onder het wave/statusveld rechtsboven.
- Nieuwe **Exchange**-tab toegevoegd aan de Tactical Forge.
- Exchange maakt resource-omzetting met verlies mogelijk:
  - hout naar geld
  - vlees naar geld
  - geld naar hout
  - geld naar vlees
  - hout naar vlees
  - vlees naar hout
- Hiermee blijven hout en vlees in de late game nuttig wanneer geld de bottleneck wordt.
- Exchange beïnvloedt de lifetime collection stats niet; het is omzetting van bestaande voorraad, geen nieuw verzamelde resource.
- `SAVE_KEY` bijgewerkt naar `frostfall-save-v8-5-exchange-qol`; v8.4 saves migreren automatisch via `LEGACY_KEYS`.
- `sw.js` cache-versie bijgewerkt naar `frostfall-v8-5`.
- `v8.5_changes.txt` en `release_notes_v8.5.md` toegevoegd.


## v8.4 — Brute Beasts

- Nieuwe enemy-sprites toegevoegd:
  - `brute_wolf.png`
  - `brute_yeti.png`
- Brute Frost Wolf toegevoegd aan de spawn pool nadat Glacial Forest is ontgrendeld en de run ongeveer wave 14 bereikt.
- Brute Frost Wolf is sterker en taaier dan een gewone Frost Wolf, maar duidelijk langzamer.
- Brute Yeti toegevoegd als Yeti-wave support enemy.
- Brute Yeti is veel kleiner en minder sterk dan de grote Yeti, maar een stuk sneller.
- Yeti-waves spawnen nu één grote Yeti plus 4–5 Brute Yetis, zodat de wave tactischer wordt zonder dat er onbeperkt veel tegelijk verschijnen.
- Bestiary uitgebreid met Brute Frost Wolf en Brute Yeti.
- Rendering, HP-bar kleuren, vector-fallbacks en sprite selection uitgebreid voor de nieuwe enemy kinds.
- `SAVE_KEY` bijgewerkt naar `frostfall-save-v8-4-brute-beasts`; v8.3 saves migreren automatisch via `LEGACY_KEYS`.
- `sw.js` cache-versie bijgewerkt naar `frostfall-v8-4`.
- Nieuwe sprites toegevoegd aan de service-worker pre-cache.
- `v8.4_changes.txt` en `release_notes_v8.4.md` toegevoegd.

## v8.3 — Audio Lifecycle Fix

- Audio-lifecycle afhandeling toegevoegd voor iOS/iPadOS/Safari/PWA-gedrag waarbij muziek kan blijven doorspelen nadat de browser-tab of homescreen web-app wordt verlaten.
- `visibilitychange`, `pagehide`, `freeze` en `pageshow` handlers toegevoegd.
- Achtergrondmuziek pauzeert nu expliciet zodra de pagina/app naar de achtergrond gaat of wordt gesloten.
- Actieve Web Audio one-shot SFX worden gestopt bij backgrounding.
- De Web Audio context wordt gesuspendeerd zolang de app op de achtergrond staat.
- Bij terugkeer hervat de muziek alleen als die vóór het verlaten van de app daadwerkelijk speelde.
- Master mute blijft leidend: als geluid uit stond, wordt er niets automatisch hervat.
- `SAVE_KEY` bijgewerkt naar `frostfall-save-v8-3-audio-lifecycle`; v8.2 saves migreren automatisch via `LEGACY_KEYS`.
- `sw.js` cache-versie bijgewerkt naar `frostfall-v8-3`.
- `v8.3_changes.txt` en `release_notes_v8.3.md` toegevoegd.


## v8.2 — Audio Polish

- Door Niels aangeleverde MP3-sound effects verwerkt en game-ready gemaakt:
  - `sfx_chop.mp3` voor bijl-op-hout / houthakken.
  - `sfx_axe_hit.mp3` voor bijl-op-weefsel / enemy hits.
- De aangeleverde MP3's zijn ingekort, licht gefadet en in mono/128 kbps game-assets omgezet zodat ze minder zwaar en minder storend zijn bij herhaald afspelen.
- SFX-loader omgezet van WAV naar MP3-bestanden.
- Volumebalans, pitch-jitter en minimum-gap opnieuw afgestemd op de nieuwe samples.
- De bestaande geluidsknop is omgezet naar een **master mute**: **🔊 GELUID / 🔇 GELUID** schakelt nu zowel achtergrondmuziek als sound effects uit of aan.
- De master mute-voorkeur wordt opgeslagen in `localStorage` onder `frostfall-audio-muted-v8-2`; de oude muziek-mute key blijft als legacy/fallback behouden.
- `SAVE_KEY` bijgewerkt naar `frostfall-save-v8-2-audio-polish`; v8.1 saves migreren automatisch via `LEGACY_KEYS`.
- `sw.js` cache-versie bijgewerkt naar `frostfall-v8-2`.
- Nieuwe MP3-SFX-bestanden toegevoegd aan de service-worker pre-cache.

## v8.1 — Sound Effects Update

- Twee nieuwe sample-gebaseerde sound effects toegevoegd:
  - `sfx_chop.wav` voor houthakken.
  - `sfx_axe_hit.wav` voor bijl-aanvallen / enemy hits.
- `playSound('chop')` en `playSound('hit')` gebruiken nu de nieuwe WAV-samples zodra deze zijn geladen.
- Synthesizer-fallback behouden voor het geval de samples nog laden of ontbreken.
- Kleine pitch-jitter en minimum-gap per SFX toegevoegd, zodat snelle attack-speed upgrades minder snel irritant of overlappend klinken.
- Bestaande Web Audio API-geluiden voor upgrades, towers en game-over blijven behouden.
- `SAVE_KEY` bijgewerkt naar `frostfall-save-v8-1-sfx`; v8.0 saves blijven automatisch migreren via `LEGACY_KEYS`.
- `sw.js` cache-versie bijgewerkt naar `frostfall-v8-1`.
- Nieuwe SFX-bestanden toegevoegd aan de service-worker pre-cache.

## v8.0 — Music Update

- Achtergrondmuziek toegevoegd als echte gamefeature:
  - `main_loop.mp3` voor normale gameplay.
  - `boss_loop.mp3` voor boss waves, Yeti-waves en de Winter's End finale.
  - `victory_cue.mp3` voor het victory/eindscherm.
- Nieuwe **🔊 MUZIEK** / **🔇 MUZIEK** knop toegevoegd bovenin het scherm, naast de pauzeknop.
- Muziek start pas na de eerste gebruikersactie, zodat iOS/iPadOS/Safari autoplay-regels netjes worden gevolgd.
- Muziekvoorkeur wordt opgeslagen in `localStorage` onder `frostfall-music-muted-v8`.
- Muziek wordt zacht gefadet tussen main, boss en victory tracks.
- Game-over pauzeert de achtergrondmuziek zodat de bestaande game-over soundcue duidelijk blijft.
- `SAVE_KEY` bijgewerkt naar `frostfall-save-v8-0-music`; v7.8 lifetime-stat saves blijven automatisch migreren.
- `sw.js` cache-versie bijgewerkt naar `frostfall-v8-0`.
- Nieuwe MP3-bestanden toegevoegd aan de service-worker pre-cache voor PWA/offline gebruik.

## v7.8.1 — Zone Unlock Fix

- Fixed a regression introduced by the cumulative bestiary/unlock system: enemy spawning and the HUD still looked at `state.currentZone`, while unlocking new zones only updated `state.zonesUnlocked`.
- Added an active-zone helper based on the highest unlocked zone.
- Wolves now enter the spawn pool after Glacial Forest is unlocked.
- Yeti waves and Ice Caves scaling now activate after Forgotten Ice Caves is unlocked.
- Top-right zone title and background now reflect the highest unlocked zone.
- Unlock buttons also update `state.currentZone` for backwards compatibility.
- Service-worker cache bumped to `frostfall-v7-8-1`.

## v7.8 — Lifetime Stats Fix

- Victory-screen statistieken omgebouwd naar echte **lifetime run stats** in plaats van momentopnames van de huidige voorraad.
- `state.stats` uitgebreid met `wavesCompleted` en een v7.8 lifetime-stats marker.
- Hout, vlees en goud tellen nu door op het moment van verzamelen, ook als ze later worden uitgegeven aan towers, upgrades of repairs.
- Vijanden verslaan, structuren bouwen en waves voltooien worden expliciet bijgehouden voor het eindscherm.
- Victory modal gebruikt nu `state.stats.*Collected`, `state.stats.kills`, `state.stats.structuresBuilt` en `state.stats.wavesCompleted`.
- Migratie toegevoegd voor oudere saves uit v1.0–v7.7: bestaande stats blijven behouden, maar worden minimaal aangevuld met huidige voorraad, bestaande structuren, wave-progressie en een conservatieve kill-inschatting op basis van reeds voltooide waves.
- Nieuwe saves vanaf v7.8 houden lifetime stats exact bij vanaf het begin van de run.
- Save key bijgewerkt naar `frostfall-save-v7-8-lifetime-stats`.
- v7.7-save key toegevoegd aan `LEGACY_KEYS`, zodat de bestaande v7.7-save automatisch wordt opgepakt.
- `sw.js` cache-versie bijgewerkt naar `frostfall-v7-8`.

## v7.7 — Victory Screen Update

- Nieuw illustrated **victory endscreen asset** toegevoegd: `victory-screen.png`.
- Victory modal omgebouwd naar een pixel-art lente-eindscherm met de tekst **DE WINTER IS VOORBIJ**.
- De finale gebruikt nu een warme lenteweide als visueel contrast met de winterse gameplay.
- Victory overlay toont run-statistieken:
  - Waves overleefd
  - Vijanden verslagen
  - Gebouwde structuren
  - Hout verzameld
  - Vlees verzameld
  - Goud verzameld
- Prominente knop **NIEUWE RUN STARTEN** toegevoegd om na de overwinning opnieuw te beginnen.
- Victory reset gebruikt dezelfde veilige resetlogica als de rest van de game.
- `index.html` bijgewerkt naar de v7.7 victory-modal structuur en styling.
- `sw.js` cache-versie bijgewerkt naar `frostfall-v7-7`.
- `victory-screen.png` toegevoegd aan de service-worker pre-cache.
- Save-migratie behouden: v7.7 kan bestaande v7.6-saves lezen.
- `release_notes_v7.7.md` en `v7.7_changes.txt` toegevoegd.

## v7.6 — Winter's End

- Echte endgame-finale toegevoegd vanaf **wave 50**, zodra Forgotten Ice Caves is ontgrendeld.
- Normale wave-spawning stopt tijdens de finale.
- Nieuwe sequentiële **Alpha Boss Rush** toegevoegd:
  - **Alpha Wolf**: snelle opener en movement-check.
  - **Alpha Brute Bear**: zware siege boss met extra muurschade.
  - **Alpha Yeti**: grote eindbaas met slow-resistance en extra visuele dreiging.
- Alpha bosses krijgen eigen `alpha` / `finaleBoss` metadata.
- Alpha bosses hebben grotere render-scale, aangepaste tint/filter, paarse HP-bar en naamlabel boven de healthbar.
- Ice tower slow werkt nog steeds op Alpha bosses, maar met gedeeltelijke slow-resistance.
- Finale wordt aangekondigd met **WINTER'S END** en per boss met floating-text cues.
- Na het verslaan van de Alpha Yeti verschijnt het victory-scherm.
- Run-statistieken toegevoegd aan `state.stats` met migratie voor oudere saves.
- Save key bijgewerkt naar `frostfall-save-v7-6-winters-end`.
- `sw.js` cache-versie bijgewerkt naar `frostfall-v7-6`.

## v7.5 — Pause & Fair Scaling

- Losse **RESET**-knop verwijderd uit het normale speelscherm.
- Nieuwe **PAUZE**-knop toegevoegd midden bovenin.
- Nieuw pauzescherm toegevoegd met:
  - **Doorspelen**
  - **Spel opnieuw starten**
- Reset is nu een tweestaps-flow: eerst pauze, daarna expliciete waarschuwing dat alle voortgang verloren gaat.
- **Nee, terug naar huidige spel** sluit de waarschuwing en hervat het huidige spel.
- Desktop shortcuts toegevoegd: **P** of **Escape** pauzeert; dezelfde toetsen sluiten ook reset-waarschuwingen.
- Game-loop pauzeert nu expliciet bij pauze, Tactical Forge, resetbevestiging en victory modal.
- Adaptive threat scaling aangescherpt zodat late-game/maxed spelers vijanden minder snel buiten beeld wegpoetsen.
- Vijanden tonen een klein **Lv.** label wanneer adaptive scaling zichtbaar boven basisniveau uitkomt, zodat sterker geschaalde enemies begrijpelijker aanvoelen.
- `index.html` bijgewerkt naar **Frostfall v7.5 - Pause & Fair Scaling**.
- Save key bijgewerkt naar `frostfall-save-v7-5-pause-fair-scaling`.
- `sw.js` cache-versie bijgewerkt naar `frostfall-v7-5`.

## v7.4 — Adaptive Threat Scaling

- Vijanden schalen adaptief mee met de effectieve kracht van de speler.
- De scaling kijkt naar speler-DPS, attack speed, bereik en de praktische bijdrage van torens.
- Enemy HP krijgt een minimum time-to-live per type, zodat enemies bij hoge upgrades niet meer allemaal buiten beeld verdwijnen.
- Enemy damage schaalt slechts mild mee, zodat de aanpassing vooral voorkomt dat de speler god-tier wordt zonder de game meteen oneerlijk dodelijk te maken.
- Rewards schalen beperkt mee met de hogere HP, zodat sterkere enemies niet puur als tijdstraf voelen.
- Save key bijgewerkt naar `frostfall-save-v7-4-adaptive-scaling`.
- `sw.js` cache-versie bijgewerkt naar `frostfall-v7-4`.

## v7.3.1 — Resource Sprite Hotfix

- Hotfix voor een ontbrekende `drawOrbitingAxes()` functie waardoor v7.3 kon crashen bij het renderen van de speler.
- Ronddraaiende axe sprite/fallback teruggezet.
- Service-worker cache bump naar `frostfall-v7-3-1`.

## v7.3 — Resource Sprite Update

### Nieuwe resource-sprites

- Houtopslag vervangen door vier schaalbare sprite-niveaus:
  - `wood_pile_1.png`
  - `wood_pile_2.png`
  - `wood_pile_3.png`
  - `wood_pile_4.png`
- Geldopslag vervangen door vier schaalbare sprite-niveaus:
  - `money_pile_1.png`
  - `money_pile_2.png`
  - `money_pile_3.png`
  - `money_pile_4.png`
- Boomstronken vervangen door drie sprite-varianten:
  - `stump_1.png`
  - `stump_2.png`
  - `stump_3.png`

### Nieuwe resource-weergave

- Houtstapel groeit visueel mee met de hoeveelheid hout:
  - 1–24: klein stapeltje
  - 25–74: middelklein stapeltje
  - 75–149: grote stapel
  - 150+: maximale stapel
- Geldstapel groeit visueel mee met de hoeveelheid geld:
  - 1–49: kleine muntstapel
  - 50–149: middelkleine muntstapel
  - 150–349: grote stapel
  - 350+: maximale geldzakken/stapel
- Omgevallen bomen krijgen nu een willekeurige stump-sprite, zodat het veld minder repetitief oogt.
- Nieuwe sprite keys toegevoegd aan de sprite-loader.
- Nieuwe helperdata toegevoegd voor pile tiers en stump selectie.
- Save key bijgewerkt naar `frostfall-save-v7-3-resource-sprites`.
- Backward compatibility behouden voor oudere save keys, waaronder v7.2, v6.7, v6.6, v6.5, v6.4, v6.2, v6.0, v5.x en v4.1.
- `sw.js` cache-versie bijgewerkt naar `frostfall-v7-3`.
- Nieuwe sprites toegevoegd aan de service-worker pre-cache.
- `v7.3_changes.txt` toegevoegd als korte delta-notitie.

## v7.2 — Balance Hotfix

- Rebalance toegepast na introductie van zones, wolves en yeti's, omdat de speler in hogere zones te snel underpowered raakte.
- Tower-bereik en tower damage merkbaar verhoogd ten opzichte van eerdere v7.x-balans.
- Ice tower damage iets versterkt, terwijl de slow-functie behouden bleef.
- Houtopbrengst per boom verhoogd.
- Player chopping iets verbeterd.
- Wave scaling afgevlakt zodat de difficulty ramp minder hard doorschiet.
- Spawn-tempo iets rustiger gemaakt.
- Beast-multipliers herzien om boss/yeti-waves eerlijker te maken.

## v7.1 — Rebalanced Bestiary

- Bestiary-progression verfijnd:
  - bear als basistegenstander
  - brute vanaf ongeveer wave 8
  - wolf in Glacial Forest
  - yeti in Forgotten Ice Caves
- Wolves toegevoegd als snelle, lichtere vijanden.
- Yeti toegevoegd als grote boss/event-vijand in Ice Caves.
- Brute bear als muurbreker verder uitgewerkt.
- Yeti-beloning aangepast zodat hij hoog voelt maar minder snel de economie breekt.
- Zonegebonden vijanden toegevoegd, zodat nieuwe vijanden niet automatisch alle oude zones moeilijker maken.
- Tactical Forge uitgebreid met een bestiary-/zone-overzicht.
- Service-worker versie en cache-inhoud aangepast aan de nieuwe assets.

## v7.0 — Wolf & Yeti Expansion

- Nieuwe enemy sprites toegevoegd:
  - `wolf.png`
  - `yeti.png`
- Nieuwe enemy types in de spawnpool verwerkt.
- Zone-unlocks gekoppeld aan nieuwe vijanden.
- Yeti/wolf sprites gemaakt met transparante achtergrond en passend bij de bestaande pixel-art ijsberen.
- Eerste versie waarin Forgotten Ice Caves duidelijk een eigen dreigingsprofiel kreeg.

### [Claude] Bestiary architectuur en spawn-systeem

- Roguelike-style spawn pool ontworpen in plaats van mutually-exclusive biome-zones: zone-unlocks voegen vijand-types toe aan de spawnpool in plaats van de speler te dwingen tussen biomes te kiezen.
- Unlocks zijn cumulatief en permanent.
- `pickBeastKind()` herschreven als weighted random pool die uitbreidt op basis van `state.zonesUnlocked` en `state.wave`.
- Bear-weight schaalt naar beneden naarmate er meer types worden ontgrendeld, zodat variety natuurlijk toeneemt.
- **Wolf mechanic**: `spawnWolfPack()` spawnt 2–3 wolves per spawn-event. Stats: lage HP, hoge snelheid, pack pressure, beperkte wall damage.
- **Yeti boss event**: `isYetiWave()` triggert periodiek als Ice Caves unlocked is.
- Yeti-wave gebruikt 1 yeti plus support-beasts uit de unlocked pool.
- Yeti kreeg eigen announcement, HP-bar-kleur, render-scale en boss-achtige beloning.
- Per-kind render-scale toegevoegd zodat yeti, brute, wolf en bear visueel onderscheidender zijn.
- Vector-fallbacks voor wolf en yeti toegevoegd zodat het spel speelbaar blijft voordat sprites geladen zijn.
- World-tier scaling toegevoegd: ontgrendelde zones maken de spawnpool zwaarder in plaats van gratis variety te geven.
- Bestiary tab UI gemaakt: vijand-types met icon, beschrijving en unlock-conditie; locked entries worden gedimd weergegeven.
- Yeti wave indicator in HUD: wave-counter toont een extra cue bij yeti-waves.

## v6.9 — PWA Offline

### [Claude] Service worker + loading splash

- `sw.js` toegevoegd voor echte offline/PWA-functionaliteit:
  - Pre-cache van assets bij installatie.
  - Cache-first strategy voor assets.
  - Network-first strategy voor HTML.
  - Auto-cleanup van oude cache-versies bij activate.
  - `CACHE_VERSION` bumpen forceert re-cache van assets.
- Service-worker registration in `index.html` achter `if ('serviceWorker' in navigator)`.
- Loading splash screen met progress bar toegevoegd:
  - Splash met app-icoon, Frostfall branding en groene progress bar.
  - Sprite-loading indicator.
  - Fade-out animatie.
  - Fallback timeout zodat de splash niet kan blijven hangen.
- Sprite-loading verbouwd naar lijst-gebaseerde aanpak, zodat latere uitbreidingen makkelijker worden.

## v6.8 — Survivor Facing & App Icon

- Survivors draaien nu visueel mee met hun bewegingsrichting.
- Web-app/PWA-iconen toegevoegd:
  - `icon-192.png`
  - `icon-512.png`
  - `icon-1024.png`
  - `apple-touch-icon.png`
  - `favicon-32.png`
- `manifest.webmanifest` toegevoegd of bijgewerkt voor installatie als web-app.
- iOS/iPadOS homescreen support verbeterd met Apple meta-tags en touch icon.

## v6.7 — Sprite Axes

### [Gemini] Geanimeerde sprite-axes

- Ronddraaiende vector-bijlen rond de speler vervangen door echte axe sprite (`axe.png`).
- Axe sprite draait zelfstandig (`axeSpin`) tijdens de orbit rond de speler voor extra dynamiek.
- Fallback vectorbijl behouden voor wanneer de sprite nog niet geladen is.
- Player sprite blijft spiegelen op basis van bewegingsrichting.
- Bears/brutes gebruiken eveneens facing logic zodat ze naar hun doel bewegen/kijken.

## v6.6 — Camp Decor

### [Gemini] Kampverfraaiing en opslag-mats

- Camp-decoraties vervangen door sprites waar mogelijk:
  - `campfire.png`
  - `mat_wood.png`
  - `mat_meat.png`
  - `mat_money.png`
- Kampvuur kreeg spriteweergave plus dynamische canvas-glow over het plaatje heen om het statische vuur levendig te laten voelen.
- Resource-opslag voor hout, vlees en geld visueel sterker gemaakt doordat resources bovenop mat-sprites worden getekend.
- Reset-knop visueel verplaatst richting midden bovenaan, zodat hij minder over de statuskaart rechtsboven valt.

## v6.5 — Reset Modal & Fixes

### [Claude] Reset infrastructuur + bugfixes

- Reset-modal toegevoegd ter vervanging van browser `confirm()`-popup.
- Twee-stappen-bevestiging met in-game styling, waarschuwingstekst en duidelijke cancel/confirm-knoppen.
- Reset-logica wist current `SAVE_KEY` plus alle `LEGACY_KEYS` en herlaadt daarna de game.
- `interWaveTimer` double-decrement bug gefixt door `updateWaves()` op te schonen met een `if/else-if` chain.
- Squared-distance optimalisatie voor de "kan ik nog hakken?"-check.
- `SAVE_KEY` gebumpt naar `frostfall-save-v6-5` met v6.4 toegevoegd aan `LEGACY_KEYS`.

## v6.4 — Sprite Perfection & Creature Facing

### [Gemini] Transparante sprites & status filters

- Player, survivor, bear, brute, tree, tower, ice tower en meat als transparante PNG-sprites verwerkt.
- Sprite-loader met fallback drawing toegevoegd zodat de game altijd werkt, ook bij trage verbinding.
- Canvas filters toegevoegd voor status-effecten:
  - `hitFlash` rood/sepia filter.
  - `slowTimer` blauw ijs-filter voor beesten.
- Player sprite spiegelt links/rechts op basis van beweging.
- Bears/brutes spiegelen op basis van bewegingsrichting of doel.
- Ronddraaiende bijlen rond de speler opnieuw toegevoegd nadat ze door sprite-integratie verdwenen waren.
- Build-preview met groen/rood plaatsingsvak toegevoegd of aangescherpt.

## v6.2 / v6.0 — Tactics & Sound

### [Gemini] Tactiek, audio & repair mechanics

- Web Audio API-integratie toegevoegd voor retro/8-bit geluidseffecten:
  - hakken
  - hits
  - schieten
  - upgrades
  - game-over
- Ice Tower toegevoegd aan build mode; deze schiet ijskristallen die vijanden tijdelijk vertragen.
- Reparatiesysteem geïmplementeerd: **Repareer Alles** inclusief dynamische kostenberekening in de Tactical Forge.
- Game loop uitgebreid naar tactischer base-defense/idle-survival model.
- Survivors/dorpsbewoners toegevoegd; NPC's zoeken bomen, hakken hout en brengen dat terug naar het kamp.
- Zonesysteem verder uitgewerkt:
  - Siberian Camp
  - Glacial Forest
  - Forgotten Ice Caves
- Save-migratie toegevoegd voor oudere save-formats, inclusief omzetting van oude `walls` / `towers` arrays naar `structures`.
- Start-grant/timber-fix toegevoegd zodat spelers niet vastlopen zonder hout.
- Mobiele joystick, HUD en upgradepanel verder gepolijst.

## v5.x — Timber / Survivors Foundation

- Hout als aparte resource toegevoegd of belangrijker gemaakt.
- Trees kregen HP, regrow timers en chop logic.
- Player kan automatisch hakken wanneer hij stilstaat bij een boom en er geen vijand te dichtbij is.
- Eerste basis voor survivors / automatische houtproductie zichtbaar in de latere v5/v6-lijn.
- Save compatibility vanaf v5-serie bleef meegenomen in latere versies.

## v4 — Turrets & Merger

### [Claude] Eerste turret-implementatie + bugfixes op Gemini's variant

- Gemini's v4-concept geïntegreerd in een werkende basis:
  - Build-mode met muur/toren-keuze.
  - Tower kost hout + vlees.
  - Towers schieten automatisch op nearest beast in range.
  - Projectile-systeem met velocity, lifetime en hit-detection.
  - Tower damage en attack speed schalen mee met speler-upgrades.
- Bugfixes op de v4-variant:
  - Ontbrekende tree constants toegevoegd.
  - `moneyMult` en `meatValue` upgrades teruggezet omdat ze nog gebruikt werden.
  - `closePanel()` geïmplementeerd.
  - Touch-handler voor build-type wisselen toegevoegd.
  - HP-init-check toegevoegd voor corrupte/lege saves.
- Camp visual elements toegevoegd:
  - houtstapel naast vuur
  - vleesrek
  - kookpot/kampvuur
  - geldstapel/tile
- Eerste duidelijke "progress is visible in the camp"-mechanic, later uitgebouwd met tiered sprites.

## v3 — Visual Upgrade

### [Gemini] Y-sorted depth + getekende creatures

- Y-sorted depth rendering: entities worden op Y-coördinaat getekend zodat objecten correct overlappen.
- Gelaagde dennenbomen met gradient en sneeuwkap.
- Polar bear met poot-animatie en koprichting.
- Parka-stijl character met bontkraag/hood.
- Background gradient per zone.
- Geanimeerde sneeuwval met parallax-drift.
- Kampvuur/oven met radiale glow.
- Glas/blur UI met betere knoppen en stat-kaarten.

### [Claude] Bugfixes op Gemini's v3

- `Math.collapse` bug vervangen door correcte `Math.floor(state.hp)`-achtige logica.
- Onjuiste `ctx.circle` fallback vervangen door directe `ctx.arc()` calls.
- Touch-handler voor muur plaatsen toegevoegd; mobiel werkte anders niet goed.

## v2 — Wood Chopping & Wall Building

### [Claude]

- Hout-resource toegevoegd met eigen tracker in de HUD.
- Auto-chop bomen: speler hakt automatisch als hij stilstaat naast een boom en geen beasts in de buurt zijn.
- Boom-HP-bar, wood-chip particles en houtopbrengst bij omhakken toegevoegd.
- Bomen groeien terug na cooldown.
- Build mode met grid-overlay toegevoegd.
- Tap/click een tile om een muur te plaatsen.
- Wall collision met X/Y-as splitsing zodat de speler niet vastloopt tegen muren.
- Beest target-finding: beasts kiezen muren op het pad naar de speler als prioriteit en breken die af.
- Wall Strength upgrade werkt ook op bestaande muren.
- HP-bars op damaged walls.

## v1 — Initial PoC

### [Claude] Eerste werkende prototype

Eerste werkende single-file HTML/Canvas prototype, geïnspireerd door Whiteout Survival reclame-screenshots. Mechanics die in deze versie al stonden:

- Auto-attack met ronddraaiende bijlen rond de speler.
- Top-down view met camera-volgt-speler.
- Joystick voor touch + WASD/pijltjes voor desktop.
- Drie zones met verschillende stats.
- Wave systeem met geleidelijke moeilijkheidsgraad.
- Boss-wave elke vijfde wave.
- Polar-bear-achtige vijanden met HP-bars, damage en hit-flash.
- Resource drops met magnetisme naar de speler.
- Upgradepaneel met meerdere paden.
- Persistent save via localStorage.
- Game over + respawn mechanic.
- Pulse-animation op upgrade-knop als er iets betaalbaar is.

## Bekende aandachtspunten / later mooi om te doen

- De game is nog één grote HTML/JS-file; prima voor een prototype, maar opsplitsen in modules kan later handig zijn.
- Balans blijft gevoelig door het samenspel tussen upgrades, towers, survivors, zones, adaptive scaling en boss-waves.
- Resource displays zijn nu veel mooier, maar kunnen later nog sterker worden door kleine animaties of highlights bij resource gain.
- Save-migratie is breed, maar bij grote toekomstige wijzigingen blijft expliciet testen verstandig.
- PWA/service-worker caching kan bij GitHub Pages soms een harde refresh of cache bump nodig hebben als assets veranderen.
- `mat_wood.png` en `mat_money.png` zijn sinds v7.3 niet meer functioneel nodig door het tiered pile-systeem, maar kunnen nog in de assets-map staan. Schoonmaak-kandidaat.
- Vlees-opslag gebruikt nog het oude `mat_meat.png` systeem; consistent zou zijn om dat later ook naar een tiered pile-systeem te brengen.

## v9.8.0 — Rat Scavenger Ecosystem

*Concept en ecosysteem-logica ontworpen met Gemini.*

- Nieuwe **rat thief**-event toegevoegd: verschijnt pas zodra wolven zijn ontgrendeld en er vlees te stelen is.
- Ratten zijn immuun voor speler, torens en jagers.
- Wolven die een rat met vlees zien, geven die tijdelijk voorrang boven speler of kamp.
- Als een wolf de rat vangt, valt het gestolen vlees weer op de grond.
- Nieuwe `rat.png`-sprite toegevoegd, bestiary bijgewerkt en service-worker cache gebumpt naar `frostfall-v9-8-0`.
