# Whiskey Archive - Tasting Room Journal

A polished, responsive whiskey review blog featuring an immersive landing page and **nine in-depth whiskey review posts**. Built with modern semantic HTML5, custom tasting room CSS styling (amber, cream, and charred oak accents), and accessible vanilla JavaScript.

---

## 🥃 Project Overview

This project was built according to the specifications in [`prompt.md`](prompt.md):
- **Landing Page (`index.html`)**:
  - Welcoming Hero Section with amber aesthetic and calls to action.
  - Brief introduction to the blog highlighting the three sensory pillars (Color, Smell, Taste).
  - Clearly organized grid of **nine review cards**, each showing the whiskey's name, description, style, specs, and relevant image.
  - Interactive category filtering (All, Scotch, American, World Whiskeys) and live instant search.
  - Educational Tasting Room Guide explaining glassware, color observation, nosing, and palate evaluation.
- **Nine Individual Review Posts (`reviews/*.html`)**:
  - **The Macallan 12 Year Old Double Cask** (Speyside Single Malt)
  - **Lagavulin 16 Year Old** (Islay Single Malt)
  - **Woodford Reserve Distiller's Select** (Kentucky Straight Bourbon)
  - **Redbreast 12 Year Old** (Single Pot Still Irish Whiskey)
  - **Yamazaki 12 Year Old** (Japanese Single Malt)
  - **The Balvenie 14 Year Old Caribbean Cask** (Speyside Single Malt)
  - **Ardbeg 10 Year Old** (Islay Single Malt)
  - **Michter's US*1 Single Barrel Rye** (Kentucky Straight Rye)
  - **Highland Park 12 Year Old "Viking Honour"** (Orkney Islands Single Malt)
- **Sensory Breakdown on Every Post**:
  - **Color**: Appearance in the glass, clarity, hue, viscosity, and clinging tears (legs).
  - **Smell**: Aromas, initial bouquet, aerated nuances, and aromatic layers.
  - **Taste**: Palate flavors, texture, mid-palate complexity, and finish duration.
  - Relevant bottle or tasting image with graceful fallback handling.
- **Image Reliability & Graceful Fallbacks**:
  - All images are bundled locally in `images/` for full offline compatibility.
  - An SVG placeholder (`images/placeholder.svg`) is included and triggered automatically if any image fails to load, avoiding broken-image icons.

---

## 📁 Directory Structure

```
Whiskey_Reviews/
├── index.html                     # Landing page with hero, introduction, and 9-card grid
├── css/
│   └── styles.css                 # Warm tasting room theme (amber, cream, charred oak)
├── js/
│   └── main.js                    # Mobile menu, filtering, search, and image fallback handler
├── images/
│   ├── hero-whiskey.jpg           # Hero section backdrop image
│   ├── macallan-12.jpg            # The Macallan 12 tasting image
│   ├── lagavulin-16.jpg           # Lagavulin 16 tasting image
│   ├── woodford-reserve.jpg       # Woodford Reserve tasting image
│   ├── redbreast-12.jpg           # Redbreast 12 tasting image
│   ├── yamazaki-12.jpg            # Yamazaki 12 tasting image
│   ├── balvenie-14-caribbean.jpg  # The Balvenie 14 tasting image
│   ├── ardbeg-10.jpg              # Ardbeg 10 tasting image
│   ├── michters-us1-rye.jpg       # Michter's Rye tasting image
│   ├── highland-park-12.jpg       # Highland Park 12 tasting image
│   └── placeholder.svg           # Graceful SVG placeholder if an image fails to load
├── reviews/
│   ├── macallan-12.html           # Macallan 12 review post
│   ├── lagavulin-16.html          # Lagavulin 16 review post
│   ├── woodford-reserve.html      # Woodford Reserve review post
│   ├── redbreast-12.html          # Redbreast 12 review post
│   ├── yamazaki-12.html           # Yamazaki 12 review post
│   ├── balvenie-14-caribbean.html # Balvenie 14 Caribbean Cask review post
│   ├── ardbeg-10.html             # Ardbeg 10 review post
│   ├── michters-us1-rye.html      # Michter's US*1 Rye review post
│   └── highland-park-12.html      # Highland Park 12 review post
├── prompt.md                      # Original project requirements
└── README.md                      # Documentation
```

---

## 🚀 How to View Locally

Because this website uses clean, standard HTML, CSS, and JavaScript with bundled local images, you can view it directly without any build step:

### Option 1: Direct File
Double-click `index.html` or open it in any modern browser (Chrome, Firefox, Safari, Edge):
```bash
# On Linux:
xdg-open index.html
```

### Option 2: Local HTTP Server (Python)
```bash
python3 -m http.server 8000
```
Then navigate to: `http://localhost:8000`

### Option 3: Node / npx
```bash
npx serve .
```

---

## 🎨 Visual Design Highlights
- **Color Palette**: Amber `#d4882e`, warm gold `#e6a84c`, honey glow `#f3c87a`, charred oak `#0f0b08` / `#18120d`, and parchment cream `#faf6ee`.
- **Typography**: Classic serif headings (`Cinzel`) paired with legible modern sans-serif body text (`Plus Jakarta Sans`).
- **Responsive Layout**: Fluid grids and flexbox designed for phones, tablets, laptops, and ultra-wide displays.
- **Accessible & Robust**: Semantic HTML5 tags, high contrast ratios, responsive touch targets, and resilient image loading fallbacks.

## Link to this Repo
[https://github.com/fvelazquez9491/Whiskey_Reviews/tree/main](https://github.com/fvelazquez9491/Whiskey_Reviews/tree/main)
