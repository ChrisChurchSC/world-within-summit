import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/world-within-summit/',
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        v2: 'v2.html',
      },
    },
  },
})
