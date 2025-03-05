import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { createHtmlPlugin } from 'vite-plugin-html'
import sitemap from 'vite-plugin-sitemap'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react() , tailwindcss(),
    createHtmlPlugin({
      inject: {
        data: {
          title: "Azixx - Official Website",
          description: "Welcome to Azixx's official website. Explore music, videos, and more.",
        },
      },
    }),
    sitemap({
      hostname: 'https://azixx.com',
      routes: [
        { url: '/', lastmod: new Date().toISOString() },
        { url: '/#music', lastmod: new Date().toISOString() },
        { url: '/#videos', lastmod: new Date().toISOString() },
      ],
    }),
  
  ],
  base: "./",
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: 'index.html'  // ✅ Ensure Vite knows where to start
    }
  },
  server: {
    historyApiFallback: true,
  },
})
