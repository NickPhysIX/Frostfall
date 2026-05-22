# Frostfall changelog

Dit changelog is samengesteld op basis van de versies, codefragmenten en assets die in deze ChatGPT-sessie zichtbaar waren. Het is dus geen volledige Git-geschiedenis, maar een zo eerlijk mogelijke reconstructie van de ontwikkeling tot en met **v7.4**.

## v7.4 — Adaptive Threat Scaling

- Vijanden schalen nu adaptief mee met de effectieve kracht van de speler.
- De scaling kijkt naar speler-DPS, attack speed, bereik en de praktische bijdrage van torens.
- Enemy HP krijgt een minimum time-to-live per type, zodat enemies bij hoge upgrades niet meer allemaal buiten beeld verdwijnen.
- Enemy damage schaalt slechts mild mee, zodat de aanpassing vooral voorkomt dat de speler god-tier wordt zonder de game meteen oneerlijk dodelijk te maken.
- Rewards schalen beperkt mee met de hogere HP, zodat sterkere enemies niet puur als tijdstraf voelen.
- `index.html` bijgewerkt naar **Frostfall v7.4 - Adaptive Threat Scaling**.
- Save key bijgewerkt naar `frostfall-save-v7-4-adaptive-scaling`; eerdere v7.3-save wordt automatisch gemigreerd.
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

- Rebalance toegepast na de introductie van zones, wolves en yeti’s, omdat de speler in hogere zones te snel underpowered raakte.
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
- Loading splash toegevoegd met app-icoon en Frostfall branding.
- Service worker toegevoegd of uitgebreid voor PWA/offline-achtige caching.

## v6.7 — Sprite Axes

- Ronddraaiende vector-bijlen rond de speler vervangen door een echte axe sprite.
- `axe.png` toegevoegd.
- Axe sprite draait zelfstandig tijdens de orbit rond de speler.
- Fallback vectorbijl behouden voor wanneer de sprite nog niet geladen is.
- Player sprite blijft spiegelen op basis van bewegingsrichting.
- Bears/brutes gebruiken eveneens facing logic zodat ze naar hun doel bewegen/kijken.

## v6.6 — Camp Decor

- Camp-decoraties vervangen door sprites waar mogelijk:
  - `campfire.png`
  - `mat_wood.png`
  - `mat_meat.png`
  - `mat_money.png`
- Kampvuur kreeg spriteweergave plus pulserende gloed om het levendiger te laten voelen.
- Resource-opslag voor hout, vlees en geld visueel sterker gemaakt.
- Reset-modal toegevoegd met expliciete bevestiging voordat progressie wordt gewist.
- Reset-knop visueel verplaatst richting midden bovenaan, zodat hij minder over de statuskaart rechtsboven valt.

## v6.5 / v6.4 — Sprite Perfection & creature facing

- Player, survivor, bear, brute, tree, tower, ice tower en meat als PNG-sprites verwerkt.
- JPEG-achtige achtergronden van sprites verwijderd en vervangen door transparante PNG’s.
- Sprite-loader toegevoegd met fallback naar vector/canvas drawing.
- Player sprite spiegelt links/rechts op basis van beweging.
- Bears/brutes spiegelen ook op basis van hun bewegingsrichting of doel.
- Ronddraaiende bijlen rond de speler opnieuw toegevoegd nadat ze door sprite-integratie verdwenen waren.
- Build-preview met groen/rood plaatsingsvak toegevoegd of aangescherpt.
- Reset-knop en modal verbeterd.

## v6.2 / v6.0 — Tactics & Sound

- Game loop uitgebreid naar een tactischer base-defense/idle-survival model.
- Survivors/dorpsbewoners toegevoegd; zij zoeken bomen, hakken hout en brengen dat terug naar het kamp.
- Build mode uitgebreid met meerdere constructies:
  - muur
  - toren
  - ijstoren
- Towers schieten automatisch op vijanden binnen bereik.
- Ice towers vertragen vijanden tijdelijk.
- Repair-systeem toegevoegd om muren/torens in één keer te herstellen tegen geldkosten.
- Audio-synthese toegevoegd voor onder andere hakken, hits, schieten, upgrades en game-over.
- Zonesysteem toegevoegd of verder uitgewerkt:
  - Siberian Camp
  - Glacial Forest
  - Forgotten Ice Caves
- Save-migratie toegevoegd voor oudere save-formats, inclusief omzetting van oude `walls`/`towers` arrays naar `structures`.
- Start-grant/timber-fix toegevoegd zodat spelers niet vastlopen zonder hout.
- Mobiele joystick, HUD en upgradepanel verder gepolijst.

## v5.x — Timber / Survivors foundation

- Hout als aparte resource toegevoegd of belangrijker gemaakt.
- Trees kregen HP, regrow timers en chop logic.
- Player kan automatisch hakken wanneer hij stilstaat bij een boom en er geen vijand te dichtbij is.
- Eerste basis voor survivors/automatische houtproductie zichtbaar in de latere v5/v6-lijn.
- Save compatibility vanaf v5-serie bleef meegenomen in latere versies.

## v4.1 — Camp Upgrade Edition

- Kern van het upgradepaneel, zones en bouwmechaniek werd uitgewerkt.
- Muren en torens als plaatsbare structuren toegevoegd of verstevigd.
- Tactical Forge / tabsysteem voor upgrades en zones verscheen in herkenbare vorm.
- Resource economy met money, meat, wood en HP werd herkenbaar als huidige basisloop.

## Eerdere prototypes

- Basis canvas-game met speler, golven, vijanden, resources en upgrades.
- Player movement via toetsenbord en later joystick.
- Eerste polar-bear achtige vijanden, wave progression, drops en eenvoudige combat.
- Visuele sneeuw/ijsstijl en HUD opgebouwd richting de huidige Frostfall-identiteit.

## Bekende aandachtspunten / later mooi om te doen

- De game is nog één grote HTML/JS-file; prima voor een prototype, maar later kan opsplitsen in modules handig zijn.
- Balans blijft gevoelig door het samenspel tussen upgrades, towers, survivors, zones en boss-waves.
- Resource displays zijn nu veel mooier, maar kunnen later nog nog sterker worden door kleine animaties of highlights bij resource gain.
- Save migratie is breed, maar bij grote toekomstige wijzigingen blijft het verstandig om save reset of save-versioning expliciet te testen.
- PWA/service-worker caching kan bij GitHub Pages soms een harde refresh of cache bump nodig hebben als assets veranderen.
