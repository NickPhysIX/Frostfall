# Frostfall

**Frostfall** is een kleine browsergame / web-app waarin je een kamp in een ijzige wildernis verdedigt tegen steeds zwaardere waves van vijanden. Het spel combineert actie, idle-resource gathering en base defense: je loopt rond, hakt hout, verzamelt resources, bouwt muren en torens, koopt upgrades en probeert de volgende blizzard te overleven.

De game draait volledig als statische webpagina met HTML, CSS, JavaScript, canvas en PNG-sprites. Er is geen serverlogica nodig.

## Wat zit erin?

- Eén canvas-game in `index.html`.
- Mobiele joystick en toetsenbordbesturing.
- Resources: geld, vlees, hout en HP.
- Upgradepaneel: **Tactical Forge**.
- Build mode met muren, torens en ijstorens. Muren worden als doorlopende palissade getekend (paaltjes, dwarsbalken, sneeuwkap) en zijn doorloopbaar voor speler, survivors en jagers, maar blokkeren vijanden.
- Survivors/dorpsbewoners die automatisch hout verzamelen.
- Meerdere zones met eigen difficulty en vijand-unlocks.
- Bestiary met vijandtypes, inclusief Brute Frost Wolf, Brute Yeti, Crow Thief en Rat Scavenger.
- Speciale resource-dreigingen: kraaien kunnen vlees stelen en wegvliegen; ratten kunnen vlees stelen, maar worden door maximaal twee wolven tegelijk bejaagd zodat één rat niet de hele wolfpack afleidt.
- Exchange-tab in de Tactical Forge voor resource-omzetting met verlies, inclusief **Ruil 1×** en **Ruil alles**.
- Adaptieve enemy-scaling: vijanden blijven relevant als je damage, attack speed, range en torens sterk hebt opgewaardeerd.
- Yeti-waves met één grote Yeti plus snelle Brute Yeti-support enemies.
- Sprite-gebaseerde player, survivors, vijanden, bomen, torens, resources en kampdecoratie.
- PWA/web-app support met manifest, app iconen en service worker.
- LocalStorage savegame met backward compatibility voor oudere Frostfall-versies.
- Pauzescherm met veilige reset-flow.
- Achtergrondmuziek met aparte main, boss en victory tracks.
- Geluidsknop om muziek én sound effects aan/uit te zetten, met opgeslagen voorkeur.
- Audio-lifecycle fix: muziek en SFX stoppen wanneer de browser/tab of iOS/iPadOS web-app naar de achtergrond gaat.
- Sample-gebaseerde sound effects voor houthakken, bijl-aanvallen, crow-caw events, wave-start dierengeluiden, rat squeaks en player death, met synth-fallback waar relevant.
- Belangrijke event-SFX gebruiken tijdelijke music-ducking zodat kraaien, ratten, wave-start dierencues en player death hoorbaar blijven over de muziek.

- Endgame-finale vanaf wave 50: **Winter’s End**.
- Sequentiële Alpha Boss Rush: Alpha Wolf, Alpha Brute Bear en Alpha Yeti.
- Victory-scherm met run-statistieken en een veilige Nieuwe Run-knop.

## Huidige release-notes

De meest recente samenvatting staat in:

- `release_notes_v9.8.3.md` — korte release notes voor de laatste wijziging.
- `FROSTFALL_RELEASE_NOTES_THROUGH_V9_8_3.md` — samenvatting van de ontwikkeling tot en met de Animal Audio Cues-update.

## Starten

### Via GitHub Pages

Plaats de inhoud van deze map in je GitHub Pages repository. Open daarna de GitHub Pages URL in Safari, Chrome of een andere browser.

### Lokaal testen

Omdat service workers en sommige browserfeatures beter werken via HTTP dan via `file://`, kun je lokaal een kleine statische server starten:

```bash
python3 -m http.server 8000
```

Open daarna:

```text
http://localhost:8000
```

## Installeren als web-app op iPhone/iPad

Op iOS/iPadOS:

1. Open de GitHub Pages URL in Safari.
2. Tik op de deelknop.
3. Kies **Zet op beginscherm**.
4. Bevestig de naam **Frostfall**.

De app gebruikt `apple-touch-icon.png` en de PWA-iconen uit het manifest.

## Besturing

### Mobiel / touchscreen

- Gebruik de joystick rechtsonder om te bewegen.
- Tik op **⏸ PAUZE** bovenin om het spel tijdelijk stil te zetten of veilig opnieuw te starten.
- Tik op **🔊 GELUID** / **🔇 GELUID** om zowel achtergrondmuziek als sound effects aan of uit te zetten.
- Tik op de groene upgradeknop linksonder om de Tactical Forge te openen.
- Gebruik de **Exchange**-tab om hout/vlees/geld met verlies om te zetten wanneer één resource de bottleneck wordt. Kies **Ruil 1×** voor een kleine omzetting of **Ruil alles** voor de maximaal mogelijke volledige batch.
- Tik op de oranje buildknop om build mode aan of uit te zetten.
- Kies in build mode wat je wilt plaatsen: muur, toren of ijstoren.
- Tik op de kaart om te bouwen.
- Groen bouwvak = plaatsing kan.
- Rood bouwvak = geblokkeerd of te weinig resources.

### Desktop

- Bewegen met WASD of pijltjestoetsen.
- Klik op de upgradeknop voor upgrades.
- Klik op de buildknop om build mode te gebruiken.
- Pauzeren met de **⏸ PAUZE** knop, **P** of **Escape**.
- Geluid aan/uit met de **🔊 GELUID** knop.


## Endgame: Winter’s End

Wanneer je **Forgotten Ice Caves** hebt ontgrendeld en wave 50 bereikt, start de finale. Normale waves stoppen en je krijgt drie Alpha-bazen achter elkaar:

1. **Alpha Wolf** — snel en agressief.
2. **Alpha Brute Bear** — breekt hard door muren en torens.
3. **Alpha Yeti** — de eindbaas van de run.

Versla je de Alpha Yeti, dan verschijnt het victory-scherm **De winter is voorbij** met een korte eindstand. De knop **Nieuwe Run Starten** wist de save en begint opnieuw.

## Pauze en reset

De oude losse resetknop is vervangen door een veiliger pauzescherm. Tik of klik op **⏸ PAUZE**. Daar kun je **Doorspelen** kiezen of **Spel opnieuw starten**. Bij opnieuw starten krijg je eerst een extra waarschuwing; pas na **Ja, reset** wordt de localStorage-save gewist.

## Resources

### Geld

Geld wordt vooral gebruikt voor upgrades, repairs en zone-unlocks. Vijanden droppen geld wanneer ze verslagen worden.

### Vlees

Vlees komt van vijanden en wordt gebruikt voor bepaalde upgrades en torens. Vlees heeft ook een eigen visuele opslag in het kamp.

### Hout

Hout komt van bomen. Je gebruikt hout voor muren en torens. Hout wordt verzameld door:

- zelf stil te staan bij een boom, zolang er geen vijand te dichtbij is;
- survivors, zodra je die upgrade hebt gekocht.

De houtopslag groeit visueel mee via vier sprite-niveaus.

### HP

Als vijanden de speler bereiken, verlies je HP. Regen upgrades herstellen langzaam HP. Bij 0 HP krijg je Frostbite en kun je respawnen.

## Combat

De speler heeft ronddraaiende bijlen. Vijanden binnen bereik krijgen automatisch schade op basis van je damage, attack speed en range upgrades.

Torens vallen automatisch vijanden binnen bereik aan. IJstorens doen minder damage dan gewone torens, maar vertragen vijanden tijdelijk.

## Bouwen

### Muur

Goedkoopste verdediging. Muren blokkeren vijanden en kopen tijd.

### Toren

Schiet automatisch op vijanden binnen bereik. Kost hout en vlees.

### IJstoren

Schiet ijsprojectielen. Doet minder schade, maar geeft slow. Handig om groepen of grote vijanden te vertragen.

## Upgrades

In de Tactical Forge kun je onder andere verbeteren:

- Bijl Kracht — meer damage.
- Gooi Snelheid — sneller aanvallen.
- Bijl Bereik — groter bereik.
- Snelheid — sneller bewegen.
- Gezondheid — meer maximale HP.
- HP Herstel — regeneratie.
- Hout Hakken — sneller hout verzamelen.
- Muur/Toren HP — sterkere constructies.
- Vlees Opbrengst — meer vlees uit drops.
- Goud Koers — meer geld uit drops.
- Dorpsbewoners — survivors die automatisch hout verzamelen.

## Vijanden

### Polar Bear

De standaardvijand. Komt vanaf het begin voor.

### Brute Bear

Verschijnt later in de run. Traag en taai, met extra muurschade. Richt zich sterker op zwakke verdediging.

### Frost Wolf

Wordt ontgrendeld via Glacial Forest. Snel, lichter, minder muurschade, maar gevaarlijk als hij doorbreekt.

### Yeti

Wordt ontgrendeld via Forgotten Ice Caves. Verschijnt vanaf latere waves als groot event/boss-moment. Veel HP, flinke beloning, maar bedoeld als zware test van je kamp.

## Zones

### Siberian Camp

Startzone. Basisvijanden en relatief veilige progression.

### Glacial Forest

Ontgrendelt wolven en maakt de vijandpool dynamischer.

### Forgotten Ice Caves

Ontgrendelt yeti-events en zwaardere late-game druk.

Zone-unlocks voegen nieuwe vijandtypes toe zonder oude zones automatisch moeilijker te maken.

## Opslaan en resetten

Frostfall slaat voortgang op in `localStorage`. Dat betekent dat je progressie in dezelfde browser bewaard blijft.

Vanaf v7.8.1 houdt het spel lifetime run-statistieken bij voor het eindscherm: waves voltooid, vijanden verslagen, gebouwde structuren en totaal verzameld hout/vlees/goud. Bij oudere saves worden sommige historische waarden zo goed mogelijk geschat omdat eerdere versies die data nog niet exact opsloegen.

De resetknop opent eerst een bevestigingsvenster. Pas na bevestiging worden save data en oudere legacy saves verwijderd.

## Bestanden

Belangrijke bestanden in deze build:

- `index.html` — hoofdgame.
- `sw.js` — service worker / cache.
- `manifest.webmanifest` — PWA metadata.
- `apple-touch-icon.png`, `icon-192.png`, `icon-512.png`, `icon-1024.png` — app iconen.
- `player.png`, `survivor.png`, `bear.png`, `brute.png`, `wolf.png`, `yeti.png` — character/enemy sprites.
- `tree.png`, `stump_1.png`, `stump_2.png`, `stump_3.png` — boom- en stump-sprites.
- `tower.png`, `ice_tower.png` — structure sprites.
- `axe.png` — ronddraaiende bijlsprite.
- `meat.png` — vlees-drop sprite.
- `wood_pile_1.png` t/m `wood_pile_4.png` — houtopslag niveaus.
- `money_pile_1.png` t/m `money_pile_4.png` — geldopslag niveaus.
- `mat_meat.png`, `campfire.png` — kampdecoratie.
- `main_loop.mp3`, `boss_loop.mp3`, `victory_cue.mp3` — achtergrondmuziek.
- `sfx_chop.mp3`, `sfx_axe_hit.mp3` — sample-gebaseerde sound effects voor houthakken en bijl-aanvallen.
- `changelog.md` — reconstructie van zichtbare wijzigingen.

## Ontwikkelnotitie

De game is bewust nog compact en single-file gehouden. Dat maakt hem makkelijk te uploaden naar GitHub Pages en makkelijk te tweaken. Bij verdere groei kan het nuttig worden om de code op te splitsen in modules, bijvoorbeeld `entities.js`, `rendering.js`, `balance.js`, `input.js` en `assets.js`.


## Latest version
Current packaged build: **v9.3 — Reinforced Repairs**.

## v8.7 — Hunters & Compass

- Added subtle edge-of-screen compass arrows: white points back to camp, red points to off-screen enemies.
- Enemy direction arrows are capped to three to avoid clutter; boss/alpha enemies get stronger indicators.
- Added `hunter.png` and a new **Jagers** upgrade.
- Hunters are permanent camp defenders, capped at 4 like survivors.
- Hunters patrol near camp, fire weak ranged projectiles, and use a stronger close-range melee/spinning-axe attack.
- Hunter damage scales from axe power only, without a separate upgrade tree.
- Updated save/cache versioning for v8.7.




## v9.3 Reinforced Repairs

- Structures zijn sterker gemaakt.
- Bestaande saves migreren bestaande muren/torens naar de nieuwe HP-balans met behoud van schadepercentage.
- Villagers repareren nu automatisch structures onder 50% HP.
- Repareren kost hout: 1 hout per reparatie-tick voor 22 HP herstel.
- Als er niets onder 50% HP is, blijven villagers primair hout verzamelen.

## v9 Meat Stockpiles

- Vleesopslag in het kamp gebruikt nu vier visuele niveaus, passend bij de bestaande hout- en goudstapels.
- De voorraad groeit van één stuk vlees naar kleine stapel, volle kist en grote voorraad.
- Nieuwe assets: `meat_pile_1.png` t/m `meat_pile_4.png`.

## v8.9 Hunter Combat Polish

- Hunters ondersteunen het kamp nu visueel duidelijker met twee aanvalsstijlen:
  - ranged arrow/spear projectiles;
  - korte spinning-axe melee animatie met vier bijlen.
- De v8.8 palisade walls blijven de standaard wall-rendering.


## v9.4 note — villager auto-repair balance

Villagers can help save damaged structures, but they remain resource gatherers first. They only auto-repair structures below 50% HP, protect a 25 wood reserve, work in short bursts, and stop around 70% HP. Full repairs still use the player-controlled money repair option in the Tactical Forge.


## v9.7 note — Crow Thief

A new nuisance enemy can now appear when the camp has enough meat. The crow flies toward the meat stockpile, steals 1 meat, and attempts to escape. If it is shot down after stealing, it drops the meat back as a pickup. This is meant as light resource pressure rather than a full combat threat.

## v9.6 note — arrow towers & full compass

Regular towers now visually fire arrows instead of orange orbs, matching the hunter/ranged-defense language more closely while ice towers keep their blue slow shot. The compass system also now shows all off-screen enemies rather than a small capped subset, with distance-scaled red arrows so far threats stay subtle and nearby threats read clearly.

## v9.5 note — palisade snow polish

The palisade wall renderer received a visual-only cleanup. Horizontal beams and their snow strips now stop cleanly at the center of end/corner posts, while individual procedural snow caps remain on visible posts. No gameplay or save-data changes.

## v9.7.1 note — Crow Bestiary Fix

De Crow Thief staat nu ook in de Bestiary-tab. Hij wordt zichtbaar zodra je 25+ vlees hebt of lifetime 25+ vlees hebt verzameld.


## v9.7.2 — Crow Heist Tuning
- Crow timing adjusted: first crow check after ~45 seconds once you have 25+ meat; successful crow spawns then recur roughly every 75–120 seconds, with only one active crow at a time.
- Crows are now protected during the approach phase: player axes, towers and hunters ignore/avoid damaging them until they have stolen meat.
- After stealing meat, the crow becomes vulnerable and can be shot down to recover the stolen meat.
- Crow Bestiary text updated to explain the heist behavior.
- Service-worker cache bumped to `frostfall-v9-7-2`.


## v9.7.3 — Crow Escape Balance

- Crow Thief krijgt na het stelen van vlees een hogere HP-pool en korte ontsnappings-grace.
- Hierdoor is de vlucht met het gestolen vlees zichtbaar en wordt de kraai niet meer meteen in de vleesstapel verwijderd.
- Nieuwe `crow_caw.mp3` SFX toegevoegd; bij de diefstal klinkt 2–3× een kraai.
- De bestaande geluid/mute-knop blijft master mute voor muziek én SFX.
- Service-worker cache bumped to `frostfall-v9-7-3`.

## v9.8.1 — Wolf Hunt-Rat Cap

- Wolf/rat-ecosysteem gebalanceerd: maximaal twee wolven of Brute Wolves mogen tegelijk achter dezelfde rat met vlees aan.
- Bij meer kandidaten kiezen wolven op afstand: de dichtstbijzijnde twee krijgen de hunting-rol.
- De overige wolven blijven hun gewone AI volgen en blijven dus relevant als threat voor speler en kamp.
- Geen save-impact; service-worker cache gebumpt naar `frostfall-v9-8-1`.

## v9.8.0 — Rat Scavenger Ecosystem

- Added a new **rat thief** event that can appear once wolves are unlocked and there is meat to steal.
- Rats are immune to the player, towers, and hunters.
- Wolves that spot a rat carrying meat will temporarily prioritize the rat over the player or camp.
- If a wolf catches the rat, the stolen meat drops back to the ground.
- Added the new `rat.png` sprite, updated the bestiary, and bumped the service-worker cache to `frostfall-v9-8-0`.
