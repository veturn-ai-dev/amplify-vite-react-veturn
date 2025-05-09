import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  root: '.',
  base: '/',
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          mui: ['@mui/material', '@mui/icons-material'],
        }
      }
    },
    copyPublicDir: true
  },
  server: {
    port: 3000
  },
  optimizeDeps: {
    include: ['@aws-amplify/api-rest'],
    exclude: ['@rollup/rollup-linux-x64-gnu']
  }
})