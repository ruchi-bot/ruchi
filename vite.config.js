import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/ruchi/',
  plugins: [react()],
  build: {
    assetsDir: 'assets'
  },
  css:{
    modules:{
      localConvention: "camelcase",
    },
  }
})
