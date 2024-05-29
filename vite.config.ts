import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components',
      '@containers': '/src/containers',
      '@providers': '/src/providers',
      '@api': '/src/api',
      '@consts': '/src/consts',
    }
  }
})
