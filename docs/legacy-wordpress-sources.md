# Legacy WordPress Sources

This project compares the rebuilt Vite site against the original WordPress Creative theme.

## Local Source Folders

- `/Users/gabriel/Development/Local Sites/sticksandstones251022`
  - Early Creative theme source archive.
  - The important source files are under `app/public/wp-content/themes/creative`.
  - The included `app/sql/local.sql` currently points to `twentytwentyfive`, so it is not enough by itself to render the Creative homepage exactly.

- `/Users/gabriel/Development/Local Sites/sticksandstones2`
  - LocalWP site with a live MySQL data directory.
  - Registered in Local as `sticksandstones2.local`.
  - Uses the `creative` theme and has Creative/Layers widget data in the database.
  - Current dev proxy target: `http://127.0.0.1:10008`.

- `/Users/gabriel/Development/Local Sites/sticksandstones`
  - Later edited WordPress version.
  - Registered in Local as `sticksandstones.local`.
  - Previous dev proxy target: `http://127.0.0.1:10003`.

## Current Compare Route

`/live-compare` uses `/legacy-live/` by default in the public export. This keeps the GitHub repository small and avoids publishing a full static WordPress snapshot.

For local reconstruction work, `/legacy-wp/` can still be used as a Vite dev proxy. The proxy points to `sticksandstones2.local` so the left frame can show the older Creative WordPress archive when the local WordPress site is running.

Override targets when needed:

```bash
LEGACY_WP_TARGET=http://127.0.0.1:10003 LEGACY_WP_HOST=sticksandstones.local npm run dev
```

## Deployment Direction

Do not deploy LocalWP, PHP, or MySQL for the portfolio comparison. If a static WordPress snapshot is needed later, publish it as a reviewed artifact or release asset rather than committing the full snapshot into the public Git history.

## Preservation Notes

Avoid committing full LocalWP folders directly to this repo because they contain large uploads, databases, logs, and generated runtime files. Preserve them as separate archives or Git LFS artifacts, and keep this repo focused on:

- the Vite rebuild source,
- the comparison viewer,
- source manifests for the WordPress backups,
- small scripts/docs needed to recreate the static legacy snapshot.
