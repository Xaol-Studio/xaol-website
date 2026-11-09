## 2026-11-09 - DocumentFragment Batch Optimization
**Learning:** Found layout thrashing due to continuous `appendChild` inside list rendering loops for the demos (`pyme-manager.html` and `cotizador-refaccionaria.html`).
**Action:** Always batch DOM insertions with `DocumentFragment` before calling `appendChild` on the parent container to prevent unnecessary layout recalcs.
