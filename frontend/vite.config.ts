import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: '.',
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      // Add platform-agnostic Rollup configuration
      external: ['@rollup/rollup-linux-x64-gnu'], // Explicitly exclude platform-specific binary
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          mui: ['@mui/material', '@mui/icons-material'],
        },
        // Add Node.js compatibility for Amplify's Linux environment
        format: 'es',
        exports: 'auto',
        interop: 'auto'
      },
      // Specify platform-neutral settings
      platform: 'neutral',
      treeshake: {
        preset: 'recommended',
        moduleSideEffects: false
      }
    },
    // Target Node.js 18 (matches Amplify environment)
    target: 'node18'
  },
  server: {
    port: 3000,
  },
  // Add global polyfills for Amplify's Linux environment
  define: {
    'process.platform': JSON.stringify('linux'),
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  }
})