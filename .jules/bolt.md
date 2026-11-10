
## 2026-11-10 - [Vanilla JS Layout Thrashing Optimization]
**Learning:** Using `innerHTML` or continuously `appendChild` inside a loop can lead to heavy layout thrashing in browser rendering, slowing down component generation.
**Action:** Always prefer `DocumentFragment` to batch vanilla JS DOM insertions during heavy loop iterations.
