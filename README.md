# Petra Jović · Portfolio

My personal portfolio: selected work, case studies and experience as a senior frontend engineer.

Built with React and Vite, with no UI framework or router. Pages use hash routes (`#/work/<project>`, `#/about`), so the site runs as plain static files.

## Getting started

Requires Node.js 20.19+ or 22.12+.

```bash
npm install
npm run dev
```

The dev server runs at http://localhost:5173.

## Scripts

| Command           | Description                            |
| ----------------- | -------------------------------------- |
| `npm run dev`     | Start the dev server with hot reload   |
| `npm run build`   | Build the production site into `dist/` |
| `npm run preview` | Serve the production build locally     |
| `npm run lint`    | Lint the code with oxlint              |

## Project structure

```
public/
  illustrations/   Project illustrations (SVG)
  photo.jpg        Profile photo
  petra-jovic-cv.pdf
src/
  data.js          All site content: profile, projects, experience, about
  App.jsx          Pages and components
  index.css        Styles and design tokens
```

Content lives in `src/data.js`, separate from the components, so text and projects can change without touching the layout.
