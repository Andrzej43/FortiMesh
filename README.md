# 🤖 MechaRoyale

**100 mechs drop into the arena. One walks out.**

MechaRoyale is a fast, browser-based battle royale where you pilot a mech against 99 rivals in a shrinking storm field. Scavenge weapons, manage your heat, and be the last mech standing — no build step, no install, just open a file and play.

![status](https://img.shields.io/badge/status-playable-3ddc97)
![platform](https://img.shields.io/badge/platform-browser-4da3ff)
![tech](https://img.shields.io/badge/stack-vanilla%20JS%20%2F%20Canvas-ff5470)
![license](https://img.shields.io/badge/license-MIT-lightgrey)

---

## 🎮 Play It

MechaRoyale is a single self-contained HTML file — there's nothing to build or install.

1. Clone the repo:
   ```bash
   git clone https://github.com/<your-username>/mecharoyale.git
   cd mecharoyale
   ```
2. Open `index.html` in any modern browser (Chrome, Firefox, Edge, Safari).
3. Click **DEPLOY MECH** and fight.

Or just double-click `index.html` — no server required.

Want it hosted? Enable **GitHub Pages** on this repo (Settings → Pages → deploy from `main`) and it's live at `https://<your-username>.github.io/mecharoyale/`.

---

## 🕹️ Controls

| Input | Action |
|---|---|
| `W` `A` `S` `D` | Move |
| Mouse | Aim |
| Left Click / `Space` | Fire weapon |
| `Shift` | Overdrive thrust (short speed burst, has cooldown) |
| `R` | Reload current weapon |

---

## ⚔️ Features

- **16-mech free-for-all** — you vs. 15 AI opponents, each with independent behavior (roam, loot, engage, flee to zone).
- **Shrinking storm field** — the safe zone contracts and relocates over time, forcing engagements. Stand outside it and take continuous damage.
- **Four weapon archetypes**, each scavenged from the battlefield:
  - **Autocannon** — reliable rate of fire, low heat.
  - **Scatter Gun** — devastating up close, wide spread.
  - **Railgun** — high single-target burst damage, slow to fire.
  - **Missile Pod** — homing projectiles that track nearby targets.
- **Heat management** — fire too much and your mech overheats, forcing a cooldown/reload window.
- **Loot economy** — health repair kits, ammo caches, and weapon pickups scattered across the map, contested by AI mechs too.
- **Live HUD** — HP, heat, and ammo bars, a real-time kill feed, a minimap with the storm boundary, and an alive-mech counter.
- **Win/loss summary** — see your final placement and kill count when the match ends.

---

## 🧠 How It Works

MechaRoyale is built with plain **HTML5 Canvas + vanilla JavaScript** — no frameworks, no bundler, no dependencies. Everything (rendering, physics, AI, UI) lives in `index.html`.

- **Game loop**: a single `requestAnimationFrame` loop drives movement, combat, AI decisions, zone shrinkage, and rendering each frame.
- **AI mechs** run a lightweight finite-state behavior (`roam → loot → fight → retreat to zone`), picking the nearest relevant target each state and reacting to the closing storm.
- **Combat** uses simple circle-collision projectiles, with per-weapon damage, heat cost, spread, and (for missiles) homing steering.
- **Camera** smoothly follows the player and everything is drawn relative to it, so the arena feels like a real 2D battlefield rather than a fixed viewport.

No build tooling means anyone can open the file, read the code top to bottom, and start modifying it immediately.

---

## 🛠️ Customize / Extend

Some easy places to start hacking:

- **Add a weapon** — add an entry to `WEAPON_TYPES` in `index.html` with `dmg`, `rate`, `spread`, `speed`, `heat`, `ammoMax`, and `color`.
- **Tune difficulty** — adjust `MAX_MECHS`, AI engagement range (`nd < 620` in `updateAI`), or mech `speed`.
- **Change the storm** — edit `phaseDuration` and the shrink math inside `updateZone` to make matches faster or slower.
- **Reskin mechs** — mech color is procedural (`hue`), so visual identity is cheap to restyle in `drawMech`.

Pull requests welcome — see [Roadmap](#-roadmap) below for ideas that would make great first contributions.

---

## 🗺️ Roadmap

- [ ] Multiplayer (WebSocket-based lobbies)
- [ ] Additional maps / terrain obstacles
- [ ] Mech loadout customization before drop
- [ ] Sound effects & music
- [ ] Mobile / touch controls
- [ ] Persistent leaderboard

---

## 📁 Repo Structure

```
mecharoyale/
├── index.html   # The entire game — markup, styles, and game logic
├── README.md    # You are here
└── LICENSE      # MIT license
```

---

## 📄 License

Released under the [MIT License](LICENSE) — do whatever you want with it, just keep the license notice.

---

**Drop in. Survive the storm. Be the last mech standing.**
