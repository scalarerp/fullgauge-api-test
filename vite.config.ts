import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/fullgauge-api-test/',
  css: {
    preprocessorOptions: {
      scss: {
        // api: 'legacy',
        // api: 'modern-compiler',

        silenceDeprecations: ['legacy-js-api'],
      },
    },
  },
})
