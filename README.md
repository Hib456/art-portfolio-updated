# Elena Marlowe — Art Portfolio Website

A modern, elegant, fully responsive art portfolio website built with **pure HTML, CSS, and vanilla JavaScript** — no frameworks, no libraries.

---

## 📖 Project Overview

This project is a premium-style single-page portfolio for a fictional contemporary artist, **Elena Marlowe**. It showcases a hero banner, artist bio, a 9-piece artwork gallery, services, testimonials, and a validated contact form — all wrapped in a soft, neutral, gallery-inspired design aesthetic.

The site is designed to feel like a professional Behance / Adobe Portfolio page while remaining simple enough to read, edit, and extend.

---

## ✨ Features

- **Responsive design** — looks great on desktop, laptop, tablet, and mobile
- **Sticky navigation bar** that changes style on scroll
- **Mobile hamburger menu** with smooth slide-in animation
- **Smooth scrolling** to all page sections
- **Active navigation highlighting** as you scroll
- **Scroll reveal animations** using the Intersection Observer API
- **9-artwork responsive gallery** (CSS Grid) with hover overlay + "View Artwork" modal
- **Services section** with custom inline SVG icons
- **Testimonials** with circular initials avatars
- **Contact form** with real-time vanilla JS validation (name, email format, message length)
- **Back-to-top button** that appears after scrolling
- **Accessible markup** — semantic HTML5, proper heading hierarchy, alt text, keyboard focus states, ARIA attributes
- **CSS variables** for easy palette/theme customization
- Fully commented, organized code — no inline CSS or JS

---

## 📁 Folder Structure

```
Art-Portfolio-Website/
│── index.html
│── style.css
│── script.js
│── images/
│   ├── hero.jpg
│   ├── profile.jpg
│   ├── artwork1.jpg
│   ├── artwork2.jpg
│   ├── artwork3.jpg
│   ├── artwork4.jpg
│   ├── artwork5.jpg
│   ├── artwork6.jpg
│   ├── artwork7.jpg
│   ├── artwork8.jpg
│   ├── artwork9.jpg
│── README.md
```

---

## 🛠 Technologies Used

- **HTML5** — semantic structure
- **CSS3** — Grid, Flexbox, custom properties (variables), media queries, transitions/animations
- **Vanilla JavaScript (ES6)** — DOM APIs, Intersection Observer, form validation
- **Google Fonts** — Playfair Display (headings) + Poppins (body text)

No React, Vue, Angular, Bootstrap, Tailwind, or jQuery is used anywhere in this project.

---

## ▶️ How to Run Locally

1. Unzip/extract `Art-Portfolio-Website.zip` to any folder on your computer.
2. Open the extracted `Art-Portfolio-Website` folder.
3. Double-click `index.html` — it will open directly in your default web browser.

That's it! No build tools, servers, or installations are required.

> Tip: For the best experience with relative paths (especially if you plan to add more assets later), you can also serve the folder with a simple local server, e.g. `npx serve` or the VS Code "Live Server" extension — but this is optional.

---

## 🖼 How to Replace Artwork

All images live inside the `images/` folder and are placeholder abstract art generated for this template.

To use your own artwork:

1. Prepare your images (JPEG or PNG recommended, ideally optimized/compressed for the web).
2. Replace the files in `images/` **using the exact same filenames** (e.g. replace `artwork1.jpg` with your own image also named `artwork1.jpg`), **or**
3. Give your images new filenames and update the corresponding `src="images/..."` paths in `index.html` (there are 9 gallery images, plus `hero.jpg` and `profile.jpg`).
4. Update the `alt` attributes on each `<img>` tag to accurately describe your new artwork for accessibility and SEO.
5. Update the artwork titles, mediums, and years in the gallery markup and in each `data-title`, `data-medium`, and `data-year` attribute (used by the "View Artwork" modal).

Recommended image sizes:
- `hero.jpg` — 1920×1080px (landscape, will be cropped to fill the hero banner)
- `profile.jpg` — 800×800px (square, cropped to a 4:5 portrait frame)
- `artwork1.jpg`–`artwork9.jpg` — 900×1100px (portrait orientation works best with the gallery grid)

---

## 🎨 Customizing Colors & Fonts

All core design tokens are defined at the top of `style.css` inside `:root`:

```css
:root {
  --color-bg: #faf8f5;
  --color-accent: #a9713f;
  --font-heading: 'Playfair Display', serif;
  --font-body: 'Poppins', sans-serif;
  ...
}
```

Change these values to instantly re-theme the entire site.

---

## 🙌 Credits

- Fonts: [Google Fonts](https://fonts.google.com) — Playfair Display & Poppins
- Artwork images: Original abstract placeholder art generated programmatically for this template (royalty-free, safe to replace)
- Icons: Hand-coded inline SVG (no icon library dependency)
- Built by: An AI-assisted front-end development workflow, for demonstration/template purposes

---

Feel free to customize, extend, and use this template for your own art portfolio project. Enjoy! 🎨
