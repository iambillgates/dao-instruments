# DAO Instruments

Five playable browser music instruments in one page. Open it, pick an
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

No build step, no dependencies to install — it's a single static page.

```bash
# any static server works, e.g.
npx serve .
# or
python3 -m http.server
```

Then open `index.html`. You can also open the file directly in a browser.

## Deploy (Vercel)

Import this repository in Vercel as a static site. There is no build
command and no framework preset needed — `index.html` at the root is served
as-is.

## Tech

- Web Audio API for all sound synthesis
- Three.js (via CDN) for the 3D instruments
- Canvas 2D for CHAOS
- No backend, no database, no tracking

## Inspiration

Inspired by the playable browser instruments at
[be-of-dao.com](https://be-of-dao.com) — rebuilt here as an original
interpretation, not a copy.
