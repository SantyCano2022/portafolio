# scripts/

One-off automation scripts. Not run during `npm run build` — invoke
manually with `node scripts/<name>.mjs`.

## screenshot-project.mjs

Captures desktop + mobile screenshots from a live URL using Puppeteer
and converts them to WebP via Sharp.

```sh
node scripts/screenshot-project.mjs <url> <outDir> <slug> [waitSelector]
```

Example:

```sh
node scripts/screenshot-project.mjs \
  https://crypto-dashboard-2-0.vercel.app \
  src/assets/images/projects/crypto-dashboard \
  crypto-dashboard
```

## screenshot-diane.mjs

Same idea but targets the locally-running `dashboard-diane` Vite dev
server. Useful when the project isn't deployed yet.

## trim-videos.mjs

Recompresses every `.mp4` under `public/videos/` to ~25 s / 1280px /
H.264 crf=28. Reduces total weight from ~200 MB to ~4 MB. Requires
`ffmpeg-static` (declared as optional dependency).

```sh
node scripts/trim-videos.mjs
```

The trimmed files **overwrite** the originals in place — keep a backup
elsewhere.

## generate-placeholder.mjs

Generates simple WebP placeholders for slots that don't have a real
screenshot yet. Handy while wiring up a new project.
