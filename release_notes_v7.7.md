# Frostfall v7.7 — Victory Screen Update

## Nieuw in deze versie
- Een volledig uitgewerkt **eindscherm** toegevoegd voor het einde van een succesvolle run.
- De finale gebruikt nu een **lente-achtergrond** (`victory-screen.png`) die visueel contrasteert met de winterse gameplay.
- De **victory modal** toont nu een duidelijk overzicht van de run-statistieken:
  - Waves Overleefd
  - Vijanden Verslagen
  - Gebouwde Structuren
  - Hout Verzameld
  - Vlees Verzameld
  - Goud Verzameld
- Een prominente knop **"NIEUWE RUN STARTEN"** toegevoegd om meteen een verse run te beginnen.
- **Service worker cache** en versie-informatie bijgewerkt zodat de nieuwe assets goed doorkomen.
- **Save-migratie** behouden: bestaande v7.6-saves worden nog gelezen.

## Bestanden toegevoegd / gewijzigd
- `victory-screen.png` — nieuwe eindscherm-afbeelding
- `index.html` — bijgewerkte victory modal en styling
- `sw.js` — cache bump en precache van nieuwe asset
- `changelog.md` — uitgebreid met v7.7-notitie
- `v7.7_changes.txt` — korte delta-notitie

## Opmerking
Als een oude versie van de site nog zichtbaar blijft op GitHub Pages of mobiel, doe dan een **harde refresh** of sluit de app/webview even volledig af zodat de nieuwe service worker en assets worden opgehaald.
