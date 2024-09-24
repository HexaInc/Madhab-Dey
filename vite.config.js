import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Shortcut for src folder
    },
  },
  server: {
    port: 3000, // Custom port
    open: true, // Automatically open browser when server starts
    hmr: {
      overlay: false, // Disable error overlay
    },
  },
  build: {
    sourcemap: true, // Generate source maps for debugging
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'], // Separate vendor chunk for better caching
        },
      },
    },
  },
  envDir: './env', // Custom directory for environment variables
})

