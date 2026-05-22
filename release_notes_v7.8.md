# Frostfall v7.8 — Lifetime Stats Fix

Deze release rondt de huidige game-loop af door het victory screen betrouwbaarder te maken.

## Belangrijkste wijziging

Het eindscherm toont nu lifetime run-statistieken in plaats van alleen de huidige voorraad. Hout, vlees en goud blijven dus meetellen nadat ze zijn uitgegeven.

## Nieuwe tracking

- Waves voltooid
- Vijanden verslagen
- Gebouwde structuren
- Totaal verzameld hout
- Totaal verzameld vlees
- Totaal verzameld goud

## Save-migratie

Oude saves uit v1.0–v7.7 worden nog steeds gelezen. Omdat oudere versies niet alle lifetime-data opsloegen, vult v7.8 ontbrekende waarden best-effort aan met huidige voorraad, bestaande structuren, wave-progressie en een conservatieve kill-inschatting. Nieuwe runs vanaf v7.8 worden exact bijgehouden.
