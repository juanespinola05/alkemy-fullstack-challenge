import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteSvgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteSvgr()],
  server: {
    proxy: {
      '/api': {
        target: 'https://finance-api-juanse.herokuapp.com',
        changeOrigin: true,
        secure: false,
        ws: true
      }
    },
    port: 8081
  }
})
