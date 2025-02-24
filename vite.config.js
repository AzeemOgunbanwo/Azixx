import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react() , tailwindcss()],
  base: "/Azixx/",
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
