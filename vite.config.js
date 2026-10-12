import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// base: './' makes asset paths relative, so the build works both at
// https://<username>.github.io/ and at https://<username>.github.io/<repo>/
export default defineConfig({
  plugins: [react()],
  base: './',
})
