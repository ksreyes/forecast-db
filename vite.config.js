import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/forecast-db/',
  build: {
    outDir: 'build', // change from 'dist' to 'build'
  },
})
