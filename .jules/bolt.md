## 2023-11-03 - DocumentFragment performance in loops
**Learning:** `demo/pyme-manager.html` and `demo/cotizador-refaccionaria.html` append elements to the DOM individually inside loops using native `appendChild`. This can cause layout thrashing and poor performance for large datasets. `demo/restaurante-pedidos.html` is already using `DocumentFragment`. Memory correctly points out that batch insertions using `DocumentFragment` is ideal for vanilla JS.
**Action:** Always use `DocumentFragment` when appending multiple elements to the DOM in loops.
