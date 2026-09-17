import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Open the app in the default browser instead of VS Code's embedded preview.
export default defineConfig({
  plugins: [react()],
  server: {
    host: 'localhost',
    open: true,
  },
  preview: {
    host: 'localhost',
    open: true,
  },
})
