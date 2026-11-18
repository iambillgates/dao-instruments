# DAO Instruments

Five playable browser music instruments in one Next.js app. Open it, pick an
instrument, and play — everything runs client-side with the Web Audio API
and Three.js.

## The instruments

- **PANDORA** — a 3D Rubik's cube with a 16-step sequencer.
- **WAKE** — a dark, walkable 3D forest. Touch trees, rocks, ground, and the
  light beam to turn them into sound and build a loop.
- **CHAOS** — a strange-attractor synth (Lorenz / Rössler / Aizawa) where the
  attractor's motion drives the sound.
- **GATHER** — upload an image and it becomes a 3D point cloud that scatters
  and gathers while playing pentatonic chords.
- **Circuit** — a 4-slot circuit solved live with Ohm's law, driving a synth
  played from the keyboard.

## Run it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm start       # serve the production build
```

## Deploy (Vercel)

Import this repository in Vercel — the framework preset is auto-detected as
Next.js, no custom build settings needed.

## How it's built

- `app/page.tsx` — the hub + the five instrument views (client component).
- `lib/dao.ts` — the instrument logic (audio engine, sequencers, Three.js
  scenes), ported from the original single-file page and run once after mount.
- `app/globals.css` — all styling.
- Three.js loads from CDN (`three@0.152.2`) in the root layout; if it fails
  to load, the 3D instruments show a message instead of crashing.
- No backend, no database, no tracking.

## Inspiration

Inspired by the playable browser instruments at
[be-of-dao.com](https://be-of-dao.com) — rebuilt here as an original
interpretation, not a copy.
