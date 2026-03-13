import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
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
