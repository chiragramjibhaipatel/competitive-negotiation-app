import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        "star-rating": 'src/main.tsx',
      },
      output:{
        dir: "assets",
        chunkFileNames: "vite-[name].js",
        entryFileNames: "vite-[name].js",
        assetFileNames: "vite-[name].[ext]",
      }
    },
    watch : {},
    emptyOutDir: false
  }
})
