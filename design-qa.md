# Search overlay design QA

## Evidence

- Source visual truth:
  - `/Users/fuyugen/.codex/visualizations/2026/09/08/01a08269-8c86-7670-ae6f-07910145e316/search-audit/02-reference-search-open.png`
  - `/Users/fuyugen/.codex/visualizations/2026/09/08/01a08269-8c86-7670-ae6f-07910145e316/search-audit/03-reference-predictive-results.png`
  - `/Users/fuyugen/.codex/visualizations/2026/09/08/01a08269-8c86-7670-ae6f-07910145e316/search-audit/06-reference-mobile-search-open.png`
  - `/Users/fuyugen/.codex/visualizations/2026/09/08/01a08269-8c86-7670-ae6f-07910145e316/search-audit/07-reference-mobile-results.png`
- Implementation screenshots:
  - `/Users/fuyugen/.codex/visualizations/2026/09/08/01a08269-8c86-7670-ae6f-07910145e316/overlay-qa/01-desktop-open.png`
  - `/Users/fuyugen/.codex/visualizations/2026/09/08/01a08269-8c86-7670-ae6f-07910145e316/overlay-qa/02-desktop-results.png`
  - `/Users/fuyugen/.codex/visualizations/2026/09/08/01a08269-8c86-7670-ae6f-07910145e316/overlay-qa/05-mobile-open-revised.png`
  - `/Users/fuyugen/.codex/visualizations/2026/09/08/01a08269-8c86-7670-ae6f-07910145e316/overlay-qa/06-mobile-results-revised.png`
- Combined comparison evidence: `overlay-qa/compare-desktop-open.png`, `compare-desktop-results.png`, `compare-mobile-open-revised.png`, and `compare-mobile-results-revised.png`.
- Desktop viewport: 1440 x 913 CSS px; source and implementation: 1440 x 913 px; device scale factor 1.
- Mobile viewport: 390 x 844 CSS px; source and implementation: 390 x 844 px; device scale factor 1.
- States: overlay open with empty input; live results shown after input.

## Findings

- No actionable P0, P1, or P2 findings remain.
- Typography: the overlay intentionally retains the Kagyu Source Han Serif system rather than copying the reference shop font; hierarchy and legibility are consistent with the existing site.
- Spacing and layout: the top search bar, dimmed retained page, full-width desktop results, and mobile single-column results match the selected interaction pattern without horizontal overflow.
- Colors: the existing paper, maroon, and red tokens are preserved; the backdrop supplies sufficient visual separation from the retained page.
- Images: the overlay introduces no new raster assets and leaves page imagery unchanged. Background imagery remains visible only in the empty overlay state, matching the reference behavior.
- Copy: all controls and status text are literal Traditional Chinese labels for search, clear, close, loading, empty, and result-count states.
- Icons: the existing Header search icon is retained. Text labels are used for clear and close controls instead of introducing a new icon dependency.
- Accessibility and interaction: input autofocus, focus trap, Escape close, backdrop close, focus return, body scroll lock, same-tab result navigation, live result status, and reduced-motion behavior were verified.
- Browser console: no errors during page fallback or overlay search flow.

## Comparison history

1. Initial mobile comparison found a P2 mismatch: the empty overlay covered the entire viewport with white instead of retaining the dimmed source page.
2. The mobile panel was changed to remain search-bar height while empty and expand to full viewport only when results or an error are present.
3. Post-fix evidence is `compare-mobile-open-revised.png` and `compare-mobile-results-revised.png`; the result passed at 390 x 844 with no horizontal overflow.

Focused region comparison was not needed after the revised mobile capture because the full-view captures clearly show the complete search bar, both text controls, result typography, and viewport edges at native density.

final result: passed
