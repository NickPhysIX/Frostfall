# Frostfall v8.6 — Exchange All

Deze kleine QoL-update maakt de Exchange-tab sneller bruikbaar in de late game.

## Nieuw

- Elke exchange-regel heeft nu twee acties:
  - **Ruil 1×** voor één standaardbatch.
  - **Ruil alles** voor de maximaal mogelijke volledige omzetting.
- Bij elke regel zie je hoeveel batches maximaal mogelijk zijn, bijvoorbeeld `max 12×`.

## Technisch

- Nieuwe helper `maxExchangeBatches(recipe)` berekent de maximale volledige batch-count.
- Nieuwe helper `multiplyResources(obj, batches)` verwerkt totalen voor bulkruil.
- Exchange blijft een omzetting van bestaande voorraad en beïnvloedt lifetime collection stats niet.
- Cache-versie: `frostfall-v8-6`.
- Save key: `frostfall-save-v8-6-exchange-all`.
