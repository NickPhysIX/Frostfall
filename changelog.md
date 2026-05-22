# Frostfall changelog

Dit changelog is samengesteld op basis van de versies, codefragmenten en assets die in deze ChatGPT-sessie zichtbaar waren, aangevuld met bijdragen vanuit een parallelle Claude-sessie. Het is dus geen volledige Git-geschiedenis, maar een zo eerlijk mogelijke reconstructie van de ontwikkeling tot en met **v7.3**.

Attributie-conventie:
- Items zonder prefix: ontstaan in deze ChatGPT-sessie of via Niels' eigen werk/sprite generation.
- Items met **[Claude]**: bijdragen vanuit een parallelle Claude-sessie (PoC-architectuur, bug fixes, system design, modal/loading/SW infrastructuur, Bestiary/wolf/yeti logic).
- Items met **[Gemini]**: stilistische bijdragen en feature-implementaties vanuit de initiële AI-assistent (visual upgrades, web-audio, tactische features, sprite-rendering).

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

### Code en cache

- `index.html` bijgewerkt naar **Frostfall v7.3 - Resource Sprite Update**.
- Nieuwe sprite keys toegevoegd aan de sprite-loader.
- Nieuwe helperdata toegevoegd voor pile tiers en stump selectie.
- Save key bijgewerkt naar `frostfall-save-v7-3-resource-sprites`.
- Backward compatibility behouden voor oudere save keys, waaronder v7.2, v6.7, v6.6, v6.5, v6.4, v6.2, v6.0, v5.x en v4.1.
- `sw.js` cache-versie bijgewerkt naar `frostfall-v7-3`.
- Nieuwe sprites toegevoegd aan de service-worker pre-cache.
- `v7.3_changes.txt` toegevoegd als korte delta-notitie.

## v7.2 — Balance hotfix

- Rebalance toegepast na de introductie van zones, wolves en yeti's, omdat de speler in hogere zones te snel underpowered raakte.
- Tower-bereik en tower damage zijn merkbaar verhoogd ten opzichte van de eerdere v7.x-balans.
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

## v7.0 — Wolf & Yeti expansion

- Nieuwe enemy sprites toegevoegd:
  - `wolf.png`
  - `yeti.png`
- Nieuwe enemy types in de spawnpool verwerkt.
- Zone-unlocks gekoppeld aan nieuwe vijanden.
- Yeti/wolf sprites gemaakt met transparante achtergrond en passend bij de bestaande pixel-art ijsberen.
- Eerste versie waarin Forgotten Ice Caves duidelijk een eigen dreigingsprofiel kreeg.

### [Claude] Bestiary architectuur en spawn-systeem

- **Roguelike-style spawn pool ontworpen** in plaats van mutually-exclusive biome-zones: zone-unlocks voegen vijand-types toe aan de spawn pool in plaats van de speler te dwingen tussen biomes te kiezen. Unlocks zijn cumulatief en permanent.
- `pickBeastKind()` herschreven als weighted random pool die uitbreidt op basis van `state.zonesUnlocked` en `state.wave`. Bear-weight schaalt naar beneden naarmate er meer types worden ontgrendeld, zodat variety natuurlijk toeneemt.
- **Wolf-mechanic**: `spawnWolfPack()` spawnt 2-3 wolves per spawn-event (pack hunting). Stats: 65% HP, 85% damage, 135% snelheid, 60% wall damage. Eigen gele HP-bar-kleur als visuele tell.
- **Yeti-boss-event**: `isYetiWave()` triggert elke 10e wave als Ice Caves unlocked is. Override van normale wave: 1 yeti + 3 support beasts uit de unlocked pool. "❄️ YETI INCOMING ❄️" floating text + gameover-soundcue voor dramatische aankondiging. Stats: 14x bear HP, 2.6x damage, 3.2x wall damage, 12x money drop, 10x meat drop. Cyaan HP-bar.
- **Per-kind render-scale** in `drawBeast` (yeti 1.45x, brute 1.08x, wolf 1.05x, bear 1.0x) zodat de yeti écht boss-tier groot oogt zonder zijn collision-size te beïnvloeden.
- **Vector-fallbacks** voor wolf en yeti met onderscheidende silhouetten (wolf: lager-en-langer met snuit en oren; yeti: massief met ijshorens en gloeiende ogen) zodat het spel speelbaar is voordat sprites geladen zijn.
- **World-tier scaling**: elke ontgrendelde zone geeft +35% HP/damage aan alle spawns. Voorkomt "gratis variety" — meer vijand-types betekent ook moeilijker spel.
- **Bestiary tab UI** gemaakt: vervangt de oude "Reis naar zone"-knoppen door een leesbaar overzicht van alle vijand-types met icon, naam, beschrijving en unlock-conditie. Locked entries zijn gedimd met 🔒. Zone-unlocks zijn nu geframed als "ontgrendelt Frost Wolf" in plaats van zone-switching.
- **Yeti wave indicator** in HUD: wave-counter toont `10 ❄️` of `20 ❄️` als er een yeti-wave aankomt.

## v6.9 — PWA Offline

### [Claude] Service worker + loading splash

- **Service worker `sw.js` toegevoegd** voor echte offline PWA functionaliteit:
  - Pre-cache van alle assets (PNG's, HTML, manifest) bij installatie
  - Cache-first strategy voor assets (snel laden, werkt offline)
  - Network-first strategy voor HTML (zodat updates doorkomen zonder cache-clear)
  - Auto-cleanup van oude cache-versies bij activate
  - `CACHE_VERSION` bumpen forceert re-cache van alle assets
- **Service worker registration** in `index.html` achter `if ('serviceWorker' in navigator)` check zodat het in geen-PWA-omgevingen geen problemen geeft.
- **Loading splash screen** met progress bar:
  - Splash met app-icoon, "FROSTFALL v6.9" branding en groene progress bar
  - Telt sprites terwijl ze laden (`X/Y` indicator)
  - Fade-out animatie met DOM-removal als alles binnen is
  - 8-seconde fallback timeout zodat de splash niet vasthangt bij eerste laad of slechte verbinding
- **Sprite-loading verbouwd**: `SPRITE_LIST` array + `loadSprite()` met progress callback in plaats van losse `loadSprite()`-calls per asset. Schaalt mee met latere uitbreidingen.

## v6.8 — Survivor facing & app icon

- Survivors draaien nu visueel mee met hun bewegingsrichting.
- Web-app/PWA iconen toegevoegd:
  - `icon-192.png`
  - `icon-512.png`
  - `icon-1024.png`
  - `apple-touch-icon.png`
  - `favicon-32.png`
- `manifest.webmanifest` toegevoegd of bijgewerkt voor installatie als web-app.
- iOS/iPadOS homescreen support verbeterd met Apple meta-tags en touch icon.

## v6.7 — Sprite Axes

### [Gemini] Geanimeerde Sprite Axes
- Ronddraaiende vector-bijlen rond de speler vervangen door een echte axe sprite (`axe.png`).
- Axe sprite draait zelfstandig (`axeSpin`) tijdens de orbit rond de speler voor extra dynamiek in de animatie.
- Fallback vectorbijl behouden voor wanneer de sprite nog niet geladen is.
- Player sprite blijft spiegelen op basis van bewegingsrichting.
- Bears/brutes gebruiken eveneens facing logic zodat ze naar hun doel bewegen/kijken.

## v6.6 — Camp Decor

### [Gemini] Kampverfraaiing en Opslag-mats
- Camp-decoraties vervangen door sprites waar mogelijk (`campfire.png`, `mat_wood.png`, `mat_meat.png`, `mat_money.png`).
- Kampvuur kreeg spriteweergave plus een dynamische canvas-glow over het plaatje heen om het statische vuur levendig te laten voelen.
- Resource-opslag voor hout, vlees en geld visueel sterker gemaakt doordat resources bovenop de mat-sprites worden getekend.
- Reset-knop visueel verplaatst richting midden bovenaan, zodat hij minder over de statuskaart rechtsboven valt.

## v6.5 — Reset Modal & Fixes

### [Claude] Reset infrastructuur + bug fixes

- **Reset-modal toegevoegd** ter vervanging van browser `confirm()`-popup. Twee-stappen-bevestiging met nette in-game styling (passend bij de Tactical Forge), waarschuwingstekst en duidelijke cancel/confirm knoppen. Werkt ook op iOS waar `confirm()` soms onderdrukt wordt.
- **Reset-logica**: clear van current SAVE_KEY plus alle LEGACY_KEYS in één klap, gevolgd door `location.reload()`. Voorkomt dat oude saves blijven hangen.
- **`interWaveTimer` double-decrement bug gefixt**: in de oude `updateWaves()` kon de timer in dezelfde tick twee keer worden verminderd op de overgang van `waveCleared` naar `!waveCleared`. Vervangen door een schone `if/else-if` chain. Subtiel — niet visible voor speler — maar onnetjes.
- **Squared-distance optimalisatie** voor de "kan ik nog hakken?"-check: `enemyTooClose` gebruikt nu `dx*dx + dy*dy < threshSq` in plaats van `Math.hypot()`. Scheelt een `Math.sqrt` per beast per frame.
- **SAVE_KEY bumped** naar `frostfall-save-v6-5` met v6.4 toegevoegd aan `LEGACY_KEYS` voor automatische migratie.

## v6.4 — Sprite Perfection & creature facing

### [Gemini] Transparante Sprites & Status Filters
- Player, survivor, bear, brute, tree, tower, ice tower en meat als transparante PNG-sprites verwerkt (ter vervanging van JPG's met achtergrond).
- Sprite-loader met Fallback drawing toegevoegd zodat de game altijd werkt, ook bij een trage verbinding.
- CSS-achtige canvas filters toegevoegd voor status-effecten (`hitFlash` rood/sepia filter, `slowTimer` blauw ijs-filter voor beesten).
- Player sprite spiegelt links/rechts op basis van beweging (`ctx.scale(-1, 1)`).
- Bears/brutes spiegelen ook op basis van hun bewegingsrichting of doel.
- Ronddraaiende bijlen rond de speler opnieuw toegevoegd nadat ze door sprite-integratie verdwenen waren.
- Build-preview met groen/rood plaatsingsvak toegevoegd of aangescherpt.

## v6.2 / v6.0 — Tactics & Sound

### [Gemini] Tactiek, Audio & Repair mechanics
- **Web Audio API integratie** toegevoegd voor retro 8-bit geluidseffecten (hakken, hits, schieten, upgrades, game-over) gegenereerd zonder externe mediabestanden.
- **Ice Tower (❄️)** toegevoegd aan build mode: deze toren schiet ijskristallen die vijanden tijdelijk 40% vertragen (`slowTimer`).
- **Reparatiesysteem** geïmplementeerd ("Repareer Alles") inclusief dynamische kostenberekening in de Tactical Forge.
- Game loop uitgebreid naar een tactischer base-defense/idle-survival model.
- **Survivors/dorpsbewoners toegevoegd**; een idle-mechanic waarbij NPC's bomen zoeken, hout hakken en dit terugbrengen naar het kamp.
- Zonesysteem verder uitgewerkt (Siberian Camp, Glacial Forest, Forgotten Ice Caves).
- Save-migratie toegevoegd voor oudere save-formats, inclusief omzetting van oude `walls`/`towers` arrays naar `structures`.
- Start-grant/timber-fix toegevoegd zodat spelers niet vastlopen zonder hout.
- Mobiele joystick, HUD en upgradepanel verder gepolijst.

## v5.x — Timber / Survivors foundation

- Hout als aparte resource toegevoegd of belangrijker gemaakt.
- Trees kregen HP, regrow timers en chop logic.
- Player kan automatisch hakken wanneer hij stilstaat bij een boom en er geen vijand te dichtbij is.
- Eerste basis voor survivors/automatische houtproductie zichtbaar in de latere v5/v6-lijn.
- Save compatibility vanaf v5-serie bleef meegenomen in latere versies.

## v4 — Turrets & merger

### [Claude] Eerste turret-implementatie + bug fixes op Gemini's variant

- **Gemini's v4-concept (build-mode met muur/toren keuze) geïntegreerd** in een werkende basis:
  - Twee-knops bouw-selectie (`buildType = 'wall' | 'tower'`)
  - Tower kost 30 hout + 20 vlees, heeft 1.5x wall HP, schiet automatisch op nearest beast in 280px range
  - Projectile-systeem met velocity, lifetime en hit-detection
  - Tower damage en attack speed schalen mee met `statValue('damage')` / `statValue('attackSpeed')`, dus upgrades voor de bijl maken ook torens beter
- **Bug fixes op Gemini's v4 die het anders zou breken**:
  - `TREE_REGROW_TIME`, `TREE_WOOD`, `TREE_HP` constants ontbraken maar werden wel gebruikt — toegevoegd
  - `statValue('moneyMult')` en `statValue('meatValue')` werden aangeroepen terwijl die upgrades uit de UPGRADES-array waren gehaald — teruggezet
  - `closePanel()` werd aangeroepen maar nooit gedefinieerd — geïmplementeerd
  - Touch-handler voor build-type wisselen ontbrak — `click` + `touchend` toegevoegd
  - `state.hp <= 0` init-check ontbrak, kon HP op 0 doen blijven bij corrupte save — toegevoegd
- **Camp visual elements** toegevoegd: houtstapel naast vuur die groeit met `state.wood`, vleesrek dat groeit met `state.meat`, kookpot boven kampvuur met opstijgende damp, geld-stapel-tile die groeit met `state.money` (boven de €50). Eerste poging tot "your progress is visible in the camp"-mechanic die in v7.3 verder is uitgebouwd met tiered sprites.

## v3 — Visual upgrade

### [Gemini] Y-sorted depth + getekende creatures
- Y-sorted depth rendering: alle entities (trees, walls, beasts, drops, player) gerenderd op volgorde van Y-coördinaat, waardoor objecten elkaar correct overlappen.
- Gelaagde dennenbomen met gradient en sneeuwkap.
- Polar bear met poot-animatie en kop die richting target draait.
- Parka-stijl character met bontkraag en hood.
- Background gradient per zone.
- Geanimeerde sneeuwval met parallax-drift.
- Houtskool-oven als kampvuur met radiale glow.
- Glas/blur UI met betere knoppen en stat-kaarten.

### [Claude] Bug fixes op Gemini's v3
- `Math.collapse ? ''` in HUD update vervangen door `Math.floor(state.hp)` (Math.collapse bestaat niet, HP-bar werkte verkeerd).
- `ctx.circle ? ctx.circle(...) : ctx.arc(...)` ternary vervangen door directe `ctx.arc()` call (ctx.circle is geen Canvas2D method).
- Touch-handler voor muur plaatsen toegevoegd; Gemini had alleen `click` event waardoor op mobiel geen muren geplaatst konden worden.

## v2 — Wood chopping & wall building

### [Claude]
- **Hout-resource** toegevoegd met eigen tracker in HUD.
- **Auto-chop bomen**: speler hakt automatisch als hij stilstaat naast een boom en geen beasts in de buurt zijn. HP-bar op de boom, wood-chip particles bij elke chop tick, +5 hout bij omhakken.
- **Bomen groeien terug** na 30s, met visuele sapling-stippel die voortgang toont.
- **Build mode** met grid-overlay: tap een tile om een muur van 10 hout te plaatsen, tap opnieuw op 🧱 om uit build mode te gaan.
- **Wall collision** met X/Y-as splitsing zodat de speler niet vastloopt tegen muren (probeert axis-by-axis te bewegen).
- **Beest target-finding**: beasts kiezen muren op het pad naar de speler als prioriteit; hakken die kapot voor ze de speler proberen te bereiken.
- **Spikes op walls** als visuele detail, hp-bar op damaged walls.
- **Wall Strength upgrade** die ook bestaande muren upgraded.

## v1 — Initial PoC

### [Claude] Eerste werkende prototype

Eerste werkende game als single-file HTML/Canvas, gebouwd vanaf nul in één pass op basis van Whiteout Survival reclame-screenshots. Mechanics die in deze versie al stonden:

- **Auto-attack** met ronddraaiende bijlen om de speler (vector-art), schaalt mee met `damage`, `attackSpeed`, `range` upgrades.
- **Top-down view** met camera-volgt-speler.
- **Joystick** voor touch + WASD/pijltjes voor desktop, auto-detect op basis van pointer type.
- **3 zones** (Camp, Frozen Forest, Ice Cave) met verschillende stats.
- **Wave systeem** met geleidelijke moeilijkheidsgraad, boss-wave elke 5e wave.
- **Polar bear vijanden** met hp-bars, damage en hit-flash.
- **Resource drops** (geld, vlees) met magnetisme naar de speler.
- **Upgrade-paneel** met 8 paden (damage, attack speed, range, move speed, max HP, regen, meat yield, money yield).
- **Persistent save** via localStorage.
- **Game over + respawn** mechanic.
- **Pulse-animation** op upgrade-knop als er iets afford-able is.

## Bekende aandachtspunten / later mooi om te doen

- De game is nog één grote HTML/JS-file; prima voor een prototype, maar later kan opsplitsen in modules handig zijn.
- Balans blijft gevoelig door het samenspel tussen upgrades, towers, survivors, zones en boss-waves.
- Resource displays zijn nu veel mooier, maar kunnen later nog sterker worden door kleine animaties of highlights bij resource gain.
- Save migratie is breed, maar bij grote toekomstige wijzigingen blijft het verstandig om save reset of save-versioning expliciet te testen.
- PWA/service-worker caching kan bij GitHub Pages soms een harde refresh of cache bump nodig hebben als assets veranderen.
- `mat_wood.png` en `mat_money.png` zijn sinds v7.3 niet meer in gebruik (vervangen door tiered pile-systeem) maar staan nog in de assets folder. Schoonmaak-kandidaat.
- Vlees-opslag gebruikt nog het oude `mat_meat.png` systeem; consistent zou zijn om dat ook naar een tiered pile-systeem te brengen.
