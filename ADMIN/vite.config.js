import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server : {
    host : "0.0.0.0",
    port : 5000,
    allowedHosts : ['finalproject-6-dwx9.onrender.com']
  }
})
