# Athul K V — Portfolio

Single-page developer portfolio built with React + Vite + Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Opens at http://localhost:5173.

## Build

```bash
npm run build     # outputs to dist/
npm run preview   # serve the production build locally
```

## Editing content

All copy — profile, experience, projects, skills, education — lives in a single file:

```
src/data/content.js
```

Nothing else needs to be touched to update the site's text.

## Resume PDF

The "Resume" buttons link to `/Athul_KV_Resume.pdf`. Drop your PDF into `public/` with
exactly that filename:

```
public/Athul_KV_Resume.pdf
```

If the filename differs, update `profile.resume` in `src/data/content.js`.

## Deploy

**Vercel** — push to GitHub, import the repo, accept the detected defaults
(framework: Vite, build: `npm run build`, output: `dist`).

**Netlify** — same repo import; build command `npm run build`, publish directory `dist`.

Both are zero-config for this project; there is no backend or environment variable to set.

## Structure

```
src/
  App.jsx
  main.jsx
  index.css            design tokens (light + dark) and component classes
  data/content.js      ALL site copy
  components/
    Nav.jsx            sticky nav, scroll-spy, theme toggle, mobile sheet
    Hero.jsx
    Experience.jsx     timeline
    Projects.jsx       featured HRMS card + project cards
    Skills.jsx
    About.jsx          bio + education + certification
    Contact.jsx        contact cards with copy-to-clipboard
    Footer.jsx
    Section.jsx        shared section header/layout
    Reveal.jsx         scroll-into-view animation wrapper
```

## Notes

- Dark theme is the default; the toggle persists to `localStorage` and is applied
  before first paint (inline script in `index.html`) so there is no flash.
- All motion respects `prefers-reduced-motion`.
- There is no contact form — the site is fully static, so email/phone/profile links
  are used instead.
