## 2024-05-18 - DocumentFragment for DOM Inserts
**Learning:** Appending directly to the DOM multiple times inside a loop (like `tbody.appendChild(tr)` in `demo/pyme-manager.html`) causes severe layout thrashing and slows down rendering for large datasets.
**Action:** Use `DocumentFragment` to batch insertions. This aligns with memory constraints: "When appending multiple elements to the DOM in vanilla JavaScript (e.g., inside loops), use DocumentFragment to batch insertions and prevent layout thrashing."
