import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 5173,
    host: '0.0.0.0'
  },
  preview: {
    port: 4173,
    allowedHosts: ['eventmgmt-frontend.onrender.com']
  },
  plugins: [
    react(),
    tailwindcss()
  ],
})
