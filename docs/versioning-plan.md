# Versioning Plan

## Repository

Target remote:

```text
https://github.com/oosuhada/sticksandstones
```

This repository should track:

```text
current Vite + TypeScript rebuild
current public assets needed for the live site
portfolio comparison route
legacy WordPress custom theme snapshot
archive manifests and restoration notes
```

## Do Not Track Directly

The original Local WP backup is intentionally too broad for normal Git tracking:

```text
/Users/gabriel/Development/Local Sites/sticksandstones251022
```

Reasons:

```text
2.1 GB total size
local wp-config credentials and salts
database rows that may include users or form submissions
large uploads and generated plugin/cache files
old WordPress core and plugin dependencies
```

## Recommended Backup Policy

1. Keep the current Vite source in Git.
2. Keep the custom WordPress theme snapshot in Git.
3. Keep full Local WP exports in private storage, not in the public repo.
4. Store checksums for excluded DB/export files in `archive/legacy-wordpress/README.md`.
5. Tag important milestones:

```bash
git tag legacy-wordpress-snapshot-2025-10-22
git tag live-rebuild-recovered-2026-05-01
```

## Portfolio Case Study

Use:

```text
/case-study
```

This route tells the migration story without requiring the old WordPress runtime to be online.
