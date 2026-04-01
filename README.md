# Cafe Sweetheart ☕

> A cozy corner for good food & better vibes — Golf Green, Kolkata.

A modern, responsive café website built with **React** + **plain CSS**.

---

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run locally
```bash
npm start
```
Opens at **http://localhost:3000**

### 3. Build for production
```bash
npm run build
```

---

## Project Structure

```
cafe-sweetheart/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.jsx      ← Fixed nav with hamburger menu
│   │   ├── Hero.jsx        ← Landing hero with floating animation
│   │   ├── About.jsx       ← Story section with feature chips
│   │   ├── Menu.jsx        ← Filterable menu cards
│   │   ├── Gallery.jsx     ← Instagram-style photo grid
│   │   ├── Location.jsx    ← Google Maps embed + info cards
│   │   └── Footer.jsx      ← Footer with isDemo watermark toggle
│   ├── data/
│   │   ├── menuData.js     ← All menu items (data-driven)
│   │   └── galleryData.js  ← Gallery image URLs
│   ├── App.jsx             ← Root component
│   ├── index.js            ← React entry point
│   └── index.css           ← All styles + animations
└── package.json
```

---

## Toggling the Demo Watermark

Open `src/components/Footer.jsx` and change the `isDemo` flag at the top:

```js
const isDemo = true;   // Shows: "Demo Version • Crafted for Cafe Sweetheart by Pritam Bose"
const isDemo = false;  // Shows: "© Cafe Sweetheart"
```

---

## Design Tokens

| Token         | Value     | Usage                  |
|---------------|-----------|------------------------|
| `--pink`      | `#f8c8dc` | Badges, tags, accents  |
| `--cream`     | `#fff5e4` | Page background        |
| `--brown`     | `#6b4f4f` | Primary text           |
| `--brown-light`| `#9a7070`| Muted / secondary text |
| `--brown-dark` | `#4a3535`| Headings, footer bg    |

---

## Sections

| Section   | Description                                      |
|-----------|--------------------------------------------------|
| Hero      | Full-screen landing with floating emoji & CTAs   |
| About     | Story paragraph + 4 feature chips                |
| Menu      | 5 categories, filter tabs, card-based layout     |
| Gallery   | 6-photo grid with hover zoom effect              |
| Location  | Google Maps embed + address / hours info cards   |
| CTA       | Call-to-action with Directions & Contact buttons |
| Footer    | Links, socials, conditional `isDemo` watermark   |

---

Crafted with 💖 for **Cafe Sweetheart** by **Pritam Bose**
