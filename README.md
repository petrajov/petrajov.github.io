# Portfolio

Personal portfolio site built with React + Vite, deployed to GitHub Pages.

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
```

Edit your content in `src/data.js`. Styles live in `src/index.css`.

## Build

```bash
npm run build    # outputs to dist/
npm run preview  # preview the production build
```

## Deploy to GitHub Pages

1. Create a GitHub repo. For the root domain `https://<username>.github.io`, name it
   exactly `<username>.github.io`. Any other name is served at `https://<username>.github.io/<repo>/`.
2. Push this project to the `main` branch:
   ```bash
   git remote add origin https://github.com/<username>/<repo>.git
   git push -u origin main
   ```
3. In the repo, go to **Settings → Pages** and set **Source** to **GitHub Actions**.

Every push to `main` then builds and deploys automatically (see `.github/workflows/deploy.yml`).
