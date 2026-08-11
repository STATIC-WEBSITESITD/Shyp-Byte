import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Same as jdic / nodemailer.txt notes:
// - Vite serves UI on :5173
// - vercel dev serves /api on :3000
// - proxy forwards /api from Vite to Vercel
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
      interval: 1000,
    },
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'three': ['three', '@react-three/fiber', '@react-three/drei'],
          'animation': ['gsap', '@gsap/react', 'aos'],
          'ui': ['bootstrap', 'swiper', 'react-slick', 'slick-carousel'],
        },
      },
    },
    chunkSizeWarningLimit: 550,
  },
})
