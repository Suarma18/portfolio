# suarma.dev

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black&style=flat-square)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white&style=flat-square)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?logo=tailwind-css&logoColor=white&style=flat-square)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?logo=framer&logoColor=white&style=flat-square)](https://www.framer.com/motion/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)

Personal portfolio website for **Putu Suarma Widiada, S.Kom.**, a full-stack web developer and graphic designer based in Denpasar, Bali. Built with React 19, Vite 7, Tailwind CSS v4, and Framer Motion, featuring a **Glass Surface** design system.

## Features

- **Glass Surface UI**: Translucent multi-layered glass surfaces (`backdrop-filter: blur`), specular inner highlights, ambient background light orbs, and full `prefers-reduced-motion` / `prefers-reduced-transparency` support.
- **Interactive Canvas & 3D UI Components**:
  - **`GradientASCII`**: Interactive ASCII horizon wave canvas with pointer repulsion and click ripples in the Hero section.
  - **`ProfileCard`**: 3D tilt-reactive holographic profile card with glare and parallax layers.
  - **`IconFolder`**: Glass skill folders (`Web Development` & `Design & Multimedia`) with fanned SVG app tiles that spread open on scroll, hover, tap, or keyboard interaction and highlight matching skill chips.
  - **`PixelCard` + Toolbox Marquee**: Interactive 2D canvas pixel-wave and cursor-spotlight card wrapping the two-row infinite marquee of daily tools.
  - **`WebShowcase`**: Apple-grade macOS Studio Viewport with responsive Desktop/Mobile frame switcher, live deployment beacons, full-stack architecture drawer modal, and an interactive 6-project Bento matrix for Enterprise Web Development projects.
  - **`DesignShowcase`**: Interactive Bento Studio Gallery with sub-category filtering, stacked-slide hover fan previews, Canva board integration, and a multi-slide **Glass Lightbox Modal** (keyboard, touch-swipe, and filmstrip navigation) for Design & Multimedia projects.
- **Bilingual (`EN` / `ID`)**: Instant switching between English and Indonesian with all copy centralized in `src/data/content.jsx`.
- **Dark & Light Themes**: Persistent theme toggle powered by CSS custom properties and Tailwind CSS v4 tokens.
- **Portfolio Sections**:
  - **Hero**: Role typewriter, animated stat counters, social links, and 3D `ProfileCard`
  - **About**: Bio, interests & hobbies, quick facts, and live availability card
  - **Skills & Technologies**: Interactive `IconFolder` cards + `PixelCard` daily toolbox marquee
  - **My Journey**: Tabbed timeline of work/organizational experience (including UPT TIPD, Freelance, and UKM Multimedia ITB STIKOM Bali) and education
  - **Selected Projects**: Switchable showcase (`WebShowcase` for Web, `DesignShowcase` for Design & Multimedia)
  - **Contact**: Validated inquiry form (`mailto:` integration with localized fallback), one-click email copy, and direct WhatsApp/LinkedIn links

## Tech Stack

| Category | Technology |
| :--- | :--- |
| Framework & Build | [React 19](https://react.dev/), [Vite 7](https://vitejs.dev/) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) (`@tailwindcss/vite`), CSS Custom Properties |
| Motion & Transitions | [Framer Motion 12](https://www.framer.com/motion/) |
| Interactive Visuals | HTML5 Canvas 2D (`GradientASCII`, `PixelCard`), CSS 3D Transforms & Clip-Path SVG (`ProfileCard`, `IconFolder`, `WebShowcase`, `DesignShowcase`) |
| Icons | Official Brand SVGs (`public/*.svg` & `src/components/toolIcons.jsx`) |
| Typography | Plus Jakarta Sans, Space Grotesk, JetBrains Mono |

## Project Structure

```text
portfolio/
├── public/                 # Static assets (brand SVGs, favicon, project images)
│   ├── adobe-after-effects.svg
│   ├── adobe-illustrator.svg
│   ├── adobe-photoshop.svg
│   ├── adobe-premiere.svg
│   ├── codeigniter.svg
│   ├── favicon.svg
│   ├── javascript.svg
│   ├── mysql.svg
│   ├── php.svg
│   ├── postman.svg
│   ├── react.svg
│   ├── wordpress.svg
│   └── images/
│       └── projects/       # Profile photo, web screenshots, and design portfolio assets
├── src/
│   ├── components/         # Page sections and layout components
│   │   ├── ui/             # Interactive UI & canvas components
│   │   │   ├── BackToTop.jsx
│   │   │   ├── DesignShowcase.jsx
│   │   │   ├── GradientASCII.jsx & GradientASCII.css
│   │   │   ├── IconFolder.jsx
│   │   │   ├── LanguageToggle.jsx
│   │   │   ├── PixelCard.jsx & PixelCard.css
│   │   │   ├── ProfileCard.jsx & ProfileCard.css
│   │   │   ├── Reveal.jsx
│   │   │   ├── ScrollProgress.jsx
│   │   │   ├── SectionHeading.jsx
│   │   │   ├── ThemeToggle.jsx
│   │   │   └── WebShowcase.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── socialIcons.jsx
│   │   └── toolIcons.jsx
│   ├── data/
│   │   └── content.jsx     # Bilingual dictionary (EN / ID) and shared metadata
│   ├── lib/
│   │   ├── i18n.jsx        # Language context provider
│   │   ├── motion.js       # Framer Motion animation variants
│   │   └── theme.jsx       # Theme context provider (dark / light)
│   ├── App.jsx             # Root application layout
│   ├── index.css           # Global styles, Glass Surface tokens, and utilities
│   └── main.jsx            # Application entry point
├── index.html              # HTML template
├── package.json
└── vite.config.js
```

## Getting Started

### Prerequisites

Node.js 18 or later.

### Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the local development server:
   ```bash
   npm run dev
   ```

3. Open `http://localhost:5173` in your browser.

## Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the development server with hot module replacement |
| `npm run build` | Builds the production bundle into `dist/` |
| `npm run preview` | Starts a local web server to preview the production build |

## Customizing Content

All text, experience entries, skills, projects, and contact links live in [`src/data/content.jsx`](src/data/content.jsx):

- **Contact & Profile Metadata**: Edit `meta` for your name, email, phone number, WhatsApp URL, and LinkedIn profile.
- **Bilingual Copy**: Update `content.en` and `content.id` for each section (`profile`, `about`, `skills`, `journey`, `projects`, `contact`, `footer`).
- **Skill Folder Icons**: Configure fanned app tiles and SVG paths in [`src/components/ui/IconFolder.jsx`](src/components/ui/IconFolder.jsx).
- **Projects**: Add or update entries in `projects.items` (`category: 'web'` for `WebShowcase` or `category: 'design'` for `DesignShowcase`) and place images inside `public/images/projects/`.

## Author

**Putu Suarma Widiada, S.Kom.**  
Denpasar, Bali, Indonesia

- Email: [putusuarmawidiada18@gmail.com](mailto:putusuarmawidiada18@gmail.com)
- WhatsApp: [+62 813-5322-3507](https://wa.me/6281353223507)
- LinkedIn: [Putu Suarma Widiada](https://www.linkedin.com/in/putu-suarma-widiada-a395a7264/)

## License

This project is licensed under the [MIT License](LICENSE).
