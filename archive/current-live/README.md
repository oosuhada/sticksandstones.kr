# Current Live Rebuild Archive

This folder preserves the deployed files that were used to reconstruct the current Vite + TypeScript site.

The raw deployed bundle and recovery prompt are intentionally excluded from this
public export. Keep those in the private working repository only when needed for
source reconstruction.

The maintainable rebuild lives in:

```text
src/
public/assets/
scripts/download-assets.mjs
```

Run:

```bash
npm install
npm run build
```

Portfolio comparison page:

```text
/case-study
/live-compare
/legacy-live
```
