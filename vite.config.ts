import { defineConfig } from 'vite'
import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['/icons/car.png', '/icons/car.png'], // icons etc
      manifest: {
        name: 'My PWA App',
        short_name: 'PWA App',
        description: 'This is a PWA built with Vite + React',
        theme_color: '#000000',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: '/icons/car.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/icons/car.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
    
  ],
  
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
